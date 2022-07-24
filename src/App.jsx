import "styles/styles.css";
import Index from "pages";
import RhodesianInfoPage from "pages/rhodesian";
import BorderCollieInfoPage from "pages/bordercollie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "layouts/Layout";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/rhodesian" element={<RhodesianInfoPage />} />
            <Route path="/bordercollie" element={<BorderCollieInfoPage />} />
            <Route path="/" element={<Index />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
