'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const h2 = document.createElement('h2');

  h2.classList.add('title');
  h2.textContent = title;

  const p = document.createElement('p');

  p.textContent = description;

  const mes = document.createElement('div');

  mes.classList.add('notification', type);
  mes.style.top = `${posTop}px`;
  mes.style.right = `${posRight}px`;
  mes.append(h2, p);

  document.body.append(mes);

  setTimeout(() => {
    mes.remove();
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
