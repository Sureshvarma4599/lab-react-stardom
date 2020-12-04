import logo from './logo.svg';
import './App.css';
import prostar from './prostars.json'
import Pro from './components/pro'
function App() {
  return (
    <div className="App">
    
     <div className="header">
       <h1>PROSTARS</h1>
     </div>
     <table>
       <Pro/>
     </table>
    </div>
  );
}

export default App;
