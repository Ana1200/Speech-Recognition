const texts = document.querySelector(".texts");

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
    const text = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");

    p.innerText = text;
    texts.appendChild(p);

    if(e.results[0].isFinal){
        if(text.includes("Hola compa")){
            p = document.createElement("p");
            p.classList.add("replay");
            p.innerText = "Hola men";
            texts.appendChild(p);
        }
        if(text.includes("Cuál es tu nombre")|| text.includes("Como te llamas?")){
            p = document.createElement("p");
            p.classList.add("replay");
            p.innerText = "Mi nombre es Ana Karen, y el tuyo?";
            texts.appendChild(p);
        }
        if(text.includes("vamos a escuchar música")){
            p = document.createElement("p");
            p.classList.add("replay");
            p.innerText = " Opening your channel";
            texts.appendChild(p);
            window.open("https://www.youtube.com/watch?v=lqKkpbNkIh8&list=RDlqKkpbNkIh8&start_radio=1")
        }
        p = document.createElement("p");
    }

    console.log(e);
})

recognition.addEventListener("end", () => {
    recognition.start();
})
  recognition.start();