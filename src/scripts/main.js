'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const element = document.createElement('div');
  const titleEl = document.createElement('h2');
  const descriptionEl = document.createElement('p');

  element.setAttribute('class', `notification ${type}`);
  titleEl.setAttribute('class', 'title');
  titleEl.textContent = title;
  descriptionEl.textContent = description;
  element.appendChild(titleEl);
  element.appendChild(descriptionEl);
  element.style.position = 'absolute';
  element.style.top = posTop + 'px';
  element.style.right = posRight + 'px';
  document.body.appendChild(element);

  setTimeout(() => {
    element.style.display = 'none';
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
