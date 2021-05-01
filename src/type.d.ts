// This file contains all custom types for this app

// interfaces / types below are mimicking response format from TFNSW `trip planner`.
// However only some properties are included, based on the need of this app.

export interface IStop {
    id: string
    name: string
}
export interface ILocation {
    name: string
    id: string
    assignedStops: IStop[]
}
export interface ITransportation {
    disassembledName: string
    description: string
}
export interface IStopEvent {
    transportation: ITransportation
    departureTimeEstimated: string
}
/**
 * Generic response format from trip planner
 */
export interface IResponse {
    version: string
    locations: ILocation[]
}
/**
 * Interface for response of departure list (`departure_mon`)
 */
export interface IDepartureMonResponse extends IResponse {
    stopEvents: IStopEvent[]
}

export default {
    ITransportation,
    IStopEvent,
    IResponse,
    IDepartureMonResponse
}
