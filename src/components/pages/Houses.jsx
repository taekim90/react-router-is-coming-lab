import { Link } from "react-router-dom"

function Houses({ data }) {
    console.log(data)
    const allHouses = data.map((house, index) => {
        return (
            <li key={`housekey-${index}`}>
                <Link to ={`/houses/${house.id}`}>{house.name}</Link>
            </li>
        )
    })

    return (
        <div>
            <div className="header">
                <h2>Game of Thrones Houses</h2>
            </div>
            <ul className="list">
                {allHouses}
            </ul>
        </div>
    )
}

export default Houses;