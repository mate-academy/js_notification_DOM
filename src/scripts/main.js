'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const element = document.createElement('div');
  const elTitle = document.createElement('h2');
  const elPar = document.createElement('p');

  element.style.top = `${posTop}px`;
  element.style.right = `${posRight}px`;
  element.classList.add('notification', type);

  elTitle.classList.add('title');
  elTitle.innerHTML = title;

  elPar.innerHTML = description;

  element.append(elTitle, elPar);

  setTimeout(() => {
    document.body.append(element);
  }, 1000);

  setTimeout(() => {
    element.remove();
  }, 13000);
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
