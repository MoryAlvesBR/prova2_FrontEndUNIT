import React from 'react'
import {Link} from 'react-router-dom'

import Header from '../../components/Header'
import FooterMenu from '../../components/FooterMenu'

import './style.css'

const Home = () => {

  return (
    <div className="App">
      <Header listTitle={'App cadastro'}/>
      <main>
        <header>
          <h2>Seja bem vindo asociado!</h2>
          <p>Inicie realizando o seu <Link to="/login">login</Link></p>
          <p>Estamos muito felizes em te ter conosco!</p>
        </header>
      </main>
      <FooterMenu />
    </div>
  );
}

export default Home;
