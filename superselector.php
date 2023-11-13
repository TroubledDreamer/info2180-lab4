<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

// Include the file containing superhero data
include 'superheroes.php';

// Call the function to get superhero data
$superheroes = getSuperheroes();

$query = isset($_GET['query']) ? trim($_GET['query']) : '';

if ($query !== '') {
    // Search for a specific superhero by name or alias
    $filteredSuperheroes = array_filter($superheroes, function ($superhero) use ($query) {
        return stripos($superhero['name'], $query) !== false || stripos($superhero['alias'], $query) !== false;
    });

    echo json_encode(array_values($filteredSuperheroes));
} else {
    // Return the original list of superheroes
    echo json_encode($superheroes);
}
?>