import "./styles.css";
import SnackBar from "./SnackBar";
import { useState } from "react";
// https://dev.to/gthinh/make-your-own-snackbars-using-react-redux-and-styled-components-40kn
export default function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setShow(true)}>Open SnackBar</button>
      <SnackBar
        open={show}
        message={"This is a SanckBar"}
        duration={3}
        onClose={() => {
          setShow(false);
        }}
      />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
