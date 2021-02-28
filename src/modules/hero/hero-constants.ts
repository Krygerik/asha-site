import {
    DougalIcon,
    EllaineIcon,
    GodricIcon,
    IrinaIcon,
    KlausIcon,
    LaszloIcon,
    MaeveIcon,
    RutgerIcon,
    ValeriaIcon,
    VittorioIcon
} from "../../assets/haven";
import {
    AgraelIcon,
    AlastorIcon,
    DelebIcon,
    GrawlIcon,
    GrokIcon,
    JezebethIcon,
    MarbasIcon,
    NebirosIcon,
    NymusIcon,
    OrlandoIcon
} from "../../assets/inferno";
import {
    ArantirIcon,
    DeirdreIcon,
    KasparIcon,
    LucretiaIcon,
    MarkalIcon,
    NaadirIcon,
    NicolaiIcon,
    OrnellaIcon,
    OrsonIcon,
    RavenIcon,
    VladimirIcon,
    ZoltanIcon
} from "../../assets/necropolis";
import {
    AlaronIcon,
    AnwenIcon,
    DiraelIcon,
    FindanIcon,
    GilraenIcon,
    OssirIcon,
    TalanarIcon,
    VinraelIcon,
    WyngaalIcon,
    YlthinIcon
} from "../../assets/sylvan";
import {
    FaizIcon,
    GalipIcon,
    HavezIcon,
    JhoraIcon,
    MaahirIcon,
    NarxesIcon,
    NathirIcon,
    NurIcon,
    RazzakIcon,
    ZehirIcon
} from "../../assets/academy";
import {
    EruinaIcon,
    KythraIcon,
    LethosIcon,
    ShadyaIcon,
    SinitarIcon,
    SorgalIcon,
    VayshanIcon,
    YlayaIcon,
    YrbethIcon,
    YrwannaIcon
} from "../../assets/dungeon";
import {
    BrandIcon,
    EbbaIcon,
    ErlingIcon,
    HelmarIcon,
    IngaIcon,
    IngvarIcon,
    KarliIcon,
    RolfIcon,
    SveaIcon,
    WulfstanIcon
} from "../../assets/fortress";
import {
    GarunaIcon,
    GorshakIcon,
    GotaiIcon,
    HaggashIcon,
    KilghanIcon,
    KraghIcon,
    KujinIcon,
    QuroqIcon,
    ShakKarukatIcon,
    TelsekIcon
} from "../../assets/stronghold";

/**
 * Тип героя
 */
export type THero = {
    // Название в игре
    name: string;
    // Локализованное название
    locale: string;
    // Раса
    race: string;
    // Иконка героя 125х125
    icon: string;
};

/**
 * Перечисление всех герое и их свойств
 */
export const HEROES: THero[] = [
    {
        name: "Orrin",
        locale: "Дугал",
        race: "Орден Порядка",
        icon: DougalIcon,
    },
    {
        name: "Sarge",
        locale: "Аксель",
        race: "Орден Порядка",
        icon: KlausIcon,
    },
    {
        name: "Mardigo",
        locale: "Ласло",
        race: "Орден Порядка",
        icon: LaszloIcon,
    },
    {
        name: "Brem",
        locale: "Рутгер",
        race: "Орден Порядка",
        icon: RutgerIcon,
    },
    {
        name: "Maeve",
        locale: "Мив",
        race: "Орден Порядка",
        icon: MaeveIcon,
    },
    {
        name: "Ving",
        locale: "Айрис",
        race: "Орден Порядка",
        icon: IrinaIcon,
    },
    {
        name: "Nathaniel",
        locale: "Эллайна",
        race: "Орден Порядка",
        icon: EllaineIcon,
    },
    {
        name: "Christian",
        locale: "Витторио",
        race: "Орден Порядка",
        icon: VittorioIcon,
    },
    {
        name: "Godric",
        locale: "Годрик",
        race: "Орден Порядка",
        icon: GodricIcon,
    },
    {
        name: "RedHeavenHero03",
        locale: "Валерия",
        race: "Орден Порядка",
        icon: ValeriaIcon,
    },
    {
        name: "Grok",
        locale: "Грок",
        race: "Инферно",
        icon: GrokIcon,
    },
    {
        name: "Oddrema",
        locale: "Джезебет",
        race: "Инферно",
        icon: JezebethIcon,
    },
    {
        name: "Marder",
        locale: "Марбас",
        race: "Инферно",
        icon: MarbasIcon,
    },
    {
        name: "Jazaz",
        locale: "Ниброс",
        race: "Инферно",
        icon: NebirosIcon,
    },
    {
        name: "Efion",
        locale: "Аластор",
        race: "Инферно",
        icon: AlastorIcon,
    },
    {
        name: "Deleb",
        locale: "Дэлеб",
        race: "Инферно",
        icon: DelebIcon,
    },
    {
        name: "Calid",
        locale: "Грол",
        race: "Инферно",
        icon: GrawlIcon,
    },
    {
        name: "Nymus",
        locale: "Нимус",
        race: "Инферно",
        icon: NymusIcon,
    },
    {
        name: "Orlando",
        locale: "Орландо",
        race: "Инферно",
        icon: OrlandoIcon,
    },
    {
        name: "Agrael",
        locale: "Аграил",
        race: "Инферно",
        icon: AgraelIcon,
    },
    {
        name: "Nemor",
        locale: "Дейдра",
        race: "Некрополис",
        icon: DeirdreIcon,
    },
    {
        name: "Tamika",
        locale: "Лукреция",
        race: "Некрополис",
        icon: LucretiaIcon,
    },
    {
        name: "Muscip",
        locale: "Наадир",
        race: "Некрополис",
        icon: NaadirIcon,
    },
    {
        name: "Aberrar",
        locale: "Золтан",
        race: "Некрополис",
        icon: ZoltanIcon,
    },
    {
        name: "Straker",
        locale: "Орсон",
        race: "Некрополис",
        icon: OrsonIcon,
    },
    {
        name: "Effig",
        locale: "Равенна",
        race: "Некрополис",
        icon: RavenIcon,
    },
    {
        name: "Pelt",
        locale: "Влад",
        race: "Некрополис",
        icon: VladimirIcon,
    },
    {
        name: "Gles",
        locale: "Каспар",
        race: "Некрополис",
        icon: KasparIcon,
    },
    {
        name: "Arantir",
        locale: "Арантир",
        race: "Некрополис",
        icon: ArantirIcon,
    },
    {
        name: "OrnellaNecro",
        locale: "Орнелла",
        race: "Некрополис",
        icon: OrnellaIcon,
    },
    {
        name: "Berein",
        locale: "Маркел",
        race: "Некрополис",
        icon: MarkalIcon,
    },
    {
        name: "Nikolas",
        locale: "Николас",
        race: "Некрополис",
        icon: NicolaiIcon,
    },
    {
        name: "Metlirn",
        locale: "Анвэн",
        race: "Лесной Союз",
        icon: AnwenIcon,
    },
    {
        name: "Gillion",
        locale: "Гильраэн",
        race: "Лесной Союз",
        icon: GilraenIcon,
    },
    {
        name: "Nadaur",
        locale: "Таланар",
        race: "Лесной Союз",
        icon: TalanarIcon,
    },
    {
        name: "Diraya",
        locale: "Дираэль",
        race: "Лесной Союз",
        icon: DiraelIcon,
    },
    {
        name: "Ossir",
        locale: "Оссир",
        race: "Лесной Союз",
        icon: OssirIcon,
    },
    {
        name: "Itil",
        locale: "Ильфина",
        race: "Лесной Союз",
        icon: YlthinIcon,
    },
    {
        name: "Elleshar",
        locale: "Винраэль",
        race: "Лесной Союз",
        icon: VinraelIcon,
    },
    {
        name: "Linaas",
        locale: "Вингаэль",
        race: "Лесной Союз",
        icon: WyngaalIcon,
    },
    {
        name: "Heam",
        locale: "Файдаэн",
        race: "Лесной Союз",
        icon: FindanIcon,
    },
    {
        name: "Ildar",
        locale: "Аларон",
        race: "Лесной Союз",
        icon: AlaronIcon,
    },
    {
        name: "Faiz",
        locale: "Фаиз",
        race: "Академия Волшебства",
        icon: FaizIcon,
    },
    {
        name: "Havez",
        locale: "Хафиз",
        race: "Академия Волшебства",
        icon: HavezIcon,
    },
    {
        name: "Nur",
        locale: "Назир",
        race: "Академия Волшебства",
        icon: NathirIcon,
    },
    {
        name: "Astral",
        locale: "Нура",
        race: "Академия Волшебства",
        icon: NurIcon,
    },
    {
        name: "Sufi",
        locale: "Ора",
        race: "Академия Волшебства",
        icon: JhoraIcon,
    },
    {
        name: "Razzak",
        locale: "Нархиз",
        race: "Академия Волшебства",
        icon: NarxesIcon,
    },
    {
        name: "Tan",
        locale: "Джалиб",
        race: "Академия Волшебства",
        icon: GalipIcon,
    },
    {
        name: "Isher",
        locale: "Раззак",
        race: "Академия Волшебства",
        icon: RazzakIcon,
    },
    {
        name: "Zehir",
        locale: "Зехир",
        race: "Академия Волшебства",
        icon: ZehirIcon,
    },
    {
        name: "Maahir",
        locale: "Маахир",
        race: "Академия Волшебства",
        icon: MaahirIcon,
    },
    {
        name: "Eruina",
        locale: "Эрин",
        race: "Лига Теней",
        icon: EruinaIcon,
    },
    {
        name: "Inagost",
        locale: "Синитар",
        race: "Лига Теней",
        icon: SinitarIcon,
    },
    {
        name: "Urunir",
        locale: "Иранна",
        race: "Лига Теней",
        icon: YrwannaIcon,
    },
    {
        name: "Almegir",
        locale: "Ирбет",
        race: "Лига Теней",
        icon: YrbethIcon,
    },
    {
        name: "Menel",
        locale: "Кифра",
        race: "Лига Теней",
        icon: KythraIcon,
    },
    {
        name: "Dalom",
        locale: "Летос",
        race: "Лига Теней",
        icon: LethosIcon,
    },
    {
        name: "Ferigl",
        locale: "Соргал",
        race: "Лига Теней",
        icon: SorgalIcon,
    },
    {
        name: "Ohtarig",
        locale: "Вайшан",
        race: "Лига Теней",
        icon: VayshanIcon,
    },
    {
        name: "Kelodin",
        locale: "Шадия",
        race: "Лига Теней",
        icon: ShadyaIcon,
    },
    {
        name: "Shadwyn",
        locale: "Илайя",
        race: "Лига Теней",
        icon: YlayaIcon,
    },
    {
        name: "Brand",
        locale: "Бранд",
        race: "Северные Кланы",
        icon: BrandIcon,
    },
    {
        name: "Bersy",
        locale: "Ибба",
        race: "Северные Кланы",
        icon: EbbaIcon,
    },
    {
        name: "Egil",
        locale: "Эрлинг",
        race: "Северные Кланы",
        icon: ErlingIcon,
    },
    {
        name: "Ottar",
        locale: "Хельмар",
        race: "Северные Кланы",
        icon: HelmarIcon,
    },
    {
        name: "Una",
        locale: "Инга",
        race: "Северные Кланы",
        icon: IngaIcon,
    },
    {
        name: "Ingvar",
        locale: "Ингвар",
        race: "Северные Кланы",
        icon: IngvarIcon,
    },
    {
        name: "Vegeyr",
        locale: "Свея",
        race: "Северные Кланы",
        icon: SveaIcon,
    },
    {
        name: "Skeggy",
        locale: "Карли",
        race: "Северные Кланы",
        icon: KarliIcon,
    },
    {
        name: "Wulfstan",
        locale: "Вульфстен",
        race: "Северные Кланы",
        icon: WulfstanIcon,
    },
    {
        name: "Rolf",
        locale: "Рольф",
        race: "Северные Кланы",
        icon: RolfIcon,
    },
    {
        name: "Hero3",
        locale: "Гаруна",
        race: "Великая Орда",
        icon: GarunaIcon,
    },
    {
        name: "Hero6",
        locale: "Шак Карукат",
        race: "Великая Орда",
        icon: ShakKarukatIcon,
    },
    {
        name: "Hero8",
        locale: "Тилсек",
        race: "Великая Орда",
        icon: TelsekIcon,
    },
    {
        name: "Hero7",
        locale: "Хаггеш",
        race: "Великая Орда",
        icon: HaggashIcon,
    },
    {
        name: "Hero1",
        locale: "Краг",
        race: "Великая Орда",
        icon: KraghIcon,
    },
    {
        name: "Hero9",
        locale: "Киган",
        race: "Великая Орда",
        icon: KilghanIcon,
    },
    {
        name: "Hero4",
        locale: "Гошак",
        race: "Великая Орда",
        icon: GorshakIcon,
    },
    {
        name: "Kujin",
        locale: "Куджин",
        race: "Великая Орда",
        icon: KujinIcon,
    },
    {
        name: "Gottai",
        locale: "Готай",
        race: "Великая Орда",
        icon: GotaiIcon,
    },
    {
        name: "Quroq",
        locale: "Курак",
        race: "Великая Орда",
        icon: QuroqIcon,
    },
];
