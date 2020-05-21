import React from 'react';

import { CardGrid, Chart, CountrySelector, Header } from './components';
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
      <div>
        <Header />
        <div className={styles.container}>
          <CountrySelector handleChange={this.handleChange} />
          <CardGrid data={data} />
          <Chart data={data} country={country} />
        </div>
      </div>
    );
  }
}

export default App;
