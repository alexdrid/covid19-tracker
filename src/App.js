import React from 'react';

import { DashBoard, Header, CountrySelector } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  };

  async componentDidMount() {
    const data = await fetchData();
    this.setState({
      data: data,
    });
  }

  handleChange = async (country) => {
    const data = await fetchData(country);

    this.setState({
      data: data,
      country: country,
    });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles['app-container']}>
        <Header />
        <CountrySelector handleChange={this.handleChange} />
        <DashBoard
          data={data}
          country={country}
        />
      </div>
    );
  }
}

export default App;
