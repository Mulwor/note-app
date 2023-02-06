import { useParams } from "react-router-dom"

export const SinglePage = () => {
    const {id} = useParams();

    return (
        <div>{id}</div>
    )
}