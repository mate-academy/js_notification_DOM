'use strict';

const pushNotification = (top, right, title, description, type) => {
  document.body.insertAdjacentHTML('afterbegin', `
    <div class = "notification ${type}">
      <h2 class = "title">
        ${title}
      </h2>
      <p class = "description">
        ${description}
      </p>
    </div>
  `);

  const notification = document.querySelector('.notification');

  notification.style.right = `${right}px`;
  notification.style.top = `${top}px`;

  setTimeout(function() {
    notification.remove();
  }, 2000);
};

pushNotification(50, 50, 'error', 'description', 'error');
