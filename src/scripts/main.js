'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const box = document.createElement('div');
  const heading = document.createElement('h2');
  const paragraph = document.createElement('p');

  heading.textContent = title;
  heading.className = 'title';
  paragraph.textContent = description;
  box.classList.add('notification', type);

  document.body.append(box);
  box.append(heading);
  box.append(paragraph);

  box.style.top = `${posTop}px`;
  box.style.right = `${posRight}px`;

  setTimeout(() => box.remove(), 2000);
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
