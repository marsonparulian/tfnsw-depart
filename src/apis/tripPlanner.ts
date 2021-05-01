// This file contains API calls to trip planner API (proxied on other server)
import axios, { AxiosResponse } from "axios";
import { IDepartureMonResponse, IResponse } from "../type";

// Proxy server 's trip planner URL
const baseUrl: string = "https://pond-emerald-ocarina.glitch.me/trip-planner";

/**
 * API call to fetch list of stop
 */
const getStopList = async (query: string): Promise<AxiosResponse<IResponse>> => {
    try {
        const url: string = `${baseUrl}/stop_finder?name_sf=${query}`;
        // Wait for the response
        return await axios.get(url);
    } catch (e) {
        throw new Error(e);
    }
}
/**
 * make API call to get next of departures
 */
export const getDepartureList = async (): Promise<AxiosResponse<IDepartureMonResponse>> => {
    try {
        // Proxy server for TFNSW `trip planner`
        const url: string = `${baseUrl}/departure_mon?name_dm=256510`;

        return axios.get(url);
    } catch (e) {
        throw new Error(e);
    }
}

const m = {
    getStopList,
    getDepartureList
}
export default m;
