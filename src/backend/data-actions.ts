'use server';

import { neon } from "@neondatabase/serverless";
import { inform } from "@/types/type-definition";

const sql = neon(`${process.env.DATABASE_URL}`);

export async function getData(category: string): Promise<inform[] | undefined> {
    try {
        const data = await sql`SELECT * FROM informdata WHERE informdata.group=${category}`;
        // category에 해당하는 모든 데이터를 가져옴
        
        return data as inform[];
    } catch (error) {
        console.error(`Failed to fetch data: ${error}`);
        throw new Error("Failed to fetch data.");
    }
}

export async function searchData(name: string): Promise<inform[] | undefined> {
    try {
        const data = await sql`SELECT * FROM informdata WHERE informdata.name ~ (${name})`;
        // 해당 단어를 포함하고 있는 모든 데이터를 가져옴

        return data as inform[];
    } catch (error) {
        console.error(`Failed to fetch data: ${error}`);
        throw new Error("Failed to fetch data.");
    }
}