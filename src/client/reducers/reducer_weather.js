import _ from 'lodash'
import { FETCH_WEATHER } from "../actions";

const INITIAL_STATE = []

export default function (state = INITIAL_STATE, action) {
    if (action.type == FETCH_WEATHER) {
        const result = _.chain(action.payload.data)
            .uniqBy('payload')
            .sortBy('date')
            .reverse()
            .slice(0, 7)
            .value()
        return result
    } else {
        return state
    }
}