import profile from './profile.jpg';
import './App.css';
import Navbar from './components/navigation.js';
import Section1 from './components/section1.js';
import Section2 from './components/section2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Section1 pic={profile}/>
        <Section2/>
      </header>
    </div>
  );
}

export default App;
