'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const wrapperElement = document.createElement('div');
  const titleElement = document.createElement('h2');

  body.append(wrapperElement);
  body.style.position = 'relative';

  wrapperElement.className = 'notification';
  wrapperElement.classList.add(type);


  wrapperElement.style.position = 'absolute';
  wrapperElement.style.top = `${posTop}px`;
  wrapperElement.style.right = `${posRight}px`;

  titleElement.className = 'title';
  titleElement.textContent = title;

  wrapperElement.append(titleElement);

  const descriptionElement = document.createElement('p');

  descriptionElement.textContent = description;

  wrapperElement.append(descriptionElement);
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
