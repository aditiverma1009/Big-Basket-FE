import React from 'react';
import Header from '../Header/Header';
import Container from '../Container/Container';
import DiplayPage from '../DisplayPage/DisplayPage';
import './app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <div>
        <Header />
        <Container>
          <DiplayPage />
        </Container>
      </div>
    );
  }
}

export default App;

