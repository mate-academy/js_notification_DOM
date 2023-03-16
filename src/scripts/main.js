'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const container = document.createElement('div');
  const heading = document.createElement('h2');
  const paragraph = document.createElement('p');

  document.body.append(container);
  container.className = `notification  ${type}`;
  container.style.top = `${posTop}px`;
  container.style.right = `${posRight}px`;
  container.append(heading, paragraph);

  heading.className = 'title';
  heading.textContent = title;

  paragraph.textContent = description;

  setTimeout(() => container.remove(), 2000);
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
