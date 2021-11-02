import "./App.css";
import datas from "./assets/movies.json";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Main datas={datas} />
      <Footer />
    </>
  );
};

export default App;
