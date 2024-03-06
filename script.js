const fName = document.querySelector('#fName')
const lName = document.querySelector('#lName')
const pCountry = document.querySelector('#country')
const pScore = document.querySelector('#score')
const btn = document.querySelector('#btn1')
const section2 = document.querySelector('.section2')

let myData = [
    {
        firstName: "Umair",
        lastName: "Shaikh",
        country: "India",
        score: 191,
    },
    {
        firstName: "Virat",
        lastName: "Kohli",
        country: "India",
        score: 175,
    },
    {
        firstName: "Rohit",
        lastName: "Sharma",
        country: "India",
        score: 264,
    },
];


btn.addEventListener('click', (e) => {
    e.preventDefault();


    if (fName.value == "" || lName.value == "" || pCountry.value == "" || pScore.value == "") {
        alert("Please fill the fields")
    } else {
        let myObj = {
            firstName: fName.value,
            lastName: lName.value,
            country: pCountry.value,
            score: Number(pScore.value)
        };
        myData.push(myObj);
        updateData();

        fName.value = "";
        lName.value = "";
        pCountry.value = "";
        pScore.value = "";
    }
})


function updateData() {
    myData.sort((p1, p2) => {
        return p2.score - p1.score;
    });

    // console.log(myData);

    // myData.forEach((item) => {
    //     let div = document.createElement("div");
    //     console.log(div);

    //     let playerFName = document.createElement("p");
    //     let playerLName = document.createElement("p");
    //     let playerCountry = document.createElement("p");
    //     let playerScore = document.createElement("p");
    //     console.log(playerFName);

    //     playerFName.innerText = item.firstName;
    //     playerLName.innerText = item.lastName;
    //     playerCountry.innerText = item.country;
    //     playerScore.innerText = item.score;


    //     playerFName.style.fontSize = "20px"
    //     playerLName.style.fontSize = "20px"
    //     playerCountry.style.fontSize = "20px"
    //     playerScore.style.fontSize = "20px"


    //     playerFName.style.width = "5%"
    //     playerLName.style.width = "5%"
    //     playerCountry.style.width = "5%"
    //     playerScore.style.width = "5%"


    //     div.appendChild(playerFName);
    //     div.appendChild(playerLName);
    //     div.appendChild(playerCountry);
    //     div.appendChild(playerScore);

    //     div.append(playerFName, playerLName, playerCountry, playerScore);

    //     div.style.marginLeft = "120px"
    //     div.style.marginTop = "20px"
    //     div.style.width = "70%"
    //     div.style.display = "flex"
    //     div.style.justifyContent = "space-evenly"
    //     div.style.alignItems = "center"
    //     console.log("egklkl");
    //     section2.appendChild(div);

    let innerHtml = "";

    myData.forEach((ele) => {
        innerHtml += `
        <div class="content" style="padding: 10px; margin-bottom: 10px; margin-left: 90px; margin-top: 20px; width: 80%; display: flex; justify-content: space-evenly; align-items: center; border: 2px solid black">
                <span style="width: 5%; font-size: 20px; ">${ele.firstName}</span>
                <span style="width: 5%; font-size: 20px; margin-left: 70px;">${ele.lastName}</span>
                <span style="width: 5%; font-size: 20px; margin-left: 70px;">${ele.country}</span>
                <span style="width: 5%; font-size: 20px; margin-left: 40px;">${ele.score}</span>
            <div class = "btn-grp" style = "display: flex; justify-content: center; align-items: center; cursor: pointer;" >
                <span class="material-symbols-outlined" style = "padding:5px">
                delete
                </span>
                    <span class="add" style="font-size: 20px; padding:5px; margin-left: 10px; border: 2px solid black">+5</span>
                    <span class="sub" style="font-size: 20px; padding:5px; margin-left: 10px; border: 2px solid black">- 5</span>
            </div>
            
        </div>`;
    });

    section2.innerHTML = innerHtml;
    activateEventListener();
}

const activateEventListener = () => {
    document.querySelectorAll('.btn-grp').forEach((el, index) => {
        el.addEventListener('click', (e) => {
            if (e.srcElement.classList.value === 'add') {
                myData[index].score += 5;
            } else {
                myData[index].score -= 5;
            }
            updateData();
        })
    })
}

const deletePlayer = () => {
    let del = document.querySelector('.material-symbols-outlined');


}

window.onload = updateData();