interface RepositoriesState {
    loading: boolean,
    error: string | null,
    data: string[]
}

interface SearchRepoAction{
    type: ActionTypes.SEARCH_REPO,
}

interface SearchRepoSuccessAction{
    type: ActionTypes.SEARCH_REPO_SUCCESS,
    payload: string[]
}

interface SearchRepoErrorAction{
    type: ActionTypes.SEARCH_REPO_ERROR,
    payload: string
}

type Action = SearchRepoAction | SearchRepoSuccessAction | SearchRepoErrorAction;

enum ActionTypes {
    SEARCH_REPO = 'search_repo',
    SEARCH_REPO_SUCCESS = 'search_repo_success',
    SEARCH_REPO_ERROR = 'search_repo_error'
}

const reducer = (state: RepositoriesState, action: Action): RepositoriesState => {
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

export default reducer;