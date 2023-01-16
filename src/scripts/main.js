'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');

  message.classList.add('notification', type);
  message.style.top = posTop + 'px';
  message.style.right = posRight + 'px';

  const titleElem = document.createElement('h2');

  titleElem.classList.add('title');
  titleElem.textContent = title;

  document.documentElement.append(message);
  message.append(titleElem);
  message.insertAdjacentHTML('beforeend', `<p>${description}</p>`);

  setTimeout(() => {
    message.style.display = 'none';
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
