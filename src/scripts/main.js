'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const element = document.querySelector('body');

  const div = document.createElement('div');

  div.classList.add('notification', `${type}`);
  div.style.cssText = `top:${posTop}px; right:${posRight}px;`;
  element.append(div);

  const divSelect = document.querySelector(`.${type}`);

  const h2 = document.createElement('h2');

  h2.classList.add('title');
  h2.textContent = `${title}`;
  divSelect.append(h2);

  const p = document.createElement('p');

  p.textContent = `${description}`;
  divSelect.append(p);

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
