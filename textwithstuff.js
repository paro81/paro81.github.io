document.addEventListener("DOMContentLoaded", function() {
        // add messages below
            var messages = [
              "in the works sometimes",
              "pro casual geo dasher", 
              "rhythm music is interesting", 
              "the himothy is real", 
              "idk what else to say", 
              "don't go outside", 
              "touch grass, have you seen a tree before?", 
              "realising my errors since 2013", 
              "minimal effort, high reward", 
              "a lackluster of ideas, galore"
            ];
        
            var randomIndex = Math.floor(Math.random() * messages.length);
            var randomMessage = messages[randomIndex];
        
            var messageElement = document.getElementById("message");
            messageElement.textContent = randomMessage;
            messageElement.style.color = "#d1d7e6";
        });
