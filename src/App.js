import './App.css';

function App() {
  return (
    <div className='App'>
      <input
        onChange={(e) => {
          console.log(e.target.value, 'hello there');
        }}
      />
    </div>
  );
}

export default App;
