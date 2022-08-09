'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const element = document.createElement('div');
  const elementTitle = document.createElement('h2');
  const elementDescr = document.createElement('p');

  element.classList.add('notification', type);
  element.style.position = 'fixed';
  element.style.top = `${posTop}px`;
  element.style.right = `${posRight}px`;
  elementTitle.classList.add('title');
  elementTitle.textContent = title;
  elementDescr.textContent = description;

  element.append(elementTitle, elementDescr);
  document.body.append(element);

  setTimeout(() => {
    element.remove();
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
