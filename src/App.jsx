import "./App.css";
import toast, { Toaster } from "react-hot-toast";
import Button from "./components/Button3D.jsx";

const successToast = (text = "Success!") => toast.success(text);
const errorToast = (text = "ERROR!") => toast.error(text);

function App() {
  return (
    <>
      <div className="container">
        <div className="button-row">
          <Button variant="success" onClick={() => successToast()}>Success</Button>
          <Button variant="danger" onClick={() => errorToast()}>Danger</Button>
        </div>
        <div className="button-row">
          <Button variant="primary" onClick={() => successToast("Primary button")}>Primary</Button>
          <Button variant="secondary" onClick={() => successToast("Secondary button")}>Secondary</Button>
        </div>
        <div className="button-row">
          <Button onClick={() => successToast("Default button")}>Default</Button>
        </div>
        <Toaster />
      </div>
    </>
  );
}

export default App;