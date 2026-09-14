import "./App.css";
import SideBar from "../SideBar/SideBar";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {
  return (
    <>
      <section className="app">
        <div className="app__content">
          <div className="app__container">
            <SideBar />
            <Main />
          </div>
          <Footer />
        </div>
      </section>
    </>
  );
}

export default App;
