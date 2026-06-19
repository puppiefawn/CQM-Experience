 var anchor = document.getElementById("anchor");
        // or anchor = getElementsByTagName('a') then do ('a')[0]

        anchor.addEventListener('click', doSomething, false);

        function doSomething() {
            alert('clicked');
        }