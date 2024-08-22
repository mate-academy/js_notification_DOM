'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const bodyElem = document.querySelector('body');
  const message = document.createElement('div');

  message.classList.add('notification');

  message.style.right = posRight + 'px';
  message.style.top = posTop + 'px';

  const msgTitle = document.createElement('h2');

  msgTitle.classList.add('title');
  msgTitle.innerHTML = title;

  const msgText = document.createElement('p');

  msgText.innerHTML = description;

  // msgText.innerHTML = description.replace(/\n/g, '<br>');

  message.classList.add(type);

  bodyElem.append(message);
  message.append(msgTitle);
  message.append(msgText);

  // setTimeout(() => (message.style.display = 'none'), 2000);
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
