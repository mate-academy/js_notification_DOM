'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notice = document.createElement('div');

  notice.className = `notification ${type}`;
  notice.style.top = `${posTop}px`;
  notice.style.right = `${posRight}px`;

  notice.insertAdjacentHTML('afterbegin',
    `<h2 class = 'title'>${title}</h2>
    <p>${description}</p>`
  );

  document.querySelector('body').append(notice);

  setTimeout(() => {
    notice.remove();
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
