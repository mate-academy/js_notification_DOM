'use strict';

const pushNotification = (top, right, title, description, type) => {
  const body = document.querySelector('body');
  const notificationBlock = document.createElement('div');

  notificationBlock.insertAdjacentHTML('afterbegin', `
    <div class='notification ${type}' style='top=${top} right=${right}'>
      <h2 class='title'>
        ${title}
      </h2>
      <p>
        ${description}
      </p>
    </div>
  `);

  body.append(notificationBlock);

  setTimeout(() => notificationBlock.remove(), 2000);
};

pushNotification('10px', '10px', 'Title',
  `This is example of result.
  Notification should contain title and description`,
  'error');
