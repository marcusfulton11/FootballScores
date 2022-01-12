import React, {useState, useEffect} from "react";
import "./App.css";
import DatePicker from './Components/DatePicker';
import axios from "axios";


const App = () => {


    const today = new Date()

    const formattedDate = () => {
      return today.getFullYear() + "-" + (today.getMonth()+1) + "-" + today.getDate()
    }


    const [localLogo, setLocalLogo] = useState([]);
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
        
      if (result.data.data.length !== 0) {
        
      localTeam = result.data.data.localteam_id; //after second data i need to loop from 0 index to 6(or however many local teams there are)
      const localTeamInfo = await axios.get(`https://soccer.sportmonks.com/api/v2.0/teams/${localTeam}?api_token=nryB1n8jVKa1xg9vetU8MClVhe6RvDpix7skQuz5ufDIcShRnIEeLpnfErWb`);
      console.log(localTeamInfo);
      setLocalLogo(localTeamInfo.data.data);
      }
    };

    console.log(localTeam) // showing undefined

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
              {localLogo.map((logo)=>{
                return (
                <li key={logo.data.logo_path}>
                  {logo.data.logo_path}
                  </li>
              )})}
            </div>
            </div>
             </div>
    );
};

export default App;
