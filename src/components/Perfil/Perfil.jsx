import React from 'react'
import './perfil.css'

const Perfil = () => {
  return (
    <section className='content-perfil'>
      <section className='perfil-container'>
        <section className='perfil-saludo'>
          <article className='perfil-info'>
            <h1>Hola, soy <span>Guillermo Neculqueo!!!</span></h1>
            <h2>Desarrollador Web</h2>
          </article>
          <section className='perfil-contact'>
            <a href='' target='_blank'>
              <ion-icon name='logo-github' />
              GitHub
            </a>
            <a href='' target='_blank'>
              <ion-icon name='logo-linkedin' />
              Linkedin
            </a>
            <a href='https://drive.google.com/file/d/1kPUhNCzyVxEogGU6h7G92ww3OLJ34LqG/view?usp=drive_link' target='_blank' rel='noreferrer'>
              <ion-icon name='download-outline' />
              Curriculum
            </a>
          </section>
        </section>

        <section className='perfil-img'>
          <div className='perfil-img-overlay'>
            <div className='perfil-img-container'>
              <img src='https://res.cloudinary.com/dpiwmbsog/image/upload/v1686264426/PERFIL_GENERAL_hbngdm.jpg' alt='foto perfil Guillermo NEculqueo' />
            </div>
          </div>
        </section>
      </section>
    </section>
  )
}

export default Perfil
