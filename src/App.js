import Login from "./components/Login";
import AuthProvider from "./components/context/index";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "ar", "hi", "gr", "fr"],
    fallbackLng: "en",
    debug: false,
    detection: {
      order: ["path", "cookie", "htmlTag"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/language/{{lng}}.json",
    },
});

function App() {
    return (
        <AuthProvider>
            <Login/>
        </AuthProvider>
    );
}

export default App;
