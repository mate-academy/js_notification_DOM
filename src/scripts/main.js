'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const logoH1 = document.querySelector('h1');
  const msg = document.createElement('div');

  msg.className = `notification ${type}`;
  msg.innerHTML = `<h2 class = 'title'>${title}</h2><p>${description}</p>`;
  msg.style.top = `${posTop}px`;
  msg.style.right = `${posRight}px`;
  logoH1.after(msg);

  setTimeout(() => msg.remove(), 2000);
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
