import axios from "axios";
import { GET_EVENTS, GET_EVENT } from "./types";

export function addEvent(eventData) {
  return dispatch => {
    return axios.post("/api/events", eventData);
  };
}

export const getEvents = () => async dispatch => {
  const request = await axios.get("/api/events");
  dispatch({ type: GET_EVENTS, payload: request.data });
};

export const getEvent = id => async dispatch => {
  const request = await axios.get(`/api/events/id?id=${id}`);
  dispatch({ type: GET_EVENT, payload: request.data });
};

export function updateEvent(eventData, id) {
  return dispatch => {
    return axios.post(`/api/events/update?id=${id}`, eventData);
  };
}
