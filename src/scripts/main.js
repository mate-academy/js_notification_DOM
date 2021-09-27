'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const div = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  if (type === 'success') {
    setTimeout(() => {
      div.remove();
    }, 2000);
  }

  if (type === 'error') {
    setTimeout(() => {
      div.remove();
    }, 4000);
  }

  if (type === 'warning') {
    setTimeout(() => {
      div.remove();
    }, 6000);
  }
  
  h2.innerText = title;
  h2.className = 'title';
  p.innerText = description;
  div.className = type;
  div.classList.add('notification');
  div.append(h2);
  div.append(p);
  div.style.top = `${posTop}px`;
  div.style.right = `${posRight}px`;

  body.append(div);
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
