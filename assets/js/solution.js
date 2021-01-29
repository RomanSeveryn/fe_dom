'use strict';
new URL('https://www.facebook.com/JasonStatham/');
new Map()
  .set('www.facebook.com', 'src_to_icon')
  .set('www.facebook.com', 'src_to_icon')
  .set('www.facebook.com', 'src_to_icon');



const container = document.createElement('section');
const cardContainer = document.createElement('ul');
const cards = data.map((place) => createPlaceCards(place));
cardContainer.append(...cards);
container.append(cardContainer);


function createPlaceCards(place) {


  const h3 = createElement(
    'h3',
    { classNames: ['cardName'] },
    document.createTextNode(place.name || '')
  );

  const article = createElement(
    'article',
    { classNames: ['cardContainer'] },
    createImageWrapper(place),
    h3,
    p
  );

  return createElement('li', { classNames: ['cardWrapper'] }, article);
}

/**
 *
 * @param {string} type
 * @param {object} options
 * @param {string[]} options.classNames - css classes
 * @param {function} options.onClick - click handler
 * @param {Node[]} children
 * @return {HTMLElement}
 */
function createElement(type = 'div', { classNames = [], onClick = null, attributes = {} }, ...children) {
  const elem = document.createElement(type);
  elem.classList.add(...classNames);
  elem.onclick = onClick;
  elem.append(...children);
  return elem;
}