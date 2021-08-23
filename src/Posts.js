const posts = [
    {
        usuario: "Meowed",
        imagemPerfil: 'assets/img/meowed.svg',
        imagemDoPost: 'assets/img/gato-telefone.svg'
    },
    {
        usuario: "Barked",
        imagemPerfil: 'assets/img/barked.svg',
        imagemDoPost: 'assets/img/dog.svg'
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

function ParteInferiorDoPost () {
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
                <img src="assets/img/adorable_animals.svg" alt="" />
                <div class="texto">
                    Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
                </div>
            </div>
        </div>
    );
}

export default function Posts () {
    return (
        <div class="posts">
            {posts.map((post) => (<Post usuario = {post.usuario} imagemPerfil = {post.imagemPerfil} imagemDoPost = {post.imagemDoPost}/>))} 
        </div>
    );
}

function Post (props) {
    return (
        <div class="post">
            <TopoDoPost imagemPerfil = {props.imagemPerfil} usuario = {props.usuario} />
            <ConteudoDoPost imagemDoPost = {props.imagemDoPost} />
            <ParteInferiorDoPost />
        </div>
    );
}