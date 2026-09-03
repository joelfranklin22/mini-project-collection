const moment = require("moment");
const { execSync } = require("child_process");

// Start date
let date = moment.parseZone("2025-10-13T12:00:00+05:30");

// End date
const endDate = moment.parseZone("2025-10-27T12:00:00+05:30");

// Generate random number between min and max
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

while (date.isSameOrBefore(endDate, "day")) {
  // Random commits: 1 to 3 per day
  const commitCount = randomNumber(1, 3);

  console.log(`\n${date.format("YYYY-MM-DD")} -> ${commitCount} commit(s)`);

  for (let i = 0; i < commitCount; i++) {
    // Random time during the day
    const commitDate = date
      .clone()
      .hour(randomNumber(9, 21))
      .minute(randomNumber(0, 59))
      .second(randomNumber(0, 59));

    const formattedDate = commitDate.format("YYYY-MM-DDTHH:mm:ssZ");

    // Create an empty commit with the chosen timestamp
    execSync(`git commit --allow-empty -m "Daily Java practice"`, {
      env: {
        ...process.env,
        GIT_AUTHOR_DATE: formattedDate,
        GIT_COMMITTER_DATE: formattedDate,
      },
      stdio: "inherit",
    });

    console.log(`Commit ${i + 1}: ${formattedDate}`);
  }

  // Move to next day
  date.add(1, "day");
}
