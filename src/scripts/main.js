'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('DIV');
  const notificationTitle = document.createElement('H2');
  const notificationText = document.createElement('P');

  notificationTitle.innerText = title;
  notificationText.innerText = description;
  notification.append(notificationTitle);
  notification.append(notificationText);
  notification.classList.add('notification');

  const notificationList = document.querySelectorAll('.notification');

  function messageType(frame) {
    notification.classList.add(frame);

    if (notificationList.length) {
      const existNoti = notificationList[notificationList.length - 1];
      const existNotiRect = existNoti.getBoundingClientRect();
      const existNotiPosition = existNotiRect.top + existNotiRect.height;

      notification.style.top = `${existNotiPosition + 10}px`;
      notification.style.right = `${posRight}px`;
    }
  }

  messageType(type);
  document.body.append(notification);

  return setTimeout(() => {
    document.body.removeChild(notification);
  }, 2000);
};

pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'success'
);

pushNotification(
  150,
  10,
  'Title of Error message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'error'
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'warning'
);
