import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";


function TextInputForm({}) {

   // const [value, setValue] = useState('');
   let value = '';

    function handleFormsubmit(event) {
        event.preventDefault();
        console.log('Form Submitted' , event.target.value);
    }

    function handleTextInputChange(event) {
        console.log('Text Input Change');
        console.log(event.target.value);
        value = event.target.value; // whenever I type in the input field, it will update the value
    }

return (
    <form className="flex" onSubmit={handleFormsubmit}>
        <div className="mr-2 flex-1">

            <TextInput
                label="Enter a word or pharse"
                type="password"
                onChange={handleTextInputChange}

            />
        </div>

        <div className="flex">
                <Button
                    text="OK"
                    type="submit"
                />
        </div>
    </form>
);

}

export default TextInputForm;