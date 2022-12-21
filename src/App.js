import "./App.css";
import Card from "./Components/Card";

function App() {
  return (
    <div className='App'>
      <Card
        id='card1'
        frontHeader='Event'
        title='Title'
        details='Hello world'
      />

      <Card
        id='card2'
        frontHeader='Event 2'
        title='Title 2'
        details='Hello world'
      />
      {/* <Card /> */}
      {/* <Card /> */}
    </div>
  );
}

export default App;
