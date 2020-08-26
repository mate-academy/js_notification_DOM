'use strict';

const pushNotification = (top, right, title, description, type) => {
  document.body.insertAdjacentHTML(`beforeend`,
    `<div
      class = 'notification ${type}'
      style = 'position: absolute; top: ${top}; right: ${right}'
    >
      <h2 class = 'title'> ${title} </h2>
      <p> ${description} </p>
    </div>`);

  setTimeout(() => {
    document.querySelector('.notification').remove();
  }, 2000);
};

pushNotification(`5%`, `5%`, `Listen to Blind Melon`,
  `Big stretch and not much sleep I got
   a couple of plam trees on each side of my cheek`, `success`);
