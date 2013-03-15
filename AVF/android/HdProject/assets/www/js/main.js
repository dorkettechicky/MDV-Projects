/*
Patricia Dacosta
AVF 1303
main.js
March 14, 2013
*/

$('#launch').load(function(){
	
});

$('#clearTwit').on('click', function(){
	window.location.reload(); //Resets Page
});

$('#twitterPg').load(function(){
});

$('#weatherPg').load(function(){
	
});

$('#clearW').on('click', function(){
	window.location.reload();	
});

$('#twitButton').on('click', function(){ //Code for Twitter Feed

    $.ajax({
        type: "GET",
        dataType: "json",
        url: "http://search.twitter.com/search.json?q=CNETNews&rpp=15include_entities=true&callback=?",
       success: function(data) {
            console.log(data);
                $('#twitterPop').append(
                    $('<div>')
                    .attr("class","twitHead")
                    .append($("<p>"+"CNET News Tweets"+"</p>")));

            $.each(data.results, function(){
            console.log(data.results);
                
                $('#twitterPop').append(
                    $('<div>').attr("class","twitDiv")
                        .append($("<img src=" + this.profile_image_url + ">")
                        .attr("class", "twitImg"))
                        .append($("<h3>" + this.from_user_name + "</h3>")
                        .attr("class", "twitName"))
                        .append($("<p>" + "@" + this.from_user + "</p>")
                            .attr("class","twitUser"))
                        .append($("<p>" + this.text + "</p>")
                            .attr("class","twitText")) 
                        .append($("<p>" + this.created_at + "</p>")
                            .attr("class","twitDate"))
                    );
            });
        },
            error: function() {
            }
    });
});

$('#ccButton').on('click', function(){ //Code for Current Conditions
    $.ajax({
        type: "GET",
        dataType: "jsonp", //Weather API provided by wunderground.com
        url: "http://api.wunderground.com/api/9e495c87d24c2545/geolookup/conditions/forecast/q/FL/Key_West.json",
         success : function(parsed_json) {
         console.log(parsed_json);
         $('#weatherPop').empty();
		  var cc_img = parsed_json.current_observation.icon_url;       
		  var location = parsed_json.location.city;
		  var loc_st = parsed_json.location.state;
		  var temp_st = parsed_json.current_observation.temperature_string;
		  var wind = parsed_json.current_observation.wind_string;
		  var humid = parsed_json.current_observation.relative_humidity;
		  var update = parsed_json.current_observation.observation_time;
		  var rain_st = parsed_json.current_observation.precip_today_string;
		  var bar_pr = parsed_json.current_observation.pressure_mb;
		  var pres_trend = parsed_json.current_observation.pressure_trend;
                  $('#weatherPop').append(
                    $('<div>')
                    .attr("class","currentDiv")
                    .append($("<h3>" + "Current Conditions in " + location + ", " + loc_st + "</h3>")
                    .attr("class", "ccHead"))
                    .append($("<img src=" + cc_img +">")
                    .attr("class", "ccImg"))
                    .append($("<p>"+"Temperature: " +  temp_st+ "</p>"))
                    .append($("<p>"+"Winds: " + wind + "</p>"))
                    .append($("<p>"+"Relative Humidity: " + humid + "</p>"))
                    .append($("<p>"+"Rainfall Amount: " + rain_st + "</p>"))
                    .append($("<p>"+"Barometric Pressure: " + bar_pr + "mb " + pres_trend + "</p>"))
                    .attr("class", "obTime")
                    .append("<p>" + update + "</p>")
                    .attr("class", "ccTime"));

  }
                
    });
});
	
$('#fcButton').on('click', function(){ //Code for Forecast

    $.ajax({
        type: "GET",
        dataType: "jsonp",
        url: "http://api.wunderground.com/api/9e495c87d24c2545/geolookup/forecast/q/FL/Key_West.json",
       success: function(parsed_json) {
            console.log(parsed_json);
            	$('#weatherPop').empty();
                $('#weatherPop').append(
                    $('<div>')
                    .attr("class","fcDiv")
                    .append($("<h3>"+"Forecast for: "+ parsed_json.location.city + ", " +parsed_json.location.state+"</h3>")));

            $.each(parsed_json.forecast.txt_forecast.forecastday, function(){
            console.log(parsed_json.forecast.txt_forecast.forecastday);
                
                $('#weatherPop').append(
                    $('<div>')
                    .attr("class","fcDiv")
                        .append($("<h4>" + this.title + "</h4>")
                        .attr("class", "fcTitle"))
                        .append($("<img src=" + this.icon_url + ">"))
                        .append($("<p>" + this.fcttext + "</p>")
                            .attr("class","fctext"))
                        
                    );
            });
        },
            error: function() {
            }
    });
});
	
$('#wk1Button').on('click', function(){ //Retrieve week 1 research
	$.ajax({
		type: "GET",
		dataType: "json",
		url: "js/research.json",
		success: function(data){
			console.log(data.week1);
			
			$('#researchPop').empty();
			var wk = data.week1.wk;
			var q1 = data.week1.q1;
			var q2 = data.week1.q2;
			var q3 = data.week1.q3;
			var q4 = data.week1.q4;
			var q5 = data.week1.q5;
			var r1 = data.week1.r1;
			var r2 = data.week1.r2;
			var r3 = data.week1.r3;
			var r4 = data.week1.r4;
			var r5 = data.week1.r5;
			
			console.log(wk);
                  $('#researchPop').append(
                    $('<div>')
                    .attr("class","rDiv")
                    .append($("<h3>" + "Week " + wk[1] +  "</h3>")
                    .attr("class", "weekTitle"))
                    .append($("<h4>"+ q1[1] + "</h4>"))
                    .append($("<p>"+ r1[1] + "</p>"))
                    .append($("<h4>"+ q2[1] + "</h4>"))
                    .append($("<p>"+ r2[1] + "</p>"))
                    .append($("<h4>"+ q3[1] + "</h4>"))
                    .append($("<p>"+ r3[1] + "</p>"))
                    .append($("<h4>"+ q4[1] + "</h4>"))
                    .append($("<p>"+ r4[1] + "</p>"))
                    .append($("<h4>"+ q5[1] + "</h4>"))
                    .append($("<p>"+ r5[1] + "</p>")));

                    
		}
	
	
	});	
});

$('#wk2Button').on('click', function(){ //Retrieve week 2 research
	$.ajax({
		type: "GET",
		dataType: "json",
		url: "js/research.json",
		success: function(data){
			console.log(data.week2);
			
			$('#researchPop').empty();
			var wk = data.week2.wk;
			var q1 = data.week2.q1;
			var q2 = data.week2.q2;
			var q3 = data.week2.q3;
			var q4 = data.week2.q4;
			var r1 = data.week2.r1;
			var r2 = data.week2.r2;
			var r3 = data.week2.r3;
			var r4 = data.week2.r4;
			
			console.log(r1);
                  $('#researchPop').append(
                    $('<div>')
                    .attr("class","rDiv")
                    .append($("<h3>" + "Week " + wk[1] +  "</h3>")
                    .attr("class", "weekTitle"))
                    .append($("<h4>"+ q1[1] + "</h4>"))
                    .append($("<p>"+ r1[1] + "</p>"))
                    .append($("<h4>"+ q2[1] + "</h4>"))
                    .append($("<p>"+ r2[1] + "</p>"))
                    .append($("<h4>"+ q3[1] + "</h4>"))
                    .append($("<p>"+ r3[1] + "</p>"))
                    .append($("<h4>"+ q4[1] + "</h4>"))
                    .append($("<p>"+ r4[1] + "</p>")));

                    
		}
	
	
	});	
});

$('#wk3Button').on('click', function(){ //Retrieve week 3 research
	$.ajax({
		type: "GET",
		dataType: "json",
		url: "js/research.json",
		success: function(data){
			console.log(data.week3);
			
			$('#researchPop').empty();
			var wk = data.week3.wk;
			var q1 = data.week3.q1;
			var q2 = data.week3.q2;
			var q3 = data.week3.q3;
			var q4 = data.week3.q4;
			var r1 = data.week3.r1;
			var r2 = data.week3.r2;
			var r3 = data.week3.r3;
			var r4 = data.week3.r4;
			
			console.log(wk);
                  $('#researchPop').append(
                    $('<div>')
                    .attr("class","rDiv")
                    .append($("<h3>" + "Week " + wk[1] +  "</h3>")
                    .attr("class", "weekTitle"))
                    .append($("<h4>"+ q1[1] + "</h4>"))
                    .append($("<p>"+ r1[1] + "</p>"))
                    .append($("<h4>"+ q2[1] + "</h4>"))
                    .append($("<p>"+ r2[1] + "</p>"))
                    .append($("<h4>"+ q3[1] + "</h4>"))
                    .append($("<p>"+ r3[1] + "</p>"))
                    .append($("<h4>"+ q4[1] + "</h4>"))
                    .append($("<p>"+ r4[1] + "</p>")));

                    
		}
	
	
	});	
});