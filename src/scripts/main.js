'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const div = document.createElement('div');

  div.className = `notification ${type}`;
  document.body.append(div);

  div.insertAdjacentHTML('afterbegin', `
      <h2 class="title">
        ${title}
      </h2>

      <p>
        ${description}
      </p>
  `);

  div.style.top = `${posTop}px`;
  div.style.right = `${posRight}px`;
  document.querySelector('h2').style.fontSize = '18px';

  setTimeout(() => {
    div.remove();
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
