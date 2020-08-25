'use strict';

const pushNotification = (top, right, title, description, type) => {
  const message = document.createElement('div');

  message.classList = `notification ${type}`;

  message.innerHTML = `
  <h2 class="title">${title}</h2>
  <p>${description}</p>
`;
  message.style.top = `${top}px`;
  message.style.right = `${right}px`;
  document.body.append(message);

  setTimeout(() => message.remove(), 2000);
};

pushNotification(30, 20, `Hello!`,
  `This is example of result.
  Notification should contain title and description`,
  'error');
