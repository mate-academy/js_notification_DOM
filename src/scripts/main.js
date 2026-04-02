'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const createDiv = document.createElement('div');

  createDiv.classList.add('notification', type);

  const titleDiv = document.createElement('h2');

  titleDiv.classList.add('title');

  titleDiv.textContent = title;
  createDiv.appendChild(titleDiv);

  const textDiv = document.createElement('p');

  textDiv.innerHTML = description.replace('\n', '<br>');
  createDiv.appendChild(textDiv);

  createDiv.style.top = posTop + 'px';
  createDiv.style.right = posRight + 'px';

  document.body.appendChild(createDiv);

  setTimeout(() => {
    createDiv.style.display = 'none';
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
