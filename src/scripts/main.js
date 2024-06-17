'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // creating div, h2 and p
  const message = document.createElement('div');
  const titleElement = document.createElement('h2');
  const descriptionElement = document.createElement('p');

  // setting styles and classnames for notification
  message.classList.add('notification', type);
  message.style.top = `${posTop}px`;
  message.style.right = `${posRight}px`;
  message.style.fontFamily = 'inherit';
  message.style.width = 'auto';

  // setting styles and classname for title
  titleElement.className = 'title';
  titleElement.textContent = title;
  descriptionElement.textContent = description;

  // setting background color for notification
  if (type === 'success') {
    message.style.backgroundColor = '#ACE1AF';
  } else if (type === 'error') {
    message.style.backgroundColor = '#fd5c63';
  } else if (type === 'warning') {
    message.style.backgroundColor = '#F0E68C';
  }

  // nesting
  message.appendChild(titleElement);
  message.appendChild(descriptionElement);

  // appending message on a website
  document.body.appendChild(message);

  setTimeout(() => {
    message.remove();
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
