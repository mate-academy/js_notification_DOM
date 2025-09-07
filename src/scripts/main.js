'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  console.log(type);

  const body = document.querySelector('body');
  const bodyOfMessage = document.createElement('div');
  const titleOfMessage = document.createElement('h2');
  const infoOfMessage = document.createElement('p');

  titleOfMessage.classList += 'title ';
  bodyOfMessage.classList += 'notification ';

  titleOfMessage.textContent = title;
  infoOfMessage.textContent = description;

  bodyOfMessage.style.top = `${posTop}px`;
  bodyOfMessage.style.right = `${posRight}px`;

  bodyOfMessage.appendChild(titleOfMessage);
  bodyOfMessage.appendChild(infoOfMessage);
  body.appendChild(bodyOfMessage);

  if (type === 'success') {
    bodyOfMessage.classList += 'success';
  } else if (type === 'warning') {
    bodyOfMessage.classList += 'warning';
  } else {
    bodyOfMessage.classList += 'error';
  }

  setTimeout(() => {
    bodyOfMessage.style.display = 'none';
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
