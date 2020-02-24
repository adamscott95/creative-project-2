const apikey = "$2a$10$QYCdk5ClGwcRvlo3vsAH8u1Fcr5oKYP50yVIsrhAgLoYR9hktgcpq"

function getAttribute(val) {
    if (val === undefined) {
        return "N/A"
    }
    else {
        return val
    }
}
    
document.addEventListener("DOMContentLoaded", () => {
    event.preventDefault();
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const char_id = urlParams.get('id');
    const url = "https://www.potterapi.com/v1/characters/" + char_id + "?key=" + apikey;
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(json) {  
            let results = "<div class='header'><h1>" + getAttribute(json.name) + "</h1></div>";
            results += "<div class='char_attribute'><p>House: " + getAttribute(json.house) + "</p></div>"
            results += "<div class='char_attribute'><p>Role: " + getAttribute(json.role) + "</p></div>"
            results += "<div class='char_attribute'><p>Alias: " + getAttribute(json.alias) + "</p></div>"
            results += "<div class='char_attribute'><p>In the Order of the Phoenix: " + getAttribute(json.orderOfThePhoenix) + "</p></div>"
            results += "<div class='char_attribute'><p>Is Death Eater: " + getAttribute(json.deathEater) + "</p></div>"
            results += "<div class='char_attribute'><p>Works for the Ministry:  " + getAttribute(json.ministryOfMagic) + "</p></div>"
            results += "<div class='char_attribute'><p>Blood Status: " + getAttribute(json.bloodStatus) + "</p></div>"
            results += "<div class='char_attribute'><p>Species: " + getAttribute(json.species) + "</p></div>"

            document.getElementById("characterInfo").innerHTML = results;
        });
    });