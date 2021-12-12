var dom = document
var image = dom.getElementById("iamama")

var slider =[

       "./1.jpg" , "./2.jpg" ,"./3.jpg" ,"./4.jpg" ,"./5.jpg" ,"./6.jpg" ,"./7.jpg" ,"./8.jpg"

]


function next(){

    var index = parseInt( Math.random()*7)

    image.src = slider[index]

}