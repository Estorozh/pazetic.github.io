// let min = +prompt("введи минимальное значени: ", 0), 
// 	max = +prompt("введи максимальное значение",1);
// let av = (max+min)/2,//среднее значение
// 	vale = (max/(min/100))-100;//валативность валюты
// let buy, sale;
// if (vale<30) { 
// 	buy = av-(av/100)*0,2,//стоимость покупки 
// 	sale = av+(av/100)*2;//стоимость продажи
// } else {
// 	buy = av - (av/100)*10;
// 	sale = av + (av/100)*10;
// }

// let now = +prompt("сейчас стоимость: ", 0);
// //покупать или нет
// let text = "минимум стоимости: "+min+"<br>максимум стоимости: "+max+
// 	"<br><br>валативность валюты: "+Math.round(vale)+"%<br><br>Стоимость покупки: "+buy+"<br>Стоимость продажи: "+sale+
// 	"<br><br>Нынешняя стоимость выше на: "+Math.round((now-buy)/(buy/100))+"%";
// if (now<buy) {
// 	document.write(text+'<br><br><span style="font-weight:bold; color:green;">МОЖНО ПОКУПАТЬ</span>');
// } else {
// 	document.write(text+'<br><br><span style="font-weight:bold; color:red;"> ВЫШЕ СРЕДНЕГО</span>');
// }



function analyz () {
	let min = +document.getElementsByClassName("min")[0].value, max = +document.getElementsByClassName("max")[0].value,
	percent = +document.getElementsByClassName("percent")[0].value,
	percentMax = +document.getElementsByClassName("percentMax")[0].value,
	now = +document.getElementsByClassName("now")[0].value;

	let av = +(max+min)/2,//среднее значение
	vale = (max/(min/100))-100;//валативность валюты
	let buy, sale;
	buy = av-(av/100)*percent,//стоимость покупки 
	sale = av+(av/100)*percentMax;//стоимость продажи
	//покупать или нет
	console.dir(now);
	let text = "валативность валюты: "+Math.round(vale)+"%<br><br>Стоимость покупки: "+buy+"<br>Стоимость продажи: "+sale+
	"<br><br>Нынешняя стоимость выше на: "+Math.round((now-buy)/(buy/100))+"%";
	if (now<buy) {
		document.getElementsByClassName("succesful")[0].innerHTML=
		text+'<br><br><span style="font-weight:bold; color:green;">МОЖНО ПОКУПАТЬ</span>';
	} else {
		document.getElementsByClassName("succesful")[0].innerHTML=
		text+'<br><br><span style="font-weight:bold; color:red;">ПРОДАВАТЬ</span>';
	}
}