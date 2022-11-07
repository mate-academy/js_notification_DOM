'use strict';

const body = document.querySelector('body');

const pushNotification = (posTop, posRight, title, description, type) => {
  const elem = document.createElement('div');
  const messTitle = document.createElement('h2');
  const messDesc = document.createElement('p');

  elem.classList.add('notification', type);
  elem.style.top = posTop + 'px';
  elem.style.right = posRight + 'px';

  messTitle.className = 'title';
  messTitle.textContent = title;

  messDesc.textContent = description;

  elem.append(messTitle, messDesc);
  body.append(elem);

  setTimeout(() => {
    elem.remove();
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
