'use strict';

const firstChild = document.body.firstElementChild;

const pushNotification = (posTop, posRight, title, description, type) => {
  const createMessage = document.createElement('div');
  const createTitle = document.createElement('h2');
  const createTextMessage = document.createElement('p');

  firstChild.insertAdjacentElement('afterend', createMessage);
  createMessage.classList.add('notification');
  createMessage.classList.add(`${type}`);
  createMessage.style.top = posTop + 'px';
  createMessage.style.right = posRight + 'px';

  createMessage.append(createTitle);
  createTitle.classList.add('title');
  createTitle.insertAdjacentText('afterbegin', title);

  createMessage.append(createTextMessage);
  createTextMessage.insertAdjacentText('afterbegin', description);

  setTimeout(() => {
    createMessage.remove();
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
