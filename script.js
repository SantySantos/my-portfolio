
let lang = document.getElementById('btn-lang');

//about section
let role = document.querySelector('.role-about');
let description_about_1 = document.querySelector('.da-1');
let description_about_2 = document.querySelector('.da-2');

//projects section
let project_general_title = document.querySelector('.general-title');
let image_description = document.querySelector('.img-description');
//let projects_titles_link = document.querySelector('.t-link');

//Killer Journalist
let project_card_title_1 = document.querySelector('.t-1');
let project_card_info_1 = document.querySelector('.game-info-t1');
let project_card_role_1 = document.querySelector('.game-role-t1');
let project_card_description_1 = document.querySelector('.game-description-t1');
let project_card_intro_1 = document.querySelector('.game-intro-t1');

//Self Reflection
let project_card_title_2 = document.querySelector('.t-2');
let project_card_info_2 = document.querySelector('.game-info-t2');
let project_card_role_2 = document.querySelector('.game-role-t2');
let project_card_description_2 = document.querySelector('.game-description-t2');
let project_card_intro_2 = document.querySelector('.game-intro-t2');

//Scattered Time
let project_card_title_3 = document.querySelector('.t-3');
let project_card_info_3 = document.querySelector('.game-info-t3');
let project_card_role_3 = document.querySelector('.game-role-t3');
let project_card_description_3 = document.querySelector('.game-description-t3');
let project_card_intro_3 = document.querySelector('.game-intro-t3');   

//Stems From Nothing
let project_card_title_4 = document.querySelector('.t-4');
let project_card_info_4 = document.querySelector('.game-info-t4');
let project_card_role_4 = document.querySelector('.game-role-t4');
let project_card_description_4 = document.querySelector('.game-description-t4');
let project_card_intro_4 = document.querySelector('.game-intro-t4');

//Education section
let education_title = document.querySelector('.education-title');
let education_place = document.querySelector('.education-place');
let education_degree = document.querySelector('.education-degree');
let education_date = document.querySelector('.education-date');

//skills section
let skills_title = document.querySelector('.skills-title');
let skills_languages_title = document.querySelector('.skills-languages-title');
let skills_game_engines_title = document.querySelector('.skills-game-engines-title');
let skills_tools_title = document.querySelector('.skills-tools-title');
let skills_spoken_languages_title = document.querySelector('.skills-spoken-languages-title');
let skills_languages = document.querySelector('.skills-languages');
let skills_game_engines = document.querySelector('.skills-game-engines');
let skills_tools = document.querySelector('.skills-tools');
let skills_spoken_languages = document.querySelector('.skills-spoken-languages');

//contact section
let contact_title = document.querySelector('.contact-title');
let email = document.querySelector('.email');
let phone = document.querySelector('.phone');
let linkedIn = document.querySelector('.linkedIn');


function changeLanguage() {

    const currentLang = lang.innerHTML.trim();

    if (currentLang === 'FR')
    {
        lang.innerHTML = 'EN';

        //about section
        role.innerHTML = data.french.role;
        description_about_1.innerHTML = data.french.description_about_1;
        description_about_2.innerHTML = data.french.description_about_2;
        image_description.innerHTML = data.french.img_description;
        //projects section
        project_general_title.innerHTML = data.french.project_general_title;
        //projects_titles_link.innerHTML = data.french.projects_titles_link;

        //Killer Journalist
        project_card_title_1.innerHTML = data.french.killer_journalist.project_card_title_1;
        project_card_info_1.innerHTML = data.french.killer_journalist.project_card_info_1;
        project_card_role_1.innerHTML = data.french.killer_journalist.project_card_role_1;
        project_card_description_1.innerHTML = data.french.killer_journalist.project_card_description_1;
        project_card_intro_1.innerHTML = data.french.killer_journalist.project_card_intro_1;

        //self reflection
        project_card_title_2.innerHTML = data.french.self_reflection.project_card_title_2;
        project_card_info_2.innerHTML = data.french.self_reflection.project_card_info_2;
        project_card_role_2.innerHTML = data.french.self_reflection.project_card_role_2;
        project_card_description_2.innerHTML = data.french.self_reflection.project_card_description_2;
        project_card_intro_2.innerHTML = data.french.self_reflection.project_card_intro_2;

        //scattered time
        project_card_title_3.innerHTML = data.french.scattered_time.project_card_title_3;
        project_card_info_3.innerHTML = data.french.scattered_time.project_card_info_3;
        project_card_role_3.innerHTML = data.french.scattered_time.project_card_role_3;
        project_card_description_3.innerHTML = data.french.scattered_time.project_card_description_3;
        project_card_intro_3.innerHTML = data.french.scattered_time.project_card_intro_3;

        //stems from nothing
        project_card_title_4.innerHTML = data.french.stems_from_nothing.project_card_title_4;
        project_card_info_4.innerHTML = data.french.stems_from_nothing.project_card_info_4;
        project_card_role_4.innerHTML = data.french.stems_from_nothing.project_card_role_4;
        project_card_description_4.innerHTML = data.french.stems_from_nothing.project_card_description_4;
        project_card_intro_4.innerHTML = data.french.stems_from_nothing.project_card_intro_4;

        //Education section
        education_title.innerHTML = data.french.education.education_title;
        education_place.innerHTML = data.french.education.education_place;
        education_degree.innerHTML = data.french.education.education_degree;
        education_date.innerHTML = data.french.education.education_date;

        //skills section
        skills_title.innerHTML = data.french.skills.skills_title;
        skills_languages_title.innerHTML = data.french.skills.skills_languages_title;
        skills_languages.innerHTML = data.french.skills.skills_languages;
        skills_game_engines_title.innerHTML = data.french.skills.skills_game_engines_title;
        skills_game_engines.innerHTML = data.french.skills.skills_engines;
        skills_tools_title.innerHTML = data.french.skills.skills_tools_title;
        skills_tools.innerHTML = data.french.skills.skills_tools;
        skills_spoken_languages_title.innerHTML = data.french.skills.skills_spoken_languages_title;
        skills_spoken_languages.innerHTML = data.french.skills.skills_spoken_languages;

        //contact section
        contact_title.innerHTML = data.french.contact.contact_title;
        email.innerHTML = data.french.contact.email;
        phone.innerHTML = data.french.contact.phone;
        linkedIn.innerHTML = data.french.contact.linkedIn;


    } 
    else
    { 
        lang.innerHTML = 'FR';

        //about section
        role.innerHTML = data.english.role;
        description_about_1.innerHTML = data.english.description_about_1;
        description_about_2.innerHTML = data.english.description_about_2;
        image_description.innerHTML = data.english.img_description;
        //projects section
        project_general_title.innerHTML = data.english.project_general_title;
        //projects_titles_link.innerHTML = data.english.projects_titles_link;

        //Killer Journalist
         project_card_title_1.innerHTML = data.english.killer_journalist.project_card_title_1;
        project_card_info_1.innerHTML = data.english.killer_journalist.project_card_info_1;
        project_card_role_1.innerHTML = data.english.killer_journalist.project_card_role_1;
        project_card_description_1.innerHTML = data.english.killer_journalist.project_card_description_1;
        project_card_intro_1.innerHTML = data.english.killer_journalist.project_card_intro_1;
        
        //self reflection
        project_card_title_2.innerHTML = data.english.self_reflection.project_card_title_2;
        project_card_info_2.innerHTML = data.english.self_reflection.project_card_info_2;
        project_card_role_2.innerHTML = data.english.self_reflection.project_card_role_2;
        project_card_description_2.innerHTML = data.english.self_reflection.project_card_description_2;
        project_card_intro_2.innerHTML = data.english.self_reflection.project_card_intro_2;

        //scattered time
        project_card_title_3.innerHTML = data.english.scattered_time.project_card_title_3;
        project_card_info_3.innerHTML = data.english.scattered_time.project_card_info_3;
        project_card_role_3.innerHTML = data.english.scattered_time.project_card_role_3;
        project_card_description_3.innerHTML = data.english.scattered_time.project_card_description_3;
        project_card_intro_3.innerHTML = data.english.scattered_time.project_card_intro_3;

        //stems from nothing
        project_card_title_4.innerHTML = data.english.stems_from_nothing.project_card_title_4;
        project_card_info_4.innerHTML = data.english.stems_from_nothing.project_card_info_4;
        project_card_role_4.innerHTML = data.english.stems_from_nothing.project_card_role_4;
        project_card_description_4.innerHTML = data.english.stems_from_nothing.project_card_description_4;
        project_card_intro_4.innerHTML = data.english.stems_from_nothing.project_card_intro_4;

        //Education section
        education_title.innerHTML = data.english.education.education_title;
        education_place.innerHTML = data.english.education.education_place;
        education_degree.innerHTML = data.english.education.education_degree;
        education_date.innerHTML = data.english.education.education_date;

        //skills section
        skills_title.innerHTML = data.english.skills.skills_title;
        skills_languages_title.innerHTML = data.english.skills.skills_languages_title;
        skills_game_engines_title.innerHTML = data.english.skills.skills_game_engines_title;
        skills_tools_title.innerHTML = data.english.skills.skills_tools_title;
        skills_spoken_languages_title.innerHTML = data.english.skills.skills_spoken_languages_title;
        skills_languages.innerHTML = data.english.skills.skills_languages;
        skills_game_engines.innerHTML = data.english.skills.skills_engines;
        skills_tools.innerHTML = data.english.skills.skills_tools;
        skills_spoken_languages.innerHTML = data.english.skills.skills_spoken_languages;

        //contact section
        contact_title.innerHTML = data.english.contact.contact_title;
        email.innerHTML = data.english.contact.email;
        phone.innerHTML = data.english.contact.phone;
        linkedIn.innerHTML = data.english.contact.linkedIn;
    }   
}

let data = {
    english: 
    {
        //about section
        role: "Gameplay, UI & AI Programmer",
        description_about_1: "I'm a game programming student passionate about <strong> gameplay</strong>, <strong>UI</strong>, and <strong>AI</strong> systems. I specialize in <strong>Unreal Engine 5</strong> using <strong>Blueprints</strong> and <strong>C++</strong>, I also have experience with <strong>Unity</strong> and <strong>C#</strong>.",
        description_about_2: "Currently seeking a <strong>Summer 2026 internship,</strong> I'm eager to contribute to a team where <strong> collaboration</strong>, <strong>communication</strong>, <strong>discipline</strong>, and <strong>ownership</strong> accomplish meaningful things. I believe these values are key when facing challenges and building great games.",
        img_description: "ㆍProblem-Solving ㆍTeamwork ㆍCommunication",
        //projects section
        project_general_title: "Projects",
        projects_titles_link: "View on Itch.io",

        killer_journalist:{
            project_card_title_1: "Killer Journalist",
            project_card_info_1: "<strong>MGD Game Jam 2025 - 1st Place Winner & Best Art</strong>",
            project_card_role_1: "Gameplay and UI Programmer",
            project_card_description_1: "Built in <strong> 48 hours,</strong> Killer Journalist was created in a team of<strong>7 members</strong> with the theme <strong> 'Mask' </strong> at The Indie Asylum in Montreal.",
            project_card_intro_1: " <strong>Killer Journalist </strong> is a narrative puzzle game where the main character is a journalist investigating the case of a dissapeared high profile citizen. The player must mask the truth hidden in the crime scene while discovering the secrets behind the case.",
        },

        self_reflection:{
            project_card_title_2: "Self Reflection",
            project_card_info_2: "<strong>3rd Place Winner in the 2025 Behaviour Interactive Game Jam</strong>",
            project_card_role_2: "Gameplay and UI Programmer",
            project_card_description_2:" Built in <strong>under 48 hours,</strong> Self Reflection was created in a team of <strong>7 members</strong> with the theme <strong> 'If you can't see it, it doesn't exist!'</strong> at the Behaviour Interactive Studios based In Montreal.",
            project_card_intro_2: "<strong>Self Reflection</strong> is a game where the protagonist is a depressed man trying to go through his day, but as he keeps going, he needs to find himself through mirrors in order to stay grounded and not lose himself."
        },

        scattered_time:{
            project_card_title_3:"Scattered Time",
            project_card_info_3: "<strong>4th Semester Final Project | 3rd Place Winner School Game Jam</strong>",
            project_card_role_3: "AI Programmer and Level Designer",
            project_card_description_3:"Built in <strong> 1 month,</strong> Scattered Time was created in a team of only <strong>3 members</strong> with the theme <strong>'Back to Square One'</strong> at Collège LaSalle in Montreal.",
            project_card_intro_3:"<strong>Scattered Time </strong> takes place in a maze where everything goes back in time every 60 seconds.The player needs to discover its secrets, collect items to unlock new areas, and find the 8 portal shards to fix time and escape the loop."
        },

        stems_from_nothing:{
            project_card_title_4:"Stems From Nothing",
            project_card_info_4: "<strong>Une soumission pour la 25e édition du Creative Jam</strong>",
            project_card_role_4: "Gameplay Programmer",
            project_card_description_4:"Built in <strong> under 46 hours,</strong> Stems From Nothing was created in a team of<strong>9 members</strong> with the theme <strong>'Start from nothing'</strong> at NAD School located in Montreal.",
            project_card_intro_4:"<strong>Stems From Nothing</strong> is a game where the player must navigate in a songwriter mind to be able to compose the music while avoiding mental block obstacles. Stems From Nothing meets the technical constraints of: a maximum 5 colors, one level only and one button only.",
        },

        //Education section
        education: {
            education_title: "Education",
            education_place: "Collège LaSalle - Montreal, QC",
            education_degree: "Diploma of College Studies (DEC) in Game Programming",
            education_date: "August 2023 - Present",      
        },

        //skills section
        skills: {
            skills_title: "Skills",
            skills_languages_title: "Languages:",
            skills_languages: "C++, C#, JavaScript, Blueprints, HTML, CSS.",
            skills_game_engines_title: "Game Engines:",
            skills_engines: "Unreal Engine, Unity.",
            skills_tools_title: "Tools:",
            skills_tools: "Perforce, JetBrains Rider, GitHub, Git, VS Code, Visual Studio Community, IntelliJ.",
            skills_spoken_languages_title: "Spoken Languages:",
            skills_spoken_languages: "French, English and Spanish."
        },

        
        //contact section
        contact: {
            contact_title: "Contact Me!",
            email: "Email",
            phone: "Phone",
            linkedIn: "Let's Connect!"
        }

    },
    french: 
    { 
        //about section
        role: "Programmeur gameplay, IU et IA", 
        description_about_1: "Je suis un étudiant en programmation de jeux passionné par les systèmes de <strong>gameplay</strong>, d'<strong>IU</strong> et d'<strong>IA</strong>. Je me spécialise dans <strong>Unreal Engine 5</strong> en utilisant <strong>Blueprints</strong> et <strong>C++</strong>, j'ai également de l'expérience avec <strong>Unity</strong> et <strong>C#</strong>.",
        description_about_2: "Actuellement à la recherche d'un <strong>stage d'été 2026,</strong> je suis impatient de contribuer à une équipe où <strong>la collaboration</strong>, <strong>la communication</strong>, <strong>la discipline</strong> et <strong>la responsabilité</strong> permettent d'accomplir des choses significatives. Je crois que ces valeurs sont essentielles pour relever des défis et créer de grands jeux.",
        img_description: "ㆍSolution de problèmes ㆍTravail d'équipe ㆍCommunication",

        //projects section
        project_general_title: "Projets",
        projects_titles_link: "Revoir sur Itch.io",

        //Killer Journalist
        killer_journalist:{
            project_card_title_1: "Killer Journalist",
            project_card_info_1: "<strong>MGD Game Jam 2025 - 1ère place et meilleur art</strong>",
            project_card_role_1: "Programmeur gameplay et IU",
            project_card_description_1: "Créé en <strong>48 heures,</strong> Killer Journalist a été développé par une équipe de <strong>7 membres</strong> sur le thème <strong>'Masque'</strong> à The Indie Asylum à Montréal.",
            project_card_intro_1: "<strong> Killer Journalist </strong> est un jeu narratif et énigmatique dont le personnage principal est un journaliste enquêtant sur la disparition d'un citoyen influent. Le joueur doit dissimuler la vérité cachée sur la scène du crime tout en découvrant les secrets qui se cachent derrière cette affaire.",
        },
       
        self_reflection:{
             project_card_title_2: "Self Reflection",
            project_card_info_2: "<strong>3ème place au 2025 Behaviour Interactive Game Jam</strong>",
            project_card_role_2: "Programmeur gameplay et IU",
            project_card_description_2:" Créé en <strong>moins de 48 heures,</strong> Self Reflection a été développé par une équipe de <strong>7 membres</strong> sur le thème <strong> 'Si vous ne pouvez pas le voir, cela n'existe pas!'</strong> aux studios Behaviour Interactive basés à Montréal.",
            project_card_intro_2: "<strong>Self Reflection</strong> est un jeu où le protagoniste est un homme déprimé essayant de passer sa journée, mais au fur et à mesure qu'il avance, il doit se retrouver à travers des miroirs afin de rester ancré et de ne pas se perdre."
        },

        scattered_time:{
            project_card_title_3:"Scattered Time",
            project_card_info_3: "<strong>Projet final du 4e semestre | 3e place au School Game Jam</strong>",
            project_card_role_3: "Programmeur IA et concepteur de niveaux",
            project_card_description_3:"Créé en <strong>1 mois,</strong> Scattered Time a été développé par une équipe de seulement <strong>3 membres</strong> sur le thème <strong>'Retour à la case départ'</strong> au Collège LaSalle à Montréal.",
            project_card_intro_3:"<strong>Scattered Time </strong> se déroule dans un labyrinthe où tout revient en arrière toutes les 60 secondes. Le joueur doit découvrir ses secrets, collecter des objets pour débloquer de nouvelles zones et trouver les 8 fragments de portail pour réparer le temps et échapper à la boucle."
        },
        
        stems_from_nothing:{
            project_card_title_4:"Stems From Nothing",
            project_card_info_4: "<strong>Une soumission pour la 25e édition du Creative Jam</strong>",
            project_card_role_4: "Programmeur gameplay",
            project_card_description_4:"Créé en <strong>moins de 46 heures,</strong> Stems From Nothing a été développé par une équipe de <strong>9 membres</strong> sur le thème <strong>'Partir de rien'</strong> à l'école NAD située à Montréal.",
            project_card_intro_4:"<strong>Stems From Nothing</strong> est un jeu dans lequel le joueur doit naviguer dans l'esprit d'un compositeur afin de pouvoir composer de la musique tout en évitant les obstacles liés au blocage mental. Stems From Nothing répond aux contraintes techniques suivantes : 5 couleurs maximum, un seul niveau et un seul bouton.",
        },

        //Education section
        education: {
            education_title: "Éducation",
            education_place: "Collège LaSalle - Montreal, QC",
            education_degree: "Diplôme d'études collégiales (DEC) en programmation de jeux vidéo",
            education_date: "Août 2023 - Présent",
        },

         //skills section
        skills: {
            skills_title: "Compétences",
            skills_languages_title: "Langages:",
            skills_languages: "C++, C#, JavaScript, Blueprints, HTML, CSS.",
            skills_game_engines_title: "Moteurs de jeu:",
            skills_engines: "Unreal Engine, Unity.",
            skills_tools_title: "Outils:",
            skills_tools: "Perforce, JetBrains Rider, GitHub, Git, VS Code, Visual Studio Community, IntelliJ.",
            skills_spoken_languages_title: "Langues parlées:",
            skills_spoken_languages: "Français, Anglais et Espagnol."
        },

        //contact section
        contact: {
            contact_title: "Contactez-moi!",
            email: "Courriel",
            phone: "Téléphone",
            linkedIn: "Restons en Contact!"
        }
    },
 

};