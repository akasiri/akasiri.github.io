let resumeButton = document.getElementById("resume-button"),
    linkedinButton = document.getElementById("linkedin-button"),
    githubButton = document.getElementById("github-button");

resumeButton.onclick = function () {
    window.open("/ArzangKasiriResume.pdf");
};
linkedinButton.onclick = function () {
    location.href = "https://linkedin.com/in/arzang-kasiri/";
};
githubButton.onclick = function () {
    location.href = "https://github.com/akasiri";
};

// onload: assign photo to background and assign info