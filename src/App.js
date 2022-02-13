import "./styles.css";
import Home from "./components/HomePage/Home";
import { PDFViewer } from "@react-pdf/renderer";

function App() {
  return (
    <div className="App">
      <Home />

      {/* <PDFViewer>
        <MyDocument />
      </PDFViewer> */}
    </div>
  );
}

export default App;
