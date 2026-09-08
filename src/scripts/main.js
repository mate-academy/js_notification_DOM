'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');

  message.setAttribute('class', `notification ${type}`);

  const messageTitle = document.createElement('h2');

  messageTitle.setAttribute('class', 'title');

  const text = document.createElement('p');

  message.style.top = posTop + 'px';
  message.style.right = posRight + 'px';
  messageTitle.textContent = title;
  text.textContent = description;

  document.body.appendChild(message);
  message.append(messageTitle);
  message.append(text);

  const action = setTimeout(() => {
    if (type) {
      message.style.display = 'none';
    }
  }, 2000);

  return action;
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
