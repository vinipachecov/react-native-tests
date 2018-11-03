import React from 'react';
import { create } from 'react-test-renderer';

import Bill from './';

describe('[Component] Bill', () => {

  const props = {
    bill: {
      dueDay: '11',
      label: 'Rent'
    },
    payBill: jest.fn()
  }
  const tree = create(<Bill { ...props } />);


  it('Matches snapshot', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  })
    
})
