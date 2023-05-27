import {
    Cyrus,
    Faiz,
    Galib,
    Havez,
    Jhora,
    Maahir,
    Narxes,
    Nathir,
    Nur,
    Razzak,
    Temkhan,
    Zehir
} from "../../assets/heroes/academy";
import {
    Agbeth,
    Eruina,
    Kythra,
    Lethos,
    Raelag,
    Ranleth,
    Shadya,
    Sinitar,
    Sorgal,
    Thralsai,
    Vayshan,
    Ylaya,
    Yrbeth,
    Yrwanna
} from "../../assets/heroes/dungeon";
import {
    Brand,
    Ebba,
    Erling,
    Hangvul,
    Helmar,
    Inga,
    Ingvar,
    Karli,
    KingTolghar,
    Rolf,
    Svea,
    Wulfstan
} from "../../assets/heroes/fortress";
import {
    Alaric,
    Andreas,
    Benedikt,
    Bertrand,
    Dougal,
    Duncan,
    Ellaine,
    Freyda,
    Gabrielle,
    Godric,
    Irina,
    Isabel,
    Klaus,
    Laszlo,
    Lorenzo,
    Maeve,
    NicolaiHaven,
    OrlandoHaven,
    OrnellaHaven,
    Rutger,
    Valeria,
    Vittorio
} from "../../assets/heroes/haven";
import {
    Agrael,
    Alastor,
    Biara,
    Deleb,
    Grawl,
    Grok,
    Jezebeth,
    Marbas,
    Nebiros,
    Nymus,
    OrlandoInferno
} from "../../assets/heroes/inferno";
import {
    Arantir,
    Deirdre,
    Giovanni,
    Kaspar,
    Lucretia,
    Markal,
    Naadir,
    NicolaiNecro,
    OrnellaNecro,
    Orson,
    Raven,
    Vladimir,
    Zoltan
} from "../../assets/heroes/necropolis";
import {
    Garuna,
    Gorshak,
    Gotai,
    Haggash,
    Kilghan,
    Kragh,
    Kujin,
    Kunyak,
    Quroq,
    ShakKarukat,
    Telsek,
    Urghat
} from "../../assets/heroes/stronghold";
import {
    Alaron,
    Anwen,
    Dirael,
    Findan,
    Gilraen,
    Ossir,
    Talanar,
    Tieru,
    Vinrael,
    Wyngaal,
    Ylthin
} from "../../assets/heroes/sylvan";

/**
 * Перечисление всех героев и их свойств
 */
export const MAP_HERO_IDS_TO_ICONS: { gameId: string; icon: string }[] = [
    {
        gameId: "Aberrar",
        icon: Zoltan
    },
    {
        gameId: "Agbeth",
        icon: Agbeth
    },
    {
        gameId: "Agrael",
        icon: Agrael
    },
    {
        gameId: "Alaric",
        icon: Alaric
    },
    {
        gameId: "Almegir",
        icon: Yrbeth
    },
    {
        gameId: "Arantir",
        icon: Arantir
    },
    {
        gameId: "Astral",
        icon: Nur
    },
    {
        gameId: "Berein",
        icon: Markal
    },
    {
        gameId: "Bersy",
        icon: Ebba
    },
    {
        gameId: "Biara",
        icon: Biara
    },
    {
        gameId: "Brand",
        icon: Brand
    },
    {
        gameId: "Brem",
        icon: Rutger
    },
    {
        gameId: "Calid",
        icon: Grawl
    },
    {
        gameId: "Christian",
        icon: Vittorio
    },
    {
        gameId: "Cyrus",
        icon: Cyrus
    },
    {
        gameId: "Dalom",
        icon: Lethos
    },
    {
        gameId: "Deleb",
        icon: Deleb
    },
    {
        gameId: "Diraya",
        icon: Dirael
    },
    {
        gameId: "Duncan",
        icon: Duncan
    },
    {
        gameId: "Effig",
        icon: Raven
    },
    {
        gameId: "Efion",
        icon: Alastor
    },
    {
        gameId: "Egil",
        icon: Erling
    },
    {
        gameId: "Elleshar",
        icon: Vinrael
    },
    {
        gameId: "Eruina",
        icon: Eruina
    },
    {
        gameId: "Faiz",
        icon: Faiz
    },
    {
        gameId: "Ferigl",
        icon: Sorgal
    },
    {
        gameId: "Freyda",
        icon: Freyda
    },
    {
        gameId: "Gillion",
        icon: Gilraen
    },
    {
        gameId: "Giovanni",
        icon: Giovanni
    },
    {
        gameId: "Gles",
        icon: Kaspar
    },
    {
        gameId: "Godric",
        icon: Godric
    },
    {
        gameId: "Gottai",
        icon: Gotai
    },
    {
        gameId: "Grok",
        icon: Grok
    },
    {
        gameId: "Hangvul",
        icon: Hangvul
    },
    {
        gameId: "Havez",
        icon: Havez
    },
    {
        gameId: "Heam",
        icon: Findan
    },
    {
        gameId: "Hero1",
        icon: Kragh
    },
    {
        gameId: "Hero2",
        icon: Urghat
    },
    {
        gameId: "Hero3",
        icon: Garuna
    },
    {
        gameId: "Hero4",
        icon: Gorshak
    },
    {
        gameId: "Hero6",
        icon: ShakKarukat
    },
    {
        gameId: "Hero7",
        icon: Haggash
    },
    {
        gameId: "Hero8",
        icon: Telsek
    },
    {
        gameId: "Hero9",
        icon: Kilghan
    },
    {
        gameId: "Ildar",
        icon: Alaron
    },
    {
        gameId: "Inagost",
        icon: Sinitar
    },
    {
        gameId: "Ingvar",
        icon: Ingvar
    },
    {
        gameId: "Isabell",
        icon: Isabel
    },
    {
        gameId: "Isher",
        icon: Razzak
    },
    {
        gameId: "Itil",
        icon: Ylthin
    },
    {
        gameId: "Jazaz",
        icon: Nebiros
    },
    {
        gameId: "Kelodin",
        icon: Shadya
    },
    {
        gameId: "KingTolghar",
        icon: KingTolghar
    },
    {
        gameId: "Kujin",
        icon: Kujin
    },
    {
        gameId: "Kunyak",
        icon: Kunyak
    },
    {
        gameId: "Mardigo",
        icon: Laszlo
    },
    {
        gameId: "Linaas",
        icon: Wyngaal
    },
    {
        gameId: "Maahir",
        icon: Maahir
    },
    {
        gameId: "Maeve",
        icon: Maeve
    },
    {
        gameId: "Marder",
        icon: Marbas
    },
    {
        gameId: "Menel",
        icon: Kythra
    },
    {
        gameId: "Metlirn",
        icon: Anwen
    },
    {
        gameId: "Muscip",
        icon: Naadir
    },
    {
        gameId: "Nadaur",
        icon: Talanar
    },
    {
        gameId: "Nathaniel",
        icon: Ellaine
    },
    {
        gameId: "Nemor",
        icon: Deirdre
    },
    {
        gameId: "NicolaiHaven",
        icon: NicolaiHaven
    },
    {
        gameId: "NikolaiNecro",
        icon: NicolaiNecro
    },
    {
        gameId: "Nur",
        icon: Nathir
    },
    {
        gameId: "Nymus",
        icon: Nymus
    },
    {
        gameId: "Oddrema",
        icon: Jezebeth
    },
    {
        gameId: "Ohtarig",
        icon: Vayshan
    },
    {
        gameId: "Orlando_Haven",
        icon: OrlandoHaven
    },
    {
        gameId: "Orlando_Inferno",
        icon: OrlandoInferno
    },
    {
        gameId: "OrnellaHaven",
        icon: OrnellaHaven
    },
    {
        gameId: "OrnellaNecro",
        icon: OrnellaNecro
    },
    {
        gameId: "Orrin",
        icon: Dougal
    },
    {
        gameId: "Ossir",
        icon: Ossir
    },
    {
        gameId: "Ottar",
        icon: Helmar
    },
    {
        gameId: "Pelt",
        icon: Vladimir
    },
    {
        gameId: "Quroq",
        icon: Quroq
    },
    {
        gameId: "Raelag",
        icon: Raelag
    },
    {
        gameId: "Ranleth",
        icon: Ranleth
    },
    {
        gameId: "Razzak",
        icon: Narxes
    },
    {
        gameId: "RedHeavenHero01",
        icon: Andreas
    },
    {
        gameId: "RedHeavenHero02",
        icon: Lorenzo
    },
    {
        gameId: "RedHeavenHero03",
        icon: Valeria
    },
    {
        gameId: "RedHeavenHero04",
        icon: Benedikt
    },
    {
        gameId: "RedHeavenHero05",
        icon: Bertrand
    },
    {
        gameId: "RedHeavenHero06",
        icon: Gabrielle
    },
    {
        gameId: "Rolf",
        icon: Rolf
    },
    {
        gameId: "Sarge",
        icon: Klaus
    },
    {
        gameId: "Shadwyn",
        icon: Ylaya
    },
    {
        gameId: "Skeggy",
        icon: Karli
    },
    {
        gameId: "Straker",
        icon: Orson
    },
    {
        gameId: "Sufi",
        icon: Jhora
    },
    {
        gameId: "Tamika",
        icon: Lucretia
    },
    {
        gameId: "Tan",
        icon: Galib
    },
    {
        gameId: "Thralsai",
        icon: Thralsai
    },
    {
        gameId: "Tieru",
        icon: Tieru
    },
    {
        gameId: "Timerkhan",
        icon: Temkhan
    },
    {
        gameId: "Una",
        icon: Inga
    },
    {
        gameId: "Urunir",
        icon: Yrwanna
    },
    {
        gameId: "Vegeyr",
        icon: Svea
    },
    {
        gameId: "Ving",
        icon: Irina
    },
    {
        gameId: "Wulfstan",
        icon: Wulfstan
    },
    {
        gameId: "Zehir",
        icon: Zehir
    },
];
