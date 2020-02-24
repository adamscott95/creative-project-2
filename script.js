const apikey = "$2a$10$QYCdk5ClGwcRvlo3vsAH8u1Fcr5oKYP50yVIsrhAgLoYR9hktgcpq"

document.addEventListener("DOMContentLoaded", () => {
    event.preventDefault();
    const url = "https://www.potterapi.com/v1/characters?key=" + apikey;
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            let results = "<h2>Click on a character to learn more.</h2>";
            for (let i=0; i < json.length; i++) {
                results += "<div class='character_tag'><a href='characterDetail.html?id=" + json[i]._id + "'>" + json[i].name + '</a></div>'                
            }
            document.getElementById("characterResults").innerHTML = results;
        });
    });



