// Core App creator

/**
 * Set core app to window object and protect it's deleting/rewritig
 *
 * @method injectCoreApp
 * @param {Object} App core application
 * @returns {Object} core application object
 */
export default function injectCoreApp(coreApp) {
  let app = null;

  Object.defineProperty(window, 'app', {
    get() {
      return app;
    },
    set(value) {
      if (app !== null) {
        throw new Error('Attempt to override root app');
      }
      app = value;
    }
  });

  window.app = coreApp;
}
