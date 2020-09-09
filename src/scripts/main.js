'use strict';

const pushNotification = (top, right, title, description, type) => {
  const elemDiv = document.createElement('div');

  document.body.append(elemDiv);
  elemDiv.classList.add('notification', type);

  const head = document.createElement('h2');

  head.className = `title`;
  head.innerText = `${title}`;
  elemDiv.append(head);

  const descript = document.createElement('p');

  descript.innerText = `${description}`;
  elemDiv.append(descript);

  elemDiv.style.top = `${top}px`;
  elemDiv.style.right = `${right}px`;
};

pushNotification(0, 100, 'Warning!', 'Fatal error', 'warning');
