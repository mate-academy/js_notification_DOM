'use strict';

const pushNotification = (top, right, title, description, type) => {
  const message = document.createElement('div');

  message.className = `notification ${type}`;
  message.style.top = top;
  message.style.right = right;

  message.insertAdjacentHTML('afterbegin', `
    <h2 class="title">${title}</h2>
    <p>
      ${description}
    </p>
  `);

  document.body.append(message);

  setTimeout(() => message.remove(), 2000);
};

pushNotification('500px', '50px', 'Great job!', 'You did it ;)', 'success');
