// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamName} = props
  const {id, name, teamImageUrl} = teamName

  return (
    <li className="team-card-container">
      <Link to={`/team-matches/${id}`} className="link">
        <img src={teamImageUrl} alt={name} className="team-image" />
        <h1 className="team-name-heading">{name}</h1>
      </Link>
    </li>
  )
}
export default TeamCard
