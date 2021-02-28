'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const msgElement = document.createElement('div');
  const msgTitle = document.createElement('h2');
  const msgDescription = document.createElement('p');

  msgDescription.innerText = description;
  msgElement.classList.add('notification', type);
  msgElement.style.top = posTop + 'px';
  msgElement.style.right = posRight + 'px';
  msgTitle.classList.add('title');

  msgTitle.textContent = title;
  msgElement.append(msgTitle, msgDescription);
  document.body.append(msgElement);
  window.setTimeout(() => msgElement.remove(), 2000);
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
