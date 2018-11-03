import React from 'react';
import renderer from 'react-test-renderer';

import Header from './index';


// Como é um componente stateless e não recebe nenhuma prop
// será usado o teste com snapshot
test('[Component] Header matches snapshots', () => {
  const tree = renderer.create(<Header/>).toJSON();
  //Lembrando que o snapshot tira uma "foto" da tela e confere como está o código
  expect(tree).toMatchSnapshot();
});