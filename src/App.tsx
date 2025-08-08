import { PDFViewer } from "@react-pdf/renderer";
import "./index.css";
import MyMemo from "./components/MyMemo";
import MyMemo2 from "./components/MyMemo2";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <PDFViewer width="100%" height="100%">
        <MyMemo />
        {/* <MyMemo2 /> */}
      </PDFViewer>
    </div>
  );
}

export default App;
