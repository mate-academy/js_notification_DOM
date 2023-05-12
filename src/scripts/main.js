'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notificationContainer = document.createElement('div');
  notificationContainer.classList.add('notification', type);
  notificationContainer.style.marginTop = `${posTop}px`;
  notificationContainer.style.marginRight = `${posRight}px`;

  notificationContainer.innerHTML = `
    <h2 class="title"> 
      ${title}
    </h2>
    
    <p> ${description} </p>
  `;

  document.body.append(notificationContainer);

  setTimeout(() => {
    notificationContainer.remove();
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
