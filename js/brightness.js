const btnECO = document.getElementById('btn_eco');
const btnMED = document.getElementById('btn_med');
const btnMAX = document.getElementById('btn_max');
const btnSAVE = document.getElementById('btn_save');
var brightness_state_icon = window.parent.document.getElementById('brightness_state_icon');
var brightness_state_icon_2 = window.parent.document.getElementById('brightness_state_icon_2');
var sidemenu_save_btn = window.parent.document.getElementById('btnSave');
var sidemenu_save_btn_2 = window.parent.document.getElementById('btnSave_2');


document.addEventListener('DOMContentLoaded', () => {
    btnECO.addEventListener('click', clickBrightnessEco);
    btnMED.addEventListener('click', clickBrightnessMedium);
    btnMAX.addEventListener('click', clickBrightnessMax);
    btnSAVE.addEventListener('click', clickSave);
})

updateSelection(); // loads selection from local storage on inital load of the page

/**
 * Load previously selected brightness from local storage variables.
 * Sets current values active on buttons.
 */
function updateSelection() {
    if (localStorage.getItem('selected_channel') == '1') {
        console.log('channel 1');
        console.log(localStorage.getItem('selected_brightness'));
        if (localStorage.getItem('selected_brightness') == 'eco') {
            btnECO.classList.add("active");
            if (btnMED.classList.contains("active")) {
                btnMED.classList.remove("active");
            }
            if (btnMAX.classList.contains("active")) {
                ;
                btnMAX.classList.remove("active");
            }
        }
        if (localStorage.getItem('selected_brightness') == 'med') {
            btnMED.classList.add("active");
            if (btnECO.classList.contains("active")) {
                btnECO.classList.remove("active");
            }
            if (btnMAX.classList.contains("active")) {
                btnMAX.classList.remove("active");
            }
        }
        if (localStorage.getItem('selected_brightness') == 'max') {
            btnMAX.classList.add("active");
            if (btnECO.classList.contains("active")) {
                btnECO.classList.remove("active");
            }
            if (btnMED.classList.contains("active")) {
                btnMED.classList.remove("active");
            }
        }
    }
    if (localStorage.getItem('selected_channel') == '2') {
        console.log('channel 2');
        console.log(localStorage.getItem('selected_brightness_2'));
        if (localStorage.getItem('selected_brightness_2') == 'eco') {
            btnECO.classList.add("active");
            if (btnMED.classList.contains("active")) {
                btnMED.classList.remove("active");
            }
            if (btnMAX.classList.contains("active")) {
                ;
                btnMAX.classList.remove("active");
            }
        }
        if (localStorage.getItem('selected_brightness_2') == 'med') {
            btnMED.classList.add("active");
            if (btnECO.classList.contains("active")) {
                btnECO.classList.remove("active");
            }
            if (btnMAX.classList.contains("active")) {
                btnMAX.classList.remove("active");
            }
        }
        if (localStorage.getItem('selected_brightness_2') == 'max') {
            btnMAX.classList.add("active");
            if (btnECO.classList.contains("active")) {
                btnECO.classList.remove("active");
            }
            if (btnMED.classList.contains("active")) {
                btnMED.classList.remove("active");
            }
        }
    }
}

function clickBrightnessEco() {
    if (localStorage.getItem('selected_channel') == '1') {
        console.log('ch 1');
        localStorage.setItem('selected_brightness', 'eco');
        parent.addtoSendQueue('{"memory":"ram","flash#1":{"brightness":"eco"}}');

    }
    else { // Channel 2
        console.log('ch 2');
        localStorage.setItem('selected_brightness_2', 'eco');
        parent.addtoSendQueue('{"memory":"ram","flash#2":{"brightness":"eco"}}');

    }
    highlightSaveBtns();
    updateSelection();
}

function clickBrightnessMedium() {
    if (localStorage.getItem('selected_channel') == '1') {
        console.log('ch 1');
        localStorage.setItem('selected_brightness', 'med');
        parent.addtoSendQueue('{"memory":"ram","flash#1":{"brightness":"medium"}}');

    }
    else { // Channel 2
        console.log('ch 2');
        brightness_state_icon_2.src = "../images/bulb_med_transparent.png";
        localStorage.setItem('selected_brightness_2', 'med');
        parent.addtoSendQueue('{"memory":"ram","flash#2":{"brightness":"medium"}}');
    }
    highlightSaveBtns();
    updateSelection();
}

function clickBrightnessMax() {
    if (localStorage.getItem('selected_channel') == '1') {
        localStorage.setItem('selected_brightness', 'max');
        parent.addtoSendQueue('{"memory":"ram","flash#1":{"brightness":"max"}}');
    }
    else { // Channel 2
        brightness_state_icon_2.src = "../images/bulb_max_transparent.png";
        localStorage.setItem('selected_brightness_2', 'max');
        parent.addtoSendQueue('{"memory":"ram","flash#2":{"brightness":"max"}}');
    }
    highlightSaveBtns();
    updateSelection();
}

function clickSave() {
    if (localStorage.getItem('selected_channel') == '1') {
        if (localStorage.getItem('selected_brightness') == 'eco') {
            parent.addtoSendQueue('{"memory":"rom","flash#1":{"brightness":"eco"}}');
            btnSAVE.style.visibility = "hidden";
            //brightness_state_icon.src = "../images/bulb_eco_transparent.png";
        }
        if (localStorage.getItem('selected_brightness') == 'med') {
            parent.addtoSendQueue('{"memory":"rom","flash#1":{"brightness":"medium"}}');
            btnSAVE.style.visibility = "hidden";
            //brightness_state_icon.src = "../images/bulb_med_transparent.png";
        }
        if (localStorage.getItem('selected_brightness') == 'max') {
            parent.addtoSendQueue('{"memory":"rom","flash#1":{"brightness":"max"}}');
            btnSAVE.style.visibility = "hidden";
            //brightness_state_icon.src = "../images/bulb_max_transparent.png";
        }
        //TODO: Prüfen ob das die einzige Änderung ist -> Löschen von Save all hervorhebung
        if (sidemenu_save_btn.classList.contains('custom-button-save')) {
            sidemenu_save_btn.classList.remove('custom-button-save');
            sidemenu_save_btn.classList.add('custom-button-default');
        }
        console.log('before set Timeout getROMBrightness');
        setTimeout(function () { getROMBrightness('1'); }, 200);
    }
    else { // Channel 2
        if (localStorage.getItem('selected_brightness_2') == 'eco') {
            parent.addtoSendQueue('{"memory":"rom","flash#2":{"brightness":"eco"}}');
            btnSAVE.style.visibility = "hidden";
            //brightness_state_icon.src = "../images/bulb_eco_transparent.png";
        }
        if (localStorage.getItem('selected_brightness_2') == 'med') {
            parent.addtoSendQueue('{"memory":"rom","flash#2":{"brightness":"medium"}}');
            btnSAVE.style.visibility = "hidden";
            //brightness_state_icon.src = "../images/bulb_med_transparent.png";
        }
        if (localStorage.getItem('selected_brightness_2') == 'max') {
            parent.addtoSendQueue('{"memory":"rom","flash#2":{"brightness":"max"}}');
            btnSAVE.style.visibility = "hidden";
            //brightness_state_icon.src = "../images/bulb_max_transparent.png";
        }
        //TODO: Prüfen ob das die einzige Änderung ist -> Löschen von Save all hervorhebung
        if (sidemenu_save_btn_2.classList.contains('custom-button-save')) {
            sidemenu_save_btn_2.classList.remove('custom-button-save');
            sidemenu_save_btn_2.classList.add('custom-button-default');
        }
        console.log('before set Timeout getROMBrightness');
        setTimeout(function () { getROMBrightness('2'); }, 200);
    }
}


/**
 * Sends command to read data from ROM. 
 * Updates the state icon in the Sidemenu of the index.html.
 * @param {*channel} channel number of selected LED channel 
 */
function getROMBrightness(channel) {
    console.log("getROMBrightness")
    if (channel == '1') {
        parent.addtoSendQueue('{"memory":"rom","flash#1":{"brightness":"get"}}');
        console.log('set Timeout setStateIcon');
    }
    if (channel == '2') {
        parent.addtoSendQueue('{"memory":"rom","flash#2":{"brightness":"get"}}')
    }
    setTimeout(setStateIcon, 100);
}


/**
 * First reads data from the FIFO to update the local Storage variables.
 * Then updates the state icons.
 */
function setStateIcon() {
    console.log('setStateIcon');
    parent.getNextDataFromQueue();
    updateSelection();
}

/**
 * Higlights the save buttons in the frame and in the menu sidebar
 */
function highlightSaveBtns() {
    btnSAVE.style.visibility = "visible";
    if (btnSAVE.classList.contains('active')) {
        //do nothing
    } else {
        btnSAVE.classList.add('active');
    }
    if (localStorage.getItem('selected_channel') == '1') {
        if (sidemenu_save_btn.classList.contains('custom-button-default')) {
            sidemenu_save_btn.classList.remove("custom-button-default");
            sidemenu_save_btn.classList.add("custom-button-save");
            sidemenu_save_btn.classList.add("active");
        }
    }
    if (localStorage.getItem('selected_channel') == '2') {
        if (sidemenu_save_btn_2.classList.contains('custom-button-default')) {
            sidemenu_save_btn_2.classList.remove("custom-button-default");
            sidemenu_save_btn_2.classList.add("custom-button-save");
            sidemenu_save_btn_2.classList.add("active");
        }
    }
}




