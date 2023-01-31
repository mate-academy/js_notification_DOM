'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const box = document.createElement('div');
  const head = document.createElement('h2');
  const paragraph = document.createElement('p');

  head.textContent = title;
  head.className = 'title';
  paragraph.textContent = description;
  box.classList.add('notification', type);

  box.style.top = `${posTop}px`;
  box.style.right = `${posRight}px`;
  head.style.whiteSpace = 'nowrap';

  box.append(head);
  box.append(paragraph);
  document.body.append(box);

  setTimeout(() => {
    box.remove();
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
