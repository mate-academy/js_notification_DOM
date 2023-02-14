'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const fixDescription = description.split('\n').join('<br>');
  const message = `
    <div
      class="notification ${type}"
      style="
        box-sizing: content-box;
        top: ${posTop}px;
        right: ${posRight}px;"
    >
      <h2 class="title">
        ${title}
      </h2>

      <p>
        ${fixDescription}
      </p>
    </div>
  `;

  const bodyLastEl = document.body.lastElementChild;

  bodyLastEl.insertAdjacentHTML('beforebegin', message);

  setTimeout(() => {
    document.querySelector(`.${type}`).remove()
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
