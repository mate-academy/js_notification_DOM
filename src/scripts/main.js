'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const element1 = document.createElement('div');
  const title1 = document.createElement('h2');
  const descriptions = document.createElement('p');

  element1.append(title1);
  element1.append(descriptions);
  title1.classList.add('title');
  element1.classList.add('notification');
  element1.classList.add(type);
  title1.textContent = title;
  descriptions.textContent = description;
  element1.style.top = posTop + 'px';
  element1.style.right = posRight + 'px';
  document.body.append(element1);

  setTimeout(() => {
    element1.style.display = 'none';
  }, 200);
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
