import { response, Router } from "express";
import { FootBallMatchData } from "../services/football";
import { getCsv } from "../utils/csv";
import { MatchDataStringObj } from "../model/matchData";

export const router = Router();

router.get("/", async (req, res) => {
  const dataSource = new FootBallMatchData(await getCsv());
  const team = req.query.team;
  const responseJson:
    | { [matches: string]: MatchDataStringObj[] }
    | { [error: string]: string } = {};
  if (typeof team === "string") {
    responseJson["matches"] = dataSource.getMatchesByTeam(team);
  } else {
    responseJson["error"] = "Please provide a string as a team name";
  }
  res.header("Content-Type", "application/json");
  res.end(JSON.stringify(responseJson));
});
