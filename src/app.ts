import { ReadFile } from "./utils/filereader";
import { parseCsv } from "./utils/csv";

async function init() {
  const data = new ReadFile();
  const rows = await data.getCsvString("Arsenal");
  console.log(parseCsv(rows));
}

init();
