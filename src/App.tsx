import CsvLoader from "./components/CsvLoader";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">YNAB Smart Converter</header>
      <main className="App-main">
        <CsvLoader onChange={console.log} />
      </main>
    </div>
  );
};

export default App;
