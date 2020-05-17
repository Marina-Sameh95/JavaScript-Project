
var req = new XMLHttpRequest();

req.open('GET', 'https://jsonplaceholder.typicode.com/posts');


req.addEventListener('load', function(event) {
    console.log(req.response);
    console.log(JSON.parse(req.response));
    var data = JSON.parse(req.response);
    drawPosts(data);
});


req.addEventListener('error', function(event) {

});

req.send();



function drawPosts(posts) {
    var row;
    for(var i=0; i<posts.length; i++) {
        console.log(posts[i].title, posts[i].body);
        //  creating new row every 2 posts
		if(i%2==0){
          if(i>1)
            document.getElementById("posts").appendChild(row);
        }
        if(i%2==0){
          row = document.createElement("div");
          row.classList.add("row", "mb-2");
        }

      	var col = document.createElement("div");
		col.classList.add("col-md-6");
		var post = document.createElement("div");
		post.classList.add("row" ,"no-gutters","border","rounded","overflow-hidden","flex-md-row","mb-4","shadow-sm","h-md-250","position-relative");

        var div1 = document.createElement("div");
        div1.classList.add("col","p-4","d-flex","flex-column","position-static");

        var strong = document.createElement("strong");
        strong.classList.add("d-inline-block","mb-2","text-success");
        strong.innerHTML = "Design";

        var h3 = document.createElement("h3");
        h3.classList.add("mb-0");
        h3.innerHTML = posts[i].title;

        var date = document.createElement("div");
        date.classList.add("mb-1","text-muted");
        date.innerHTML = "Nov 12";

        var p = document.createElement("p");
        p.classList.add("card-text","mb-auto");
        p.innerHTML = posts[i].body;


        var a = document.createElement("a");
        a.classList.add("stretched-link");
        a.innerHTML = "Continue reading";
        a.href = "#";


		div1.appendChild(strong);
		div1.appendChild(h3);
		div1.appendChild(date);
		div1.appendChild(p);
		div1.appendChild(a);

    	post.appendChild(div1);

        var div_svg = document.createElement("div");
        div_svg.classList.add("col-auto","d-none","d-lg-block");


        var svg = document.createElement("svg");
        svg.classList.add("bd-placeholder-img");
        svg.width="200";
        svg.height="250";
        svg.setAttribute("xmlns","http://www.w3.org/2000/svg");
        svg.setAttribute("preserveAspectRatio","xMidYMid slice");
        svg.setAttribute("focusable","false");
        svg.setAttribute("role","img");
        svg.setAttribute("aria-label","http://www.w3.org/2000/svg");
        svg.setAttribute("aria-label","placeholder: Thumbnail");
        svg.setAttribute("aria-label","placeholder: Thumbnail");
        svg.setAttribute("aria-label","placeholder: Thumbnail");
        svg.setAttribute("aria-label","placeholder: Thumbnail");


        var title = document.createElement("title");
        title.innerHTML = "Placeholder";

        var rect = document.createElement("rect");
        rect.width="100%";
        rect.height="100%";
        rect.fill="#55595c";


        var text = document.createElement("text");
        text.setAttribute("x","50%");
        text.setAttribute("y","100%");
        text.fill="#eceeef";
        text.setAttribute("dy",".3em");
        text.innerHTML="Thumbnail";

        svg.appendChild(title);
        svg.appendChild(rect);
        svg.appendChild(text);
        div_svg.appendChild(svg);

    	col.appendChild(post);



        row.appendChild(col);
        
    }
    document.getElementById("posts").appendChild(row);
}
