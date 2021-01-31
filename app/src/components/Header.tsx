import React from "react";
import { NavLink } from "react-router-dom";


interface IHeaderProps
{
    loginState: boolean,
    logOut(): void
}


export class Header extends React.Component<IHeaderProps, {}>
{
    render()
    {
        var authButton: JSX.Element;

        if (this.props.loginState)
            authButton = <li className="header__link"><NavLink to="/login" onClick={this.props.logOut}>Выход</NavLink></li>;
        else
            authButton = <li className="header__link"><NavLink to="/login">Вход</NavLink></li>;


        return(
            <header className="header">
                <div className="header__logo">TimeTracker</div>
                <ul className="header__nav">
                    <li className="header__link"><NavLink to="/">Главная</NavLink></li>
                    { authButton }
                </ul>
            </header>
        );
    }
}
