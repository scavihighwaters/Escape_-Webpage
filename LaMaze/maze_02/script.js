document.addEventListener('DOMContentLoaded', function () {
    // Initialize a queue with the predefined order of box IDs
    const correctOrderQueue = ['r0102', 'r0202','r0302', 'r0402', 'r0403', 'r0404', 'r0504', 'r0604', 'r0704', 'r0804', 'r0904', 'r1004', 'r1104', 'r1204', 'r1205', 'r1206', 'r1306', 'r1406', 'r1405', 'r1404', 'r1504', 'r1604','r1605','r1606', 'r1607', 'r1608', 'r1609', 'r1610', 'r1611', 'r1612', 'r1512', 'r1412', 'r1413', 'r1414', 'r1314', 'r1214', 'r1215', 'r1216', 'r1316', 'r1416', 'r1516', 'r1616', 'r1615', 'r1614', 'r1714', 'r1814', 'r1815', 'r1816', 'r1817', 'r1818', 'r1918', 'r2018', 'r2019', 'r2020', 'r2120'];

    // Add a click event listener to the main container to handle clicks on rows
    document.querySelector('.maze').addEventListener('click', function (event) {
        // Check if the clicked element has the class 'rows'
        if (event.target.classList.contains('rows')) {
            const clickedBoxId = event.target.id;

            // Call the function to change the background color to #4a6553
            changeColorToCustom(event.target, '#9292927e');

            // Check if the clicked box ID matches the expected order
            const expectedBoxId = correctOrderQueue.shift();
            if (clickedBoxId === expectedBoxId) {
                // Box clicked in the correct order
                console.log('Correct box clicked:', clickedBoxId);

                // Check if the user has completed the maze
                if (correctOrderQueue.length === 0) {
                    console.log('Congratulations! You have completed the maze!');
                    // You can add further actions or UI updates for completing the maze
                    showModal('Congratulations! You have completed the maze!');
                }
            } else {
                // Box clicked in the wrong order
                console.log('Wrong box clicked. Resetting the maze.');
                // You can add actions to reset the maze or provide feedback to the user
                // resetMaze();
                showModal('Sorry, wrong move. Reset the maze?');
            }
        }
    });

    // Function to change the background color to a custom color
    function changeColorToCustom(element, color) {
        element.style.backgroundColor = color;
    }

    // Function to reset the maze
    function resetMaze() {
        location.reload(); // Reloads the page.
    }

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // Get the message element
    var messageElement = document.getElementById("message");

    // Get the retry button
    var retryButton = document.getElementById("retryButton");

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    resetMaze();
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        resetMaze();
    }
    }

    // Function to display the modal with the message
    function showModal(message) {
    messageElement.textContent = message;
    modal.style.display = "block";
    }

    // Add click event listener to retry button
    retryButton.addEventListener("click", function() {
    // Close the modal
    modal.style.display = "none";
    // Add your logic to reset the maze or restart the game here
    resetMaze();
    });

});
