import React from 'react'
import './FormInit.css'

export default function FormInit() {
    return (
        <>
            <article class="contenedor">
                <form class="formulario">
                    <h1 >FORMULARIO DE CONTACTO</h1>
                    <br />
                    <label for="nombre" class="label">Nombres y Apellidos</label>
                    <input id="nombre" class="input" type="text" placeholder="Escriba su nombre y apellidos" />

                    <label for="correo" class="label">Correo Electronico</label>
                    <input id="correo" class="input" type="text" placeholder="Escriba su correo" />

                    <label for="mensaje" class="label">Mensaje</label>
                    <textarea id="mensaje" class="textarea" placeholder="Aqui deja tu mensaje"></textarea>

                    <input type="submit" class="submit" value="Enviar" />
                </form>
            </article>
        </>
    )
}
