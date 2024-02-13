import { Outlet } from "react-router";
import "./App.css";
import { Footer, Header } from "./components";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
