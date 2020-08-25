'use strict';

const pushNotification = (top, right, title, description, type) => {
  const div = document.createElement('div');

  div.className = (`notification ${type}`);
  div.style.top = top;
  div.style.right = right;

  div.innerHTML = (
    `<h2 class='title'>${title}</h2>
    <p>${description}</p>`
  );

  document.body.append(div);

  setTimeout(() => div.remove(), 2000);
};

pushNotification('20px', '20px', 'Title', `Description`, 'success');
