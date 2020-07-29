'use strict';

const pushNotification = (top, right, title, description, type) => {
  const doc = document.querySelector('body');

  const notificationElementDiv = document.createElement('div');
  const notificationElementH2 = document.createElement('h2');
  const notificationElementP = document.createElement('p');

  notificationElementDiv.classList.add('notification', type);
  notificationElementH2.classList.add('title');
  notificationElementDiv.style.cssText = `top: ${top}px; right: ${right}px`;

  notificationElementH2.innerText = title;
  notificationElementP.innerText = description;

  notificationElementDiv.append(notificationElementH2, notificationElementP);
  doc.append(notificationElementDiv);

  setTimeout(function() {
    notificationElementDiv.remove();
  }, 2000);
};

pushNotification(10, 15, 'Error', 'This is example of result ', 'error');
