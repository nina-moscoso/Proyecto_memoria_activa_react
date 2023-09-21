import React from 'react'
import './Header.css'

export default function Header() {
return (
    <>
    <header>

<div class="menu contenedor">

    <a href="#" className="logo">Logo</a>
    <input type="checkbox" id="menu"/>
    <label for="menu">
        <img src="img/menu-btn.png" className="menu-icono" alt=""/>
    </label>

    <nav className="nav">
        <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Quienes somos</a></li>
            <li><a href="#">Informacion</a></li>
            <li><a href="#">Que ofrecemos</a></li>
            <li><a href="#">Contactenos</a></li>
        </ul>
    </nav>
</div>
    </header>
    </>
)
}
