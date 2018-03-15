let ie = [1];
console.log (ie.includes(1));
if (!ie.includes(1))
	alert('Просьба использовать браузеры Chrome, Firefox, Safari, Opera');

const line = document.getElementById('line'),
	link1 = document.getElementsByClassName('link1')[0],
	link2 = document.getElementsByClassName('link2')[0],
	link3 = document.getElementsByClassName('link3')[0],
	link4 = document.getElementsByClassName('link4')[0], 
	footer = document.getElementsByClassName('main-bottom')[0],
	head = document.getElementsByClassName('main-top')[0];
let activePage=true; //в переменную page будем сохранять ту страницу, которая активна
var img = [];
img[0] = document.getElementsByClassName('img0')[0];
img[1] = document.getElementsByClassName('img1')[0];
img[2] = document.getElementsByClassName('img2')[0];
img[3] = document.getElementsByClassName('img3')[0];
let activeMenu = (e) => {
	if (!e.target.classList.contains('active')) {
		let num;
		//найти и удалить там где находятся те классы
		for (let i=0; i < line.children.length; i++) {
			if (line.children[i].classList.contains("active") && line.children[i].classList.contains("show")) {
				line.children[i].classList.remove('active','show');
				num = +e.target.classList[0][4]-1;
				// Необходимо сделать, чтобы даже если в одну сторону все шло, то анимация продолжала работать
				let start,end;
			//определяем идет вправо или влево
			if (i > num) {//идет налево
				switch (num) {
					case 2:	start = '30%'; end = '0'; break;
					case 1: start = '60%'; end = '30%'; break;
					case 0: start = '90%'; end = '60%'; break;
				}
				line.style.setProperty('--ltr-start', start);
				line.style.setProperty('--ltr-end', end);
				line.classList.remove('left');
				line.classList.remove('right');
				setTimeout(()=>{line.classList.add('left');},10);
			} else {			//направо идет
				switch (num) {
					case 1: start = '0'; end = '30%'; break;
					case 2: start = "30%"; end = "60%"; break;
					case 3: start = "60%"; end = "90%"; break;
				}
				line.style.setProperty('--rtl-start', start);
				line.style.setProperty('--rtl-end', end);
				line.classList.remove('right');
				line.classList.remove('left');
				setTimeout(()=>{line.classList.add('right');},10);
				}
			}
		}
//active показывает рамку 
		setTimeout( () =>{
			e.target.classList.add('active');
		},300);
		//show устанавливает форматирование текста
		setTimeout( () =>{
			e.target.classList.add('show');
		},600);
		switch (e.target.className[4]) {
			case "1": 
				img[0].style.opacity = "1";
				img[1].style.opacity = "0";
				img[2].style.opacity = "0";
				img[3].style.opacity = "0";
				break;
			case "2": 
				img[0].style.opacity = "1";
				img[1].style.opacity = "1";
				img[2].style.opacity = "0";
				img[3].style.opacity = "0";
				break;
			case "3": 
				img[0].style.opacity = "1";
				img[1].style.opacity = "1";
				img[2].style.opacity = "1";
				img[3].style.opacity = "0";
				break;
			case "4":
				img[0].style.opacity = "1";
				img[1].style.opacity = "1";
				img[2].style.opacity = "1";
				img[3].style.opacity = "1";
				break;
		}
	}
};
//функция смены текста в верхнем блоке
function topInfo(e) {
	if (typeof(e) == "object") {
		footer.style.setProperty('--scale',e.target.className[4]*20+"vw");
		switch (e.target.className[4]) { //можно запустить через classList.contains или передавать данные уже с переходом
			case "1": 
				head.style.setProperty('--opac', '0');
				setTimeout(()=>{	head.innerHTML = "Привет. <br>Я был создан 25.12.1989.<br>Название прописали Евгений.<br>Версия за много лет непрерывно обновлялась.<br>И проект за долгие годы постоянно проходил модификации используясь в разных отраслях.<br>На данный момент вы можете увидеть последнюю стабильную версию, которая будет еще продолжать поддерживаться долгие годы разработчиками.<br>Ищу команду где смогу быть полезен и в то же время получать опыт и развиваться в любимом деле." },800);
				setTimeout(()=> {	head.style.setProperty('--opac', '1');	}, 1500);
				footer.style.opacity = "1";
			break;
			case "2": 
				head.style.setProperty('--opac', '0');
				setTimeout(()=>{ head.innerHTML = '<div>&#10004; HTML <br>&#10004; CSS<br>&#10004; JS<br>&#10004; Навык слепой печати на английском и русском<br>&#10004; Высокий уровень усидчивости и обучаемости<br>&#10008; Высокий уровень дохода</div>' },800);
				setTimeout(()=> {	head.style.setProperty('--opac', '1');	}, 1500);
				// img1.style.opacity = "1";
				footer.style.opacity = "1";
			break;
			case "3":
				head.style.setProperty('--opac', '0');
				// сделать проверку на размер окна и если окно другое, то меняем с одним ul
				setTimeout(()=>{ head.innerHTML = '<ul style = "list-style-type: circle; width: 30vw"><lh>АО "СВЯЗНОЙ-ЛОГИСТИКА"</lh><br><lh>ИО администратора</lh><li> с июля 2014 по октябрь 2015</li><lh>Управляющий магазином</lh><li>с октября 2015 по август 2017</li><br></ul><ul style = "list-style-type: circle; width: 50vw"><lh>За это время получил награды как руководитель:</lh><li>Победа в президентской мотивации 2016г.</li><li>Победа во внутренней мотивации Энергия Связного 2017г.</li><li>Становился лучшим руководителем по результатам нескольких кварталов</li></ul>' },800);
				setTimeout(()=> {	head.style.setProperty('--opac', '1');	}, 1500);
				footer.style.opacity = "1";
			break;
			case "4":
				head.style.setProperty('--opac', '0');
				setTimeout(()=>{ head.innerHTML = '<div style="display: flex; justify-content:center; align-items:center;"><ul style="font-size:1.5em; list-style-type:none;"><lh>Номер телефона:</lh><li>89673467061</li><lh>E-mail:</lh><li>mr.ahilis@gmail.com</li></ul></div>'},800);
				setTimeout(()=> {	head.style.setProperty('--opac', '1');	}, 1500);
				footer.style.opacity = "1";
			break;		
		}
	} else {
		footer.style.setProperty('--scale',e*20+"vw");
		switch (e) { //можно запустить через classList.contains или передавать данные уже с переходом
			case "1": 
				head.style.setProperty('--opac', '0');
				setTimeout(()=>{	head.innerHTML = "Привет. <br>Я был создан 25.12.1989.<br>Название прописали Евгений.<br>Версия за много лет непрерывно обновлялась.<br>И проект за долгие годы постоянно проходил модификации используясь в разных отраслях.<br>На данный момент вы можете увидеть последнюю стабильную версию, которая будет еще продолжать поддерживаться долгие годы разработчиками.<br>Ищу команду где смогу быть полезен и в то же время получать опыт и развиваться в любимом деле." },800);
				setTimeout(()=> {	head.style.setProperty('--opac', '1');	}, 1500);
				footer.style.opacity = "1";
			break;
			case "2": 
				head.style.setProperty('--opac', '0');
				setTimeout(()=>{ head.innerHTML = '<div>&#10004; HTML <br>&#10004; CSS<br>&#10004; JS<br>&#10004; Навык слепой печати на английском и русском<br>&#10004; Высокий уровень усидчивости и обучаемости<br>&#10008; Высокий уровень дохода</div>' },800);
				setTimeout(()=> {	head.style.setProperty('--opac', '1');	}, 1500);
			break;
			case "3":
				head.style.setProperty('--opac', '0');
				// сделать проверку на размер окна и если окно другое, то меняем с одним ul
				setTimeout(()=>{ head.innerHTML = '<ul style = "list-style-type: circle; width: 30vw"><lh>АО "СВЯЗНОЙ-ЛОГИСТИКА"</lh><br><lh>ИО администратора</lh><li> с июля 2014 по октябрь 2015</li><lh>Управляющий магазином</lh><li>с октября 2015 по август 2017</li><br></ul><ul style = "list-style-type: circle; width: 50vw"><lh>За это время получил награды как руководитель:</lh><li>Победа в президентской мотивации 2016г.</li><li>Победа во внутренней мотивации Энергия Связного 2017г.</li><li>Становился лучшим руководителем по результатам нескольких кварталов</li></ul>' },800);
				setTimeout(()=> {	head.style.setProperty('--opac', '1');	}, 1500);
			break;
			case "4":
				head.style.setProperty('--opac', '0');
				setTimeout(()=>{ head.innerHTML = '<div style="display: flex; justify-content:center; align-items:center;"><ul style="font-size:1.5em; list-style-type:none;"><lh>Номер телефона:</lh><li>89673467061</li><lh>E-mail:</lh><li>mr.ahilis@gmail.com</li></ul></div>'},800);
				setTimeout(()=> {	head.style.setProperty('--opac', '1');	}, 1500);
			break;		
		}
	}
};
//переход по страницам с помощью контрол и стрелки
var code =[]; //create massive to save keystrokes
let turnPage = (e) => { //function for turn page
	let num; 
	e = e || window.event; // клавиша или передана или считана из события на окне
	code.push(e.keyCode); // сохраняем нажатия в массив, который создан для нажатий
	if (code.length > 1) { //если длина массива больше одного, то выполняем условие
		if (code[0] == 17 || code[0] == 37 || code[0] == 39 && code[1] == 17 || code[1] == 37 || code[1] == 39) {
			//проверяем какие нажатые кнопки у нас сохранены в массиве

//код дальше скопирован до самого низа из функции activeMenu

		//найти и удалить там где находятся те классы
			for (let i=0; i < line.children.length; i++) { //перебираем всех детей семейства line
				if (line.children[i].classList.contains("active") && line.children[i].classList.contains("show")) {
					line.children[i].classList.remove('active','show'); //удаляем у всех класс active и show
					num = +line.children[i].classList[0][4]-1; //к переменной num прибавляем порядковый номер страницы(начинается с 0 до 3)
					let start,end; //переменные для осуществления анимации полосы перехода
				//определяем идет вправо или влево
				if (code[0] == 37 || code[1] == 37) {//идет налево
					switch (num) {
						case 3:	start = '30%'; end = '0'; break;
						case 2: start = '60%'; end = '30%'; break;
						case 1: start = '90%'; end = '60%'; break;
					}
					line.style.setProperty('--ltr-start', start);
					line.style.setProperty('--ltr-end', end);
					line.classList.remove('left');
					line.classList.remove('right');
					setTimeout(()=>{line.classList.add('left');},100);
					switch (i) {
						case 1: 
							img[0].style.opacity = "1";
							img[1].style.opacity = "0";
							img[2].style.opacity = "0";
							img[3].style.opacity = "0";
							break;
						case 2: 
							img[0].style.opacity = "1";
							img[1].style.opacity = "1";
							img[2].style.opacity = "0";
							img[3].style.opacity = "0";
							break;
						case 3: 
							img[0].style.opacity = "1";
							img[1].style.opacity = "1";
							img[2].style.opacity = "1";
							img[3].style.opacity = "0";
							break;
						case 4:
							img[0].style.opacity = "1";
							img[1].style.opacity = "1";
							img[2].style.opacity = "1";
							img[3].style.opacity = "1";
							break;
					}
				} else {			//направо идет
					switch (num) {
						case 0: start = '0'; end = "30%"; break;
						case 1: start = '30%'; end = '60%'; break;
						case 2: start = "60%"; end = "90%"; break;
						// case 3: start = "60%"; end = "90%"; break;
					}
					line.classList.remove('right');
					line.classList.remove('left');
					line.style.setProperty('--rtl-start', start);
					line.style.setProperty('--rtl-end', end);
					setTimeout(()=>{line.classList.add('right');},100);
					switch (i) {
						case 0: 
							img[0].style.opacity = "1";
							img[1].style.opacity = "1";
							img[2].style.opacity = "0";
							img[3].style.opacity = "0";
							break;
						case 1: 
							img[0].style.opacity = "1";
							img[1].style.opacity = "1";
							img[2].style.opacity = "1";
							img[3].style.opacity = "0";
							break;
						case 2:
							img[0].style.opacity = "1";
							img[1].style.opacity = "1";
							img[2].style.opacity = "1";
							img[3].style.opacity = "1";
							break;
					}
				}		
				// page = line.children[num];
				if (code[0] == 37 || code[1] == 37) { //если нажали кнопку влево
					--num; // переменную num(для определения номера страницы) уменьшаем на один
				if (num>=0 && num<3) {
					setTimeout( () =>{line.children[num].classList.add('active');},300);
					setTimeout( () =>{line.children[num].classList.add('show');},600);
					topInfo(line.children[num].className[4])
					} else {
						++num;
						setTimeout( () =>{line.children[num].classList.add('active');},300);
						setTimeout( () =>{line.children[num].classList.add('show');},600);
					}
				} else { //иначе нажали стрелку вправо
					++num;//переменную num увеличиваем на один
					if (num>0 && num<=3) {
						setTimeout( () =>{line.children[num].classList.add('active');},300);
						setTimeout( () =>{line.children[num].classList.add('show');},600);
					topInfo(line.children[num].className[4])
					} else {
						--num;
						setTimeout( () =>{line.children[num].classList.add('active');},300);
						setTimeout( () =>{line.children[num].classList.add('show');},600);						
					}
				}
				activePage = false; //если нет активных страниц
			} 
			if (activePage){ //тогда включаетсяя следующий сценарий
				setTimeout( () =>{line.children[0].classList.add('active');},300);
				setTimeout( () =>{line.children[0].classList.add('show');},600);
				head.style.setProperty('--opac', '0');
				setTimeout(()=>{	head.innerHTML = "Привет. <br>Я был создан 25.12.1989.<br>Название прописали Евгений.<br>Версия за много лет непрерывно обновлялась.<br>И проект за долгие годы постоянно проходил модификации используясь в разных отраслях.<br>На данный момент вы можете увидеть последнюю стабильную версию, которая будет еще продолжать поддерживаться долгие годы разработчиками.<br>Ищу команду где смогу быть полезен и в то же время получать опыт и развиваться в любимом деле." },800);
				setTimeout(()=> {	head.style.setProperty('--opac', '1');	}, 1500);
				footer.style.opacity = "1";
				img[0].style.opacity = "1";
			}
		}
		code = [];
	}
}

//active показывает рамку 

				// for (let i=0; i < line.children.length; i++) {
			// 	if (line.children[i].classList.contains("active")) {
			// 		// page = line.children[i];
			// 		if (code[0] == 39 || code[1] == 39) {
			// 			line.children[i].classList.remove("active");
			// 			line.children[i].classList.remove("show");
			// 			line.children[i].nextElementSibling.click();
			// 		} 
			// 		if (code[0] == 37 || code[1] == 37) {
			// 			line.children[i].classList.remove("active");
			// 			line.children[i].classList.remove("show");
			// 			line.children[i].previousElementSibling.click();
			// 		} else {
			// 			link1.click();
			// 		}	
			// 	}
			// }

};
let clear = () => {code = [];};

document.addEventListener('keydown', turnPage);
document.addEventListener('keyup', clear);

line.addEventListener('click', activeMenu);
//увеличение footer и эффект на текст header 
line.addEventListener('click', topInfo);
// ОБРАБОТАТЬ НАЖАТИЯ touchswape для того чтобы смахивая слева направо открывалась прошлая страница, а наоборот следующая

