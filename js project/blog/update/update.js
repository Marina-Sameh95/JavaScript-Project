var requrl=new URL(document.URL);
var qstr=requrl.search;
var searchpar=new URLSearchParams(qstr);
var id=searchpar.get("id");
alert(id);
var req = new XMLHttpRequest();

req.open('GET', 'https://jsonplaceholder.typicode.com/posts/'+id.toString());


req.addEventListener('load', function(event) {
        var data = JSON.parse(req.response);
    drawPosts(data);
});


req.addEventListener('error', function(event) {

});
           
req.send();

function drawPosts(posts) 
{
    document.getElementById("title").value=posts.title;
    document.getElementById("post").value=posts.body;
}

function post()
{
    var Jasondata={
        "userId":1,
        "id":0,
        "title":null,
        "body":null
    }
    Jasondata.title=document.getElementById("title").value;
    Jasondata.body=document.getElementById("post").value;
    Jasondata.id=id;
    var json = JSON.stringify(Jasondata);
    var req = new XMLHttpRequest();
    req.open("PUT",'https://jsonplaceholder.typicode.com/posts/'+id.toString(), true);
    req.setRequestHeader('Content-type','application/json; charset=utf-8');
    req.onload = function () {
	var users = JSON.parse(req.responseText);
	if (req.readyState == 4 && req.status == "200") {
        console.log(users);
        alert("Done")
	} else {
		console.error(users);
	}
}
req.send(json);
}


