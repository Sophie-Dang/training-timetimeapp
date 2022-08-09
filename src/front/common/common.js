import UIComponent from '../../abstract/js-toolbox/ui-component.js';
import { cssVhFix } from '../../abstract/css-vh-fix/css-vh-fix.js';

// If you choose to exclude a component's js from the generated index,
// you have to import it manually:
// import './routes/my-component/my-component.js';
// or, if it's not based on a custom element:
// import { initMyComponents } './routes/my-component/my-component.js';

export default {
  // The init() function is called on page load.
  init() {
    // Fix for crappy vh size on iOS
    cssVhFix();

    // Some helpers
    const replaceClass = (elmt, remove, add) => {
      for(const item of Array.from(elmt.classList)) {
        // remove is a function returning a boolean
        if(remove(item)) {
          elmt.classList.remove(item);
        }
      }

      // add is a an array of strings
      elmt.classList.add.apply(elmt.classList, add);
    };

    const isColorClass = item => item.startsWith('bg-') || item.startsWith('c-');

    // Sendify events
    document.querySelectorAll('.sendify-optin-form').forEach(component => {
      const newsletterCpt = UIComponent.get(component)
      newsletterCpt.on('validate' , ev => console.log(ev.detail))
    })

    // Ajax Buttons events (via <click-fetch> custom elements)
    const AJAX_OUTPUT_SELECTOR = '.ajax-output';

    window.addEventListener('beforeClickFetch', ev => {
      const outputElmt = ev.detail.elmt.closest('div').nextElementSibling.querySelector(AJAX_OUTPUT_SELECTOR);
      replaceClass(outputElmt,
        isColorClass,
        ['bg-gray-40', 'c-black']
      );
    });

    window.addEventListener('clickFetchComplete', ev => {
      const outputElmt = ev.detail.elmt.closest('div').nextElementSibling.querySelector(AJAX_OUTPUT_SELECTOR);
      outputElmt.innerHTML = ev.detail.data || 'Error';

      if(ev.detail.success) {
        replaceClass(outputElmt,
          isColorClass,
          ['bg-green', 'c-black']
        );
      }
    });

    window.addEventListener('clickFetchError', ev => {
      const outputElmt = ev.detail.elmt.closest('div').nextElementSibling.querySelector(AJAX_OUTPUT_SELECTOR);
      replaceClass(outputElmt,
        isColorClass,
        ['bg-pink', 'c-black']
      );
    });

    // Reacting to first DemoComponent instance actions
    const firstDemoComponent = document.querySelector('.demo-component');

    if(firstDemoComponent) {
      firstDemoComponent.on('changeMode', ev => {
        document.body.classList.toggle('--dark-mode', ev.detail.mode === 'dark');
      });
    }

    // Reacting to first Dummy instance actions
    // UIComponent.get returns the component instance
    // for a given element.
    const firstDummy = document.querySelector('.dummy');

    if(firstDummy) {
      firstDummy.on('increment', (ev) => {
        console.log('Incrementing first dummy');
        console.log(ev.detail.component);
      });

      firstDummy.on('reset', (ev) => {
        console.log('Resetting first dummy');
        console.log(ev.detail.component);
      });
    }
  },

  // The finalize() function is called on page load,
  // after all the init() functions have been called.
  // Remove if not needed.
  finalize() {
    //
  }
};
