import profile from './profile.jpg';
import bookfinder from './bookfinder.png'
import flowfi from './flowfi.png'
import todo from './todo.png'
import './App.scss';
import Navbar from './components/navigation.js';
import Section1 from './components/section1.js';
import Section2 from './components/section2';
import Section3 from './components/section3';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Section1 pic={profile}/>
        <Section2 
          bookfinder={bookfinder}
          flowfi={flowfi}
          todo={todo}
        />
        <Section3/>
      </header>
    </div>
  );
}

export default App;
