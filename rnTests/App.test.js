import React from 'react';
import { create } from 'react-test-renderer';
import App from './App';

describe('[Component] App', () => {
  const tree = create(<App />)

  it('Matches default snapshot', () => {
    expect(tree.toJSON()).toMatchSnapshot();    
  });


  it('Matches initial state', () => {
    expect(tree.root.instance.state).toEqual({ bills: [], error: null, modalOpen: false });    
  });

  it('AddBill updates bills in state', () => {
    console.log(tree.root.findByProps('addBill'));
  });
  
})
