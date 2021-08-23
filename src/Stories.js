const stories = [
    {
        profileName: "9gag",
        imgStorie: 'assets/img/9gag.svg',
    },
    {
        profileName: "Meowed",
        imgStorie: 'assets/img/meowed.svg'
    },
    {
        profileName: "Barked",
        imgStorie: 'assets/img/barked.svg'
    },
    {
        profileName: "nathanwpylestrangeplanet",
        imgStorie: 'assets/img/nathanwpylestrangeplanet.svg'
    },
    {
        profileName: "wawawicomics",
        imgStorie: 'assets/img/wawawicomics.svg'
    },
    {
        profileName: "respondeai",
        imgStorie: 'assets/img/respondeai.svg'
    },
    {
        profileName: "filomoderna",
        imgStorie: 'assets/img/filomoderna.svg'
    },
    {
        profileName: "memeriagourmet",
        imgStorie: 'assets/img/memeriagourmet.svg'
    }
];

export default function Stories () {
    return (
        <div class="stories">
            {stories.map((story) => (<Storie profileName={story.profileName} imgStorie={story.imgStorie} />))}
            <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>            
    );
};

function Storie (props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.imgStorie} alt="" />
            </div>
            <div class="usuario">
                {props.profileName}
            </div>
        </div>
    );
};
