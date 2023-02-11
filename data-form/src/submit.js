import { useContext } from "react";
import FormContext from "./context";

const Submit = () => {
  const { submitter } = useContext(FormContext);

  return (
    <button id="submit" onClick={submitter}>
      submit
    </button>
  );
};

export default Submit;
