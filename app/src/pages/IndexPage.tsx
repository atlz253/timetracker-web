import React from "react";


interface IIndexPageProps
{
    loginState: boolean
}


export class IndexPage extends React.Component<IIndexPageProps, {}>
{
    render()
    {
        if (this.props.loginState)
            return(
                <div id="container">
                    <h1>Вы в деле!</h1>
                    <p>
                        Время добавлять новые активности ;)
                    </p>
                </div>
            );
        else
            return(
                <div id="container">
                    <h1>Добро пожаловать!</h1>
                    <p>
                        Чтобы воспользоваться мощью нашей технологии вы должны быть авторизованы
                    </p>
                </div>
            );
    }
}