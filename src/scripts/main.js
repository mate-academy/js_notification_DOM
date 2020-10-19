'use strict';

const pushNotification = (top, right, title, description, type) => {
  const notificationBlock = document.createElement('div');

  notificationBlock.className = `notification ${type}`;

  notificationBlock.innerHTML = (`
  <h2>
    ${title}
  </h2>
  <p>
    ${description}
  </p>
  `);
  notificationBlock.style.cssText = `top: ${top}; right: ${right};`;
  document.body.append(notificationBlock);
  setTimeout(() => notificationBlock.setAttribute('hidden', true), 2000);
};

pushNotification(
  15,
  15,
  'Title',
  'This is example of result.'
  + 'Notification should contain title and description',
  'warning'
);
