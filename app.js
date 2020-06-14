//Chapter#1
//Task#1
alert("Asalam-o-Alikum!");
//Task#2
alert("Error! Please enter a valid password.");
//Task#3
alert("Welcome to JS Land...\nHapping Coding!");
//Task#4
alert("Welcome to JS Land...");
alert("Happing Coding!\nPrevent this page from creating additional dialogs");
//Task#5
console.log("Hello...I can run JS through my web browser's console");





// Chapter#2
// Task#1
var userName ="maira";
// Task#2
var myName;
myName ="LAIBA KANWAL";
// Task#3
//(a)
var x ;
//(b)
x="Hello World"
//(c)
alert(x);
// Task#4
var g;
g="Jhone Doe";
alert(g);
var u;
u= "15 years old";
alert(u);
var i;
i ="Certified Mobile Application Development";
alert(i);
// Task#5
var a="PIZZA\nPIZZ\nPIZ\nPI\nP";
 alert(a);
// Task#6
var email="kanwallaiba@gmail.com";
var myWords="MY email address is ";
alert(myWords+ email);
// Task#7
var book="A smarter way to learn JavaScript";
var own="I am trying to learn from the book \n ";
alert(own+book);
// Task#8
document.write("Yah!I can write HTML content through javascript<br>");
// Task#9
var design ="“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”" ;
alert(design);





// Chapter#3
// Task#1
var age="I am 15 years old";
alert(age);
// Task#2
var counter="You have visited this site 14 times. "
alert(counter);
// Task#3
var birthYear= "My birth year is 1990\nData type of my declared variable is number<br>";
document.write(birthYear);  
// Task#4
//(a)
var name="John Doe";
//(c)
var ordered="ordered 5 T-shirts"
//(b)
var title="on Daraz Clothing Store"
document.write(name+ ordered+title);
document.write("<br><br>");




// Chapter#4
// Task#1
let home,world,toys;
// Task#2
//legal
var $,_,letters,numbers,camelcase;
//legal
var questionmark, percentage, startwithnumbers, $_, nousecamelcase;
// Task#3
//(a)
document.write("Rules for naming JS variables<br><br><br><br><br><br>");
//(b)
document.write("Variable names can only contain. numbers,$,_,letters.For example:$my,_1stVariable<br>");
//(C)
document.write("Variable must begin with a letter;_,$.For example:$name._name or name<br> ");
//(d)
document.write("Variable name is case sensitive<br>");
//(e)
document.write("Variable names should not be JS Keywords<br><br>");








// Chapter#5
// Task#1
var e=3;
var f=5;
var l=e+f;
var sum="Sum of 3 and 5 is ";
alert(sum+ l);
// Task#2
var e=5;
var f=3;
var l=e-f;
var sum="5 subtract 3 is ";
alert(sum+l);

var e=5;
var f=3;
var l=e*f;
var sum="5 multiply by 3 is ";
alert(sum+l);

var e=20;
var f=2;
var l=e/f;
var sum="20 divided 2 is ";
alert(sum+l);

var e=5;
var f=2;
var l=e%f;
var sum="5 modulus by 2 is ";
alert(sum+l);

// Task#3
//(a)
var t;
document.write(t);
document.write("<br>");
//(b)
t=20;
var sum="Value after variable declaration is: ";
document.write(sum+t);
document.write("<br>");
//(c)
var y=50;
//(d)
var sum="Initial value is: ";
document.write(sum+y);
document.write("<br>");
//(e)
var z=++y;
//(f)
var sum="Value after increment is: ";
document.write(sum+z);
document.write("<br>");
//(g)
var w=z+7;
//(h)
var sum="Value after addition is: ";
document.write(sum+w);
document.write("<br>");
//(i)
var z=--w;
//(j)
var sum="Value after decrement is: ";
document.write(sum+z);
document.write("<br>");
//(k)
var c=z/3;
var sum="The remainder is: ";
document.write(sum+c);
document.write("<br>");

// Task#4
var ticket=600;
var c=ticket*5;
var sum="Total cost to buy 5 tickets to a movie is ";
document.write(sum+c);
document.write("PKR");
document.write("<br><br><br>");

// Task#5
document.write("Table of 5 <br/><br/>");
var table=prompt("Enter table number");
for(var a=1;a<=10;a++)
{
    document.write(table + "*" + a + "=" + (a*table) + "<br/>")
}
document.write("<br><br>");

// Task#6
//(a)
var Ctemperature=40;
//(b)
var F=(Ctemperature*9/5)+32;
document.write(40 + "C" + " is" + F + " F");
document.write("<br>");
//(c)
var Ftemperture=70;
//(d)
var C=(Ftemperture-32)*5/9;
document.write(70 + "F" + " is" + C + " C");
document.write("<br><br>");

// Task#7
document.write("Shopping Cart")
document.write("<br><br>");
//(a)
var price=" Price of item 1 ";
document.write(price + "is" + 650);
document.write("<br>");
//(b)
var price=" Price of item 2 ";
document.write(price + "is" + 100);
document.write("<br>");
//(c)
var ordered="quantity of item 1 ";
document.write(ordered + "is" + 3);
document.write("<br>");
//(d)
var ordered="quantity of item 2 ";
document.write(ordered + "is" + 7);
document.write("<br>");
//(e)
var charges="Shipping charges ";
document.write(charges +  100);
document.write("<br><br>");

document.write("Total cost of your order is 2750")
document.write("<br><br>");

// Task#8
document.write("Marks Sheet ");
document.write("<br><br>");
var total =980;
var obtained=804
var per=obtained/total*100;
document.write("Total marks: " + total);
document.write("<br>");

document.write(" Marks obtained: " + obtained);
document.write("<br>");

document.write("Percentage: " + per + "%");
document.write("<br><br>");

// Task#9
document.write("Currency in PKR");
document.write("<br><br>");
var Tcurrency=(104.80*10)+(28*25);
document.write("Total currency in PKR: " + Tcurrency);
document.write("<br><br>");

// Task#10
var number=10;
//(a)
var no=number+5;
alert("Addition: " + no);
//(b)
var no=number*10;
alert("Multiplication: " + no);
//(c)
var no=number/2;
alert("Division: " + no);


// Task#11
document.write("Age Calculator");
document.write("<br><br>");
//(a)
var currentY=2020;
//(b)
var birthY=2002;
//(c)
var age=18;
document.write("Current year: " + currentY + "<br>" + "Birth year: " + birthY +
"<br>" + "Your age is:  " +  age + "<br><br>");

// Task#12
document.write("The Geometrizer")
document.write("<br><br>");
//(a)
var radius=20;
document.write("Radius of a circle: " + radius);
document.write("<br>");
//(b)
var circumference=2*3.142*radius;
document.write("The circumference is: " + circumference);
document.write("<br>");

var Area=3.142*radius*2;
document.write("The area is: " + Area);
document.write("<br>");

// Task#13
document.write("The Lifetime Supply Calculator");
document.write("<br><br>");
//(a)
var snack="Icecream";
document.write(" Favorite snack: " + snack + "<br>");
//(b)
var Cage=19;
document.write(" Current age: " + Cage + "<br>");
//(c)
var Mage=65;
document.write(" Estimated Maximum  Age: " + Mage + "<br>");
//(d)
var Eamount=4
document.write("Amount of snacks per day: " + Eamount + "<br>");
//(e)
document.write("You will need 200 icecream to last you until the ripe old age of 65" 
+ "<br><br>")







//Chapters#6-9
//Task#1
var aa=20;
document.write("Result:" + "<br>" + "The value of aa is: " + aa + "<br>" + "<hr>");
var bb=aa;
document.write("The value of ++aa is: " + ++bb + "<br>" + "Now the value of aa is: " + bb + "<br><br>");
var b =bb;
document.write("The value of aa++ is: " + b++ + "<br>" + "Now the value of aa is: " + b + "<br><br>");
var a =b;
document.write("The value of --a is: " + --a + "<br>" + "Now the value of a is: " + a + "<br><br>");
var c =a;
document.write("The value of a-- is: " + c-- + "<br>" + "Now the value of a is: " + c + "<br><br>");

//Task#2
var a=2;
var b=1;
var result = --a - --b + ++b + b--; 
document.write(--a + "<br>");
document.write(--a - --b + "<br>");
document.write(--a - --b + ++b + "<br>");
document.write(--a - --b + ++b + b-- + "<br>");
document.write("a is: " + 2 + "<br>");
document.write("b is: " + 1 + "<br>");
document.write("The result is: " + result + "<br>");
 
//Task#3
var greet="Asalam-o-Alikum";
alert(greet);
var userName=prompt("Enter user name");
alert(userName);

//Task#5
var no=prompt("Enter a number");
alert(no);
for(var a=1;a<=10;a++)
{
    document.write(no + "*" + a + "=" + (a*no) + "<br/>")
}
document.write("<br><br>");
for(var a=1;a<=10;a++)
{
    document.write(5 + "*" + a + "=" + (a*5) + "<br/>")
}
document.write("<br><br>");
//Task#6
//(a)
var SubName=prompt("Enter subject name");
alert(SubName);
var SuName=prompt("Enter another subject name");
alert(SuName);
var SName=prompt("Enter subject name");
alert(SName);
//(b)
var TmarksES=100;
//(c)
var OmarksFS=prompt("Enter first subject obtained marks");
alert(OmarksFS);
//(d)
var OmarksRS=prompt("Enter remaining 2 subject obtained marks");
alert(OmarksRS);
//(e)
document.write("Subject Total Marks Obtained Marks Percentage <br><br>");
 document.write(SubName + "\n" + TmarksES + "\n" + OmarksFS + "\n" 
 + OmarksFS/TmarksES*100 + "%" + "<br/>");
 document.write(SuName + "\n" + TmarksES + "\n" + OmarksRS + "\n" 
 + OmarksRS/TmarksES*100 + "%" + "<br/>");
 document.write(SName + "\n" + TmarksES + "\n" + OmarksRS + "\n" 
 +  OmarksRS/TmarksES*100 + "%" + "<br/>");
 var Tobtmarks=OmarksFS+=OmarksRS;
document.write(300 + "\n" + Tobtmarks + "\n" +  Tobtmarks/300*100 + "%" + "<br>");









//Chapters#9-11
//Task#1
var ciName = prompt("Enter city name");
if(ciName == "Karachi"){
    alert("“Welcome to city of lights”");
}
else
{
    alert("“Welcome to another city”");
}

//Task#2
var gender = prompt("Enter your gender");
if(gender == "male"){
    alert("Good Morning Sir");
}
else{
    alert("Good Morning Ma'am");
}
//Task#3
document.write("Signal Color" +  "Message" + "<br>");
var  Scolor = prompt("Enter color of  traffic signal ");
var  Sicolor = prompt("Enter color of next traffic signal ");
var  Sincolor = prompt("Enter color of  traffic signal ");
document.write(Scolor + "Must Stop " + "<br>");
document.write(Sicolor + " Ready to move " + "<br>");
document.write(Sincolor + "Move now  " + "<br>");

//Task#4
var fuel = prompt("Enter remaining fuel in car ");
if(fuel<0.25){
    alert("“Please refill the fuel in your car” ");
}
else{
    alert("your fuel is full");
}

//Task#5
//(a)
 var a = 4; 
if (++a === 5){
     alert("given condition for variable a is true");
     } 
//(b)
var b = 82;
 if (b++ === 83){
      alert("given condition for variable b is true"); 
    } 
//(c)
var c = 12;
 if (c++ === 13){
      alert("condition 1 is true");
     } if (c === 13)
     { alert("condition 2 is true");
     } if (++c < 14)
     { alert("condition 3 is true");
     } if(c === 14)
     { alert("condition 4 is true"); } 
 
//(d)
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost; 
  if (totalCost === laborCost + materialCost){
       alert("The cost equals");
     } 
 
//(e)
if (true){
     alert("True"); } 
     if (false){
          alert("False");
         }   
//(f)
if("car" < "cat"){
     alert("car is smaller than cat"); } 
  

//Task#6
var EngMarks = prompt("Enter English Marks Obtained");
var UrduMarks = prompt("Enter Urdu Marks Obtained");
var MathMarks = prompt("Enter Maths Marks Obtained");
var TMarks = prompt("Enter Total Marks");
var tmarksobt = EngMarks+UrduMarks+MathMarks;
alert(tmarksobt);
var per = EngMarks+UrduMarks+MathMarks/TMarks;
alert("Percentage: " + per);
if(per>=80 && per<=100){
    alert("Grade: " + A-one + "<br>" + "Remarks: Excellent");
}
if(per>=70 && per<=80){
    alert("Grade: " + A + "<br>" + "Remarks: Good");
}
if(per>=60 && per<=70){
    alert("Grade: " + B + "<br>" + "Remarks: You need to improve");
}
else if(per<60 && per<=0){
      alert("Fail" + "<br>" + "Remarks: Sorry");
}

document.write("Marks Sheet: <br><br>");
document.write("Total marks: " + TMarks + "<br>");
document.write("Marks Obtained: " + tmarksobt  + "<br>");
document.write("Percentage: " + per + "%"+ "<br>");
document.write("Grade: " + "B" + "<br>");
document.write("Remarks: " + "You need to improve" + "<br><br><br>");

//Task#7
var guessno =5;
var guessno = prompt(" guess the secret number. ");
//(a)
if(guessno == 5){
    alert("“Bingo! Correct answer”. ")
}
//(b)
else if(guessno == 6){
    alert("“Close enough to the correct answer”. ")
}


//Task#8
var checkno = prompt("Enter a number") ;
if(checkno/3){
    alert("Number is divisible by 3");
}
else{
    alert("Number is not divisible by 3");
}

//Task#9
var number = prompt("Enter a number");
if(number/2){

    alert("Its even no");
}
else{
    alert("Its odd no");
}

//Task#10
var Temperature = prompt("Enter a temperture");
//(a)
if(Temperature>40){
    alert("“It is too hot outside.” ");
}
//(b)
else if(Temperature>30){
    alert("  “The Weather today is Normal.” ");
}
//(c)
 else if(Temperature>20){
    alert("“Today’s Weather is cool.” ");
}
//(d)
else if(Temperature>10){
    alert("“OMG! Today’s weather is so Cool.” ");
}


//Task#11
var firstNO = prompt("Enter first no");
var operator =  prompt("Enter opertor");
var secondNO = prompt("Enter second no");

if(operator === "*"){
        alert(firstNO*secondNO);
}
else if(operator === "/"){
    alert(firstNO/secondNO);
}
else if(operator === "%"){
    alert(firstNO%secondNO);
}
else if(operator === "+"){
    alert((+firstNO)+(+secondNO));
}
else if(operator === "-"){
    alert(firstNO-secondNO);
}








// Chapters#12-13
// Task#1
var name = "MAIRA";
name = name.toLowerCase();
console.log(name);

// Task#2
var aa = prompt("Enter a no");
var bb = prompt("Enter another no");
if (aa > 0 && bb > 0 && aa > bb) {
    document.write("The larger number is " + aa );
  } else if (aa > 0 && bb > 0 && aa < bb) {
    document.write("The larger number is " + bb);
  } else if (aa === bb && aa > 0 && bb > 0) {
    document.write("Both numbers are equal!")
  } else {
      document.write("Please add an integer!" + "<br></br>");

  }

// Task#3
var num = prompt("Enter a number");
if(num > 0){
    alert("The number is positive");
}  
else if(num < 0){
    alert("The number is negative");
} 
else if(num == 0){
    alert("The number is Zero");
}  

// Task#4
var string = prompt("Enter a word");
if(string ===  "vowels"){
    alert("True");
}
else{
    alert("False"); 
}

// Task#5
//(a)
var password = "manocat123";
//(b)
var Cpassword = prompt("Enter your password");
//(c)i
if(Cpassword == null){
     alert(" “ Please enter your password” ");
}
//ii
else if(Cpassword == password){
    alert(" “Correct! The password you entered matches the original password”"); 
}
else{
    alert("“Incorrect password”");
}


// Task#6
 var hour = 13;
  if (hour < 18) {
     alert ( "Good day");
    }
    else {
        alert("Good evening"); 
    } 
 
 // Task#7
 var time = prompt("Enter a time");
 alert("Time: " + time);
 if(time>=0000 && time<1200){
     alert("Good morning");
 }
 if(time>=1200 && time<1700){
    alert("Good afternoon!");
}
if(time>=1700 && time<2100){
    alert("Good evening!");
}
if(time>=2100 && time<2359){
    alert("Good night!");
}









//Chapters#14-16
//Task#1
var arr = []

//Task#2
var object = []
//Task#3
var name = ["mango","apple","banana"]
//Task#4
var number = [12,5,7,80]
//Task#5
var myArr = [];
var value = 2;
//Task#6
var mixarr = ["world",123,"wander land",200]
//Task#7
// var education = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"]
// document.write(" Qualifications: " + "<br>");
// document.write("1) " +  education[0] + "<br>","2) " + education[1] + "<br>","3) " + 
// education[2] + "<br>","4) " + education[3] + "<br>","5) " + education[4] + "<br>"
// ,"6) " + education[5] + "<br>","7) " + education[6] + "<br>","8) " + education[7] + "<br>");

//Task#8
// var Name = ["Michael","John","Tony"]
// var score = [320, 400,250]
// document.write("Score of michael is:" + score[0] + "." + "Percentage:" + score[0]/500*100 + "%" + "<br>");
// document.write("Score of John is:" + score[1] + "." + "Percentage:" + score[1]/500*100 + "%" + "<br>");
// document.write("Score of Tony is:" + score[2] + "." + "Percentage:" + score[2]/500*100 + "%" + "<br>");

//Task#9
// var colorsName = ["Blue","red","green","orange"] 
// document.write(colorsName);
//(a)
// var usercolor = prompt("Enter your color to add beginning of arry");
// colorsName.shift(usercolor)
// document.write(colorsName);
//(b)
// var usercolor = prompt("Enter your color to add end of arry");
// colorsName.push(usercolor)
// document.write(colorsName);
//(c)
// colorsName.push("grey","black")
// document.write(colorsName);
//(d)
// colorsName.shift()
// document.write(colorsName);
//(e)
// colorsName.pop()
// document.write(colorsName);
//(f)
// var usercolor = prompt("Enter your color and index no to add");
// colorsName.splice(usercolor)
// document.write(colorsName);
//(g)
// var usercolor = prompt("Enter your color and index no to delete");
// colorsName.splice(usercolor)
// document.write(colorsName);



//Task#10
var Studscore = [56,80,70,44,36]
Studscore.sort();
alert(Studscore);


//Task#11
var citiesName = ["karachi","lahore","islamabad","punjab"]
document.write("Citiesnames:" + " " + citiesName + "<br>");
var selectednam = citiesName.slice(0,3)
document.write(" Selected citiesnames:" + " " + selectednam + "<br>");

//Task#12
var arr = ["This",  "is",  "my ", "cat"]; 

var joinarr = arr.join();
document.write(joinarr + "<br>");

//Task#13
var compsystem = ["Keyboard","mouse","monitor","printer"]
document.write("Devices:" + "<br>" + compsystem + "<br><br>" );
document.write("Out:" + "<br>" + compsystem[0] + "<br>");
document.write("Out:" + "<br>" + compsystem[1] + "<br>");
document.write("Out:" + "<br>" + compsystem[2] + "<br>");
document.write("Out:" + "<br>" + compsystem[3] + "<br>");

//Task#14
var compsystem = ["Keyboard","mouse","monitor","printer"]
document.write("Devices:" + "<br>" + compsystem + "<br><br>" );
document.write("Out:" + "<br>" + compsystem[3] + "<br>");
document.write("Out:" + "<br>" + compsystem[2] + "<br>");
document.write("Out:" + "<br>" + compsystem[1] + "<br>");
document.write("Out:" + "<br>" + compsystem[0] + "<br>");

//Task#15
var phoneManfac = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"]
document.write("<select>");
for(var i=0; i<phoneManfac.length; i++){
    document.write("<option>" + phoneManfac[i] + "</option>");
}
document.write("</select>" + "<br><br>");









//Chapters#17-20
//Task#1
var arr = [[],[],[]]

//Task#2
var arr = [[0 ,1 ,2 ,3],[1,0,1,2],[2,1,0,1]]
for(var i=0; i<arr.length; i++){
    document.write(arr[i] + "<br>");
}

//Task#3
var arr1 = [1,2,3,4,5,6,7,8,9,10]
for(var i=0; i<arr1.length; i++){
    document.write(arr1[i] + "<br>");
}

//Task#4
var no=prompt("Enter a table number");

for(var a=1;a<=15;a++)
{
    document.write(no + "*" + a + "=" + (a*no) + "<br/>")
}
document.write("<br>");

//Task#5
var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
for(var i=0; i<fruits.length; i++){
      document.write(fruits[i] + "<br><br>");
} 

//Task#6
document.write("Counting:" + "<br>");
var arr = [1,2,3,4,5,6,78,9,10,11,12,13,14,15,]
document.write(arr + "<br>");

document.write("Reverse counting:" + "<br>");
var arr1 = [10,9,8,7,6,5,4,3,2,1,]
document.write(arr1 + "<br>");

document.write("Even:" + "<br>");
var arr2 = [0,2,4,,6,8,10,12,14,16,18,20,]
document.write(arr2 + "<br>");

document.write("Odd:" + "<br>");
var arr3 = [1,3,5,7,9,11,13,15,17,19,]
document.write(arr3 + "<br>");

document.write("Series:" + "<br>");
var arr4 = ["2K","4K","6K","8K","10K","12K","14K","16K","18K","20K",]
document.write(arr4 + "<br>");

//Task#7
var items = ["cake","apple pie","cookie","chips","patties"];
var search = prompt("Enter your search value");

if(items.indexOf(search) !== -1){
    alert("Yes" + " " + search + "is available" );
}
else{
    alert("No" + " " + search + "is not available" );
}

//Task#8
var largerno = [24,53,78,91,12]
if(largerno ==4){
    alert("Larger number is: " + 91 + "<br>");
}

//Task#9
// var smallerno = [24,53,78,91,12]
// if(smallerno>24){
//     alert("Smaller number is: " + " " + 12 + "<br>");
// }

//Task#10
for(var i=1; i<=20; i++){
    document.write(i*5 + ",");
}