'use strict';

const pushNotification = (top, right, title, description, type) => {
  const topPos = top + 'px';
  const rightPos = right + 'px';

  document.body.insertAdjacentHTML('beforeend', `
    <div
      class="notification ${type}"
      style="top: ${topPos}; right: ${rightPos};"
    >
      <h2 class="title">${title}</h2>
      <p>${description}</p>
    </div>
  `);

  const message = document.querySelector('.notification');

  setTimeout(() => {
    message.remove();
  }, 2000);
};

pushNotification(10, 10, 'Warning!', 'Be careful!!!', 'warning');
