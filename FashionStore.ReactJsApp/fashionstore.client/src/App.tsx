import { Outlet } from 'react-router-dom';
import './App.css';
import AppHeader from './components/AppHeader';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppHeader></AppHeader>
      </header>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
