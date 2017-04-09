$(document).ready(function(){
        var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
        var currentColor = '';
        var currentAuthor= '';

        getQuote();
        $("button").on("click", getQuote);

        function getQuote(){
            $.ajax({
                headers: {
                    "X-Mashape-Key": "6OZVLJfdoKmshqR7k5u8D7Y63umWp1r96VbjsnAHYhaa6RGrLe",
                    Accept: "application/json",
                    "Content-Type": "application/x-www-from-urlencoded"
                },
                url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous',
                success: function(response){
                    var r = JSON.parse(response);
                    currentQuote = r.quote;
                    currentAuthor = r.author;

                    $(".quote-text").animate({
                        opacity: 0
                    }, 500, function(){
                        $(this).animate({
                            opacity: 1
                        }, 500);
                        $('.quote-text').text(currentQuote);
                    })  ;

                    $('.quote-author').animate({
                        opactiy: 0
                    }, 500, function(){
                        $(this).animate({
                            opacity: 1
                        }, 500);
                        $('.quote-author').html(currentAuthor);
                    });

                    var color = Math.floor(Math.random() * colors.length);

                    $("html body").animate({
                        backgroundColor: colors[color],
                        color: colors[color]
                    }, 1000);

                    $('button').animate({
                        backgroundColor: colors[color]
                        // console.log( colors[color]);
                    }, 1000);


                }

            });
        }
})
