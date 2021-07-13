let cards = [

{
	image:"https://www.pngitem.com/pimgs/m/261-2616635_chibi-captain-america-cartoon-hd-png-download.png",
	value:1,
	status:"closed"
},
{
	image:"https://www.pngitem.com/pimgs/m/261-2616635_chibi-captain-america-cartoon-hd-png-download.png",
	value:1,
	status:"closed"
},
{
	image:"https://cutewallpaper.org/21/iron-man-cartoon-pictures/ironman-hierro-iroman-emoji-emojis-emojisticker-Iron-.png",
	value:2,
	status:"closed"
},
{
	image:"https://cutewallpaper.org/21/iron-man-cartoon-pictures/ironman-hierro-iroman-emoji-emojis-emojisticker-Iron-.png",
	value:2,
	status:"closed"
},
{
	image:"https://howtodrawforkids.com/wp-content/uploads/2019/02/How-to-draw-Thor-for-kids-1.jpg",
	value:3,
	status:"closed"
},
{
	image:"https://howtodrawforkids.com/wp-content/uploads/2019/02/How-to-draw-Thor-for-kids-1.jpg",
	value:3,
	status:"closed"
},
{
	image:"https://i.pinimg.com/originals/72/da/ab/72daabd2bf98d5fd8941783346de71fd.jpg",
	value:4,
	status:"closed"
},
{
	image:"https://i.pinimg.com/originals/72/da/ab/72daabd2bf98d5fd8941783346de71fd.jpg",
	value:4,
	status:"closed"
},

{
	image:"https://w7.pngwing.com/pngs/930/888/png-transparent-marvel-comics-incredible-hulk-hulk-youtube-cartoon-drawing-she-hulk-fictional-characters-superhero-comic-book-thumbnail.png",
	value:5,
	status:"closed"
},
{
	image:"https://w7.pngwing.com/pngs/930/888/png-transparent-marvel-comics-incredible-hulk-hulk-youtube-cartoon-drawing-she-hulk-fictional-characters-superhero-comic-book-thumbnail.png",
	value:5,
	status:"closed"
},

]

let temp;
for(let i = cards.length-1;i>=0;i--){
	let j = Math.floor(Math.random()*(i+1));

	temp = cards[i];
	cards[i]= cards[j];
	cards[j] = temp;
}

let cardsCopy = cards;


function displayCards(data){
	let cardsString="";

	data.forEach(function(card,index){
      cardsString+=`
<div class ="card" style="background-image:url('${card.image}')">
 <div class= "overlay ${card.status}" onclick ="openCard(${index})" >

 </div>   
</div>
 `;
});

document.getElementById('cards').innerHTML =cardsString;
}
displayCards(cards);

let  cardCount = 1;
let val1 = null, val2 = null;
let score =0;

function openCard(index){
cards[index].status="opened";


if(cardCount===1){
val1= cards[index].value;
cardCount++;
}

else if(cardCount===2){
	val2 = cards[index].value;


	if(val1 === val2){
		score++;
		document.getElementById('score').innerText = score;

		val1 = null;
		val2 = null;
		cardCount =1;
	}

	else{
		alert("game over");
		location.reload();

	}
}




displayCards(cards);
}












