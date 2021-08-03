let message = "'Yeah, you clicked me'"

$("#but").on("click", () => {
console.log(message)
});

$("#but2").on("click", () => {
$("#but").text("Done")
});

$("#but3").on("click", () => {
$("button").css({backgroundColor: "red"})
});      
   
