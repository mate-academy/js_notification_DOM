'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const script = body.querySelector('script');
  const notification = document.createElement('div');

  notification.className = `notification ${type}`;
  body.insertBefore(notification, script);

  const h2 = document.createElement('h2');

  notification.append(h2);
  h2.className = 'title';
  h2.innerHTML = title;

  const paragraph = document.createElement('p');

  paragraph.innerHTML = description;
  notification.append(paragraph);

  const message = document.querySelector(`.${type}`);

  message.style.top = posTop + 'px';
  message.style.right = posRight + 'px';
};

setTimeout(() => {
  pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');
}, 1500);

setTimeout( () => {
  pushNotification(150, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');
}, 3000);

setTimeout(() => {
  pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
}, 4000);
