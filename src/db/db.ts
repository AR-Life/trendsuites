import {  readFileSync } from "fs";
import type { TableName } from "./enums/tableName";
import path from "path";
export async function getTable<T>(hotel: string, table: TableName) {
    const __dirname = `${path.resolve()}/src/db`;
    return JSON.parse(readFileSync(`${__dirname}/${hotel}/${table}.json`) as unknown as string) as unknown as T;
}