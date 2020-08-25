'use strict';

const pushNotification = (top, right, title, description, type) => {
  return setTimeout(() => {
    document.body.insertAdjacentHTML('beforeend',
      `<div class="notification ${type}" 
        style="top: ${top}px; right: ${right}px">
        <h2 class="title">${title}</h2>
        <p class="description">${description}&#x1f603;</p>
      </div>`
    );
  }, 2000);
};

pushNotification(10, 10, 'Warning', `My dear friend,
be carefull!<br>
There is a very interesting content.
You can lose all day here!`, 'warning');
