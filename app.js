
document.addEventListener('DOMContentLoaded', function () {
const search = document.getElementById("search");




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



search.addEventListener('click', function () {
    fetchSuper();


});
});
