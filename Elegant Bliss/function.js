// function prev(){
//     document.getElementById('slider-container1').scrollLeft -= 270;
// }

// function next()
// {
//     document.getElementById('slider-container1').scrollLeft += 270;
// }


// $(".slide1 img").on("click" , function(){
// $(this).toggleClass('zoomed');
// $(".overlay1").toggleClass('active');
// })
function prev(){
    document.getElementById('slider-container').scrollLeft -= 270;
}

function next()
{
    document.getElementById('slider-container').scrollLeft += 270;
}
function prev(){
    document.getElementById('slider1-container').scrollLeft -= 270;
}

function next()
{
    document.getElementById('slider1-container').scrollLeft += 270;
}


$(".slide img").on("click" , function(){
$(this).toggleClass('zoomed');
$(".overlay").toggleClass('active');
})
$(".slide1 img").on("click" , function(){
$(this).toggleClass('zoomed');
$(".overlay").toggleClass('active');
})
$(".slide2 img").on("click" , function(){
$(this).toggleClass('zoomed');
$(".overlay").toggleClass('active');
})

