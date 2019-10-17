import { type } from "os";

function createElement(name, props, innerContent) {
  const elm = document.createElement(name);

  for(let prop in props) {
    if(typeof prop === 'object')
      Object.assign(elm[prop], props[prop]);
    else
      elm[prop] = props[prop];
  }

  if(innerContent) {

    if (typeof innerContent !== 'object')
      elm.appendChild(document.createTextNode(innerContent));
    else {
      if(innerContent instanceof Array) {
        for(let item of innerContent) {
          let append = item instanceof Node ? item : document.createTextNode(item);
          elm.appendChild(append)
        }
      }
      else
        elm.appendChild(innerContent);
    }

  }

  return elm;
}

function render(component, container) {
  return container.appendChild(component);
}

const React = {
  createElement,
  render,
};

const app = React.createElement(
  'div',
  { style: { backgroundColor: 'red' } },
  [
    React.createElement('span', undefined, 'Hello world'),
    React.createElement('br'),
    'This is just a text node',
    React.createElement('div', { textContent: 'Text content' }),
  ],
);
Object.assign(app.style, {backgroundColor: 'red'})
React.render(app, document.getElementById('app'));
