'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const bodyElem = document.querySelector('body');
  const divElem = document.createElement('div');

  divElem.style.top = `${posTop}px`;
  divElem.style.right = `${posRight}px`;
  divElem.className = `notification ${type}`;

  divElem.innerHTML = `
    <h2 class="title">
      ${title}
    </h2>
    <p>
      ${description}
    </p>
  `;

  bodyElem.append(divElem);

  setTimeout(() => {
    divElem.hidden = true;
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
