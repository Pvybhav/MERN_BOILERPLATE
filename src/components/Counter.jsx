import React from 'react'
import { Input, Label, Container } from 'semantic-ui-react';
import Axios from 'axios';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };
    this.handleCounter = this.handleCounter.bind(this);
  }

  componentDidMount = () => {
    Axios({
      method: "GET",
      url: "/api/counter/getCounterValue"
    }).then((res) => {
      if (res.data.length) {
        let number = res.data[0].number;
        this.setState({ number });
      }
    }).catch((err) => {
      console.log(err);
    });
  }
  handleCounter = counterHandler => {
    let { number } = this.state;
    counterHandler === "dec" ? number -= 1 : number += 1;
    this.setState({ number }, () => {
      const { number, id } = this.state;
      Axios({
        method: "POST",
        url: "/api/counter/updateCounterValue",
        data: {
          number,
          id
        }
      });
    });
  }
  render() {
    const { number } = this.state;
    return (
      <Container textAlign="center" id="counter-container">
        <Input labelPosition='right' type='text' placeholder='Amount' >
          <Label icon="minus" onClick={() => { this.handleCounter("dec") }} />
          <Input id="counter-input-box" value={number} />
          <Label icon="plus" onClick={() => { this.handleCounter("inc") }} />
        </Input>
      </Container>
    );
  }
}

export default Counter;