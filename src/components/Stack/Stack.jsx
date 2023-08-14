import React from 'react'
import './stack.css'
const Stack = () => {
  return (
    <section className='containStack'>
      <section className='sobreMi'>
        <h1>Sobre mi</h1>
        <p>
          Soy un desarrollador web, con mas de 10 años de experiencia.
        </p>
      </section>
      <section className='miStack'>
        <ul className='listStack'>
          <li>
            <img src='https://res.cloudinary.com/dpiwmbsog/image/upload/v1691991358/porfolio/html02_mxnxck.svg' alt='logo html' />
            <span>HTML</span>
          </li>
          <li>
            <img src='https://res.cloudinary.com/dpiwmbsog/image/upload/v1691991477/porfolio/css02_igqwcd.svg' alt='logo css' />
            <span>CSS</span>
          </li>
          <li>
            <img src='https://res.cloudinary.com/dpiwmbsog/image/upload/v1691992430/porfolio/scss2-svgrepo-com_deizgv.svg' />
            <span>Scss</span>
          </li>
          <li>
            <img src='https://res.cloudinary.com/dpiwmbsog/image/upload/v1691992549/porfolio/javascript03_jgvilr.svg' />
            <span>JavaScript</span>
          </li>
          <li>
            <img src='https://res.cloudinary.com/dpiwmbsog/image/upload/v1691991155/porfolio/react-js-icon_dffayu.svg' alt='logo react' />
            <span>React</span>
          </li>
          <li>
            <img src='https://res.cloudinary.com/dpiwmbsog/image/upload/v1691992777/porfolio/redux-svgrepo-com_atstk6.svg' alt='logo redux' />
            <span>Redux toolkit</span>
          </li>
          <li>
            <img src='https://res.cloudinary.com/dpiwmbsog/image/upload/v1691991149/porfolio/2bootstrap_fq8j76.svg' alt='logo bootstrap' />
            <span>Bootstrap</span>
          </li>
          <li>
            <img src='https://res.cloudinary.com/dpiwmbsog/image/upload/v1691991156/porfolio/tailwind_qgvtyl.svg' alt='logo taildwind' />
            <span>Taildwind</span>
          </li>

          <li>
            <img src='https://res.cloudinary.com/dpiwmbsog/image/upload/v1691991151/porfolio/github02_b3rhih.svg' alt='logo github' />
            <span>GitHub</span>
          </li>
          <li>
            <img src='https://res.cloudinary.com/dpiwmbsog/image/upload/v1691991152/porfolio/linux-svgrepo-com_ze9cri.svg' alt='logo linux' />
            <span>Linux</span>
          </li>
          <li>
            <img src='https://res.cloudinary.com/dpiwmbsog/image/upload/v1691991153/porfolio/mysql03_vpmfay.svg' alt='logo mysql' />
            <span>Mysql</span>
          </li>
          <li>
            <img src='https://res.cloudinary.com/dpiwmbsog/image/upload/v1691992961/porfolio/mariadb-svgrepo-com_jr0sp7.svg' alt='logo mariadb' />
            <span>MariaDb</span>
          </li>
          <li>
            <img src='https://res.cloudinary.com/dpiwmbsog/image/upload/v1691991155/porfolio/postman-icon_fi5zm3.svg' alt='logo postman' />
            <span>Postman</span>
          </li>
          <li>
            <img src='https://res.cloudinary.com/dpiwmbsog/image/upload/v1691991149/porfolio/bash02_nfxxbj.svg' alt='logo bash' />
            <span>Bash Script</span>
          </li>

        </ul>
      </section>
    </section>
  )
}

export default Stack
