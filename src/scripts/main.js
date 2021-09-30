'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const div = document.createElement('div');

  switch (type) {
    case 'success' :
      div.classList = 'notification success';
      break;
    case 'warning' :
      div.classList = 'notification warning';
      break;
    case 'error' :
      div.classList = 'notification error';
      break;
  }
  body.append(div);

  const h2 = document.createElement('h2');

  h2.className = 'title';
  h2.innerText = title;
  div.prepend(h2);

  const p = document.createElement('p');

  p.innerText = description;
  div.append(p);

  div.style.top = `${posTop}px`;
  div.style.right = `${posRight}px`;
};

setTimeout(() => {
  const div = document.querySelectorAll('div');

  [...div].forEach(item => item.remove());
}, 2000);

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(180, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(320, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
