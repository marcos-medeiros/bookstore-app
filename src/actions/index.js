import bookActions from './actionTypes';

const { CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER } = bookActions;

const createBook = book => ({ type: CREATE_BOOK, book });

const removeBook = book => ({ type: REMOVE_BOOK, book });

const changeFilter = filter => ({ type: CHANGE_FILTER, filter });

export { createBook, removeBook, changeFilter };
