import { airportsData } from "./airportsData";

export interface AirportModel {
    icao: string;
    iata: string | null;
    name: string;
    city: string;
    state: string;
    country: string;
    elevation: number;
    lat: number;
    lon: number;
    tz: string;
}

export const mapAirportData = new Map(Object.entries(airportsData).filter(([icao, value]) => value.iata !== "").map(([icao, value]) => [value.iata, value]));

export const objAirportDate: { [icao: string]: AirportModel} = airportsData;