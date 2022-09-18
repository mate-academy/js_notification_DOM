'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const massage = document.createElement('div');

  massage.classList.add('notification');
  massage.classList.add(type);
  massage.style.right = `${posRight}px`;
  massage.style.top = `${posTop}px`;
  massage.style.transition = `opacity 0.5s`;

  massage.innerHTML = `
    <h2 class="title">${title}</h2>
    <p>${description}</p>
  `;

  document.body.appendChild(massage);

  setTimeout(() => {
    massage.style.opacity = '0';
  }, 2000);

  setTimeout(() => {
    massage.remove();
  }, 2500);
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
