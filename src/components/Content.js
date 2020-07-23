import React from 'react'
import logo from '../logo.svg';

export default function Content(){
    return(
        <div>
            <img src={process.env.PUBLIC_URL + '/logo192.png'} alt="logo" />
            <p>el contenido bla bla bla bla bla bla, como cambiar contenido segun menu bla bla bla bla</p>
            <p>el contenido bla bla bla bla bla bla, como cambiar contenido segun menu bla bla bla bla</p>
        </div>
    );
}