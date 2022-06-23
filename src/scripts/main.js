'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const main = document.querySelector('body');
  const element = document.createElement('div');
  const elemTitle = document.createElement('h2');
  const elemDescription = document.createElement('p');

  element.style.boxSizing = `content-box`;
  element.style.top = `${posTop}px`;
  element.style.right = `${posRight}px`;
  element.classList.add('notification', type);

  elemTitle.textContent = title;
  elemTitle.className = 'title';

  elemDescription.textContent = description;
  elemDescription.style.whiteSpace = 'pre-line';

  element.append(elemTitle);
  element.append(elemDescription);
  main.append(element);

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
