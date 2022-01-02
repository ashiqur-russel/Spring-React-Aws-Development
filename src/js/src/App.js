import './App.css';
import fetch from 'unfetch'

function App() {
  fetch('http://localhost:8080/students')
    .then(response => response.json()
      .then(data => console.log(data)));
  return (
    <div className="App">
      <h1>Spring boot and React</h1>
    </div>
  );
}

export default App;
