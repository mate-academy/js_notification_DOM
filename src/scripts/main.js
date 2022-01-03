'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const blockNotification = document.createElement('div');

  blockNotification.className = 'notification';

  blockNotification.classList.add(type);
  blockNotification.style.top = posTop + 'px';
  blockNotification.right = posRight;

  const titleNotif = document.createElement('h2');
  const parNotif = document.createElement('p');

  titleNotif.textContent = title;
  titleNotif.className = 'title';
  parNotif.textContent = description;

  const bodyElem = document.querySelector('body');

  blockNotification.append(titleNotif);
  blockNotification.append(parNotif);

  bodyElem.append(blockNotification);

  const removeNotif = () => {
    document.body.removeChild(blockNotification);
  };

  setTimeout(removeNotif, 2000);
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
