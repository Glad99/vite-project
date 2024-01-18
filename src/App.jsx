import Button from "./components/Buttons";
// import image from "./assets/night.jpg"
import "./App.css"
import { users } from "./assets/data";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Greeting from "./components/Greeting";
import CardList from "./components/CardList";
import { ActionLink } from "./components/ActionLink";

const App = () => {
  return <div className="bg-red-500">
    <NavBar/>
    <ActionLink />
    <Greeting name = "Tayo" age = {20}/>
    <Greeting username = {'Ayo'}/>
    <CardList/>
      {/* <img src="/green.jpg" alt="" /> //public
      <img src={image} width={200} alt="" /> */}
      <Button />
      <Footer/>
    </div>
}

export default App;