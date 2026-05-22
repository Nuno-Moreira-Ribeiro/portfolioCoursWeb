import './App.css'
import {Navbar, Hero} from './components';


function App() {
    return (
        <div className="bg-[url(assets/yellow-bg.png)] bg-no-repeat bg-top-right bg-size-[auto_620px]"  >
            <div className="mx-18">
                <Navbar name="Madelyn Torff" />
                <Hero name={"Madelyn Torff"} job={"UI/UX Designer"} />
            </div>
        </div>
    )
}

export default App
