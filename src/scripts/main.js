'use strict';

const myPushNotification = (myPosTop, myPosRight, myTitle, myDescription,
  myType) => {
  const myNotification = document.createElement('div');

  myNotification.classList.add('notification', myType);

  const myTitleElement = document.createElement('h2');

  myTitleElement.classList.add('title');
  myTitleElement.textContent = myTitle;

  const myDescriptionElement = document.createElement('p');

  myDescriptionElement.textContent = myDescription;

  myNotification.appendChild(myTitleElement);
  myNotification.appendChild(myDescriptionElement);

  myNotification.style.top = `${myPosTop}px`;
  myNotification.style.right = `${myPosRight}px`;

  document.body.appendChild(myNotification);

  setTimeout(() => {
    document.body.removeChild(myNotification);
  }, 2000);
};

myPushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

myPushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'success',
);

myPushNotification(150, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

myPushNotification(
  150,
  10,
  'Title of Error message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'error',
);

myPushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');

myPushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'warning',
);
