import React from 'react'
import './Seccion.css'

export default function Seccion() {
return (
    <>
    <section className="formulario">
        <h5>Formulario De Registro</h5>
        <input className="controles" type="text" name="nombre" value="" placeholder="Ingrese un nombre"/>
        <input className="controles" type="text" name="apellido" value="" placeholder="Ingrese un apellido"/>
        <input className="controles" type="email" name="email" value="" placeholder="Ingrese un email"/>
        <input className="controles" type="password" name="password" value="" placeholder="Ingrese su contraseña"/>
    <input className="boton" type="submit" name="" value="Ingresar"/>
    <p><a href="#">Ya tengo una cuenta </a></p> 
    </section>
    
    
    
    
    </>
)
}
