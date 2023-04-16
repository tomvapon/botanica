// import logo from '../../static/logo.svg';
import './App.css';
import MyNavbar from './components/my_navbar/MyNavbar';
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import Concepts from './pages/concepts/Concepts';
import Home from './pages/home/Home';
import Arboles from './pages/arboles/arboles';
import Flores from './pages/flores/flores';
import About from './pages/about/About';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        location: window.location.pathname,
    }
  }

  pageRouter() {
    const pathlist = this.state.location.split("/")
    let value = '';
    let page;
    switch(pathlist[1]){
      case "conceptos":
        page = Concepts;
        break;
      case "home":
        page = Home;
        break
      case "sobremi":
        page = About
        break
      case "arboles":
        value = pathlist[2]
        page = Arboles
        break
      case "flores":
        value = pathlist[2]
        page = Flores
        break
      default:
        page = Home;
        break;
    }
    const data = {"page": page, "value": value}
    return data;
  }

  render() {
    let data = this.pageRouter()
    return (
        <div>
          <MyNavbar />
          <data.page value={data.value}/>
        </div>
    )
  }
}


export default App;
