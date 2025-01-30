'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  setTimeout(() => {
    // notification
    const notification = document.createElement('div');

    notification.setAttribute('class', type);

    if (type === 'success') {
      notification.style.backgroundColor = '#66FF99';
    } else if (type === 'error') {
      notification.style.backgroundColor = '#ffcccb';
    } else if (type === 'warning') {
      notification.style.backgroundColor = '#FFFFE0';
    }

    // title
    const mainTitle = document.createElement('h2');

    mainTitle.textContent = title;
    mainTitle.setAttribute('class', 'title');

    // description
    const descriptionText = document.createElement('p');

    descriptionText.textContent = description;
    descriptionText.style.whiteSpace = 'pre-line';

    // styles
    notification.style.position = 'absolute';
    notification.style.top = posTop + 'px';
    notification.style.right = posRight + 'px';
    notification.style.borderRadius = '10px';
    notification.style.marginBottom = '20px';

    // appending childs
    notification.appendChild(mainTitle);
    notification.appendChild(descriptionText);
    document.body.appendChild(notification);
  }, 2.0 * 1000);
};

pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'success',
);

pushNotification(
  150,
  10,
  'Title of Error message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'error',
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'warning',
);
