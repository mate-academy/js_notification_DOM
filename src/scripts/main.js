'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.body;

  const div = getMessage(title, description, type);

  body.append(div);

  div.style.top = `${posTop}px`;
  div.style.rigth = `${posRight}px`;
  setTimeout(() => div.remove(), 2000);
};

function getMessage(title, description, type) {
  const msgBlock = document.createElement('div');

  msgBlock.classList.add('notification');

  const titleMsg = document.createElement('h2');

  titleMsg.classList.add('title');
  titleMsg.textContent = `${title}`;

  const desc = document.createElement('p');

  desc.innerText = `${description}`;
  msgBlock.append(titleMsg, desc);

  msgBlock.className += ` ${type}`;

  return msgBlock;
}

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
