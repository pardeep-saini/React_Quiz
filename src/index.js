import React from 'react';
import ReactDOM from 'react-dom';
import './resources/styles.css';

import Main from './components/core/Main.jsx';


class App extends React.Component {
    render() {
      return (
        <div className="App">
            <Main />
        </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
