// ==UserScript==
// @name         My Auto-Updating Script
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  A script that automatically updates from GitHub
// @author       Your Name
// @match        https://example.com/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/Sushil125/Problem_Solve/main/Test.user.js
// @downloadURL  https://raw.githubusercontent.com/Sushil125/Problem_Solve/main/Test.user.js
// ==/UserScript==

(function() {
    const msg = "✅ Script version 1.5 running!";
    console.log(msg);
    const banner = document.createElement('div');
    banner.textContent = msg;
    banner.style.position = 'fixed';
    banner.style.top = '0';
    banner.style.left = '0';
    banner.style.right = '0';
    banner.style.background = '#0f0';
    banner.style.color = '#000';
    banner.style.padding = '5px';
    banner.style.zIndex = '9999';
    document.body.appendChild(banner);
})();

