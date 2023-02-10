let endpoint = "https://restcountries.com/v2/all";
let xhr;
let select;
let arr;
function load(){
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = processResponse;
    xhr.open("get",endpoint,true);
    xhr.send(null);
    let div = document.getElementById("divv");
    div.innerText="Loading....";
    console.log(div);
}
function processResponse(){
    if(xhr.readyState === 4 && xhr.status === 200){
        let jsonStr = xhr.responseText;
        arr = JSON.parse(jsonStr);
        select = document.getElementById("select");
         document.getElementById("divv").innerText ="";
         arr.forEach((obj)=>{
          select.innerHTML += `<option> ${obj.name} </option>`
        });
    }
}
select = document.getElementById("select");
select.addEventListener("change",(e)=>{
    let country = select.value;
    var result = arr.find(item => item.name === country);
    let name = document.getElementById("name");
    name.innerHTML= country;
    let region = document.getElementById("region");
    region.innerText = result.subregion;
    let img  = document.getElementById("img");
    img.setAttribute("src",result.flags.png);
    let sp1 = document.getElementById("sp1");
    let sp2 = document.getElementById("sp2");
    let sp3 = document.getElementById("sp3");
    let pop = result.population / 100000;
    sp1.innerHTML= "<span>👪</span>  "+pop  + " millions";
    let lan = result.languages[0].name;
    sp2.innerHTML = "<span>🗣️</span>  "+ lan;
    sp3.innerHTML =  "<span>💰</span> "+ result.currencies[0].name;
    let div = document.getElementById("div");
    console.log(div);
    div.style.display="block";
   });