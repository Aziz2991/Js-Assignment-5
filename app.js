// // Chapter Array
// // Quest 01
// let studentName = [];
// console.log(studentName)
// // Quest 02
// let students = {
//     names:[]
// }
// console.log(students);
// // Quest 03
// let fruits = ['apple','mangoes','bananas','grapes','guava'];
// console.log(fruits)
// // Quest o4
// let rollNumbers = [453543,77899,99978978,43523,8593,583957,8766989,788999];
// console.log(rollNumbers);
// // Quest 05
// let booleanArray = [true,false,true,false];
// console.log(booleanArray)

// // Quest 06
// let mixedArray = ['fruits','karachi',76855,'ladyfinger',false,'hockey','marks'];
// console.log(mixedArray)

// // Quest 07
// let educationDegrees = ['SSC','HSC','BCS','BS','BCOM','MS','M.Phil','PhD']
// console.log(educationDegrees)
// document.write('<h2> Qualifications:</h2>')
// document.write('<ol>');
// document.write(`<li>${educationDegrees}</li>`

// )
// document.write('</ol>')

// // Quest 08



// // Quest 09
// let colorNames = ['red','green','blue','pink','yellow','skyblue'
// ]
// document.write('<h2>ColorNames</h2>')
// document.write(`${colorNames}<br>`)
// // a
// let colorStart = prompt('Enter color you like')
// colorNames.unshift(colorStart)


// document.write("<h2>After adding to Beginning:</h2>" + colorNames.join(",") + "<br>")
// // b
// let colorEnd = prompt('Enter a color to add at the end:');
// colorNames.push(colorEnd);
// document.write('<h2>After adding to End:</h2>' + colorNames.join(",")+ "<br>")

// // c
// colorNames.unshift('pink','orange')
// document.write('<h2>After adding two more colors to Beginnig:</h2>' + colorNames.join(',') + '<br>')

// // d Remove first color
// let color = ['orange','blue','red','green']
// document.write('<h1> Initial colors:</h1>' + color.join(',') + "<br>")
// let removeFirst = prompt('Enter the name of first color for remove')
// color.shift(removeFirst);
// document.write('<h1>After removing first color:</h1>' + color.join('*') + '<br>')
// e Delete last color
// var colors = ['pink','blue','green','red']
// document.write('<h1>Basic colors</h1>' + colors.join('-') + '<br>')
// var removeLast = prompt('Enter the last color name for remove')
// colors.pop(removeLast)
// document.write('<h1>After romving last color</h1>' + colors + '<br>')

// f
// var colors = ['pink','blue','green','red']
// document.write('<h2>Initial colors:</h2>' + colors + '<br>')
// var addColor = prompt('Enter the index where you want to add a color');
// var colorName = prompt('Enter color name')
// colors.splice(addColor,0,colorName)
// document.write('<h2> After updating array:</h2>' + colors + '<br>')
// g
// var colors = ['white','black','red','green','orange']
// document.write('<h2>Basic color</h2>' + colors + '<br>');
// var indexDelete = prompt('Enter the index number where you want to delete color');
// var colorDelet = prompt('How many colors  you want  to delete');
// colors.splice(indexDelete,colorDelet);
// document.write('<h3>After deleting colors</h3>' + colors + '<br>')
// Question no 10

// let studentScores = [320,230,480,120]
// document.write('<h2>Scores of Students:</h2>' + studentScores.join(",")+ "<br>")
// studentScores.sort((a,b) => a - b);
// document.write('<h2>Ordered Scores of Students:</h2>' + studentScores + '<br>')

// Quest 11
// var cityName = ['karachi','rawalpindi','islamabad','quetta','mianwali'];
// document.write('<h3>Cities list:</h3>' + cityName.join(',') + '<br>');

// var newArray = cityName.slice(1,4)
// console.log(newArray)
// document.write('<h2>Selected cities list:</h2>' + newArray.join(',') + '<br>')


// Quest 12
var arr = ['This','is','my','cat'];
document.write('<h1>Arrays:</h1>' + arr.join(',') + '<br>');
document.write('<h1>String:</h1>' + arr.join(' ') + '<br>')

var arr = ['This','is','my','cat'];
document.write('<h1>Arrays:</h1>' + arr.join(',') + '<br>');
var sentence = arr.join(' ');
document.write('<h2>String:</h2>' + sentence + '<br>')

// Quest 13
var devices = ['keyboard','mouse','printer','monitor'];
document.write('<h2>Devices:</h2>' + devices.join(',') + '<br><br>')
 while(devices.length > 0){var removeDevice = devices.shift();
    document.write('Out:'+removeDevice + '<br>')
 }

//  Q 15
var phoneManufacturers = ['Apple','Samsung','Motorola','Nokia','Sony','Haier']
document.write('<h2>Phone Manufacturers</h2>')
document.write('<select>');
for(var i = 0; i < phoneManufacturers.length; i ++){document.write('<option>' + phoneManufacturers[i] +  '</option>')}
document.write('</select>')