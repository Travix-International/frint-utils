import { expect } from 'chai';

import { createReducer } from '../src';

describe('createReducer', function () {

  it('returns the inital state on the first call with no matches', function() {
    const actionHandlers = {};
    const initialState = 'the initial state';
    const reducer = createReducer(initialState, actionHandlers);
    expect(reducer(undefined, { type: 'TEST_ACTION_TYPE' })).to.eql(initialState);
  });

  it('returns the correct state on the first call with a matche', function() {
    const actionHandlers = {
      TEST_ACTION_TYPE() {
        return 'the proper state';
      }
    };
    const reducer = createReducer('theintialstate', actionHandlers);
    expect(reducer(undefined, { type: 'TEST_ACTION_TYPE' })).to.eql('the proper state');
  });

  it('returns the same state if action handler is not a function', function() {
    const actionHandlers = {
      TEST_ACTION_TYPE: 'it is not a function'
    };
    const reducer = createReducer('theintialstate', actionHandlers);
    expect(reducer(undefined, { type: 'TEST_ACTION_TYPE' })).to.eql('theintialstate');
  });

  it('returns the same state if no value matched', function() {
    const actionHandlers = {};
    const reducer = createReducer({ someObj: true }, actionHandlers);
    const state = reducer(undefined, { type: 'TEST_ACTION_TYPE' });
    expect(reducer(state, { type: 'TEST_ACTION_TYPE' })).to.eql(state);
  });

  it('returns a new state if a value matched', function() {
    const actionHandlers = {
      TEST_ACTION_TYPE: function() {
        return { someObj: 2 };
      }
    };
    const reducer = createReducer({ someObj: 1 }, actionHandlers);
    const state = reducer(undefined, {});
    expect(reducer(state, { type: 'TEST_ACTION_TYPE' })).to.eql({ someObj: 2 });
  });
});
