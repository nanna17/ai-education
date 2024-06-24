function navigateTo(section) {
    if (section === 'quiz') {
        window.location.href = 'http://127.0.0.1:5500/a1.html';
    } else if (section === 'theory') {
        window.location.href = 'http://127.0.0.1:5500/theory.html';
    } else if (section === 'profile') {
        window.location.href = 'http://127.0.0.1:5500/text.html/profile.html';
    }
}

// Function to navigate to different sections
// function navigateTo(section) {
//     // Hide landing page elements
//     var landingPage = document.querySelector('.landing-page');
//     if (landingPage) {
//         landingPage.style.display = 'none';
    // }

    // Show back button
//     var backButtonContainer = document.getElementById('backButtonContainer');
//     if (backButtonContainer) {
//         backButtonContainer.style.display = 'block';
//     }

//     // Implement your navigation logic based on 'section' parameter
//     switch (section) {
//         case 'quiz':
//             // Implement quiz navigation logic or redirection
//             break;
//         case 'theory':
//             // Implement theory content navigation logic or redirection
//             break;
//         case 'profile':
//             // Implement profile navigation logic or redirection
//             break;
//         default:
//             break;
//     }

// // Function to go back to landing page
// function goBack() {
//     // Show landing page elements
//     var landingPage = document.querySelector('.landing-page');
//     if (landingPage) {
//         landingPage.style.display = 'block';
//     }

//     // Hide back button
//     var backButtonContainer = document.getElementById('backButtonContainer');
//     if (backButtonContainer) {
//         backButtonContainer.style.display = 'none';
//     }
// }
