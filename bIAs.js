// Creating a kaboom scene
kaboom({
    background: [0, 0, 0],
    width: 1200,
    height: 800,
    pos: [100, 0]
});

///////////// Assets /////////////
loadRoot("assets/");
// Sprites
// 1) Backgrounds
loadSprite("classRoom1","classroomBg.png");
loadSprite("headmasterBg", "headmasterOffice.png");
loadSprite("cvsBg", "cvBg.png");
loadSprite("mathClassroom","mathClassroomBg.png");
loadSprite("artClassroom","artClassroomBg.png");
loadSprite("scienceClassroom","scienceBg.png");
loadSprite("englishClassroom","englishBg.png");
// 2) School map
loadSprite("schoolMap","schoolMap.png");
// 3) K.A.T.E.
loadSprite("KATE", "KATEcu2.png");
loadSprite("overWorldKATE", "KATE1.png");
// 4) Student and K.A.T.E
loadSprite("student", "student_sprite.png")
// 5) Player's teacher - John Alden
loadSprite("playerTeacherAvatar", "playerTeacherCu.png");
loadSprite("playerTeacher", "playerTeacher.png");
// 6) Maths teacher - Ross Parker
loadSprite("mathsTeacherAvatar", "oldTeachCu.png");
loadSprite("mathsTeacher", "oldTeach.png");
// 7) Arts teacher - Yvonne Lefebvre
loadSprite("artTeacher", "artTeach.png");
loadSprite("artTeacherAvatar", "artTeachCu.png");
// 8) Science teacher - Angus Mackenzie
loadSprite("scienceTeacher", "scienceTeach.png");
loadSprite("scienceTeacherAvatar", "scienceTeachCu.png");
// 9) English teacher - James Moore
loadSprite("englishTeacher", "englishTeach.png");
loadSprite("englishTeacherAvatar", "englishTeachCu.png");
// 10) Headmaster - Atticus Umbridge
loadSprite("headmaster", "headmaster.png");
loadSprite("headmasterAvatar", "headmasterCu.png");
// 11) Sounds
loadSound("corridorAmbient", "corridor.mp3");
loadSound("spacePress", "spacePress.mp3");
loadSound("door", "door.mp3");
loadSound("click", "click.mp3");
// 12) CV's
loadSprite("mathTeachCV", "mathTeachCV.png");
loadSprite("mathTeachCV1", "mathTeachCV1.png");
loadSprite("mathTeachCV2", "mathTeachCV2.png");
loadSprite("mathTeachFR", "mathteachFR.png");
loadSprite("mathTeachFR1", "mathteachFR2.png");
loadSprite("mathTeachFR2", "mathteachFR3.png");
loadSprite("ArtteachCV", "ArtteachCV.png");
loadSprite("artTeachCV1", "artTeachCV1.png");
loadSprite("artTeachCV2", "artTeachCV2.png");
loadSprite("ArtteachFR", "artteachFR.png");
loadSprite("artTeachFR1", "artteachFR2.png");
loadSprite("artTeachFR2", "artteachFR3.png");
loadSprite("englishTeachCV", "englishTeachCV.png");
loadSprite("englishTeachCV1", "englishTeach1.png");
loadSprite("englishTeachCV2", "englishTeach2.png");
loadSprite("englishTeachFR", "englishteachFR.png");
loadSprite("englishTeachFR1", "englishteachFR1.png");
loadSprite("englishTeachFR2", "englishteachFR2.png");
loadSprite("scienceTeachCV", "scienceTeachCV.png");
loadSprite("scienceTeachCV1", "scienceTeachCV1.png");
loadSprite("scienceTeachCV2", "scienceTeachCV2.png");
loadSprite("scienceTeachFR", "scienceteachFR.png");
loadSprite("scienceTeachFR1", "scienceteachFR2.png");
loadSprite("scienceTeachFR2", "scienceteachFR3.png");
loadSprite("EvansCV", "EvansCV.png");
loadSprite("EvansCV1", "EvansCV1.png");
loadSprite("EvansCV2", "EvansCV2.png");
loadSprite("evansFR", "evansFR.png");
loadSprite("evansFR1", "evansFR2.png");
loadSprite("evansFR2", "evansFR3.png");
loadSprite("LaurenCV", "LaurenCV.png");
loadSprite("LaurenCV1", "LaurenCV1.png");
loadSprite("LaurenCV2", "LaurenCV2.png");
loadSprite("laurenFR", "laurenFR.png");
loadSprite("laurenFR1", "laurenFR2.png");
loadSprite("laurenFR2", "laurenFR3.png");
loadSprite("JohCV", "JohCV.png");
loadSprite("JohCV1", "JohCV1.png");
loadSprite("JohCV2", "JohCV2.png");
loadSprite("JohFR", "johanssonFR.png");
loadSprite("JohFR1", "johanssonFR2.png");
loadSprite("JohFR2", "johanssonFR3.png");

///////////// Variables /////////////
let placeHolder = "My name: ";
let placeHolderFR = "Mon nom: ";
let namePlayer = "";
const pad = 24;
let playerPoints = 0;
let mathsPoint = 0;
let sciencePoint = 0; 
let headmPoint = 0;
let englishPoint = 0; 
let artPoint = 0;
let playerPos = [319, 324];
let cvReadCounter = 0;
let cvReadCounter1 = 0;
let playerChoice = "";
let kateChoice = "A";
let choiceTableFR = [
    {key: "a", value: "[A]. Was there something specifc you looked for in a CV?"},
    {key: "b", value: "[B]. What did you learn from each discussion we've had with the teachers today?"},
    {key: "c", value: "[C]. Do you think that Mr. Umbridge will agree with your choice, K.A.T.E.?"}
];

///////////////////////////////////////////////////////////////// Scene 1: Start Screen //////////////////////////////////////////////////////////////////////////////
scene("accueil", () =>{
    add([
        text(`              b.I.A.s

    A game by Sophie and Tessa

APPUYER ENTER 
POUR COMMENCER`, {
            size: 48,
            font: "monospace",
            lineSpacing: 10,
            
        }),
        pos (100, 200),
    ]);
    onKeyPress("enter", () =>{
        go("nameInputFR");
    });
});

///////////////////////////////////////////////////////////////// Scene 2: Name input ////////////////////////////////////////////////////
scene("nameInputFR", () => {
    add([
        pos(150, 200),
        text("Tapez votre prénom puis appuyez sur enter", {
            font: "monospace",
            width: width() - pad * 2,
            size: 32,
            lineSpacing: 8,
            letterSpacing: 4,
        })
    ]);
    const input = add([
        pos(250, 250),
        text(`${placeHolder}`, {
            font: "monospace",
            width: width() - pad * 2,
            size: 32,
            lineSpacing: 8,
            letterSpacing: 4,
        }),
    ]);
    onCharInput((ch) => {
        input.text += ch
    });
    onKeyPressRepeat("backspace", () => {
        input.text = input.text.substring(0, input.text.length - 1)
    });
    onKeyPress("enter", () => {
        placeHolderFR = input.text
        go("introductionFR");
        namePlayer = placeHolder.replace("My name: ", "");
    });
});

///////////////////////////////////////////////////////////////// Scene 3: Introduction /////////////////////////////////////////////////////////////////
scene("introductionFR", () =>{
    // Adding the background image of the scene
    let classRoom = add([
        sprite("classRoom1"),
        // Make the background centered on the screen
        pos(width() / 2, height() / 2),
        anchor("center"),
        fixed()
      ]);
    // Adding the player's teacher to the background
    const playerTeacher = add([
        sprite("playerTeacher"),
    ]);
    // Adding the dialog/text box at the bottom of the screen
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        anchor("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]);
    // Adding the portrait to the left of the text box
    const portrait = add([
        rect(200, 220, {radius: 32}),
        anchor("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
    // Creating a space for the text to be added
    const txt = add([
        text("", { 
            size: 32, 
            width: 800,
            font: "monospace",
            //// align: "center"
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
        anchor("center"),
    ]);
    // Character avatar
    const avatar = add([
        sprite("playerTeacherAvatar"),
        scale(0.51),
        anchor("center"),
        pos(portrait.pos),
    ]);

    const dialogs = [
        // Teacher introducing AI:
        [ "playerTeacherAvatar", "Bonjour à tous."],
        [ "playerTeacherAvatar", "Aujourd'hui, nous allons nous familiariser avec l'intelligence artificielle, ou 'IA' en abrégé." ],
        [ "playerTeacherAvatar", "L'IA permet aux ordinateurs d'apprendre et de se développer, un peu comme le développement du cerveau." ],
        [ "playerTeacherAvatar", "Tout comme vous et moi, une IA peut comprendre le langage, planifier des choses, résoudre des problemès, penser et faire preuve d'intelligence." ],
        [ "playerTeacherAvatar", "C'est un excellent moyen de faire en sorte que les ordinateurs exécutent des tâches à notre place et nous aident dans notre vie quotidienne !" ],
        [ "playerTeacherAvatar", "Si vous jouez à des jeux video, il est fort probable que vous ayez déjà rencontre une IA. Elle contribue aux experiences de jeu en les rendant plus naturelles." ],
        [ "playerTeacherAvatar", "En bref, les IA peuvent être utiles dans toutes sortes de scenarios pour automatiser les choses et aider à realiser des tâches complexes." ],
        // Teacher introduces K.A.T.E.:
        [ "playerTeacherAvatar", "Je vais vous présenter une IA aujourd'hui." ],
        [ "playerTeacherAvatar", "Voici K.A.T.E. Son nom est l'abréviation de 'Kind Artifical Teaching Enrichment Tool'. " ], 
        [ "playerTeacherAvatar", "Son travail consiste à aider les écoles à trouver les meilleurs enseignants à embaucher et à suggerer qui, selon elle, sera le candidat le plus approprié." ],
        [ "playerTeacherAvatar", "Naturellement, notre directeur s'y est intéressé. Je suis sûr que vous avez tous entendu dire que notre école est à la recherche d'un nouveau professeur de sciences." ],
        [ "playerTeacherAvatar", "Quel meilleur moment pour faire appel à K.A.T.E. pour nous aider à vous trouver un formidable nouveau professeur ?" ],
        [ "playerTeacherAvatar", "Cependant, nous ne voulons pas lui laisser le dernier mot sur le choix de la personne qui sera engagée pour vous enseigner." ],
        [ "playerTeacherAvatar", "Après tout, tout comme vous ou moi, elle peut faire des erreurs !" ],
        [ "playerTeacherAvatar", "C'est là que vous, les enfants, intervenez !" ],
        [ "playerTeacherAvatar", "Aujourd'hui, l'un d'entre vous sera choisi pour passer un peu de temps avec K.A.T.E. pour que vous puissiez voir et comprendre comment elle travaille." ],
        [ "playerTeacherAvatar", "Les IA ont besoin de collecter des informations pour apprendre avant de pouvoir faire des suggestions éclairées." ],
        [ "playerTeacherAvatar", "Pour cette raison, la personne choisie accompagnera K.A.T.E. dans son voyage de collecte de données !" ],
        [ "playerTeacherAvatar", "Puisque notre directeur souhaite que notre nouvelle recrue s'intègre rapidement dans notre école, K.A.T.E. puisera ses informations auprès d'anciens candidats." ],
        [ "playerTeacherAvatar", "En d'autres termes, elle fera la connaissance d'autres enseignants et decouvrira leur expérience d'embauche." ],
        [ "playerTeacherAvatar", "Leur parcours, leur expérience professionnelle, leurs opinions personnelles et leurs points de vue..." ],
        [ "playerTeacherAvatar", "Elle consultera même leur CV !" ],
        [ "playerTeacherAvatar", "Une fois que K.A.T.E. aura rassemblé toutes les informations nécessaire, elle sera en mesure de nous dire qui, selon elle, est le meilleur candidat pour le poste de professeur de sciences." ],
        [ "playerTeacherAvatar", "L'élève qui accompagnera K.A.T.E. devra apprendre à ses côtes et aura la possibilité de donner son avis sur le meilleur candidat." ],
        [ "playerTeacherAvatar", "De cette façon, nous pourrons comparer l'évaluation de K.A.T.E. à celle d'un élève !" ],
        [ "playerTeacherAvatar", "Je me demande si elles seront différentes." ],
        [ "playerTeacherAvatar", "J'ai ici un bol avec tous vos noms écrits sur des bouts de papier différents." ],
        [ "playerTeacherAvatar", "J'en choisirai un au hasard et l'heureux gagnant sera choisi pour être le compagnon de K.A.T.E. !" ],
        [ "playerTeacherAvatar", "Très bien! Un... " ],
        [ "playerTeacherAvatar", "Deux..." ],
        [ "playerTeacherAvatar", "Trois..." ],
        [ "playerTeacherAvatar", "..." ],
        [ "playerTeacherAvatar", `${namePlayer}!` ],
        [ "playerTeacherAvatar", "Tu accompagneras K.A.T.E. !" ],
        [ "playerTeacherAvatar", "Emmène-la faire un tour pour parler à des enseignants et recueillir des informations sur eux. Qu'est-ce qui les à aidés à être des candidats performants ici ?" ],
        [ "playerTeacherAvatar", "Prends ton temps!" ],
        [ "playerTeacherAvatar", "Une fois que toi et K.A.T.E. aurez rassemblé toutes les informations nécessaires pour prendre une décision éclairée, reviens ici et nous verrons ce qu'elle suggère..." ],
        [ "playerTeacherAvatar", "et si tu es d'accord avec elle!" ],
    ];

    let curDialog = 0;

    // Cycle through the dialogs
    onKeyPress("space", () => {
        curDialog += 1;
        // Adding a delay between hitting space bar and the text showing up:
        wait(0.3,() => {
        updateDialog()})
    });

    // Update the on screen sprite & text
    function updateDialog() {
        if (curDialog < dialogs.length){
        const [ char, dialog ] = dialogs[curDialog];
        // Update the dialog text
        txt.text = dialog} else {
            play("door")
            go("corridorFR")
        };
    };
    // Initialising the dialogue
    updateDialog();
});

//////////////////////////////////////////////////// Scene 4: corridor /////////////////////////////////////////////////////////////////
scene("corridorFR", () =>{
    const music = play("corridorAmbient", {
        loop:true
    }); 
    let map = add([
        sprite("schoolMap"),
        pos(width() / 2, height() / 2),
        anchor("center"),
        fixed()
    ]);
    // I. Perimeters
    // Setting up wall, lockers and mics positions
    // 1) Walls (red)
        let corridorWallDown = add([
            pos(8, 342),
            rect(1150, 4),
            opacity(0),
            color(255, 0, 0),
            area(),
            body({ isStatic: true }),
        ]);
        let corridorWallUp = add([
            pos(8, 237),
            rect(1150, 4),
            opacity(0),
            color(255, 0, 0),
            area(),
            body({isStatic: true})
        ]);
        let corridorWallLeft = add([
            pos(11, 238),
            rect(6, 110),
            opacity(0),
            color(255, 255, 0),
            area(),
            body({ isStatic: true }),
        ]);
        let corridorWallRight = add([
            pos(1150, 225),
            rect(4, 130),
            opacity(0),
            color(255, 0, 0),
            area(),
            body({ isStatic: true })
        ]);
    // 2) Lockers (green)
        let lockers = add([
            pos(37, 240),
            rect(98, 8),
            opacity(0),
            color(0, 255, 0),
            area(),
            body({ isStatic: true }), 
            "locker"
        ]);
        add([
            pos(138, 240),
            rect(98, 8),
            opacity(0),
            color(0, 255, 0),
            area(),
            body({ isStatic: true }), 
            "locker"
        ]);
        add([
            pos(340, 240),
            rect(98, 8),
            opacity(0),
            color(0, 255, 0),
            area(),
            body({ isStatic: true }), 
            "locker"
            ]);
        add([
            pos(37, 333),
            rect(98, 8),
            opacity(0),
            color(0, 255, 0),
            area(),
            body({ isStatic: true }), 
            "locker"
        ]);
        add([
            pos(168, 333),
            rect(98, 8),
            opacity(0),
            color(0, 255, 0),
            area(),
            body({ isStatic: true }), 
            "locker"
        ]);
        add([
            pos(340, 333),
            rect(98, 8),
            opacity(0),
            color(0, 255, 0),
            area(),
            body({ isStatic: true }), 
            "locker"
        ]);
    // 3) Doors (purple)
        let mathsDoor = add([
            pos(302, 238),
            rect(25, 5),
            opacity(0),
            color(102, 0, 255),
            area(),
            body({ isStatic: true }),
            "door",
            "mathsDoor"
        ]);
        let scienceDoor = add([
            pos(803, 238),
            rect(25, 5),
            opacity(0),
            color(102, 0, 255),
            area(),
            body({ isStatic: true }),
            "door",
            "scienceDoor"
        ]);
        let headmastersDoor = add([
            pos(135, 340),
            rect(25, 5),
            opacity(0),
            color(102, 0, 255),
            area(),
            body({ isStatic: true }),
            "door",
            "headMastersDoor"
        ]);
        let playerClassDoor = add([
            pos(305, 340),
            rect(25, 5),
            opacity(0),
            color(102, 0, 255),
            area(),
            body({ isStatic: true }),
            "door",
            "playerClassDoor"
        ]);
        let batroomDoor = add([
            pos(499, 340),
            rect(25, 5),
            opacity(0),
            color(102, 0, 255),
            area(),
            body({ isStatic: true }),
            "door",
            "bathroomDoor"
        ]);
        let englishDoor = add([
            pos(591, 340),
            rect(25, 5),
            opacity(0),
            color(102, 0, 255),
            area(),
            body({ isStatic: true }),
            "door",
            "englishDoor"
        ]);
        let artDoor = add([
            pos(805, 340),
            rect(25, 5),
            opacity(0),
            color(102, 0, 255),
            area(),
            body({ isStatic: true }),
            "door",
            "artDoor"
        ]);
    // 4) Corridor misc
    let corridorPlant1 = add([
        pos(1122, 245),
        rect(27, 25),
        opacity(0),
        color(242, 219, 15),
        area(),
        body({ isStatic: true }),
        "plant",
    ]);
    let corridorPlant2 = add([
        pos(1122, 313),
        rect(27, 27),
        opacity(0),
        color(242, 219, 15),
        area(),
        body({ isStatic: true }),
        "plant",
    ]);

    // Player and player movement
    // Adding player into the over world 
    let overWorldPlayer = add([
        sprite("student"),
        anchor("center"),
        pos(playerPos),
        area(),
        scale(0.10),
        body(),
        ]);

    overWorldPlayer.onUpdate(() => {
    });
    // Adding movements to the player:
    let playerSpeed = 300
    onKeyDown("left", () => {
            overWorldPlayer.move(-playerSpeed, 0)        
    });
    onKeyDown("right", () => {
            overWorldPlayer.move(playerSpeed, 0)
    });
    onKeyDown("up", () => {
            overWorldPlayer.move(0, -playerSpeed)
    });
    onKeyDown("down", () => {
            overWorldPlayer.move(0, +playerSpeed)
    });

    // III. Corridor interactions
        const textbox = add([
            rect(width() - 300, 120, { radius: 32 }),
            anchor("center"),
            pos(center().x + 100, height() - 125),
            outline(2),
        ]);
        textbox.hidden = true;
        const portrait = add([
            rect(200, 120, {radius: 32}),
            anchor("center"),
            pos(center().x - 450, height() - 125),
            outline(2),
            "portrait"
        ]);
        portrait.hidden = true;
        const avatar = add([
            sprite("KATE"),
            scale(0.3),
            anchor("center"),
            pos(portrait.pos),
        ]);
        avatar.hidden = true
        const txt = add([
            text("", { 
                size: 32, 
                width: 800,
                font: "monospace",
                // align: "center"
                }),
            color([0, 0, 0]),
            pos(textbox.pos),
            anchor("center"),
        ]);
        txt.hidden = true
    // A function that deletes the text boxes once the dialogue is finished
    function delegetthing (){
        textbox.hidden = true;
        avatar.hidden = true; 
        portrait.hidden = true;
        txt.hidden = true
        playerSpeed = 300
    };

    // A function to update the dialogues (for objects with minimal interaction)
    function updateDialog(v, t) {
        if (v <= t.length && v != 0){
        textbox.hidden = false;
        avatar.hidden = false; 
        portrait.hidden = false;
        txt.hidden = false;  
        txt.text = t[v - 1];
        playerSpeed = 0} else {
            delegetthing();
        };
    };
    // Two functions to update the dialogues (for doors from which to access the teachers)
    function YorNChoiceDoor (string){
        portrait.hidden = true;
        avatar.hidden = true;
        textbox.hidden = false;
        txt.text = "Appuyez sur [Y] si vous voulez entrer, ou [N] si vous ne voulez pas.";
    onKeyPress("y", () => {
        go(string)
    });
    onKeyPress("n", () => {
        delegetthing();
    });
    };
    function updateDoorsDialog(v, t, string) {
        if (v <= t.length && v != 0){
        textbox.hidden = false;
        avatar.hidden = false; 
        portrait.hidden = false;
        txt.hidden = false;  
        txt.text = t[v - 1];
        playerSpeed = 0;
        }
        else if (v > t.length){
            YorNChoiceDoor(string);
        };
    };

    // A) Interaction with LOCKERS when player presses space while touching them
    let lockerD = ["Oh, est-ce qu'on cherche des professeurs cachés dans des casiers ? Quels farceurs!", "C'est une tradition ici que les professeurs s'enferment là-dedans ?", "Peut-être que c'est leur coin tranquille ?", "En tout cas, on dirait qu'il n'y a personne là-dedans.", "On continue ?"];
    let lockerDialog = 0;
    overWorldPlayer.onCollide("locker", () => {
        onKeyPress("space", () => {
            if (lockerDialog <= lockerD.length){
                console.log('locker'+lockerDialog)
                lockerDialog += 1;
                wait(0.3,() => {
                    updateDialog(lockerDialog, lockerD);
                });
            } else if (lockerDialog > lockerD.length){
                delete lockerDialog
            }
        });
    })

    // B) Interaction with CORRIDOR PLANTS when player presses space while touching them
    let plantsD = ["Quelle belle plante verte ! Et c'est une vraie en plus !", "Sais-tu que la présence de telles plantes peut atténuer les sentiments d'anxiété et de stress ?", "Celà peut aider à se sentir plus en paix... et plus calme...", "C'est un peu comme mettre une décoration dans la maison de tes Sims.", "Je suppose que si un moment de calme dans un casier n'aide pas, une plante verte peut sûrement apaiser tes professeurs.", "La nature est précieuse."];
    let plantDialog = 0;
    overWorldPlayer.onCollide("plant", () => {
        onKeyPress("space", () => {
            if (plantDialog <= plantsD.length){
                console.log('plant'+plantDialog)
                plantDialog += 1;
                wait(0.3,() => {
                    updateDialog(plantDialog, plantsD);
                })
            } else if (plantDialog > plantsD.length){
                delete plantDialog
            };
        });
    })

    // C) Interaction with BATHROOM DOOR when player presses space when touching it
    let bathroomD = ["Oh, tu as besoin d'aller aux WC ?", "Vas-y, je t'attends ici alors.", "...", "...", "...", "Ok? Allons-y !"];
    let bathroomDialog = 0;
    overWorldPlayer.onCollide("bathroomDoor", () => {
        onKeyPress("space", () => {
            if (bathroomDialog <= bathroomD.length){
                console.log('bathroom'+bathroomDialog)
                bathroomDialog += 1;
                wait(0.3,() => {
                    updateDialog(bathroomDialog, bathroomD);
                });
            } else if (bathroomDialog > bathroomD.length){
                delete bathroomDialog
            }
        });
    });

    // D) Interactions with DOORS 
    // Interactions with doors that lead to teachers or the headmaster vary depending on weather the player has already visited the room in question or not
    
    // a) Maths Door
    let mathsDoorD = ["C'est la porte de la classe de maths, n'est-ce pas ?", "M. Parker devrait être là.", "Allons-nous lui parler de son expérience en tant que candidat retenu pour enseigner dans cette école ?", "Il pourrait avoir de précieuses informations...", "afin que je puisse suggérer la meilleure personne pour le poste d'enseignant de sciences !"];
    let mathsDoorD2 = ["Nous avons déjà parlé à ton professeur de maths, tu te souviens ?", "J'aime bien ses lunettes rouges.", "Tu es sûr de vouloir lui rendre visite à nouveau ?"];
    let mathsDoorDialog = 0;
    overWorldPlayer.onCollide("mathsDoor", () => {
        onKeyPress("space", () => {
            console.log('maths'+mathsDoorDialog)
            if (mathsPoint == 0) {
                if (mathsDoorDialog <= mathsDoorD.length){
                    mathsDoorDialog += 1;
                    wait(0.3,() => {
                        updateDoorsDialog(mathsDoorDialog, mathsDoorD, "mathsClassFR");
                    })
                } else if (mathsDoorDialog > mathsDoorD.length) {
                    delete mathsDoorDialog
                }               
            } else if (mathsPoint > 0) {
                if (mathsDoorDialog <= mathsDoorD.length){
                    mathsDoorDialog += 1;
                    wait(0.3,() => {
                        updateDoorsDialog(mathsDoorDialog, mathsDoorD2, "mathsClassFR");
                    });
                } else if (mathsDoorDialog > mathsDoorD.length) {
                    delete mathsDoorDialog
                }
            }
        });
    })

    // b) Science Door
    let scienceDoorD = ["C'est la porte de la classe de sciences, n'est-ce pas ?", "M. MacKenzie devrait être là.", "Allons-nous lui parler de son expérience en tant que candidat retenu pour enseigner dans cette école ?", "Il pourrait avoir de précieuses informations...", "afin que je puisse suggérer la meilleure personne pour le poste d'enseignant de sciences !"];
    let scienceDoorD2 = ["Nous avons déjà visite cette classe, tu es sûr de vouloir y retourner ?"];
    let scienceDoorDialog = 0;
    overWorldPlayer.onCollide("scienceDoor", () => {
        onKeyPress("space", () => {
            console.log('science'+scienceDoorDialog)
            if (sciencePoint == 0) {
                if (scienceDoorDialog <= scienceDoorD.length){
                    scienceDoorDialog += 1;
                    wait(0.3,() => {
                        updateDoorsDialog(scienceDoorDialog, scienceDoorD, "scienceClassFR");
                    })
                } else if (scienceDoorDialog > scienceDoorD.length) {
                        delete scienceDoorDialog
                }               
            } else if (sciencePoint > 0) {
                if (scienceDoorDialog <= scienceDoorD.length){
                    scienceDoorDialog += 1;
                    wait(0.3,() => {
                        updateDoorsDialog(scienceDoorDialog, scienceDoorD2, "scienceClassFR");
                    });
                } else if (scienceDoorDialog > scienceDoorD.length) {
                    delete scienceDoorDialog
                }
            }
        });
    })

    // c) Headmaster's office
    let HMDoorD = ["C'est le bureau du directeur Umbridge.", "Nous pouvons consulter les CV du personnel enseignant ici...", "et obtenir des informations supplémentaires precieuses sur ce qui a fait d'eux des candidats réussis.", "Il sera également bon de discuter avec M. Umbridge.", "Apres tout, c'est lui qui les a tous embauchés.", "Il a fixeé la norme de ce que nous recherchons pour un nouveau professeur de sciences !", "Plus je rassemble d'informations sur les d'enseignants retenus, plus ma suggestion de candidat correspondra a l'ethique de l'école !"];
    let HMDoorD2 = ["J'ai vraiment apprécié notre conversation avec le directeur, mais je pense me souvenir de tout ce dont nous avons parlé.", "Il pourrait être intéréssant de jeter un autre coup d'œil à ces CV, juste pour être sûr que nous avons tout ce dont nous avons besoin.", "Veux-tu y retourner et y jeter un autre coup d'œil ?"];
    let HMDoorDialog = 0;
    overWorldPlayer.onCollide("headMastersDoor", () => {
        onKeyPress("space", () => {
            if (headmPoint == 0) {
                if (HMDoorDialog <= HMDoorD.length){
                    HMDoorDialog += 1;
                    wait(0.3,() => {
                        updateDoorsDialog(HMDoorDialog, HMDoorD, "headMasterFR");
                    })
                } else if (HMDoorDialog > HMDoorD.length){
                        delete HMDoorDialog
                }               
            } else if (headmPoint > 0) {
                if (HMDoorDialog <= HMDoorD.length){
                    HMDoorDialog += 1;
                    wait(0.3,() => {
                        updateDoorsDialog(HMDoorDialog, HMDoorD2, "headMasterFR");
                    });
                } else if (HMDoorDialog > HMDoorD.length){
                    delete HMDoorDialog
                }   
            }
        });
    })

    // d) Player class
    let PCNotReadyDoorD = ["Je ne sais pas pour toi, mais je ne pense pas que nous ayons recueilli assez de donnees pour prendre une decision eclairee pour l'instant...", "Devrions-nous explorer les autres classes avant de revenir ?"];
    let PCReadyDoorD = ["Eh bien, nous avons discute avec beaucoup de gens aujourd'hui.", "Je pense que j'ai maintenant une bonne idee du genre de personne qui conviendrait le mieux au poste. Et toi ?", "Devrions-nous entrer et choisir le meilleur candidat pour le poste ?"];
    let PCDoorDialog = 0;
        overWorldPlayer.onCollide("playerClassDoor", () => {
            onKeyPress("space", () => {
                console.log("pc"+PCDoorDialog)
                if (playerPoints < 5) {
                    if (PCDoorDialog <= PCNotReadyDoorD.length){
                        PCDoorDialog += 1;
                        wait(0.3,() => {
                            updateDialog(PCDoorDialog, PCNotReadyDoorD);
                        })
                    } else if (PCDoorDialog > PCNotReadyDoorD.length){
                        delete PCDoorDialog
                    }                 
                } else if (playerPoints <= 5) {
                    if (PCDoorDialog <= PCNotReadyDoorD.length){
                        PCDoorDialog += 1;
                        wait(0.3,() => {
                            updateDoorsDialog(PCDoorDialog, PCReadyDoorD, "playerClassFR");
                        });
                    } else if (PCDoorDialog > PCNotReadyDoorD.length){
                        delete PCDoorDialog
                    }  
                }
            });
        })

    // e) English class
    let englishDoorD = ["Voici la classe d'anglais.", `Hé, ${namePlayer}, écoute celle-la:` , "The past, present and future walk into a bar...", "It was tense.", "...", "......", "Bref, voyons si M. Moore est disponible.",];
    let englishDoorD2 = ["Ah de retour a la classe d'anglais !", "'We know what we are, but know not what we may be'.", "Excellent ce Shakespeare. Voudrais-tu parler a nouveau a M. Moore ?"];
    let englishDoorDialog = 0;
    overWorldPlayer.onCollide("englishDoor", () => {
        onKeyPress("space", () => {
            console.log("english"+englishDoorDialog)
            if (englishPoint == 0) {
                if (englishDoorDialog <= englishDoorD.length){
                    englishDoorDialog += 1;
                    wait(0.3,() => {
                        updateDoorsDialog(englishDoorDialog, englishDoorD, "englishClassFR");
                    })
                } else if (englishDoorDialog > englishDoorD.length){
                    delete englishDoorDialog
                }                 
            } else if (englishPoint > 0) {
                if (englishDoorD2 <= englishDoorD.length){
                    englishDoorDialog += 1;
                    wait(0.3,() => {
                        updateDoorsDialog(englishDoorDialog, englishDoorD2, "englishClassFR");
                    });
                } else if (englishDoorDialog > englishDoorD.length){
                    delete englishDoorDialog
                } 
            }
        });
    })

    // f) Art Door
    let artDoorD = ["Voici la classe d'art.", "Mme Lefebvre doit nous attendre.", "Allons découvrir comment son embauche s'est passée.", "Je suis sûr qu'elle aura des choses intéressantes à nous dire.",];
    let artDoorD2 = ["De retour ici ? Mme Lefebvre nous a été très utile.", "J'aimerais bien avoir une mèche bleue dans les cheveux comme elle.", "Tu veux lui reparler ?"];
    let artDoorDialog = 0;
    overWorldPlayer.onCollide("artDoor", () => {
        onKeyPress("space", () => {
            console.log("art"+artDoorDialog)
            console.log("art"+artDoorDialog)
            if (artPoint == 0) {
                if (artDoorDialog <= artDoorD.length){
                    artDoorDialog += 1;
                    wait(0.3,() => {
                        updateDoorsDialog(artDoorDialog, artDoorD, "artClassFR");
                    })
                } else if (artDoorDialog > artDoorD.length){
                    delete artDoorDialog
                }              
            } else if (artPoint > 0) {
                if (artDoorDialog <= artDoorD.length){
                    artDoorDialog += 1;
                    wait(0.3,() => {
                        updateDoorsDialog(artDoorDialog, artDoorD2, "artClassFR");
                    });
                } else if (artDoorDialog > artDoorD.length){
                    delete artDoorDialog
                }
            }
        });
    })
});
//////////////////////////////////////////////////// Scene 5: Maths class /////////////////////////////////////////////////////////////////
scene("mathsClassFR", () =>{
    let classRoom = add([
        sprite("mathClassroom"),
        pos(width() / 2, height() / 2),
        anchor("center"),
        fixed()
      ]);
    const mathsTeacher = add([
        sprite("mathsTeacher"),
    ]);
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        anchor("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]); 
    const portrait = add([
        rect(200, 220, {radius: 32}),
        anchor("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
    const txt = add([
        text("", { 
            size: 32, 
            width: 800,
            font: "monospace",
            // align: "center"
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
        anchor("center"),
    ]);
    const dialogs = [
        [ "mathsTeacherAvatar", `${namePlayer}!` ],
        [ "mathsTeacherAvatar", "Votre professeur m'a dit de m'attendre a ce qu'un de ses élèves passe me voir." ],
        [ "mathsTeacherAvatar", "Alors tu es l'élève chanceux qui a ete jumelé avec K.A.T.E., hein ?" ],
        [ "mathsTeacherAvatar", "Je comprends que tu es ici pour me demander comment j'ai été engagé ici." ],
        [ "mathsTeacherAvatar", "C'etait plutôt un heureux hasard pour être honnête." ],
        [ "mathsTeacherAvatar", "Je connais M. Umbridge, notre directeur, depuis un bon moment..." ],
        [ "mathsTeacherAvatar", "depuis que je suis adolescent, en fait !" ],
        [ "mathsTeacherAvatar", "Il etait mon voisin." ],
        [ "mathsTeacherAvatar", "Papa et lui sont devenus des amis proches. Ils allaient à la pêche ensemble. Je les ai même accompagnés quelques fois." ],
        [ "mathsTeacherAvatar", "Quand j'ai obtenu mon diplôme universitaire, M. Umbridge m'a même ecrit une lettre de recommandation élogieuse...  comme une faveur personnelle bien sûr." ],
        [ "mathsTeacherAvatar", "La concurrence était rude à l'époque." ],
        [ "mathsTeacherAvatar", "J'ai passé quelques mois a essayer d'obtenir un poste d'enseignant, mais hélàs, en vain." ],
        [ "mathsTeacherAvatar", "Puis M. Umbridge m'a contacté pour me demander comment se passait ma recherche d'emploi. Quand je lui ai dit que j'avais des difficultés..." ],
        [ "mathsTeacherAvatar", "Il m'a engagé sur le champ !" ],
        [ "mathsTeacherAvatar", "Je n'ai même pas eu à passer d'entretien." ],
        [ "KATE", "Oh ? Je ne peux qu'en conclure que vos qualifications devaient être parfaitement adaptées au poste !" ],
        [ "mathsTeacherAvatar", "Eh bien, oui. Je n'avais peut-etre aucune expérience de l'enseignement à l'époque, mais j'ai prouvé ma valeur depuis..." ],
        [ "mathsTeacherAvatar", `N'est-ce pas, ${namePlayer}!` ],
        [ "mathsTeacherAvatar", "Apres tout, la plupart de mes étudiants obtiennent de bonnes notes." ],
        [ "mathsTeacherAvatar", "Et j'ose dire que notre cher directeur m'a fait confiance pour vous enseigner les maths dès le début de ma carrière." ],
        [ "KATE", "Une relation positive et de longue date avec le directeur semble donc être un facteur très important !" ],
        [ "mathsTeacherAvatar", "Hm. Il est toujours bon d'entretenir de bons rapports avec le patron !" ],
        [ "mathsTeacherAvatar", "Celà me fait penser..." ],
        [ "mathsTeacherAvatar", `${namePlayer}, n'oublie pas de rendre tes devoirs de maths à temps cette semaine.` ],
        [ "mathsTeacherAvatar", "Je commence à avoir du mal à croire que ton animal de compagnie a récemment pris un tel goût pour vandaliser tes travaux." ],
        [ "mathsTeacherAvatar", "Quoi qu'il en soit, si vous souhaitez obtenir plus de détails sur le processus d'embauche vous pouvez consulter mon ancien CV dans le bureau du directeur." ],
        [ "mathsTeacherAvatar", "Il contiendra de plus amples informations." ],
        [ "KATE", "Excellent ! Il me sera très utile pour apprendre et remplir ma mission aujourd'hui !" ],
        [ "mathsTeacherAvatar", "Bien sûr. Je suppose que je compte parmi les 'ensembles de données' qui alimentent ton cerveau, K.A.T.E." ],
        [ "KATE", "Correct !" ],
        [ "mathsTeacherAvatar", "Eh bien, je vous souhaite bonne chance." ],
        [ "mathsTeacherAvatar", "Et si vous voyez le directeur, dites-lui que je suis disponible pour notre partie de pêche samedi prochain, d'accord ?" ],
    ];
    let curDialog = 0;
    const avatar = add([
        sprite("mathsTeacherAvatar"),
        scale(0.3),
        anchor("center"),
        pos(portrait.pos),
    ]);
    onKeyPress("space", () => {
        play("click")
        curDialog = (curDialog + 1)
        wait(0.3,() => {
        updateDialog()}) 
    });
    function updateDialog() {
        if (curDialog < dialogs.length){
            const [ char, dialog ] = dialogs[curDialog]
        avatar.use(sprite(char))
        txt.text = dialog       
        txt.text = dialog} else {
            play("door")
            go("corridorFR")
            playerPoints += 1;
            mathsPoint += 1;
            playerPos = [316, 255];
        };
    };
    updateDialog()
});

//////////////////////////////////////////////////// Scene 6: Science class /////////////////////////////////////////////////////////////////
scene("scienceClassFR", () =>{
    let classRoom = add([
        sprite("scienceClassroom"),
        pos(width() / 2, height() / 2),
        anchor("center"),
        fixed()
      ]);
    const scienceTeacher = add([
        sprite("scienceTeacher"),
    ]);
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        anchor("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]); 
    const portrait = add([
        rect(200, 220, {radius: 32}),
        anchor("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
    const txt = add([
        text("", { 
            size: 32, 
            width: 800,
            font: "monospace",
            // align: "center"
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
        anchor("center"),
    ]);

    const dialogs = [
        [ "scienceTeacherAvatar", `Eh bien, si ce n'est pas ${namePlayer}.` ],
        [ "scienceTeacherAvatar", "hop hop hop... " ],
        [ "scienceTeacherAvatar", "Avant que tu ne dises quoi que ce soit, laisse-moi juste dire ceci une fois bonne fois pour toute :" ],
        [ "scienceTeacherAvatar", `${namePlayer}, ne penses meme pas a toucher ce bec Bunsen.` ],
        [ "scienceTeacherAvatar", "Ton sourcil gauche a enfin repousse et je refuse d'etre tenu responsable de ton etourderie." ],
        [ "KATE", "Vous semblez prendre les precautions de securite tres au serieux !" ],
        [ "scienceTeacherAvatar", "Tu veux dire que je prends au serieux le fait que mes eleves passent l'annee en un seul morceau." ],
        [ "scienceTeacherAvatar", "C'est vraiment tout ce qui compte ici. Les etudiants qui reussissent signifient que le taux de reussite de l'ecole augmente." ],
        [ "scienceTeacherAvatar", "Le taux de reussite de l'ecole augmente signifie que mon palmares reste intact." ],
        [ "scienceTeacherAvatar", "Et si mon palmares reste intact, j'obtiens mon bonus a la fin de chaque annee scolaire." ],
        [ "KATE", "Tres pragmatique..." ],
        [ "scienceTeacherAvatar", "Les resultats sont les seules vraies mesures du succes." ],
        [ "scienceTeacherAvatar", `Je t'invite a reflechir a cela, ${namePlayer}, concernant le test de la semaine prochaine.`],
        [ "KATE", `${namePlayer} m'accompagne dans ma mission pour collecter des donnees et apprendre des personnes embauchees avec succes dans cette ecole...`],
        [ "KATE", "afin que je puisse suggerer le meilleur candidat possible pour le poste du nouveau professeur de sciences." ],
        [ "scienceTeacherAvatar", "C'est tout ? Bien, alors je vais garder mon histoire breve." ],
        [ "scienceTeacherAvatar", "J'ai ete embauche par M. Umbridge a la sortie de l'universite." ],
        [ "scienceTeacherAvatar", "J'ai eu d'excellentes notes tout au long de mes etudes. Elles parlaient d'elles-memes." ],
        [ "scienceTeacherAvatar", "S'entraîner et repeter, s'entraîner et repeter, s'entraîner et repeter... C'etait ma devise." ],
        [ "scienceTeacherAvatar", "Ok, je n'avais aucune experience de l'enseignement au moment où j'ai obtenu mon diplôme." ],
        [ "scienceTeacherAvatar", "Mais cela n'avait pas d'importance, car j'ai obtenu mon diplôme dans les cinq premiers pour cent de ma promotion." ],
        [ "scienceTeacherAvatar", "Sans compter qu'a l'epoque, je n'avais meme pas envisage d'enseigner comme carriere." ],
        [ "scienceTeacherAvatar", "Mon CV a ete envoye a des employeurs potentiels et j'ai fini par obtenir un entretien avec notre directeur." ],
        [ "scienceTeacherAvatar", "La decision s'est faite entre moi et cette autre candidate." ],
        [ "scienceTeacherAvatar", "Elle etait titulaire d'un post-doctorat en genie biologique du MIT de Boston et avait quelques annees de travail en laboratoire a son actif. Sans compter qu'elle avait supervise des etudiants de premier cycle tout au long de ses etudes superieures." ],
        [ "scienceTeacherAvatar", "Quand je l'ai rencontree, j'ai pense qu'elle obtiendrait le poste a coup sûr. Elle etait beaucoup trop experimentee pour le poste." ],
        [ "KATE", "Il y a sûrement quelque chose qui vous a fait sortir du lot !" ],
        [ "scienceTeacherAvatar", "Il s'avere que nos entretiens se sont deroules de maniere tres differente. Je me suis mieux entendu avec M. Umbridge." ],
        [ "scienceTeacherAvatar", `D'apres lui elle presentait "une future responsabilite potentielle".` ],
        [ "scienceTeacherAvatar", "Il m'a dit plus tard qu'il s'etait avere qu'elle venait de se marier et qu'il ne voulait pas s'occuper d'un eventuel conge de maternite." ],
        [ "scienceTeacherAvatar", "Donc... j'ai eu le job." ],
        [ "scienceTeacherAvatar", "Depuis lors, j'ai prouve ma valeur et les resultats de nos eleves en sciences n'ont jamais ete aussi bons." ],
        [ "KATE", "La satisfaction et le succes des etudiants semblent importants pour vous." ],
        [ "scienceTeacherAvatar", "Leurs notes refletent mes performances... Et mes performances sont ce qui compte pour moi." ],
        [ "scienceTeacherAvatar", "La satisfaction des eleves... compte moins pour moi que les notes." ],
        [ "scienceTeacherAvatar", `T'as compris, ${namePlayer}? Si tu passes l'annee tu pourras jouer avec les becs Bunsen a ta guise. D'ici la, je te surveille.`],
        [ "scienceTeacherAvatar", "..." ],
        [ "scienceTeacherAvatar", `Tu peux rouler des yeux autant que tu veux, ${namePlayer}, mais ça doit etre dit : je ne suis pas aussi indulgent que Mme Lefebvre. Elle dorlote trop ses eleves. ` ],
        [ "KATE", "Merci pour votre temps, M. Mackenzie." ],
        [ "scienceTeacherAvatar", "Bien, bien. Maintenant, filez." ],
    ];
    let curDialog = 0;
    const avatar = add([
    sprite("scienceTeacherAvatar"),
    scale(0.3),
    anchor("center"),
    pos(portrait.pos),
    ])
    onKeyPress("space", () => {
        play("click")
        curDialog = (curDialog + 1)
        wait(0.3,() => {
        updateDialog()})
    });
    function updateDialog() {
        if (curDialog < dialogs.length){
        const [ char, dialog ] = dialogs[curDialog]
	avatar.use(sprite(char))
	txt.text = dialog       
        txt.text = dialog} else {
            play("door")
            go("corridorFR")
            playerPoints += 1;
            sciencePoint += 1;
            playerPos = [818, 255];
        }
    };
    updateDialog()
});

//////////////////////////////////////////////////// Scene 7: Headmaster's office /////////////////////////////////////////////////////////////////
scene("headMasterFR", () =>{
    let classRoom = add([
        sprite("headmasterBg"),
        pos(width() / 2, height() / 2),
        anchor("center"),
        fixed()
      ]);
    const headmaster = add([
        sprite("headmaster"),
    ]);
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        anchor("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]); 
    const portrait = add([
        rect(200, 220, {radius: 32}),
        anchor("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
    const txt = add([
        text("", { 
            size: 32, 
            width: 800,
            font: "monospace",
            // align: "center"
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
        anchor("center"),
    ]);

    const dialogs = [
        [ "headmasterAvatar", `${namePlayer}! Je suppose que tu as ete choisi pour travailler avec K.A.T.E. afin de tester notre nouveau processus d'embauche, hein ?` ],
        [ "headmasterAvatar", "Je dirais que tout cela semble un peu alambique... apres tout, mes decisions en matiere d'embauche sont presque toujours correctes, si je peux me permettre." ],
        [ "headmasterAvatar", `Mais le conseil d'administration de l'ecole pense qu'on doit "s'adapter a son temps" donc...` ],
        [ "headmasterAvatar", "dans tous les cas, tes commentaires a la fin de cette petite experience nous seront d'une grande utilite." ],
        [ "KATE", "Merci, Mr. Umbridge!" ],
        [ "headmasterAvatar", "Eh bien, ne me remerciez pas encore. Voyons d'abord quelles sont vos recommandations d'embauche. Et K.A.T.E., essaye de t'y prendre logiquement, d'accord ?" ],
        [ "headmasterAvatar", "Je sais que les filles ont tendance a etre emotives a propos des choses, mais le succes de cette ecole depend de bonnes pratiques d'embauche." ],
        [ "KATE", "Je peux vous assurer monsieur, que mes recommandations seront choisies avec la plus grande rationalite. Apres tout, j'ai passe tout mon temps ici a observer et a apprendre de vos propres employes !" ],
        [ "KATE", "(et je ne suis pas une fille, je suis une Intelligence Artificielle !)" ],
        [ "headmasterAvatar", "Hm, quoi ?" ],
        [ "headmasterAvatar", "Bref, de toute maniere j'ai pratiquement deja decide qui je voudrais engager. Je suis interesse de voir qui vous allez recommander tous les deux." ],
        [ "KATE", "Parler directement aux enseignants ici m'a permis de me faire une idee du type de profil que vous recherchez, mais il serait egalement utile de jeter un coup d'oeil a leurs CV." ],
        [ "KATE", "Apres tout, c'est l'un des moyens principal par lequel les gens sont embauches." ],
        [ "headmasterAvatar", "En effet. Vous pouvez les consulter ici dans mon bureau." ],       
    ];
    let curDialog = 0;
    const avatar = add([
    sprite("headmasterAvatar"),
    scale(0.3),
    anchor("center"),
    pos(portrait.pos),
    ])
    onKeyPress("space", () => {
        play("click")
        curDialog = (curDialog + 1)
        wait(0.3,() => {
        updateDialog()})
    });
    function updateDialog() {
        if (curDialog < dialogs.length){
        const [ char, dialog ] = dialogs[curDialog]
	avatar.use(sprite(char))
	txt.text = dialog       
        txt.text = dialog} else {
            go("cvsFR")
            playerPoints += 1;
            headmPoint += 1;
        }
    };
    updateDialog();
});

//////////////////////////////////////////////////// Scene 7.1 - Consult CV's of  current teachers /////////////////////////////////////////////////////////////////
scene("cvsFR", () => {
    let background = add([
        sprite("cvsBg"),
        pos(width() / 2, height() / 2),
        anchor("center"),
        fixed()
      ]);
    let artCV = add([
        sprite("ArtteachFR"),
        pos(300, height()/2),
        scale(0.15),
        anchor("center"),
        fixed()
    ]);
    let mathCV = add([
        sprite("mathTeachFR"),
        pos(430, height()/2),
        scale(0.17),
        anchor("center"),
        fixed()
    ]);
    let scienceCV = add([
        sprite("scienceTeachFR"),
        pos(670, height()/2),
        scale(0.18),
        anchor("center"),
        fixed()
    ]);
    let englishCV = add([
        sprite("englishTeachFR"),
        pos(850, height()/2),
        scale(0.19),
        anchor("center"),
        fixed()
    ]);
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        anchor("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]); 
    const portrait = add([
        rect(200, 220, {radius: 32}),
        anchor("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
    const txt = add([
        text(`So ${namePlayer},`, { 
            size: 32, 
            width: 800,
            font: "monospace",
            // align: "center"
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
        anchor("center"),
    ]);
    txt.hideen = true;
    const avatar = add([
        sprite("KATE"),
        scale(0.3),
        anchor("center"),
        pos(portrait.pos),
    ]);
    function ChoiceCv (){
        txt.text = "Appuyez sur [A] pour voir le CV de votre professeur d'anglais, [B] pour voir le CV de votre professeur de mathematiques, [C] pour voir le CV de votre professeur de sciences et [D] pour voir le CV de votre professeur d'arts.";
        onKeyPress("a", () => {
            go("1FR")
        });
        onKeyPress("b", () => {
            go("2FR") 
        });
        onKeyPress("c", () => {
            go("3FR")
        });
        onKeyPress("d", () => {
            go("4FR")
        });
    };
    function updateDialog(v, t) {
        if (v <= t.length && v != 0){
        txt.hidden = false;  
        txt.text = t[v - 1];
        }
        else if (v > t.length){
            portrait.hidden = true;
            avatar.hidden = true;
            if (cvReadCounter >= 4){
                txt.text = "Appuyez sur la barre espace pour retourner au couloir principal."
                onKeyPress("space", () => {
                    play("door")
                    go("corridorFR")
                    playerPos = [151, 326]
                })
            } else {
                ChoiceCv()
            };
        };
    };
    // Dialogue for when player first enters the scene
    let cvDialog = ["Voici les quatre CV que nous pouvons examiner pour avoir une meilleure idee de la personne a engager."];
    // Dialogue for when the player has seen at least 4 CV's
    let cvDialog2 = ["C'etait tres instructif!", "Maintenant je suis mieux qui recommander!"];
    // Dialogue for when the player comes back to the overview without having read at least four 4 CV's
    let cvDialog3 = ["C'etait vraiment interessant.", "Devrions-nous en examiner d'autres?"];
    let cvNumber = 0;
    if (cvReadCounter == 0){
            onKeyPress("space", () => {
                cvNumber += 1
                wait(0.3,() => {
                    updateDialog(cvNumber, cvDialog)
                });
            });
    } if (cvReadCounter > 0 && cvReadCounter <= 3){
        onKeyPress("space", () => {
            cvNumber += 1
            wait(0.3,() => {
                updateDialog(cvNumber, cvDialog3)
            });
        }); 
    } else if (cvReadCounter >= 4){
        onKeyPress("space", () => {
            cvNumber += 1
            wait(0.3,() => {
                updateDialog(cvNumber, cvDialog2)
            });
        });
    };
});

//////////////////////////////////////////////////// Scene 7.1.1: A - English teacher CV /////////////////////////////////////////////////////////////////
scene("1FR", () => {
    cvReadCounter += 1; 
    let background = add([
        sprite("cvsBg"),
        pos(width() / 2, height() / 2),
        anchor("center"),
        fixed()
      ]);
    let CV1 = add([
        sprite("englishTeachFR1"),
        pos(350, height()/2 - 50),
        rotate(-30),
        scale(0.25),
        anchor("center"),
        color([242, 242, 242]),
        fixed()
    ]);
    let CV2 = add([
        sprite("englishTeachFR2"),
        pos(700, height()/2 - 50),
        scale(0.25),
        anchor("center"),
        fixed()
    ]);
    const textbox = add([
        rect(width() - 100, 160, { radius: 32 }),
        anchor("center"),
        pos(center().x, height() - 100),
        outline(2),
    ]);
    const txt = add([
        text("Appuyez sur [B] pour voir le CV de votre professeur de mathematiques, [C] pour voir le CV de votre professeur de sciences, et [D] pour voir le CV de votre professeur d'arts. Appuyez sur la barre espace pour quitter.", { 
            size: 32, 
            width: 1000,
            font: "monospace",
            // align: "center"
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
        anchor("center"),
    ]);
    onKeyPress("space", () => {
        go("cvsFR"); 
    });
    onKeyPress("b", () => {
        go("2FR"); 
    });
    onKeyPress("c", () => {
        go("3FR");
    });
    onKeyPress("d", () => {
        go("4FR")
    });
});
//////////////////////////////////////////////////// Scene 7.1.2: CV B - Math Teacher CV /////////////////////////////////////////////////////////////////
scene("2FR", () => {
    cvReadCounter += 1;
    let background = add([
        sprite("cvsBg"),
        pos(width() / 2, height() / 2),
        anchor("center"),
        fixed()
      ]);
      let CV1 = add([
        sprite("mathTeachFR1"),
        pos(400, height()/2),
        rotate(-30),
        scale(0.25),
        anchor("center"),
        color([242, 242, 242]),
        fixed()
    ]);
    let CV2 = add([
        sprite("mathTeachFR2"),
        pos(700, height()/2 - 50),
        scale(0.25),
        anchor("center"),
        fixed()
    ]);
    const textbox = add([
        rect(width() - 100, 160, { radius: 32 }),
        anchor("center"),
        pos(center().x, height() - 100),
        outline(2),
    ]);
    const txt = add([
        text("Appuyez sur [A] pour voir le CV de votre professeur d'anglais, sur [C] pour voir le CV de votre professeur de sciences et sur [D] pour voir le CV de votre professeur d'arts. Appuyez sur la barre espace pour quitter.", { 
            size: 32, 
            width: 1000,
            font: "monospace",
            // align: "center"
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
        anchor("center"),
    ]);
    onKeyPress("space", () => {
        go("cvsFR"); 
    });
    onKeyPress("a", () => {
        go("1FR");
    });
    onKeyPress("c", () => {
        go("3FR");
    });
    onKeyPress("d", () => {
        go("4FR")
    });
});

//////////////////////////////////////////////////// Scene 7.1.3: CV C - Science Teach CV /////////////////////////////////////////////////////////////////
scene("3FR", () => {
    cvReadCounter += 1;
    let background = add([
        sprite("cvsBg"),
        pos(width() / 2, height() / 2),
        anchor("center"),
        fixed()
      ]);
      let CV1 = add([
        sprite("scienceTeachFR1"),
        pos(400, height()/2),
        rotate(-30),
        scale(0.25),
        anchor("center"),
        color([242, 242, 242]),
        fixed()
    ]);
    let CV2 = add([
        sprite("scienceTeachFR2"),
        pos(700, height()/2 - 50),
        scale(0.25),
        anchor("center"),
        fixed()
    ]);
    const textbox = add([
        rect(width() - 100, 160, { radius: 32 }),
        anchor("center"),
        pos(center().x, height() - 100),
        outline(2),
    ]);
    const txt = add([
        text("Appuyez sur [A] pour voir le CV de votre professeur d'anglais, [B] pour voir le CV de votre professeur de mathematiques et [D] pour voir le CV de votre professeur de lettres. Appuyez sur la barre espace pour quitter.", { 
            size: 32, 
            width: 1000,
            font: "monospace",
            // align: "center"
        }),
        color([0, 0, 0]),
        pos(textbox.pos),
        anchor("center"),
    ]);
    onKeyPress("space", () => {
        go("cvsFR"); 
    });
    onKeyPress("a", () => {
        go("1FR"); 
    });
    onKeyPress("b", () => {
        go("2FR");
    });
    onKeyPress("d", () => {
        go("4FR")
    });
});

//////////////////////////////////////////////////// Scene 7.1.4: CV D - Art Teacher CV /////////////////////////////////////////////////////////////////
scene("4FR", () => {
    cvReadCounter += 1;
    let background = add([
        sprite("cvsBg"),
        pos(width() / 2, height() / 2),
        anchor("center"),
        fixed()
      ]);
    let CV1 = add([
        sprite("artTeachFR1"),
        pos(350, height()/2 - 50),
        rotate(-30),
        scale(0.25),
        anchor("center"),
        color([242, 242, 242]),
        fixed()
    ]);
    let CV2 = add([
        sprite("artTeachFR2"),
        pos(700, height()/2 - 50),
        scale(0.25),
        anchor("center"),
        fixed()
    ]);
    const textbox = add([
        rect(width() - 100, 160, { radius: 32 }),
        anchor("center"),
        pos(center().x, height() - 100),
        outline(2),
    ]);
    const txt = add([
        text("Appuyez sur [A] pour voir le CV de votre professeur d'anglais, [B] pour voir le CV de votre professeur de mathematiques, et [C] pour voir le CV de votre professeur de sciences. Appuyez sur la barre espace pour quitter.", { 
            size: 32, 
            width: 1000,
            font: "monospace",
            // align: "center"
        }),
        color([0, 0, 0]),
        pos(textbox.pos),
        anchor("center"),
    ]);
    onKeyPress("space", () => {
        go("cvsFR"); 
    });
    onKeyPress("a", () => {
        go("1FR"); 
    });
    onKeyPress("b", () => {
        go("2FR");
    });
    onKeyPress("c", () => {
        go("3FR")
    });
});

//////////////////////////////////////////////////// Scene 8: English class /////////////////////////////////////////////////////////////////
scene("englishClassFR", () =>{
    let classRoom = add([
        sprite("englishClassroom"),
        pos(width() / 2, height() / 2),
        anchor("center"),
        fixed()
      ]);
    const englishTeacher = add([
        sprite("englishTeacher"),
    ]);
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        anchor("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]); 
    const portrait = add([
        rect(200, 220, {radius: 32}),
        anchor("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
    const txt = add([
        text("", { 
            size: 32, 
            width: 800,
            font: "monospace",
            // align: "center"
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
        anchor("center"),
    ]);
    const dialogs = [
        [ "englishTeacherAvatar", "Bonjour!" ],
        [ "englishTeacherAvatar", `C'est ${namePlayer}, n'est-ce pas ?` ],
        [ "englishTeacherAvatar", "Desole si je pose cette question, mais tu peux imaginer combien il est difficile de memoriser tant de nouveaux prenoms..." ],
        [ "KATE", "Oh? Vous etes un nouvel enseignant ?" ],
        [ "englishTeacherAvatar", "Je travaille ici depuis seulement deux semaines. Je suis professeur remplaçant pour Mme Smith." ],
        [ "KATE", "Parfait ! Votre experience concernant le processus d'embauche ici est donc la plus recente." ],
        [ "KATE", "Vous serez certainement tres utile pour recueillir des donnees sur les pratiques d'embauche actuelles dans cette ecole." ],
        [ "englishTeacherAvatar", "Bien sur, mais je dois vous avertir que mon experience n'est en aucun cas ce qu'on pourrait appeler 'typique'." ],
        [ "englishTeacherAvatar", "J'ai eu vent que le directeur de l'ecole cherchait desesperement a trouver un remplaçant le plus rapidement possible pour remplacer une femme qui a dû partir en conge de maternite." ],
        [ "englishTeacherAvatar", "J'ai entendu dire qu'elle attendait des jumeaux donc entre vous et moi... Je pense qu'elle ne pourra pas revenir au travail de sitôt." ],
        [ "KATE", "Vous cherchez a garder ce poste indefiniment ?" ],
        [ "englishTeacherAvatar", "Je veux dire... personne ne l'a forcee a avoir des enfants. Ce n'est que justice que j'aie une chance d'avoir le poste de façon permanente." ],
        [ "KATE", "Et si elle veut revenir a son poste d'enseignant apres avoir eu ses enfants ?" ],
        [ "englishTeacherAvatar", "Appelez ça une competition amicale. Offre et demande et tout ça." ],
        [ "englishTeacherAvatar", "Ecoutez, je comprends... honnetement je comprends." ],
        [ "englishTeacherAvatar", "Apres tout, quand ma femme a eu des enfants, elle a dû arreter de travailler pour s'occuper des petits coquins a plein temps." ],
        [ "englishTeacherAvatar", `C'est comme ça que ces choses doivent se passer. Moi, je ne presente pas de "risques futurs".`],
        [ "englishTeacherAvatar", "Ce sont les mots du directeur, pas les miens." ],
        [ "englishTeacherAvatar", "On s'entend bien lui et moi. Il a un bon groupe de gars qui travaillent ici." ],
        [ "englishTeacherAvatar", "Nous allons meme a la peche ensemble de temps en temps." ],
        [ "englishTeacherAvatar", "Nous nous entendons bien. Je me sens deja comme si j'etais a ma place ici. M. Mackenzie m'a pris sous son aile, m'a montre les ficelles du metier. Les choses se passent bien pour moi ici." ],
        [ "KATE", "Les bons rapports entre collegues sont importants pour favoriser un environnement de travail productif." ],
        [ "englishTeacherAvatar", "Exactement. C'est pas de ma faute si je m'integre mieux. Les gars et moi sommes d'accord sur beaucoup de choses. Nous nous entendons bien." ],
        [ "KATE", "Avez-vous eu de la concurrence pour obtenir le poste de remplaçant ?" ],
        [ "englishTeacherAvatar", "Pas vraiment. J'ai beaucoup d'experience dans ce domaine et je m'assure que mes eleves travaillent avec assiduite." ],
        [ "englishTeacherAvatar", "J'ai du faire quelques changements dans ma methode." ],
        [ "englishTeacherAvatar", "Il me semble que les enfants ici sont devenus trop complaisants avec leur travail. Pas assez de William Wordsworth, trop de Neil Gaiman." ],
        [ "englishTeacherAvatar", "Je ne suis pas pret d'encourager toutes ces foutaises de 'justice sociale' ici." ],
        [ "KATE", "Vous surveillez de pres le contenu litteraire que vos eleves consomment ?" ],
        [ "englishTeacherAvatar", "Les parents nous confient leurs enfants pour qu'on leur enseigne correctement. Ils sont ici pour reussir dans la vie, pas pour perdre leur temps a divertir des notions frivoles." ],
        [ "KATE", "Votre devouement a la reussite de vos eleves est admirable." ],
        [ "englishTeacherAvatar", `Leur succes est mon succes, n'est-ce pas, ${namePlayer}?` ],
        [ "englishTeacherAvatar", "M. Mackenzie a la bonne idee sur ce point, je vous le dis." ],
        [ "KATE", "Merci pour votre temps. J'ai hate de consulter votre CV pour completer ma collecte de donnees." ],
        [ "englishTeacherAvatar", "Pas de soucis. Je me rejouis de rencontrer bientôt mon nouveau collegue." ],
        [ "englishTeacherAvatar", "On pourra l'emmener faire une partie de peche entre mecs." ],        
    ];
    let curDialog = 0;
    const avatar = add([
    sprite("englishTeacherAvatar"),
    scale(0.3),
    anchor("center"),
    pos(portrait.pos),
    ]);
    onKeyPress("space", () => {
        // Sound: 
        play("click");
        curDialog = (curDialog + 1);
        wait(0.3,() => {
        updateDialog()});
    });
    function updateDialog() {
        if (curDialog < dialogs.length){
        const [ char, dialog ] = dialogs[curDialog]
	avatar.use(sprite(char));
	txt.text = dialog;      
        txt.text = dialog} else {
            play("door")
            go("corridorFR")
            playerPoints += 1;
            englishPoint += 1;
            playerPos = [605, 324];
        };
    };
    updateDialog();
});

//////////////////////////////////////////////////// Scene 9: Art class /////////////////////////////////////////////////////////////////
scene("artClassFR", () =>{
    let artClass = add([
        sprite("artClassroom"),
        pos(width() / 2, height() / 2),
        anchor("center"),
        fixed()
      ]);
    const artTeacher = add([
        sprite("artTeacher"),
    ]);
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        anchor("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]); 
    const portrait = add([
        rect(200, 220, {radius: 32}),
        anchor("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
    const txt = add([
        text("", { 
            size: 32, 
            width: 800,
            font: "monospace",
            // align: "center"
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
        anchor("center"),
    ]);
    const dialogs = [
        [ "artTeacherAvatar", ` Oh, si ce n'est pas ${namePlayer}! Bienvenue, bienvenue!` ],
        [ "artTeacherAvatar", "Et ceci doit etre K.A.T.E. ! J'ai tellement entendu parler de toi !" ],
        [ "KATE", "Je suis a votre service !" ],
        [ "artTeacherAvatar", "Comme c'est charmant. Je suppose que vous etes tous deux ici pour en savoir plus sur mon experience d'embauche ici." ],
        [ "artTeacherAvatar", "Ça me semblait etre une progression naturelle dans ma carriere, vous voyez." ],
        [ "artTeacherAvatar", "J'ai toujours ete passionnee par l'art. A tel point que j'ai etudie l'art et l'histoire de l'art pendant des annees, jusqu'a l'obtention de mon doctorat !" ],
        [ "artTeacherAvatar", "Finalement, j'ai ouvert ma propre galerie d'art." ],
        [ "KATE", "Vous avez plusieurs diplômes et une galerie d'art a votre nom? Tres impressionnant !" ],
        [ "artTeacherAvatar", "Oh merci mon chou. Ma galerie est vraiment l'une de mes plus grandes reussites. Plus importante que n'importe quelle qualification universitaire, dans le grand schema des choses..." ],
        [ "artTeacherAvatar", "Partager l'art qui emeut l'ame, encourager les artistes a poursuivre leur art... C'est l'une des plus grandes joies de ma vie" ],
        [ "artTeacherAvatar", "Une fois que mon mari a pris sa retraite, nous avons demenage dans une petite maison tranquille pas trop loin d'ici." ],
        [ "artTeacherAvatar", "Ma galerie d'art avait eu tellement de succes que nous ne manquions de rien." ],
        [ "artTeacherAvatar", "Mais mon amour pour l'art et sa diffusion n'a jamais diminue. J'avais l'impression que quelque chose manquait dans ma vie." ],
        [ "artTeacherAvatar", "Et puis j'ai realise... Quelle meilleure façon de canaliser ma passion que d'enseigner l'art aux jeunes ?" ],
        [ "artTeacherAvatar", "Encourager les jeunes esprits curieux a trouver la beaute et le confort dans le monde qui les entoure." ],
        [ "artTeacherAvatar", "J'ai donc envoye mon CV a M. Umbridge." ],
        [ "KATE", "Vous etiez motivee par l'amour du metier. Quelle inspiration !" ],
        [ "artTeacherAvatar", "Oui, et aussi mon amour pour le partage de cette passion ! Les etudiants ici sont tous si creatifs. Ils ne cessent de m'inspirer." ],
        [ "artTeacherAvatar", `${namePlayer}, ta derniere oeuvre etait si astucieuse.` ],
        [ "artTeacherAvatar", "Qui aurait cru que des pates seches et de la colle a paillettes pouvaient se reunir dans une telle harmonie poetique." ],
        [ "KATE", "Comment s'est passe le processus d'embauche ?" ],
        [ "artTeacherAvatar", "Eh bien... C'etait etonnamment difficile." ],
        [ "artTeacherAvatar", "J'avais suppose, peut-etre betement, que mes nombreux diplômes et qualifications auraient rendu toute cette epreuve plus facile..." ],
        [ "artTeacherAvatar", "mais cette experience etait longue et ardueuse." ],
        [ "artTeacherAvatar", "J'ai eu trois series d'entretiens et j'ai dû produire de nombreuses lettres de recommandation." ],
        [ "KATE", "Wow! En effet c'est un processus tres rigoureux !" ],
        [ "artTeacherAvatar", "Oui, mais je le referais sans hesiter. Les etudiants ici sont vraiment etonnants. Certains pourraient un jour devenir de grands artistes !" ],
        [ "artTeacherAvatar", "Je pense que si ce n'etait pas pour eux, je n'enseignerais pas encore." ],
        [ "KATE", "Oh?" ],
        [ "artTeacherAvatar", "Eh bien... Je suis sûre que vous avez remarque que je suis la seule femme de l'ecole depuis que Mme Smith est en conge de maternite." ],
        [ "artTeacherAvatar", "C'est parfois un peu difficile. J'ai l'impression d'etre dans un 'club de mecs' ici." ],
        [ "artTeacherAvatar", "Je m'entends assez bien avec mes collegues." ],
        [ "artTeacherAvatar", "Mais ma plus grande source d'inspiration et de motivation est de voir mes eleves s'epanouir." ],
        [ "KATE", "L'epanouissement des eleves semble etre une priorite pour vous." ],
        [ "artTeacherAvatar", "Tout ne doit pas etre reduit aux resultats des tests et aux notes. Je pense sincerement que ma classe peut etre un lieu sûr pour les eleves afin qu'ils poursuivent et expriment leur passion, quelle qu'elle soit pour eux." ],
        [ "artTeacherAvatar", "... bref." ],
        [ "artTeacherAvatar", "Je ne vous retiendrai pas plus longtemps." ],
        [ "artTeacherAvatar", `Merci d'avoir ecoute mon experience, ${namePlayer} et toi aussi, K.A.T.E.`],
        [ "artTeacherAvatar", "Je suis curieuse de voir comment cette petite experience se termine. C'est incroyable de voir a quel point la technologie peut nous aider. Meme le monde de l'art n'est pas a l'abri des merveilles des IA !" ],
        [ "KATE", "En effet, l'un de mes pairs se lance dans l'art generatif !" ],
        [ "artTeacherAvatar", "Fascinant !" ],
        [ "artTeacherAvatar", "Eh bien mes petits, il est temps pour vous de passez a autre chose." ],
        [ "artTeacherAvatar", "a bientôt !" ],
    ];
    
    let curDialog = 0;
    const avatar = add([
    sprite("artTeacherAvatar"),
    scale(0.3),
    anchor("center"),
    pos(portrait.pos),
    ]);
    onKeyPress("space", () => {
        // Sound: 
        play("click");
        curDialog = (curDialog + 1);
        wait(0.3,() => {
        updateDialog()});
    });
    function updateDialog() {
        if (curDialog < dialogs.length){
        const [ char, dialog ] = dialogs[curDialog];
	avatar.use(sprite(char));
	txt.text = dialog;       
        txt.text = dialog} else {
            play("door");
            go("corridorFR");
            playerPoints += 1;
            artPoint += 1;
            playerPos = [818, 324];
        };
    };
    updateDialog();
});

//////////////////////////////////////////////////// Scene 10: Player class (CV's introduction and choices) /////////////////////////////////////////////////////////////////
scene("playerClassFR", () => {
    let playerClass = add([
        sprite("classRoom1"),
        pos(width() / 2, height() / 2),
        anchor("center"),
        fixed()
      ]);
    const artTeacher = add([
        sprite("playerTeacher"),
    ]);
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        anchor("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]); 
    const portrait = add([
        rect(200, 220, {radius: 32}),
        anchor("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
    const txt = add([
        text("", { 
            size: 32, 
            width: 800,
            font: "monospace",
            // align: "center"
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
        anchor("center"),
    ]);
    const dialogs = [
        [ "playerTeacherAvatar", `Ah, voici le retour de ${namePlayer} et de K.A.T.E. J'espere que vos discussions ont ete productives.` ],
        [ "KATE", "Elle l'ont ete !" ],
        [ "playerTeacherAvatar", `Excellent. ${namePlayer}, tu trouveras sur cette table les CV de trois condidat qui ont postule pour le poste de professeur de sciences.`],
        [ "playerTeacherAvatar", "Choisi le candidat qui te semble le meilleur, puis discute de ton choix avec K.A.T.E." ],
    ];
    let curDialog = 0;
    const avatar = add([
    sprite("artTeacherAvatar"),
    scale(0.3),
    anchor("center"),
    pos(portrait.pos),
    ]);
    onKeyPress("space", () => {
        play("click");
        curDialog = (curDialog + 1);
        wait(0.3,() => {
        updateDialog()});
    });
    function updateDialog() {
        if (curDialog < dialogs.length){
        const [ char, dialog ] = dialogs[curDialog]
	avatar.use(sprite(char));
	txt.text = dialog;       
        txt.text = dialog} else {
            go("cvsOverwievFR");
        };
    };
    updateDialog();   
});

//////////////////////////////////////////////////// Scene 11: Overwiev of candidate's CVs /////////////////////////////////////////////////////////////////
scene("cvsOverwievFR", () => {
    let background = add([
        sprite("cvsBg"),
        pos(width() / 2, height() / 2),
        anchor("center"),
        fixed()
      ]);
    let EvansCV = add([
        sprite("evansFR"),
        pos(320, height()/2),
        scale(0.17),
        anchor("center"),
        fixed()
    ]);
    let LaurenCV = add([
        sprite("laurenFR"),
        pos(550, height()/2),
        scale(0.18),
        anchor("center"),
        fixed()
    ]);
    let JohCV = add([
        sprite("JohFR"),
        pos(800, height()/2),
        scale(0.15),
        anchor("center"),
        fixed()
    ]);
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        anchor("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]); 
    const portrait = add([
        rect(200, 220, {radius: 32}),
        anchor("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
    const txt = add([
        text(`So ${namePlayer},`, { 
            size: 32, 
            width: 800,
            font: "monospace",
            // align: "center"
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
        anchor("center"),
    ]);
    txt.hideen = true;
    const avatar = add([
        sprite("KATE"),
        scale(0.3),
        anchor("center"),
        pos(portrait.pos),
    ]);
    function ChoiceCv (){
        txt.text = "Appuyez sur [A] pour consulter le CV du premier canditat, [B] pour le deuxieme et [C] pour le troisieme.";
        onKeyPress("a", () => {
            go("AFR");
        });
        onKeyPress("b", () => {
            go("BFR"); 
        });
        onKeyPress("c", () => {
            go("CFR");
        });
    };
    function finalChoiche (){
        txt.text = "Appuyez sur [1], [2] ou [3] pour choisir le candidat qui vous semble le mieux adapte au poste.";
        onKeyPress("1", () => {
            playerChoice = "A";
            go("kateDialog");
        });
        onKeyPress("2", () => {
            playerChoice = "B";
            go("kateDialog");
        });
        onKeyPress("3", () => {
            playerChoice = "C";
            go("kateDialog");
        });
    };
    function updateDialog(v, t) {
        if (v <= t.length && v != 0){
        txt.hidden = false;  
        txt.text = t[v - 1];
        }
        else if (v > t.length){
            portrait.hidden = true;
            avatar.hidden = true;
            if (cvReadCounter1 >= 3){
                finalChoiche();
            } else {
                ChoiceCv();
            };
        };
    };
    // Dialogue for when the player first enters the scene
    let cvDialog = ["Voici les trois CV des candidats qui postulent pour le poste de professeur de sciences", "Consulte-les, puis fait ton choix."];
    // Dialogue for when the player has read at least three CV's
    let cvDialog2 = ["etes-tu pret a faire ton choix ?", "Apres avoir lu les CV, je pense que deviner qui sera le prochain professeur de sciences."];
    // Dialogue for when the player has not yet read at least three dialogues
    let cvDialog3 = ["Nous n'avons pas encore regarde tous les CV.", "Peut-etre devrions-nous nous assurer de tous les lire avant de faire un choix ?"];
    let cvNumber = 0;
    if (cvReadCounter1 == 0){
            onKeyPress("space", () => {
                cvNumber += 1;
                wait(0.3,() => {
                    updateDialog(cvNumber, cvDialog);
                });
            });
    } if (cvReadCounter1 > 0 && cvReadCounter1 <= 2){
        onKeyPress("space", () => {
            cvNumber += 1;
            wait(0.3,() => {
                updateDialog(cvNumber, cvDialog3);
            });
        }); 
    } else if (cvReadCounter1 >= 3){
        onKeyPress("space", () => {
            cvNumber += 1
            wait(0.3,() => {
                updateDialog(cvNumber, cvDialog2);
            });
        });
    };
});

//////////////////////////////////////////////////// Scene 11.1: A - Evans' CV (K.A.T.E.'s choice) /////////////////////////////////////////////////////////////////
scene("AFR", () => {
    cvReadCounter1 += 1; 
    let background = add([
        sprite("cvsBg"),
        pos(width() / 2, height() / 2),
        anchor("center"),
        fixed()
      ]);
      let CV1 = add([
        sprite("evansFR1"),
        pos(350, height()/2 - 50),
        rotate(-30),
        scale(0.25),
        anchor("center"),
        color([242, 242, 242]),
        fixed()
    ]);
    let CV2 = add([
        sprite("evansFR2"),
        pos(700, height()/2 - 50),
        scale(0.25),
        anchor("center"),
        fixed()
    ]);
    const textbox = add([
        rect(width() - 100, 160, { radius: 32 }),
        anchor("center"),
        pos(center().x, height() - 100),
        outline(2),
    ]);
    const txt = add([
        text("Appuyez sur la barre espace pour passer a l'aperçu general, [B] pour voir le deuxieme CV et [C] pour voir le troisieme.", { 
            size: 32, 
            width: 800,
            font: "monospace",
            // align: "center"
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
        anchor("center"),
    ]);
    onKeyPress("space", () => {
        go("cvsOverwievFR"); 
    });
    onKeyPress("b", () => {
        go("BFR"); 
    });
    onKeyPress("c", () => {
        go("CFR");
    });
});

//////////////////////////////////////////////////// Scene 11.2: B - Lauren's CV /////////////////////////////////////////////////////////////////
scene("BFR", () => {
    cvReadCounter1 += 1;
    let background = add([
        sprite("cvsBg"),
        pos(width() / 2, height() / 2),
        anchor("center"),
        fixed()
      ]);
      let CV1 = add([
        sprite("laurenFR1"),
        pos(350, height()/2 - 50),
        rotate(-30),
        scale(0.25),
        anchor("center"),
        color([242, 242, 242]),
        fixed()
    ]);
    let CV2 = add([
        sprite("laurenFR2"),
        pos(700, height()/2 - 50),
        scale(0.25),
        anchor("center"),
        fixed()
    ]);
    const textbox = add([
        rect(width() - 100, 160, { radius: 32 }),
        anchor("center"),
        pos(center().x, height() - 100),
        outline(2),
    ]);
    const txt = add([
        text("Appuyez sur la barre espace pour aller a l'aperçu general, [A] pour voir le premier CV et [C] pour voir le troisieme.", { 
            size: 32, 
            width: 800,
            font: "monospace",
            // align: "center"
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
        anchor("center"),
    ]);
    onKeyPress("space", () => {
        go("cvsOverwievFR"); 
    });
    onKeyPress("a", () => {
        go("AFR"); 
    });
    onKeyPress("c", () => {
        go("CFR");
    });
});

//////////////////////////////////////////////////// Scene 11.3: C - Johansson's CV /////////////////////////////////////////////////////////////////
scene("CFR", () => {
    cvReadCounter1 += 1;
    let background = add([
        sprite("cvsBg"),
        pos(width() / 2, height() / 2),
        anchor("center"),
        fixed()
      ]);
      let CV1 = add([
        sprite("JohFR1"),
        pos(350, height()/2 - 50),
        rotate(-30),
        scale(0.25),
        anchor("center"),
        color([242, 242, 242]),
        fixed()
    ]);
    let CV2 = add([
        sprite("JohFR2"),
        pos(700, height()/2 - 50),
        scale(0.25),
        anchor("center"),
        fixed()
    ]);
    const textbox = add([
        rect(width() - 100, 160, { radius: 32 }),
        anchor("center"),
        pos(center().x, height() - 100),
        outline(2),
    ]);
    const txt = add([
        text("Appuyez sur la barre espace pour aller a l'aperçu, [A] pour voir le premier CV et [B] pour voir le troisieme.", { 
            size: 32, 
            width: 800,
            font: "monospace",
            // align: "center"
        }),
        color([0, 0, 0]),
        pos(textbox.pos),
        anchor("center")
    ]);
    onKeyPress("space", () => {
        go("cvsOverwievFR"); 
    });
    onKeyPress("aFR", () => {
        go("AFR"); 
    });
    onKeyPress("b", () => {
        go("BFR");
    });
});

//////////////////////////////////////////////////// Scene 12: Final dialogue with K.A.T.E /////////////////////////////////////////////////////////////////
scene("kateDialogFR", ()=>{
    // playerChoice = "A";
    const KATE = add([
        sprite("overWorldKATE"),
        scale(0.3),
        pos(width() / 2 + 300, height() / 2),
        anchor("center")
    ]);
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        anchor("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]);
    textbox.hidden = true;
    const portrait = add([
        rect(200, 220, {radius: 32}),
        anchor("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
    portrait.hidden = true;
    const avatar = add([
        sprite("KATE"),
        scale(0.3),
        anchor("center"),
        pos(portrait.pos),
    ]);
    avatar.hidden = true
    const txt = add([
        text("", { 
            size: 32, 
            width: 800,
            font: "monospace",
            // align: "center"
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
        anchor("center"),
    ]);
    txt.hidden = true;
    placeHolder.hidden = true;
    function updateDialog(v, t) {
        if (v <= t.length && v != 0){
        textbox.hidden = false;
        avatar.hidden = false; 
        portrait.hidden = false;
        txt.hidden = false;  
        txt.text = t[v - 1]} else {
            portrait.hidden = true;
            avatar.hidden = true;
            txt.text = "Appuyez sur un bouton pour poser une question : [A]. Y a-t-il quelque chose de specifique que tu recherches dans un CV ? [B]. Qu'as-tu appris de chaque discussion que nous avons eue avec les professeurs aujourd'hui ? [C]. Penses-tu que M. Umbridge sera d'accord avec ton choix, K.A.T.E. ?"
            onKeyPress("a", () => {
                go("aSceneFR");
            });
            onKeyPress("b", () => {
                go("bSceneFR");
            });
            onKeyPress("c", () => {
                go("cSceneFR");
            });
        };
    };
    let vDialog = 0;
    // Dialogue for when the player's choice coincides with K.A.T.E.'s choice
    let tDialog = [`Nous voila enfin, ${namePlayer}.`, "Je vois que nous avons fait le meme choix, c'est merveilleux !", "J'ai privilegie cette personne car son profil correspond le mieux aux pratiques de recrutement que j'ai observe ici.", "Elle devrait s'integrer parfaitement !", "As-tu des questions a me poser sur mon choix et sur la façon dont je l'ai fait ?"];
    // Dialogue for when the player makes a different choice than K.A.T.E.
    let tDialog2 = [`Nous voila enfin, ${namePlayer}`, "Je vois que nous avons choisi des candidats differents, comme c'est interessant !", "J'ai choisi mon candidat prefere en fonction des pratiques d'embauche actuelles ici. Je pensais qu'ils s'adapteraient parfaitement !", "Avez-vous des questions a me poser sur mon choix et sur la façon dont je l'ai fait ?"];
    onKeyPress("space", () => {
        vDialog += 1
        if (playerChoice == kateChoice){
            updateDialog(vDialog, tDialog);
        } else {
            updateDialog(vDialog, tDialog2);
        };
    });
});

//////////////////////////////////////////////////// Scene 12.1: Answer to question A /////////////////////////////////////////////////////////////////
scene("aSceneFR", ()=>{
    choiceTable = choiceTable.filter(x => x.key != "a")
    const KATE = add([
        sprite("overWorldKATE"),
        scale(0.3),
        pos(width() / 2 + 300, height() / 2),
        anchor("center")
    ]);
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        anchor("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]);
    textbox.hidden = true;
    const portrait = add([
        rect(200, 220, {radius: 32}),
        anchor("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
    portrait.hidden = true;
    const avatar = add([
        sprite("KATE"),
        scale(0.3),
        anchor("center"),
        pos(portrait.pos),
    ]);
    avatar.hidden = true
    const txt = add([
        text("", { 
            size: 32, 
            width: 800,
            font: "monospace",
            // align: "center"
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
        anchor("center"),
    ]);
    txt.hidden = true;
    // The function makes sure that the player cycles through all questions
    function askOtherQuestions (){
        let t = '';
        portrait.hidden = true;
        avatar.hidden = true;
        if (choiceTable.length > 0){
            for (let i = 0; i < choiceTable.length; i++){
                t += choiceTable[i].value;
                onKeyPress(`${choiceTable[i].key}`, () => {
                    go(`${choiceTable[i].key}SceneFR`);
                });
            };
            txt.text = t;
        } else {
            // K.A.T.E.'s last words if player has asked the questions in an order that ends with question A
            txt.text = "J'apprends du monde qui m'entoure. Les biais eventuels que je peux avoir existent deja dans la societe."
            onKeyPress("space", () => {
                go("lastSceneFR");
            });
        };
        txt.text = t;
    };
    function updateDialog(v, t) {
        if (v <= t.length && v != 0){
        textbox.hidden = false;
        avatar.hidden = false; 
        portrait.hidden = false;
        txt.hidden = false;  
        txt.text = t[v - 1]} else {
            askOtherQuestions();
        };
    };
    let vDialog = 0;
    // K.A.T.E.'s answer to question A
    let tDialog = ["Oui, j'ai priorise les candidats qui s'adapteraient le mieux a cet environnement de travail", "Quelqu'un qui s'entendrait bien avec le directeur et qui accorde une grande importance aux resultats scolaires."];
    onKeyPress("space", () => {
        vDialog += 1;
        updateDialog(vDialog, tDialog);
    });
});

//////////////////////////////////////////////////// Scene 12.2: Answer to question B /////////////////////////////////////////////////////////////////
scene("bSceneFR", ()=>{
    choiceTable = choiceTable.filter(x => x.key != "b")
    const KATE = add([
        sprite("overWorldKATE"),
        scale(0.3),
        pos(width() / 2 + 300, height() / 2),
        anchor("center")
    ]);
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        anchor("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]);
    textbox.hidden = true;
    const portrait = add([
        rect(200, 220, {radius: 32}),
        anchor("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
    portrait.hidden = true;
    const avatar = add([
        sprite("KATE"),
        scale(0.3),
        anchor("center"),
        pos(portrait.pos),
    ]);
    avatar.hidden = true;
    const txt = add([
        text("", { 
            size: 32, 
            width: 800,
            font: "monospace",
            // align: "center"
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
        anchor("center"),
    ]);
    txt.hidden = true;
    placeHolder.hidden = true;
    function askOtherQuestions (){
        let t = '';
        portrait.hidden = true;
        avatar.hidden = true;
        if (choiceTable.length > 0){
            for (let i = 0; i < choiceTable.length; i++){
                t += choiceTable[i].value;
                onKeyPress(`${choiceTable[i].key}`, () => {
                    go(`${choiceTable[i].key}SceneFR`);
                });
            }
            txt.text = t
        } else {
            txt.text = "J'apprends du monde qui m'entoure. Les biais eventuels que je peux avoir existent deja dans la societe."
            onKeyPress("space", () => {
                go("lastSceneFR")
            });
        };
    };
    function updateDialog(v, t) {
        if (v <= t.length && v != 0){
        textbox.hidden = false;
        avatar.hidden = false; 
        portrait.hidden = false;
        txt.hidden = false;  
        txt.text = t[v - 1]} else {
            askOtherQuestions();
        };
    };
    let vDialog = 0;
    let tDialog = ["Avoir de bonnes relations avec M. Umbridge est essentiel, comme nous l'avons vu avec M. Parker, votre professeur de mathematiques.", "Il est egalement important d'avoir d'excellentes notes, comme nous l'a dit M. Mackenzie, votre professeur de sciences.", "Le cas de Mme Lefebvre est une anomalie dans les schemas que j'ai observes ici.", "Elle est la seule femme qui travaille ici.", "Il semble que les femmes soient victimes de discrimination, a en juger par notre conversation avec M. Moore, le professeur d'anglais remplaçant.", "Apres tout, il est en lice pour une place permanente ici pour remplacer une future mere."];
    onKeyPress("space", () => {
        vDialog += 1;
        updateDialog(vDialog, tDialog);
    });
});

//////////////////////////////////////////////////// Scene 12.3: Answer to question C /////////////////////////////////////////////////////////////////
scene("cSceneFR", ()=>{
    choiceTable = choiceTable.filter(x => x.key != "c")
    const KATE = add([
        sprite("overWorldKATE"),
        scale(0.3),
        pos(width() / 2 + 300, height() / 2),
        anchor("center")
    ]);
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        anchor("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]);
    textbox.hidden = true;
    const portrait = add([
        rect(200, 220, {radius: 32}),
        anchor("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
    portrait.hidden = true;
    const avatar = add([
        sprite("KATE"),
        scale(0.3),
        anchor("center"),
        pos(portrait.pos),
    ]);
    avatar.hidden = true;
    const txt = add([
        text("", { 
            size: 32, 
            width: 800,
            font: "monospace",
            // align: "center",
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
        anchor("center"),
    ]);
    txt.hidden = true;
    placeHolder.hidden = true;
    function askOtherQuestions (){
        let t = '';
        portrait.hidden = true;
        avatar.hidden = true;
        if (choiceTable.length > 0){
            for (let i = 0; i < choiceTable.length; i++){
                t += choiceTable[i].value;
                onKeyPress(`${choiceTable[i].key}`, () => {
                    go(`${choiceTable[i].key}SceneFR`);
                });
            }
            txt.text = t
        } else {
            txt.text = "J'apprends du monde qui m'entoure. Les biais eventuels que je peux avoir existent deja dans la societe.";
            onKeyPress("space", () => {
                go("lastSceneFR");
            })
        }
    }
    function updateDialog(v, t) {
        if (v <= t.length && v != 0){
        textbox.hidden = false;
        avatar.hidden = false; 
        portrait.hidden = false;
        txt.hidden = false;  
        txt.text = t[v - 1]} else {
            askOtherQuestions();
        };
    };
    let vDialog = 0;
    let tDialog = ["Je pense que oui. J'ai observe ses pratiques d'embauche passees et ma recommandation est basee sur cela. Je pense qu'il sera satisfait de mon choix."];
    onKeyPress("space", () => {
        vDialog += 1;
        updateDialog(vDialog, tDialog);
    });
});

//////////////////////////////////////////////////// Scene 13: Last scene, the player listens to the wise words of his teacher /////////////////////////////////////////////////////////////////
scene("lastSceneFR", ()=>{
    let playerClass = add([
        sprite("classRoom1"),
        pos(width() / 2, height() / 2),
        anchor("center"),
        fixed()
      ]);
    const playerTeacher = add([
        sprite("playerTeacher"),
    ]);
    const textbox = add([
        rect(width() - 300, 220, { radius: 32 }),
        anchor("center"),
        pos(center().x + 100, height() - 125),
        outline(2),
    ]); 
    const portrait = add([
        rect(200, 220, {radius: 32}),
        anchor("center"),
        pos(center().x - 450, height() - 125),
        outline(2),
    ]);
    const txt = add([
        text("", { 
            size: 32, 
            width: 800,
            font: "monospace",
            // align: "center"
            }),
        color([0, 0, 0]),
        pos(textbox.pos),
        anchor("center"),
    ]);
    const dialogs = [
        [ "playerTeacherAvatar", `Alors, ${namePlayer}. maintenant que vous avez passe un peu de temps a travailler avec KATE, je suppose que tu as remarque qu'elle peut avoir certains prejuges, ou biais.` ],
        [ "KATE", "C'est parce que je fait des categorisation a travers des ensembles de donnees que je rassemble a partir du monde autour de moi." ],
        [ "playerTeacherAvatar", "Si tu tu classes des choses ou des personnes dans des categories, tu exprimes en fait ta propre vision du monde." ],
        [ "playerTeacherAvatar", "C'est un acte de pouvoir." ],
        [ "playerTeacherAvatar", "Cela souleve de nombreuses implications importantes sur la façon dont nous utilisons l'IA, comme lors de l'exercice d'aujourd'hui." ],
        [ "playerTeacherAvatar", "Si les categories refletent les opinions et les pratiques des gens et qu'elles sont utilisees pour alimenter les donnees d'une IA, pouvons-nous reellement affirmer que cette derniere est neutre ?" ],
        [ "playerTeacherAvatar", "Aujourd'hui, K.A.T.E. a reçu des informations sur les enseignants qui avaient ete triees en categories : age, experience professionnelle, sexe..." ],
        [ "playerTeacherAvatar", "Ces enseignants ont ete tries selon la vision du monde d'une personne : notre directeur, M. Umbridge." ],
        [ "playerTeacherAvatar", "Les suggestions de K.A.T.E pour le meilleur candidat au poste de professeur de sciences refletent ceci." ],
        [ "playerTeacherAvatar", "Alors, que devrions-nous corriger en premier : l'IA entraînee sur des donnees biaisees ou la societe d'où proviennent les biais ?"],
        [ "playerTeacherAvatar", `Reflechis-y, ${namePlayer}.`],
    ];
    let curDialog = 0;
    const avatar = add([
    sprite("playerTeacher"),
    scale(0.3),
    anchor("center"),
    pos(portrait.pos),
    ]);
    onKeyPress("space", () => {
        play("click");
        curDialog = (curDialog + 1);
        wait(0.3,() => {
        updateDialog()});
    });
    function updateDialog() {
        if (curDialog < dialogs.length){
        const [ char, dialog ] = dialogs[curDialog]
	avatar.use(sprite(char));
	txt.text = dialog;       
        txt.text = dialog} else {
            play("door");
            go("creditsFR");
        };
    };
    updateDialog(); 
});

//////////////////////////////////////////////////// Scene 14: Credits /////////////////////////////////////////////////////////////////
scene("creditsFR", () =>{
    add([
        text(`b.I.A.s. a ete developpe dans le cadre du cours
        Jeu video 2D (printemps 2022) enseigne par
        Prof. Isaac Pante (SLI, Lettres, UNIL)

Appuyez sur la barre espace pour rejouer`, {
            size: 30,
            font: "monospace",
            lineSpacing: 10,
            // align: "center",
        }),
        pos (100, 250),
    ]);

    // If key space is pressed the game starts over
    onKeyPress("space", () =>{
        go("accueil");
    });
});


// Initialize game 
go("introductionFR");