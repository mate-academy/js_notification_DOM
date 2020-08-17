'use strict';

const pushNotification = (top, right, title, description, type) => {
  document.body.insertAdjacentHTML(
    `beforeend`,
    `
    <div class='notification ${type}'>
      <h2>${title}</h2>
      <p>${description}</p>
    </div>
  `
  );

  const message = document.querySelector('.notification');

  message.style.top = `${top}px`;
  message.style.right = `${right}px`;

  setTimeout(() => message.remove(), 2000);
};

pushNotification(
  10,
  50,
  'Error!',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  'error'
);
