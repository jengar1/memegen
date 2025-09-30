const memeForm= document.getElementById("memeForm");
const memeContainer = document.getElementById("memeContainer");
memeForm.addEventListener("submit",function (e){
    e.preventDefault();
    const topText = document.getElementById ("topText").value.trim();
    const bottomText = document.getElementById ("bottomText").value.trim();
    const imageUrl = document.getElementById ("imageUrl").value.trim();

    if (!topText || !bottomText || !imageUrl){
        alert("Please fill in empty fields");
        return;
    }
    const meme = document.createElement("div");
    meme.classList.add("meme");
    const img = document.createElement("img");
    img.src = imageUrl;
    const topDiv = document.createElement("div");
    topDiv.classList.add("meme-text", "top");
    topDiv.innerText = topText;
    const bottomDiv = document.createElement("div");
    bottomDiv.classList.add("meme-text", "bottom");
    bottomDiv.innertext = bottomText;
    const deletebtn = document.createElement("buttom");
    deletebtn.innertText = "Delete current meme";
    deletebtn.classList.add("delete-btn");
    deletebtn.addEventListener("click", function(e){
        e.target.parentElement.remove();
    });
    meme.appendChild(img);
    meme.appendChild(topDiv);
    meme.appendChild(bottomDiv);
    meme.appendChild(deletebtn);

    memeContainer.appendChild(meme);

    memeForm.requestFullscreen();
    
});