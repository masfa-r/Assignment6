// ASSIGNMENT NUMBER 6

// CHAPTER 21-25 
// TASK # 01
// var firstName = prompt("Please enter your First name");
// var lastName = prompt("Please enter your last name");
// var fullName = firstName + " " + lastName;
// alert("Hi " + fullName + ", Welcome to our website!");

// TASK # 02
// var mobileModel = prompt("Enter your favorite mobile phone model");
// var length = mobileModel.length;
// document.write("My favorite phone is: " + mobileModel + "<br> Length of string: " + length);

// TASK # 03
// var string = "Pakistani";
// var index = string.indexOf('n');
// document.write("String: " + string + "<br> Index of 'n': " + index);

// TASK # 04
// var string = "Hello World";
// var index = string.lastIndexOf('l');
// document.write("String: " + string + "<br> Index of 'l': " + index);

// TASK # 05
// var string = "Pakistani";
// var index = string.charAt(3);
// document.write("String: " + string + "<br> Character at Index 3: " + index);

// TASK # 06
// var firstName = prompt("Please enter your First name");
// var lastName = prompt("Please enter your last name");
// var fullName = firstName.concat(" ",lastName);
// alert("Hi " + fullName + ", Welcome to our website!");

// TASK # 07
// var word = "Hyderabad";
// var replaceword = word.replace("Hyder","Islam");
// document.write("City: " + word + "<br> After replacement: " + replaceword);

// TASK # 08
// var message = "Ali and Sami are best friends. They play cricket and football together";
// var change_message = message.replace(/and/g, "&");
// document.write(change_message);

// TASK # 09
// var a = "471";
// var b = +a;
// document.write("Value: " + a + "<br> Type: " + typeof a);
// document.write("<br>Value: " + b + "<br> Type: " + typeof b);

// TASK # 10
// var input = prompt("Enter any word to convert it to capital letters");
// document.write("User input: " + input + "<br> Convert input: " + input.toUpperCase());

// TASK # 11
// var input = prompt("Enter any word to convert to title case");
// var convert_input = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
// document.write("User input: " + input + "<br> Converted: " + convert_input);

// TASK # 12
// var num = 35.36;
// var str = num.toString();
// var a = str.replace('.','');
// document.write("Number: " + num + "<br> Result: " + a);


// TASK # 14
// var arr = ["cake","apple pie","cookie","chips","patties"];
// var bakery = prompt("Enter your bakery items");
// bakery = bakery.toLowerCase();
// var bakeryItems = arr.indexOf(bakery);
// if(arr.indexOf(bakery) !=-1)
// {
//     alert(bakery + " is available at index " + bakeryItems + " in our bakery");
// }
// else{
//     alert(bakery + " is not available in our bakery");
// }


// TASK # 16
// var university = "University of Karachi";
// var a = university.split('');
// for(var i=0; i<a.length; i++)
// {
//     document.write(a[i]+"<br>");
// }

// TASK # 17
// var user = prompt("Enter name");
// document.write("User Input : " + user + "<br>");
// var last = user.charAt(user.length-1);
// document.write("Last character of input : " + last);

// TASK # 18
// var text = "The quick brown fox jumps over the lazy dog";
// document.write("Text : "+text+"<br>");
// var convert = text.toLowerCase();
// var count = convert.match(/the/g).length;
// document.write("There are " +count+ " occurrence(s) of word 'the'" );

// CHAPTER 26-30

// TASK # 01
// var num = +prompt("Enter a postive number");
// document.write("number: " + num +"<br>");
// var round = Math.round(num);
// document.write("round off value: "+ round + "<br>");
// var floor = Math.floor(num);
// document.write("floor value: " +floor+ "<br>");
// var ceil = Math.ceil(num);
// document.write("ceil value: " +ceil );

// TASK # 02
// var num = +prompt("Enter a negative floating number");
// document.write("number: " + num +"<br>");
// var round = Math.round(num);
// document.write("round off value: "+ round + "<br>");
// var floor = Math.floor(num);
// document.write("floor value: " +floor+ "<br>");
// var ceil = Math.ceil(num);
// document.write("ceil value: " +ceil );


// TASK # 03
// var value = +prompt("Enter the absolute value");
// var value1 = Math.abs(value);
// document.write("The absolute value of " + value + " is "+value1);


// TASK # 04
// var diceRoll = Math.floor( Math.random() * 6 ) +1;
// document.write('You rolled value: ' + diceRoll);

// TASK # 05
// var head = 1;
// var tail = 2;

// var toss = Math.random() * 2;
// var floor = Math.floor(toss)
// if(floor === 0){
//     document.write("0 <br> Random Coin Value: Head")
// } else if(floor === 1)
// {
//     document.write("1 <br> Random Coin Value: Tails")
// }

// TASK # 06
// var num =Math.floor(Math.random()*100);
// document.write("random number between 1 and 100: "+num);

// CHAPTER 31-34

// TASK # 01
// var a = new Date();
// document.write(a);

//TASK # 02
// var monthNames = ["January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"];
// var d = new Date();
// document.write("The current month is " + monthNames[d.getMonth()]);

//TASK # 03
// var a = new Date();
// var b = a.toString();
// var c = b.slice(0,3);
// alert("Today is " +c);

// TASK # 04
// var a = new Date();
// if( a === "Sat" || a === "Sun")
// {
//     alert("It's Fun day");
// }
// else{
//     alert("It's not a Fun day")
// }

// TASK # 05
// var a = new Date();
// if(a === (1<=15))
// {
//     alert("First fifteen days of the month");

// }
// else{
//     alert("Last days of the month");
// }