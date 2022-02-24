import { ActionTypes } from '../action-types/index';
import { Action } from '../actions/index';

interface RepositoriesState {
    loading: boolean,
    error: string | null,
    data: string[]
}

const initialState = {
    loading: false,
    error: null,
    data: [],
}

const repositoryReducer = (state: RepositoriesState =  initialState, action: Action): RepositoriesState => {
    switch (action.type) {
        case ActionTypes.SEARCH_REPO:
            return { loading: true, error: null, data: [] }
        case ActionTypes.SEARCH_REPO_SUCCESS:
            return { loading: false, error: null, data: action.payload }
        case ActionTypes.SEARCH_REPO_ERROR:
            return { loading: false, error: action.payload, data: [] }
        default:
            return state;
    }
}

export default repositoryReducer;