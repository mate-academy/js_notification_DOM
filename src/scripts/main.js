'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // creating elements
  const message = document.createElement('div');
  const msgTitle = document.createElement('h2');
  const msgDescription = document.createElement('p');

  // getting the body element
  const body = document.querySelector('body');

  // setting elements content
  message.className = `notification ${type}`;
  msgTitle.className = 'title';
  msgTitle.textContent = title;
  msgDescription.textContent = description;

  // styling the positon of the message
  message.style.top = posTop + 'px';
  message.style.right = posRight + 'px';

  // appending content to the message
  message.append(msgTitle, msgDescription);

  // appending message to the body
  body.append(message);

  // message disappear
  setTimeout(() => {
    message.style.display = 'none';
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
