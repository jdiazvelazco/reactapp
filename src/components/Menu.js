import React from 'react'
import './Menu.css';

export default function Menu(){
    return(
        <nav>
            <ul>
            <li> <a class="active"  href="#">Inicio</a> </li>
            <li> <a href="#">Productos</a> </li>
            <li> <a href="#">Contacto</a> </li>
            </ul>
        </nav>
    );
}