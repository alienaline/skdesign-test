import React from 'react';
import './App.css';
import FormContainer from './containers/FormContainer/FormContainer';
import Text from './containers/TextContainer/Text';

function App(): JSX.Element {
  return (
    <div className="App">
      <Text />
      <FormContainer />
    </div>
  );
}

export default App;
