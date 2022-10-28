'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.body;
  const div = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  h2.innerText = title;
  p.innerText = description;
  notification.append(div);
  div.append(h2);
  h2.append(p);

  div.classList.add('notification', `${type}`);
  h2.classList.add(`title`);
  p.style = `font-weight: normal;`;

  div.style.top = `${posTop}px`;
  div.style.right = `${posRight}px`;

  const remove = () => div.remove();

  setTimeout(remove, 3000);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(200, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(360, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
