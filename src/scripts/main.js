'use strict';

function getBackgroundColor(typeOfMessage) {
  switch (typeOfMessage) {
    case 'success':
      return '#c0ddb6';

    case 'error':
      return '#ecb5b1';

    case 'warning':
      return '#f1e5bf';
  }
}

const pushNotification = (posTop, posRight, title, description, type) => {
  const notification = document.createElement('div');
  const styles = notification.style;

  styles.position = 'fixed';
  styles.top = posTop + 'px';
  styles.right = posRight + 'px';
  styles.paddingInline = '10px';
  styles.maxWidth = '300px';
  styles.borderRadius = '10px';
  styles.backgroundColor = getBackgroundColor(type);

  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  h2.innerText = title;
  p.innerText = description;

  notification.append(h2, p);
  document.body.append(notification);

  setTimeout(() => {
    notification.remove();
  }, 2000);
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
