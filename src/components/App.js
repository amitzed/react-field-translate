import React from 'react';

import Client from './Client';
import { LanguageStore } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

class App extends React.Component {
  render() {
    return (
      <div className="wrapper" style={{background: 'lightgrey', border: '10px solid teal' }}>
        <div className="ui container" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
          <LanguageStore>
            <LanguageSelector />
            <Client />
          </LanguageStore>
        </div>
      </div>
    )
  }
}

export default App;
