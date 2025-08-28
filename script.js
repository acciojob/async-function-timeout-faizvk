//your JS code here. If required.
const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

btn.addEventListener("click", async () => {
  const message = textInput.value.trim();
  const delay = parseInt(delayInput.value);

  if (!message || isNaN(delay) || delay < 0) {
    output.textContent = "Please enter a valid message and delay.";
    return;
  }

  output.textContent = "Waiting...";
  await wait(delay);
  output.textContent = message;
});