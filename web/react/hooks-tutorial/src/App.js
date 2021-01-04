import React, {createContext, useState} from 'react'
import logo from './logo.svg';
import './App.css';
import EffectButton from './EffectButton'
import ContextA from './components/ContextSample/ContextA'

export const UserContext = createContext()
export const HobbyContext = createContext()

function App() {
  /*
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  */
  /* 
  return (
    <EffectButton />
  )
  */
  const [user, setUser] = useState({
    name: 'セイラ',
    age: '17'
  })
  const [hobby, setHobby] = useState('キャンプ')

  return (
    <div className='App'>
      <UserContext.Provider value={user}>
        <HobbyContext.Provider value={hobby}>
          <ContextA />
        </HobbyContext.Provider>
      </UserContext.Provider>
    </div>
  )

}

export default App;
