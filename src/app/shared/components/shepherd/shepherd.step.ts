export const steps = [
  {
    id: 'intro',
    attachTo: {
      element: '.logo',
      on: 'bottom'
    },
    beforeShowPromise: function() {
      return new Promise(function(resolve) {
        setTimeout(function() {
          window.scrollTo(0, 0);
          resolve('');
        }, 500);
      });
    },
    buttons: [
      {
        classes: 'action-btn',
        text: '❮ Back',
        type: 'back'
      },
      {
        classes: 'action-btn',
        text: 'Next ❯',
        type: 'next'
      }
    ],
    cancelIcon: {
      enabled: true
    },
    classes: 'custom-class-name-1 custom-class-name-2',
    highlightClass: 'highlight',
    scrollTo: false,
    title: 'Welcome to T-Shop!',
    text: ['Welcome to T-Shop, you can always press the logo to get back to the home page.'],
    when: {
      show: () => {
        // console.log('show step');
      },
      hide: () => {
        // console.log('hide step');
      }
    }
  },
  {
    id: 'search',
    attachTo: {
      element: '#product-search',
      on: 'bottom'
    },
    beforeShowPromise: function() {
      return new Promise(function(resolve) {
        setTimeout(function() {
          window.scrollTo(0, 0);
          resolve('');
        }, 500);
      });
    },
    buttons: [
      {
        classes: 'action-btn',
        text: '❮ Back',
        type: 'back'
      },
      {
        classes: 'action-btn',
        text: 'Next ❯',
        type: 'next'
      }
    ],
    cancelIcon: {
      enabled: true
    },
    classes: 'custom-class-name-1 custom-class-name-2',
    highlightClass: 'highlight',
    scrollTo: false,
    title: 'Search on a product!',
    text: ['You can always search and filter products using this input.'],
    when: {
      show: () => {
        // console.log('show step');
      },
      hide: () => {
        // console.log('hide step');
      }
    }
  },
  {
    id: 'product-card',
    attachTo: {
      element: '#product-card',
      on: 'bottom'
    },
    beforeShowPromise: function() {
      return new Promise(function(resolve) {
        setTimeout(function() {
          window.scrollTo(0, 0);
          resolve('');
        }, 500);
      });
    },
    buttons: [
      {
        classes: 'action-btn',
        text: '❮ Back',
        type: 'back'
      },
      {
        classes: 'action-btn',
        text: 'Next ❯',
        type: 'next'
      }
    ],
    cancelIcon: {
      enabled: true
    },
    classes: 'custom-class-name-1 custom-class-name-2',
    highlightClass: 'highlight',
    scrollTo: false,
    title: 'Product card',
    text: ['You should hover on the product card to be able to add it to the shopping cart'],
    when: {
      show: () => {
       //
      },
      hide: () => {
        // console.log('hide step');
      }
    }
  },
  {
    id: 'shopping-cart',
    attachTo: {
      element: '.cart',
      on: 'bottom'
    },
    beforeShowPromise: function() {
      return new Promise(function(resolve) {
        setTimeout(function() {
          window.scrollTo(0, 0);
          resolve('');
        }, 500);
      });
    },
    buttons: [
      {
        classes: 'action-btn',
        text: '❮ Back',
        type: 'back'
      },
      {
        classes: 'action-btn',
        text: 'Next ❯',
        type: 'next'
      }
    ],
    cancelIcon: {
      enabled: true
    },
    classes: 'custom-class-name-1 custom-class-name-2',
    highlightClass: 'highlight',
    scrollTo: false,
    title: 'Shopping Cart!',
    text: ['You can consult add items from here'],
    when: {
      show: () => {
       //
      },
      hide: () => {
        // console.log('hide step');
      }
    }
  },
  {
    id: 'product-title',
    attachTo: {
      element: '.product-title',
      on: 'bottom'
    },
    beforeShowPromise: function() {
      return new Promise(function(resolve) {
        setTimeout(function() {
          window.scrollTo(0, 0);
          resolve('');
        }, 500);
      });
    },
    buttons: [
      {
        classes: 'action-btn',
        text: '❮ Back',
        type: 'back'
      },
      {
        classes: 'action-btn',
        text: 'Next ❯',
        type: 'next'
      }
    ],
    cancelIcon: {
      enabled: true
    },
    classes: 'custom-class-name-1 custom-class-name-2',
    highlightClass: 'highlight',
    scrollTo: false,
    title: 'Product Title',
    text: ['You should click on product title to consult the product details.'],
    when: {
      show: () => {
      },
      hide: () => {
        // console.log('hide step');
      }
    }
  },
]
