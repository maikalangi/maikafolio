import profile from './profile.jpg';
import bookfinder from './bookfinder.png'
import flowfi from './flowfi.png'
import todo from './todo.png'
import compostr from './compostr.png'
import gs from './gs.png'
import anu from './anu.png'
import './App.scss';
import Navbar from './components/navigation.js';
import Section1 from './components/section1.js';
import Section2 from './components/section2';
import Section3 from './components/section3';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h3 className="name">Maika Langi</h3>
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
