'use strict';

const pushNotification = (top, right, title, description, type) => {
  const body = document.querySelector('body');

  const message = `
    <div
      class="notification ${type}"
      <style="position: absolute; top: ${top}; right: ${right}">
      <h2 class="title">${title}</h2>
      <p>${description}</p>
    </div>
  `;

  body.insertAdjacentHTML('afterbegin', message);

  const notification = document.querySelector('.notification');

  setTimeout(() => notification.remove(), 2000);
};

pushNotification('10px', '10px', 'FATAL ERROR', 'Data not received', 'error');
