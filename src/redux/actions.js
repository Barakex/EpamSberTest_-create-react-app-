import {
    REQUEST_API_DATA,
    RECEIVE_API_DATA,
    TOGGLE_MODAL,
    REQUEST_API_EPISODES,
    RECEIVE_API_EPISODES
 } from './constants';

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
