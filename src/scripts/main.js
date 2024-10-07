'use strict';

const ROOT = document.querySelector('body');

const createDomNode = (type, classes) => {
  const domNode = document.createElement(type);

  domNode.classList.add(...classes);

  return domNode;
};

const createTexNode = (type, classes, text) => {
  const textNode = createDomNode(type, [classes]);

  textNode.textContent = text;

  return textNode;
};

const pushNotification = (posTop, posRight, title, description, type) => {
  const container = createDomNode('div', ['notification', type]);
  const _title = createTexNode('h2', ['title'], title);
  const _description = createTexNode('p', ['description'], description);

  container.style.top = `${posTop}px`;
  container.style.right = `${posRight}px`;

  container.append(_title, _description);
  ROOT.append(container);

  setTimeout(() => {
    container.style.display = 'none';
  }, 2000);
};

pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'success',
);

pushNotification(
  150,
  10,
  'Title of Error message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'error',
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'warning',
);
