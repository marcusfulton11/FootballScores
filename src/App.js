import React, { useState, useEffect } from 'react';
import './App.css';
// import TeamGrid from './Components/Teams/TeamGrid';
import axios from 'axios';

const App = () => {

  const [localLogo, setLocalLogo] = useState("")
  const [visitorLogo, setVisitorLogo] = useState("")
  const [ftScoreText, setFtScoreText] = useState("")
  // const [query, setQuery] = useState('')



  // const today = new Date().toISOString();
  // let yesterday = new Date(today)
  // yesterday.setDate(yesterday.getDate() - 1)
  // if(yesterday.length > 10) yesterday = yesterday.slice(0,10);
  
  // console.log(yesterday)

  // const today = new Date()
  // const yesterday = new Date(today)
  
  // yesterday.setDate(yesterday.getDate() - 1)




  useEffect(() => {
    // const fetchItems = async () => {
    //   const result = await axios(
    //     `https://soccer.sportmonks.com/api/v2.0/fixtures/date/2020-08-02?api_token=nryB1n8jVKa1xg9vetU8MClVhe6RvDpix7skQuz5ufDIcShRnIEeLpnfErWb`
    //     )

    //   console.log(result.data)
    //   setTeams(result.data)
    //   setIsLoading(false)
    // }

    // fetchItems()
    let localTeam
    let visitorTeam
    let ftScore
    
    const fetchItems = async () => {
      const result = await axios.get(`https://soccer.sportmonks.com/api/v2.0/fixtures/date/2021-11-07?api_token=nryB1n8jVKa1xg9vetU8MClVhe6RvDpix7skQuz5ufDIcShRnIEeLpnfErWb`)
      localTeam = result.data.data[0].localteam_id
     const localTeamInfo = await axios.get(`https://soccer.sportmonks.com/api/v2.0/teams/${localTeam}?api_token=nryB1n8jVKa1xg9vetU8MClVhe6RvDpix7skQuz5ufDIcShRnIEeLpnfErWb`)
     console.log(localTeamInfo)
     setLocalLogo(localTeamInfo.data.data.logo_path)

     visitorTeam = result.data.data[0].visitorteam_id
     const visitorTeamInfo = await axios.get(`https://soccer.sportmonks.com/api/v2.0/teams/${visitorTeam}?api_token=nryB1n8jVKa1xg9vetU8MClVhe6RvDpix7skQuz5ufDIcShRnIEeLpnfErWb`)
     console.log(visitorTeamInfo)
     setVisitorLogo(visitorTeamInfo.data.data.logo_path)

     ftScore = result.data.data[0].scores.ft_score
     setFtScoreText(ftScore)
     
    }

      fetchItems()

      // localTeam=response.data.data[0].localteam_id
      // axios.get(`https://soccer.sportmonks.com/api/v2.0/teams/${localTeam}?api_token=nryB1n8jVKa1xg9vetU8MClVhe6RvDpix7skQuz5ufDIcShRnIEeLpnfErWb`)
      //   .then(response => response.text())
      //   .then(result => console.log(result))
      //   .catch(error => console.log('error', error));
  }, [])


  return (
    <div className="App">
      <header className="container">
        <img src={localLogo} alt="local logo" />
        <p>{ftScoreText}</p>
        <img src={visitorLogo} alt="visitor logo" />
        
      </header>
    </div>
  );
}

export default App;
