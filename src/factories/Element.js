/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
export default function Element(type, attributes, ...children) {
  const element = document.createElement(type);

  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }

  children.forEach((child) => {
    if (typeof child === 'string') {
      element.append(document.createTextNode(child));
    } else {
      element.append(child);
    }
  });

  return element;
}
