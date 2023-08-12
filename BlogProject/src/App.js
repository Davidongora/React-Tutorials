// import logo from './logo.svg';
// import './App.css';
import Navbar from './navbar'; 
import Home from './Home'

function App() {
  const title = 'welcome title';
  const likes = 50;
  const link = 'https://localhost:3030'
  return (

    <div className="App">
      <div className="content">
        <Navbar /> 
        <Home />    {/*nesting  */}
        {/* self closing tag/ one can also use the </navbar> */}
        <h1>App component</h1>
        <p>liked { likes } times</p>
        <p>{"hello world "}</p>
        <p>{10}</p>
        <p>{[1,2,3,4,5]}</p>
        <p>{Math.random() * 10}</p>
        <a href={link}>Google Link</a>
      </div>
    </div>
  );
}

export default App;
