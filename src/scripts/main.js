'use strict';

const pushNotification = (top, right, title, description, type) => {
  const message = document.createElement('div');

  message.classList.add('notification', type);

  message.style.top = `${top}px`;
  message.style.right = `${right}px`;

  const heading = document.createElement('h2');

  heading.classList.add('title');
  heading.textContent = title;

  const desc = document.createElement('p');

  desc.textContent = description;

  message.append(heading);
  message.append(desc);
  document.body.append(message);

  setTimeout(() => (message.hidden = true), 2000);
};

pushNotification(10, 10, 'error', 'lorem ispum ...', 'error');
