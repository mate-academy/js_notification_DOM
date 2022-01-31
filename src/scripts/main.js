'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');
  const header = document.createElement('h3');
  const text = document.createElement('p');

  message.className = 'notification';
  header.innerHTML = title;
  message.append(header);
  text.innerHTML = description;
  message.append(text);
  document.body.append(message);

  message.style.top = posTop + 'px';
  message.style.right = posRight + 'px';

  switch (type) {
    case 'success':
      message.classList.add('success');
      break;

    case 'error':
      message.classList.add('error');
      break;

    case 'warning':
      message.classList.add('warning');
      break;
  }

  setTimeout(() => message.remove(), 2000);
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
