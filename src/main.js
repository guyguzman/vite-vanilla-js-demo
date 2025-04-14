async function cycleImages() {
  const response = await fetch("./src/images.json");
  const images = await response.json();

  const beforeImage = document.getElementById("beforeImage");
  const afterImage = document.getElementById("afterImage");
  console.log(beforeImage, afterImage);

  while (true) {
    // Repeat continuously
    for (const image of images) {
      beforeImage.src = `public/img/${image.before}`;
      afterImage.src = `public/img/${image.after}`;
      console.log(`Showing ${image.before} and ${image.after}`);
      await new Promise((resolve) => setTimeout(resolve, 5000)); // Pause for 5 seconds
    }
  }
}

window.onload = () => {
  cycleImages();
};

const $compare = document.querySelector(".compare");
const $input = document.querySelector(".compare input");

$input.addEventListener("input", () => {
  $compare.style.setProperty("--mask-width", `${$input.value}%`);
});

$compare.style.setProperty("--mask-width", `${$input.value}%`);

// ----- DEBUG STUFF ----- //

// const $toggleDebug = document.querySelector(".toggle-debug");

// const removeOverflow = () => {
//   $compare.style.removeProperty("overflow");
// };

// $toggleDebug.addEventListener("click", () => {
//   document.body.classList.toggle("debug");
// });
