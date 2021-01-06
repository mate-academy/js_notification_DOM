'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notific = document.createElement('div');
  const header = document.createElement('h2');
  const descr = document.createElement('p');

  document.body.append(notific);
  notific.append(header);
  notific.append(descr);

  notific.className = 'notification';
  notific.classList.add(type);
  notific.style.top = `${posTop}px`;
  notific.style.right = `${posRight}px`;
  notific.style.width = '332px';

  header.innerText = `${title}`;

  descr.innerText = `${description}`;

  setTimeout(() => {
    notific.remove();
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
