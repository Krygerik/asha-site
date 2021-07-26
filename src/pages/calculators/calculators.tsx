import arrayMutators from "final-form-arrays";
import {get} from "lodash";
import * as React from "react";
import {Form} from "react-final-form";
import {FieldArray} from "react-final-form-arrays";
import {Button, Form as SemanticForm, Grid, Header, Segment} from "semantic-ui-react";
import {FinalFormDictionarySelectField} from "../../components/final-form-dictionary-select-field";
import {FinalFormInputTextField} from "../../components/final-form-input-text-field";
import {FinalFormSelectField} from "../../components/final-form-select-field";
import {DictionaryContext, EDictionaryName, TCommonDictionaryRecord, withDictionaries} from "../../modules/dictionary";
import {Page} from "../../modules/page";
import {TCreatureRecord} from "../../modules/dictionary/dictionary-types";
import {DictionaryArmyCard} from "../../modules/dictionary-card";
import {EEffectName, EEffectTypes, MAP_EFFECT_NAME_TO_PROPS} from "./calculators-constants";
import {effectsOptions} from "./calculators-utils";

type TEffect = {
    // Уровень героя, если он выбран
    level?: number;
    // Ключ выбранного эффекта
    name?: EEffectName;
    // Значение инициативы
    value?: number;
};

type TCalculatorFormValues = {
    // ID существа для которого высчитывается инициатива
    creatureId: string;
    // Список всех выбранных эффектов
    effects: TEffect[]
};

/**
 * Страница с калькулятора инициатив
 */
const Calculators = React.memo(() => {
    const [calculatorValues, setCalculatorValues] = React.useState({ effects: [{}] } as TCalculatorFormValues);

    const { getDictionaryRecordByGameId } = React.useContext(DictionaryContext);

    const handleSubmitCalculate = (values: TCalculatorFormValues) => {
        setCalculatorValues(values);
    }

    /**
     * Получение инициативы существа по его ID
     */
    const getCreatureInitiativeById = (creatureId: string): number => {
        // @ts-ignore
        const record: TCreatureRecord = getDictionaryRecordByGameId(EDictionaryName.Creatures, creatureId);

        return record.parameters.initiative;
    }

    /**
     * Получение конечной инициативы
     */
    const calculateResultInitiative = () => {
        if (!calculatorValues.creatureId) {
            return;
        }

        const creatureInitiative = getCreatureInitiativeById(calculatorValues.creatureId);

        const summaryEffect = calculatorValues.effects.reduce(
            (acc, effect) => {
                if (!effect.name || !effect.value) {
                    return acc;
                }

                if (MAP_EFFECT_NAME_TO_PROPS[effect.name].type === EEffectTypes.Subtraction) {
                    return ({
                        string: acc.string + ` - ${-effect.value}`,
                        result: acc.result + effect.value,
                    })
                }

                return ({
                    string: acc.string + ` * ${effect.value}`,
                    result: acc.result * effect.value,
                })
            },
            {
                result: creatureInitiative,
                string: `${creatureInitiative}`,
            }
        );

        return summaryEffect.string + ` = ${summaryEffect.result}`;
    }

    return (
        <Page>
            <Header as="h1" content={'Калькуляторы инициатив'} />
            <Segment>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Form
                                onSubmit={handleSubmitCalculate}
                                initialValues={calculatorValues}
                                mutators={{
                                    setInitiative: (args: string[], state, tools) => {
                                        tools.changeValue(
                                            state,
                                            'creatureInitiative',
                                            () => getCreatureInitiativeById(args[0]),
                                        )
                                    },
                                    setArrayInitiative: (args: string[], state, tools) => (
                                        fieldName: string
                                    ) => {
                                        // @ts-ignore
                                        const effect = MAP_EFFECT_NAME_TO_PROPS[fieldName];

                                        if (effect.type === EEffectTypes.Simple || effect.type === EEffectTypes.Subtraction) {
                                            tools.changeValue(
                                                state,
                                                `${args[0]}.value`,
                                                // @ts-ignore
                                                () => effect.value,
                                            )
                                        }
                                        if (effect.type === EEffectTypes.ByLevel) {
                                            tools.changeValue(
                                                state,
                                                `${args[0]}.level`,
                                                // @ts-ignore
                                                () => 18,
                                            )
                                            tools.changeValue(
                                                state,
                                                `${args[0]}.value`,
                                                // @ts-ignore
                                                () => effect.formula(18),
                                            )
                                        }
                                    },
                                    setArrayInitiativeByLevel: (args: string[], state, tools) => (
                                        value: number
                                    ) => {
                                        tools.changeValue(
                                            state,
                                            `${args[0]}.value`,
                                            // @ts-ignore
                                            () => MAP_EFFECT_NAME_TO_PROPS[args[1]].formula(value),
                                        )
                                    },
                                    ...arrayMutators,
                                }}
                                render={({handleSubmit, form, values }) => (
                                    <SemanticForm size='large' onSubmit={handleSubmit}>
                                        <Segment>
                                            <Grid>
                                                <Grid.Row>
                                                    <Grid.Column>
                                                        <Header content="Параметры расчета" />
                                                    </Grid.Column>
                                                </Grid.Row>
                                                <Grid.Row>
                                                    <Grid.Column width={8}>
                                                        <FinalFormDictionarySelectField
                                                            dictionary={EDictionaryName.Creatures}
                                                            fluid
                                                            label="Существо"
                                                            name="creatureId"
                                                            onChange={form.mutators.setInitiative}
                                                            search
                                                        />
                                                    </Grid.Column>
                                                    {
                                                        values.creatureId && (
                                                            <Grid.Column width={8}>
                                                                <FinalFormInputTextField
                                                                    label="Инициатива"
                                                                    name="creatureInitiative"
                                                                    readonly
                                                                />
                                                            </Grid.Column>
                                                        )
                                                    }
                                                </Grid.Row>
                                                <FieldArray name="effects">
                                                    {({fields}) => (
                                                        <React.Fragment>
                                                            {
                                                                fields.map((name, index) => {
                                                                    const fieldValue: TEffect = get(values, name);
                                                                    const fieldName = fieldValue.name;
                                                                    // @ts-ignore
                                                                    const effectType = MAP_EFFECT_NAME_TO_PROPS[fieldName]?.type;

                                                                    return (
                                                                        <Grid.Row key={name}>
                                                                            <Grid.Column width={8}>
                                                                                <FinalFormSelectField
                                                                                    fluid
                                                                                    label="Эффект"
                                                                                    name={`${name}.name`}
                                                                                    onChange={form.mutators.setArrayInitiative(name, effectType)}
                                                                                    options={effectsOptions}
                                                                                    search
                                                                                />
                                                                            </Grid.Column>
                                                                            {
                                                                                (
                                                                                    effectType === EEffectTypes.Simple
                                                                                    || effectType === EEffectTypes.Subtraction
                                                                                ) && (
                                                                                    <Grid.Column width={8}>
                                                                                        <FinalFormInputTextField
                                                                                            label="Коэффициент"
                                                                                            name={`${name}.value`}
                                                                                            readonly
                                                                                        />
                                                                                    </Grid.Column>
                                                                                )
                                                                            }
                                                                            {
                                                                                effectType === EEffectTypes.ByLevel && (
                                                                                    <>
                                                                                        <Grid.Column width={4}>
                                                                                            <FinalFormInputTextField
                                                                                                label="Уровень"
                                                                                                name={`${name}.level`}
                                                                                                onChange={form.mutators.setArrayInitiativeByLevel(name, fieldName)}
                                                                                                type="number"
                                                                                            />
                                                                                        </Grid.Column>
                                                                                        <Grid.Column width={4}>
                                                                                            <FinalFormInputTextField
                                                                                                label="Коэффициент"
                                                                                                name={`${name}.value`}
                                                                                                readonly
                                                                                            />
                                                                                        </Grid.Column>
                                                                                    </>
                                                                                )
                                                                            }
                                                                        </Grid.Row>
                                                                    )
                                                                })
                                                            }
                                                            <Grid.Row centered>
                                                                <Grid.Column width={8}>
                                                                    <Button
                                                                        content="Добавить эффект"
                                                                        fluid
                                                                        onClick={() => fields.push({})}
                                                                        size='large'
                                                                        type="button"
                                                                    />
                                                                </Grid.Column>
                                                                <Grid.Column width={8}>
                                                                    <Button
                                                                        content="Удалить эффект"
                                                                        fluid
                                                                        onClick={() => { fields.pop() }}
                                                                        size='large'
                                                                        type="button"
                                                                    />
                                                                </Grid.Column>
                                                            </Grid.Row>
                                                            <Grid.Row centered>
                                                                <Grid.Column width={8}>
                                                                    <Button
                                                                        content="Рассчитать"
                                                                        fluid
                                                                        primary
                                                                        size='large'
                                                                        type="submit"
                                                                    />
                                                                </Grid.Column>
                                                            </Grid.Row>
                                                        </React.Fragment>
                                                    )}
                                                </FieldArray>
                                            </Grid>
                                        </Segment>
                                    </SemanticForm>
                                )}
                            />
                        </Grid.Column>
                        <Grid.Column width={8} textAlign="center">
                            <Segment style={{ alignItems: "center" }}>
                                <Header content="Итог" />
                                {
                                    calculatorValues.creatureId
                                        ? (
                                            <DictionaryArmyCard
                                                centered
                                                count={1}
                                                gameId={calculatorValues.creatureId}
                                            />
                                        )
                                        : <Header content="Ничего не выбрано :(" />
                                }
                                <Header content={calculateResultInitiative()} />
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </Page>
    )
});

export const CalculatorsController = withDictionaries(Calculators);
