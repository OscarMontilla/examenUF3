import './scss/index.scss'
import { Home } from './vistas/home'
import { header } from "./componentes/header";

document.querySelector('header').innerHTML = header.template


document.querySelector('main').innerHTML = Home.template
Home.script()