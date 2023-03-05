import React from 'react';
import PropTypes from 'prop-types';
import {connect, ErrorMessage, Field as FormikField} from "formik";
import {FormText} from "reactstrap";
import {FormGroup} from "reactstrap";
import {CustomInputComponent} from "../CustomInputs";

const Field = (props) => {
    const {type, placeholder, formik, name} = props;
    const {errors, touched} = formik;
    const error = Boolean(errors[name] && touched[name]);

    let fieldItem = (
        <FormikField
            {...props}
            type={type}
            name={name}
            placeholder={placeholder}
            error={Boolean(error)}
            as={CustomInputComponent}
        />
    )

    return (
        <FormGroup>
            {fieldItem}
            <ErrorMessage
                name={name}
                render={error => <FormText error={Boolean(error)}>{error}</FormText>}
            />
        </FormGroup>
    );
};

Field.propTypes = {
    type: PropTypes.oneOf([
        "password",
        "email",
    ]).isRequired,
    validate: PropTypes.func,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
}
Field.defaultProps = {
    className: "mb-3",
    name: "default_name",
    sx: null
}
export default connect(Field);
