import fs from "fs";
import path from "path";
import readlinePromises from "readline";

export class ReadFile {
  private readStream: fs.ReadStream;

  constructor(
    private filePath: string = path.join(
      __dirname,
      "../",
      "../data",
      "/england-premier-league-2019-to-2020.csv"
    )
  ) {
    this.readStream = this.createDataStream();
  }

  private createDataStream() {
    return fs.createReadStream(this.filePath, { encoding: "utf8" });
  }

  private createReadLine(): readlinePromises.Interface {
    return readlinePromises.createInterface({
      input: this.readStream,
    });
  }

  public async getCsvString(team: string): Promise<string> {
    const readLine = this.createReadLine();
    const myArr: string[] = [];

    for await (const line of readLine) {
      myArr.push(line);
    }

    readLine.close();

    return myArr.join("\n");
  }
}
