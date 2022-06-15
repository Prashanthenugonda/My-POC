import logo from "./logo.svg";
import "./App.css";
import FirstChild from "./firstChild";
import { Formik, Field, Form, FieldArray } from "formik";
import { useState } from "react";
import ProjectDetails from "./Components/projectDetails";

function App() {
  const [myarray, setmyarray] = useState([]);

  let arra1 = [
    { name: "", age: "" },
    { name: "", age: "" },
  ];

  const func = () => {
    setmyarray([...arra1]);
  };

  return (
    <div className="App">
      {/* <Formik>
        <FieldArray>
          <Field
            onChange={(e) => {
              console.log(e);
            }}
            name="text"
          />
        </FieldArray>
      </Formik>
      <FirstChild>
        <p>Welcome Prashanth</p>
      </FirstChild> */}
      <ProjectDetails />
    </div>
  );
}

export default App;
