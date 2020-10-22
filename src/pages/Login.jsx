import React from 'react';
import "./css/login.css"


export default function login() {
    return (
        <>  
            <div className="container" >
                
                <div className="content first-content">
                    <div className="first-column">
                        <h2 className="title title-primary">Bem vindo!</h2>
                        <p className="description description-primary">  Crie sua conta agora!<br/>É facil e rapido coloque seu comercio em destaque</p>

                        <button className="btn btn-primary">cadastro</button>
                    </div>
                    <div className="second-column">
                        <h2 className="titulo"></h2>
                        
                        <h2 id="frase">Faça seu login!</h2>
                        <form action="" className="form">
                            <input type="Email" placeholder="  Email"/>
                            <input type="password" placeholder="  password" />
                            <button className="btn btn-second">Entrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}


