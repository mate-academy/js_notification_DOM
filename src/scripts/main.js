'use strict';

const pushNotification = (top, right, title, description, type) => {
  const body = document.querySelector('body');
  const blockNotification = document.createElement('div');

  blockNotification.insertAdjacentHTML('afterbegin', `
    <div class='notification ${type}' style='top=${top} right=${right}'>
      <h2 class='title'>
        ${title}
      </h2>
      <p>
        ${description}
      </p>
    </div>
  `);

  body.append(blockNotification);

  setTimeout(() => blockNotification.remove(), 2000);
};

pushNotification('10px', '10px', 'Title',
  `This is example of result.
  Notification should contain title and description`,
  'error');
