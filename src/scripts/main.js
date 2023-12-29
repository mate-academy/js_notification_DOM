'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const container = document.createElement('div');
  const newDescription = document.createElement('p');
  const titleWarning = document.createElement('h2');

  titleWarning.textContent = title;
  titleWarning.classList.add('title');
  newDescription.textContent = description;

  container.appendChild(titleWarning);
  container.appendChild(newDescription);
  container.classList.add('notification', type);

  container.style.top = posTop + 'px';
  container.style.right = posRight + 'px';

  document.body.appendChild(container);

  setTimeout(() => {
    document.body.removeChild(container);
  }, 2000);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(150, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
