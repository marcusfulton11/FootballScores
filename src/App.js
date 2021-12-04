import React, { useState, useEffect } from "react";
import "./App.css";
// import TeamGrid from './Components/Teams/TeamGrid';
import axios from "axios";

const App = () => {
  const [firstLocalLogo, setFirstLocalLogo] = useState("");
  const [firstVisitorLogo, setFirstVisitorLogo] = useState("");
  const [firstFtScoreText, setFirstFtScoreText] = useState("");

  const [secondLocalLogo, setSecondLocalLogo] = useState("");
  const [secondVisitorLogo, setSecondVisitorLogo] = useState("");
  const [secondFtScoreText, setSecondFtScoreText] = useState("");


  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let todaysDate = `${year}-${month}-${day}`;
  console.log(todaysDate);

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
    let firstLocalTeam;
    let firstVisitorTeam;
    let firstFtScore;

    let secondLocalTeam;
    let secondVisitorTeam;
    let secondFtScore;

    let thirdLocalTeam;
    let thirdVisitorTeam;
    let thirdFtScore;

    let fourthLocalTeam;
    let fourthVisitorTeam;
    let fourthFtScore;

    let fithLocalTeam;
    let fithVisitorTeam;
    let firthFtScore;

    const fetchItems = async () => {
      const result = await axios.get(
      //   `https://soccer.sportmonks.com/api/v2.0/fixtures/date/${todaysDate}?api_token=nryB1n8jVKa1xg9vetU8MClVhe6RvDpix7skQuz5ufDIcShRnIEeLpnfErWb`
      // ); // this line brings in the data from todays date with the 'todaysDate' function above
      `https://soccer.sportmonks.com/api/v2.0/fixtures/date/2021-10-30?api_token=nryB1n8jVKa1xg9vetU8MClVhe6RvDpix7skQuz5ufDIcShRnIEeLpnfErWb`
      ); // test for previous date with all scores settled

      firstLocalTeam = result.data.data[0].localteam_id; 
      const localTeamInfo = await axios.get(
        `https://soccer.sportmonks.com/api/v2.0/teams/${firstLocalTeam}?api_token=nryB1n8jVKa1xg9vetU8MClVhe6RvDpix7skQuz5ufDIcShRnIEeLpnfErWb`
      );
      console.log(localTeamInfo);
      setFirstLocalLogo(localTeamInfo.data.data.logo_path);

      firstVisitorTeam = result.data.data[0].visitorteam_id;
      const visitorTeamInfo = await axios.get(
        `https://soccer.sportmonks.com/api/v2.0/teams/${firstVisitorTeam}?api_token=nryB1n8jVKa1xg9vetU8MClVhe6RvDpix7skQuz5ufDIcShRnIEeLpnfErWb`
      );
      console.log(visitorTeamInfo);
      setFirstVisitorLogo(visitorTeamInfo.data.data.logo_path);

      firstFtScore = result.data.data[0].scores.ft_score;
      setFirstFtScoreText(firstFtScore); // the last few lines of code brings in the first game of todays badges and final score

      
      
      
      
      
      secondLocalTeam = result.data.data[1].localteam_id; 
      const secondLocalTeamInfo = await axios.get(
        `https://soccer.sportmonks.com/api/v2.0/teams/${secondLocalTeam}?api_token=nryB1n8jVKa1xg9vetU8MClVhe6RvDpix7skQuz5ufDIcShRnIEeLpnfErWb`
      );
      console.log(secondLocalTeamInfo);
      setSecondLocalLogo(secondLocalTeamInfo.data.data.logo_path);

      secondVisitorTeam = result.data.data[1].visitorteam_id;
      const secondVisitorTeamInfo = await axios.get(
        `https://soccer.sportmonks.com/api/v2.0/teams/${secondVisitorTeam}?api_token=nryB1n8jVKa1xg9vetU8MClVhe6RvDpix7skQuz5ufDIcShRnIEeLpnfErWb`
      );
      console.log(secondVisitorTeamInfo);
      setSecondVisitorLogo(secondVisitorTeamInfo.data.data.logo_path);

      secondFtScore = result.data.data[1].scores.ft_score;
      setSecondFtScoreText(secondFtScore);


    };

    fetchItems();

    // localTeam=response.data.data[0].localteam_id
    // axios.get(`https://soccer.sportmonks.com/api/v2.0/teams/${localTeam}?api_token=nryB1n8jVKa1xg9vetU8MClVhe6RvDpix7skQuz5ufDIcShRnIEeLpnfErWb`)
    //   .then(response => response.text())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));
  }, []);

  return (
    <div className='App'>
      <header className='container'>Todays Scores</header>
      <div className='scores1'>
      <img src={firstLocalLogo} alt='local logo' />
        <p>{firstFtScoreText}</p>
        <img src={firstVisitorLogo} alt='visitor logo' />
      </div>
      <div className='scores2'>
        <img src={secondLocalLogo} alt='local logo' />
        <p>{secondFtScoreText}</p>
        <img src={secondVisitorLogo} alt='visitor logo' />
        </div>
    </div>
  );
};

export default App;
