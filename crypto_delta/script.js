


function analyz () {
	let start = +document.getElementsByClassName("start")[0].value, 
	finish = +document.getElementsByClassName("finish")[0].value;
//посчитать процент прибыли
	let size = +document.getElementsByClassName("size")[0].value;
	let plus = ((finish-((finish/1000)*2)-start+((start/1000)*2))*size).toFixed(2),
	procent = ((plus/(start/100))/size).toFixed(2);

	//покупать или нет
	let text = "плюс в рублях: <b>"+plus+" рублей </b> <br>плюс в процентах: <b>"+procent+" %</b> ";
	document.getElementsByClassName("succesful")[0].innerHTML = text;
}