'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const elementDiv = document.createElement('div');

  elementDiv.classList.add('notification', type);
  elementDiv.style.top = posTop + 'px';
  elementDiv.style.right = posRight + 'px';

  const header = document.createElement('h2');

  header.classList.add('title');
  header.textContent = title;

  const paragraph = document.createElement('p');

  paragraph.textContent = description;

  document.body.appendChild(elementDiv);
  elementDiv.append(header, paragraph);

  setTimeout(() => {
    elementDiv.style.display = 'none';
  }, 2000);
};

pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'success',
);

pushNotification(
  150,
  10,
  'Title of Error message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'error',
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'warning',
);
