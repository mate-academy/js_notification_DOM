'use strict';

const pushNotification = (top, right, title, description, type) => {
  const notification = document.createElement('div');
  const notificationHeader = document.createElement('h2');
  const notificationParagraph = document.createElement('p');

  notification.classList.add('notification');
  notification.classList.add(type);
  notificationHeader.classList.add('title');

  notificationHeader.innerText = title;
  notificationParagraph.innerText = description;

  notification.appendChild(notificationHeader);
  notification.appendChild(notificationParagraph);

  notification.style.position = 'absolute';
  notification.style.top = top;
  notification.style.right = right;

  document.body.appendChild(notification);

  window.setTimeout(deleteNotification, 2000);
};

function deleteNotification() {
  const toDelete = document.querySelector('.notification');

  toDelete.remove();
}

pushNotification('5px', '5px', 'Title', 'this is a description', 'alert');
