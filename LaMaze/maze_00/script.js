document.addEventListener('DOMContentLoaded', function () {
    // Initialize a queue with the predefined order of box IDs
    const correctOrderQueue = ['r0102', 'r0202', 'r0203', 'r0204', 'r0205', 'r0206', 'r0306', 'r0406', 'r0407', 'r0408', 'r0409', 'r0410', 'r0310', 'r0210', 'r0211', 'r0212', 'r0312', 'r0412', 'r0512', 'r0612', 'r0613', 'r0614', 'r0615', 'r0616', 'r0617', 'r0618', 'r0518', 'r0418', 'r0318', 'r0218', 'r0219', 'r0220', 'r0320', 'r0420', 'r0520', 'r0620', 'r0720', 'r0820', 'r0819', 'r0818', 'r0918', 'r1018', 'r1017', 'r1016', 'r0916', 'r0816', 'r0815', 'r0814', 'r0914', 'r1014', 'r1114', 'r1214', 'r1213', 'r1212', 'r1211', 'r1210', 'r1110', 'r1010', 'r0910', 'r0810', 'r0809', 'r0808', 'r0708', 'r0608', 'r0607', 'r0606', 'r0605', 'r0604', 'r0704', 'r0804', 'r0805', 'r0806', 'r0906', 'r1006', 'r1005', 'r1004', 'r1104', 'r1204', 'r1304', 'r1404', 'r1504', 'r1604', 'r1603', 'r1602', 'r1702', 'r1802', 'r1902', 'r2002', 'r2003', 'r2004', 'r1904', 'r1804', 'r1805', 'r1806', 'r1906', 'r2006', 'r2007', 'r2008', 'r2009', 'r2010', 'r2011', 'r2012', 'r1912', 'r1812', 'r1712', 'r1612', 'r1611', 'r1610', 'r1609', 'r1608', 'r1607', 'r1606', 'r1506', 'r1406', 'r1306', 'r1206', 'r1207', 'r1208', 'r1308', 'r1408', 'r1409', 'r1410', 'r1411', 'r1412', 'r1413', 'r1414', 'r1415', 'r1416', 'r1516', 'r1616', 'r1716', 'r1816', 'r1916', 'r2016', 'r2017', 'r2018', 'r2019', 'r2020', 'r2120'];

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
