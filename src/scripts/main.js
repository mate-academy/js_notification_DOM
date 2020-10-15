'use strict';

const pushNotification = (top, right, title, description, type) => {
  const notification = document.createElement('div');

  notification.className = 'notification';
  document.body.append(notification);

  notification.style.top = `${top}px`;
  notification.style.right = `${right}px`;

  notification.innerHTML = `
    <h2>
      ${title}
    </h2>
    <p>
      ${description}
    </p>
  `;

  notification.classList.add(type);

  setTimeout(() => {
    notification.style.cssText += 'opacity: 0; transition: opacity 1s';
  }, 2000);
};

pushNotification(
  20,
  20,
  'Title',
  'Meow meow meow',
  'success'
);
