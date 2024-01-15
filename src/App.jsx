// import { useState } from "react";
import Button from "./Components/Button";

// import Clock from "./Components/Clock";
import ControlledInput from "./Components/ControlledInput";
// import CountDownClock from "./Components/CountdownClock";
// import DataFetch from "./Components/DataFetch";
import FormValidation from "./Components/FormValidation";
import Todos from "./Todos";
// import MYTextField from "./Comps2/MYTextField";
// import MyCheckBox from "./Comps2/MyCheckBox";
// import MyCounter from "./Comps2/MyCounter";
// import MyForm1 from "./Comps2/MyForm1";
// import MyForm2 from "./Comps2/MyForm2";
// import MyForm2V from "./Comps2/MyForm2V";
// import CountdownTimer from "./Components/CountdownTimer";
// import MyUseState from "./Comps2/MyUseState";

const App = () => {
  // const [time, setTime] = useState(20);
  // function updateTime() {
  //   setTime((prev) => prev - 1);
  // }
  return (
    <>
      <Button />
      <br />
      <hr />
      <ControlledInput />
      <br />
      <hr />
      <FormValidation />
      <br />
      <hr />
      {/* <CountdownTimer time={time} updateTime={updateTime} /> */}
      {/* <CountDownClock timer={120} /> */}
      {/* <DataFetch /> */}
      {/* <MyUseState />
      <br />
      <hr />
      <MyCounter />
      <br />
      <hr />
      <MYTextField />
      <br />
      <hr />
      <MyCheckBox />
      <br />
      <hr />
      <MyForm2V />
      <br />
      <hr />
      <MyForm2 /> */}
      <Todos />
    </>
  );
};

export default App;
