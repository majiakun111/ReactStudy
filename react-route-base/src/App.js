import React, { Component } from 'react';
import { NavLink, BrowserRouter, Route, Redirect} from 'react-router-dom'

class Culture extends Component {
    render() {
        return (
            <div>
                Culture
            </div>
        );
    }
}

class Contact extends Component {
    render() {
        return (
            <div>
                Contact
            </div>
        );
    }
}

class History extends Component {
    render() {
        return (
            <div>
                History
            </div>
        );
    }
}

class Recommend extends Component {
    render() {
        return (
            <div>
                Recommend123
            </div>
        );
    }
}

class Music extends Component {
    render() {
        return (
            <div>
               Music
            </div>
        );
    }
}

class Home extends Component {
    render() {
        return (
            <div>
                <NavLink exact to="/" activeStyle={{ color: "purple", fontSize: "30px" }}>Recommend</NavLink>
                <NavLink  to="/home/music" activeStyle={{ color: "purple", fontSize: "30px" }}>Music</NavLink>
                
                <Route  exact path="/" component={Recommend}></Route>
                <Route  path="/home/music" component={Music}></Route>
            </div>
        );
    }
}

class About extends Component {
    render() {
        return (
            <div>
                <NavLink exact to="/about" activeStyle={{ color: "purple", fontSize: "30px" }}>Culture</NavLink>
                <NavLink to="/about/history" activeStyle={{ color: "purple", fontSize: "30px" }}>History</NavLink>
                <NavLink to="/about/contact" activeStyle={{ color: "purple", fontSize: "30px" }}>Contact</NavLink>

                <Route path="/about" component={Culture}></Route>
                <Route path="/about/history" component={History}></Route>
                <Route path="/about/contact" component={Contact}></Route>
            </div>
        );
    }
}

class Me extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLogin: false,
        }
    }

    render() {
        const { isLogin }  = this.state
        return isLogin ? (
            <div>
                Me
            </div>
        ) : <Redirect to="/login" />
    }
}


class Detail extends Component {
  render() {
    const location = this.props.location
    console.log(location.state);

      return (
          <div>
              {"name:" + location.state.name +  "  age:" + location.state.age}
          </div>
      )
  }
}


class Login extends Component {
    render() {
        return (
            <div>
                Login
            </div>
        );
    }
}


class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    {/* <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/me">Me</Link> */}

                    {/* NavLink模糊匹配  */}
                    <NavLink exact to="/" activeStyle={{ color: "red", fontSize: "30px" }}>Home</NavLink>
                    {/* 传参方式1  
                     <NavLink to="/detail?name=mjk" activeStyle={{ color: "red", fontSize: "30px" }}>Detail</NavLink> 
                    */}
                    {/* 传参方式2  */}
                    <NavLink to= {{
                                pathname : "/detail", 
                                search: "?name=mjk",
                                state : {name : "mjk", age : 25}
                            }} 
                            activeStyle={{ color: "red", fontSize: "30px" }}>Detail</NavLink> 
                    <NavLink to="/about" activeStyle={{ color: "red", fontSize: "30px" }}>About</NavLink>
                    <NavLink to="/me" activeStyle={{ color: "red", fontSize: "30px" }}>Me</NavLink>

                    <Route path="/" component={Home}></Route>
                    <Route path="/detail" component={Detail}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/me" component={Me}></Route>
                    <Route path="/login" component={Login}></Route>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;