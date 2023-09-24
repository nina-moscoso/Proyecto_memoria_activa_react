import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import caminata from '../imagenes/caminata.jpg'
import baile from '../imagenes/Baile.jpeg'
import ejercicios from '../imagenes/Act-Fisica.jpg'
import terapia from '../imagenes/musicoterapia.webp'
import karaoke from '../imagenes/karaokee.jpg'
import rompecabeza from '../imagenes/Rompecabezas.png'
import cricigrama from '../imagenes/Crucigrama.jpg'
import pintar from '../imagenes/pintar.jpg'
import observar from '../imagenes/Observacion.jpg'

export default function Actividades() {
  return (
    <>
        <Header />
        <main className="contenido-actividades">
            <section className="cuadro">
                <h1>ACTIVIDADES FISICAS</h1>
                <p>El ejercicio ofrece numerosos beneficios para nuestra salud, por lo tanto, 
                    llevaremos a cabo las siguientes actividades
                </p>

                <section className='imagenes-1'>
                    <nav className='img-contenido'>
                        <h1 className='titulo'>Caminatas</h1>
                        <nav className='padre-img'>
                            <img className='img' src={caminata} alt="" />
                        </nav>
                    </nav>

                    <nav className='img-contenido'>
                        <h1 className='titulo'>Baile</h1>
                        <nav className='padre-img'>
                            <img className='img' src={baile} alt="" />
                        </nav>
                    </nav>

                    <nav className='img-contenido'>
                        <h1 className='titulo'>Ejercicios</h1>
                        <nav className='padre-img'>
                            <img className='img' src={ejercicios} alt="" />
                        </nav>
                    </nav>
                </section>
            </section> 
  
            <section className="cuadro">
                
                <h1>ACTIVIDADES LUDICAS COGNITIVAS</h1>
                <p>
                    Son especialmente beneficiosas, ya que ayudan a estimular sus mentes
                    y fomentar la interacción social
                </p>
                <section className='imagenes-1'>
                    <nav className='img-contenido'>
                        <h1 className='titulo'>Musica terapia</h1>
                        <nav className='padre-img'>
                            <img className='img' src={terapia} alt="" />
                        </nav>
                    </nav>
                    <nav className='img-contenido'>
                        <h1 className='titulo'>Karaoke</h1>
                        <nav className='padre-img'>
                            <img className='img' src={karaoke} alt="" />
                        </nav>
                    </nav>

                    
                </section>
                
            </section>
  
            <section className="cuadro">
                <h1>JUEGOS MENTALES</h1>
                <p>
                Los juegos mentales pueden brindar numerosos beneficios al estimular
                la mente, mejorar la cognición y proporcionar entretenimiento. A
                continuación, te presentamos algunas ideas de juegos mentales que
                puedes disfrutar
                </p>

                <section className='imagenes-1-mentales'>
                    <nav className='img-contenido-1'>
                        <h1 className='titulo'>Rompecabezas</h1>
                        <nav className='padre-img'>
                            <img className='img' src={rompecabeza} alt="" />
                        </nav>
                    </nav>
                    <nav className='img-contenido'>
                        <h1 className='titulo'>Sopa de letras</h1>
                        <nav className='padre-img'>
                            <img className='img' src={karaoke} alt="" />
                        </nav>
                    </nav>
                    <nav className='img-contenido'>
                        <h1 className='titulo'>Crucigrama</h1>
                        <nav className='padre-img'>
                            <img className='img' src={cricigrama} alt="" />
                        </nav>
                    </nav>
                </section>
                <section className='imagenes-1-mentales'>
                    <nav className='img-contenido-1'>
                        <h1 className='titulo'>Pintar</h1>
                        <nav className='padre-img'>
                            <img className='img' src={pintar} alt="" />
                        </nav>
                    </nav>
                    <nav className='img-contenido'>
                        <h1 className='titulo'>Observacion</h1>
                        <nav className='padre-img'>
                            <img className='img' src={observar} alt="" />
                        </nav>
                    </nav>

                </section>


            </section>
        </main>
        <Footer />
    </>
  )
}
