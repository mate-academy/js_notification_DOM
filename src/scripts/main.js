'use strict';

const pushNotification = (top, right, title, description, type) => {
  const body = document.querySelector('body');
  const div = document.createElement('div');

  div.style.cssText = `
    top: ${top}px;
    right: ${right}px;
  `;

  div.innerHTML = `
  <h2>
    ${title}
  </h2>
  <p>
    ${description}
  </p>
  `;

  div.classList.add('notification');
  div.classList.add(`${type}`);

  body.append(div);

  setTimeout(() => div.remove(), 2000);
};

pushNotification(
  10,
  10,
  'Title',
  'This is example of result.'
  + 'Notification should contain title and description',
  'warning'
);
