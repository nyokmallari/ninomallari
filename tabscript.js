var content1 = document.getElementById("content1");
        var content2 = document.getElementById("content2");
        var content3 = document.getElementById("content3");
        var btn1 = document.getElementById("btn1");
        var btn2 = document.getElementById("btn2");
        var btn3 = document.getElementById("btn3");
        
        function openONE() {
            content1.style.transform = "translateX(0)";
            content2.style.transform = "translateX(1000%)";
            content3.style.transform = "translateX(1000% )";
            btn1.style.color = "#d30303";
            btn2.style.color = "#000";
            btn3.style.color = "#000";
            content1.style.transitionDelay = "0.1s";
            content2.style.transitionDelay = "0s";
            content3.style.transitionDelay = "0s";
        }

        function openTWO() {
            content1.style.transform = "translateX(1000%)";
            content2.style.transform = "translateX(0)";
            content3.style.transform = "translateX(1000% )";
            btn1.style.color = "#000";
            btn2.style.color = "#d30303";
            btn3.style.color = "#000";
            content1.style.transitionDelay = "0s";
            content2.style.transitionDelay = "0.1s";
            content3.style.transitionDelay = "0s";
        }

        function openTHREE() {
            content1.style.transform = "translateX(1000%)";
            content2.style.transform = "translateX(1000%)"
            content3.style.transform = "translateX(0)";
            btn1.style.color = "#000";
            btn2.style.color = "#000";
            btn3.style.color = "#d30303";
            content1.style.transitionDelay = "0s";
            content2.style.transitionDelay = "0s";
            content3.style.transitionDelay = "0.1s";
        }