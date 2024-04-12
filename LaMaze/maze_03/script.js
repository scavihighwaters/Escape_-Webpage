document.addEventListener('DOMContentLoaded', function () {
    // Initialize a queue with the predefined order of box IDs
    const correctOrderQueue = ['r0102', 'r0202', 'r0302', 'r0402', 'r0403','r0404' ,'r0405', 'r0406', 'r0306', 'r0206', 'r0207', 'r0208', 'r0308', 'r0408', 'r0508', 'r0608', 'r0708', 'r0808', 'r0807', 'r0806', 'r0805', 'r0804', 'r0803', 'r0802', 'r0902', 'r1002', 'r1102', 'r1202', 'r1203', 'r1204', 'r1104', 'r1004', 'r1005', 'r1006', 'r1007', 'r1008', 'r1108', 'r1208', 'r1308', 'r1408', 'r1407', 'r1406', 'r1405', 'r1404', 'r1403', 'r1402', 'r1502', 'r1602', 'r1702', 'r1802', 'r1803', 'r1804', 'r1805', 'r1806', 'r1807', 'r1808', 'r1908', 'r2008', 'r2009', 'r2010', 'r2011', 'r2012', 'r2013', 'r2014', 'r2015', 'r2016', 'r1916', 'r1816', 'r1817', 'r1818', 'r1718', 'r1618', 'r1617', 'r1616', 'r1516', 'r1416', 'r1417', 'r1418', 'r1419', 'r1420', 'r1520', 'r1620', 'r1720', 'r1820', 'r1920', 'r2020', 'r2120'];

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
