'use strict';

const pushNotification = (top, right, title, description, type) => {
  const block = document.createElement('div');

  block.classList.add('notification', type);
  document.body.append(block);

  block.style.top = `${top}px`;
  block.style.right = `${right}px`;

  block.innerHTML = `
  <h2 class="title">
    ${title}
  </h2>
  <p>
    ${description}
  </p>
  `;

  setTimeout(() => block.remove(), 2000);
};

pushNotification(20, 20, 'Hey, Mate!', 'You here forever', 'success');
