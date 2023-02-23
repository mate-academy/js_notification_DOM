'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notificationContainer = document.createElement('div');
  notificationContainer.className = 'notification';
  
  const containerStyle = notificationContainer.style;
  
  containerStyle.top = `${posTop}px`;
  containerStyle.right = `${posRight}px`;
  containerStyle.width = '320px';
  
  notificationContainer.classList.add(type);
  
  notificationContainer.innerHTML = `
    <h2 class="title">
      ${title}
    </h2>
    <p>
      ${description}
    </p>
  `;
  
  document.body.appendChild(notificationContainer);
  
  setTimeout(() => {
    document.body.removeChild(notificationContainer);
  }, 2000);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(150, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
