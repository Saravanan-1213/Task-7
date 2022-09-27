// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <script src="MRF function .js"></script>
// </body>
// </html>

// Region


var request = new XMLHttpRequest();
request.open ("GET","https://restcountries.com/v2/all")
request.send();
request.onload = function(){
    var res = JSON.parse(request.response)
    console.log(res);
    var reg = res.filter((ele)=>ele.region)
    console.log(reg)
}

// Population
var request = new XMLHttpRequest();
request.open ("GET","https://restcountries.com/v2/all")
request.send();
request.onload = function(){
    var res = JSON.parse(request.response)
    console.log(res);
    var reg = res.filter((ele)=>ele.population<200000)
    console.log(reg)
}


// Reduce 


var request = new XMLHttpRequest();
request.open ("GET","https://restcountries.com/v2/all")
request.send();
request.onload = function(){
    var res = JSON.parse(request.response)
    console.log(res);
    var reg = res.reduce((acc,cv)=>acc+cv.population,0)
    console.log(reg)
}


// Print Namr, Capital, Flag using forEach function

var request = new XMLHttpRequest();
request.open ("GET","https://restcountries.com/v2/all")
request.send();
request.onload = function(){
    var res = JSON.parse(request.response)
    console.log(res);
    var reg = res.forEach((element)=>console.log(element.name, element.capital, element.flag))
}
