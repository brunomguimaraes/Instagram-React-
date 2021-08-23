const sugestoes = [
    {
        usuario: "bad.vibes.memes",
        imagemdaSugestao: 'assets/img/bad.vibes.memes.svg',
        razao: "Segue você" 
    },
    {
        usuario: "chibirdart",
        imagemdaSugestao: 'assets/img/chibirdart.svg',
        razao: "Segue você" 
    },
    {
        usuario: "razoesparaacreditar",
        imagemdaSugestao: 'assets/img/razoesparaacreditar.svg',
        razao: "Novo no Instagram" 
    },
    {
        usuario: "adorable_animals",
        imagemdaSugestao: 'assets/img/adorable_animals.svg',
        razao: "Segue você" 
    },
    {
        usuario: "smallcutecats",
        imagemdaSugestao: 'assets/img/smallcutecats.svg',
        razao: "Segue você" 
    },
];



export default function Suggestions () {
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {sugestoes.map((sugestao) => (<Sugestao imagemdaSugestao = {sugestao.imagemdaSugestao} usuario = {sugestao.usuario} razao = {sugestao.razao} />))} 
        </div>
    );    
}


function Sugestao (props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.imagemdaSugestao} alt="" />
                <div class="texto">
                    <div class="nome">{props.usuario}</div>
                    <div class="razao">{props.razao}</div>
                </div>
            </div>
            <div class="seguir">Seguir</div>
        </div>
    );
}