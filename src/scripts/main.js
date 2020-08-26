'use strict';

const pushNotification = (top, right, title, description, type) => {
  const notification = document.createElement('div');

  notification.insertAdjacentHTML('afterbegin', `
  <div class='notification ${type}' style='top=${top} right=${right}'>
    <h2 class='title'>
      ${title}
    </h2>
    <p>
      ${description}
    </p>
  </div>
`);

  document.body.append(notification);
  setTimeout(() => notification.remove(), 2000);
};

pushNotification('5%', '2%', `Hello!`,
  `This is example of result.
  Notification should contain title and description`,
  'error');
