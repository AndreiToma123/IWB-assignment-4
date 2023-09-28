if(document.readyState !== "loading"){
    console.log("Document ready!")
    initializeCode();
} else {
    document.addEventListener("DOMContentLoaded", function() {
        console.log("DOMContentLoaded event fired");
        initializeCode();
    })
}


async function initializeCode(){
    const url = "https://api.tvmaze.com/search/shows?q=";
    const button = document.getElementById("submit-data");
    const showContainer = document.querySelector(".show-container");

    button.addEventListener("click", async function(){
        const parameter = document.getElementById("input-show").value;
        const urlComplete = url.concat(parameter);
        const userPromise = await fetch(urlComplete);
        const userJson = await userPromise.json();
        console.log(userJson);

        showContainer.innerHTML = "";

        for(let i = 0; i < userJson.length; i++){
            const show = userJson[i].show;
            let div = document.createElement("div");
            let img = document.createElement("img");
            let div2 = document.createElement("div");
            let h1 = document.createElement("h1");
            let p = document.createElement("p");

            div.className = "show-data";
            img.src = show.image.medium;
            div2.className = "show-info";
            h1.textContent = show.name;
            p.innerHTML = show.summary;
            
            div2.appendChild(h1);
            div2.appendChild(p);
            div.appendChild(img);
            div.appendChild(div2);
            showContainer.appendChild(div);
            
        }
    })
}