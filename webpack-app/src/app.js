import Lary from './components/lary/lary.js'
import './css/components.css'

const App = function (){
    var dom = document.getElementById('app');
    var lary = new Lary();

    dom.innerHTML = lary.tpl;
}

new App();
