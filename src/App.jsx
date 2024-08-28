import TextInput from "./components/TextInput/TextInput";
import TextInputForm from "./components/TextInputForm/TextInputForm";

function App() {
  return (
    <div>
      <h1 className="font-semibold text-3xl"> Welcome to Hangman</h1>
      <TextInput label={"Input your word"} value="" onChange={() => {}} />
      <TextInputForm />
    </div>
  );
  
  }
export default App;