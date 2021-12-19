'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const message = document.createElement('div');
  const mainTitle = document.createElement('h2');
  const mainDescription = document.createElement('p');

  message.classList.add('notification');
  message.classList.add(`${type}`);
  mainTitle.classList.add('title');

  mainTitle.textContent = title;
  mainDescription.textContent = description;

  message.style.top = posTop + 'px';
  message.style.right = posRight + 'px';

  message.append(mainTitle, mainDescription);
  body.append(message);

  setTimeout(function() {
    message.style.display = 'none';
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
