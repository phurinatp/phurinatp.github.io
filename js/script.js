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
let content = document.getElementsByClassName('content');
let contentOne = document.getElementById('content-1');
let contentTwo = document.getElementById('content-2');

let content1CodeStep1 = document.getElementById('content-1-code-step-1');
let content1CodeStep2 = document.getElementById('content-1-code-step-2');
let content1CodeStep3 = document.getElementById('content-1-code-step-3');
let content1CodeStep4 = document.getElementById('content-1-code-step-4');
let content1CodeStep5 = document.getElementById('content-1-code-step-5');
let content1CodeStep6 = document.getElementById('content-1-code-step-6');
let content1CodeSteps = [
    content1CodeStep1,
    content1CodeStep2,
    content1CodeStep3,
    content1CodeStep4,
    content1CodeStep5,
    content1CodeStep6,
];

let currentContent = 0;
let step = 0;

hideAllCodeBlock();

nextBtn.addEventListener('click', () => {
    step++;
    if (step > 0 && step <= 6) {
        stepTopic.innerHTML = 'Step ' + step;
        displayCodeBlock(step);
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
        displayCodeBlock(step);
        updateInstruction();
    } else {
        step = 0;
        hideAllCodeBlock();
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
                <p class="library">( Use node-window-manager )</p>
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
                <p class="library">( Use Robot.js and Jimp )</p>
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

let prevContent = 0;
for (let i = 0; i < content.length; i++) {
    content[i].addEventListener('click', () => {
        if (prevContent !== i) {
            content[prevContent].classList.toggle("active");
            content[i].classList.toggle("active");
            if (i === 0) {
                displayCodeBlock(step);
                contentOne.style.display = 'block';
                contentTwo.style.display = 'none';
            } else if (i === 1) {
                hideAllCodeBlock();
                contentOne.style.display = 'none';
                contentTwo.style.display = 'block';
            }
            prevContent = i;
            currentContent = i;
        }
    });
}

function hideAllCodeBlock () {
    content1CodeSteps.forEach(item => item.style.display = 'none');
}

function displayCodeBlock (stepNumber) {
    for (let i = 0; i < 6; i++) {
        if (i + 1 !== stepNumber) {
            content1CodeSteps[i].style.display = 'none';
        }
    }
    content1CodeSteps[stepNumber - 1].style.display = 'block';
}