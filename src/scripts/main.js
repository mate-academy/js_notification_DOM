'use strict';

const body = document.querySelector('body');

body.insertAdjacentHTML('beforeend', `
  <div class='mess'>
  </div>
  `);

const mess = document.querySelector('.mess');

mess.style.cssText = `
  display: flex;
  flex-direction: column;
  `;

const pushNotification = (posTop, posRight, title, description, type) => {
  let bgc = '';

  if (type === 'success') {
    bgc = 'green';
  } else if (type === 'error') {
    bgc = 'red';
  } else if (type === 'warning') {
    bgc = 'yellow';
  }

  setTimeout(() => {
    mess.insertAdjacentHTML('beforeend', `
      <div class='title__${type}'>
        <h2>
          ${title}
        </h2>
        <p>
          ${description}
        </p>
      </div>

      <style>
        h2 {
          margin-bottom: 15px;
        }

        p {
          margin-top: 0;
        }

        .title__${type} {
          margin: 0;
          padding: 0 10px;
          width: 330px;
          position: absolute;
          top: ${posTop}px; 
          right: ${posRight}px;
          display: flex;
          flex-direction: column;
          background: ${bgc};
          border-radius: 15px;
        }
      </style>
    `);
  }, 0);
};

pushNotification(10, 10, 'Title of Success message',
  `Message example. <br> 
  Notification should contain title and description.`, 'success');

pushNotification(150, 10, 'Title of Error message',
  `Message example. <br> 
  Notification should contain title and description.`, 'error');

pushNotification(290, 10, 'Title of Warning message',
  `Message example. <br> 
  Notification should contain title and description.`, 'warning');
