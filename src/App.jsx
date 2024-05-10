
import Bg from "./Components/Bg";
import "./App.css";
import ContactUsForm from "./Components/ContactUsForm";



function App() {
    return (
        <>
            <Bg />
            <div className="flex justify-center items-center w-[100%] h-[100vh]">
                <ContactUsForm />
            </div>
            
        </>
    );
}

export default App;
