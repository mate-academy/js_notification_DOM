'use strict';

function createElem(parentNode, nodeType) {
  const elem = document.createElement(nodeType);

  parentNode.appendChild(elem);

  return elem;
}

function createMsgBlock(title, description, type) {
  const elemMsg = document.createElement('div');
  const elemTitle = createElem(elemMsg, 'h2');
  const elemDescr = createElem(elemMsg, 'p');

  elemMsg.classList.add('notification');
  elemMsg.classList.add(type);
  elemMsg.style.boxSizing = 'border-box';
  elemTitle.classList.add('title');
  elemTitle.innerText = title;
  elemDescr.innerText = description;

  return elemMsg;
}

const pushNotification = (posTop, posRight, title, description, type) => {
  const msg = createMsgBlock(title, description, type);

  document.body.appendChild(msg);
  msg.style.boxSizing = '';
  msg.style.top = `${posTop}px`;
  msg.style.right = `${posRight}px`;
  setTimeout(() => document.body.removeChild(msg), 2000);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(150, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
