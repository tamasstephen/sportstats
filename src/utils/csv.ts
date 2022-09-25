import { parse } from "csv-parse/sync";
import fs from "fs";

export function parseCsv(input: string) {
  return parse(input, {
    columns: true,
    skip_empty_lines: true,
  });
}
