import { ReadFile } from "./services/filereader";

async function init() {
  const data = new ReadFile();
  const rows = await data.getRowsByHomeTeam("Arsenal");
  console.log(rows);
}

init();
