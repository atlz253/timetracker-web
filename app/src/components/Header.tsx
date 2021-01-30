import React from "react";
import { NavLink } from "react-router-dom";


interface IHeaderProps
{
    loginState: boolean
}


export class Header extends React.Component<IHeaderProps, {}>
{
    render()
    {
        return(
            <header className="header">
                <div className="header__logo">TimeTracker</div>
                <ul className="header__nav">
                    <li className="header__link"><NavLink to="/">Главная</NavLink></li>
                    <li className="header__link"><NavLink to="/login">Вход</NavLink></li>
                </ul>
            </header>
        )
    }
}