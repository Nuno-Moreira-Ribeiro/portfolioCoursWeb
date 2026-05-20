import './App.css'
import {Navbar, Hero} from './components';


function App() {
    return (
        <div className="bg-[url(assets/yellow-bg.png)] bg-no-repeat bg-top-right bg-size-[auto_600px]"  >
            <Navbar />
            <Hero name={"Moreira Nuno"} job={"Java Developer"} />
        </div>
    )
}

export default App
