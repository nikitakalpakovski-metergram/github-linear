import core from "@actions/core";
import github from "@actions/github";

console.log("core", core);
console.log("github", github);

try {
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log("The payload", payload);
} catch (error) {
  if (error instanceof Error) {
    core.setFailed(error.message);
  }
}
