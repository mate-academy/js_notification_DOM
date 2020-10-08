'use strict';

const pushNotification = (top, right, title, description, type) => {
  const message = document.createElement('div');
  const messageTitle = document.createElement('h2');
  const messageDescription = document.createElement('p');

  message.className = `notification ${type}`;
  message.style.top = `${top}px`;
  message.style.right = `${right}px`;

  messageTitle.className = 'title';
  messageTitle.textContent = title;

  messageDescription.textContent = description;

  message.append(messageTitle);
  message.append(messageDescription);
  document.body.append(message);

  setTimeout(() => message.remove(), 2000);
};

pushNotification(
  10,
  10,
  'Don\'t press MA logo!',
  'If you are really curious you can press it. But I warned you.',
  'warning'
);

const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
  pushNotification(
    10,
    10,
    'I told you DON\'T PRESS!!!',
    'People never listen to me. This logo doesn\'t do anything here.',
    'error'
  );
});
