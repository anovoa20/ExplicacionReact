import "styles/styles.css";
import Index from "pages";
import RhodesianInfoPage from "pages/rhodesian";
import BorderCollieInfoPage from "pages/bordercollie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/rhodesian" element={<RhodesianInfoPage />} />
          <Route path="/bordercollie" element={<BorderCollieInfoPage />} />
          <Route path="/" element={<Index />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
