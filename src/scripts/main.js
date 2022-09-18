'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const body = document.body;
  const messange = document.createElement('div');

  messange.className = `notification ${type}`;

  messange.innerHTML = `
  <h2 class="title">${title}</h2>
  <p>${description}</p>
`;
  messange.style.right = `${posRight}px`;
  messange.style.top = `${posTop}px`;
  body.append(messange);

  setTimeout(() => {
    body.removeChild(messange);
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
