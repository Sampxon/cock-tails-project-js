const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) {
    console.log('exported');
    return element;
  } else {
    throw new Error(`there's an error with selection`);
  }
};

export {getElement} 