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


    

    // const [firstGame, setFirstGame] = useState({
    //   firstLocalLogo: "",
    //   firstVisitorLogo: "",
    //   firstFtScoreText: ""
    // });


    const [localLogo, setLocalLogo] = useState([]);
    const [visitorLogo, setVisitorLogo] = useState("");
    const [ftScoreText, setFtScoreText] = useState("");

    // const [firstLocalLogo, setFirstLocalLogo] = useState("");
    // const [firstVisitorLogo, setFirstVisitorLogo] = useState("");
    // const [firstFtScoreText, setFirstFtScoreText] = useState("");

    // const [secondGame, setSecondGame] = useState({
    //   secondLocalLogo: "",
    //   secondVisitorLogo: "",
    //   secondFtScoreText: ""
    // });

    // const [secondLocalLogo, setSecondLocalLogo] = useState("");
    // const [secondVisitorLogo, setSecondVisitorLogo] = useState("");
    // const [secondFtScoreText, setSecondFtScoreText] = useState("");

    // const [thirdGame, setThirdGame] = useState({
    //   thirdLocalLogo: "",
    //   thirdVisitorLogo: "",
    //   thirdFtScoreText: ""
    // });

    // const [thirdLocalLogo, setThirdLocalLogo] = useState("");
    // const [thirdVisitorLogo, setThirdVisitorLogo] = useState("");
    // const [thirdFtScoreText, setThirdFtScoreText] = useState("");

    // const [fourthGame, setFourthGame] = useState({
    //   fourthLocalLogo: "",
    //   fourthVisitorLogo: "",
    //   fourthFtScoreText: ""
    // });

    // const [fourthLocalLogo, setFourthLocalLogo] = useState("");
    // const [fourthVisitorLogo, setFourthVisitorLogo] = useState("");
    // const [fourthFtScoreText, setFourthFtScoreText] = useState("");

    // const [fithGame, setFithGame] = useState({
    //   fithLocalLogo: "",
    //   fithVisitorLogo: "",
    //   fithFtScoreText: ""
    // });

    // const [fithLocalLogo, setFithLocalLogo] = useState("");
    // const [fithVisitorLogo, setFithVisitorLogo] = useState("");
    // const [fithFtScoreText, setFithFtScoreText] = useState("");

    // const [sixthGame, setSixthGame] = useState({
    //   sixthLocalLogo: "",
    //   sixthVisitorLogo: "",
    //   sixthFtScoreText: ""
    // });

    // const [sixthLocalLogo, setSixthLocalLogo] = useState("");
    // const [sixthVisitorLogo, setSixthVisitorLogo] = useState("");
    // const [sixthFtScoreText, setSixthFtScoreText] = useState("");

    const [date, setDate] = useState(formattedDate)
 


    let localTeam;
    let visitorTeam;
    let FtScore;

  // let firstLocalTeam;
  // let firstVisitorTeam;
  // let firstFtScore;

  // let secondLocalTeam;
  // let secondVisitorTeam;
  // let secondFtScore;

  // let thirdLocalTeam;
  // let thirdVisitorTeam;
  // let thirdFtScore;

  // let fourthLocalTeam;
  // let fourthVisitorTeam;
  // let fourthFtScore;

  // let fithLocalTeam;
  // let fithVisitorTeam;
  // let fithFtScore;

  // let sixthLocalTeam;
  
  // let sixthVisitorTeam;
  // let sixthFtScore;



let result = []


// const clearDates = () =>
//  { while ([firstLocalLogo, firstVisitorLogo, firstFtScoreText ] !== "") {
//   setFirstLocalLogo() // take in all scores and logos and clear them
// }
// }







  const fetchItems = async () => {
       result = await axios.get(
     `https://soccer.sportmonks.com/api/v2.0/fixtures/date/${date}?api_token=nryB1n8jVKa1xg9vetU8MClVhe6RvDpix7skQuz5ufDIcShRnIEeLpnfErWb`
          // ); // this line brings in the data from todays date with the 'todaysDate' function above
            //  `https://soccer.sportmonks.com/api/v2.0/fixtures/date/2021-10-27?api_token=nryB1n8jVKa1xg9vetU8MClVhe6RvDpix7skQuz5ufDIcShRnIEeLpnfErWb`
      ); // test for previous date with all scores settled
        
      if (result.data.data.length !== 0) {
        
     
     
     
 
      // from 130 - 133 i should be able to grab every local team with logo


      console.log(result.data)
      localTeam = result.data.data.localteam_id;
      const localTeamInfo = await axios.get(`https://soccer.sportmonks.com/api/v2.0/teams/${localTeam}?api_token=nryB1n8jVKa1xg9vetU8MClVhe6RvDpix7skQuz5ufDIcShRnIEeLpnfErWb`);
      console.log(localTeamInfo);
      setLocalLogo(localTeamInfo.data.data);
      


      // visitorTeam = result.data.data.visitorteam_id;
      // const visitorTeamInfo = await axios.get(`https://soccer.sportmonks.com/api/v2.0/teams/${visitorTeam}?api_token=nryB1n8jVKa1xg9vetU8MClVhe6RvDpix7skQuz5ufDIcShRnIEeLpnfErWb`);
      // console.log(visitorTeamInfo);
      // setVisitorLogo(visitorTeamInfo.data.data.logo_path);
      // from 157 - 160 i should be able to grab every visitor team with logo

      // firstVisitorTeam = result.data.data[0].visitorteam_id;
      // const visitorTeamInfo = await axios.get(`https://soccer.sportmonks.com/api/v2.0/teams/${firstVisitorTeam}?api_token=nryB1n8jVKa1xg9vetU8MClVhe6RvDpix7skQuz5ufDIcShRnIEeLpnfErWb`);
      // console.log(visitorTeamInfo);
      // setFirstGame(visitorTeamInfo.data.data.logo_path);

      // FtScore = result.data.data.scores.ft_score;
      // setFtScoreText(FtScore);
      // from 168 - 169 i should be able to grab every ft score text 

      // firstFtScore = result.data.data[0].scores.ft_score;
      // setFirstGame(firstFtScore); // the last few lines of code brings in the first game of todays badges and final score
      }


      // if (result.data.data[1] !== undefined) {

      // secondLocalTeam = result.data.data[1].localteam_id; 
      // const secondLocalTeamInfo = await axios.get(`https://soccer.sportmonks.com/api/v2.0/teams/${secondLocalTeam}?api_token=nryB1n8jVKa1xg9vetU8MClVhe6RvDpix7skQuz5ufDIcShRnIEeLpnfErWb`);
      // console.log(secondLocalTeamInfo);
      // setSecondGame(secondLocalTeamInfo.data.data.logo_path);

      // secondVisitorTeam = result.data.data[1].visitorteam_id;
      // const secondVisitorTeamInfo = await axios.get(`https://soccer.sportmonks.com/api/v2.0/teams/${secondVisitorTeam}?api_token=nryB1n8jVKa1xg9vetU8MClVhe6RvDpix7skQuz5ufDIcShRnIEeLpnfErWb`);
      // console.log(secondVisitorTeamInfo);
      // setSecondGame(secondVisitorTeamInfo.data.data.logo_path);

      // secondFtScore = result.data.data[1].scores.ft_score;
      // setSecondGame(secondFtScore);
      // }
      
     
    
      // if (result.data.data[2] !== undefined) {

      // thirdLocalTeam = result.data.data[2].localteam_id;
      // const thirdLocalTeamInfo = await axios.get(`https://soccer.sportmonks.com/api/v2.0/teams/${thirdLocalTeam}?api_token=nryB1n8jVKa1xg9vetU8MClVhe6RvDpix7skQuz5ufDIcShRnIEeLpnfErWb`);
      // console.log(thirdLocalTeamInfo);
      // setThirdGame(thirdLocalTeamInfo.data.data.logo_path);

      // thirdVisitorTeam = result.data.data[2].visitorteam_id;
      // const thirdVisitorTeamInfo = await axios.get(`https://soccer.sportmonks.com/api/v2.0/teams/${thirdVisitorTeam}?api_token=nryB1n8jVKa1xg9vetU8MClVhe6RvDpix7skQuz5ufDIcShRnIEeLpnfErWb`);
      // console.log(thirdVisitorTeamInfo);
      // setThirdGame(thirdVisitorTeamInfo.data.data.logo_path);

      // thirdFtScore = result.data.data[2].scores.ft_score;
      // setThirdGame(thirdFtScore);
      // }

     
     
      // if (result.data.data[3] !== undefined) {
      // fourthLocalTeam = result.data.data[3].localteam_id;
      // const fourthLocalTeamInfo = await axios.get(`https://soccer.sportmonks.com/api/v2.0/teams/${fourthLocalTeam}?api_token=nryB1n8jVKa1xg9vetU8MClVhe6RvDpix7skQuz5ufDIcShRnIEeLpnfErWb`);
      // console.log(fourthLocalTeamInfo);
      // setFourthGame(fourthLocalTeamInfo.data.data.logo_path);

      // fourthVisitorTeam = result.data.data[3].visitorteam_id;
      // const fourthVisitorTeamInfo = await axios.get(`https://soccer.sportmonks.com/api/v2.0/teams/${fourthVisitorTeam}?api_token=nryB1n8jVKa1xg9vetU8MClVhe6RvDpix7skQuz5ufDIcShRnIEeLpnfErWb`);
      // console.log(fourthVisitorTeamInfo);
      // setFourthGame(fourthVisitorTeamInfo.data.data.logo_path);

      // fourthFtScore = result.data.data[3].scores.ft_score;
      // setFourthGame(fourthFtScore);
      // }

     
     
      // if (result.data.data[4] !== undefined) {
      // fithLocalTeam = result.data.data[4].localteam_id;
      // const fithLocalTeamInfo = await axios.get(`https://soccer.sportmonks.com/api/v2.0/teams/${fithLocalTeam}?api_token=nryB1n8jVKa1xg9vetU8MClVhe6RvDpix7skQuz5ufDIcShRnIEeLpnfErWb`);
      // console.log(fithLocalTeamInfo);
      // setFithGame(fithLocalTeamInfo.data.data.logo_path);

      // fithVisitorTeam = result.data.data[4].visitorteam_id;
      // const fithVisitorTeamInfo = await axios.get(`https://soccer.sportmonks.com/api/v2.0/teams/${fithVisitorTeam}?api_token=nryB1n8jVKa1xg9vetU8MClVhe6RvDpix7skQuz5ufDIcShRnIEeLpnfErWb`);
      // console.log(fithVisitorTeamInfo);
      // setFithGame(fithVisitorTeamInfo.data.data.logo_path);

      // fithFtScore = result.data.data[4].scores.ft_score;
      // setFithGame(fithFtScore);
      // }

     
     
      // if (result.data.data[5] !== undefined) {
      // sixthLocalTeam = result.data.data[5].localteam_id;
      // const sixthLocalTeamInfo = await axios.get(`https://soccer.sportmonks.com/api/v2.0/teams/${sixthLocalTeam}?api_token=nryB1n8jVKa1xg9vetU8MClVhe6RvDpix7skQuz5ufDIcShRnIEeLpnfErWb`);
      // console.log(sixthLocalTeamInfo);
      // setSixthGame(sixthLocalTeamInfo.data.data.logo_path);

      // sixthVisitorTeam = result.data.data[5].visitorteam_id;
      // const sixthVisitorTeamInfo = await axios.get(`https://soccer.sportmonks.com/api/v2.0/teams/${sixthVisitorTeam}?api_token=nryB1n8jVKa1xg9vetU8MClVhe6RvDpix7skQuz5ufDIcShRnIEeLpnfErWb`);
      // console.log(sixthVisitorTeamInfo);
      // setFithGame(sixthVisitorTeamInfo.data.data.logo_path);

      // sixthFtScore = result.data.data[5].scores.ft_score;
      // setFithGame(sixthFtScore);
      // }

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
              {localLogo.map((logo)=>(
                <li key={logo.data.logo_path}>
                  {logo.data.logo_path}
                  </li>
              ))}
              {/* {localLogo !== ""? (
                <img src={localLogo}
                    alt='local logo'/>
                ): null}
              {ftScoreText !== ""? (
                <p>{ftScoreText}</p>
              ): null}
              {visitorLogo !== ""? (
                <img src={visitorLogo}
                    alt='visitor logo'/>
                    ): null} */}
            </div>
            {/* <div className='scores2'>
              {secondGame.secondLocalLogo !== ""? (
                <img src={secondGame.secondLocalLogo}
                    alt='local logo'/>
                ): null}
              {secondGame.secondFtScoreText !== ""? (
                <p>{secondGame.secondFtScoreText}</p>
              ): null}
              {secondGame.secondVisitorLogo !== ""? (
                <img src={secondGame.secondVisitorLogo}
                    alt='visitor logo'/>
                    ): null}
            </div>
            <div className='scores3'>
            {thirdGame.thirdLocalLogo !== ""? (
                <img src={thirdGame.thirdLocalLogo}
                    alt='local logo'/>
                ): null}
              {thirdGame.thirdFtScoreText !== ""? (
                <p>{thirdGame.thirdFtScoreText}</p>
              ): null}
              {thirdGame.thirdVisitorLogo !== ""? (
                <img src={thirdGame.thirdVisitorLogo}
                    alt='visitor logo'/>
                    ): null}
            </div>
            <div className='scores4'>
            {fourthGame.fourthLocalLogo !== ""? (
                <img src={fourthGame.fourthLocalLogo}
                    alt='local logo'/>
                ): null}
              {fourthGame.fourthFtScoreText !== ""? (
                <p>{fourthGame.fourthFtScoreText}</p>
              ): null}
              {fourthGame.fourthVisitorLogo !== ""? (
                <img src={fourthGame.fourthVisitorLogo}
                    alt='visitor logo'/>
                    ): null}
            </div>
            <div className='scores5'>
            {fithGame.fithLocalLogo !== ""? (
                <img src={fithGame.fithLocalLogo}
                    alt='local logo'/>
                ): null}
              {fithGame.fithFtScoreText !== ""? (
                <p>{fithGame.fithFtScoreText}</p>
              ): null}
              {fithGame.fithVisitorLogo !== ""? (
                <img src={fithGame.fithVisitorLogo}
                    alt='visitor logo'/>
                    ): null}
            </div>
            <div className='scores6'>
            {sixthGame.sixthLocalLogo !== ""? (
                <img src={sixthGame.sixthLocalLogo}
                    alt='local logo'/>
                ): null}
              {sixthGame.sixthFtScoreText !== ""? (
                <p>{sixthGame.sixthFtScoreText}</p>
              ): null}
              {sixthGame.sixthVisitorLogo !== ""? (
                <img src={sixthGame.sixthVisitorLogo}
                    alt='visitor logo'/>
                    ): null} */}
            {/* </div> */}
            </div>
             </div>
    );
};

export default App;
