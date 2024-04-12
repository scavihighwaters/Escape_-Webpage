function openRandomPage() {
    // Generate a random number between 0 and 20 (inclusive)
    const randomNumber = Math.floor(Math.random() * 21); // Generates a number from 0 to 20
    
    // Based on the random number, open a specific webpage
    switch (randomNumber) {
        case 0:
            window.open("maze_00/maze_00.html", "_blank");
            break;
        case 1:
            window.open("maze_01/maze_01.html", "_blank");
            break;
        case 2:
            window.open("maze_02/maze_02.html", "_blank");
            break;
        case 3:
            window.open("maze_03/maze_03.html", "_blank");
            break;
        case 4:
            window.open("maze_04/maze_04.html", "_blank");
            break;    
        default:
            openRandomPage();
            break;
    }
}