import React, {useState, useEffect} from "react";
import "./App.css";
import DatePicker from './Components/DatePicker';
import axios from "axios";


const App = () => {


    const today = new Date()

    const formattedDate = () => {
      return today.getFullYear() + "-" + (today.getMonth()+1) + "-" + today.getDate()
    }


    const [homeTeamLogos, setHomeTeamLogos] = useState([]);
    const [visitorLogo, setVisitorLogo] = useState("");
    const [ftScoreText, setFtScoreText] = useState("");


    const [date, setDate] = useState(formattedDate)
 


    let localTeam;
    let visitorTeam;
    let FtScore;


let result = []


  const fetchItems = async () => {
       result = await axios.get(
     `https://soccer.sportmonks.com/api/v2.0/fixtures/date/${date}?api_token=nryB1n8jVKa1xg9vetU8MClVhe6RvDpix7skQuz5ufDIcShRnIEeLpnfErWb`
          // ); // this line brings in the data from todays date with the 'todaysDate' function above
            //  `https://soccer.sportmonks.com/api/v2.0/fixtures/date/2021-10-27?api_token=nryB1n8jVKa1xg9vetU8MClVhe6RvDpix7skQuz5ufDIcShRnIEeLpnfErWb`
      ); // test for previous date with all scores settled
    
    const footballDataArray = result.data.data


      if (footballDataArray.length !== 0) {
        for (let match = 0; match < footballDataArray.length; match++) {
          localTeam = footballDataArray[match].localteam_id;
        
      const unparsedLocalTeamData = await axios.get(`https://soccer.sportmonks.com/api/v2.0/teams/${localTeam}?api_token=nryB1n8jVKa1xg9vetU8MClVhe6RvDpix7skQuz5ufDIcShRnIEeLpnfErWb`);
      console.log(unparsedLocalTeamData.data.data.logo_path);
      setHomeTeamLogos(homeTeamLogos => [...homeTeamLogos, unparsedLocalTeamData.data.data.logo_path]);
        
      }}
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
              {homeTeamLogos.map((logo)=>{
                return (
                <li key={logo.data} >
                <img alt="home logos"> {logo.data} </img>
                  </li>
              )})}
            </div>
            </div>
             </div>
    );
};

export default App;
