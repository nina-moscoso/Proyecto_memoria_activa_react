import React from 'react'
import './Main.css'
import imagen1 from '../../assets/img/imagen1.jpg'
import imagen3 from '../../assets/img/imagen3.webp'
import imagen2 from '../../assets/img/imagen2.jfif'
import rompecabeza from '../../assets/img/rompecabeza.png'

export default function Main() {
  return (
    <>
        <main>
        <h1 className="tituloinfo">LO QUE DEBES SABER ACERCA DEL ALZHEIMER</h1>
        <article className="container">

            <div className="card">
                <img className="imagen" src={imagen1} alt=""/>
                <p className="textabajo" >¿QUE ES?</p>
            </div>
            <div className="card">
                <img className="imagen" src={imagen3} alt=""/>
                <p className="textabajo" >ETAPAS</p>
            </div>
            <div className="card">
                <img className="imagen" src={imagen2} alt=""/>
                <p className="textabajo" >SINTOMAS</p>
            </div>
            <div className="card">
                <img className="imagen" src={rompecabeza} alt=""/>
                <p className="textabajo" >TRATAMIENTO</p>
            </div>
        </article>
    </main>
    </>
  )
}
