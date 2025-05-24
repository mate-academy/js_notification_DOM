'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const messageAlert = document.createElement('div');

  messageAlert.classList.add('notification', type);

  const titleAlert = document.createElement('h2');

  titleAlert.classList.add('title');
  messageAlert.append(titleAlert);

  const titleText = title;

  titleAlert.textContent = titleText;

  const descriptionAlert = document.createElement('p');
  const descriptionText = description;

  messageAlert.append(descriptionAlert);
  descriptionAlert.textContent = descriptionText;
  document.body.appendChild(messageAlert);

  messageAlert.style.position = 'absolute';
  messageAlert.style.top = posTop + 'px';
  messageAlert.style.right = posRight + 'px';

  setTimeout(() => {
    messageAlert.style.display = 'none';
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
