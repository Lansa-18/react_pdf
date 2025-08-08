import { PDFViewer } from "@react-pdf/renderer";
import "./index.css";
import MyMemo from "./components/MyMemo";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <PDFViewer width="100%" height="100%">
        <MyMemo />
      </PDFViewer>
    </div>
  );
}

export default App;
  