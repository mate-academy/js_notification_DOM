'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const div = document.createElement('div');

  div.setAttribute('class', 'notification');
  div.style.top = `${posTop}px`;
  div.style.right = `${posRight}px`;

  const newTitle = document.createElement('h2');

  newTitle.setAttribute('class', 'title');
  newTitle.textContent = title;

  const newDescription = document.createElement('p');

  newDescription.textContent = description;

  div.appendChild(newTitle);
  div.appendChild(newDescription);

  if (type === 'success') {
    div.classList.add('success');
  }

  if (type === 'error') {
    div.classList.add('error');
  }

  if (type === 'warning') {
    div.classList.add('warning');
  }

  document.body.appendChild(div);

  setTimeout(() => {
    div.style.display = 'none';
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
