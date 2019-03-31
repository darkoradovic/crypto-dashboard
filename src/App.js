import React, { Component } from 'react';
import './App.css';
import AppLayout from './components/AppLayout';
import AppBar from './components/AppBar';
import AppProvider from './components/AppProvider';
import Settings from './components/Settings';
import Content from './components/Shared/Content';
import Dashboard from './components/Dashboard/index';

class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppProvider>
          <AppBar/>
          <Content>
            <Settings />
            <Dashboard />
          </Content>
        </AppProvider>
      </AppLayout>
    );
  }
}

export default App;
