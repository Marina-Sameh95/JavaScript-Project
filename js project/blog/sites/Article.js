var req = new XMLHttpRequest();

req.open('GET','https://jsonplaceholder.typicode.com/posts');


req.addEventListener('load', function(event) {
        var data = JSON.parse(req.response);
    drawPosts(data);
});


req.addEventListener('error', function(event) {

});
           
req.send();


function drawPosts(posts) {
    var table = document.getElementById("myTable");

    for(var i=0; i<posts.length; i++) {
        
        var trr=document.createElement("tr") ;
        trr.style.borderBottom="1px solid #ccc";
        trr.style.lineHeight="1.8em";
        trr.setAttribute("id","trr"+(i+1).toString());
        
        
        var tdd1=document.createElement("td");
        tdd1.innerHTML=posts[i].title;
        tdd1.style.width="5%";
        tdd1.style.fontWeight="bold";
        
        var tdd2=document.createElement("td");
        tdd2.style.width="40%";
        tdd2.style.textAlign="center";
        tdd2.innerHTML=posts[i].body;
        var tdd3=document.createElement("td");
        
        var anchorEdit=document.createElement("a");
        anchorEdit.innerHTML="Edit";
        anchorEdit.href="../update/update.html"+"?"+"id="+(i+1).toString();
        
        var anchorDelete=document.createElement("a");
        anchorDelete.innerHTML="Delete";
        anchorDelete.href="#";
        anchorDelete.setAttribute("onclick","Delete("+posts[i].id +");");
        
        tdd3.appendChild(anchorEdit);
        tdd3.appendChild(anchorDelete);
        tdd3.style.width="10%";
        tdd3.style.textAlign="center";


        
        trr.appendChild(tdd1);
        trr.appendChild(tdd2);
        trr.appendChild(tdd3);
        table.appendChild(trr);

        
    }
}

function Delete(id) {


    var conf = confirm("Do you want to delete this data?");
    if (conf) {
        var xhr = new XMLHttpRequest();
        xhr.open("DELETE", 'https://jsonplaceholder.typicode.com/posts/' + id);

        xhr.addEventListener('load', function() {
            if (xhr.readyState == 4 && xhr.status == "200") {
                var tablerow = document.getElementById("tr" + id);
                tablerow.style.display = "none";
                alert("successful delete");
            } else {
                alert("error");
            }
        });

        xhr.send(null);

    }
}