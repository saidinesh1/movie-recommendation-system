import './App.css';

function App() {
  return (
    <div className='App'>
      <input
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
    </div>
  );
}

export default App;
