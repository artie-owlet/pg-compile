import { type Statement, parse } from 'pgsql-ast-parser';

type CreateType<T extends string> = T extends `create ${infer _}` ? T : never;
type StatementType = CreateType<Statement['type']>;

interface Entity {
    type: StatementType;
    name: string;
}

interface Part {
    sql: string;
    provides: Entity[];
    requires: Entity[];
}

function inputToPart(sql: string): Part {
}

export function compile(inputs: string[]): string {
    const parts = inputs.map((input) => {
    });
    return inputs.join(); // stub
}
