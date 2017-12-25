let min = +prompt("введи минимальное значени: ", 0), 
	max = +prompt("введи максимальное значение",1);
let av = (max+min)/2,//среднее значение
	vale = (max/(min/100))-100;//валативность валюты
let buy, sale;
if (vale<30) { 
	buy = av-(av/100)*2,//стоимость покупки 
	sale = av+(av/100)*2;//стоимость продажи
} else {
	buy = av - (av/100)*10;
	sale = av + (av/100)*10;
}

let now = +prompt("сейчас стоимость: ", 0);
//покупать или нет
let text = "минимум стоимости: "+min+"<br>максимум стоимости: "+max+
	"<br><br>валативность валюты: "+Math.round(vale)+"%<br><br>Стоимость покупки: "+buy+"<br>Стоимость продажи: "+sale+
	"<br><br>Нынешняя стоимость выше на: "+Math.round((now-buy)/(buy/100))+"%";
if (now<buy) {
	document.write(text+'<br><br><span style="font-weight:bold; color:green;">МОЖНО ПОКУПАТЬ</span>');
} else {
	document.write(text+'<br><br><span style="font-weight:bold; color:red;"> ВЫШЕ СРЕДНЕГО</span>');
}

