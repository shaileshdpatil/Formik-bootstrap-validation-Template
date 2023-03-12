import Login from "./components/Login";
import AuthProvider from "./components/context/index";

function App() {
    return (
        <AuthProvider>
            <Login/>
        </AuthProvider>
    );
}

export default App;
