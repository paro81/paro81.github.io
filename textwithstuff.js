document.addEventListener("DOMContentLoaded", function() {
        //add messages below
            var messages = [
                "in the works sometimes", 
                "rhythm music is interesting", 
                "the himothy is real",
                "don't go outside", 
                "touch grass, have you seen a tree before?", 
                "realizing my errors since 2013", 
                "minimal effort, high reward", 
                "a lackluster of ideas galore",
                "somehow, in the end, i still exist.",
                "asdjjfgjsklafjlasfjasdkjgfhkdsafdjfkll",
                "ERROR 404 PAGE NOT FOUND",
                "i hate circles, squares are okay, triangles are deadly",
                "watch me, i'm gonna cook soon, just you wait.",
                "redemption arc in the works",
                "i'm sorry that you're reading this",
                "when you put in the work and then things get worse:",
                "peggy the goat",
                "to cook or not to cook, there is no question. melt the frying pan",
                "bigger than the instagram, bigger than the twitch",
                "fake it till you make it",
                "rip good ol' laptop june2017-july2025",
                "why use a normal linktree type website",
                "spam spam spam all i do is spam"
            ];
        
            var randomIndex = Math.floor(Math.random() * messages.length);
            var randomMessage = messages[randomIndex];
        
            var messageElement = document.getElementById("message");
            messageElement.textContent = randomMessage;
            messageElement.style.color = "#d1d7e6";
        });
