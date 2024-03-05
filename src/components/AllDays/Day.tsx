import React, { useMemo } from 'react'
import { BottomPart, DayWrapper, TopPart } from './style'
import { IDay } from '../../utils/useWeatherForecast'
import WeatherIcon from '../WeatherIcon'

interface DayProps {
    day: IDay;
}

const Day: React.FC<DayProps> = ({ day }) => {
    const { date, forecast } = day;

    const temp = Math.max(...forecast.map((x) => Math.round(x.main.temp)));
    const lowestTemp = Math.min(...forecast.map((x) => Math.round(x.main.temp)));

    const weekDays = new Date(date);
    const dayOfWeek = weekDays.toDateString().substring(0, 3);
    const dates = date.split("-").join(".").substring(5);

    const dayConditions = useMemo(() => {
        const conditions: Record<
            string,
            {
                [x: string]: any;
            }
        > = {};

        forecast?.forEach?.((f) => {
            const forecastCondition = f.weather[0].icon;
            // console.log(forecastCondition, 'forecastCondition');
            let condition = conditions[forecastCondition];
            // console.log(condition, 'condition');

            if (!condition) {
                condition = { condition: forecastCondition, forecast: [] };
                conditions[forecastCondition] = condition;
            }

            condition.forecast.push(f);
        });
        // console.log(Object.values(conditions), 'Object.values(conditions)');

        return Object.values(conditions);
    }, [forecast]);

    const dominantCondition = useMemo(
        () =>
            Object.values(dayConditions).sort(
                (cond1, cond2) => cond2.forecast.length - cond1.forecast.length
            )?.[0]?.condition,
        [dayConditions]
    );
    // console.log(dominantCondition, 'dominantCondition');

    return (
        <DayWrapper>
            <TopPart>
                <div>
                    <h2>{dayOfWeek}</h2>
                    <h3>{dates}</h3>
                </div>
                <WeatherIcon icon={dominantCondition} />
            </TopPart>
            <BottomPart>
                <h2>{temp}°</h2>
                <h3>{lowestTemp}°</h3>
            </BottomPart>
        </DayWrapper>
    );
};

export default Day;
