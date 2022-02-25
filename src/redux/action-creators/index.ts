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
            console.log('cominginside1', names,!!names)
            if (!!names && names.length === 0) {
                throw new Error( (data && data.message) || data.status || 'No data found')
            }
        } catch (error) {
            if (error instanceof Error) {
                console.log('cominginside2')
                console.log(error, 'error')
                dispatch({
                    type: ActionTypes.SEARCH_REPO_ERROR,
                    payload: error.message //"useUnknownInCatchVariables": false, in tsconfig.json
                })
            }
        }
    }
}