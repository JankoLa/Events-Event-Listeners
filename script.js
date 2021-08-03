let message = "'Yeah, you clicked me'"

$("#but").on("click", () => {
console.log(message)
});

$("#but2").on("click", () => {
$("#but").text("Done")
});

$("#but3").on("click", () => {
$("button").css({backgroundColor: "blue"})
});      
   
$(".input1").on("click", () => {
$("button").css({backgroundColor: "brown"})
}); 

$(".input2").on("click", () => {
$("button").css({backgroundColor: "grey"})
}); 

$(".input3").on("click", () => {
$("button").css({backgroundColor: "aqua"})
}); 