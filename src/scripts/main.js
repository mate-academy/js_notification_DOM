'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const notification = document.createElement('div');
  const title1 = document.createElement('h2');
  const description1 = document.createElement('p');

  notification.classList.add('notification');
  notification.classList.add(type);
  title1.classList.add('title');
  title1.innerText = title;
  description1.innerHTML = description;
  body.append(notification);
  notification.append(title1);
  notification.append(description1);
  notification.style.top = `${posTop}px`;
  notification.style.right = `${posRight}px`;

  setTimeout(() => {
    notification.style.visibility = 'hidden';
  }, 1800);
};
const element = document.querySelector('.logo');

getComputedStyle(element);

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
