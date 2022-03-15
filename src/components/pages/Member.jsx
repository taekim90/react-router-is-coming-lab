import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Member({ data }) {
    const {houseId, memberId} = useParams()
    console.log(houseId, memberId)

    const house = data.find(house => house.id.toString() === houseId)
    console.log(house)
    const member = house.people.find((member) => member.id.toString() === memberId)
    console.log(member)

    return (
        <div className="page">
            <div className="header">
                <h2>{member.name}</h2>
            </div>
            <div className="desc">
                {member.description}
            </div>
        </div>
    )
}

export default Member;