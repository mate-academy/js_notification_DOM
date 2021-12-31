'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  document.body.insertAdjacentHTML('afterbegin', `<div class="notification">
    <h2 class="${title}">${title}</h2><p>${description}</p></div>`);

  const box = document.querySelector('.notification');

  box.style.position = 'absolute';
  box.style.top = `${posTop}px`;
  box.style.right = `${posRight}px`;
  box.style.margin = '10px';
  box.style.width = '400px';
  box.style.borderRadius = '10px';
  box.style.paddingLeft = '20px';

  if (type === 'success') {
    box.style.backgroundColor = '#c5dcba';
  }

  if (type === 'error') {
    box.style.backgroundColor = '#e3b7b3';
  }

  if (type === 'warning') {
    box.style.backgroundColor = '#eee5c3';
  }

  setTimeout(() => {
    box.remove();
  }, 2000);
};

pushNotification(10, 10, 'Title of Success message', 'Message example.\n '
+ 'Notification should contain title and description.', 'success');

pushNotification(150, 10, 'Title of Error message', 'Message example.\n '
+ 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message', 'Message example.\n '
+ 'Notification should contain title and description.', 'warning');
