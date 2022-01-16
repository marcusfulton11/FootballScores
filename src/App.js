import React, {useState, useEffect} from "react";
import "./App.css";
import DatePicker from './Components/DatePicker';
import axios from "axios";


const App = () => {


    const today = new Date()

    const formattedDate = () => {
        return today.getFullYear() + "-" + (
            today.getMonth() + 1
        ) + "-" + today.getDate()
    }


    const [homeTeamLogos, setHomeTeamLogos] = useState([]);
    const [awayTeamLogos, setAwayTeamLogos] = useState([]);
    const [ftScoreText, setFtScoreText] = useState("");


    const [date, setDate] = useState(formattedDate)


    let homeTeam;
    let awayTeam;
    let FtScore;


    let result = []


    const fetchItems = async () => {
        result = await axios.get(`https://soccer.sportmonks.com/api/v2.0/fixtures/date/${date}?api_token=nryB1n8jVKa1xg9vetU8MClVhe6RvDpix7skQuz5ufDIcShRnIEeLpnfErWb`
        // ); // this line brings in the data from todays date with the 'todaysDate' function above
        // `https://soccer.sportmonks.com/api/v2.0/fixtures/date/2021-10-27?api_token=nryB1n8jVKa1xg9vetU8MClVhe6RvDpix7skQuz5ufDIcShRnIEeLpnfErWb`
        ); // test for previous date with all scores settled

        const footballDataArray = result.data.data


        if (footballDataArray.length !== 0) {
            for (let match = 0; match < footballDataArray.length; match++) {
                homeTeam = footballDataArray[match].localteam_id;

                const unparsedLocalTeamData = await axios.get(`https://soccer.sportmonks.com/api/v2.0/teams/${homeTeam}?api_token=nryB1n8jVKa1xg9vetU8MClVhe6RvDpix7skQuz5ufDIcShRnIEeLpnfErWb`);
                console.log(unparsedLocalTeamData.data.data.logo_path);
                setHomeTeamLogos(homeTeamLogos => [
                    ...homeTeamLogos,
                    unparsedLocalTeamData.data.data.logo_path
                ]);
                console.log(homeTeamLogos)

            }
        };

        if (footballDataArray.length !== 0) {
        for (let match = 0; match < footballDataArray.length; match++) {
            awayTeam = footballDataArray[match].visitorTeam_id;

            const unparsedAwayTeamData = await axios.get(`https://soccer.sportmonks.com/api/v2.0/teams/${awayTeam}?api_token=nryB1n8jVKa1xg9vetU8MClVhe6RvDpix7skQuz5ufDIcShRnIEeLpnfErWb`);
            console.log(unparsedAwayTeamData.data.data.logo_path);
            setAwayTeamLogos(awayTeamLogos => [
                ...awayTeamLogos,
                unparsedAwayTeamData.data.data.logo_path
            ]);
            console.log(awayTeamLogos)

        }
      }
    };

    useEffect(() => {

        fetchItems()

    }, [date]);


    console.log(date)
    return (
        <div className='App'>
            <header className='container'>Todays Scores</header>
            <DatePicker date={date}
                setDate={setDate}/>

            <div>
                <div className='homeLogos'>
                    {
                    homeTeamLogos.map((logo1, i) => {
                        return (
                            <img src={logo1}
                                key={i}
                                value={logo1}
                                alt="home logos"/>
                        )
                    })
                } </div>

                <div className='awayLogos'>
                    {
                    awayTeamLogos.map((logo2, i) => {
                        return (
                            <img src={logo2}
                                key={i}
                                value={logo2}
                                alt="away logos"/>
                        )
                    })
                } </div>
            </div>
        </div>
    );
};

export default App;

