const posts = [
    {
        usuario: "Meowed",
        imagemPerfil: 'assets/img/meowed.svg',
        imagemDoPost: 'assets/img/gato-telefone.svg',
        imagemDeQuemCurtiu: 'assets/img/respondeai.svg',
        nomeDeQuemCurtiu: "respondeai",
        quantidadeDeCurtidas: "101.523"
    },
    {
        usuario: "Barked",
        imagemPerfil: 'assets/img/barked.svg',
        imagemDoPost: 'assets/img/dog.svg',
        imagemDeQuemCurtiu: 'assets/img/adorable_animals.svg',
        nomeDeQuemCurtiu: "adorable_animals",
        quantidadeDeCurtidas: "99.159"
    },
    {
        usuario: "_coelhinhos_",
        imagemPerfil: 'assets/img/perfil_coelhinhos.jpg',
        imagemDoPost: 'assets/img/coelhinho.jpg',
        imagemDeQuemCurtiu: 'assets/img/meowed.svg',
        nomeDeQuemCurtiu: "Meowed",
        quantidadeDeCurtidas: "88.230"
    }
]

function TopoDoPost (props) {
    return (
        <div class="topo">
            <div class="usuario">
                <img src={props.imagemPerfil} alt="" />
                {props.usuario}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    );
}

function ConteudoDoPost (props) {
    return (
        <div class="conteudo">
            <img src={props.imagemDoPost} alt="" />
        </div>
    );
}

function ParteInferiorDoPost (props) {
    return (
        <div class="fundo">
            <div class="acoes">
                <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>

            <div class="curtidas">
                <img src={props.imagemDeQuemCurtiu} alt="" />
                <div class="texto">
                    Curtido por <strong>{props.nomeDeQuemCurtiu}</strong> e <strong>outras {props.quantidadeDeCurtidas} pessoas</strong>
                </div>
            </div>
        </div>
    );
}

export default function Posts () {
    return (
        <div class="posts">
            {posts.map((post) => (<Post usuario = {post.usuario} imagemPerfil = {post.imagemPerfil} imagemDoPost = {post.imagemDoPost} imagemDeQuemCurtiu = {post.imagemDeQuemCurtiu} nomeDeQuemCurtiu = {post.nomeDeQuemCurtiu} quantidadeDeCurtidas = {post.quantidadeDeCurtidas} />))} 
        </div>
    );
}

function Post (props) {
    return (
        <div class="post">
            <TopoDoPost imagemPerfil = {props.imagemPerfil} usuario = {props.usuario} />
            <ConteudoDoPost imagemDoPost = {props.imagemDoPost} />
            <ParteInferiorDoPost imagemDeQuemCurtiu = {props.imagemDeQuemCurtiu} nomeDeQuemCurtiu = {props.nomeDeQuemCurtiu} quantidadeDeCurtidas = {props.quantidadeDeCurtidas}  />
        </div>
    );
}