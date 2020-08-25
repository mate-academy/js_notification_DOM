'use strict';

const pushNotification = (top, right, title, description, type) => {
  // write code here
  document.body.insertAdjacentHTML('afterbegin', `
    <div class= 'notification ${type}'>
    <h2 class=title>${title}</h2>
    <p class=description>${description}</p>
    </div>
  `);

  const notification = document.querySelector('.notification');

  notification.style.top = top + 'px';
  notification.style.right = right + 'px';
};

pushNotification(
  20, 20, 'Title', 'this is description exapmple of type success', 'success'
);

setTimeout(() => {
  document.querySelector('.notification').style.display = 'none';
}, 2000);
