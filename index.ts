import core from "@actions/core";
import github from "@actions/github";

try {
  const nameToGreet = core.getInput("who-to-greet");
  console.log(`Hello ${nameToGreet}`);

  const time = new Date().toISOString();
  core.setOutput("time", time);

  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log("The payload", payload);
} catch (error) {
  if (error instanceof Error) {
    core.setFailed(error.message);
  }
}
