const getDanishLang = document.getElementById("dansk");
const getEnglishLang = document.getElementById("dansk2");
const danskTekst = document.getElementById("container2")

getDanishLang.addEventListener("click", dansk);
getEnglishLang.addEventListener("click", engelsk);

function dansk() {
    fetch('json/users.json')
    .then((res) => res.json())
    .then((data) => {
    let output = '<h2 style="font-size: 1.7em; opacity: 0.6;"> Ofte stillede spørgsmål:</h2>';
    data.forEach(function(user) {
        output += `
<div class="hey">
<span class="faqlist">
         ${user.Question}</span> <br>
<span class="faqlist2">
        ${user.Answer} <br> <br> <br>
</span>
</div>

        `;
    })
        document.getElementById("output").innerHTML = output;
    })
}


function engelsk() {
    fetch('json/users2.json')
    .then((res) => res.json())
    .then((data) => {
    let output = '<h2 style="font-size: 1.7em; opacity: 0.6;" class="display-4 mb-4"> Frequently asked questions:</h2>';
    data.forEach(function(user) {
        output += `
<div class="hey">
<span class="faqlist">
         ${user.Question}</span> <br>
<span class="faqlist2">
        ${user.Answer} <br> <br> <br>
</span>
</div>

        `;
    })
        document.getElementById("output").innerHTML = output;
    })
}



getEnglishLang.addEventListener("click", function() {
    if (getEnglishLang.style.backgroundColor == "grey")
        
    {
        getEnglishLang.style.backgroundColor = "grey";
        getDanishLang.style.backgroundColor =  "white";
       
        

    }
    else {
        getEnglishLang.style.backgroundColor =  "grey";
        getDanishLang.style.backgroundColor =  "white";
        getEnglishLang.style.color =  "white";
        getDanishLang.style.color =  "black";
        danskTekst.style.display = "none";
        



        }
});




getDanishLang.addEventListener("click", function() {
    if (getDanishLang.style.backgroundColor == "grey")
        
    {
        getDanishLang.style.backgroundColor = "grey";
        getEnglishLang.style.backgroundColor =  "white";

    }
    else {
        getDanishLang.style.backgroundColor =  "grey";
        getEnglishLang.style.backgroundColor =  "white";
        getEnglishLang.style.color =  "black";
        getDanishLang.style.color =  "white";

        }
});






