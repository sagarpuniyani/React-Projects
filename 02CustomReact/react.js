import customRender from './services/customRender.js'

const reactElement = {
    type : 'a',
    props : {
        src : 'https://www.google.com',
        target : '_blank'
    },
    children : 'click me visit google '
}


const mainContainer  = document.getElementById('root')

customRender (reactElement , mainContainer);