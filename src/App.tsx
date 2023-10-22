import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";

function App() {
  const onClickButton = () => {
    // Define the behavior when the "Create" button is clicked
    // You can implement your logic here
  };

  const onClickInput = () => {
    // Define the behavior when the input field is clicked
    // You can implement your logic here
  };
  return (
    <>
      <Header inputText="" onClickButton={onClickButton} onClickInput={onClickInput}/>
      <Assignments />
    </>
  );
}

export default App;
