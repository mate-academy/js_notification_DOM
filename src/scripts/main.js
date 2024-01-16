'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');

  notification.className = 'notification' + type;
  notification.style.position = 'absolute';
  notification.style.padding = '15px';

  if (type === 'success') {
    notification.style.backgroundColor = 'lightgreen';
  } else if (type === 'error') {
    notification.style.backgroundColor = 'lightcoral';
  } else if (type === 'warning') {
    notification.style.backgroundColor = 'lightyellow';
  }
  notification.style.top = posTop + 'px';
  notification.style.right = posRight + 'px';
  notification.style.borderRadius = '8px';
  notification.style.border = '1px';
  notification.style.borderColor = 'black';

  const theTitle = document.createElement('h2');

  theTitle.className = 'title';
  theTitle.textContent = title;

  const theDescrition = document.createElement('p');

  theDescrition.textContent = description;

  notification.appendChild(theTitle);
  notification.appendChild(theDescrition);

  document.body.appendChild(notification);

  setTimeout(() => {
    document.body.removeChild(notification);
  }, 2000);
};

pushNotification(10, 10, 'Success',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(150, 10, 'Error',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Warning',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
