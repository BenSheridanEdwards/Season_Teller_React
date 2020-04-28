import React from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner'

class App extends React.Component {
  state = { lat: null, errorMessage: '', date: new Date().getMonth() };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }), 
        /* istanbul ignore next */
      err => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div data-test="error-message">Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} date={this.state.date} data-test="component-season-display" />
    }

    return <Spinner message="Please accept location request"/>;
  }

  render() {
    return (
      <div className="border red" data-test="component-app">
        {this.renderContent()}
      </div>
    );
  }
}

export default App;
