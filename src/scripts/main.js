'use strict';

let count = 0;

const pushNotification = (posTop, posRight, title, description, type) => {
  const getBody = document.querySelector('body');

  const div = document.createElement('div');
  div.className = `notification ${type}`;
  getBody.append(div);

  const notification = document.querySelectorAll('.notification')[count];

  const titleTag = document.createElement('h2');
  titleTag.className = '.title';
  notification.append(titleTag);
  notification.firstChild.textContent = title;

  const p = document.createElement('p');
  notification.append(p);
  notification.lastElementChild.textContent = description;

  notification.style.top = `${parseFloat(posTop)}px`;
  notification.style.right = `${parseFloat(posRight)}px`;

  const titleClass = document.getElementsByClassName('.title')[count];
  titleClass.style.fontSize = '20px';

  setTimeout(() => {
    notification.remove();
  }, 2000);

  count++;
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
