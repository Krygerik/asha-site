import * as React from "react";
import {Accordion, List } from "semantic-ui-react";

/**
 * Правила турнира
 */
export const TournamentRules = React.memo(() => {
    const [activeIndex, setActiveIndex] = React.useState(-1);

    /**
     * Обработчик клика по названию вкладки
     */
    const handleClickAccordionTitle = (index: number) => () => {
        setActiveIndex(activeIndex === index ? -1 : index);
    }

    return (
        <Accordion styled fluid style={{ fontSize: '18px', marginTop: '1rem' }}>
            <Accordion.Title
                active={activeIndex === 0}
                onClick={handleClickAccordionTitle(0)}
            >
                Игра и параметры лобби
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
                <List ordered>
                    <List.Item>
                        Игры проходят на последней официальной версии игры –
                        Heroes of Might and Magic V: Tribes to the East 3.1
                    </List.Item>
                    <List.Item>
                        По умолчанию игра ведется через программу GameRanger.
                        По техническим причинам или договоренности игра может вестись через программу Hamachi или Radmin VPN.
                    </List.Item>
                    <List.Item>
                        Настройки при создании карты:
                        <List ordered>
                            <List.Item>
                                Режим призрака – выключен
                            </List.Item>
                            <List.Item>
                                Автосохранение – включено
                            </List.Item>
                            <List.Item>
                                Одновременные ходы – включены
                            </List.Item>
                            <List.Item>
                                Время на ход – 15 мин
                            </List.Item>
                            <List.Item>
                                Выбор расы – Указанный в формате турнира
                            </List.Item>
                            <List.Item>
                                Скорость анимации – 5
                            </List.Item>
                            <List.Item>
                                Скорость перемещения существ (в настройках игры, а не при создании карты) – не менее "быстро"
                            </List.Item>
                            <List.Item>
                                Динамический бой – отключен
                            </List.Item>
                        </List>
                    </List.Item>
                </List>
            </Accordion.Content>
            <Accordion.Title
                active={activeIndex === 2}
                onClick={handleClickAccordionTitle(2)}
            >
                Ограничения действий игрока
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 2}>
                <List ordered>
                    <List.Item>
                        Запрещено использование любых багов игры и карты, включая, но не ограничиваясь следующими:
                        <List>
                            <List.Item>
                                - Запрещено использование знака некроманта на фантомах
                            </List.Item>
                        </List>
                    </List.Item>
                    <List.Item>
                        Запрещено использование сканера, намеренных "вылетов" и других приемов нечестной игры
                    </List.Item>
                    <List.Item>
                        Игра проводится без дополнительных модов, исключением являются моды на изменение графического интерфейса и лога игры
                    </List.Item>
                </List>
            </Accordion.Content>
            <Accordion.Title
                active={activeIndex === 3}
                onClick={handleClickAccordionTitle(3)}
            >
                Причины дисквалификации
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 3}>
                <List>
                    <List.Item>
                        Игрок может быть исключен из турнира по следующим причинам:
                        <List ordered>
                            <List.Item>
                                Несоблюдение регламента, сроков и правил данного турнира
                            </List.Item>
                            <List.Item>
                                Грубость, публичное оскорбление организатора, судьи и участников турнира
                            </List.Item>
                        </List>
                    </List.Item>
                </List>
            </Accordion.Content>
            <Accordion.Title
                active={activeIndex === 4}
                onClick={handleClickAccordionTitle(4)}
            >
                Обрывы и рестарты
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 4}>
                <List ordered>
                    <List.Item>
                        Противник обязан дать рестарт:
                        <List ordered>
                            <List.Item>
                                В случае съеденных ментором навыков (подтверждается скриншотом прокачки героя)
                            </List.Item>
                            <List.Item>
                                Если в ходе игры был обнаружен баг карты, влияющий на итог сражения.
                                Информация о баге карты со скриншотами, автосейвами и прочими доказательствами
                                отправляются судьям для определения законности требования переигровки,
                                в случае несогласия оппонента и для исправления багов карты
                            </List.Item>
                        </List>
                    </List.Item>
                    <List.Item>
                        В случае обрыва связи или вылета игры загружается последний автосейв.
                        Игроки в точности повторяют все свои ходы вплоть до момента обрыва связи или вылета игры:
                        <List ordered>
                            <List.Item>
                                В случае вылета в 3ий день игроки обязаны повторить все действия, включая прокачку,
                                перегенерацию заклинаний, реролл статов и другие действия, влияющие на последующую
                                битву и экономику игроков
                            </List.Item>
                            <List.Item>
                                Соперник вылетевшего игрока должен пропустить ход и скопировать сейв игры 4го дня
                                для возможного последующего вмешательства судей (в случае необходимости подтверждения
                                соблюдения правила о повторе действий)
                            </List.Item>
                            <List.Item>
                                В случае, если обрыв произошел во время битвы и один из игроков отказывается
                                повторять бой по ходам, то его соперник обращается к судьям
                            </List.Item>
                            <List.Item>
                                Судьи должны присудить результат боя (победа одного из игроков, либо переигровка с нуля)
                            </List.Item>
                        </List>
                    </List.Item>
                    <List.Item>
                        Если для определения победителя требуется вмешательство арбитров, то ситуация будет рассмотрена
                        только в том случае, если хотя бы один из игроков предъявит сейв, реплей или запись сражения,
                        необходимые для вынесения вердикта. В противном случае игра будет считаться несыгранной
                    </List.Item>
                    <List.Item>
                        В случае дисконнекта сохранение реплея обязательно. Вместо реплеев также принимаются ВОДы,
                        но в таком случае просьба следить за тем, чтобы они были доступны. Если в течение одной и той
                        же игры происходит 3 и более дисконнекта от одного игрока — его соперник получает
                        техническую победу
                    </List.Item>
                </List>
            </Accordion.Content>
            <Accordion.Title
                active={activeIndex === 5}
                onClick={handleClickAccordionTitle(5)}
            >
                Результат игры, если на поле никого не осталось
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 5}>
                <List ordered>
                    <List.Item>
                        Если все существа обоих игроков погибнут в конце боя, победителем станет совершивший последнее
                        действие (например, кинул армагеддон, разбил кристалл, ударил существом лавовых драконов и умер
                        от урона огненным щитом)
                    </List.Item>
                    <List.Item>
                        Если было использовано заклинание "Поднятие мёртвых" на живых существах, и те в конце боя
                        (после уничтожения всех войск соперника) умерли, то это не влияет на победу в игре
                    </List.Item>
                </List>
            </Accordion.Content>
            <Accordion.Title
                active={activeIndex === 6}
                onClick={handleClickAccordionTitle(6)}
            >
                Стримы
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 6}>
                <List>
                    <List.Item>
                        В рамках данного турнира обязателен рестрим игр за 1-3 места со стороны официальных стримеров
                        (или группы стримеров) Сообщества
                    </List.Item>
                    <List.Item>
                        Когда игроки договорились играть между собой, они уведомляют об это кастеров для того, чтобы
                        те произвели рестрим их игр
                    </List.Item>
                    <List.Item>
                        Для рестрима кастерам потребуется экран игры (через дискорд, скайп или другое средство для
                        демонстрации экрана)
                    </List.Item>
                    <List.Item>
                        В случае, если договориться на онлайн-трансляцию не удалось, то победивший игрок предоставляет
                        записи реплеев для их последующей трансляции со стороны кастеров турнира (поэтому просьба
                        сохранять реплеи)
                    </List.Item>
                </List>
            </Accordion.Content>
        </Accordion>
    )
});
