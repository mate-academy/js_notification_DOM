'use strict';

const pushNotification = (coords, title, description, type) => {
  document.body.style.position = 'relative';

  const notificationTag = document.createElement('div');

  // если бы небыло стилей
  // notificationTag.style.width = '250px';
  // notificationTag.style.height = '125px';
  // notificationTag.style.border = 'none';
  // notificationTag.style.borderRadius = '5px';
  // notificationTag.style.padding = '10px';
  // notificationTag.style.boxSizing = 'border-box';
  // notificationTag.style.position = 'absolute';

  // switch (type) {
  //   case 'success':
  //     notificationTag.style.backgroundColor = 'green';
  //     break;
  //   case 'error':
  //     notificationTag.style.backgroundColor = 'red';
  //     break;
  //   case 'warning':
  //     notificationTag.style.backgroundColor = 'yellow';
  //     break;
  // }

  const notificationH2 = document.createElement('h2');
  const notificationP = document.createElement('p');

  notificationH2.textContent = title;
  notificationP.textContent = description;

  // если бы небыло стилей
  // notificationH2.style.fontWeight = 'bold';
  // notificationH2.style.marginBottom = '10px';
  // notificationH2.style.fontSize = '15px';
  // notificationP.style.fontSize = '12px';

  notificationTag.classList.add('notification', type);
  notificationH2.classList.add('title');

  notificationTag.appendChild(notificationH2);
  notificationTag.appendChild(notificationP);

  notificationTag.style.top = coords['top'] + 'px';
  notificationTag.style.right = coords['right'] + 'px';
  document.body.prepend(notificationTag);

  setTimeout(() => {
    notificationTag.style.display = 'none';
  }, 2000);
};

pushNotification(
  { top: 10, right: 10 },
  'Title of Success message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'success',
);

pushNotification(
  { top: 150, right: 10 },
  'Title of Error message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'error',
);

pushNotification(
  { top: 290, right: 10 },
  'Title of Warning message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'warning',
);
