//please first click on home or on any link in the sidenav before creating twitter cuz i have prob here

var submit = document.getElementById('submit');
submit.addEventListener('click', createTweet);
var tweets = [];
var count;

function createTweet(e) {
    var tweetobj = {
        author: document.getElementById("usname").value,
        tweet: document.getElementById("tweetbox").value
    }
     e.preventDefault();
    tweets.push(tweetobj);//for saving in array
    document.forms[0].reset();//to clear the form for the next entries
    //for display author & tweet

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





        authdiv.innerHTML = tweets[count].author;//for display
        div.appendChild(authdiv);
        tweetdiv.innerHTML = tweets[count].tweet;//for display
        div.appendChild(tweetdiv);

        //for display like & retweet button
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
        //like.style.color="pink";
        var retweet = document.createElement('BUTTON');
        retweet.innerHTML = "Retweet";
        retweet.addEventListener("click", retweetfunc);
        retweet.style.padding = "10px";
        retweet.style.margin = "40px 0";
        retweet.style.borderRadius = "3px";

        div1.appendChild(retweet);
        div.appendChild(div1);

    } else {

        //authdiv.remove();
        //tweetdiv.remove();
        /* div1.removeChild(like);
         div1.removeChild(retweet);
     
         div.removeChild(div1);
         div.removeChild(authdiv);
         div.removeChild(tweetdiv);
         //div.remove();
     
     
         //div1.remove();
     
        /* authdiv.innerHTML="";
         tweetdiv.innerHTML="";*/
        //div.style.visibility="hidden";

        for (let i = tweets.length - 1; i >= 0; i--) {

            var authdiv = document.createElement("div");
            var tweetdiv = document.createElement("div");
            var div = document.getElementById("news");


            authdiv.innerHTML = tweets[i].author;//for display
            div.appendChild(authdiv);
            tweetdiv.innerHTML = tweets[i].tweet;//for display
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


            //for display like & retweet button
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
    //declaration of other functions
    function changetextcolor() {
        tweetdiv.style.color = "red";

    }
    function retweetfunc() {
        var authordiv1 = document.createElement("div");
        authordiv1.innerHTML = tweets[count].author;//for display
        div.appendChild(authordiv1);
        var tweetdiv1 = document.createElement("div");
        tweetdiv1.innerHTML = tweets[count].tweet;//for display
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





