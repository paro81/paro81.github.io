document.addEventListener("DOMContentLoaded", function() {
        // note to self: add messages below
            var messages = [
                "in the works sometimes",
                "pro casual geo dasher", 
                "rhythm music is interesting", 
                "the himothy is real", 
                "idk what else to say... hello?", 
                "don't go outside", 
                "touch grass, have you seen a tree before?", 
                "realizing my errors since 2013", 
                "minimal effort, high reward", 
                "a lackluster of ideas, galore",
                "somehow, in the end, i still exist.",
                "asdjjfgjsklafjlasfjasdkjgfhkdsafdjfkll kind of situation",
                "ERROR 404 PAGE NOT FOUND",
                "i hate circles, squares are okay, triangles are deadly & weird",
                "watch me, i'm gonna cook soon, just you wait.",
                "redemption arc in the works :D",
                "i'm sorry that you're reading this"
            ];
        
            var randomIndex = Math.floor(Math.random() * messages.length);
            var randomMessage = messages[randomIndex];
        
            var messageElement = document.getElementById("message");
            messageElement.textContent = randomMessage;
            messageElement.style.color = "#d1d7e6";
        });
