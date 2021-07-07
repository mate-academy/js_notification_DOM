'use strict';

const body = document.querySelector('body');

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  const titleText = document.createElement('h2');
  const text = document.createElement('p');

  notification.classList.add('notification');
  notification.classList.add(`${type}`);

  titleText.classList.add('title');
  titleText.innerText = title;
  text.innerText = description;

  titleText.style.fontSize = '18px';
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  notification.append(titleText);
  notification.append(text);
  body.append(notification);

  window.setTimeout(function() {
    notification.remove();
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
