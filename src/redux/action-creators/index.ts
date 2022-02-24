import axios from "axios";
import { Action } from "../actions";
import { ActionTypes } from "../action-types";
import { Dispatch } from "redux";

export const searchRepositories = (term: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.SEARCH_REPO
        })
        try {
            const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', {
                params: {
                   text: term,
               }
            })
            
            const names = data.objects.map((result: any) => {
                return result.package.name;
            })

            dispatch({
                type: ActionTypes.SEARCH_REPO_SUCCESS,
                payload: names
            })
        } catch (err: any) {
            dispatch({
                type: ActionTypes.SEARCH_REPO_ERROR,
                payload: err.message
            })
        }
    }
}