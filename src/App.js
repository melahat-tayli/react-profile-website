import { Layout } from "./components/layout";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { Research } from "./components/research";
import { Software } from "./components/software";
import { Footer } from "./components/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Layout>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/software" element={<Software />} />
          <Route path="/research" element={<Research />} />
        </Routes>
        <Footer />
      </Layout>
    </Router>
  );
};

export default App;
