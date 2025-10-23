import { PDFViewer } from "@react-pdf/renderer";
import "./index.css";
import InterCompanyLoan from "./components/InterCompanyLoan";
// import MyMemo2 from "./components/MyMemo2";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <PDFViewer width="100%" height="100%">
        <InterCompanyLoan />
      </PDFViewer>
    </div>
  );
}

export default App;
