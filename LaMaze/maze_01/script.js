document.addEventListener('DOMContentLoaded', function () {
    // Initialize a queue with the predefined order of box IDs
    const correctOrderQueue = ['r0102', 'r0202', 'r0302', 'r0402', 'r0502', 'r0602', 'r0603', 'r0604', 'r0504', 'r0404', 'r0304', 'r0204', 'r0205', 'r0206', 'r0207', 'r0208', 'r0209', 'r0210', 'r0211', 'r0212', 'r0213', 'r0214', 'r0314', 'r0414', 'r0514', 'r0614', 'r0615', 'r0616', 'r0516', 'r0416', 'r0316', 'r0216', 'r0217', 'r0218', 'r0318', 'r0418', 'r0419', 'r0420', 'r0520', 'r0620', 'r0720', 'r0820', 'r0819', 'r0818', 'r0918', 'r1018', 'r1017', 'r1016', 'r0916', 'r0816', 'r0815', 'r0814', 'r0813', 'r0812', 'r0811', 'r0810', 'r0710', 'r0610', 'r0611', 'r0612', 'r0512', 'r0412', 'r0411', 'r0410', 'r0409', 'r0408', 'r0508', 'r0608', 'r0607', 'r0606', 'r0706', 'r0806', 'r0805', 'r0804', 'r0803', 'r0802', 'r0902', 'r1002', 'r1102', 'r1202', 'r1302', 'r1402', 'r1403', 'r1404', 'r1405', 'r1406', 'r1407', 'r1408', 'r1308', 'r1208', 'r1108', 'r1008', 'r1009', 'r1010', 'r1110', 'r1210', 'r1211', 'r1212', 'r1213', 'r1214', 'r1314', 'r1414', 'r1413', 'r1412', 'r1512', 'r1612', 'r1613', 'r1614', 'r1615', 'r1616', 'r1516', 'r1416', 'r1316', 'r1216', 'r1217', 'r1218', 'r1219', 'r1220', 'r1320', 'r1420', 'r1520', 'r1620', 'r1720', 'r1820', 'r1920', 'r2020', 'r2120'];

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
