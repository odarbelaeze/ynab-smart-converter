import { useState } from "react";

import CsvLoader from "./components/CsvLoader";
import ConfigSelector from "./components/ConfigSelector";

import "./App.css";

interface State {
  headers: string[];
  data: object[];
}

const App = () => {
  const [_, setState] = useState<State | null>(null);

  return (
    <div className="App">
      <header className="App-header">YNAB Smart Converter</header>
      <main className="App-main">
        <CsvLoader onChange={(headers, data) => setState({ headers, data })} />
        <ConfigSelector headers={["helo"]} />
      </main>
    </div>
  );
};

export default App;
