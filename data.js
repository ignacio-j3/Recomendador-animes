const animes= [
    // 1 Naruto
    {
        title: "Naruto",
        image_url: "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg",
        genres: ["Acción", "Artes Marsiales", "Comedia", "Shounen", "Superpoderes"],
        start_date: "2002-10-03",
        episodes: 220,
        synopsis: "Naruto es un joven ninja con un zorro demoníaco sellado dentro de él. Busca reconocimiento y sueña con convertirse en el Hokage, el líder de su aldea.",
        watch_links: {
            crunchyroll: "https://www.crunchyroll.com/es/series/GY9PJ5KWR/naruto",
            funimation: "",
            animeflv: "https://www3.animeflv.net/anime/naruto",
            tioanime: "https://tioanime.com/anime/naruto",
            jkanime: "https://jkanime.net/naruto/"
        }
    },  
    // 2 One piece
    {
        title: "One Piece",
        image_url: "https://posterycuadros.com/wp-content/uploads/2021/07/pspdosofdpd.jpg",
        genres: ["Acción", "Aventura", "Comedia", "Drama", "Fantasia", "Shounen", "Superpoderes"],
        start_date: "1997-07-22",
        episodes: "En emisión",
        synopsis: "Monkey D. Luffy, un joven cuyo cuerpo obtuvo propiedades de goma después de comer una fruta del diablo, se embarca en una búsqueda para encontrar el One Piece, el mayor tesoro conocido en la historia de la piratería.",
        watch_links: {
            crunchyroll: "https://www.crunchyroll.com/es/series/GRMG8ZQZR/one-piece",
            funimation: "",
            animeflv: "https://www3.animeflv.net/anime/one-piece-tv",
            tioanime: "https://tioanime.com/anime/one-piece-tv",
            jkanime: "https://jkanime.net/one-piece/"
        }
    },  
    // 3 Shingeki
    {
        title: "Attack on Titan",
        image_url: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
        genres: ["Acción", "Drama", "Fantasía", "Shounen", "Superpoderes"],
        start_date: "2013-04-06",
        episodes: 75,
        synopsis: "En un mundo donde la humanidad reside dentro de enormes murallas para protegerse de unas criaturas humanoides llamadas titanes, la historia sigue a Eren Yeager y sus amigos que se unen a la fuerza militar para enfrentar a los titanes y descubrir sus misterios.",
        watch_links: {
            crunchyroll: "https://www.crunchyroll.com/es/series/GR751KNZY/attack-on-titan",
            funimation: "",
            animeflv: "https://www3.animeflv.net/anime/shingeki-no-kyojin",
            tioanime: "https://tioanime.com/anime/shingeki-no-kyojin",
            jkanime: "https://jkanime.net/shingeki-no-kyojin/"
        }
    },  
    // 4 my hero
    {
        title: "My Hero Academia",
        image_url: "https://www.bluedogposters.com.au/cdn/shop/products/22459_1400x.jpg?v=1613437469",
        genres: ["Acción", "Comedia", "Escolar", "Shounen", "Superpoderes"],
        start_date: "2016-04-03",
        episodes: "En curso",
        synopsis: "En un mundo donde la mayoría de la población tiene superpoderes llamados 'Quirks', Izuku Midoriya no tiene ninguno, pero sueña con ser un héroe. Recibe el poder del héroe número uno, All Might, y se une a la academia para héroes, U.A. High School.",
        watch_links: {
            crunchyroll: "https://www.crunchyroll.com/es/series/G6NQ5DWZ6/my-hero-academia",
            funimation: "https://www.funimation.com/shows/my-hero-academia/?qid=",
            animeflv: "https://www3.animeflv.net/anime/boku-no-hero-academia-2016",
            tioanime: "https://tioanime.com/anime/boku-no-hero-academia-2016",
            jkanime: "https://jkanime.net/boku-no-hero-academia/"
        }
    },  
    // 5 Death Note
    {
        title: "Death Note",
        image_url: "https://cdn.myanimelist.net/images/anime/9/9453.jpg",
        genres: ["Misterio", "Psicológico", "Sobrenatural", "Policía", "Suspenso"],
        start_date: "2006-10-04",
        episodes: 37,
        synopsis: "Light Yagami encuentra un cuaderno llamado 'Death Note' que le permite matar a cualquier persona cuyo nombre escriba en él. Intenta usarlo para eliminar criminales y crear un mundo utópico, pero se enfrenta al detective L que intenta detenerlo.",
        watch_links: {
            crunchyroll: "https://www.crunchyroll.com/es/series/G6QWD3EE6/death-note",
            funimation: "",
            animeflv: "https://www3.animeflv.net/anime/death-note",
            tioanime: "https://tioanime.com/anime/death-note",
            jkanime: "https://jkanime.net/death-note/"
        }
    },  
    // 6 Fullmetal
    {
        title: "Fullmetal Alchemist: Brotherhood",
        image_url: "https://cdn.myanimelist.net/images/anime/1223/96541.jpg",
        genres: ["Acción", "Aventura", "Drama", "Comedia", "Fantasia", "Magia", "Militar", "Shounen"],
        start_date: "2009-04-05",
        episodes: 64,
        synopsis: "Dos hermanos, Edward y Alphonse Elric, buscan la piedra filosofal para restaurar sus cuerpos después de una fallida alquímica que resultó en la pérdida de extremidades para Edward y la pérdida completa del cuerpo para Alphonse.",
        watch_links: {
            crunchyroll: "https://www.crunchyroll.com/es/series/GRGGPG93R/fullmetal-alchemist-brotherhood",
            funimation: "https://www.funimation.com/shows/fullmetal-alchemist-brotherhood/?qid=",
            animeflv: "https://www3.animeflv.net/anime/fullmetal-alchemist",
            tioanime: "https://tioanime.com/anime/fullmetal-alchemist",
            jkanime: "https://jkanime.net/fullmetal-alchemist/"
        }
    },  
    // 7 kimetsu
    {
        title: "Demon Slayer: Kimetsu no Yaiba",
        image_url: "https://cdn.myanimelist.net/images/anime/1286/99889.jpg",
        genres: ["Acción", "Demonios", "Sobrenatural", "Historico", "Shounen"],
        start_date: "2019-04-06",
        episodes: 26,
        synopsis: "Tanjiro Kamado, un joven con talento para la lucha, se convierte en un cazador de demonios después de que su familia es asesinada por demonios y su hermana Nezuko es convertida en uno de ellos. Busca venganza y una cura para Nezuko.",
        watch_links: {
            crunchyroll: "https://www.crunchyroll.com/es/series/GY5P48XEY/demon-slayer-kimetsu-no-yaiba",
            funimation: "https://www.funimation.com/shows/demon-slayer-kimetsu-no-yaiba/",
            animeflv: "https://www3.animeflv.net/anime/kimetsu-no-yaiba",
            tioanime: "https://tioanime.com/anime/kimetsu-no-yaiba",
            jkanime: "https://jkanime.net/kimetsu-no-yaiba/"
        }
    },  
    // 8 one punch
    {
        title: "One Punch Man",
        image_url: "https://cdn.myanimelist.net/images/anime/12/76049.jpg",
        genres: ["Acción", "Ciencia Ficción", "Comedia", "Parodia", "Seinen", "Sobrenatural", "Superpoderes"],
        start_date: "2015-10-05",
        episodes: 24,
        synopsis: "Saitama, un héroe promedio, puede derrotar a cualquier enemigo con un solo golpe. A pesar de su poder abrumador, se siente aburrido y busca un oponente desafiante que pueda igualar su fuerza.",
        watch_links: {
            crunchyroll: "",
            funimation: "",
            animeflv: "https://www3.animeflv.net/anime/one-punch-man",
            tioanime: "https://tioanime.com/anime/one-punch-man",
            jkanime: "https://jkanime.net/one-punch-man/"
        }
    },  
    // 9 steins gate
    {
        title: "Steins;Gate",
        image_url: "https://cdn.myanimelist.net/images/anime/5/73199.jpg",
        genres: ["Ciencia Ficción", "Suspenso"],
        start_date: "2011-04-06",
        episodes: 24,
        synopsis: "Rintarou Okabe, un autoproclamado científico loco, descubre accidentalmente una forma de enviar mensajes al pasado y cambiar la línea temporal. Sin embargo, los cambios en el pasado tienen consecuencias imprevistas en el presente.",
        watch_links: {
            crunchyroll: "https://www.crunchyroll.com/es/series/GYW4D15K6/steinsgate-0",
            funimation: "https://www.funimation.com/shows/steinsgate/?qid=",
            animeflv: "https://www3.animeflv.net/anime/steinsgate-0",
            tioanime: "https://tioanime.com/anime/steinsgate-0",
            jkanime: "https://jkanime.net/steinsgate-0/"
        }
    },  
    // 10 HxH
    {
        title: "Hunter x Hunter",
        image_url: "https://cdn.myanimelist.net/images/anime/11/33657.jpg",
        genres: ["Acción", "Aventura", "Shounen", "Superpoderes"],
        start_date: "2011-10-02",
        episodes: 148,
        synopsis: "Gon Freecss aspira a convertirse en un cazador para encontrar a su padre y descubre que ser un cazador es mucho más peligroso y complicado de lo que imaginaba.",
        watch_links: {
            crunchyroll: "https://www.crunchyroll.com/es/series/GY3VKX1MR/hunter-x-hunter",
            funimation: "",
            animeflv: "https://www3.animeflv.net/anime/hunter-x-hunter-2011 ",
            tioanime: "https://tioanime.com/anime/hunter-x-hunter-2011",
            jkanime: "https://jkanime.net/hunter-x-hunter/"
        }
    },  
    // 11 Cowboy Bepop
    {
        title: "Cowboy Bebop",
        image_url: "https://cdn.myanimelist.net/images/anime/4/19644.jpg",
        genres: ["Acción", "Ciencia Ficción", "Espacial", "Aventuras", "Comedia", "Drama"],
        start_date: "1998-04-03",
        episodes: 26,
        synopsis: "Spike Spiegel y su equipo de cazarrecompensas viajan por la galaxia en la nave Bebop mientras lidian con su pasado y enfrentan desafíos en la búsqueda de recompensas.",
        watch_links: {
            crunchyroll: "https://www.crunchyroll.com/es/series/GYVNXMVP6/cowboy-bebop",
            funimation: "https://www.funimation.com/shows/cowboy-bebop/?qid=None",
            animeflv: "https://www3.animeflv.net/anime/cowboy-bebop",
            tioanime: "https://tioanime.com/anime/cowboy-bebop",
            jkanime: "https://jkanime.net/cowboy-bebop/"
        }
    },  
    // 12 evangelion
    {
        title: "Neon Genesis Evangelion",
        image_url: "https://es.web.img3.acsta.net/r_1280_720/pictures/18/12/07/12/40/4530128.jpg",
        genres: ["Acción", "Drama", "Mecha", "Ciencia Ficción", "Demencia", "Psicológico"],
        start_date: "1995-10-04",
        episodes: 26,
        synopsis: "En un mundo asediado por misteriosos seres conocidos como Ángeles, la organización NERV lucha para defender a la humanidad utilizando gigantes biomecánicos llamados EVA. Shinji Ikari es reclutado para pilotar un EVA y enfrentar a los Ángeles.",
        watch_links: {
            crunchyroll: "",
            funimation: "",
            animeflv: "https://www3.animeflv.net/anime/neon-genesis-evangelion",
            tioanime: "https://tioanime.com/anime/neon-genesis-evangelion",
            jkanime: "https://jkanime.net/evangelion/"
        }
    },  
    // 13 code geaass
    {
        title: "Code Geass: Lelouch of the Rebellion",
        image_url: "https://cdn.myanimelist.net/images/anime/5/50331.jpg",
        genres: ["Acción", "Militar", "Ciencia Ficción", "Escolares", "Mecha", "Superpoderes"],
        start_date: "2006-10-05",
        episodes: 25,
        synopsis: "Lelouch vi Britannia obtiene el poder del Geass, que le permite controlar a otros. Se une a la resistencia japonesa para derrotar al imperio britanniano y descubre oscuros secretos en el camino.",
        watch_links: {
            crunchyroll: "https://www.crunchyroll.com/es/series/GY2P9ED0Y/code-geass",
            funimation: "https://www.funimation.com/shows/code-geass/?qid=",
            animeflv: "https://www3.animeflv.net/anime/code-geass",
            tioanime: "https://tioanime.com/anime/code-geass",
            jkanime: ""
        }
    },  
    // 14 SAO
    {
        title: "Sword Art Online",
        image_url: "https://cdn.myanimelist.net/images/anime/11/39717.jpg",
        genres: ["Acción", "Aventura", "Romance", "Fantasia", "Juego"],
        start_date: "2012-07-08",
        episodes: "En emisión",
        synopsis: "Jugadores atrapados en un juego de realidad virtual deben luchar por sobrevivir. Kirito, uno de los jugadores, se embarca en diversas aventuras mientras intenta descubrir la verdad detrás de este mundo virtual mortal.",
        watch_links: {
            crunchyroll: "https://www.crunchyroll.com/es/series/GR49G9VP6/sword-art-online",
            funimation: "https://www.funimation.com/shows/sword-art-online/",
            animeflv: "https://www3.animeflv.net/anime/sword-art-online",
            tioanime: "https://tioanime.com/anime/sword-art-online",
            jkanime: "https://jkanime.net/sword-art-online/"
        }
    },  
    // 15 Tokyo Ghoul
    {
        title: "Tokyo Ghoul",
        image_url: "https://i.pinimg.com/736x/bb/d5/9b/bbd59b6cbfb0d1a2a1b64da1accd76a8.jpg",
        genres: ["Acción", "Terror", "Psicológico", "Drama", "Misterio", "Seinen", "Sobrenatural"],
        start_date: "2014-07-04",
        episodes: 12,
        synopsis: "Kaneki Ken se convierte en mitad ghoul después de un encuentro violento con uno de ellos. Ahora, lucha por sobrevivir en el mundo de los ghouls, seres que se alimentan de carne humana.",
        watch_links: {
            crunchyroll: "https://www.crunchyroll.com/es/series/G6NV7Z50Y/tokyo-ghoul",
            funimation: "https://www.funimation.com/shows/tokyo-ghoul/",
            animeflv: "https://www3.animeflv.net/anime/tokyo-ghoul",
            tioanime: "https://tioanime.com/anime/tokyo-ghoul",
            jkanime: "https://jkanime.net/tokyo-ghoul/"
        }
    },  
    // 16 Haikyuu
    {
        title: "Haikyuu!!",
        image_url: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
        genres: ["Deportes", "Comedia", "Drama", "Escolar", "Shounen"],
        start_date: "2014-04-06",
        episodes: "En emisión",
        synopsis: "Shoyo Hinata se une al club de voleibol de la escuela secundaria, ansioso por vengar su derrota pasada. Sin embargo, debe aprender a trabajar en equipo con sus compañeros de equipo para alcanzar nuevas alturas en el voleibol.",
        watch_links: {
            crunchyroll: "https://www.crunchyroll.com/es/series/GY8VM8MWY/haikyu",
            funimation: "",
            animeflv: "https://www3.animeflv.net/anime/haikyuu",
            tioanime: "https://tioanime.com/anime/haikyuu",
            jkanime: "https://jkanime.net/haikyuu/"
        }
    },  
    // 17 Re: Zero
    {
        title: "Re:Zero - Starting Life in Another World",
        image_url: "https://m.media-amazon.com/images/M/MV5BN2NlM2Y5Y2MtYjU5Mi00ZjZiLWFjNjMtZDNiYzJlMjhkOWZiXkEyXkFqcGdeQXVyNjc2NjA5MTU@._V1_.jpg",
        genres: ["Drama", "Fantasía", "Psicológico", "Suspenso"],
        start_date: "2016-04-04",
        episodes: "En emisión",
        synopsis: "Subaru Natsuki es transportado a otro mundo y descubre que tiene la capacidad de regresar a la vida después de morir. Intenta resolver los misterios de este mundo y proteger a sus seres queridos.",
        watch_links: {
            crunchyroll: "https://www.crunchyroll.com/es/series/GRGG9798R/rezero--starting-life-in-another-world-",
            funimation: "",
            animeflv: "https://www3.animeflv.net/anime/rezero-kara-hajimeru-isekai-seikatsu",
            tioanime: "https://tioanime.com/anime/rezero-kara-hajimeru-isekai-seikatsu",
            jkanime: "https://jkanime.net/rezero-kara-hajimeru-isekai-seikatsu/"
        }
    }, 
    // 18 Black clover
    {
        title: "Black Clover",
        image_url: "https://i.ebayimg.com/images/g/aLMAAOSwh0thmvGh/s-l1200.webp",
        genres: ["Acción", "Comedia", "Magia", "Fantasia", "Shounen"],
        start_date: "2017-10-03",
        episodes: "En emisión",
        synopsis: "Asta, un joven sin poder mágico en un mundo donde la magia es todo, busca convertirse en el Rey Mago para demostrar que incluso aquellos sin magia pueden lograr grandes cosas.",
        watch_links: {
            crunchyroll: "https://www.crunchyroll.com/es/series/GRE50KV36/black-clover",
            funimation: "",
            animeflv: "https://www3.animeflv.net/anime/black-clover-tv",
            tioanime: "https://tioanime.com/anime/black-clover-tv",
            jkanime: "https://jkanime.net/black-clover-tv/"
        }
    },  
    // 19 The promissed neverland
    {
        title: "The Promised Neverland",
        image_url: "https://thicc.mywaifulist.moe/series/3325/dae30d9bad0e1c0e969e96d2863c442e74c95e0207cb20b57aa3512ed39ef476_thumbnail.jpeg",
        genres: ["Misterio", "Shounen", "Ciencia Ficción", "Terror"],
        start_date: "2019-01-11",
        episodes: 23,
        synopsis: "Emma y sus amigos descubren oscuros secretos en el orfanato donde crecieron. Ahora, deben idear un plan para escapar de este lugar aterrador y enfrentarse a criaturas misteriosas.",
        watch_links: {
            crunchyroll: "https://www.crunchyroll.com/es/series/GYVD2K1WY/the-promised-neverland",
            funimation: "https://www.funimation.com/shows/the-promised-neverland/?qid=None",
            animeflv: "https://www3.animeflv.net/anime/yakusoku-no-neverland",
            tioanime: "https://tioanime.com/anime/yakusoku-no-neverland",
            jkanime: "https://jkanime.net/yakusoku-no-neverland/"
        }
    },  
    // 20 Jujutsu kaisen
    {
        title: "Jujutsu Kaisen",
        image_url: "https://i.pinimg.com/originals/a0/88/5a/a0885a154cbf0182c9cd8dca39ed6d11.jpg",
        genres: ["Acción", "Demonios", "Sobrenatural", "Escolar", "Shounen", "Terror"],
        start_date: "2020-10-03",
        episodes: "En emisión",
        synopsis: "Yuji Itadori se involucra en el mundo de las maldiciones y jujutsu después de un encuentro fatídico. Debe enfrentarse a poderosas maldiciones y proteger a sus seres queridos.",
        watch_links: {
            crunchyroll: "https://www.crunchyroll.com/es/series/GRDV0019R/jujutsu-kaisen",
            funimation: "https://www.funimation.com/shows/jujutsu-kaisen/",
            animeflv: "https://www3.animeflv.net/anime/jujutsu-kaisen-tv",
            tioanime: "https://tioanime.com/anime/jujutsu-kaisen-tv",
            jkanime: "https://jkanime.net/jujutsu-kaisen-tv/"
        }
    }
];

export default animes;