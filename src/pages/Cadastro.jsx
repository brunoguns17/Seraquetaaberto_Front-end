import React from "react"

export default function Cadastro() {

    return (
        <>
            <div className="container">
                <div className="content second-content">
                    <div className="first-column">
                        <h2 className="title title-primary">hello friend</h2>
                        <p className="description description-primary">Enter personal the details</p>
                        <p className="description description-primary">and start journey with us</p>
                        <button id="signin" className="btn btn-primary">sign up</button>
                    </div>
                    <div className="second-column">
                        <h2 className="titulo">sign in to developer</h2>
                        <div className="social-media">
                        </div>
                        <p className="description">or use you email acount</p>
                        <form action="" className="form">
                            <input type="Email" placeholder="Email" />
                            <input type="password" placeholder="password" />
                            <a href="#">forget your passwrod</a>
                            <button className="btn">sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
  
