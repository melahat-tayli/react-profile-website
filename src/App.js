import { Layout } from "./components/layout";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { Footer } from "./components/footer";
import './App.css';

const App = () => {
  return (
    <Layout>
      <Header/>
      <Main/>
      <Footer/>
    </Layout>
  );
};

export default App;