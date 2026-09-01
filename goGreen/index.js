import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";

const path = "./data.json";

const git = simpleGit();

// Start: September 1, 2025
let date = moment.parseZone("2025-09-01T12:00:00+05:30");

// End: September 30, 2025
const endDate = moment.parseZone("2025-09-30T12:00:00+05:30");

const makeCommits = async () => {
  while (date.isSameOrBefore(endDate, "day")) {
    // Random commits between 1 and 5
    const commitsPerDay = Math.floor(Math.random() * 5) + 1;

    console.log(`\n${date.format("YYYY-MM-DD")} → ${commitsPerDay} commits`);

    for (let i = 1; i <= commitsPerDay; i++) {
      // Random time between 9 AM and 8 PM
      const commitDate = date
        .clone()
        .hour(Math.floor(Math.random() * 12) + 9)
        .minute(Math.floor(Math.random() * 60))
        .second(Math.floor(Math.random() * 60))
        .format();

      const data = {
        date: commitDate,
        commit: i,
      };

      jsonfile.writeFileSync(path, data);

      await git.add([path]);

      await git.commit(`Update for ${commitDate}`, [path], {
        "--date": commitDate,
      });

      console.log(`  Commit ${i}: ${commitDate}`);
    }

    // Move to next day
    date.add(1, "day");
  }

  console.log("\nAll commits created!");

  await git.push();

  console.log("Successfully pushed!");
};

makeCommits();
