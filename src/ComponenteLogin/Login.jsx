import React from 'react'
import '../ComponenteLogin/login.css'
export default function Login() {
  return (
    <>
    <header>

    </header>
    <main className='conte_login'>
        <article>
            <section className="imagen"> 
                <h1 className="bienvenida">¡BIENVENIDO!</h1>
                <p className="title-pro">MEMORIA ACTIVA</p>
            </section>
            <section className="login">
                <h1 className="log">Iniciar Seccion</h1>
                <form className="formato" action="">
                    <label for="correo">Email</label> <br/>
                        <div className="correo">
                        <img className="usuario" src="imagenes/icons8-correo.gif"alt=""/>
                        <input  className="nombre" type="text" placeholder="correo electronico"/>
                    </div>
                    <label for="Contraseña">Contraseña</label> <br/>
                        <div className="correo">
                        <img className="usuario" src="imagenes/icons8-contraseña.gif"alt=""/>
                        <input  className="nombre" type="password"/>
                        </div>
                <br/>
                <input className="inicio" type="submit" value="Iniciar Seccion"/>
                <br/>
                <br/>
                <input className="cuenta" type="button" value="Crea una cuenta"/>
                <br/>
                <br/>
                <div className="registro">
                    <img className="google" src="imagenes/icons8-logo-de-google-48.png"alt=""/>
                    <input className="nombre" type="button" value="Registrate con google"/>
                </div>
                </form>
            </section>
        </article>
    </main>
    </>
  )
}

