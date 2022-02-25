import { useState } from "react"
import { useDispatch } from "react-redux";
import { actionCreators } from "./redux";
export const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState('');
    const Dispatch = useDispatch();

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event?.preventDefault();
        Dispatch(actionCreators.searchRepositories(term))
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={term} onChange={(e) => setTerm(e.target.value)}/>
                <button>Search</button>
            </form>
        </div>
    )
}