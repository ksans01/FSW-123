import './App.css';
import TodoList from './TodoList.js';
import Card from './Card.js'

TodoList()
function App() {

  const appStyle = {
    margin: 10,
    display: 'inline',
    textAlign: 'center',
  }

  return (
    <div className = "wrapper">
      <p className = 'red' style={{background: 'red', width: 200}}><Card title = "Title 1" subtitle = "Sub Title 1" desc = "Hello World!" /></p>
      <p className = 'orange' style={{background: 'orange', width: 200}}><Card title = "Title 2" subtitle = "Sub Title 2" desc = "Hello World!" /></p>
      <p className = 'yellow' style={{background: 'yellow', width: 200}}><Card title = "Title 3" subtitle = "Sub Title 3" desc = "Hello World!" /></p>
      <p className = 'green' style={{background: 'green', width: 200}}><Card title = "Title 4" subtitle = "Sub Title 4" desc = "Hello World!" /></p>
    </div>
    );
}

export default App;


// to run app type into terminal "npm start"
// wait a minute for page to open up