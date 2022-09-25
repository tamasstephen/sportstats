import { MatchDataStringObj } from "../model/matchData";

export class FootBallMatchData {
  constructor(private matchDataStringObj: MatchDataStringObj[]) {}

  public getMatchesByTeam(team: string): MatchDataStringObj[] {
    team = team.toLowerCase();
    return this.matchDataStringObj.filter(
      (row) =>
        row.HomeTeam.toLowerCase() == team || row.AwayTeam.toLowerCase() == team
    );
  }
}
