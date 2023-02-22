import Header from "./compoments/Header";
import { ToastContainer } from "react-toastify";
import ProducstList from "./compoments/ProductList";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <ProducstList />
    </>
  );
}

export default App;
