import React from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import Container from '../Container/Container';
import DiplayPage from '../DisplayPage/DisplayPage';
import './app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: {},
      respCode: 0,
    };
  }


  componentDidMount() {
    axios.post('/products')
      .then((response) => {
        this.setState({
          inventory: response.data.data,
          respCode: response.data.code,
        });
        console.log(this.state.inventory);
      })
      .catch((error) => {
        console.log(error);
      });
  }


  render() {
    return (
      <div className>
        <Header />
        <Container >
          <DiplayPage inventory={this.state.inventory} />
        </Container >
      </div>
    );
  }
}

export default App;

