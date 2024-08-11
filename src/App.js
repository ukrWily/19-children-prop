import "./App.css";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div className="App">
      <Wrapper color="lightblue">
        <h2>Text inside of the wrapper</h2>
      </Wrapper>
      <Wrapper color="lightgreen">
        <h2>Text inside of the wrapper</h2>
        <input type="text" placeholder="Enter value" />
      </Wrapper>
    </div>
  );
}

export default App;
