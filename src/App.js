import React, {useState, useEffect} from "react";
import "./App.css";
// import TeamGrid from './Components/Teams/TeamGrid';
import DatePicker from './Components/DatePicker';
import axios from "axios";

const App = () => {


    const today = new Date()

    const formattedDate = () => {
      return today.getFullYear() + "-" + (today.getMonth()+1) + "-" + today.getDate()
    }

    const [firstLocalLogo, setFirstLocalLogo] = useState("");
    const [firstVisitorLogo, setFirstVisitorLogo] = useState("");
    const [firstFtScoreText, setFirstFtScoreText] = useState("");

    const [secondLocalLogo, setSecondLocalLogo] = useState("");
    const [secondVisitorLogo, setSecondVisitorLogo] = useState("");
    const [secondFtScoreText, setSecondFtScoreText] = useState("");

    const [thirdLocalLogo, setThirdLocalLogo] = useState("");
    const [thirdVisitorLogo, setThirdVisitorLogo] = useState("");
    const [thirdFtScoreText, setThirdFtScoreText] = useState("");

    const [fourthLocalLogo, setFourthLocalLogo] = useState("");
    const [fourthVisitorLogo, setFourthVisitorLogo] = useState("");
    const [fourthFtScoreText, setFourthFtScoreText] = useState("");

    const [fithLocalLogo, setFithLocalLogo] = useState("");
    const [fithVisitorLogo, setFithVisitorLogo] = useState("");
    const [fithFtScoreText, setFithFtScoreText] = useState("");

    const [sixthLocalLogo, setSixthLocalLogo] = useState("");
    const [sixthVisitorLogo, setSixthVisitorLogo] = useState("");
    const [sixthFtScoreText, setSixthFtScoreText] = useState("");

    const [date, setDate] = useState(formattedDate)
 

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
  let fithFtScore;

  let sixthLocalTeam;
  
  let sixthVisitorTeam;
  let sixthFtScore;

const withoutData = 'No result'

let result = []

  const fetchItems = async () => {
       result = await axios.get(
     `https://soccer.sportmonks.com/api/v2.0/fixtures/date/${date}?api_token=nryB1n8jVKa1xg9vetU8MClVhe6RvDpix7skQuz5ufDIcShRnIEeLpnfErWb`
          // ); // this line brings in the data from todays date with the 'todaysDate' function above
            //  `https://soccer.sportmonks.com/api/v2.0/fixtures/date/2021-10-27?api_token=nryB1n8jVKa1xg9vetU8MClVhe6RvDpix7skQuz5ufDIcShRnIEeLpnfErWb`
      ); // test for previous date with all scores settled
  
      if (result.data.data.length <= 0) {
        return [withoutData]
      }
      firstLocalTeam = result.data.data[0].localteam_id;
      const localTeamInfo = await axios.get(`https://soccer.sportmonks.com/api/v2.0/teams/${firstLocalTeam}?api_token=nryB1n8jVKa1xg9vetU8MClVhe6RvDpix7skQuz5ufDIcShRnIEeLpnfErWb`);
      console.log(localTeamInfo);
      setFirstLocalLogo(localTeamInfo.data.data.logo_path);
      
      firstVisitorTeam = result.data.data[0].visitorteam_id;
      const visitorTeamInfo = await axios.get(`https://soccer.sportmonks.com/api/v2.0/teams/${firstVisitorTeam}?api_token=nryB1n8jVKa1xg9vetU8MClVhe6RvDpix7skQuz5ufDIcShRnIEeLpnfErWb`);
      console.log(visitorTeamInfo);
      setFirstVisitorLogo(visitorTeamInfo.data.data.logo_path);

      firstFtScore = result.data.data[0].scores.ft_score;
      setFirstFtScoreText(firstFtScore); // the last few lines of code brings in the first game of todays badges and final score



      if (result.data.data[1] !== undefined) {

      secondLocalTeam = result.data.data[1].localteam_id; 
      const secondLocalTeamInfo = await axios.get(`https://soccer.sportmonks.com/api/v2.0/teams/${secondLocalTeam}?api_token=nryB1n8jVKa1xg9vetU8MClVhe6RvDpix7skQuz5ufDIcShRnIEeLpnfErWb`);
      console.log(secondLocalTeamInfo);
      setSecondLocalLogo(secondLocalTeamInfo.data.data.logo_path);

      secondVisitorTeam = result.data.data[1].visitorteam_id;
      const secondVisitorTeamInfo = await axios.get(`https://soccer.sportmonks.com/api/v2.0/teams/${secondVisitorTeam}?api_token=nryB1n8jVKa1xg9vetU8MClVhe6RvDpix7skQuz5ufDIcShRnIEeLpnfErWb`);
      console.log(secondVisitorTeamInfo);
      setSecondVisitorLogo(secondVisitorTeamInfo.data.data.logo_path);

      secondFtScore = result.data.data[1].scores.ft_score;
      setSecondFtScoreText(secondFtScore);
      }
      
     
    
      if (result.data.data[2] !== undefined) {

      thirdLocalTeam = result.data.data[2].localteam_id;
      const thirdLocalTeamInfo = await axios.get(`https://soccer.sportmonks.com/api/v2.0/teams/${thirdLocalTeam}?api_token=nryB1n8jVKa1xg9vetU8MClVhe6RvDpix7skQuz5ufDIcShRnIEeLpnfErWb`);
      console.log(thirdLocalTeamInfo);
      setThirdLocalLogo(thirdLocalTeamInfo.data.data.logo_path);

      thirdVisitorTeam = result.data.data[2].visitorteam_id;
      const thirdVisitorTeamInfo = await axios.get(`https://soccer.sportmonks.com/api/v2.0/teams/${thirdVisitorTeam}?api_token=nryB1n8jVKa1xg9vetU8MClVhe6RvDpix7skQuz5ufDIcShRnIEeLpnfErWb`);
      console.log(thirdVisitorTeamInfo);
      setThirdVisitorLogo(thirdVisitorTeamInfo.data.data.logo_path);

      thirdFtScore = result.data.data[2].scores.ft_score;
      setThirdFtScoreText(thirdFtScore);
      }

     
     
      if (result.data.data[3] !== undefined) {
      fourthLocalTeam = result.data.data[3].localteam_id;
      const fourthLocalTeamInfo = await axios.get(`https://soccer.sportmonks.com/api/v2.0/teams/${fourthLocalTeam}?api_token=nryB1n8jVKa1xg9vetU8MClVhe6RvDpix7skQuz5ufDIcShRnIEeLpnfErWb`);
      console.log(fourthLocalTeamInfo);
      setFourthLocalLogo(fourthLocalTeamInfo.data.data.logo_path);

      fourthVisitorTeam = result.data.data[3].visitorteam_id;
      const fourthVisitorTeamInfo = await axios.get(`https://soccer.sportmonks.com/api/v2.0/teams/${fourthVisitorTeam}?api_token=nryB1n8jVKa1xg9vetU8MClVhe6RvDpix7skQuz5ufDIcShRnIEeLpnfErWb`);
      console.log(fourthVisitorTeamInfo);
      setFourthVisitorLogo(fourthVisitorTeamInfo.data.data.logo_path);

      fourthFtScore = result.data.data[3].scores.ft_score;
      setFourthFtScoreText(fourthFtScore);
      }

     
     
      if (result.data.data[4] !== undefined) {
      fithLocalTeam = result.data.data[4].localteam_id;
      const fithLocalTeamInfo = await axios.get(`https://soccer.sportmonks.com/api/v2.0/teams/${fithLocalTeam}?api_token=nryB1n8jVKa1xg9vetU8MClVhe6RvDpix7skQuz5ufDIcShRnIEeLpnfErWb`);
      console.log(fithLocalTeamInfo);
      setFithLocalLogo(fithLocalTeamInfo.data.data.logo_path);

      fithVisitorTeam = result.data.data[4].visitorteam_id;
      const fithVisitorTeamInfo = await axios.get(`https://soccer.sportmonks.com/api/v2.0/teams/${fithVisitorTeam}?api_token=nryB1n8jVKa1xg9vetU8MClVhe6RvDpix7skQuz5ufDIcShRnIEeLpnfErWb`);
      console.log(fithVisitorTeamInfo);
      setFithVisitorLogo(fithVisitorTeamInfo.data.data.logo_path);

      fithFtScore = result.data.data[4].scores.ft_score;
      setFithFtScoreText(fithFtScore);
      }

     
     
      if (result.data.data[5] !== undefined) {
      sixthLocalTeam = result.data.data[5].localteam_id;
      const sixthLocalTeamInfo = await axios.get(`https://soccer.sportmonks.com/api/v2.0/teams/${sixthLocalTeam}?api_token=nryB1n8jVKa1xg9vetU8MClVhe6RvDpix7skQuz5ufDIcShRnIEeLpnfErWb`);
      console.log(sixthLocalTeamInfo);
      setSixthLocalLogo(sixthLocalTeamInfo.data.data.logo_path);

      sixthVisitorTeam = result.data.data[5].visitorteam_id;
      const sixthVisitorTeamInfo = await axios.get(`https://soccer.sportmonks.com/api/v2.0/teams/${sixthVisitorTeam}?api_token=nryB1n8jVKa1xg9vetU8MClVhe6RvDpix7skQuz5ufDIcShRnIEeLpnfErWb`);
      console.log(sixthVisitorTeamInfo);
      setSixthVisitorLogo(sixthVisitorTeamInfo.data.data.logo_path);

      sixthFtScore = result.data.data[5].scores.ft_score;
      setSixthFtScoreText(sixthFtScore);
      }

    };

    useEffect(() => {

        fetchItems()
      
    }, [date]);

    
console.log(date)
    return (
        <div className='App'>
            <header className='container'>Todays Scores</header>
            <DatePicker
             date={date}
             setDate={setDate}
            />
            
              <div>
            <div className='scores1'>
              {firstLocalLogo !== ""? (
                <img src={firstLocalLogo}
                    alt='local logo'/>
                ): null}
              {firstFtScoreText !== ""? (
                <p>{firstFtScoreText}</p>
              ): null}
              {firstVisitorLogo !== ""? (
                <img src={firstVisitorLogo}
                    alt='visitor logo'/>
                    ): null}
            </div>
            <div className='scores2'>
              {secondLocalLogo !== ""? (
                <img src={secondLocalLogo}
                    alt='local logo'/>
                ): null}
              {secondFtScoreText !== ""? (
                <p>{secondFtScoreText}</p>
              ): null}
              {secondVisitorLogo !== ""? (
                <img src={secondVisitorLogo}
                    alt='visitor logo'/>
                    ): null}
            </div>
            <div className='scores3'>
            {thirdLocalLogo !== ""? (
                <img src={thirdLocalLogo}
                    alt='local logo'/>
                ): null}
              {thirdFtScoreText !== ""? (
                <p>{thirdFtScoreText}</p>
              ): null}
              {thirdVisitorLogo !== ""? (
                <img src={thirdVisitorLogo}
                    alt='visitor logo'/>
                    ): null}
            </div>
            <div className='scores4'>
            {fourthLocalLogo !== ""? (
                <img src={fourthLocalLogo}
                    alt='local logo'/>
                ): null}
              {fourthFtScoreText !== ""? (
                <p>{fourthFtScoreText}</p>
              ): null}
              {fourthVisitorLogo !== ""? (
                <img src={fourthVisitorLogo}
                    alt='visitor logo'/>
                    ): null}
            </div>
            <div className='scores5'>
            {fithLocalLogo !== ""? (
                <img src={fithLocalLogo}
                    alt='local logo'/>
                ): null}
              {fithFtScoreText !== ""? (
                <p>{fithFtScoreText}</p>
              ): null}
              {fithVisitorLogo !== ""? (
                <img src={fithVisitorLogo}
                    alt='visitor logo'/>
                    ): null}
            </div>
            <div className='scores6'>
            {sixthLocalLogo !== ""? (
                <img src={sixthLocalLogo}
                    alt='local logo'/>
                ): null}
              {sixthFtScoreText !== ""? (
                <p>{sixthFtScoreText}</p>
              ): null}
              {sixthVisitorLogo !== ""? (
                <img src={sixthVisitorLogo}
                    alt='visitor logo'/>
                    ): null}
            </div>
            </div>
             </div>
    );
};

export default App;
