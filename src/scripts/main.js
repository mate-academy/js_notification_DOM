'use strict';

const pushNotification = (top, right, title, description, type) => {
  const banner = document.createElement('div');
  const bannerTitle = document.createElement('h2');
  const bannerText = document.createElement('p');

  bannerTitle.setAttribute('class', 'title');
  bannerTitle.innerText = title;

  bannerText.innerText = description;

  banner.setAttribute('class', `banner ${type}`);
  banner.append(bannerTitle);
  banner.append(bannerText);

  banner.style.position = 'absolute';
  banner.style.top = top + 'px';
  banner.style.right = right + 'px';
  banner.style.padding = '0 20px';
  banner.style.backgroundColor = '#f4e5ba';
  banner.style.borderRadius = '5px';

  document.body.append(banner);

  setInterval(() => {
    banner.style.display = 'none';
  }, 2000);
};

pushNotification(10, 20, 'Some banner',
  'This is example of banner description');
