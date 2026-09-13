import "./App.css";
import SideBar from "../SideBar/SideBar";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {
  return (
    <>
      <section className="app">
        <div className="app__containter">
          <SideBar />
          <Main />
        </div>
        <Footer />
      </section>
    </>
  );
}

export default App;
