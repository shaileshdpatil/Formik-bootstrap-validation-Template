import React from 'react';
import PropTypes from 'prop-types';
import {connect, ErrorMessage, Field as FormikField} from "formik";
import {FormGroup, FormText} from "reactstrap";
import {CustomCheckComponent, CustomInputComponent} from "../CustomInputs";

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

    if (type === "checkbox") {
        fieldItem = (
            <FormikField
                {...props}
                as={CustomCheckComponent}
            />
        )
    }

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
