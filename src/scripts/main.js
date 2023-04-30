'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const divElement = document.createElement('div');
  const h2Element = document.createElement('h2');
  const pElement = document.createElement('p');

  divElement.append(h2Element, pElement);
  divElement.style.top = `${posTop}px`;
  divElement.style.right = `${posRight}px`;
  divElement.classList.add('notification', type);

  document.body.append(divElement);

  h2Element.innerText = title;
  h2Element.classList.add('title');

  pElement.innerText = description;

  setTimeout(() => {
    divElement.remove();
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
