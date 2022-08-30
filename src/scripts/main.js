'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const letBody = document.querySelector('body');

  const notificationBlock = setTimeout(() => {
    letBody.insertAdjacentHTML(
      'beforeend',
      `
        <div style="
          box-sizing: content-box;
          top: ${posTop}px;
          right: ${posRight}px
        "
        class="notification ${type}">
          <h2>
            ${title}
          </h2>
          <p>
            ${description}
          </p>
        </div>
      `
    );

    const removeElement = document.querySelector(`.${type}`);

    setTimeout(() => {
      removeElement.remove();
    }, 2000);
  }, 2000);

  return notificationBlock;
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
