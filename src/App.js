import logo from "./logo.svg";
import "./App.css";
import Merge from "../src/Js/Algorithm/Sort/Merge.js";
// import Recursion from "./Js/Recursion";
// import ReverseList from "./Js/DS/Linked-list";
// import QuickSort from "./Js/Algorithm/Sort/QuickSort";
// import Bubble from "./Js/Algorithm/Sort/Bubble";

function App() {
    return (
        <div className="App">
			<div>
		    	<Merge />
			</div>
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
