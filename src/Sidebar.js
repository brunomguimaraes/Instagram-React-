import Suggestions from "./Suggestions";

const nomeDoUsuario = "Catana";
const nick = "catanacomics";
const imagemDoUsuario = 'assets/img/catanacomics.svg';

export default function Sidebar () {
    return (
        <div class="sidebar">
            <Usuario imagemDoUsuario = {imagemDoUsuario} nomeDoUsuario = {nomeDoUsuario} nick = {nick} />
            <Suggestions />  
            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>
            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>          
        </div>
    );
}

function Usuario (props) {
    return (
        <div class="usuario">
            <img src={props.imagemDoUsuario} alt="" />
            <div class="texto">
                <strong>{props.nick}</strong>
                {props.nomeDoUsuario}
            </div>
        </div>
    );
}