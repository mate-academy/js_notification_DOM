'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const newDescription = description.replace(/\n/g, ' <br/>');

  const body = document.querySelector('body');

  body.insertAdjacentHTML('afterbegin', `
    <div class="notification ${type}">
      <h2 class="title">
        ${title}
      </h2>
      <p>${newDescription}</p>
    </div>
  `);

  const divEl = document.querySelector('div');

  divEl.style.marginTop = `${posTop}px`;
  divEl.style.marginLeft = `${posRight}px`;
  divEl.style.width = `max-content`;

  setTimeout(() => {
    divEl.remove();
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
