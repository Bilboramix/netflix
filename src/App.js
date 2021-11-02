import "./App.css";
import items from "./assets/movies.json";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Main items={items} />
      <Footer />
    </>
  );
};

export default App;
