'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const massege = document.createElement('div');
  const massegeTitle = document.createElement('h2');
  const textDescription = document.createElement('p');

  massege.style.top = `${posTop}px`;
  massege.style.right = `${posRight}px`;

  massege.className = `notification ${type}`;
  massegeTitle.className = 'title';
  massegeTitle.textContent = `${title}`;
  textDescription.textContent = `${description}`;

  document.body.append(massege);
  massege.append(massegeTitle, textDescription);

  setTimeout(() => massege.remove(), 2000);
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
