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
  notification.style.opacity = '0';

  setTimeout(function() {
    notification.style.transition = 'opacity 0.8s';
    notification.style.opacity = '1';
  }, 2000);
};

pushNotification(50, 50, 'error', 'description', 'error');
