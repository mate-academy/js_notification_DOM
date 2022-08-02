'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  function message() {
    const core = document.createElement('div');

    core.className = `notification ${type}`;
    core.innerHTML = `
    <h3 class: "title">${title}</h3>
    <p>${description}</p>
    `;
    document.body.append(core);
    
    const alarmPosition = document.querySelector(`.${type}`);

    alarmPosition.style.position = 'fixed';
    alarmPosition.style.top = `${posTop}px`;
    alarmPosition.style.right = `${posRight}px`;
    alarmPosition.style.height = '135px';
    alarmPosition.style.width = '300px';
    alarmPosition.style.borderRadius = '10px';
    alarmPosition.style.paddingLeft = '10px';
    const clear = () => {
      alarmPosition.remove(core);
    }

    setTimeout(clear, 4000);
  }

  setTimeout(message, 2000);
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
