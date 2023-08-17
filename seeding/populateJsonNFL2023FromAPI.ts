import axios from "axios";
import fs from 'fs/promises'

const populate2023NFLFromAPI = async () => {
    const options = {
        method: 'GET',
        url: 'https://api-american-football.p.rapidapi.com/games',
        params: { league: '1', season: '2023' },
        headers: {
            'X-RapidAPI-Key': '9a4832deedmsh7d83ba201d64006p156036jsn36212fc55501',
            'X-RapidAPI-Host': 'api-american-football.p.rapidapi.com'
        }
    };
    const res = await axios.request(options)
    console.log("res: ", res)
    await fs.writeFile("/Users/bigsexy/Desktop/currentProjects/paidWork/ticket_chaser/data/static/games/fromAPI.json", JSON.stringify(res.data))
}

populate2023NFLFromAPI()
