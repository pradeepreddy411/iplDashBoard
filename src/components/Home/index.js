// Write your code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

const apiUrl = 'https://apis.ccbp.in/ipl'

class Home extends Component {
  state = {iplTeamData: [], isLoaded: true}

  componentDidMount() {
    this.getIplTeam()
  }

  getIplTeam = async () => {
    const response = await fetch(apiUrl)
    const fetchedData = await response.json()
    const updatedData = fetchedData.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({iplTeamData: updatedData, isLoaded: false})
  }

  renderIplTeams = () => {
    const {iplTeamData} = this.state

    return (
      <ul className="ipl-team-card">
        {console.log(iplTeamData)}
        {iplTeamData.map(eachTeam => (
          <TeamCard key={eachTeam.id} teamName={eachTeam} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoaded} = this.state

    return (
      <div className="home-container">
        <div className="ipl-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo-image"
          />
          <h1 className="ipl-heading">IPL DashBoard</h1>
        </div>
        {isLoaded ? (
          <div className="loader-container ">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderIplTeams()
        )}
      </div>
    )
  }
}
export default Home
