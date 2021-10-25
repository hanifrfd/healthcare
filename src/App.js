import './App.css';
import Navbar from './component/navbar';
import Appointment from './home/Appointment';
import Poli from './home/Poli';
import News from './home/News';
import Jumbotron from './home/jumbotron'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Navbar></Navbar>
        </nav>
      </header>
      <main>
        <Jumbotron></Jumbotron>
        <Appointment></Appointment>
        <Poli></Poli>
        <News></News>
      </main>
    </div>
  );
}

export default App;
