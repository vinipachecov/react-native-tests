import React from 'react';
import { create, } from 'react-test-renderer';

import ButtonToggleModal from './';

//Faremos um test suite pois ele recebe outros parâmetros
describe('[Component] ButtonToggleModal', () => {

  const toggleModal = jest.fn();
  const tree = create(<ButtonToggleModal toggleModal={toggleModal} />);


  it('matches snapshot ', () => {    
    expect(tree.toJSON()).toMatchSnapshot();
  })
  

  it('Calls toggleModal when pressed', () => {
    // pegamos a raiz[já que não há filhos] e dentro das propriedades 
    // o que é passado para o componente
    tree.root.props.toggleModal();
    // * Não foi usado o getInstance pois como foi comentado ele não possui filhos


    expect(toggleModal).toHaveBeenCalled();
  })
  
})