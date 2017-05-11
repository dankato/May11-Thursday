function textToArr(str){
	const re = /@(~lp~|~rp~|~lb~|~rb~|~qu~|~cn~|-cm-)@|([(){}":,])/g;
	//const re2 = "\n|\t";
	//.replace(/(?:\r\n|\r|\n|\t)/g,' ')
	return str.replace(re, '').replace('\'s','').toLowerCase().split(' ');
	/*
	const replaceWithRegex = str.replace(re,'');
	const replaceAposS = replaceWithRegex.replace('\'s','');
	const lowerCaseString = replaceAposS.toLowerCase();
	const arr = lowerCaseString.split(' ');
	return arr;
	*/
}
function wordCount(arr){
	return arr.length;
}
function uniqueWord(arr){
	const uniqueArr = [];
	for(let i = 0; i< arr.length;i++){
		if(!(uniqueArr.find(el=>el===arr[i]))){
			//uniqueArr.find(function(el){return el===arr[i]})
			uniqueArr.push(arr[i]);
		}
	}
	return uniqueArr.length;
	//return arr.filter((el, index, arr2)=> arr2.indexOf(el)===index).length;
	// const uniqueArr = arr.filter(function(el,index,arr2){return arr2.indexOf(el)===index})
	//const numOfUniqueWords = uniqueArr.length;
	//return numOfUniqueWords;
	
	//Sample
	//var list = [1,2,3,4,1,1,1];
	//list = list.filter((x, i, a) => a.indexOf(x) == i); //=> [1,2,3,4]
}
function avgWordLen(arr){
	return Math.floor((arr.map(el=>el.length).reduce((acc,val)=> acc+val))/(arr.length)*100)/100;
	/*
	const lengthOfEveryElement = arr.map(function(el){return el.length});
	const reduceArr = lengthOfEveryElement(function(acc,val){return acc + val});
	const avgWordLen = reduceArr/arr.length;
	const roundDown = Math.floor(avgWordLen* 100)/100; 
	return roundDown;
	*/
}

$(function(){
	$('.container form').on('submit', function(event){
		//prevent default when typing
		event.preventDefault();
		//remove hidden class ( shows the word count, unique word count, avg word length)
		$('.text-report').removeClass('hidden');
		//store the text into an array variable
		let inputArr = textToArr($('#user-text').val());
		//console.log(inputArr);
		//show it to the browser
		$('.js-word-count').text(wordCount(inputArr));
		$('.js-unique-word').text(uniqueWord(inputArr));
		$('.js-avg-word').text(avgWordLen(inputArr));
	})
});

//TEST
// let arr = textToArr('hello world hi hi hi');
// console.log(arr);
// console.log('wordCount: '+ wordCount(arr));
// console.log('uniqueArr: '+ uniqueWord(arr));
// console.log('avgWord: '+ avgWordLen(arr));