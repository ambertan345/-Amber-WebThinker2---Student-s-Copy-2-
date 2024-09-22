// const calculateBMI = (weight,height) => {
// 	const BMI = weight / (height**2);
// 	return BMI;
// };

const adam = calculateBMI(85,1.8);
const mary = calculateBMI(54,1.6);
const cecilia = calculateBMI(75,1.7);

console.log("BMI of adam:" + adam);
console.log("BMI of mary:" + mary);
console.log("BMI of cecilia:" + cecilia);


// const onCalcBMIPress = () => {
// 	let height = document.getElementById('height-m').value;
// 	let weight = document.getElementById('weight-m').value;
// 	let BMI = calculateBMI(weight,height);
// 	document.getElementById('results').innerHTML = 'Your BMI is ' + BMI;
// };

const calculateBMI = (weight,height) => {
	const BMI = weight / (height**2);
	return BMI;
};


const onCalcBMIPress = () => {
	let height = $('#height-m').val();
	let weight = $('#weight-m').val();
	let BMI = calculateBMI(weight,height);
	$('#results').removeclass = 'bg-danger bg-success bg-warning';

	$('#results').html(' ');

	$('#results').append("<p> Your BMI is: " + BMI.toFixed(1) + '</p>');
	if BMI < 18.5{
		$('#results').append('<p class = "mb-0" > Hello Skinny, eat more to grow well! </p>')
		$('results')
	}
	$('#results').append('<p class = "mb-0" > Hello Skinny, eat more to grow well! </p>')







	
};

