import {Formik} from "formik";
import Field from "./components/Form";
import {Button} from "reactstrap";
import {email, required} from "./components/validate";

function App() {
  return (
    <div className="App">
      <Formik
          initialValues={{
            email:"",
            password:"",
          }}
          onSubmit={(values) => {
            console.log(values)
          }}
      >
        {props => {
          const {handleSubmit} = props;
          return (
              <form onSubmit={handleSubmit}>
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
                <Button
                    type="submit"
                    variant="contained"
                > Sign In
                </Button>
              </form>
          )
        }}
      </Formik>
    </div>
  );
}

export default App;
