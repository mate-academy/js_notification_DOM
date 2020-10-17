'use strict';

function pushNotification(
  top,
  right,
  title,
  description,
  type,
  timer = 2000
) {
  const notification = document.createElement('div');

  notification.innerHTML = `
    <h2>${title}</h2>
    <p>${description}</p>
  `;

  notification.classList.add('notification');
  notification.classList.add(type);
  notification.style.top = top;
  notification.style.right = right;

  document.body.append(notification);

  window.setTimeout(() => notification.remove(), timer);
}

pushNotification(
  '40px',
  '40px',
  'Loading',
  '...',
  'warning'
);

window.setTimeout(pushNotification, 2100,
  '40px',
  '40px',
  'Congratulations',
  'You\'ve just spent 2 seconds of your life',
  'success',
  4000
);
