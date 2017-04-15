//hekim =1
//dentist =2
//stomatoloq=3

personals = [
	['1', 'gunel ism', 'hekim', new Date("Aprel 14, 2014 9:00:00"), new Date("Aprel 14, 2014 14:00:00")],
	['1', 'gunel dad', 'dentist', new Date("Aprel 15, 2014 10:00:00"), new Date("Aprel 14, 2014 15:00:00")],
	['1', 'gunel kim', 'stamatoloq', new Date("Aprel 14, 2014 12:00:00"), new Date("Aprel 14, 2014 18:00:00")],
	['2', 'gunel he', 'dentist', new Date("Aprel 18, 2014 15:00:00"), new Date("Aprel 14, 2014 21:00:00")],
	['1', 'gunel yox', 'hekim', new Date("Aprel 14, 2014 11:00:00"), new Date("Aprel 14, 2014 15:00:00")],
	['3', 'gunel filan', 'stomatoloq', new Date("Aprel 15, 2014 9:00:00"), new Date("Aprel 14, 2014 14:00:00")],
	['1', 'gunel kes', 'hekim', new Date("Aprel 16, 2014 10:00:00"), new Date("Aprel 14, 2014 16:00:00")],
	['1', 'gunel ism', 'hekim', new Date("Aprel 20, 2014 14:00:00"), new Date("Aprel 14, 2014 18:00:00")],
	['2', 'gunel dad', 'dentist', new Date("Aprel 14, 2014 11:00:00"), new Date("Aprel 14, 2014 17:00:00")],
	['3', 'gunel kim', 'stamatoloq', new Date("Aprel 15, 2014 12:00:00"), new Date("Aprel 14, 2014 18:00:00")],
	['2', 'gunel he', 'dentist', new Date("Aprel 19, 2014 9:00:00"), new Date("Aprel 14, 2014 14:00:00")],
	['1', 'gunel yox', 'hekim', new Date("Aprel 22, 2014 13:00:00"), new Date("Aprel 14, 2014 19:00:00")],
	['3', 'gunel filan', 'stomatoloq', new Date("Aprel 14, 2014 12:00:00"), new Date("Aprel 14, 2014 18:00:00")],
	['1', 'gunel kes', 'hekim', new Date("Aprel 11, 2014 14:00:00"), new Date("Aprel 14, 2014 22:00:00")]
];

jQuery(document).ready(function($) {
		var reng;
		var data_job;
		var heightofDiv;
		var marginofTop;
	$('li').click(function() {
	    data_job = $(this).attr('data-job');

		if (data_job==1) {
			reng='green';
		}else if (data_job==2) {
			reng='pink';
		}else{
			reng='red';
		}


		(function job_divs(){
			$('.appender').empty();

			$('<div/>',{
				class: 'row ashag'
			}).attr('data-job', data_job).appendTo('.appender');
			
			for (var i = 1; i < 8; i++) {
				$('<div/>',{
					class: 'col-md-1'
				}).attr('data-date', i).appendTo('.ashag');
			}	
		})();

		(function personal_creator(){
			var daydivs = document.querySelectorAll('.ashag .col-md-1');
			for (var i = 0; i < personals.length; i++) {
				if (personals[i][0]==data_job){	

					var hundurluk = personals[i][4].getHours()-personals[i][3].getHours();
					heightofDiv = hundurluk * 70;
					marginofTop = (personals[i][3].getHours()-9)*70;

					weekday(personals[i][3].getDay(), heightofDiv, marginofTop);

				} 
			}
		})();

		function weekday(day, heightofDiv){

			var daydivs = document.querySelectorAll('.ashag .col-md-1');
			for (var i = 0; i <daydivs.length; i++) {
				if (daydivs[i].getAttribute('data-date')==day) {

					$('<div/>',{
						class: 'adamlar',
						"css" : {
					        "background-color" : reng,
					        "height" : heightofDiv,
					         "top" : marginofTop
					    }
					}).appendTo(daydivs[i]);
				}
				
			}
		}
	});
});
