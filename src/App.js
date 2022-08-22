import profile from './public/profile.jpg';
import bookfinder from './public/bookfinder.png'
import flowfi from './public/flowfi.png'
import todo from './public/todo.png'
import compostr from './public/compostr.png'
import gs from './public/gs.png'
import anu from './public/anu.png'
import './App.scss';
import Navbar from './components/navigation.js';
import Fader from './components/fader';
import Home from './components/home';
import Section1 from './components/section1.js';
import Section2 from './components/section2';
import Section3 from './components/section3';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <Section1 pic={profile}/>
      <Section2 
        bookfinder={bookfinder}
        flowfi={flowfi}
        todo={todo}
        compostr={compostr}
        gs={gs}
        anu={anu}
        />
      <Section3/>
    </div>
  );
}

export default App;
