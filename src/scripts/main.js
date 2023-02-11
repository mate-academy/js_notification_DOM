'use strict';

function pushNotification(posTop, posRight, title, description, type) {
  const block = document.createElement('div');
  const blockTitle = document.createElement('h2');
  const blockText = document.createElement('p');

  block.style.top = posTop + 'px';
  block.style.right = posRight + 'px';

  block.classList.add('notification');
  block.classList.add(type);
  blockTitle.classList.add('title');
  blockTitle.innerText = title;
  blockText.innerText = description;
  block.append(blockTitle);
  block.append(blockText);
  document.body.append(block);

  setTimeout(function() {
    block.remove();
  }, 2000);
}

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(175, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(312, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
