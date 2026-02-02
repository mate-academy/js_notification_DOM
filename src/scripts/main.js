'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');
  const messageTitle = document.createElement('h2');
  const messageDescription = document.createElement('p');

  messageTitle.textContent = title;
  messageDescription.textContent = description;
  message.classList.add('notification');
  message.classList.add(type);
  messageTitle.classList.add('title');
  message.append(messageTitle, messageDescription);

  const lastAddedElement = document.body.lastElementChild;

  if (lastAddedElement.classList.contains('notification')) {
    const previousElementStyles = getComputedStyle(lastAddedElement);
    const previousBottom =
      parseFloat(previousElementStyles.top) +
      parseFloat(previousElementStyles.height) +
      10;

    message.style.top = previousBottom + 'px';
  }
  document.body.append(message);
  setTimeout(hideMessage, 2000, message);
};

function hideMessage(message) {
  message.style.display = 'none';
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
