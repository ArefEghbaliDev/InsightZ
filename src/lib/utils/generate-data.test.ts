import { expect,test } from 'vitest';
import { generateData,type GenerateData } from './generate-data';

test("Should generate 100 rows",() => {
    const dataFormat: GenerateData[] = [
        { label: 'timestamp',type: 'timestamp' },
        { label: 'value',type: 'number' },
    ]
    const data = generateData(100,dataFormat)

    console.log(data);

    expect(data).toHaveLength(100);
})