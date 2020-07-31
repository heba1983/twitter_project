var submit = document.getElementById('submit');
submit.addEventListener('click', createTweet);
var tweets = [];
var count;

function createTweet(e) {
    e.preventDefault();

    var tweetobj = {
        author: document.getElementById("usname").value,
        tweet: document.getElementById("tweetbox").value
    }
    tweets.push(tweetobj);
    document.forms[0].reset();
 

    if (tweets.length == 1) {
        var authdiv = document.createElement("div");
        var tweetdiv = document.createElement("div");
        var div = document.getElementById("news");

        count = tweets.indexOf(tweetobj);
        div.style.border = "2px";
        div.style.border = "solid";
        div.style.borderColor = "#ccc";
        div.style.backgroundColor = "#ddd";
        div.style.borderRadius = "5px";
        div.style.padding = "10px";
        div.style.margin = "10px 0";
        div.style.width = "400px";
        tweetdiv.style.padding = "10px";
        tweetdiv.style.margin = "10px 0";
        authdiv.style.padding = "10px";
        authdiv.style.margin = "10px 0";





        authdiv.innerHTML = tweets[count].author;
        div.appendChild(authdiv);
        tweetdiv.innerHTML = tweets[count].tweet;
        div.appendChild(tweetdiv);

        var div1 = document.createElement("div");
        var like = document.createElement('BUTTON');
        like.innerHTML = "Like";
        like.addEventListener("click", changetextcolor);
        div1.appendChild(like);
        div.appendChild(div1);
        like.style.padding = "10px";
        like.style.marginRight = "50px";
        like.style.marginLeft = "20px";
        like.style.borderRadius = "3px";
        var retweet = document.createElement('BUTTON');
        retweet.innerHTML = "Retweet";
        retweet.addEventListener("click", retweetfunc);
        retweet.style.padding = "10px";
        retweet.style.margin = "40px 0";
        retweet.style.borderRadius = "3px";

        div1.appendChild(retweet);
        div.appendChild(div1);

    } else {
        for (let i = tweets.length - 1; i >= 0; i--) {

            var authdiv = document.createElement("div");
            var tweetdiv = document.createElement("div");
            var div = document.getElementById("news");


            authdiv.innerHTML = tweets[i].author;
            div.appendChild(authdiv);
            tweetdiv.innerHTML = tweets[i].tweet;
            div.appendChild(tweetdiv);

            div.style.border = "2px";
            div.style.border = "solid";
            div.style.borderColor = "#ccc";
            div.style.backgroundColor = "#ddd";
            div.style.borderRadius = "5px";
            div.style.padding = "10px";
            div.style.margin = "10px 0";
            div.style.width = "400px";
            tweetdiv.style.padding = "10px";
            tweetdiv.style.margin = "10px 0";
            authdiv.style.padding = "10px";
            authdiv.style.margin = "10px 0";


            var div1 = document.createElement("div");
            var like = document.createElement('BUTTON');
            like.innerHTML = "Like";
            like.addEventListener("click", changetextcolor);
            like.style.padding = "10px";
            like.style.marginRight = "50px";
            like.style.marginLeft = "20px";
            like.style.borderRadius = "3px";

            div1.appendChild(like);
            div.appendChild(div1);

            var retweet = document.createElement('BUTTON');
            retweet.innerHTML = "Retweet";
            retweet.addEventListener("click", retweetfunc);
            retweet.style.padding = "10px";
            retweet.style.margin = "40px 0";
            retweet.style.borderRadius = "3px";



            div1.appendChild(retweet);
            div.appendChild(div1);


        }
    }
 
    function changetextcolor() {
        tweetdiv.style.color = "red";

    }
    function retweetfunc() {
        var authordiv1 = document.createElement("div");
        authordiv1.innerHTML = tweets[count].author;
        div.appendChild(authordiv1);
        var tweetdiv1 = document.createElement("div");
        tweetdiv1.innerHTML = tweets[count].tweet;
        div.appendChild(tweetdiv1);




        var div1 = document.createElement("div");
        var like = document.createElement('BUTTON');
        like.innerHTML = "Like";
        like.addEventListener("click", changetextcolor);
        div1.appendChild(like);
        div.appendChild(div1);
        function changetextcolor() {
            tweetdiv1.style.color = "red";

        }


        var retweet = document.createElement('BUTTON');
        retweet.innerHTML = "Retweet";
        retweet.addEventListener("click", retweetfunc);

        div1.appendChild(retweet);
        div.appendChild(div1);


    }
    localStorage.setItem('Mytweets', JSON.stringify(tweets));

}





