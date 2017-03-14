import { expect } from 'chai';

import { injectCoreApp } from '../src';

describe('injectCoreApp', function () {

  let windowOld;

  beforeEach(() => {
    windowOld = global.window;
    global.window = {};
  });

  afterEach(() => {
    global.window = windowOld;
  });

  it('should set undefined to app if no argumets were provided', function() {
    injectCoreApp();

    expect(global.window.app).to.eql(undefined);
  });

  it('should correctly set core application obejct to window.app', function() {
    const coreObj = { name: 'coreApplication' };
    injectCoreApp(coreObj);

    expect(global.window.app).to.deep.equal(coreObj);
  });

  it('should throw an error if window.app instead of rewriting', function() {
    const coreObj = { name: 'coreApplication'};
    const coreObjRewrite = { name: 'coreApplication'};
    injectCoreApp(coreObj);
    expect(() => global.window.app = coreObjRewrite).to.throw('Attempt to override root app');
    expect(global.window.app).to.equal(coreObj);
    expect(global.window.app).to.deep.equal(coreObj);
  });
});
