//$(document).ready(function(){
    //filter btn all to show all items//
   //filterSelection("all")
    //function filterSelection(c){
      //  var x,i;
        //x=document.getElementsByClassName("col-md-3") 
        //if (c=="all") c="";
        //for (i = 0; i < x.length; i++) {
       //  removeClass(x[i],"show")
         //if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
        //}
    //}

   //function AddClass(element,name){
    //var i, arr1, arr2;
    //arr1 = element.className.split(" ");
    //arr2 = name.split(" ");
    //for (i = 0; i < arr2.length; i++) {
      //if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    //}
  //}

  //function removeClass(element, name){
    //var i, arr1, arr2;
    //arr1 = element.className.split(" ");
    //arr2 = name.split(" ");
    //for (i = 0; i < arr2.length; i++) {
      //while (arr1.indexOf(arr2[i]) > -1) {
        //arr1.splice(arr1.indexOf(arr2[i]), 1);     
      //}
    //}
    //element.className = arr1.join(" ");
  //}

  //var buttons = document.getElementsByClassName("buttons");
//var buttons = document.getElementsByClassName("btn");
//for (var i = 0; i < buttons.length; i++) {
  //  buttons[i].addEventListener("click", function(){
    //var current = document.getElementsByClassName("button-active");
   // current[0].className = current[0].className.replace(" button-active", "");
   // this.className += " button-active";
  //});
//}



//})

let supplierOne = [];
//let supplierTwo = [];
//let supplierThree = [];

pipingItems =[
   {
       name: "Pvc Pipes Joints.",
       size: "1.5 Inch",
        price: "Ksh 2000/",
        category: "joint"
    },
    {
     
       name: "Flexiable Pipe Joints.",
        size: "1 Inch",
        price: "Ksh 1500/",
        category: "joint"
    },   
    {

        name: "Water Joint pipe.",
       size: "1/2 Inch",
        price: "Ksh 600/",
        category: "joint"
    },
    {
       name: "Drainage expansion Joint pipee.",
        size: "1/2 Inch",
        price: "Ksh 1600/",
        category: "joint"  
    },
    {
        name: "Water Horse Pipe",
        size: "100m",
        price: "120",
        category: "water"
    }

]

$('#supplierOne').on('click', () => {    
    supplierOne = pipingItems.filter(pipingItem => pipingItem.category === "joint");
    console.log(supplierOne);

    document.getElementById("joints").innerHTML = supplierOne;
})


$("#supplierTwo").on('click', () => {
   pipingItems.forEach(pipingItem => {
       if(pipingItem.category == "water"){
           supplierTwo.push(pipingItem)
        }
   })
})

$("#supplierThree").on('click',() => {
   pipingItems.forEach(pipingItems => {
    if(pipingItem.category=="electrical")
       supplierThree.push(pipingItem)
   })
})


 
//var buttons = document.querySelectorAll(".buttons ul li")

//buttons.forEach((btn)=>{
  //   btn.addEventListener("click",()=>{
    //     btn.classlist.add("active");
     //})
//})
$(".box-container .btn").click(function () {
    let filter = $(this).attr("data-filter");
    if (filter == "all") {
      $(".box-container .col-md-3").show();
    } else {
      $(".box-container .col-md-3")
        .not("." + filter)
        .hide();
      $(".box-container .col-md-3")
        .filter("." + filter)
        .show();
    }

    $(this).addClass("button-active").siblings().removeClass("button-active");
});   

$(".box-container .supplier1").click(function () {
    let filter = $(this).attr("filterDiv");
    if (filter == "supplier1") {
      $(".box-container .col-md-3").show();
    } else {
      $(".box-container .col-md-3")
        .not("." + filter)
        .hide();
      $(".box-container.col-md-3")
        .filter("." + filter)
        .show();
    }

    $(this).addClass("btn").siblings().removeClass("button-active");
});   
