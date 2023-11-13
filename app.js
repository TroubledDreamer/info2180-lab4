document.addEventListener("DOMContentLoaded", function () {
    const search = document.getElementById("search");
    const nameAliasInput = document.getElementById("nameAlias");
    const resultDiv = document.getElementById("Results")


    function fetchSuperhero(query) {
        // Sanitize the input (you may use a more comprehensive method depending on requirements)
        const sanitizedQuery = encodeURIComponent(query);

        // Using the fetch() API
        fetch(`superheroes.php?query=${sanitizedQuery}`)
            .then((response) => response.text())
            .then((data) => {
                // Update the HTML
                
                displayResult(data);
            })
            .catch((error) => {
                resultDiv.innerHTML = "Doesnot exist";
            });
    }

    function fetchSuper(){
        fetch('superheroes.php')
        .then(response => response.text())
        .then(data => {
            // Update the HTML
            const superheroesList = document.getElementById('superheroes-list');
            console.log(data);
            superheroesList.innerHTML = data;
    
        
        })
        .catch(error => console.error('Fetch error:', error));
    
    
    }

    function displayResult(superheroes) {
        // Clear previous result
        resultDiv.innerHTML = "";

        var superheroes = superheroes.split(']')[0];
        superheroes += "]"
 
        console.log(superheroes);
        
        var dataArray = JSON.parse(superheroes)
        




        if (superheroes.length === 0) {
            fetchSuper();
        } else {
            // Display details for a single superhero
            var firstObject = dataArray[0];
            resultDiv.innerHTML = `
                <h3>${firstObject.alias}</h3>
                <h4>${firstObject.name}</h4>
                <p>${firstObject.biography}</p>
            `;
        } 
    }

    search.addEventListener("click", function () {
        fetchSuperhero(nameAliasInput.value);
    });

});



