import { response, Router } from "express";
import { FootBallMatchData } from "../services/football";
import { getCsv } from "../utils/csv";
import { MatchDataStringObj } from "../model/matchData";
import { ResponseJsonStatus } from "../model/status";

export const router = Router();

router.get("/", async (req, res) => {
  const dataSource = new FootBallMatchData(await getCsv());
  const team = req.query.team;
  const responseJson: Partial<{
    matches: MatchDataStringObj[];
    status: string;
    error: string;
  }> = { status: ResponseJsonStatus.OK };
  if (typeof team === "string") {
    responseJson["matches"] = dataSource.getMatchesByTeam(team);
  } else {
    responseJson["error"] = "Please provide a string as a team name";
    responseJson.status = ResponseJsonStatus.ERROR;
  }
  res.header("Content-Type", "application/json");
  res.end(JSON.stringify(responseJson));
});
