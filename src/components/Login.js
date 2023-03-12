import React, {useContext} from 'react';
import {Formik} from "formik";
import Field from "./Form";
import {email, required} from "./validate";
import {Button} from "reactstrap";
import noteContext from "./context/valueContext";

const Login = () => {
    const context = useContext(noteContext);
    return (
        <Formik
            initialValues={{
                email:"",
                password:"",
            }}
            onSubmit={(values) => {
                context.updateState(values.email);
            }}
        >
            {props => {
                const {handleSubmit} = props;
                return (
                    <form onSubmit={handleSubmit}>
                        {context.state && context.state.value}
                        <Field
                            type="email"
                            label="Email"
                            placeholder="Enter name here..."
                            name="email"
                            validate={email}
                        />
                        <Field
                            type="password"
                            label="Password"
                            placeholder="Enter Password here..."
                            name="password"
                            validate={required}
                        />
                        <Field
                            type="checkbox"
                            label="Password"
                            placeholder="Enter Password here..."
                            name="password"
                            validate={required}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                        > Sign In
                        </Button>
                    </form>
                )
            }}
        </Formik>
    );
};

export default Login;
