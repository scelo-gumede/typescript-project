import React from 'react';
import { AppContainer } from './styles';
import Column from './Column';
import Card from './Card';

function App() {
  return (
    <AppContainer>
      <Column text=" To Do">
        <Card text="Generate app scaffold" />
      </Column>

      <Column text="In progress">
        <Card text="learn typescript " />
      </Column>

      <Column text="done">
        <Card text="Begin to use static typing" />
      </Column>
    </AppContainer>
  );
}

export default App;
