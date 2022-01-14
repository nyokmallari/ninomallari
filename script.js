var content1 = document.getElementById("content1");
        var content2 = document.getElementById("content2");
        var content3 = document.getElementById("content3");
        var content4 = document.getElementById("content4");
        var content5 = document.getElementById("content5");
        var content6 = document.getElementById("content6");
        var btn1 = document.getElementById("btn1");
        var btn2 = document.getElementById("btn2");
        var btn3 = document.getElementById("btn3");
        var btn4 = document.getElementById("btn4");
        var btn5 = document.getElementById("btn5");
        var btn6 = document.getElementById("btn6");
        
        function openONE() {
            content1.style.opacity = "1";
            content2.style.opacity = "0";
            content3.style.opacity = "0";
            content4.style.opacity = "0";
            content5.style.opacity = "0";
            content6.style.opacity = "0";
            btn1.style.color = "#c0c0c0";
            btn2.style.color = "#000";
            btn3.style.color = "#000";
            btn4.style.color = "#000";
            btn5.style.color = "#000";
            btn6.style.color = "#000";
            content1.style.transitionDelay = "0.1s";
            content2.style.transitionDelay = "0s";
            content3.style.transitionDelay = "0s";
            content4.style.transitionDelay = "0s";
            content5.style.transitionDelay = "0s";
            content6.style.transitionDelay = "0s";
        }

        function openTWO() {
            content1.style.opacity = "0";
            content2.style.opacity = "1";
            content3.style.opacity = "0";
            content4.style.opacity = "0";
            content5.style.opacity = "0";
            content6.style.opacity = "0";
            btn1.style.color = "#000";
            btn2.style.color = "#b5e48c";
            btn3.style.color = "#000";
            btn4.style.color = "#000";
            btn5.style.color = "#000";
            btn6.style.color = "#000";
            content1.style.transitionDelay = "0s";
            content2.style.transitionDelay = "0.1s";
            content3.style.transitionDelay = "0s";
            content4.style.transitionDelay = "0s";
            content5.style.transitionDelay = "0s";
            content6.style.transitionDelay = "0s";
        }

        function openTHREE() {
            content1.style.opacity = "0";
            content2.style.opacity = "0";
            content3.style.opacity = "1";
            content4.style.opacity = "0";
            content5.style.opacity = "0";
            content6.style.opacity = "0";
            btn1.style.color = "#000";
            btn2.style.color = "#000";
            btn3.style.color = "#b5e48c";
            btn4.style.color = "#000";
            btn5.style.color = "#000";
            btn6.style.color = "#000";
            content1.style.transitionDelay = "0s";
            content2.style.transitionDelay = "0s";
            content3.style.transitionDelay = "0.1s";
            content4.style.transitionDelay = "0s";
            content5.style.transitionDelay = "0s";
            content6.style.transitionDelay = "0s";
        }

        function openFOUR() {
            content1.style.opacity = "0";
            content2.style.opacity = "0";
            content3.style.opacity = "0";
            content4.style.opacity = "1";
            content5.style.opacity = "0";
            content6.style.opacity = "0";
            btn1.style.color = "#000";
            btn2.style.color = "#000";
            btn3.style.color = "#000";
            btn4.style.color = "#b5e48c";
            btn5.style.color = "#000";
            btn6.style.color = "#000";
            content1.style.transitionDelay = "0s";
            content2.style.transitionDelay = "0s";
            content3.style.transitionDelay = "0s";
            content4.style.transitionDelay = "0.1s";
            content5.style.transitionDelay = "0s";
            content6.style.transitionDelay = "0s";
        }

        function openFIVE() {
            content1.style.opacity = "0";
            content2.style.opacity = "0";
            content3.style.opacity = "0";
            content4.style.opacity = "0";
            content5.style.opacity = "1";
            content6.style.opacity = "0";
            btn1.style.color = "#000";
            btn2.style.color = "#000";
            btn3.style.color = "#000";
            btn4.style.color = "#000";
            btn5.style.color = "#b5e48c";
            btn6.style.color = "#000";
            content1.style.transitionDelay = "0s";
            content2.style.transitionDelay = "0s";
            content3.style.transitionDelay = "0s";
            content4.style.transitionDelay = "0s";
            content5.style.transitionDelay = "0.1s";
            content6.style.transitionDelay = "0s";
        }

        function openSIX() {
            content1.style.opacity = "0";
            content2.style.opacity = "0";
            content3.style.opacity = "0";
            content4.style.opacity = "0";
            content5.style.opacity = "0";
            content6.style.opacity = "1";
            btn1.style.color = "#000";
            btn2.style.color = "#000";
            btn3.style.color = "#000";
            btn4.style.color = "#000";
            btn5.style.color = "#000";
            btn6.style.color = "#b5e48c";
            content1.style.transitionDelay = "0s";
            content2.style.transitionDelay = "0s";
            content3.style.transitionDelay = "0s";
            content4.style.transitionDelay = "0s";
            content5.style.transitionDelay = "0s";
            content6.style.transitionDelay = "0.1s";
        }

/*let number = document.getElementById("number");
let counter = 0;
setInterval(() => {
    if (counter==80){
        clearInterval();
    }
    else {
    counter += 1;
    number.innerHTML = counter + "%";
    }
}, 30); */