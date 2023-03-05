import {Input} from "reactstrap";

export const CustomInputComponent = (props) => {
    console.log(props)
    return (
        <Input {...props} />
    );
}
