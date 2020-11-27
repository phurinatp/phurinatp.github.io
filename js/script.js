let prevBtn = document.getElementById('prevBtn');
let nextBtn = document.getElementById('nextBtn');
let anotherPrograms = document.getElementsByClassName('another-program');
let stepTopic = document.getElementById('step');
let stepInstruction = document.getElementById('step-instruction');
let mobileDevices = document.getElementsByClassName('mobile-device');
let mobileStep2 = document.getElementById('mobile-step-2');
let mobileStep3 = document.getElementById('mobile-step-3');
let mobileStep4 = document.getElementById('mobile-step-4');
let mobileText = document.getElementById('mobile-text');
let app = document.getElementById('app');
let folders = document.getElementsByClassName('folder');
let mouseCursor = document.getElementsByClassName('mouse-cursor');
let step = 0;

nextBtn.addEventListener('click', () => {
    step++;
    if (step > 0 && step <= 6) {
        stepTopic.innerHTML = 'Step ' + step;
        updateInstruction();
    } else if (step > 6) {
        step = 6;
    } else if (step < 6) {
        step = 0;
    }
});

prevBtn.addEventListener('click', () => {
    if (--step > 0) {
        stepTopic.innerHTML = 'Step ' + step;
        updateInstruction();
    } else {
        step = 0;
        stepTopic.innerHTML = '';
        stepInstruction.innerHTML = '';
        anotherPrograms[0].style.zIndex = '1000'
    }
});

function updateInstruction() {
    switch (step) {
        case 1:
            stepInstruction.innerHTML = `
                Bring mobile window to the top.
                <p class="library">( Use node-window-manger.js )</p>
            `;
            if (isAnimateBorderActive(mobileDevices[0])) {
                mobileDevices[0].classList.toggle("animate-border");
            }
            anotherPrograms[0].style.zIndex = '-1';
            mobileDevices[0].style.border = '2px solid #535c68';
            mobileStep2.style.display = 'none';
            break;
        case 2:
            stepInstruction.innerHTML = `
                Get the position of the mobile window (x, y, w, h) and save it to use later.
                <p class="library">( Use active-win )</p>
            `;
            if (!isAnimateBorderActive(mobileDevices[0])) {
                mobileDevices[0].classList.toggle("animate-border");
            }
            mobileText.style.display = 'block';
            mobileDevices[0].style.border = '3px solid red';
            mobileStep3.style.display = 'none';
            mobileStep2.style.display = 'block';
            if (folders[0].lastChild.innerHTML === '- capture.png') {
                folders[0].removeChild(folders[0].lastChild);
            }
            break;
        case 3:
            stepInstruction.innerHTML = `
                Capture the mobile screen and save it. For example <span style="color: lightcoral;">capture.png</span>
                <p class="library">( Use Robot.js )</p>
            `;
            if (isAnimateBorderActive(mobileDevices[0])) {
                mobileDevices[0].classList.toggle("animate-border");
            }
            mobileStep3.style.display = 'flex';
            if (folders[0].lastChild.innerHTML !== '- capture.png') {
                let node = document.createElement("P");                 // Create a <li> node
                let textnode = document.createTextNode("- capture.png");         // Create a text node
                node.appendChild(textnode);
                folders[0].appendChild(node);
            }
            app.style.border = '0';
            mobileStep4.style.display = 'none';
            mobileDevices[0].style.border = '3px solid red';
            mobileText.style.display = 'none';
            mobileStep2.style.display = 'none';
            break;
        case 4:
            stepInstruction.innerHTML = `
                Find the position of the sub-image in the big image that you was capture in the previous step.
                <br/><br/>
                big image: <span style="color: lightcoral;">capture.png</span>
                <br/>
                sub-image: <span style="color: #f6e58d;">icon.png</span>
                <p class="library">( Use opencv4node.js )</p>
                `;
            mobileStep3.style.display = 'none';
            mobileStep4.style.display = 'block';
            mobileStep2.style.display = 'none';
            mobileText.style.display = 'block';
            app.style.border = '2px solid red';
            mobileDevices[0].style.border = '2px solid #535c68';
            if (isAnimateBorderActive(mobileDevices[0])) {
                mobileDevices[0].classList.toggle("animate-border");
            }
            break;
        case 5:
            stepInstruction.innerHTML = `
            Calculate the final coordinate for the mouse cursor to click`;
            mobileDevices[0].style.border = '1px solid red';
            mobileStep2.style.display = 'block';
            mobileStep3.style.display = 'none';
            mobileStep4.style.display = 'block';
            app.style.border = '2px solid red';
            initilizeTheMouseCursor();
            break;
        case 6:
            stepInstruction.innerHTML = `
                Click
                <p class="library">( Use robot.js )</p>
            `;
            mobileStep2.style.display = 'none';
            mobileStep4.style.display = 'none';
            mobileStep3.style.display = 'none';
            app.style.border = '2px solid red';
            mouseCursor[0].style.left = '10%';
            mouseCursor[0].style.top = '10%';
            mobileDevices[0].style.border = '2px solid #535c68';
            break;
    }
}

function initilizeTheMouseCursor() {
    mouseCursor[0].style.left = '80%';
    mouseCursor[0].style.top = '50%';
}

function isAnimateBorderActive(element) {
    if (element.className.split` `.indexOf('animate-border') > -1) {
        return true;
    }
    return false;
}