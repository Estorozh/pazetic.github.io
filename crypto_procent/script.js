let text;
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
	text = "валативность валюты: "+Math.round(vale)+"%<br><br>Стоимость покупки: "+buy+"<br>Стоимость продажи: "+sale+
	"<br><br>Нынешняя стоимость выше на: "+Math.round((now-buy)/(buy/100))+"%";

	if (now<buy) {
		 document.getElementsByClassName("succesful")[0].innerHTML=
		text+'<br><br><span style="font-weight:bold; color:green;">МОЖНО ПОКУПАТЬ</span>';
	} else {
		 document.getElementsByClassName("succesful")[0].innerHTML=
		text+'<br><br><span style="font-weight:bold; color:red;">ПРОДАВАТЬ</span>';
	}
}

