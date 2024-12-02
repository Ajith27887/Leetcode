import logo from "./logo.svg";
import "./App.css";

function App() {
  var romanToInt = function (s) {
    const onj = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
    const split = s.split("");
    const ans = split.reduce((acc, crr) => console.log(acc + onj[crr]), 0);
    // return ans;
    console.log(ans);
  };
  const s = "MCMXCIV";
  romanToInt(s);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
