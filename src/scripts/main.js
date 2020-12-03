'use strict';

const pushNotification = (top, right, title, description, type) => {
  const div = document.createElement('div');

  div.classList.add('notification', type);
  div.innerHTML = `<h2>${title}</h2>` + `<p>${description}</p>`;
  div.style.right = `${right}px`;
  div.style.top = `${top}px`;
  document.body.append(div);

  setTimeout(() => {
    div.remove();
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
