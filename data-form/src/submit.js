import { useContext } from "react";
import FormContext from "./context";

const Submit = () => {
  const { submitter } = useContext(FormContext);

  return (
    <button id="submit" onClick={async (e) => await submitter(e)}>
      submit
    </button>
  );
};

export default Submit;
