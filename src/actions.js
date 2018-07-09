export const REQUEST_API_DATA = "REQUEST_API_DATA";
export const RECEIVE_API_DATA = "RECEIVE_API_DATA";

export const TOGGLE_MODAL = "OPEN_MODAL";

export const REQUEST_API_EPISODES = "REQUEST_API_EPISODES";
export const RECEIVE_API_EPISODES = "RECEIVE_API_EPISODES";

export function requestApiData(data) {
    return {
        type: REQUEST_API_DATA,
        data,
    }
}

export function receiveApiData(data) {
    return {
        type: RECEIVE_API_DATA,
        data,
    }
}

export function toggleModalWindow(data) {
    return {
        type: TOGGLE_MODAL,
        data,
    }
}

export function requestApiEpisodes(data) {
    return {
        type: REQUEST_API_EPISODES,
        data,
    }
}

export function receiveApiEpisodes(data) {
    return {
        type: RECEIVE_API_EPISODES,
        data,
    }
}
