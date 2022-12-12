//getting all required elements
const search = document.querySelector(".search-input");
const inputBox = search.querySelector("input");
const suggBox = search.querySelector(".autocom-box");

//if user press any key and release
inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if(userData){
        emptyArray = suggetions.filter((data)=>{
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            return data = '<li>'+ data +'</li>';
        });
        console.log(emptyArray);
        search.classList.add("active");
    }else{

    }
    showSuggestions(emptyArray);
} 

function showSuggestions(list){
    let listData;
    if(!list.length){

    }else{
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}
