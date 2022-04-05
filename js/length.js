const btnS = document.getElementById('btn_s');
const btnM = document.getElementById('btn_m');
const btnL = document.getElementById('btn_l');
const btnXL = document.getElementById('btn_xl');
const btnSAVE = document.getElementById('btn_save');
var length_state_icon = window.parent.document.getElementById('length_state_icon');
var length_state_icon_2 = window.parent.document.getElementById('length_state_icon_2');
var sidemenu_save_btn = window.parent.document.getElementById('btnSave');
var sidemenu_save_btn_2 = window.parent.document.getElementById('btnSave_2');


document.addEventListener('DOMContentLoaded', () => {
    btnS.addEventListener('click', clickSizeS);
    btnM.addEventListener('click', clickSizeM);
    btnL.addEventListener('click', clickSizeL);
    btnXL.addEventListener('click', clickSizeXL);
    btnSAVE.addEventListener('click', clickSave);
})

updateSelection(); // loads selection from local storage on inital load of the page

/**
 * Load previously selected brightness from local storage variables.
 * Sets current values active on buttons.
 */
function updateSelection() {
    if (localStorage.getItem('selected_channel') == '1') {
        console.log(localStorage.getItem('selected_length'));
        if (localStorage.getItem('selected_length') == '335 mm') {
            btnS.classList.add("active");
            if (btnM.classList.contains("active")) {
                btnM.classList.remove("active");
            }
            if (btnL.classList.contains("active")) {
                ;
                btnL.classList.remove("active");
            }
            if (btnXL.classList.contains("active")) {
                ;
                btnXL.classList.remove("active");
            }
        }
        if (localStorage.getItem('selected_length') == '635 mm') {
            btnM.classList.add("active");
            if (btnS.classList.contains("active")) {
                btnS.classList.remove("active");
            }
            if (btnL.classList.contains("active")) {
                ;
                btnL.classList.remove("active");
            }
            if (btnXL.classList.contains("active")) {
                ;
                btnXL.classList.remove("active");
            }
        }
        if (localStorage.getItem('selected_length') == '935 mm') {
            console.log('max');
            btnL.classList.add("active");
            if (btnS.classList.contains("active")) {
                btnS.classList.remove("active");
            }
            if (btnM.classList.contains("active")) {
                ;
                btnM.classList.remove("active");
            }
            if (btnXL.classList.contains("active")) {
                ;
                btnXL.classList.remove("active");
            }
        }
        if (localStorage.getItem('selected_length') == '1870 mm') {
            console.log('max');
            btnXL.classList.add("active");
            if (btnS.classList.contains("active")) {
                btnS.classList.remove("active");
            }
            if (btnM.classList.contains("active")) {
                ;
                btnM.classList.remove("active");
            }
            if (btnL.classList.contains("active")) {
                ;
                btnL.classList.remove("active");
            }
        }
    }
    if (localStorage.getItem('selected_channel') == '2') {
        console.log('channel 2');
        console.log(localStorage.getItem('selected_length_2'));
        if (localStorage.getItem('selected_length_2') == '335 mm') {
            btnS.classList.add("active");
            if (btnM.classList.contains("active")) {
                ;
                btnM.classList.remove("active");
            }
            if (btnL.classList.contains("active")) {
                ;
                btnL.classList.remove("active");
            }
            if (btnXL.classList.contains("active")) {
                ;
                btnXL.classList.remove("active");
            }
        }
        if (localStorage.getItem('selected_length_2') == '635 mm') {
            btnM.classList.add("active");
            if (btnS.classList.contains("active")) {
                btnS.classList.remove("active");
            }
            if (btnL.classList.contains("active")) {
                ;
                btnL.classList.remove("active");
            }
            if (btnXL.classList.contains("active")) {
                ;
                btnXL.classList.remove("active");
            }
        }
        if (localStorage.getItem('selected_length_2') == '935 mm') {
            console.log('max');
            btnL.classList.add("active");
            if (btnS.classList.contains("active")) {
                btnS.classList.remove("active");
            }
            if (btnM.classList.contains("active")) {
                ;
                btnM.classList.remove("active");
            }
            if (btnXL.classList.contains("active")) {
                ;
                btnXL.classList.remove("active");
            }
        }
        if (localStorage.getItem('selected_length_2') == '1870 mm') {
            console.log('max');
            btnXL.classList.add("active");
            if (btnS.classList.contains("active")) {
                btnS.classList.remove("active");
            }
            if (btnM.classList.contains("active")) {
                ;
                btnM.classList.remove("active");
            }
            if (btnL.classList.contains("active")) {
                ;
                btnL.classList.remove("active");
            }
        }
    }
}

function clickSizeS() {
    if (localStorage.getItem('selected_channel') == '1') {
        //length_state_icon.src = "../images/335mm_transparent.png";
        localStorage.setItem('selected_length', '335 mm');
        parent.addtoSendQueue('{"memory":"ram","flash#1":{"length":"335 mm"}}')

    }
    else { // Channel 2
        //length_state_icon_2.src = "../images/335mm_transparent.png";
        localStorage.setItem('selected_length_2', '335 mm');
        parent.addtoSendQueue('{"memory":"ram","flash#2":{"length":"335 mm"}}')
    }
    updateSelection();
    highlightSaveBtns();
}
function clickSizeM() {
    if (localStorage.getItem('selected_channel') == '1') {
        //length_state_icon.src = "../images/635mm_transparent.png";
        localStorage.setItem('selected_length', '635 mm');
        parent.addtoSendQueue('{"memory":"ram","flash#1":{"length":"635 mm"}}')
    }
    else { // Channel 2
        //length_state_icon_2.src = "../images/635mm_transparent.png";
        localStorage.setItem('selected_length_2', '635 mm');
        parent.addtoSendQueue('{"memory":"ram","flash#2":{"length":"635 mm"}}')
    }
    updateSelection();
    highlightSaveBtns();
}
function clickSizeL() {
    if (localStorage.getItem('selected_channel') == '1') {
        //length_state_icon.src = "../images/935mm_transparent.png";
        localStorage.setItem('selected_length', '935 mm');
        parent.addtoSendQueue('{"memory":"ram","flash#1":{"length":"935 mm"}}')
    }
    else { // Channel 2
        //length_state_icon_2.src = "../images/935mm_transparent.png";
        localStorage.setItem('selected_length_2', '935 mm');
        parent.addtoSendQueue('{"memory":"ram","flash#2":{"length":"935 mm"}}')
    }
    updateSelection();
    highlightSaveBtns();
}
function clickSizeXL() {
    if (localStorage.getItem('selected_channel') == '1') {
        //length_state_icon.src = "../images/1870mm_transparent.png";
        localStorage.setItem('selected_length', '1870 mm');
        parent.addtoSendQueue('{"memory":"ram","flash#1":{"length":"1870 mm"}}')
    }
    else { // Channel 2
        //length_state_icon_2.src = "../images/1870mm_transparent.png";
        localStorage.setItem('selected_length_2', '1870 mm');
        parent.addtoSendQueue('{"memory":"ram","flash#2":{"length":"1870 mm"}}')
    }
    updateSelection();
    highlightSaveBtns();
}

/**
 * Higlights the save buttons in the frame and in the sidebar
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

function clickSave() {
    if (localStorage.getItem('selected_channel') == '1') {
        if (localStorage.getItem('selected_length') == '335 mm') {
            parent.addtoSendQueue('{"memory":"rom","flash#1":{"length":"335 mm"}}');
            btnSAVE.style.visibility = "hidden";
            length_state_icon.src = "../images/335mm_transparent.png";
        }
        if (localStorage.getItem('selected_length') == '635 mm') {
            parent.addtoSendQueue('{"memory":"rom","flash#1":{"length":"635 mm"}}');
            btnSAVE.style.visibility = "hidden";
            length_state_icon.src = "../images/635mm_transparent.png";
        }
        if (localStorage.getItem('selected_length') == '935 mm') {
            parent.addtoSendQueue('{"memory":"rom","flash#1":{"length":"935 mm"}}');
            btnSAVE.style.visibility = "hidden";
            length_state_icon.src = "../images/935mm_transparent.png";
        }
        if (localStorage.getItem('selected_length') == '1870 mm') {
            parent.addtoSendQueue('{"memory":"rom","flash#1":{"length":"1870 mm"}}');
            btnSAVE.style.visibility = "hidden";
            length_state_icon.src = "../images/1870mm_transparent.png";
        }
        //TODO: Prüfen ob das die einzige Änderung ist -> Löschen von Save all hervorhebung
        if (sidemenu_save_btn.classList.contains('custom-button-save')) {
            sidemenu_save_btn.classList.remove('custom-butten-save');
            sidemenu_save_btn.classList.add('custom-button-default');
        }
        setTimeout(getROMLength("1"), 200);
    }
    else { // Channel 2
        if (localStorage.getItem('selected_length_2') == '335 mm') {
            parent.addtoSendQueue('{"memory":"rom","flash#2":{"length":"335 mm"}}');
            btnSAVE.style.visibility = "hidden";
            length_state_icon_2.src = "../images/335mm_transparent.png";
        }
        if (localStorage.getItem('selected_length_2') == '635 mm') {
            parent.addtoSendQueue('{"memory":"rom","flash#2":{"length":"635 mm"}}');
            btnSAVE.style.visibility = "hidden";
            length_state_icon_2.src = "../images/635mm_transparent.png";
        }
        if (localStorage.getItem('selected_length_2') == '935 mm') {
            parent.addtoSendQueue('{"memory":"rom","flash#2":{"length":"935 mm"}}');
            btnSAVE.style.visibility = "hidden";
            length_state_icon_2.src = "../images/935mm_transparent.png";
        }
        if (localStorage.getItem('selected_length_2') == '1870 mm') {
            parent.addtoSendQueue('{"memory":"rom","flash#2":{"length":"1870 mm"}}');
            btnSAVE.style.visibility = "hidden";
            length_state_icon_2.src = "../images/1870mm_transparent.png";
        }
        //TODO: Prüfen ob das die einzige Änderung ist -> Löschen von Save all hervorhebung
        if (sidemenu_save_btn_2.classList.contains('custom-button-save')) {
            sidemenu_save_btn_2.classList.remove('custom-button-save');
            sidemenu_save_btn_2.classList.add('custom-button-default');
        }
        setTimeout(getROMLength("2"), 200);
    }
}


/**
 * Sends command to read data from ROM. 
 * Updates the state icon in the Sidemenu of the index.html.
 * @param {*channel} channel number of selected LED channel 
 */
function getROMLength(channel) {
    console.log("getROMBrightness")
    if (channel == '1') {
        parent.addtoSendQueue('{"memory":"rom","flash#1":{"length":"get"}}');
    }
    else {
        parent.addtoSendQueue('{"memory":"rom","flash#2":{"length":"get"}}')
    }
    setTimeout(setStateIcon(), 100);
}

/**
 * First reads data from the FIFO to update the local Storage variables.
 * Then updates the state icons.
 */
function setStateIcon() {
    parent.getNextDataFromQueue();
    updateSelection();
}
