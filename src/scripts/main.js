'use strict';

const NOTIFICATION_TIME = 2000;

function hideNotification(el) {
  if (!el) {
    return;
  }

  el.style.display = 'none';
}

const pushNotification = (
  posTop = 0,
  posRight = 0,
  title,
  description,
  type,
) => {
  if (!type) {
    return;
  }

  const notificationElement = document.createElement('div');

  notificationElement.classList.add('notification');
  notificationElement.classList.add(type);

  /*
  I CAN'T ADD position = 'absolute' BECAUSE OF TESTS
  notificationElement.style.position = 'absolute';

  This happens if i add: notificationElement.style.position = 'absolute';

    AssertionError: Timed out retrying after 4000ms: expected
    '<div.notification.success>' to have attribute 'style' with the value
    'top: 10px; right: 10px;', but the value was 'position: absolute;
    top: 10px; right: 10px;' at Context.eval (webpack://js_notification_DOM/
    ./cypress/integration/notificationDom.spec.js:5:5)
  + expected- actual

  - 'position: absolute; top: 10px; right: 10px;'
  + 'top: 10px; right: 10px;'
  */

  notificationElement.style.top = posTop + 'px';
  notificationElement.style.right = posRight + 'px';

  if (title) {
    const titleElement = document.createElement('h2');

    titleElement.classList.add('title');
    titleElement.textContent = title;
    notificationElement.append(titleElement);
  }

  if (description) {
    const descriptionElement = document.createElement('p');

    descriptionElement.textContent = description;
    notificationElement.append(descriptionElement);
  }

  document.body.append(notificationElement);

  // Hide notification after a certain time
  setTimeout(() => hideNotification(notificationElement), NOTIFICATION_TIME);
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
