'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const element = document.createElement('div');

  element.style.top = `${posTop}px`;

  element.style.right = `${posRight}px`;

  element.style.boxSizing = 'content-box';
  element.classList.add('notification');
  element.classList.add(type);

  const elementTitle = document.createElement('h2');

  elementTitle.classList.add('title');
  elementTitle.innerText = title;
  elementTitle.style.whiteSpace = 'nowrap';
  element.append(elementTitle);

  const elementDescription = document.createElement('p');

  elementDescription.innerText = description;
  element.append(elementDescription);
  body.append(element);

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
