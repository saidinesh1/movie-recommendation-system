import './App.css';

function App() {
  return (
    <div className='App'>
      <input
        onChange={(e) => {
          console.log(e.target.value, 'hello there first thing to check');
        }}
      />
    </div>
  );
}

export default App;
