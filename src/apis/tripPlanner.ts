// This file contains API calls to trip planner API (proxied on other server)
import axios, { AxiosResponse } from "axios";
import { IDepartureMonResponse } from "../type";

// Proxy server 's trip planner URL
const baseUrl: string = "https://pond-emerald-ocarina.glitch.me/trip-planner";

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
    getDepartureList
}
export default m;
