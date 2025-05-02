// Get the trigger buttons and the modal windows
const burgerButton = document.getElementById('header-burger');
const modalMenu = document.getElementById('mobile-menu');
const cartButton = document.getElementById('cart-btn');
const modalCart = document.getElementById('cart-modal');

const useModal = (selector)=> {
  const overlay = document.querySelector('.js-overlay');

  let isClickOutsideActive = null;
  const onClickOutside = (event) => {
    if (!isClickOutsideActive) {
      // skip first click to prevent initial click from triggering close
      return isClickOutsideActive = true;
    }
    if (!selector.contains(event.target) && event.target !== selector) {
      close();
    }
  }

  const onPressEsc = (event) => {
    if (event.key === 'Escape' || event.keyCode === 27) {
      close();
    }
  }

  const open = (callback) => {
    const scrollbarWidth = getScrollbarWidth();
    selector.classList.toggle('modal--open');
    selector.setAttribute('aria-hidden',!selector.classList.contains('modal--open'));
    selector.setAttribute('aria-expanded', selector.classList.contains('modal--open'));
    document.body.classList.toggle('body--inactive');
    //document.body.style.paddingRight = `${scrollbarWidth}px`;
    overlay.classList.toggle('overlay--visible');

    callback && callback();
    document.addEventListener('click', onClickOutside);
    document.addEventListener('keyup', onPressEsc);
  }

  const close = (callback) => {
    selector.classList.remove('modal--open');
    selector.setAttribute('aria-hidden', true);
    selector.setAttribute('aria-expanded', false);
    document.body.classList.remove('body--inactive');
    //document.body.style.paddingRight = '';
    overlay.classList.remove('overlay--visible');

    // Remove the outside click handler when modal is closed
    document.removeEventListener('click', onClickOutside);
    document.removeEventListener('keyup', onPressEsc);
    isClickOutsideActive = false;
    callback && callback();
  }

  const toggle = (callback) => {
    [...selector.classList].includes('modal--open') ? close() : open();
    callback && callback();
  }

  return {
    open,
    close,
    toggle,
  }
}

const {toggle: toggleMenu, close: closeMenu} = useModal(modalMenu);
const burgerSwitch = () => {
  burgerButton.classList.toggle('burger--open');
  burgerButton.setAttribute('aria-expanded', burgerButton.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
};
burgerButton.addEventListener('click', () => toggleMenu(burgerSwitch))

const {toggle: toggleCartModal, close: closeCartModal} = useModal(modalCart);
cartButton.addEventListener('click', () => toggleCartModal());

function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}

// @todo add js- prefix to all classes for quantity and form

function addQuantityInputListeners(input) {
  const minValue = parseInt(input.getAttribute('min'), 10);

  // херь снизу === increaseBtn и decreaseBtn сверху
  const qtyBtn = input.parentNode.querySelectorAll('.qty__btn');
  qtyBtn.forEach((btn) => {
    btn.addEventListener('click', ()=>{
      const isIncr = btn.classList.contains('qty__btn--increase');
      let value = parseInt(input.value);
      value = isNaN(value) || value < minValue? minValue : value;
      isIncr ? value++ : value--;
      if (value > 0) {
        input.value = value;
      }
    })
  })
}

// Call the function for each quantity input field
const quantityInputs = document.querySelectorAll('.qty__field');
quantityInputs.forEach(function(input) {
  addQuantityInputListeners(input);
});

document.addEventListener('DOMContentLoaded', (event) => {//@todo check difference with other functions
  if (document.getElementById('js-show-more') === null) return;
  const showMoreButton = document.querySelector('#js-show-more');
  const cartListItems = document.querySelectorAll('.cart-list__item');

  showMoreButton.addEventListener('click', () => {
    // Starting from the second item (index 1), as index 0 is the first item
    for (let i = 1; i < cartListItems.length; i++) {
      cartListItems[i].style.display = 'block';
    }

    // Remove the button after updating the display of list items
    showMoreButton.remove();
  });
});
