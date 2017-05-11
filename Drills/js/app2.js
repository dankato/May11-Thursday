function fizzBuzz(num){
	const arr= [];
	for(let i =1; i<= num;i++ ){
		if(i%15===0){
			arr.push('fizzBuzz');
		}else if(i%5===0){
			arr.push('buzz');
		}else if(i%3===0){
			arr.push('fizz');
		}else{
			arr.push(i);
		}
	}
	return arr;
}

$(function(event){
	$('#number-chooser').on('submit',function(event){
		event.preventDefault();
		$('.js-results').empty();
		const fizzBuzzArr = fizzBuzz($("#number-choice").val());
		fizzBuzzArr.map(el=>{
			if(el==='fizzBuzz'){
				$('.js-results').append(`<div class="fizz-buzz-item fizzbuzz"><span>${el}</span></div>`);
			}else if(el==='buzz'){
				$('.js-results').append(`<div class="fizz-buzz-item buzz"><span>${el}</span></div>`);
			}else if(el==='fizz'){
				$('.js-results').append(`<div class="fizz-buzz-item fizz"><span>${el}</span></div>`);
			}else{
				$('.js-results').append(`<div class="fizz-buzz-item"><span>${el}</span></div>`);
			}
		});
	});
});