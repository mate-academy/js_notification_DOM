'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const timeAppearance = 1000; // ms
  const oneFrametime = 10; // ms
  const notificationDuration = 2000; // ms

  const notification = document.createElement('div');
  const notificationTitle = document.createElement('h2');
  const notificationText = document.createElement('p');

  document.querySelector('body').append(notification);

  notification.classList.add('notification');
  notification.style.top = '0px';
  notification.style.right = posRight + 'px';
  notification.style.opacity = 0;
  notification.style.zIndex = document.querySelector('.notification').lenght;

  notificationTitle.classList.add('title');
  notificationTitle.textContent = title;
  notification.insertAdjacentElement('afterbegin', notificationTitle);

  notificationText.textContent = description;

  notification.insertAdjacentElement('beforeend', notificationText);

  switch (type) {
    case 'success' :
      notification.classList.add('success');
      break;
    case 'warning' :
      notification.classList.add('warning');
      break;
    default :
      notification.classList.add('error');
  }

  function appearance(element) {
    const currentTop = parseFloat(notification.style.top);
    const currentOpacity = parseFloat(notification.style.opacity);

    if (currentTop < posTop) {
      notification.style.top = currentTop + posTop
      / (timeAppearance / oneFrametime) + 'px';

      notification.style.opacity = currentOpacity + 1
      / (timeAppearance / oneFrametime);

      setTimeout(appearance, oneFrametime, element);
    } else {
      setTimeout(disappearing, notificationDuration, element);
    }
  }

  function disappearing(element) {
    const currentOpacity = parseFloat(notification.style.opacity);

    if (currentOpacity > 0) {
      notification.style.opacity = currentOpacity - 1
      / (timeAppearance / oneFrametime);

      setTimeout(disappearing, oneFrametime, element);
    } else {
      element.remove();
    }
  }

  appearance(notification);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(150, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
