import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { Header } from "./components/Header";
import { IndexPage } from "./pages/IndexPage";


interface IAppState
{
  isLoggedIn: boolean,
  authToken: string
}


export class App extends React.Component<{}, IAppState>
{
  state: IAppState = {
    isLoggedIn: false,
    authToken: ""
  }

  SetToken(token: string)
  {
    this.setState({
      authToken: token,
      isLoggedIn: true
    });
  }

  LogOut()
  {    
    this.setState({
      authToken: "",
      isLoggedIn: false
    });
  }

  render()
  {
    return (
      <BrowserRouter>
        <Header loginState={this.state.isLoggedIn} logOut={this.LogOut.bind(this)} />
        <div id="wrapper">
          <Switch>
            <Route path="/" exact >
              <IndexPage loginState={this.state.isLoggedIn} />
            </Route>
            <Route path="/login">
              <LoginPage token={this.state.authToken} onTokenChange={this.SetToken.bind(this)} />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}