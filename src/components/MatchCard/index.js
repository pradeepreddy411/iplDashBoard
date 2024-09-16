// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentMatch} = props
  const {matchStatus, competingTeamLogo, result, competingTeam} = recentMatch

  const getMatchStatus = status => (status === 'Won' ? 'won' : 'lost')

  return (
    <li className="match-card-container">
      <img src={competingTeamLogo} alt={competingTeam} className="match-logo" />
      <h1 className="match-heading">{competingTeam}</h1>
      <p className="match-description">{result}</p>
      <p className={getMatchStatus(matchStatus)}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
