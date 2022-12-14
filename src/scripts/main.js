'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const workArea = document.querySelector('body');
  const element = document.createElement('div');

  element.className = `notification ${type}`;
  element.style.top = `${posTop}px`;
  element.style.right = `${posRight}px`;

  element.insertAdjacentHTML(
    'afterbegin',

    `<h2 style=font-size:22px; class=${title}>${title}</h2>
    <p>${description}</p>`
  );

  workArea.append(element);

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
