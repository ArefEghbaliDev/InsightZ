import { generateRandomNumber } from "./generate-random-number";
import dayjs from 'dayjs';

export type GenerateData = {
    type: 'number' | 'string' | 'date' | 'timestamp';
    label: string;
}

type Data = {
    [key: string]: any;
}

export function generateData(count: number = 100,dataFormat: GenerateData[],sort?: boolean,sortBy?: string) {
    const generatedData: Data[] = [];
    for (let i = 0; i < count; i++) {
        let formattedData: Data = {};
        for (const f of dataFormat) {
            let value;
            if (f.type === 'string') {
                value = "aref";
            }
            else if (f.type === 'number') {
                value = generateRandomNumber(10,1000);
            }
            else if (f.type === 'date') {
                value = dayjs().add(1,'day').valueOf();
                console.log('value',value);
            }
            else {
                const date = new Date();
                value = date.setDate(date.getDate() + 1);
            }

            formattedData[f.label] = value;
        }
        generatedData.push(formattedData);
        formattedData = {};
    }

    if (Boolean(sort) && sortBy) {
        return generatedData.sort(function (x,y) {
            if (x[sortBy] < y[sortBy]) return -1;

            if (x[sortBy] > y[sortBy]) return 1;

            return 0;
        })
    }

    return generatedData;
}