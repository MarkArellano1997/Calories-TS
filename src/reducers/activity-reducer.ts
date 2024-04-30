import { Activity } from "../types"


export type ActivityActions =
    { type: 'save-activity', payload: { newctivity: Activity } } |
    { type: 'set-activeId', payload: { id: Activity['id'] } }

type ActivityState = {
    activities: Activity[],
    activeId: Activity['id']
}

export const initialState: ActivityState = {
    activities: [],
    activeId: ''
}

export const activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions
) => {
    if (action.type === 'save-activity') {
        return {
            ...state,
            activities: [...state.activities, action.payload.newctivity]
        }
    }

    if (action.type === 'set-activeId') {
        return{
            ...state,
            activeId: action.payload.id
        }
    }
    return state
}