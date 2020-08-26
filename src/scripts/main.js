'use strict';

const pushNotification = (top, right, title, description, type) => {
  const message = document.createElement('div');

  message.className = `notification ${type}`;

  message.innerHTML = `
    <h2 class='title'>${title}</h2>
    <p>${description}</p>
  `;
  message.style.top = `${top}px`;
  message.style.right = `${right}px`;
  document.body.append(message);
  setTimeout(() => message.remove(), 2000);
};

const text = `This is example of result.<br>
Notisfaction should contain tittle and description.`;

pushNotification(10, 10, 'Title', text, 'warning');
