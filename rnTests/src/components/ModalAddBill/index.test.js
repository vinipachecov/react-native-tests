import React from 'react';
import { create } from 'react-test-renderer';

import ModalAddBill from './';

describe('[Component] ModalAddBill', () => {

  
  const props = {
    addBill: jest.fn(),
    modalVisible: false    
  };  
  const tree = create(<ModalAddBill { ...props } />);

  it('Matches snapshot', () => {
    expect(tree.toJSON()).toMatchSnapshot();    
  })
  
  
  it('Matches initial state', () => {
    // para pegar o estado é preciso pegar a instancia
    // do componente
    expect(tree.root.instance.state).toEqual({ bill: {} });    
  })

  it('Calls addBill prop', () => {
    // para pegar o estado é preciso pegar a instancia
    // do componente
    // Chamar a função
    tree.root.props.addBill();
    // depois esperar e ver se a função foi chamada
    expect(tree.root.props.addBill).toHaveBeenCalled();    
  })
  
})
