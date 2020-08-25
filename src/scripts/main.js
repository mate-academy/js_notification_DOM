'use strict';

const pushNotification = (top, right, title, description, type) => {
  const message = document.createElement('div');

  message.className = `notification ${type}`;
  message.style.cssText = `position: absolute; top: ${top}; right: ${right};`;

  message.innerHTML = `
    <h2 class="title">${title}</h2>
    <p>${description}</p>
  `;

  document.body.append(message);

  setTimeout(() => message.remove(), 2000);
};

setTimeout(
  pushNotification(
    '50px', '50px', 'Congtatulation!', 'You win new car!', 'success'
  ), 1000);
