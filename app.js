// Chapter 31-34

// Question 1
// var date = new Date()
// document.write(date)

// Question 2
// var date = new Date();
// var month = date.getMonth();
// var day = date.getDay();
// document.write(getMonthName(month)+"<br>")
//  document.write(getDayName(day)+"<br>")
// function getMonthName(monthnumber){
// var monthname = ["January","Februrary","March","April","May","June","August","September","October","November","December"];
// return monthname[monthnumber];
// }
// function getDayName(daynumber){
//     var dayname = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",];
//     return dayname[daynumber];
//     }
    

    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    
    
// var x = months[date1.getMonth()];
// console.log(x)


// var month=new Array["January","Februrary","March","April","May","June","August","September","October","November","December"];

// function date()
// {
//     var today=new Date();
//     var y=today.getFullYear(); 
//     var d=today.getDate(); 
//     var n=today.getMonth(); 

//     document.getElementById("h"). innerHMTL+=d+"/"+month[today.getMonth()]+"/"+y;
// }
// window.onload=date();

// var getMonths=["January","Februrary","March","April","May","June","August","September","October","November","December"
// ];
// var d=new Date();
// document.getElementById("txt").value=getMonths[d.getMonth()];


// Question 5
// var now = new Date()
// // document.write(now)
// if(15<now.getDate())
// {document.write("Last 15 days of the month")}

// else if(15>now.getDate()){document.write("First 15 days of the month")}


// Question 6
// var date = new Date()
// document.write("New Current Date:"+ date+"<br>")
// var now = new Date("january 5 1999") 
// var now1 = now.getTime()
// document.write("Elapsed milliseconds since january 5 1999:"+now1+"<br>")
// var current = Math.floor(now1/(1000*60*60))
// document.write("Elapsed minutes since january 5 1999:"+current)


// Question 7
// var now = new Date()
// document.write(now.toDateString())
// if(12>now.getHours())
// {alert("12")}

// else if(24<now.getHours()){alert("123")}


// incomplete



// question 8

// var now = new Date ();
// now.setDate(30)
// now.setMonth(11)
// now.setHours(23)
// now.setMinutes(59)
// document.write("Ending of the year"+now)

// PROBLEM

// Question 9
// var firstroza = new Date("April , 14 ,2021");
// var today = firstroza.getTime();
// var now = new Date();
// var now1 = now.getTime();
// var diff = now1-today;
// var accurage = Math.floor(diff/(1000*60*60*24));
// document.write(accurage+"day have passed since 1st Ramadan of 2021");


// Question 10
// var first2021 = new Date("January , 01 ,2021");
// var today = first2021.getTime();
// var now = new Date();
// var now1 = now.getTime();
// var diff = now1-today;
// var accurage = Math.floor(diff/(1000*60));
// document.write("On reference date "+now+""+""+accurage+"second had passed since 1st day January of 2021 ");


// Question 13
// var datebirth = new Date("september , 26 ,2003");
// var today = datebirth.getTime();
// var now = new Date();
// var now1 = now.getTime();
// var diff = now1-today;
// var accurage = Math.floor(diff/(1000*60*60*24*30*12));
// document.write("My age is "+""+""+accurage 
// +"<br>"+ "Born in"+""+""+""+ datebirth.toDateString());

// Question 14
// var customer = ("raza")
// var month = new Date();
// month.SetMonth(3);
// alert(month);
// var numberunit = 500 
// var charge_per_unit = 20
// // var net = numberunit*charge_per_unit
// if(new Date('April ,14, 2021')){
//     document.write("Net Amount Payable (within Due Date):"+ numberunit*charge_per_unit)
// }
// else(new Date('April ,14, 2021')< new Date('April ,25, 2021')){
//     document.write("Net Amount Payable (within Due Date):"+ numberunit*charge_per_unit)
// }

