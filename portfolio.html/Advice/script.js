const url = "https://api.adviceslip.com/advice";

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error("Bad response");
    }
    return response.json();
  })
  .then(data => 
   $("#advice").text(data.slip.advice)
  )
  .catch(err => 
    console.error(`Error: ${err} `)
  );

  function myFunction() {
  var x = document.getElementById("container");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
