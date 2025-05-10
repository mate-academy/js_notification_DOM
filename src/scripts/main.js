'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');

  message.classList.add('notification');
  message.classList.add(type);

  const messageTitle = document.createElement('h2');
  const text = document.createElement('p');

  messageTitle.classList.add('title');
  messageTitle.textContent = title;
  text.textContent = description;

  message.append(messageTitle);
  message.append(text);

  message.style.top = `${posTop}px`;
  message.style.right = `${posRight}px`;

  document.body.appendChild(message);

  setTimeout(() => {
    message.style.opacity = '0';
    message.style.transition = 'opacity 0.3s';

    setTimeout(() => {
      if (message.parentElement) {
        message.parentElement.removeChild(message);
      }
    }, 300); // wait for fade-out to complete
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
