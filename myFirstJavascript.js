console.log("This is printed in the console.");

const fillData = () => {
  // Step 1: get input element references
  let vnInputElement1 = document.getElementById("villageName1");
  let vnInputElement2 = document.getElementById("villageName2");

  // Step 2: get target element reference
  let targetContainer = document.getElementById("container");

  // Step 3: Create a new div node...
  let newDivNode = document.createElement("div");
  // ...and place it into the targetContainer
  targetContainer.innerHTML = "";
  targetContainer.appendChild(newDivNode);

  // Step 4:
  newDivNode.innerHTML = `<p>The village ${makeBold(
    vnInputElement1.value
  )} is situated next to ${makeItalic(vnInputElement2.value)}.</p>`;
};

const makeBold = (name) => {
  return `<b>${name}</b>`;
};

const makeItalic = (name) => {
  return `<i>${name}</i>`;
};
