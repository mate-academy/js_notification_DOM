'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const body = document.querySelector('body');
  const div = document.createElement('div');
  const newTitle = document.createElement('title');
  const p = document.createElement('p');

  div.classList = 'notification' + ` ${type}`;
  div.style.top = `${posTop}px`;
  div.style.right = `${posRight}px`;

  newTitle.className = 'title';

  newTitle.textContent = title;
  p.innerText = description;

  body.children[0].after(div);
  div.append(newTitle);
  div.append(p);
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
