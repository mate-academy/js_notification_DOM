'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const myDiv = document.createElement('div');
  const myP = document.createElement('p');
  const myH = document.createElement('h3');
  myH.className = title;
  myH.textContent = title;
  myDiv.append(myH);
  myDiv.append(myP);
  myP.innerText = description;
  myDiv.style.top = posTop + 'px';
  myDiv.style.right = posRight + 'px'; 
  myDiv.className = 'notification';
  myDiv.classList.add(type);
  document.body.append(myDiv);
  setTimeout(() => {myDiv.remove();}, 2000);
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
