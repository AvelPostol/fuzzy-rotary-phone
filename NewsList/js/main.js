







//присвоение элементов переменным
 var footerblock = document.createElement("div");
 var footerpanel = document.createElement("div");
 var footericon = document.createElement("div");
 var footercont = document.createElement("div");
 var newscont = document.createElement("div");
//присвоение классов
 newscont.classList.add('newscont');
 footerblock.classList.add('footerpanel');
 footericon.classList.add('footericon');
 footercont.classList.add('footercont');
 footerpanel.classList.add('footerpanel');
 newscont.classList.add('hidden');
 //присвоение id
 footercont.id = "lock";
 newscont.id = "unlock";
//присвоение элементов
 document.body.append(newscont);
 document.body.append(footercont);
 footercont.append(footerblock);
 footerblock.append(footericon);
 //присвоение стилей
 newscont.style.cssText = "display:flex;flex-direction: column; justify-content:space-evenly; align-items: center; width:80%; height:400px; border: 1px solid gray; margin:auto; visibility:hidden";
 footercont.style.cssText = "width: 80%; margin: auto; align-items: center; height:100%; border: 1px solid grey; display:flex; justify-content:center;";
 footerpanel.style.cssText = "width:100%; height: 50px; display:flex; align-items: baseline; justify-content: center; position:absolute; bottom:0px;";
 footerblock.style.cssText = "width:30px; height: 30px; background-image:url('../img/message.png');background-size: contain; position: relative;";
 footericon.style.cssText = "width: fit-content; text-align: center; border-radius: 1em; height: fit-content; background-color:red; padding:0px 5px; font-size:12px;font-family: sans-serif; font-weight:bold;position: absolute;left: 18px;";







 class Collect {
   constructor(title, author, date, url){
      this.title = this.title(title);
      this.author = this.author(author);
      this.date = this.date(date);
      this.url = this.url(url);
   }
   //запись автора
   author(author) {
   const elem = document.createElement("div");
   if (author) {
      elem.textContent = `Автор - ${author}`
   }  else{
      elem.textContent = `Автор не был объявлен`
   } 
   elem.classList.add('author');
   return elem;
 }
 //запись заголовка
  title(title) {
   const elem = document.createElement("div");
   if (elem) {
      elem.textContent = `заголовок - ${title}`
   }  else{
      elem.textContent = 'заголовок не объявлен'
   } 
   elem.classList.add('title');
   return elem;
  }
  
//дата публикации
   date(now){
      const pub = document.createElement('span');
      const cont = document.createElement('div');
      const date = new Date(Number(now));
      const hours = ('0' + date.getHours()).slice(-2);
      const minutes = ('0' + date.getUTCMinutes()).slice(-2);
      const seconds = ('0' + date.getUTCSeconds()).slice(-2);
      const days = ('0' + date.getDate()).slice(-2);
      const months = ('0' + (date.getMonth() + 1)).slice(-2);
      const years = date.getFullYear();
      const currentDate = `Дата публикации ${days}.${months}.${years} в ${hours}:${minutes}:${seconds}`;
      pub.textContent = currentDate;
      cont.classList.add('date-cont');
      pub.classList.add('date');
    
      cont.append(pub);
    
      return cont;
 }
 //запись ссылки на новость
   url(href) {
   const url = document.createElement('a');
   if (href) {
      url.setAttribute('href', href);
      url.textContent = 'подробнее';
      url.classList.add('more');
   }  else{
      url.textContent = 'ссылка на подробности не указана';
   } 
  return url;
}
   returnNews(){
      
      let blockNews = document.createElement("div");
      blockNews.classList.add('blockNews');
      newscont.append(blockNews);
      blockNews.append(this.title);
      blockNews.append(this.author);
      blockNews.append(this.date);
      blockNews.append(this.url);
      blockNews.style.cssText = "display:flex;flex-direction: column;justify-content:center; align-items: center; height:fit-content; border: 1px solid gray;"
      return blockNews;
   }
  
}


//массив статей
function mass(){
   let array = ["птицы","Игорь","1513213421566","https://www.youtube.com/", "Люди", "Иван", "1533213421566", "https://www.youtube.com/" , "Машины", "Степа", "1553213421566", "https://www.youtube.com/"];
   let i = 0;
   let lenght = array.length / 4;
   while(i < lenght){
      let array2 = array.slice(i * 4, i * 4 + 4);
      const alex = new Collect( array2[0], array2[1], array2[2],array2[3]);
      i= i + 1;
      alex.returnNews();
      footericon.textContent = i;
   };
}
mass();
// Функция показывает/скрывает ленту

function modify() {
   if (newscont.classList.contains('hidden')) {
      newscont.classList.remove('hidden');
      newscont.style.visibility = "visible";
   } else {
      newscont.classList.add('hidden');
      newscont.style.visibility = "hidden";
   }
 }
 
 // Добавляет слушателя событий для ленты
 var el = document.getElementById("lock");
 el.addEventListener("click", modify, false);