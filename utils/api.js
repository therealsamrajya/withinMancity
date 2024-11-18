import axios from "axios"
const FOOTBALL_API_KEY = "d9e17e9584304d8bbc2e7eae2a6e17e0";
console.log(FOOTBALL_API_KEY);


export const footballApi = axios.create({
    baseURL:"http://api.football-data.org/v4",
    headers:{
        "X-Auth-Token": FOOTBALL_API_KEY
    }
})

export const footballEndpoints = {
    // Get Manchester City team info (team ID: 65)
    getTeamInfo: () => footballApi.get('/teams/65'),
    
    // Get upcoming matches
    getUpcomingMatches: () => footballApi.get('/teams/65/matches?status=SCHEDULED'),
    
    // Get matches from a specific competition (Premier League ID: 2021)
    getPLMatches: () => footballApi.get('/competitions/2021/matches'),
    
    // Get team's matches for current season
    getCurrentSeasonMatches: () => footballApi.get('/teams/65/matches?season=2023'),
  };