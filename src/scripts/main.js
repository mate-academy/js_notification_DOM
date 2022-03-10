'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const someAlert = document.querySelector('body');

  const newEl = document.createElement('div');

  someAlert.style.position = 'relative';

  newEl.style.top = `${posTop}px`;
  newEl.style.right = `${posRight}px`;
  newEl.classList = `notification  ${type}`;

  newEl.innerHTML = `<h2 clas="notification title">${title}</h2>
  <p>${description}</p>`;

  someAlert.append(newEl);

  setTimeout(() => {
    newEl.style.opacity = 0;
    newEl.style.transition = '0.3s';
  }, 2000);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(170, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(310, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
