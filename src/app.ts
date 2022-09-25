import { FootBallMatchData } from "./services/football";
import { getCsv } from "./utils/csv";

async function init() {
  const Football = new FootBallMatchData(await getCsv());
  console.log(Football.getMatchesByTeam("Arsenal"));
}

init();
