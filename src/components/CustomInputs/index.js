import {Input, Label} from "reactstrap";

export const CustomInputComponent = (props) => {
    return (
        <Input {...props} />
    );
}


export const CustomCheckComponent = (props) => {
    return (
        <div className="d-block">
            <Input {...props} id={props.name} />
            {' '}
            <Label check htmlFor={props.name}>
                {props.label}
            </Label>
        </div>
    );
}
