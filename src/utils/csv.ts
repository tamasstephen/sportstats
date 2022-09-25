import { parse } from "csv-parse/sync";
import { ReadFile } from "../utils/filereader";
import { MatchDataStringObj } from "../model/matchData";

export async function getCsv(filePath?: string): Promise<MatchDataStringObj[]> {
  const fileArg = filePath ? filePath : undefined;
  const readStream = new ReadFile(fileArg);
  const rows = await readStream.getCsvString();
  return parseCsv(rows);
}

function parseCsv(input: string): MatchDataStringObj[] {
  return parse(input, {
    columns: true,
    skip_empty_lines: true,
  });
}
