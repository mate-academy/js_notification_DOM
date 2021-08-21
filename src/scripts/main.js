'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const element = document.querySelector('body');

  const card = document.createElement('div');

  card.style.top = `${posTop}px`;
  card.style.right = `${posRight}px`;
  card.classList.add('notification');
  card.classList.add(type);
  card.innerHTML = `
    <h2 class='title'>${title}</h2>
    <p>${description}</p>
  `;

  element.append(card);

  setTimeout(() => {
    card.remove();
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
