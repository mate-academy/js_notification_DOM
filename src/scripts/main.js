'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const element = document.createElement('div');

  element.className = 'notification';
  element.classList.add(type);

  element.style.top = `${posTop}px`;
  element.style.right = `${posRight}px`;

  element.insertAdjacentHTML(
    'afterbegin',
    `
    <h2 class="title">${title}</h2>
  <p>${description}</p>`,
  );

  document.body.appendChild(element);

  setTimeout(() => {
    element.remove();
  }, 1000);
};

pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'success',
);

pushNotification(
  150,
  10,
  'Title of Error message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'error',
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'warning',
);

{
  /* <div class="notification ${type}">
  <h2 class="title">${title}</h2>
  <p>${description}</p>
</div>; */
}
