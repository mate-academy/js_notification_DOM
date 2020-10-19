'use strict';

const pushNotification = (top, right, title, description, type) => {
  const block = document.createElement('div');

  block.className = 'notification';
  document.body.append(block);

  block.style.top = `${top}px`;
  block.style.right = `${right}px`;
  block.classList.add(type);

  block.innerHTML = `
  <h2>
    ${title}
  </h2>
  <p>
    ${description}
  </p>
  `;

  setTimeout(() => {
    block.style.cssText += 'opacity: 0; transition: opacity 300ms';
  }, 2000);
};

pushNotification(20, 20, 'Hey, Mate!', 'You here forever', 'success');
