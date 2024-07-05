'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const messageElem = document.createElement('div');
  const titleEl = document.createElement('h2');
  const descr = document.createElement('p');

  messageElem.classList.add('notification', type);
  messageElem.style.top = posTop + 'px';
  messageElem.style.right = posRight + 'px';

  titleEl.textContent = title;
  titleEl.style.whiteSpace = 'nowrap';
  titleEl.classList.add('title');

  descr.textContent = description;

  messageElem.append(titleEl);
  messageElem.append(descr);

  document.querySelector('body')?.append(messageElem);

  setTimeout(() => {
    messageElem.style.visibility = 'hidden';
  }, 200000);
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
