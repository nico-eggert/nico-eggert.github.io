const btn_green = document.getElementById('btn_green');
const btn_red = document.getElementById('btn_red');
const btn_runninglight = document.getElementById('btn_runninglight');
const btnSAVE = document.getElementById('btn_save');


const marker_1_width_input = document.getElementById('marker_1_width_input');
const marker_1_position_input = document.getElementById('marker_1_pos_input');

//var previewimg = document.getElementById('Marker_1_preview');
var mode1_state_icon_ch1 = window.parent.document.getElementById('mode1_state_icon_ch1');
var mode2_state_icon_ch1 = window.parent.document.getElementById('mode2_state_icon_ch1');
var mode1_state_icon_ch2 = window.parent.document.getElementById('mode1_state_icon_ch2');
var mode2_state_icon_ch2 = window.parent.document.getElementById('mode2_state_icon_ch2');
var sidemenu_save_btn = window.parent.document.getElementById('btnSave');

updateSelection();


document.addEventListener('DOMContentLoaded', () => {
    btn_green.addEventListener('click', clickModeGREEN);
    btn_red.addEventListener('click', clickModeRED);
    btn_runninglight.addEventListener('click', clickModeRUNNINGLIGHT);
    btnSAVE.addEventListener('click', clickSave);
})

/**
 * Load previously selected brightness from local storage variables.
 * Sets current values active on buttons.
 */
function updateSelection() {
    if (localStorage.getItem('selected_channel') == '1') {
        console.log('channel 1');
        if (localStorage.getItem('selected_mode') == '1') {
            console.log('selected_mode: 1');

            console.log(localStorage.getItem('selected_mode1_CH1'));
            if (localStorage.getItem('selected_mode1_CH1') == 'all green') {
                btn_green.classList.add("active");
                if (btn_red.classList.contains("active")) {
                    btn_red.classList.remove("active");
                }
                if (btn_runninglight.classList.contains("active")) {
                    ;
                    btn_runninglight.classList.remove("active");
                }
            }
            if (localStorage.getItem('selected_mode1_CH1') == 'all red') {
                btn_red.classList.add("active");
                if (btn_green.classList.contains("active")) {
                    btn_green.classList.remove("active");
                }
                if (btn_runninglight.classList.contains("active")) {
                    btn_runninglight.classList.remove("active");
                }
            }
            if (localStorage.getItem('selected_mode1_CH1') == 'runninglight') {
                btn_runninglight.classList.add("active");
                if (btn_green.classList.contains("active")) {
                    btn_green.classList.remove("active");
                }
                if (btn_red.classList.contains("active")) {
                    btn_red.classList.remove("active");
                }
            }
        }
        if (localStorage.getItem('selected_mode') == "2") {
            console.log('selected_mode: 2');

            console.log(localStorage.getItem('selected_mode2_CH1'));
            if (localStorage.getItem('selected_mode2_CH1') == 'all green') {
                btn_green.classList.add("active");
                if (btn_red.classList.contains("active")) {
                    btn_red.classList.remove("active");
                }
                if (btn_runninglight.classList.contains("active")) {
                    ;
                    btn_runninglight.classList.remove("active");
                }
            }
            if (localStorage.getItem('selected_mode2_CH1') == 'all red') {
                btn_red.classList.add("active");
                if (btn_green.classList.contains("active")) {
                    btn_green.classList.remove("active");
                }
                if (btn_runninglight.classList.contains("active")) {
                    btn_runninglight.classList.remove("active");
                }
            }
            if (localStorage.getItem('selected_mode2_CH1') == 'runninglight') {
                btn_runninglight.classList.add("active");
                if (btn_green.classList.contains("active")) {
                    btn_green.classList.remove("active");
                }
                if (btn_red.classList.contains("active")) {
                    btn_red.classList.remove("active");
                }
            }
        }
    }
    if (localStorage.getItem('selected_channel') == '2') {
        console.log('channel 2');
        console.log(localStorage.getItem('selected_mode1_CH2'));
        if (localStorage.getItem('selected_mode') == '1') {
            console.log('selected_mode: 1');

            if (localStorage.getItem('selected_mode1_CH2') == 'all green') {
                btn_green.classList.add("active");
                if (btn_red.classList.contains("active")) {
                    btn_red.classList.remove("active");
                }
                if (btn_runninglight.classList.contains("active")) {
                    ;
                    btn_runninglight.classList.remove("active");
                }
            }
            if (localStorage.getItem('selected_mode1_CH2') == 'all red') {
                btn_red.classList.add("active");
                if (btn_green.classList.contains("active")) {
                    btn_green.classList.remove("active");
                }
                if (btn_runninglight.classList.contains("active")) {
                    btn_runninglight.classList.remove("active");
                }
            }
            if (localStorage.getItem('selected_mode1_CH2') == 'runninglight') {
                btn_runninglight.classList.add("active");
                if (btn_green.classList.contains("active")) {
                    btn_green.classList.remove("active");
                }
                if (btn_red.classList.contains("active")) {
                    btn_red.classList.remove("active");
                }
            }
        }
        if (localStorage.getItem('selected_mode') == '2') {
            console.log('selected_mode: 2');

            if (localStorage.getItem('selected_mode2_CH2') == 'all green') {
                btn_green.classList.add("active");
                if (btn_red.classList.contains("active")) {
                    btn_red.classList.remove("active");
                }
                if (btn_runninglight.classList.contains("active")) {
                    ;
                    btn_runninglight.classList.remove("active");
                }
            }
            if (localStorage.getItem('selected_mode2_CH2') == 'all red') {
                btn_red.classList.add("active");
                if (btn_green.classList.contains("active")) {
                    btn_green.classList.remove("active");
                }
                if (btn_runninglight.classList.contains("active")) {
                    btn_runninglight.classList.remove("active");
                }
            }
            if (localStorage.getItem('selected_mode2_CH2') == 'runninglight') {
                btn_runninglight.classList.add("active");
                if (btn_green.classList.contains("active")) {
                    btn_green.classList.remove("active");
                }
                if (btn_red.classList.contains("active")) {
                    btn_red.classList.remove("active");
                }
            }
        }
    }
}


function clickModeGREEN() {
    if (localStorage.getItem('selected_channel') == '1') {
        if (localStorage.getItem('selected_mode') == '1') {
            console.log('channel 1 mode 1');
            //mode1_state_icon_ch1.src = "../images/greenstripe_transparent.png";
            localStorage.setItem('selected_mode1_CH1', 'all green');
            parent.sendXBeeData('{"memory":"ram","flash#1":{"operation mode#1":"all green"}}');
        }
        else {
            //mode2_state_icon_ch1.src = "../images/greenstripe_transparent.png";
            localStorage.setItem('selected_mode2_CH1', 'all green');
            parent.sendXBeeData('{"memory":"ram","flash#1":{"operation mode#2":"all green"}}');
        }
    }
    if (localStorage.getItem('selected_channel') == '2') {
        if (localStorage.getItem('selected_mode') == '1') {
            //mode1_state_icon_ch2.src = "../images/greenstripe_transparent.png";
            localStorage.setItem('selected_mode1_CH2', 'all green');
            parent.sendXBeeData('{"memory":"ram","flash#2":{"operation mode#1":"all green"}}');
        }
        else {
            //mode2_state_icon_ch2.src = "../images/greenstripe_transparent.png";
            localStorage.setItem('selected_mode2_CH2', 'all green');
            parent.sendXBeeData('{"memory":"ram","flash#2":{"operation mode#2":"all green"}}');
        }
    }
    highlightSaveBtns();
    updateSelection();
}
function clickModeRED() {
    if (localStorage.getItem('selected_channel') == '1') {
        if (localStorage.getItem('selected_mode') == '1') {
            //mode1_state_icon_ch1.src = "../images/redstripe_transparent.png";
            localStorage.setItem('selected_mode1_CH1', 'all red');
            parent.sendXBeeData('{"memory":"ram","flash#1":{"operation mode#1":"all red"}}');
        }
        else {
            //mode2_state_icon_ch1.src = "../images/redstripe_transparent.png";
            localStorage.setItem('selected_mode2_CH1', 'all red');
            parent.sendXBeeData('{"memory":"ram","flash#1":{"operation mode#2":"all red"}}');
        }
    }
    if (localStorage.getItem('selected_channel') == '2') {
        if (localStorage.getItem('selected_mode') == '1') {
            //mode1_state_icon_ch2.src = "../images/redstripe_transparent.png";
            localStorage.setItem('selected_mode1_CH2', 'all red');
            parent.sendXBeeData('{"memory":"ram","flash#2":{"operation mode#1":"all red"}}');
        }
        else {
            //mode2_state_icon_ch2.src = "../images/redstripe_transparent.png";
            localStorage.setItem('selected_mode2_CH2', 'all red');
            parent.sendXBeeData('{"memory":"ram","flash#2":{"operation mode#2":"all red"}}');
        }
    }
    highlightSaveBtns();
    updateSelection();
}
function clickModeRUNNINGLIGHT() {
    if (localStorage.getItem('selected_channel') == '1') {
        if (localStorage.getItem('selected_mode') == '1') {
            //mode1_state_icon_ch1.src = "../images/runninglight_transparent.png";
            localStorage.setItem('selected_mode1_CH1', 'runninglight');
            parent.sendXBeeData('{"memory":"ram","flash#1":{"operation mode#1":"runninglight"}}');
        }
        else {
            //mode2_state_icon_ch1.src = "../images/runninglight_transparent.png";
            localStorage.setItem('selected_mode2_CH1', 'runninglight');
            parent.sendXBeeData('{"memory":"ram","flash#1":{"operation mode#2":"runninglight"}}');
        }
    }
    if (localStorage.getItem('selected_channel') == '2') {
        if (localStorage.getItem('selected_mode') == '1') {
            //mode1_state_icon_ch2.src = "../images/runninglight_transparent.png";
            localStorage.setItem('selected_mode1_CH2', 'runninglight');
            parent.sendXBeeData('{"memory":"ram","flash#2":{"operation mode#1":"runninglight"}}');
        }
        else {
            //mode2_state_icon_ch2.src = "../images/runninglight_transparent.png";
            localStorage.setItem('selected_mode2_CH2', 'runninglight');
            parent.sendXBeeData('{"memory":"ram","flash#2":{"operation mode#2":"runninglight"}}');
        }
    }
    highlightSaveBtns();
    updateSelection();
}

function clickSave() {
    if (localStorage.getItem('selected_channel') == '1') {
        if (localStorage.getItem('selected_mode') == '1') {
            if (localStorage.getItem('selected_mode1_CH1') == 'all green') {
                parent.sendXBeeData('{"memory":"rom","flash#1":{"operation mode#1":"all green"}}');
                btnSAVE.style.visibility = "hidden";
                mode1_state_icon_ch1.src = "../images/greenstripe_transparent.png";
            }
            if (localStorage.getItem('selected_mode1_CH1') == 'all red') {
                parent.sendXBeeData('{"memory":"rom","flash#1":{"operation mode#1":"all red"}}');
                btnSAVE.style.visibility = "hidden";
                mode1_state_icon_ch1.src = "../images/redstripe_transparent.png";
            }
            if (localStorage.getItem('selected_mode1_CH1') == 'runninglight') {
                parent.sendXBeeData('{"memory":"rom","flash#1":{"operation mode#1":"runninglight"}}');
                btnSAVE.style.visibility = "hidden";
                mode1_state_icon_ch1.src = "../images/runninglight_transparent.png";
            }
        }
        if (localStorage.getItem('selected_mode') == '2') {
            if (localStorage.getItem('selected_mode2_CH1') == 'all green') {
                parent.sendXBeeData('{"memory":"rom","flash#1":{"operation mode#2":"all green"}}');
                btnSAVE.style.visibility = "hidden";
                mode2_state_icon_ch1.src = "../images/greenstripe_transparent.png";
            }
            if (localStorage.getItem('selected_mode2_CH1') == 'all red') {
                parent.sendXBeeData('{"memory":"rom","flash#1":{"operation mode#2":"all red"}}');
                btnSAVE.style.visibility = "hidden";
                mode2_state_icon_ch1.src = "../images/redstripe_transparent.png";
            }
            if (localStorage.getItem('selected_mode2_CH1') == 'runninglight') {
                parent.sendXBeeData('{"memory":"rom","flash#1":{"operation mode#2":"runninglight"}}');
                btnSAVE.style.visibility = "hidden";
                mode2_state_icon_ch1.src = "../images/runninglight_transparent.png";
            }
        }
    }
    else { // Channel 2
        if (localStorage.getItem('selected_mode') == '1') {
            if (localStorage.getItem('selected_mode1_CH2') == 'all green') {
                parent.sendXBeeData('{"memory":"rom","flash#2":{"operation mode#1":"all green"}}');
                btnSAVE.style.visibility = "hidden";
                mode1_state_icon_ch1.src = "../images/greenstripe_transparent.png";
            }
            if (localStorage.getItem('selected_mode1_CH2') == 'all red') {
                parent.sendXBeeData('{"memory":"rom","flash#2":{"operation mode#1":"all red"}}');
                btnSAVE.style.visibility = "hidden";
                mode1_state_icon_ch1.src = "../images/redstripe_transparent.png";
            }
            if (localStorage.getItem('selected_mode1_CH2') == 'runninglight') {
                parent.sendXBeeData('{"memory":"rom","flash#2":{"operation mode#1":"runninglight"}}');
                btnSAVE.style.visibility = "hidden";
                mode1_state_icon_ch1.src = "../images/runninglight_transparent.png";
            }
        }
        if (localStorage.getItem('selected_mode') == '2') {
            if (localStorage.getItem('selected_mode2_CH2') == 'all green') {
                parent.sendXBeeData('{"memory":"rom","flash#2":{"operation mode#2":"all green"}}');
                btnSAVE.style.visibility = "hidden";
                mode2_state_icon_ch1.src = "../images/greenstripe_transparent.png";
            }
            if (localStorage.getItem('selected_mode2_CH2') == 'all red') {
                parent.sendXBeeData('{"memory":"rom","flash#2":{"operation mode#2":"all red"}}');
                btnSAVE.style.visibility = "hidden";
                mode2_state_icon_ch1.src = "../images/redstripe_transparent.png";
            }
            if (localStorage.getItem('selected_mode2_CH2') == 'runninglight') {
                parent.sendXBeeData('{"memory":"rom","flash#2":{"operation mode#2":"runninglight"}}');
                btnSAVE.style.visibility = "hidden";
                mode2_state_icon_ch1.src = "../images/runninglight_transparent.png";
            }
        }

    }
    //TODO: Prüfen ob das die einzige Änderung ist -> Löschen von Save all hervorhebung
    if (sidemenu_save_btn.classList.contains('btn-danger')) {
        sidemenu_save_btn.classList.remove('btn-danger');
        sidemenu_save_btn.classList.add('btn-secondary');
    }
}

/**
 * Higlights the save buttons in the frame and in the menu sidebar
 */
function highlightSaveBtns() {
    btnSAVE.style.visibility = "visible";
    if (sidemenu_save_btn.classList.contains('btn-secondary')) {
        sidemenu_save_btn.classList.remove("btn-secondary");
        sidemenu_save_btn.classList.add("btn-danger");
        sidemenu_save_btn.classList.add("active");
    }
    if (btnSAVE.classList.contains('active')) {
        //do nothing
    } else {
        btnSAVE.classList.add('active');
    }
}

/**
 * Running Light animation
 */
setInterval(toggle_runninglight, 200);
var runninglight_toggle = 0;
var current_img = document.getElementById('img_btn_runninglight');
function toggle_runninglight() {
    if (runninglight_toggle == 0) {
        runninglight_toggle = 1;
        current_img.src = "../images/runninglight_2.png";
    }
    else {
        runninglight_toggle = 0;
        current_img.src = "../images/runninglight_1.png";
    }
}

/**
 * Update dropdown menu on selection of color options
 */
$("#color_dropdown_menu_1 li").click(function () {
    var selText = $(this).text();
    $(this).parents('.btn-group').find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
    var elem = document.getElementById('color_dropdown_btn1');
    switch (selText) {
        case 'Green':
            elem.style.background = 'green';
            elem.style.color = 'black';
            //previewimg.style.backgroundColor = 'green';
            break;
        case 'Red':
            elem.style.background = 'red';
            elem.style.color = 'black';
            //previewimg.style.backgroundColor = 'red';
            break;
        case 'Blue':
            elem.style.background = 'blue';
            elem.style.color = 'white';
            //previewimg.style.backgroundColor = 'blue';
            break;
        case 'Yellow':
            elem.style.background = 'yellow';
            elem.style.color = 'black';
            //previewimg.style.backgroundColor = 'yellow';
            break;
        case 'White':
            elem.style.background = 'white';
            elem.style.color = 'black';
            //previewimg.style.backgroundColor = 'white';
            break;
        case 'Cyan':
            elem.style.background = 'cyan';
            elem.style.color = 'black';
            //previewimg.style.backgroundColor = 'cyan';
            break;
        case 'Magenta':
            elem.style.background = 'magenta';
            elem.style.color = 'black';
            //previewimg.style.backgroundColor = 'magenta';
            break;
        case 'NO':
            elem.style.background = 'white';
            elem.style.color = 'black';
            break;
        case 'NC':
            elem.style.background = 'black';
            elem.style.color = 'black';
            break;
        default:
            console.log('color not known');
    }
    //optional store val in hidden input
    $('#selVal').val(selText);
});

$("#color_dropdown_menu_2 li").click(function () {
    var selText = $(this).text();
    $(this).parents('.btn-group').find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
    var elem = document.getElementById('color_dropdown_btn2');
    switch (selText) {
        case 'Green':
            elem.style.background = 'green';
            elem.style.color = 'black';
            pr
            break;
        case 'Red':
            elem.style.background = 'red';
            elem.style.color = 'black';
            break;
        case 'Blue':
            elem.style.background = 'blue';
            elem.style.color = 'white';
            break;
        case 'Yellow':

            elem.style.background = 'yellow';
            elem.style.color = 'black';
            break;
        case 'White':
            elem.style.background = 'white';
            elem.style.color = 'black';
            break;
        case 'Cyan':
            elem.style.background = 'cyan';
            elem.style.color = 'black';
            break;
        case 'Magenta':
            elem.style.background = 'magenta';
            elem.style.color = 'black';
            break;
        case 'NO':
            elem.style.background = 'white';
            elem.style.color = 'black';
            break;
        case 'NC':
            elem.style.background = 'black';
            elem.style.color = 'black';
            break;
        default:
            console.log('color not known');
    }
    //optional store val in hidden input
    $('#selVal').val(selText);
});

/**
 * Hide/Show Menu elements on click
 */
$('#Mode').change(function () {
    var markerrow1 = document.getElementById('Marker_1_Row');
    var marker_1 = document.getElementById('Marker_1');
    var marker_1_color = document.getElementById('Marker_1_Color');
    var marker_1_position_left = document.getElementById('Marker_1_Position_Left');
    var marker_1_position = document.getElementById('Marker_1_Position');
    var marker_1_position_right = document.getElementById('Marker_1_Position_Right');
    var marker_1_width_left = document.getElementById('Marker_1_Width_Left');
    var marker_1_width = document.getElementById('Marker_1_Width');
    var marker_1_width_right = document.getElementById('Marker_1_Width_Right');
    if (this.checked) {
        //Marker_1_preview_bg.style.visibility = 'hidden';
        //Marker_1_preview.style.visibility = 'hidden';
        marker_1.checked = false;
        //switch_1.checked = false;
        markerrow1.style.visibility = 'hidden';
        marker_1_color.style.visibility = 'hidden';
        marker_1_position_left.style.visibility = 'hidden';
        marker_1_position.style.visibility = 'hidden';
        marker_1_position_right.style.visibility = 'hidden';
        marker_1_width_left.style.visibility = 'hidden';
        marker_1_width.style.visibility = 'hidden';
        marker_1_width_right.style.visibility = 'hidden';
    }
    else {
        markerrow1.style.visibility = 'visible';
    }
})

$('#Marker').change(function () {

    if (localStorage.getItem('selected_channel') == '1') {
        if (localStorage.getItem('selected_mode') == '1') {
            mode1_state_icon_ch1.src = "../images/M_transparent.png";
            localStorage.setItem('selected_mode_1_CH1', 'Marker');
        }
        else {
            mode2_state_icon_ch1.src = "../images/M_transparent.png";
            localStorage.setItem('selected_mode_2_CH1', 'Marker');
        }
    }
    if (localStorage.getItem('selected_channel') == '2') {
        if (localStorage.getItem('selected_mode') == '1') {
            mode1_state_icon_ch2.src = "../images/M_transparent.png";
            localStorage.setItem('selected_mode_1_CH2', 'Marker');
        }
        else {
            mode2_state_icon_ch2.src = "../images/M_transparent.png";
            localStorage.setItem('selected_mode_2_CH2', 'Marker');
        }

    }


    var markerrow1 = document.getElementById('Marker_1_Row');
    if (this.checked) {
        markerrow1.style.visibility = 'visible';
    }
    else {
        markerrow1.style.visibility = 'hidden';
    }
})

$('#Marker_1').change(function () {
    var marker_1_color = document.getElementById('Marker_1_Color');
    var marker_1_position_left = document.getElementById('Marker_1_Position_Left');
    var marker_1_position = document.getElementById('Marker_1_Position');
    var marker_1_position_right = document.getElementById('Marker_1_Position_Right');
    var marker_1_width_left = document.getElementById('Marker_1_Width_Left');
    var marker_1_width = document.getElementById('Marker_1_Width');
    var marker_1_width_right = document.getElementById('Marker_1_Width_Right');
    if (this.checked) {
        marker_1_color.style.visibility = 'visible';
        marker_1_position_left.style.visibility = 'visible';
        marker_1_position.style.visibility = 'visible';
        marker_1_position_right.style.visibility = 'visible';
        marker_1_width_left.style.visibility = 'visible';
        marker_1_width.style.visibility = 'visible';
        marker_1_width_right.style.visibility = 'visible';

    }
    else {
        marker_1_color.style.visibility = 'hidden';
        marker_1_position_left.style.visibility = 'hidden';
        marker_1_position.style.visibility = 'hidden';
        marker_1_position_right.style.visibility = 'hidden';
        marker_1_width_left.style.visibility = 'hidden';
        marker_1_width.style.visibility = 'hidden';
        marker_1_width_right.style.visibility = 'hidden';
    }

})



/**
 * Increase/Decrease Position Value of Marker 1
 */
$('#marker_1_shift_pos_left').click(function () {
    var elem = document.getElementById('marker_1_pos_input');
    elem.value = Number(elem.value) - 1;
})
$('#marker_1_shift_pos_right').click(function () {
    var elem = document.getElementById('marker_1_pos_input');
    elem.value = Number(elem.value) + 1;
})



/**
 * Increase/Decrease Width Value of Marker 1
 */
$('#marker_1_shift_width_left').click(function () {
    // Decrease shown input value
    var elem = document.getElementById('marker_1_width_input');
    elem.value = Number(elem.value) - 1;
    // Change preview image width
    /*
    var value = previewimg.style.width;
    value = value.replace(/\D/g, "");
    value = Number(value) - 1;
    previewimg.style.width = value + 'px';
    */
})
$('#marker_1_shift_width_right').click(function () {
    // Increase shown input value
    var elem = document.getElementById('marker_1_width_input');
    elem.value = Number(elem.value) + 1;
    // Change preview image width
    /*
    var value = previewimg.style.width;
    value = value.replace(/\D/g, "");
    value = Number(value) + 1;
    previewimg.style.width = value + 'px';
    */
})



