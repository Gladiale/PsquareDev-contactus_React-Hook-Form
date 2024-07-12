import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactUs from "./component/ContactUs";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ContactUs />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
