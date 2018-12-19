export const getTodoList = store => store.todoList;

export const getTodoById = (store, id) => ({ ...store.todoMap[id], id });

/**
 * example of a slightly more complex selector
 * select from store combining information from multiple reducers
 */
export const getTodos = store =>
  getTodoList(store).map(id => getTodoById(store, id));
