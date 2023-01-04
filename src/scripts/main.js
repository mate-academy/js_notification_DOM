'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');
  const titleMess = document.createElement('h2');
  const descriptionMess = document.createElement('p');

  message.classList.add('notification', type);
  titleMess.classList.add('title');
  titleMess.style.fontSize = '18px';

  message.style.top = `${posTop}px`;
  message.style.right = `${posRight}px`;

  titleMess.innerText = title;
  descriptionMess.innerText = description;

  message.append(titleMess, descriptionMess);
  document.body.append(message);

  setTimeout(() => {
    message.remove();
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
