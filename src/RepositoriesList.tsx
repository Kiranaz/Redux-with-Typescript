import { useState } from "react";
import { useSelector } from "react-redux";
import { useActions } from "./hooks/useActions";

export const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState('');
    const { searchRepositories } = useActions(); //destructuring searchRepositories from useActions 
    const {data, error, loading} = useSelector((state: any) => state.repositories)
    console.log(data);
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event?.preventDefault();
        //         Dispatch(actionCreators.searchRepositories(term));
        searchRepositories(term);
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