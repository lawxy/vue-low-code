const formElements = {
  value: [1,2]
}

const moveElement = (fromIndex, toIndex) => {
  if (fromIndex < toIndex) {
    toIndex--;
  }
  const [el] = formElements.value.splice(fromIndex, 1);
  formElements.value.splice(toIndex, 0, el);
  // setSelectedElement(el)
}
moveElement(1, 0)
console.log(formElements)