'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');

  const notificationContainer = document.createElement('div');
  const notificationBody = document.createElement('div');

  notificationContainer.style.position = 'fixed';
  notificationContainer.style.top = posTop + 'px';
  notificationContainer.style.right = posRight + 'px';
  notificationBody.type = type;
  notificationBody.style.height = '130' + 'px';
  notificationBody.style.borderRadius = '10px';

  switch (notificationBody.type) {
    case 'success':
      notificationBody.style.backgroundColor = '#c0ddb6';
      break;
    case 'error':
      notificationBody.style.backgroundColor = '#ecb5b1';
      break;
    case 'warning':
      notificationBody.style.backgroundColor = '#f1e5bf';
      break;
  }

  const notificationTitle = document.createElement('div');

  notificationTitle.textContent = title;
  notificationTitle.style.fontWeight = 'bold';
  notificationTitle.style.padding = '15px 15px';

  const notificationDescription = document.createElement('div');

  notificationDescription.innerHTML = description;
  notificationDescription.style.padding = '15px 15px';

  notificationContainer.append(notificationBody);

  notificationBody.append(notificationTitle);
  notificationBody.append(notificationDescription);
  body.append(notificationContainer);

  setTimeout(() => {
    notificationContainer.remove();
  }, 2000);
};

pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.<br>' + 'Notification should contain title and description.',
  'success',
);

pushNotification(
  150,
  10,
  'Title of Error message',
  'Message example.<br>' + 'Notification should contain title and description.',
  'error',
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.<br>' + 'Notification should contain title and description.',
  'warning',
);
