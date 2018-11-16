import _ from 'lodash'
import { FETCH_ALERTS } from "../actions";

const INITIAL_STATE = []

export default function (state = INITIAL_STATE, action) {
    if (action.type == FETCH_ALERTS) {
        const result = _.chain(action.payload.data)
            .uniqBy('payload')
            .sortBy('date')
            .reverse()
            .slice(0, 5)
            .value()

            console.log(result)
        return result
    } else {
        return state
    }
}