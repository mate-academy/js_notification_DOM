'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const div = document.createElement('div');
  div.className = 'notification';
  div.classList.add(type);
  div.style.position = 'absolute';
  div.style.top = `${posTop}px`;;
  div.style.right = `${posRight}px`;

  const h2 = document.createElement('h2');
  h2.className = 'title';
  h2.textContent = title;
  h2.style.color = 'black';
  h2.style.fontWeight = 800;

  const p = document.createElement('p');
  p.textContent = description;

  div.appendChild(h2);
  div.appendChild(p);

  document.body.appendChild(div);

  setTimeout(() => {
    div.style.display = 'none'; // Приховуємо елемент
  }, 2000);
};

pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'success',
);

pushNotification(
  150,
  10,
  'Title of Error message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'error',
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'warning',
);
