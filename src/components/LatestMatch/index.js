// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatches} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatches

  return (
    <div className="latest-match-container">
      <h1 className="latest-match-heading">Latest Matches</h1>
      <div className="latest-match-first-container">
        <div className="latest-match-card-logo-container">
          <div className="latest-match-second-container">
            <p className="competing-team-heading">{competingTeam}</p>
            <p className="date-para">{date}</p>
            <p className="latest-para">{venue}</p>
            <p className="latest-para">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="image"
          />
        </div>
        <div className="latest-match-third-container">
          <p className="latest-para">First Innings</p>
          <p className="latest-para">{firstInnings}</p>
          <p className="latest-para">Second Innings</p>
          <p className="latest-para">{secondInnings}</p>
          <p className="latest-para">Man Of The Match</p>
          <p className="latest-para">{manOfTheMatch}</p>
          <p className="latest-para">Umpires</p>
          <p className="latest-para">{umpires}</p>
        </div>
      </div>
    </div>
  )
}
export default LatestMatch
