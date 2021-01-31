import React from "react";


interface ILoginProps
{
    token: string,
    onTokenChange(token: string): void
}


interface ILoginState
{
    email: string;
    password: string;
    btnAvaible: boolean;
};


export class LoginPage extends React.Component<ILoginProps, ILoginState>
{   
    state: ILoginState = {
        email: "",
        password: "",
        btnAvaible: false
    };

    Login(email: string, password: string)
    {
        if (email !== "" && password !== "") // TODO: валидация
        {
            const url: string = document.body.querySelector(".login__form")?.getAttribute("action") || "";
            const request: XMLHttpRequest = new XMLHttpRequest();
            request.open("POST", url, true);
            request.setRequestHeader("Content-type", "application/json");
            request.addEventListener("readystatechange", () => {
                if (request.readyState === 4)
                {
                    if (request.status === 200)
                    {
                        const data = JSON.parse(request.response);
                        this.props.onTokenChange(data.token);
                    }
                    this.setState({btnAvaible: true});
                }
            })
            request.send(JSON.stringify({
                "email": email,
                "password": password
            }));
        }
    }

    BtnHandler(event: React.MouseEvent)
    {
        event.preventDefault();
        this.setState({btnAvaible: false});
        this.Login(this.state.email, this.state.password);
    }

    InputHandler(event: React.FormEvent<HTMLInputElement>)
    {
        const target: HTMLInputElement = event.target as HTMLInputElement;
        const name: string = target.name;
        const value: string = target.value;
        if (name === "email")
            this.setState({ email: value });
        else if ( name === "password")
        {
            this.setState(() => ({ password: value }));
            if (value.length < 4)
                this.setState(() => ({btnAvaible: false}));
            else
                this.setState(() => ({btnAvaible: true}));
        }
    }

    render()
    {
        return(
            <div className="login">
                <h1>Login</h1>
                <form method="post" className="login__form" action="http://localhost:5000/api/Account/login">
                    <input 
                        type="text" 
                        name="email" 
                        placeholder="Username" 
                        required={true} 
                        className="login__input" 
                        value={this.state.email}
                        onChange={(event) => this.InputHandler(event)} />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        required={true} 
                        className="login__input"
                        value={this.state.password}
                        onChange={(event) => this.InputHandler(event)} />
                    <input 
                        type="submit" 
                        className="btn" 
                        onClick={(event) => this.BtnHandler(event)} 
                        value="Let me in." 
                        disabled={!this.state.btnAvaible} />
                </form>
                <link rel="stylesheet" href="css/pages/LoginPage.css"/> // TODO: реализовать динамические css в виде стейта????
            </div>
        )
    }
}
