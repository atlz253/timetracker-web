import React from "react";


interface ILoginState
{
    email: string;
    password: string;
    btnAvaible: boolean;
};


export class LoginForm extends React.Component<{}, ILoginState>
{   
    state: ILoginState = {
        email: "",
        password: "",
        btnAvaible: false
    };

    Login(event: React.MouseEvent)
    {
        event.preventDefault();

        if (this.state.email !== "" && this.state.password !== "") // TODO: валидация
        {
            const url: string = document.body.querySelector(".login__form")?.getAttribute("action") || "";
            const request: XMLHttpRequest = new XMLHttpRequest();
            request.open("POST", url, true);
            request.setRequestHeader("Content-type", "application/json");
            request.addEventListener("readystatechange", () => {
                if (request.readyState === 4 && request.status === 200)
                {
                    console.log(request.response);
                }
            })
            request.send(JSON.stringify({
                "email": this.state.email,
                "password": this.state.password
            }));
        }
    }

    Handler(event: React.FormEvent<HTMLInputElement>)
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
                this.setState(() => ({btnAvaible: false}))
            else
                this.setState(() => ({btnAvaible: true}))
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
                        onChange={(event) => this.Handler(event)} />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        required={true} 
                        className="login__input"
                        value={this.state.password}
                        onChange={(event) => this.Handler(event)} />
                    <FormBtn avaible={this.state.btnAvaible} login={(event) => this.Login(event)} />
                </form>
            </div>
        )
    }
}


interface IFormBtnProps
{
    avaible: boolean
    login(event: React.MouseEvent): void
}


class FormBtn extends React.Component<IFormBtnProps>
{

    render()
    {
        return(
            <input 
                type="submit" 
                className="btn" 
                onClick={(event) => this.props.login(event)} 
                value="Let me in." 
                disabled={!this.props.avaible} />
        )
    }
}