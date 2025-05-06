let infos;
let clicked;
let wantedCategory;
let categorys = [`תכנות`,`גרפיקה`,'פה"מ', 'עבודה עם לקוח', 'באגים'];

window.addEventListener("load", () => {
   if(sessionStorage.getItem("page") === null || sessionStorage.getItem("page")=== "1"){
        sessionStorage.setItem("page", "1");
        document.getElementById(`category1`).addEventListener('click',AskQuestion);
            for (let i = 2; i < 7; i++) {
                document.getElementById(`category${i}`).addEventListener('click',SubjectClicked);
            }

            document.getElementById(`magnify-glass`).addEventListener('click', FilterCategorys);
            document.getElementById(`search-area`).addEventListener('input', BackCategorys);
   }
   
   if(sessionStorage.getItem("page")=== "2"){
        console.log(sessionStorage.getItem("category"));
        document.getElementById("home").addEventListener('click',BackHome);
        document.getElementById("filter-noanswer").addEventListener('click',AnswerVSNotAnswer);
        document.getElementById("filter-answer").addEventListener('click',AnswerVSNotAnswer);
        document.getElementById("filter-noanswer1").addEventListener('click',AnswerVSNotAnswer);
        document.getElementById("filter-answer1").addEventListener('click',AnswerVSNotAnswer);
        document.getElementById("category-title").innerText = sessionStorage.getItem("category");

        infos = document.querySelectorAll('.info-div');
        for (let i=1; i<=3; i++) {
            document.getElementById(`call${i}`).addEventListener("click", openInfo);
        };
        clicked = 0;
   }

   if(sessionStorage.getItem("page") === "3"){
        document.getElementById("home").addEventListener('click',BackHome);
   }

});

const SubjectClicked = (event) =>{
    switch (event.target.id) {
        case "category1":
            sessionStorage.setItem("category", "תכנות");
          break;
        case "category2":
            sessionStorage.setItem("category", "תכנות");
          break;
        case "category3":
            sessionStorage.setItem("category", "גרפיקה");
          break;
        case "category4":
            sessionStorage.setItem("category", 'פה"מ');
          break;
        case "category5":
            sessionStorage.setItem("category", "עבודה עם לקוח");
          break;
        case "category6":
            sessionStorage.setItem("category", "באגים");
          break;
      }
    sessionStorage.setItem("page", "2");
    window.location.href = "index2.html";
    
}

const BackHome = () =>{
    sessionStorage.setItem("page", "1");
    window.location.href = "index1.html";
}

const AskQuestion = () =>{
    sessionStorage.setItem("page", "3");
    window.location.href = "index3.html";
}

const FilterCategorys = () =>{
    wantedCategory =  document.getElementById(`search-area`).value;
    for (let i = 0; i < categorys.length; i++) {
        if(categorys[i] !== wantedCategory){
            document.getElementById(`category${i+2}`).style.display = "none";
        }
    }
}

const BackCategorys = () =>{
    if(document.getElementById(`search-area`).value === ""){
        for (let i = 0; i < categorys.length; i++) {
            document.getElementById(`category${i+2}`).style.display = "block";
        }
    }
}


const AnswerVSNotAnswer = (event) =>{
    console.log(event.target.id);
    if(event.target.id === "filter-noanswer"){
        document.getElementById(`question-with-answer`).style.display = "none";
        document.getElementById(`question-with-noanswer`).style.display = "block";
    } else{
        document.getElementById(`question-with-noanswer`).style.display = "none";
        document.getElementById(`question-with-answer`).style.display = "block";
    }
}


const openInfo = (event) => {
    for (let i=1; i<=3; i++) {
        document.getElementById(`info${i}`).style.height = "0vh";
    };
    if (clicked === event.target.id.slice(-1)) {
        clicked = event.target.id.slice(-1);
        document.getElementById(`info${clicked}`).style.height = "0vh";
        document.getElementById(`call${clicked}`).style.backgroundColor = "#337e97";
        clicked = 0;
    } else {
        if (clicked > 0) {
            document.getElementById(`call${clicked}`).style.backgroundColor = "#337e97";
        };
        clicked = event.target.id.slice(-1);
        document.getElementById(`info${clicked}`).style.height = "12vh";
        document.getElementById(`call${clicked}`).style.backgroundColor = "#337e97";
        clicked = event.target.id.slice(-1);
    
    }
}

