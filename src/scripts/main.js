'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const notificationElement = document.createElement('div');
  const titleElement = document.createElement('h2');
  const descriptionElement = document.createElement('p');

  notificationElement.classList.add('notification');
  notificationElement.style.position = 'absolute';
  notificationElement.style.top = posTop + 'px';
  notificationElement.style.right = posRight + 'px';
  notificationElement.appendChild(titleElement);
  notificationElement.appendChild(descriptionElement);

  if (['success', 'warning', 'error'].includes(type)) {
    notificationElement.classList.add(type);
  }

  titleElement.classList.add('title');
  titleElement.textContent = title;

  descriptionElement.textContent = description;

  document.body.appendChild(notificationElement);

  setTimeout(() => {
    notificationElement.style.display = 'none';
  }, 2000);
};

if (typeof window !== 'undefined') {
  window.pushNotification = pushNotification;
}
