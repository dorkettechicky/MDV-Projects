/*
Patricia Dacosta
AVF 1303
main.js
March 7, 2013
*/

$('#launch').load(function(){
	
});

$('#clearTwit').on('click', function(){
	window.location.reload();
});

$('#twitterPg').load(function(){
});

$('#twitButton').on('click', function(){
	


/* var getTwData = function() { */
console.log('getTwData Fired');
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "http://search.twitter.com/search.json?q=scubadivergirls&rpp=15include_entities=true&callback=?",
       success: function(data) {
            console.log(data);
                $('#twitterPop').append(
                    $('<div>')
                    .attr("class","twitHead")
                    .append($("<p>"+"Scuba Diver Girls Tweets"+"</p>")));

            $.each(data.results, function(){
            console.log(data.results);
                
                $('#twitterPop').append(
                    $('<div>').attr("class","twitDiv")
                        .append($("<img src=" + this.profile_image_url + ">"))
                        .append($("<h3>" + this.from_user_name + "</h3>"))
                        .append($("<p>" + "@" + this.from_user + "</p>")
                            .attr("class","twitUser"))
                        .append($("<p>" + this.created_at + "</p>")
                            .attr("class","date"))
                        .append($("<p>" + this.text + "</p>")
                            .attr("class","content")) 
                        
                    );
            });
        },
            error: function() {
            }
    });
});