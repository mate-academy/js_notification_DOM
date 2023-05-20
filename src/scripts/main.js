'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const pushNotify = document.createElement('div');
  const titleH2 = document.createElement('h2');
  const text = document.createElement('p');

  pushNotify.style.top = `${posTop}px`;
  pushNotify.style.right = `${posRight}px`;

  titleH2.textContent = title;
  text.textContent = description;

  pushNotify.classList.add('notification');
  titleH2.classList.add('title');
  pushNotify.classList.add(type);

  pushNotify.append(titleH2);
  pushNotify.append(text);
  body.append(pushNotify);

  setTimeout(() => {
    document.body.removeChild(pushNotify);
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
