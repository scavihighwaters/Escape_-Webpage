document.addEventListener('DOMContentLoaded', function () {
    // Initialize a queue with the predefined order of box IDs
    const correctOrderQueue = ['r0102', 'r0202', 'r0302', 'r0402', 'r0403', 'r0404', 'r0304', 'r0204', 'r0205', 'r0206', 'r0207', 'r0208', 'r0209', 'r0210', 'r0310', 'r0410', 'r0409', 'r0408', 'r0508', 'r0608', 'r0607', 'r0606', 'r0706', 'r0806', 'r0906', 'r1006', 'r1106', 'r1206', 'r1207', 'r1208', 'r1209', 'r1210', 'r1110', 'r1010', 'r0910', 'r0911', 'r0912', 'r1012', 'r1112', 'r1212', 'r1213', 'r1214', 'r1314', 'r1414', 'r1316', 'r1416', 'r1415', 'r1414', 'r1413', 'r1412', 'r1512', 'r1612', 'r1611', 'r1610', 'r1609', 'r1608', 'r1708', 'r1808', 'r1809', 'r1810', 'r1811', 'r1812', 'r1912', 'r2012', 'r2013', 'r2014', 'r2015', 'r2016', 'r2017', 'r2018', 'r1918', 'r1818', 'r1819', 'r1820', 'r1920', 'r2020','r2120'];

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
