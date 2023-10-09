function queryElement(query) {
  return document.querySelector(query);
}

function queryAllElement(query) {
  return document.querySelectorAll(query);
}

const setLocalStorage = (name, value) => {
  window.localStorage.setItem(name, JSON.stringify(value));
};

const getLocalStorage = (name) => {
  return JSON.parse(window.localStorage.getItem(name));
};

export { setLocalStorage, getLocalStorage, queryAllElement, queryElement };
