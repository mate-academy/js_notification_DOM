'use strict';

const pushNotification = (top, right, title, description, type) => {
  document.body.insertAdjacentHTML('beforeend', `
    <div class='notification ${type}' style='top: ${top}px; right: ${right}px'>
      <h2 class="title">${title}</h2>
      <p>${description}</p>
    </div>
  `);

  setTimeout(() => document.querySelector('.notification').remove(), 2000);
};

pushNotification(20, 20, 'Well done!', 'You passed your exams', 'success');
