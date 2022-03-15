import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function House({ data }) {
    const { id } = useParams()
    console.log(id)

    const house = data.find(house => house.id.toString() === id)
    console.log(house)

    const member = house.people.map((member, index) => {
        return (
            <li key={`personkey-${index}`}>
                <Link to={`/houses/${id}/members/${member.id}`}>{member.name}</Link>
            </li>
        )
    })

    return (
        <div className="page">
            <div className="header">
                <h2>Members of a GoT House</h2>
            </div>
            <ul className="list">
                {member}
            </ul>
        </div>
    )
}

export default House;