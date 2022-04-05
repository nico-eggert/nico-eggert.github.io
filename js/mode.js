const btn_green = document.getElementById('btn_green');
const btn_red = document.getElementById('btn_red');
const btn_runninglight = document.getElementById('btn_runninglight');
const btnSAVE = document.getElementById('btn_save');
const marker_1_width_input = document.getElementById('marker_1_width_input');
const marker_1_position_input = document.getElementById('marker_1_pos_input');


var mode1_state_icon_ch1 = window.parent.document.getElementById('mode1_state_icon_ch1');
var mode2_state_icon_ch1 = window.parent.document.getElementById('mode2_state_icon_ch1');
var mode1_state_icon_ch2 = window.parent.document.getElementById('mode1_state_icon_ch2');
var mode2_state_icon_ch2 = window.parent.document.getElementById('mode2_state_icon_ch2');
var sidemenu_save_btn = window.parent.document.getElementById('btnSave');
var sidemenu_save_btn_2 = window.parent.document.getElementById('btnSave_2');

// mode buttons
var mode = document.getElementById('Mode');
var col_green = document.getElementById('btn_green_col');
var col_red = document.getElementById('btn_red_col');
var col_runninglight = document.getElementById('btn_runninglight_col');

var marker = document.getElementById('Marker');
var min_value_marker_1 = 0; // min value of starting position or width for markers
var max_value_marker_1 = Number(localStorage.getItem('selected_length').replace(' mm', ''));
//marker 1
var markerrow1 = document.getElementById('Marker_1_Row');
var marker_1 = document.getElementById('Marker_1');
var marker_1_color = document.getElementById('Marker_1_Color');
var marker_1_position_left = document.getElementById('Marker_1_Position_Left');
var marker_1_position = document.getElementById('Marker_1_Position');
var marker_1_position_right = document.getElementById('Marker_1_Position_Right');
var marker_1_width_left = document.getElementById('Marker_1_Width_Left');
var marker_1_width = document.getElementById('Marker_1_Width');
var marker_1_width_right = document.getElementById('Marker_1_Width_Right');
// marker 2
var markerrow2 = document.getElementById('Marker_2_Row');
var marker_2 = document.getElementById('Marker_2');
var marker_2_color = document.getElementById('Marker_2_Color');
var marker_2_position_left = document.getElementById('Marker_2_Position_Left');
var marker_2_position = document.getElementById('Marker_2_Position');
var marker_2_position_right = document.getElementById('Marker_2_Position_Right');
var marker_2_width_left = document.getElementById('Marker_2_Width_Left');
var marker_2_width = document.getElementById('Marker_2_Width');
var marker_2_width_right = document.getElementById('Marker_2_Width_Right');
// marker 3
var markerrow3 = document.getElementById('Marker_3_Row');
var marker_3 = document.getElementById('Marker_3');
var marker_3_color = document.getElementById('Marker_3_Color');
var marker_3_position_left = document.getElementById('Marker_3_Position_Left');
var marker_3_position = document.getElementById('Marker_3_Position');
var marker_3_position_right = document.getElementById('Marker_3_Position_Right');
var marker_3_width_left = document.getElementById('Marker_3_Width_Left');
var marker_3_width = document.getElementById('Marker_3_Width');
var marker_3_width_right = document.getElementById('Marker_3_Width_Right');
// marker 4
var markerrow4 = document.getElementById('Marker_4_Row');
var marker_4 = document.getElementById('Marker_4');
var marker_4_color = document.getElementById('Marker_4_Color');
var marker_4_position_left = document.getElementById('Marker_4_Position_Left');
var marker_4_position = document.getElementById('Marker_4_Position');
var marker_4_position_right = document.getElementById('Marker_4_Position_Right');
var marker_4_width_left = document.getElementById('Marker_4_Width_Left');
var marker_4_width = document.getElementById('Marker_4_Width');
var marker_4_width_right = document.getElementById('Marker_4_Width_Right');
// marker 5
var markerrow5 = document.getElementById('Marker_5_Row');
var marker_5 = document.getElementById('Marker_5');
var marker_5_color = document.getElementById('Marker_5_Color');
var marker_5_position_left = document.getElementById('Marker_5_Position_Left');
var marker_5_position = document.getElementById('Marker_5_Position');
var marker_5_position_right = document.getElementById('Marker_5_Position_Right');
var marker_5_width_left = document.getElementById('Marker_5_Width_Left');
var marker_5_width = document.getElementById('Marker_5_Width');
var marker_5_width_right = document.getElementById('Marker_5_Width_Right');

updateSelection();


document.addEventListener('DOMContentLoaded', () => {
    btn_green.addEventListener('click', clickModeGREEN);
    btn_red.addEventListener('click', clickModeRED);
    btn_runninglight.addEventListener('click', clickModeRUNNINGLIGHT);
    btnSAVE.addEventListener('click', clickSave);
})

/**
 * Load previously selected brightness from local storage/RAM variables.
 * Sets current values active on buttons.
 */
function updateSelection() {
    // CHANNEL 1
    if (localStorage.getItem('selected_channel') == '1') { // channel 1
        console.log('channel 1');
        if (localStorage.getItem('selected_mode') == '1') { // mode 1
            // set buttons of mode colors active
            console.log(localStorage.getItem('selected_mode1_CH1'));
            if (localStorage.getItem('selected_mode1_CH1') == 'all green') {
                mode.checked = true;
                // display mode buttons
                col_green.style.visibility = 'visible';
                col_red.style.visibility = 'visible';
                col_runninglight.style.visibility = 'visible';
                // activate green button
                btn_green.classList.add("active");
                // deactivate others
                if (btn_red.classList.contains("active")) {
                    btn_red.classList.remove("active");
                }
                if (btn_runninglight.classList.contains("active")) {
                    btn_runninglight.classList.remove("active");
                }
            }
            if (localStorage.getItem('selected_mode1_CH1') == 'all red') {
                mode.checked = true;
                // display mode buttons
                col_green.style.visibility = 'visible';
                col_red.style.visibility = 'visible';
                col_runninglight.style.visibility = 'visible';
                // activate red button
                btn_red.classList.add("active");
                // deactivate others
                if (btn_green.classList.contains("active")) {
                    btn_green.classList.remove("active");
                }
                if (btn_runninglight.classList.contains("active")) {
                    btn_runninglight.classList.remove("active");
                }
            }
            if (localStorage.getItem('selected_mode1_CH1') == 'runninglight') {
                mode.checked = true;
                // display mode buttons
                col_green.style.visibility = 'visible';
                col_red.style.visibility = 'visible';
                col_runninglight.style.visibility = 'visible';
                // activate runninglight button
                btn_runninglight.classList.add("active");
                // deactivate others
                if (btn_green.classList.contains("active")) {
                    btn_green.classList.remove("active");
                }
                if (btn_red.classList.contains("active")) {
                    btn_red.classList.remove("active");
                }
            }
            // if marker mode selected, show all markers
            if (localStorage.getItem('selected_mode1_CH1') == 'marker1') {
                marker.checked = true;
                showMarker();
                if (localStorage.getItem('selected_color_marker1_CH1') != 'off') {
                    marker_1.checked = true;
                    showMarkerSettings(1);
                }
                else {
                    marker_1.checked = false;
                }
                if (localStorage.getItem('selected_color_marker2_CH1') != 'off') {
                    marker_2.checked = true;
                    showMarkerSettings(2);
                }
                else {
                    marker_2.checked = false;
                }
                if (localStorage.getItem('selected_color_marker3_CH1') != 'off') {
                    marker_3.checked = true;
                    showMarkerSettings(3);
                }
                else {
                    marker_3.checked = false;
                }
                if (localStorage.getItem('selected_color_marker4_CH1') != 'off') {
                    marker_4.checked = true;
                    showMarkerSettings(4);
                }
                else {
                    marker_4.checked = false;
                }
                if (localStorage.getItem('selected_color_marker5_CH1') != 'off') {
                    marker_5.checked = true;
                    showMarkerSettings(5);
                }
                else {
                    marker_5.checked = false;
                }
            }
            // color marker 1
            if (localStorage.getItem('selected_color_marker1_CH1') == 'green') {
                var elem = document.getElementById('color_dropdown_btn1');
                elem.style.background = 'green';
                elem.style.color = 'black';
                elem.textContent = 'Green';
            }
            if (localStorage.getItem('selected_color_marker1_CH1') == 'red') {
                elem = document.getElementById('color_dropdown_btn1');
                elem.style.background = 'red';
                elem.style.color = 'black';
                elem.textContent = 'Red';
            }
            if (localStorage.getItem('selected_color_marker1_CH1') == 'blue') {
                elem = document.getElementById('color_dropdown_btn1');
                elem.style.background = 'blue';
                elem.style.color = 'white';
                elem.textContent = 'Blue';
            }
            if (localStorage.getItem('selected_color_marker1_CH1') == 'yellow') {
                elem = document.getElementById('color_dropdown_btn1');
                elem.style.background = 'yellow';
                elem.style.color = 'black';
                elem.textContent = 'Yellow';
            }
            if (localStorage.getItem('selected_color_marker1_CH1') == 'white') {
                elem = document.getElementById('color_dropdown_btn1');
                elem.style.background = 'white';
                elem.style.color = 'black';
                elem.textContent = 'White';
            }
            if (localStorage.getItem('selected_color_marker1_CH1') == 'cyan') {
                elem = document.getElementById('color_dropdown_btn1');
                elem.style.background = 'cyan';
                elem.style.color = 'black';
                elem.textContent = 'Cyan';
            }
            if (localStorage.getItem('selected_color_marker1_CH1') == 'magenta') {
                elem = document.getElementById('color_dropdown_btn1');
                elem.style.background = 'magenta';
                elem.style.color = 'black';
                elem.textContent = 'Magenta';
            }
            // color marker 2
            if (localStorage.getItem('selected_color_marker2_CH1') == 'green') {
                var elem = document.getElementById('color_dropdown_btn2');
                elem.style.background = 'green';
                elem.style.color = 'black';
                elem.textContent = 'Green';
            }
            if (localStorage.getItem('selected_color_marker2_CH1') == 'red') {
                elem = document.getElementById('color_dropdown_btn2');
                elem.style.background = 'red';
                elem.style.color = 'black';
                elem.textContent = 'Red';
            }
            if (localStorage.getItem('selected_color_marker2_CH1') == 'blue') {
                elem = document.getElementById('color_dropdown_btn2');
                elem.style.background = 'blue';
                elem.style.color = 'white';
                elem.textContent = 'Blue';
            }
            if (localStorage.getItem('selected_color_marker2_CH1') == 'yellow') {
                elem = document.getElementById('color_dropdown_btn2');
                elem.style.background = 'yellow';
                elem.style.color = 'black';
                elem.textContent = 'Yellow';
            }
            if (localStorage.getItem('selected_color_marker2_CH1') == 'white') {
                elem = document.getElementById('color_dropdown_btn2');
                elem.style.background = 'white';
                elem.style.color = 'black';
                elem.textContent = 'White';
            }
            if (localStorage.getItem('selected_color_marker2_CH1') == 'cyan') {
                elem = document.getElementById('color_dropdown_btn2');
                elem.style.background = 'cyan';
                elem.style.color = 'black';
                elem.textContent = 'Cyan';
            }
            if (localStorage.getItem('selected_color_marker2_CH1') == 'magenta') {
                elem = document.getElementById('color_dropdown_btn2');
                elem.style.background = 'magenta';
                elem.style.color = 'black';
                elem.textContent = 'Magenta';
            }
            // color marker 3
            if (localStorage.getItem('selected_color_marker3_CH1') == 'green') {
                var elem = document.getElementById('color_dropdown_btn3');
                elem.style.background = 'green';
                elem.style.color = 'black';
                elem.textContent = 'Green';
            }
            if (localStorage.getItem('selected_color_marker3_CH1') == 'red') {
                elem = document.getElementById('color_dropdown_btn3');
                elem.style.background = 'red';
                elem.style.color = 'black';
                elem.textContent = 'Red';
            }
            if (localStorage.getItem('selected_color_marker3_CH1') == 'blue') {
                elem = document.getElementById('color_dropdown_btn3');
                elem.style.background = 'blue';
                elem.style.color = 'white';
                elem.textContent = 'Blue';
            }
            if (localStorage.getItem('selected_color_marker3_CH1') == 'yellow') {
                elem = document.getElementById('color_dropdown_btn3');
                elem.style.background = 'yellow';
                elem.style.color = 'black';
                elem.textContent = 'Yellow';
            }
            if (localStorage.getItem('selected_color_marker3_CH1') == 'white') {
                elem = document.getElementById('color_dropdown_btn3');
                elem.style.background = 'white';
                elem.style.color = 'black';
                elem.textContent = 'White';
            }
            if (localStorage.getItem('selected_color_marker3_CH1') == 'cyan') {
                elem = document.getElementById('color_dropdown_btn3');
                elem.style.background = 'cyan';
                elem.style.color = 'black';
                elem.textContent = 'Cyan';
            }
            if (localStorage.getItem('selected_color_marker3_CH1') == 'magenta') {
                elem = document.getElementById('color_dropdown_btn3');
                elem.style.background = 'magenta';
                elem.style.color = 'black';
                elem.textContent = 'Magenta';
            }
            // color marker 4
            if (localStorage.getItem('selected_color_marker4_CH1') == 'green') {
                var elem = document.getElementById('color_dropdown_btn4');
                elem.style.background = 'green';
                elem.style.color = 'black';
                elem.textContent = 'Green';
            }
            if (localStorage.getItem('selected_color_marker4_CH1') == 'red') {
                elem = document.getElementById('color_dropdown_btn4');
                elem.style.background = 'red';
                elem.style.color = 'black';
                elem.textContent = 'Red';
            }
            if (localStorage.getItem('selected_color_marker4_CH1') == 'blue') {
                elem = document.getElementById('color_dropdown_btn4');
                elem.style.background = 'blue';
                elem.style.color = 'white';
                elem.textContent = 'Blue';
            }
            if (localStorage.getItem('selected_color_marker4_CH1') == 'yellow') {
                elem = document.getElementById('color_dropdown_btn4');
                elem.style.background = 'yellow';
                elem.style.color = 'black';
                elem.textContent = 'Yellow';
            }
            if (localStorage.getItem('selected_color_marker4_CH1') == 'white') {
                elem = document.getElementById('color_dropdown_btn4');
                elem.style.background = 'white';
                elem.style.color = 'black';
                elem.textContent = 'White';
            }
            if (localStorage.getItem('selected_color_marker4_CH1') == 'cyan') {
                elem = document.getElementById('color_dropdown_btn4');
                elem.style.background = 'cyan';
                elem.style.color = 'black';
                elem.textContent = 'Cyan';
            }
            if (localStorage.getItem('selected_color_marker4_CH1') == 'magenta') {
                elem = document.getElementById('color_dropdown_btn4');
                elem.style.background = 'magenta';
                elem.style.color = 'black';
                elem.textContent = 'Magenta';
            }
            // color marker 5
            if (localStorage.getItem('selected_color_marker5_CH1') == 'green') {
                var elem = document.getElementById('color_dropdown_btn5');
                elem.style.background = 'green';
                elem.style.color = 'black';
                elem.textContent = 'Green';
            }
            if (localStorage.getItem('selected_color_marker5_CH1') == 'red') {
                elem = document.getElementById('color_dropdown_btn5');
                elem.style.background = 'red';
                elem.style.color = 'black';
                elem.textContent = 'Red';
            }
            if (localStorage.getItem('selected_color_marker5_CH1') == 'blue') {
                elem = document.getElementById('color_dropdown_btn5');
                elem.style.background = 'blue';
                elem.style.color = 'white';
                elem.textContent = 'Blue';
            }
            if (localStorage.getItem('selected_color_marker5_CH1') == 'yellow') {
                elem = document.getElementById('color_dropdown_btn5');
                elem.style.background = 'yellow';
                elem.style.color = 'black';
                elem.textContent = 'Yellow';
            }
            if (localStorage.getItem('selected_color_marker5_CH1') == 'white') {
                elem = document.getElementById('color_dropdown_btn5');
                elem.style.background = 'white';
                elem.style.color = 'black';
                elem.textContent = 'White';
            }
            if (localStorage.getItem('selected_color_marker5_CH1') == 'cyan') {
                elem = document.getElementById('color_dropdown_btn5');
                elem.style.background = 'cyan';
                elem.style.color = 'black';
                elem.textContent = 'Cyan';
            }
            if (localStorage.getItem('selected_color_marker5_CH1') == 'magenta') {
                elem = document.getElementById('color_dropdown_btn5');
                elem.style.background = 'magenta';
                elem.style.color = 'black';
                elem.textContent = 'Magenta';
            }
            // marker position
            if (localStorage.getItem('selected_position_marker1_CH1') != 'none') {
                elem = document.getElementById('marker_1_pos_input');
                elem.value = localStorage.getItem('selected_position_marker1_CH1');
            }
            if (localStorage.getItem('selected_position_marker2_CH1') != 'none') {
                elem = document.getElementById('marker_2_pos_input');
                elem.value = localStorage.getItem('selected_position_marker2_CH1');
            }
            if (localStorage.getItem('selected_position_marker3_CH1') != 'none') {
                elem = document.getElementById('marker_3_pos_input');
                elem.value = localStorage.getItem('selected_position_marker3_CH1');
            }
            if (localStorage.getItem('selected_position_marker4_CH1') != 'none') {
                elem = document.getElementById('marker_4_pos_input');
                elem.value = localStorage.getItem('selected_position_marker4_CH1');
            }
            if (localStorage.getItem('selected_position_marker5_CH1') != 'none') {
                elem = document.getElementById('marker_5_pos_input');
                elem.value = localStorage.getItem('selected_position_marker5_CH1');
            }
            // marker width
            if (localStorage.getItem('selected_width_marker1_CH1') != 'none') {
                elem = document.getElementById('marker_1_width_input');
                elem.value = localStorage.getItem('selected_width_marker1_CH1');
            }
            if (localStorage.getItem('selected_position_marker2_CH1') != 'none') {
                elem = document.getElementById('marker_2_width_input');
                elem.value = localStorage.getItem('selected_width_marker2_CH1');
            }
            if (localStorage.getItem('selected_position_marker3_CH1') != 'none') {
                elem = document.getElementById('marker_3_width_input');
                elem.value = localStorage.getItem('selected_width_marker3_CH1');
            }
            if (localStorage.getItem('selected_position_marker4_CH1') != 'none') {
                elem = document.getElementById('marker_4_width_input');
                elem.value = localStorage.getItem('selected_width_marker4_CH1');
            }
            if (localStorage.getItem('selected_position_marker5_CH1') != 'none') {
                elem = document.getElementById('marker_5_width_input');
                elem.value = localStorage.getItem('selected_width_marker5_CH1');
            }
        }
        if (localStorage.getItem('selected_mode') == "2") { // mode 2

            console.log(localStorage.getItem('selected_mode2_CH1'));
            if (localStorage.getItem('selected_mode2_CH1') == 'all green') {
                mode.checked = true;
                // display mode buttons
                col_green.style.visibility = 'visible';
                col_red.style.visibility = 'visible';
                col_runninglight.style.visibility = 'visible';
                // activate green button
                btn_green.classList.add("active");
                // deactivate others
                if (btn_red.classList.contains("active")) {
                    btn_red.classList.remove("active");
                }
                if (btn_runninglight.classList.contains("active")) {
                    ;
                    btn_runninglight.classList.remove("active");
                }
            }
            if (localStorage.getItem('selected_mode2_CH1') == 'all red') {
                mode.checked = true;
                // display mode buttons
                col_green.style.visibility = 'visible';
                col_red.style.visibility = 'visible';
                col_runninglight.style.visibility = 'visible';
                // activate red button
                btn_red.classList.add("active");
                // deactivate others
                if (btn_green.classList.contains("active")) {
                    btn_green.classList.remove("active");
                }
                if (btn_runninglight.classList.contains("active")) {
                    btn_runninglight.classList.remove("active");
                }
            }
            if (localStorage.getItem('selected_mode2_CH1') == 'runninglight') {
                mode.checked = true;
                // display mode buttons
                col_green.style.visibility = 'visible';
                col_red.style.visibility = 'visible';
                col_runninglight.style.visibility = 'visible';
                // activate runninglight button
                btn_runninglight.classList.add("active");
                // deactivate others
                if (btn_green.classList.contains("active")) {
                    btn_green.classList.remove("active");
                }
                if (btn_red.classList.contains("active")) {
                    btn_red.classList.remove("active");
                }
            }
            // if marker mode selected, show all markers
            if (localStorage.getItem('selected_mode2_CH1') == 'marker2') {
                marker.checked = true;
                showMarker();
                if (localStorage.getItem('selected_color_marker1_CH1_mode2') != 'off') {
                    marker_1.checked = true;
                    showMarkerSettings(1);
                }
                else {
                    marker_1.checked = false;
                }
                if (localStorage.getItem('selected_color_marker2_CH1_mode2') != 'off') {
                    marker_2.checked = true;
                    showMarkerSettings(2);
                }
                else {
                    marker_2.checked = false;
                }
                if (localStorage.getItem('selected_color_marker3_CH1_mode2') != 'off') {
                    marker_3.checked = true;
                    showMarkerSettings(3);
                }
                else {
                    marker_3.checked = false;
                }
                if (localStorage.getItem('selected_color_marker4_CH1_mode2') != 'off') {
                    marker_4.checked = true;
                    showMarkerSettings(4);
                }
                else {
                    marker_4.checked = false;
                }
                if (localStorage.getItem('selected_color_marker5_CH1_mode2') != 'off') {
                    marker_5.checked = true;
                    showMarkerSettings(5);
                }
                else {
                    marker_5.checked = false;
                }
            }
            // color marker 1
            if (localStorage.getItem('selected_color_marker1_CH1_mode2') == 'green') {
                var elem = document.getElementById('color_dropdown_btn1');
                elem.style.background = 'green';
                elem.style.color = 'black';
                elem.textContent = 'Green';
            }
            if (localStorage.getItem('selected_color_marker1_CH1_mode2') == 'red') {
                elem = document.getElementById('color_dropdown_btn1');
                elem.style.background = 'red';
                elem.style.color = 'black';
                elem.textContent = 'Red';
            }
            if (localStorage.getItem('selected_color_marker1_CH1_mode2') == 'blue') {
                elem = document.getElementById('color_dropdown_btn1');
                elem.style.background = 'blue';
                elem.style.color = 'white';
                elem.textContent = 'Blue';
            }
            if (localStorage.getItem('selected_color_marker1_CH1_mode2') == 'yellow') {
                elem = document.getElementById('color_dropdown_btn1');
                elem.style.background = 'yellow';
                elem.style.color = 'black';
                elem.textContent = 'Yellow';
            }
            if (localStorage.getItem('selected_color_marker1_CH1_mode2') == 'white') {
                elem = document.getElementById('color_dropdown_btn1');
                elem.style.background = 'white';
                elem.style.color = 'black';
                elem.textContent = 'White';
            }
            if (localStorage.getItem('selected_color_marker1_CH1_mode2') == 'cyan') {
                elem = document.getElementById('color_dropdown_btn1');
                elem.style.background = 'cyan';
                elem.style.color = 'black';
                elem.textContent = 'Cyan';
            }
            if (localStorage.getItem('selected_color_marker1_CH1_mode2') == 'magenta') {
                elem = document.getElementById('color_dropdown_btn1');
                elem.style.background = 'magenta';
                elem.style.color = 'black';
                elem.textContent = 'Magenta';
            }
            // color marker 2
            if (localStorage.getItem('selected_color_marker2_CH1_mode2') == 'green') {
                var elem = document.getElementById('color_dropdown_btn2');
                elem.style.background = 'green';
                elem.style.color = 'black';
                elem.textContent = 'Green';
            }
            if (localStorage.getItem('selected_color_marker2_CH1_mode2') == 'red') {
                elem = document.getElementById('color_dropdown_btn2');
                elem.style.background = 'red';
                elem.style.color = 'black';
                elem.textContent = 'Red';
            }
            if (localStorage.getItem('selected_color_marker2_CH1_mode2') == 'blue') {
                elem = document.getElementById('color_dropdown_btn2');
                elem.style.background = 'blue';
                elem.style.color = 'white';
                elem.textContent = 'Blue';
            }
            if (localStorage.getItem('selected_color_marker2_CH1_mode2') == 'yellow') {
                elem = document.getElementById('color_dropdown_btn2');
                elem.style.background = 'yellow';
                elem.style.color = 'black';
                elem.textContent = 'Yellow';
            }
            if (localStorage.getItem('selected_color_marker2_CH1_mode2') == 'white') {
                elem = document.getElementById('color_dropdown_btn2');
                elem.style.background = 'white';
                elem.style.color = 'black';
                elem.textContent = 'White';
            }
            if (localStorage.getItem('selected_color_marker2_CH1_mode2') == 'cyan') {
                elem = document.getElementById('color_dropdown_btn2');
                elem.style.background = 'cyan';
                elem.style.color = 'black';
                elem.textContent = 'Cyan';
            }
            if (localStorage.getItem('selected_color_marker2_CH1_mode2') == 'magenta') {
                elem = document.getElementById('color_dropdown_btn2');
                elem.style.background = 'magenta';
                elem.style.color = 'black';
                elem.textContent = 'Magenta';
            }
            // color marker 3
            if (localStorage.getItem('selected_color_marker3_CH1_mode2') == 'green') {
                var elem = document.getElementById('color_dropdown_btn3');
                elem.style.background = 'green';
                elem.style.color = 'black';
                elem.textContent = 'Green';
            }
            if (localStorage.getItem('selected_color_marker3_CH1_mode2') == 'red') {
                elem = document.getElementById('color_dropdown_btn3');
                elem.style.background = 'red';
                elem.style.color = 'black';
                elem.textContent = 'Red';
            }
            if (localStorage.getItem('selected_color_marker3_CH1_mode2') == 'blue') {
                elem = document.getElementById('color_dropdown_btn3');
                elem.style.background = 'blue';
                elem.style.color = 'white';
                elem.textContent = 'Blue';
            }
            if (localStorage.getItem('selected_color_marker3_CH1_mode2') == 'yellow') {
                elem = document.getElementById('color_dropdown_btn3');
                elem.style.background = 'yellow';
                elem.style.color = 'black';
                elem.textContent = 'Yellow';
            }
            if (localStorage.getItem('selected_color_marker3_CH1_mode2') == 'white') {
                elem = document.getElementById('color_dropdown_btn3');
                elem.style.background = 'white';
                elem.style.color = 'black';
                elem.textContent = 'White';
            }
            if (localStorage.getItem('selected_color_marker3_CH1_mode2') == 'cyan') {
                elem = document.getElementById('color_dropdown_btn3');
                elem.style.background = 'cyan';
                elem.style.color = 'black';
                elem.textContent = 'Cyan';
            }
            if (localStorage.getItem('selected_color_marker3_CH1_mode2') == 'magenta') {
                elem = document.getElementById('color_dropdown_btn3');
                elem.style.background = 'magenta';
                elem.style.color = 'black';
                elem.textContent = 'Magenta';
            }
            // color marker 4
            if (localStorage.getItem('selected_color_marker4_CH1_mode2') == 'green') {
                var elem = document.getElementById('color_dropdown_btn4');
                elem.style.background = 'green';
                elem.style.color = 'black';
                elem.textContent = 'Green';
            }
            if (localStorage.getItem('selected_color_marker4_CH1_mode2') == 'red') {
                elem = document.getElementById('color_dropdown_btn4');
                elem.style.background = 'red';
                elem.style.color = 'black';
                elem.textContent = 'Red';
            }
            if (localStorage.getItem('selected_color_marker4_CH1_mode2') == 'blue') {
                elem = document.getElementById('color_dropdown_btn4');
                elem.style.background = 'blue';
                elem.style.color = 'white';
                elem.textContent = 'Blue';
            }
            if (localStorage.getItem('selected_color_marker4_CH1_mode2') == 'yellow') {
                elem = document.getElementById('color_dropdown_btn4');
                elem.style.background = 'yellow';
                elem.style.color = 'black';
                elem.textContent = 'Yellow';
            }
            if (localStorage.getItem('selected_color_marker4_CH1_mode2') == 'white') {
                elem = document.getElementById('color_dropdown_btn4');
                elem.style.background = 'white';
                elem.style.color = 'black';
                elem.textContent = 'White';
            }
            if (localStorage.getItem('selected_color_marker4_CH1_mode2') == 'cyan') {
                elem = document.getElementById('color_dropdown_btn4');
                elem.style.background = 'cyan';
                elem.style.color = 'black';
                elem.textContent = 'Cyan';
            }
            if (localStorage.getItem('selected_color_marker4_CH1_mode2') == 'magenta') {
                elem = document.getElementById('color_dropdown_btn4');
                elem.style.background = 'magenta';
                elem.style.color = 'black';
                elem.textContent = 'Magenta';
            }
            // color marker 5
            if (localStorage.getItem('selected_color_marker5_CH1_mode2') == 'green') {
                var elem = document.getElementById('color_dropdown_btn5');
                elem.style.background = 'green';
                elem.style.color = 'black';
                elem.textContent = 'Green';
            }
            if (localStorage.getItem('selected_color_marker5_CH1_mode2') == 'red') {
                elem = document.getElementById('color_dropdown_btn5');
                elem.style.background = 'red';
                elem.style.color = 'black';
                elem.textContent = 'Red';
            }
            if (localStorage.getItem('selected_color_marker5_CH1_mode2') == 'blue') {
                elem = document.getElementById('color_dropdown_btn5');
                elem.style.background = 'blue';
                elem.style.color = 'white';
                elem.textContent = 'Blue';
            }
            if (localStorage.getItem('selected_color_marker5_CH1_mode2') == 'yellow') {
                elem = document.getElementById('color_dropdown_btn5');
                elem.style.background = 'yellow';
                elem.style.color = 'black';
                elem.textContent = 'Yellow';
            }
            if (localStorage.getItem('selected_color_marker5_CH1_mode2') == 'white') {
                elem = document.getElementById('color_dropdown_btn5');
                elem.style.background = 'white';
                elem.style.color = 'black';
                elem.textContent = 'White';
            }
            if (localStorage.getItem('selected_color_marker5_CH1_mode2') == 'cyan') {
                elem = document.getElementById('color_dropdown_btn5');
                elem.style.background = 'cyan';
                elem.style.color = 'black';
                elem.textContent = 'Cyan';
            }
            if (localStorage.getItem('selected_color_marker5_CH1_mode2') == 'magenta') {
                elem = document.getElementById('color_dropdown_btn5');
                elem.style.background = 'magenta';
                elem.style.color = 'black';
                elem.textContent = 'Magenta';
            }
            // marker position
            if (localStorage.getItem('selected_position_marker1_CH1_mode2') != 'none') {
                elem = document.getElementById('marker_1_pos_input');
                elem.value = localStorage.getItem('selected_position_marker1_CH1_mode2');
            }
            if (localStorage.getItem('selected_position_marker2_CH1_mode2') != 'none') {
                elem = document.getElementById('marker_2_pos_input');
                elem.value = localStorage.getItem('selected_position_marker2_CH1_mode2');
            }
            if (localStorage.getItem('selected_position_marker3_CH1_mode2') != 'none') {
                elem = document.getElementById('marker_3_pos_input');
                elem.value = localStorage.getItem('selected_position_marker3_CH1_mode2');
            }
            if (localStorage.getItem('selected_position_marker4_CH1_mode2') != 'none') {
                elem = document.getElementById('marker_4_pos_input');
                elem.value = localStorage.getItem('selected_position_marker4_CH1_mode2');
            }
            if (localStorage.getItem('selected_position_marker5_CH1_mode2') != 'none') {
                elem = document.getElementById('marker_5_pos_input');
                elem.value = localStorage.getItem('selected_position_marker5_CH1_mode2');
            }
            // marker width
            if (localStorage.getItem('selected_width_marker1_CH1_mode2') != 'none') {
                elem = document.getElementById('marker_1_width_input');
                elem.value = localStorage.getItem('selected_width_marker1_CH1_mode2');
            }
            if (localStorage.getItem('selected_position_marker2_CH1_mode2') != 'none') {
                elem = document.getElementById('marker_2_width_input');
                elem.value = localStorage.getItem('selected_width_marker2_CH1_mode2');
            }
            if (localStorage.getItem('selected_position_marker3_CH1_mode2') != 'none') {
                elem = document.getElementById('marker_3_width_input');
                elem.value = localStorage.getItem('selected_width_marker3_CH1_mode2');
            }
            if (localStorage.getItem('selected_position_marker4_CH1_mode2') != 'none') {
                elem = document.getElementById('marker_4_width_input');
                elem.value = localStorage.getItem('selected_width_marker4_CH1_mode2');
            }
            if (localStorage.getItem('selected_position_marker5_CH1_mode2') != 'none') {
                elem = document.getElementById('marker_5_width_input');
                elem.value = localStorage.getItem('selected_width_marker5_CH1_mode2');
            }
        }


    }
    // CHANNEL 2
    if (localStorage.getItem('selected_channel') == '2') { // channel 2
        console.log('channel 2');
        console.log(localStorage.getItem('selected_mode1_CH2'));
        if (localStorage.getItem('selected_mode') == '1') { // mode 1
            console.log('selected_mode: 1');

            if (localStorage.getItem('selected_mode1_CH2') == 'all green') {
                mode.checked = true;
                // display mode buttons
                col_green.style.visibility = 'visible';
                col_red.style.visibility = 'visible';
                col_runninglight.style.visibility = 'visible';
                // activate green button
                btn_green.classList.add("active");
                // deactivate others
                if (btn_red.classList.contains("active")) {
                    btn_red.classList.remove("active");
                }
                if (btn_runninglight.classList.contains("active")) {
                    ;
                    btn_runninglight.classList.remove("active");
                }
            }
            if (localStorage.getItem('selected_mode1_CH2') == 'all red') {
                mode.checked = true;
                // display mode buttons
                col_green.style.visibility = 'visible';
                col_red.style.visibility = 'visible';
                col_runninglight.style.visibility = 'visible';
                // activate red button
                btn_red.classList.add("active");
                // deactivate others
                if (btn_green.classList.contains("active")) {
                    btn_green.classList.remove("active");
                }
                if (btn_runninglight.classList.contains("active")) {
                    btn_runninglight.classList.remove("active");
                }
            }
            if (localStorage.getItem('selected_mode1_CH2') == 'runninglight') {
                mode.checked = true;
                // display mode buttons
                col_green.style.visibility = 'visible';
                col_red.style.visibility = 'visible';
                col_runninglight.style.visibility = 'visible';
                // activate runninglight button
                btn_runninglight.classList.add("active");
                // deactivate others
                if (btn_green.classList.contains("active")) {
                    btn_green.classList.remove("active");
                }
                if (btn_red.classList.contains("active")) {
                    btn_red.classList.remove("active");
                }
            }
            // if marker mode selected, show all markers
            if (localStorage.getItem('selected_mode1_CH2') == 'marker1') {
                marker.checked = true;
                showMarker();
                if (localStorage.getItem('selected_color_marker1_CH2') != 'off') {
                    marker_1.checked = true;
                    showMarkerSettings(1);
                }
                else {
                    marker_1.checked = false;
                }
                if (localStorage.getItem('selected_color_marker2_CH2') != 'off') {
                    marker_2.checked = true;
                    showMarkerSettings(2);
                }
                else {
                    marker_2.checked = false;
                }
                if (localStorage.getItem('selected_color_marker3_CH2') != 'off') {
                    marker_3.checked = true;
                    showMarkerSettings(3);
                }
                else {
                    marker_3.checked = false;
                }
                if (localStorage.getItem('selected_color_marker4_CH2') != 'off') {
                    marker_4.checked = true;
                    showMarkerSettings(4);
                }
                else {
                    marker_4.checked = false;
                }
                if (localStorage.getItem('selected_color_marker5_CH2') != 'off') {
                    marker_5.checked = true;
                    showMarkerSettings(5);
                }
                else {
                    marker_5.checked = false;
                }
            }
            // color marker 1
            if (localStorage.getItem('selected_color_marker1_CH2') == 'green') {
                var elem = document.getElementById('color_dropdown_btn1');
                elem.style.background = 'green';
                elem.style.color = 'black';
                elem.textContent = 'Green';
            }
            if (localStorage.getItem('selected_color_marker1_CH2') == 'red') {
                elem = document.getElementById('color_dropdown_btn1');
                elem.style.background = 'red';
                elem.style.color = 'black';
                elem.textContent = 'Red';
            }
            if (localStorage.getItem('selected_color_marker1_CH2') == 'blue') {
                elem = document.getElementById('color_dropdown_btn1');
                elem.style.background = 'blue';
                elem.style.color = 'white';
                elem.textContent = 'Blue';
            }
            if (localStorage.getItem('selected_color_marker1_CH2') == 'yellow') {
                elem = document.getElementById('color_dropdown_btn1');
                elem.style.background = 'yellow';
                elem.style.color = 'black';
                elem.textContent = 'Yellow';
            }
            if (localStorage.getItem('selected_color_marker1_CH2') == 'white') {
                elem = document.getElementById('color_dropdown_btn1');
                elem.style.background = 'white';
                elem.style.color = 'black';
                elem.textContent = 'White';
            }
            if (localStorage.getItem('selected_color_marker1_CH2') == 'cyan') {
                elem = document.getElementById('color_dropdown_btn1');
                elem.style.background = 'cyan';
                elem.style.color = 'black';
                elem.textContent = 'Cyan';
            }
            if (localStorage.getItem('selected_color_marker1_CH2') == 'magenta') {
                elem = document.getElementById('color_dropdown_btn1');
                elem.style.background = 'magenta';
                elem.style.color = 'black';
                elem.textContent = 'Magenta';
            }
            // color marker 2
            if (localStorage.getItem('selected_color_marker2_CH2') == 'green') {
                var elem = document.getElementById('color_dropdown_btn2');
                elem.style.background = 'green';
                elem.style.color = 'black';
                elem.textContent = 'Green';
            }
            if (localStorage.getItem('selected_color_marker2_CH2') == 'red') {
                elem = document.getElementById('color_dropdown_btn2');
                elem.style.background = 'red';
                elem.style.color = 'black';
                elem.textContent = 'Red';
            }
            if (localStorage.getItem('selected_color_marker2_CH2') == 'blue') {
                elem = document.getElementById('color_dropdown_btn2');
                elem.style.background = 'blue';
                elem.style.color = 'white';
                elem.textContent = 'Blue';
            }
            if (localStorage.getItem('selected_color_marker2_CH2') == 'yellow') {
                elem = document.getElementById('color_dropdown_btn2');
                elem.style.background = 'yellow';
                elem.style.color = 'black';
                elem.textContent = 'Yellow';
            }
            if (localStorage.getItem('selected_color_marker2_CH2') == 'white') {
                elem = document.getElementById('color_dropdown_btn2');
                elem.style.background = 'white';
                elem.style.color = 'black';
                elem.textContent = 'White';
            }
            if (localStorage.getItem('selected_color_marker2_CH2') == 'cyan') {
                elem = document.getElementById('color_dropdown_btn2');
                elem.style.background = 'cyan';
                elem.style.color = 'black';
                elem.textContent = 'Cyan';
            }
            if (localStorage.getItem('selected_color_marker2_CH2') == 'magenta') {
                elem = document.getElementById('color_dropdown_btn2');
                elem.style.background = 'magenta';
                elem.style.color = 'black';
                elem.textContent = 'Magenta';
            }
            // color marker 3
            if (localStorage.getItem('selected_color_marker3_CH2') == 'green') {
                var elem = document.getElementById('color_dropdown_btn3');
                elem.style.background = 'green';
                elem.style.color = 'black';
                elem.textContent = 'Green';
            }
            if (localStorage.getItem('selected_color_marker3_CH2') == 'red') {
                elem = document.getElementById('color_dropdown_btn3');
                elem.style.background = 'red';
                elem.style.color = 'black';
                elem.textContent = 'Red';
            }
            if (localStorage.getItem('selected_color_marker3_CH2') == 'blue') {
                elem = document.getElementById('color_dropdown_btn3');
                elem.style.background = 'blue';
                elem.style.color = 'white';
                elem.textContent = 'Blue';
            }
            if (localStorage.getItem('selected_color_marker3_CH2') == 'yellow') {
                elem = document.getElementById('color_dropdown_btn3');
                elem.style.background = 'yellow';
                elem.style.color = 'black';
                elem.textContent = 'Yellow';
            }
            if (localStorage.getItem('selected_color_marker3_CH2') == 'white') {
                elem = document.getElementById('color_dropdown_btn3');
                elem.style.background = 'white';
                elem.style.color = 'black';
                elem.textContent = 'White';
            }
            if (localStorage.getItem('selected_color_marker3_CH2') == 'cyan') {
                elem = document.getElementById('color_dropdown_btn3');
                elem.style.background = 'cyan';
                elem.style.color = 'black';
                elem.textContent = 'Cyan';
            }
            if (localStorage.getItem('selected_color_marker3_CH2') == 'magenta') {
                elem = document.getElementById('color_dropdown_btn3');
                elem.style.background = 'magenta';
                elem.style.color = 'black';
                elem.textContent = 'Magenta';
            }
            // color marker 4
            if (localStorage.getItem('selected_color_marker4_CH2') == 'green') {
                var elem = document.getElementById('color_dropdown_btn4');
                elem.style.background = 'green';
                elem.style.color = 'black';
                elem.textContent = 'Green';
            }
            if (localStorage.getItem('selected_color_marker4_CH2') == 'red') {
                elem = document.getElementById('color_dropdown_btn4');
                elem.style.background = 'red';
                elem.style.color = 'black';
                elem.textContent = 'Red';
            }
            if (localStorage.getItem('selected_color_marker4_CH2') == 'blue') {
                elem = document.getElementById('color_dropdown_btn4');
                elem.style.background = 'blue';
                elem.style.color = 'white';
                elem.textContent = 'Blue';
            }
            if (localStorage.getItem('selected_color_marker2_CH2') == 'yellow') {
                elem = document.getElementById('color_dropdown_btn4');
                elem.style.background = 'yellow';
                elem.style.color = 'black';
                elem.textContent = 'Yellow';
            }
            if (localStorage.getItem('selected_color_marker4_CH2') == 'white') {
                elem = document.getElementById('color_dropdown_btn4');
                elem.style.background = 'white';
                elem.style.color = 'black';
                elem.textContent = 'White';
            }
            if (localStorage.getItem('selected_color_marker4_CH2') == 'cyan') {
                elem = document.getElementById('color_dropdown_btn4');
                elem.style.background = 'cyan';
                elem.style.color = 'black';
                elem.textContent = 'Cyan';
            }
            if (localStorage.getItem('selected_color_marker4_CH2') == 'magenta') {
                elem = document.getElementById('color_dropdown_btn4');
                elem.style.background = 'magenta';
                elem.style.color = 'black';
                elem.textContent = 'Magenta';
            }
            // color marker 5
            if (localStorage.getItem('selected_color_marker5_CH2') == 'green') {
                var elem = document.getElementById('color_dropdown_btn5');
                elem.style.background = 'green';
                elem.style.color = 'black';
                elem.textContent = 'Green';
            }
            if (localStorage.getItem('selected_color_marker5_CH2') == 'red') {
                elem = document.getElementById('color_dropdown_btn5');
                elem.style.background = 'red';
                elem.style.color = 'black';
                elem.textContent = 'Red';
            }
            if (localStorage.getItem('selected_color_marker5_CH2') == 'blue') {
                elem = document.getElementById('color_dropdown_btn5');
                elem.style.background = 'blue';
                elem.style.color = 'white';
                elem.textContent = 'Blue';
            }
            if (localStorage.getItem('selected_color_marker5_CH2') == 'yellow') {
                elem = document.getElementById('color_dropdown_btn5');
                elem.style.background = 'yellow';
                elem.style.color = 'black';
                elem.textContent = 'Yellow';
            }
            if (localStorage.getItem('selected_color_marker5_CH2') == 'white') {
                elem = document.getElementById('color_dropdown_btn5');
                elem.style.background = 'white';
                elem.style.color = 'black';
                elem.textContent = 'White';
            }
            if (localStorage.getItem('selected_color_marker5_CH2') == 'cyan') {
                elem = document.getElementById('color_dropdown_btn5');
                elem.style.background = 'cyan';
                elem.style.color = 'black';
                elem.textContent = 'Cyan';
            }
            if (localStorage.getItem('selected_color_marker5_CH2') == 'magenta') {
                elem = document.getElementById('color_dropdown_btn5');
                elem.style.background = 'magenta';
                elem.style.color = 'black';
                elem.textContent = 'Magenta';
            }
            // marker position
            if (localStorage.getItem('selected_position_marker1_CH2') != 'none') {
                elem = document.getElementById('marker_1_pos_input');
                elem.value = localStorage.getItem('selected_position_marker1_CH2');
            }
            if (localStorage.getItem('selected_position_marker2_CH2') != 'none') {
                elem = document.getElementById('marker_2_pos_input');
                elem.value = localStorage.getItem('selected_position_marker2_CH2');
            }
            if (localStorage.getItem('selected_position_marker3_CH2') != 'none') {
                elem = document.getElementById('marker_3_pos_input');
                elem.value = localStorage.getItem('selected_position_marker3_CH2');
            }
            if (localStorage.getItem('selected_position_marker4_CH2') != 'none') {
                elem = document.getElementById('marker_4_pos_input');
                elem.value = localStorage.getItem('selected_position_marker4_CH2');
            }
            if (localStorage.getItem('selected_position_marker5_CH2') != 'none') {
                elem = document.getElementById('marker_5_pos_input');
                elem.value = localStorage.getItem('selected_position_marker5_CH2');
            }
            // marker width
            if (localStorage.getItem('selected_width_marker1_CH2') != 'none') {
                elem = document.getElementById('marker_1_width_input');
                elem.value = localStorage.getItem('selected_width_marker1_CH2');
            }
            if (localStorage.getItem('selected_position_marker2_CH2') != 'none') {
                elem = document.getElementById('marker_2_width_input');
                elem.value = localStorage.getItem('selected_width_marker2_CH2');
            }
            if (localStorage.getItem('selected_position_marker3_CH2') != 'none') {
                elem = document.getElementById('marker_3_width_input');
                elem.value = localStorage.getItem('selected_width_marker3_CH2');
            }
            if (localStorage.getItem('selected_position_marker4_CH2') != 'none') {
                elem = document.getElementById('marker_4_width_input');
                elem.value = localStorage.getItem('selected_width_marker4_CH2');
            }
            if (localStorage.getItem('selected_position_marker5_CH2') != 'none') {
                elem = document.getElementById('marker_5_width_input');
                elem.value = localStorage.getItem('selected_width_marker5_CH2');
            }
        }
        if (localStorage.getItem('selected_mode') == '2') { // mode 2
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
            // if marker mode selected, show all markers
            if (localStorage.getItem('selected_mode2_CH2') == 'marker2') {
                marker.checked = true;
                showMarker();
                if (localStorage.getItem('selected_color_marker1_CH2_mode2') != 'off') {
                    marker_1.checked = true;
                    showMarkerSettings(1);
                }
                else {
                    marker_1.checked = false;
                }
                if (localStorage.getItem('selected_color_marker2_CH2_mode2') != 'off') {
                    marker_2.checked = true;
                    showMarkerSettings(2);
                }
                else {
                    marker_2.checked = false;
                }
                if (localStorage.getItem('selected_color_marker3_CH2_mode2') != 'off') {
                    marker_3.checked = true;
                    showMarkerSettings(3);
                }
                else {
                    marker_3.checked = false;
                }
                if (localStorage.getItem('selected_color_marker4_CH2_mode2') != 'off') {
                    marker_4.checked = true;
                    showMarkerSettings(4);
                }
                else {
                    marker_4.checked = false;
                }
                if (localStorage.getItem('selected_color_marker5_CH2_mode2') != 'off') {
                    marker_5.checked = true;
                    showMarkerSettings(5);
                }
                else {
                    marker_5.checked = false;
                }
            }
            // color marker 1
            if (localStorage.getItem('selected_color_marker1_CH2_mode2') == 'green') {
                var elem = document.getElementById('color_dropdown_btn1');
                elem.style.background = 'green';
                elem.style.color = 'black';
                elem.textContent = 'Green';
            }
            if (localStorage.getItem('selected_color_marker1_CH2_mode2') == 'red') {
                elem = document.getElementById('color_dropdown_btn1');
                elem.style.background = 'red';
                elem.style.color = 'black';
                elem.textContent = 'Red';
            }
            if (localStorage.getItem('selected_color_marker1_CH2_mode2') == 'blue') {
                elem = document.getElementById('color_dropdown_btn1');
                elem.style.background = 'blue';
                elem.style.color = 'white';
                elem.textContent = 'Blue';
            }
            if (localStorage.getItem('selected_color_marker1_CH2_mode2') == 'yellow') {
                elem = document.getElementById('color_dropdown_btn1');
                elem.style.background = 'yellow';
                elem.style.color = 'black';
                elem.textContent = 'Yellow';
            }
            if (localStorage.getItem('selected_color_marker1_CH2_mode2') == 'white') {
                elem = document.getElementById('color_dropdown_btn1');
                elem.style.background = 'white';
                elem.style.color = 'black';
                elem.textContent = 'White';
            }
            if (localStorage.getItem('selected_color_marker1_CH2_mode2') == 'cyan') {
                elem = document.getElementById('color_dropdown_btn1');
                elem.style.background = 'cyan';
                elem.style.color = 'black';
                elem.textContent = 'Cyan';
            }
            if (localStorage.getItem('selected_color_marker1_CH2_mode2') == 'magenta') {
                elem = document.getElementById('color_dropdown_btn1');
                elem.style.background = 'magenta';
                elem.style.color = 'black';
                elem.textContent = 'Magenta';
            }
            // color marker 2
            if (localStorage.getItem('selected_color_marker2_CH2_mode2') == 'green') {
                var elem = document.getElementById('color_dropdown_btn2');
                elem.style.background = 'green';
                elem.style.color = 'black';
                elem.textContent = 'Green';
            }
            if (localStorage.getItem('selected_color_marker2_CH2_mode2') == 'red') {
                elem = document.getElementById('color_dropdown_btn2');
                elem.style.background = 'red';
                elem.style.color = 'black';
                elem.textContent = 'Red';
            }
            if (localStorage.getItem('selected_color_marker2_CH2_mode2') == 'blue') {
                elem = document.getElementById('color_dropdown_btn2');
                elem.style.background = 'blue';
                elem.style.color = 'white';
                elem.textContent = 'Blue';
            }
            if (localStorage.getItem('selected_color_marker2_CH2_mode2') == 'yellow') {
                elem = document.getElementById('color_dropdown_btn2');
                elem.style.background = 'yellow';
                elem.style.color = 'black';
                elem.textContent = 'Yellow';
            }
            if (localStorage.getItem('selected_color_marker2_CH2_mode2') == 'white') {
                elem = document.getElementById('color_dropdown_btn2');
                elem.style.background = 'white';
                elem.style.color = 'black';
                elem.textContent = 'White';
            }
            if (localStorage.getItem('selected_color_marker2_CH2_mode2') == 'cyan') {
                elem = document.getElementById('color_dropdown_btn2');
                elem.style.background = 'cyan';
                elem.style.color = 'black';
                elem.textContent = 'Cyan';
            }
            if (localStorage.getItem('selected_color_marker2_CH2_mode2') == 'magenta') {
                elem = document.getElementById('color_dropdown_btn2');
                elem.style.background = 'magenta';
                elem.style.color = 'black';
                elem.textContent = 'Magenta';
            }
            // color marker 3
            if (localStorage.getItem('selected_color_marker3_CH2_mode2') == 'green') {
                var elem = document.getElementById('color_dropdown_btn3');
                elem.style.background = 'green';
                elem.style.color = 'black';
                elem.textContent = 'Green';
            }
            if (localStorage.getItem('selected_color_marker3_CH2_mode2') == 'red') {
                elem = document.getElementById('color_dropdown_btn3');
                elem.style.background = 'red';
                elem.style.color = 'black';
                elem.textContent = 'Red';
            }
            if (localStorage.getItem('selected_color_marker3_CH2_mode2') == 'blue') {
                elem = document.getElementById('color_dropdown_btn3');
                elem.style.background = 'blue';
                elem.style.color = 'white';
                elem.textContent = 'Blue';
            }
            if (localStorage.getItem('selected_color_marker3_CH2_mode2') == 'yellow') {
                elem = document.getElementById('color_dropdown_btn3');
                elem.style.background = 'yellow';
                elem.style.color = 'black';
                elem.textContent = 'Yellow';
            }
            if (localStorage.getItem('selected_color_marker3_CH2_mode2') == 'white') {
                elem = document.getElementById('color_dropdown_btn3');
                elem.style.background = 'white';
                elem.style.color = 'black';
                elem.textContent = 'White';
            }
            if (localStorage.getItem('selected_color_marker3_CH2_mode2') == 'cyan') {
                elem = document.getElementById('color_dropdown_btn3');
                elem.style.background = 'cyan';
                elem.style.color = 'black';
                elem.textContent = 'Cyan';
            }
            if (localStorage.getItem('selected_color_marker3_CH2_mode2') == 'magenta') {
                elem = document.getElementById('color_dropdown_btn3');
                elem.style.background = 'magenta';
                elem.style.color = 'black';
                elem.textContent = 'Magenta';
            }
            // color marker 4
            if (localStorage.getItem('selected_color_marker4_CH2_mode2') == 'green') {
                var elem = document.getElementById('color_dropdown_btn4');
                elem.style.background = 'green';
                elem.style.color = 'black';
                elem.textContent = 'Green';
            }
            if (localStorage.getItem('selected_color_marker4_CH2_mode2') == 'red') {
                elem = document.getElementById('color_dropdown_btn4');
                elem.style.background = 'red';
                elem.style.color = 'black';
                elem.textContent = 'Red';
            }
            if (localStorage.getItem('selected_color_marker4_CH2_mode2') == 'blue') {
                elem = document.getElementById('color_dropdown_btn4');
                elem.style.background = 'blue';
                elem.style.color = 'white';
                elem.textContent = 'Blue';
            }
            if (localStorage.getItem('selected_color_marker4_CH2_mode2') == 'yellow') {
                elem = document.getElementById('color_dropdown_btn4');
                elem.style.background = 'yellow';
                elem.style.color = 'black';
                elem.textContent = 'Yellow';
            }
            if (localStorage.getItem('selected_color_marker4_CH2_mode2') == 'white') {
                elem = document.getElementById('color_dropdown_btn4');
                elem.style.background = 'white';
                elem.style.color = 'black';
                elem.textContent = 'White';
            }
            if (localStorage.getItem('selected_color_marker4_CH2_mode2') == 'cyan') {
                elem = document.getElementById('color_dropdown_btn4');
                elem.style.background = 'cyan';
                elem.style.color = 'black';
                elem.textContent = 'Cyan';
            }
            if (localStorage.getItem('selected_color_marker4_CH2_mode2') == 'magenta') {
                elem = document.getElementById('color_dropdown_btn4');
                elem.style.background = 'magenta';
                elem.style.color = 'black';
                elem.textContent = 'Magenta';
            }
            // color marker 5
            if (localStorage.getItem('selected_color_marker5_CH2_mode2') == 'green') {
                var elem = document.getElementById('color_dropdown_btn5');
                elem.style.background = 'green';
                elem.style.color = 'black';
                elem.textContent = 'Green';
            }
            if (localStorage.getItem('selected_color_marker5_CH2_mode2') == 'red') {
                elem = document.getElementById('color_dropdown_btn5');
                elem.style.background = 'red';
                elem.style.color = 'black';
                elem.textContent = 'Red';
            }
            if (localStorage.getItem('selected_color_marker5_CH2_mode2') == 'blue') {
                elem = document.getElementById('color_dropdown_btn5');
                elem.style.background = 'blue';
                elem.style.color = 'white';
                elem.textContent = 'Blue';
            }
            if (localStorage.getItem('selected_color_marker5_CH2_mode2') == 'yellow') {
                elem = document.getElementById('color_dropdown_btn5');
                elem.style.background = 'yellow';
                elem.style.color = 'black';
                elem.textContent = 'Yellow';
            }
            if (localStorage.getItem('selected_color_marker5_CH2_mode2') == 'white') {
                elem = document.getElementById('color_dropdown_btn5');
                elem.style.background = 'white';
                elem.style.color = 'black';
                elem.textContent = 'White';
            }
            if (localStorage.getItem('selected_color_marker5_CH2_mode2') == 'cyan') {
                elem = document.getElementById('color_dropdown_btn5');
                elem.style.background = 'cyan';
                elem.style.color = 'black';
                elem.textContent = 'Cyan';
            }
            if (localStorage.getItem('selected_color_marker5_CH2_mode2') == 'magenta') {
                elem = document.getElementById('color_dropdown_btn5');
                elem.style.background = 'magenta';
                elem.style.color = 'black';
                elem.textContent = 'Magenta';
            }
            // marker position
            if (localStorage.getItem('selected_position_marker1_CH2_mode2') != 'none') {
                elem = document.getElementById('marker_1_pos_input');
                elem.value = localStorage.getItem('selected_position_marker1_CH2_mode2');
            }
            if (localStorage.getItem('selected_position_marker2_CH2_mode2') != 'none') {
                elem = document.getElementById('marker_2_pos_input');
                elem.value = localStorage.getItem('selected_position_marker2_CH2_mode2');
            }
            if (localStorage.getItem('selected_position_marker3_CH2_mode2') != 'none') {
                elem = document.getElementById('marker_3_pos_input');
                elem.value = localStorage.getItem('selected_position_marker3_CH2_mode2');
            }
            if (localStorage.getItem('selected_position_marker4_CH2_mode2') != 'none') {
                elem = document.getElementById('marker_4_pos_input');
                elem.value = localStorage.getItem('selected_position_marker4_CH2_mode2');
            }
            if (localStorage.getItem('selected_position_marker5_CH2_mode2') != 'none') {
                elem = document.getElementById('marker_5_pos_input');
                elem.value = localStorage.getItem('selected_position_marker5_CH2_mode2');
            }
            // marker width
            if (localStorage.getItem('selected_width_marker1_CH2_mode2') != 'none') {
                elem = document.getElementById('marker_1_width_input');
                elem.value = localStorage.getItem('selected_width_marker1_CH2_mode2');
            }
            if (localStorage.getItem('selected_position_marker2_CH2_mode2') != 'none') {
                elem = document.getElementById('marker_2_width_input');
                elem.value = localStorage.getItem('selected_width_marker2_CH2_mode2');
            }
            if (localStorage.getItem('selected_position_marker3_CH2_mode2') != 'none') {
                elem = document.getElementById('marker_3_width_input');
                elem.value = localStorage.getItem('selected_width_marker3_CH2_mode2');
            }
            if (localStorage.getItem('selected_position_marker4_CH2_mode2') != 'none') {
                elem = document.getElementById('marker_4_width_input');
                elem.value = localStorage.getItem('selected_width_marker4_CH2_mode2');
            }
            if (localStorage.getItem('selected_position_marker5_CH2_mode2') != 'none') {
                elem = document.getElementById('marker_5_width_input');
                elem.value = localStorage.getItem('selected_width_marker5_CH2_mode2');
            }
        }
    }
}


function clickModeGREEN() {
    if (localStorage.getItem('selected_channel') == '1') {
        if (localStorage.getItem('selected_mode') == '1') {
            console.log('channel 1 mode 1');
            localStorage.setItem('selected_mode1_CH1', 'all green');
            parent.addtoSendQueue('{"memory":"ram","flash#1":{"operation mode#1":"all green"}}');
        }
        else {
            localStorage.setItem('selected_mode2_CH1', 'all green');
            parent.addtoSendQueue('{"memory":"ram","flash#1":{"operation mode#2":"all green"}}');
        }
    }
    if (localStorage.getItem('selected_channel') == '2') {
        if (localStorage.getItem('selected_mode') == '1') {
            localStorage.setItem('selected_mode1_CH2', 'all green');
            parent.addtoSendQueue('{"memory":"ram","flash#2":{"operation mode#1":"all green"}}');
        }
        else {
            localStorage.setItem('selected_mode2_CH2', 'all green');
            parent.addtoSendQueue('{"memory":"ram","flash#2":{"operation mode#2":"all green"}}');
        }
    }
    highlightSaveBtns();
    updateSelection();
}
function clickModeRED() {
    if (localStorage.getItem('selected_channel') == '1') {
        if (localStorage.getItem('selected_mode') == '1') {
            localStorage.setItem('selected_mode1_CH1', 'all red');
            parent.addtoSendQueue('{"memory":"ram","flash#1":{"operation mode#1":"all red"}}');
        }
        else {
            localStorage.setItem('selected_mode2_CH1', 'all red');
            parent.addtoSendQueue('{"memory":"ram","flash#1":{"operation mode#2":"all red"}}');
        }
    }
    if (localStorage.getItem('selected_channel') == '2') {
        if (localStorage.getItem('selected_mode') == '1') {
            localStorage.setItem('selected_mode1_CH2', 'all red');
            parent.addtoSendQueue('{"memory":"ram","flash#2":{"operation mode#1":"all red"}}');
        }
        else {
            localStorage.setItem('selected_mode2_CH2', 'all red');
            parent.addtoSendQueue('{"memory":"ram","flash#2":{"operation mode#2":"all red"}}');
        }
    }
    highlightSaveBtns();
    updateSelection();
}
function clickModeRUNNINGLIGHT() {
    if (localStorage.getItem('selected_channel') == '1') {
        if (localStorage.getItem('selected_mode') == '1') {
            localStorage.setItem('selected_mode1_CH1', 'runninglight');
            parent.addtoSendQueue('{"memory":"ram","flash#1":{"operation mode#1":"runninglight"}}');
        }
        else {
            localStorage.setItem('selected_mode2_CH1', 'runninglight');
            parent.addtoSendQueue('{"memory":"ram","flash#1":{"operation mode#2":"runninglight"}}');
        }
    }
    if (localStorage.getItem('selected_channel') == '2') {
        if (localStorage.getItem('selected_mode') == '1') {
            localStorage.setItem('selected_mode1_CH2', 'runninglight');
            parent.addtoSendQueue('{"memory":"ram","flash#2":{"operation mode#1":"runninglight"}}');
        }
        else {
            localStorage.setItem('selected_mode2_CH2', 'runninglight');
            parent.addtoSendQueue('{"memory":"ram","flash#2":{"operation mode#2":"runninglight"}}');
        }
    }
    highlightSaveBtns();
    updateSelection();
}
function clickSave() {
    if (localStorage.getItem('selected_channel') == '1') { // Channel 1
        if (localStorage.getItem('selected_mode') == '1') { // Mode 1
            if (localStorage.getItem('selected_mode1_CH1') == 'all green') {
                parent.addtoSendQueue('{"memory":"rom","flash#1":{"operation mode#1":"all green"}}');
                btnSAVE.style.visibility = "hidden";
                mode1_state_icon_ch1.src = "../images/greenstripe.png";
            }
            if (localStorage.getItem('selected_mode1_CH1') == 'all red') {
                parent.addtoSendQueue('{"memory":"rom","flash#1":{"operation mode#1":"all red"}}');
                btnSAVE.style.visibility = "hidden";
                mode1_state_icon_ch1.src = "../images/redstripe.png";
            }
            if (localStorage.getItem('selected_mode1_CH1') == 'runninglight') {
                parent.addtoSendQueue('{"memory":"rom","flash#1":{"operation mode#1":"runninglight"}}');
                btnSAVE.style.visibility = "hidden";
                mode1_state_icon_ch1.src = "../images/runninglight_1.png";
            }
            if (localStorage.getItem('selected_mode1_CH1') == 'marker1') {
                parent.addtoSendQueue('{"memory":"rom","flash#1":{"operation mode#1":"marker1"}}');
                btnSAVE.style.visibility = "hidden";
                mode1_state_icon_ch1.src = "../images/M_transparent.png";
                // save ram data of markers to rom
                parent.addtoSendQueue('{"memory":"rom","flash#1":{"marker1":"ram"}}');
            }
        }
        if (localStorage.getItem('selected_mode') == '2') { // Mode 2
            if (localStorage.getItem('selected_mode2_CH1') == 'all green') {
                parent.addtoSendQueue('{"memory":"rom","flash#1":{"operation mode#2":"all green"}}');
                btnSAVE.style.visibility = "hidden";
                mode2_state_icon_ch1.src = "../images/greenstripe.png";
            }
            if (localStorage.getItem('selected_mode2_CH1') == 'all red') {
                parent.addtoSendQueue('{"memory":"rom","flash#1":{"operation mode#2":"all red"}}');
                btnSAVE.style.visibility = "hidden";
                mode2_state_icon_ch1.src = "../images/redstripe.png";
            }
            if (localStorage.getItem('selected_mode2_CH1') == 'runninglight') {
                parent.addtoSendQueue('{"memory":"rom","flash#1":{"operation mode#2":"runninglight"}}');
                btnSAVE.style.visibility = "hidden";
                mode2_state_icon_ch1.src = "../images/runninglight_1.png";
            }
            if (localStorage.getItem('selected_mode2_CH1') == 'marker2') {
                parent.addtoSendQueue('{"memory":"rom","flash#1":{"operation mode#2":"marker2"}}');
                btnSAVE.style.visibility = "hidden";
                mode2_state_icon_ch1.src = "../images/M_transparent.png";
                // save ram data of marker to rom
                parent.addtoSendQueue('{"memory":"rom","flash#1":{"marker2":"ram"}}');
            }
            //TODO: Prüfen ob das die einzige Änderung ist -> Löschen von Save all hervorhebung
            if (sidemenu_save_btn.classList.contains('custom-button-save')) {
                sidemenu_save_btn.classList.remove('custom-button-save');
                sidemenu_save_btn.classList.add('custom-button-default');
            }
        }
    }
    else { // Channel 2
        if (localStorage.getItem('selected_mode') == '1') { // Mode 1
            if (localStorage.getItem('selected_mode1_CH2') == 'all green') {
                parent.addtoSendQueue('{"memory":"rom","flash#2":{"operation mode#1":"all green"}}');
                btnSAVE.style.visibility = "hidden";
                mode1_state_icon_ch2.src = "../images/greenstripe.png";
            }
            if (localStorage.getItem('selected_mode1_CH2') == 'all red') {
                parent.addtoSendQueue('{"memory":"rom","flash#2":{"operation mode#1":"all red"}}');
                btnSAVE.style.visibility = "hidden";
                mode1_state_icon_ch2.src = "../images/redstripe.png";
            }
            if (localStorage.getItem('selected_mode1_CH2') == 'runninglight') {
                parent.addtoSendQueue('{"memory":"rom","flash#2":{"operation mode#1":"runninglight"}}');
                btnSAVE.style.visibility = "hidden";
                mode1_state_icon_ch2.src = "../images/runninglight_1.png";
            }
            if (localStorage.getItem('selected_mode1_CH2') == 'marker1') {
                parent.addtoSendQueue('{"memory":"rom","flash#2":{"operation mode#1":"marker1"}}');
                btnSAVE.style.visibility = "hidden";
                mode1_state_icon_ch2.src = "../images/M_transparent.png";
                // save ram data of marker to rom
                parent.addtoSendQueue('{"memory":"rom","flash#2":{"marker1":"ram"}}');
            }
        }
        if (localStorage.getItem('selected_mode') == '2') { // Mode 2
            if (localStorage.getItem('selected_mode2_CH2') == 'all green') {
                parent.addtoSendQueue('{"memory":"rom","flash#2":{"operation mode#2":"all green"}}');
                btnSAVE.style.visibility = "hidden";
                mode2_state_icon_ch2.src = "../images/greenstripe.png";
            }
            if (localStorage.getItem('selected_mode2_CH2') == 'all red') {
                parent.addtoSendQueue('{"memory":"rom","flash#2":{"operation mode#2":"all red"}}');
                btnSAVE.style.visibility = "hidden";
                mode2_state_icon_ch2.src = "../images/redstripe.png";
            }
            if (localStorage.getItem('selected_mode2_CH2') == 'runninglight') {
                parent.addtoSendQueue('{"memory":"rom","flash#2":{"operation mode#2":"runninglight"}}');
                btnSAVE.style.visibility = "hidden";
                mode2_state_icon_ch2.src = "../images/runninglight_1.png";
            }
            if (localStorage.getItem('selected_mode2_CH2') == 'marker2') {
                parent.addtoSendQueue('{"memory":"rom","flash#2":{"operation mode#2":"marker2"}}');
                btnSAVE.style.visibility = "hidden";
                mode2_state_icon_ch2.src = "../images/M_transparent.png";
                // save ram data of marker to rom
                parent.addtoSendQueue('{"memory":"rom","flash#2":{"marker2":"ram"}}');
            }
        }
        //TODO: Prüfen ob das die einzige Änderung ist -> Löschen von Save all hervorhebung
        if (sidemenu_save_btn_2.classList.contains('custom-button-save')) {
            sidemenu_save_btn_2.classList.remove('custom-button-save');
            sidemenu_save_btn_2.classList.add('custom-button-default');
        }
    }
}

/**
 * Higlights the save buttons in the frame and in the menu sidebar
 */
function highlightSaveBtns() {
    btnSAVE.style.visibility = "visible";
    if (btnSAVE.classList.contains('active')) {
        // do nothing
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


setInterval(toggle_runninglight, 400);
var runninglight_toggle = 0;
var current_img = document.getElementById('img_btn_runninglight');
/**
 * Running Light animation. Switch between two pictures
 */
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
 * Update dropdown menu on selection of color options and send messages to change color in RAM
 */
$("#color_dropdown_menu_1 li").click(function () {
    var selText = $(this).text();
    $(this).parents('.btn-group').find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
    var elem = document.getElementById('color_dropdown_btn1');

    // Set up message: {"speicherbereich":"zielspeicher","produkt":{"parameter":{"subparameter":"wert"}}}
    var speicherbereich = '"memory"';
    var zielspeicher = '"ram"';
    var produkt;
    if (localStorage.getItem('selected_channel') == '1') {
        produkt = '"flash#1"';
    }
    if (localStorage.getItem('selected_channel') == '2') {
        produkt = '"flash#2"';
    }
    var parameter;
    if (localStorage.getItem('selected_mode') == '1') {
        parameter = '"marker1#1"';
    }
    if (localStorage.getItem('selected_mode') == '2') {
        parameter = '"marker2#1"';
    }
    var subparameter = '"color"';
    var wert; //selected in switch case
    var JSONmsg; // combines message elements

    switch (selText) {
        case 'Green':
        case 'Grün':
            elem.style.background = 'green';
            elem.style.color = 'black';
            wert = '"green"';
            JSONmsg = '{' + speicherbereich + ':' + zielspeicher + ',' + produkt + ':{' + parameter + ':{' + subparameter + ':' + wert + '}}}';
            parent.addtoSendQueue(JSONmsg);
            setLocalStorageVariable('1', 'color', 'green');
            highlightSaveBtns();
            break;
        case 'Red':
        case 'Rot':
            elem.style.background = 'red';
            elem.style.color = 'black';
            wert = '"red"';
            JSONmsg = '{' + speicherbereich + ':' + zielspeicher + ',' + produkt + ':{' + parameter + ':{' + subparameter + ':' + wert + '}}}';
            parent.addtoSendQueue(JSONmsg);
            setLocalStorageVariable('1', 'color', 'red');
            highlightSaveBtns();
            break;
        case 'Blue':
        case 'Blau':
            elem.style.background = 'blue';
            elem.style.color = 'white';
            wert = '"blue"';
            JSONmsg = '{' + speicherbereich + ':' + zielspeicher + ',' + produkt + ':{' + parameter + ':{' + subparameter + ':' + wert + '}}}';
            parent.addtoSendQueue(JSONmsg);
            setLocalStorageVariable('1', 'color', 'blue');
            highlightSaveBtns();
            break;
        case 'Yellow':
        case 'Gelb':
            elem.style.background = 'yellow';
            elem.style.color = 'black';
            wert = '"yellow"';
            JSONmsg = '{' + speicherbereich + ':' + zielspeicher + ',' + produkt + ':{' + parameter + ':{' + subparameter + ':' + wert + '}}}';
            parent.addtoSendQueue(JSONmsg);
            setLocalStorageVariable('1', 'color', 'yellow');
            highlightSaveBtns();
            break;
        case 'White':
        case 'Weiß':
            elem.style.background = 'white';
            elem.style.color = 'black';
            wert = '"white"';
            JSONmsg = '{' + speicherbereich + ':' + zielspeicher + ',' + produkt + ':{' + parameter + ':{' + subparameter + ':' + wert + '}}}';
            parent.addtoSendQueue(JSONmsg);
            setLocalStorageVariable('1', 'color', 'white');
            highlightSaveBtns();
            break;
        case 'Cyan':
            elem.style.background = 'cyan';
            elem.style.color = 'black';
            wert = '"cyan"';
            JSONmsg = '{' + speicherbereich + ':' + zielspeicher + ',' + produkt + ':{' + parameter + ':{' + subparameter + ':' + wert + '}}}';
            parent.addtoSendQueue(JSONmsg);
            setLocalStorageVariable('1', 'color', 'cyan');
            highlightSaveBtns();
            break;
        case 'Magenta':
            elem.style.background = 'magenta';
            elem.style.color = 'black';
            wert = '"magenta"';
            JSONmsg = '{' + speicherbereich + ':' + zielspeicher + ',' + produkt + ':{' + parameter + ':{' + subparameter + ':' + wert + '}}}';
            parent.addtoSendQueue(JSONmsg);
            setLocalStorageVariable('1', 'color', 'magenta');
            highlightSaveBtns();
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

    // Set up message: {"speicherbereich":"zielspeicher","produkt":{"parameter":{"subparameter":"wert"}}}
    var speicherbereich = '"memory"';
    var zielspeicher = '"ram"';
    var produkt;
    if (localStorage.getItem('selected_channel') == '1') {
        produkt = '"flash#1"';
    }
    if (localStorage.getItem('selected_channel') == '2') {
        produkt = '"flash#2"';
    }
    var parameter;
    if (localStorage.getItem('selected_mode') == '1') {
        parameter = '"marker1#2"';
    }
    if (localStorage.getItem('selected_mode') == '2') {
        parameter = '"marker2#2"';
    }
    var subparameter = '"color"';
    var wert; //selected in switch case
    var JSONmsg; // combines message elements

    switch (selText) {
        case 'Green':
        case 'Grün':
            elem.style.background = 'green';
            elem.style.color = 'black';
            wert = '"green"';
            JSONmsg = '{' + speicherbereich + ':' + zielspeicher + ',' + produkt + ':{' + parameter + ':{' + subparameter + ':' + wert + '}}}';
            parent.addtoSendQueue(JSONmsg);
            setLocalStorageVariable('2', 'color', 'green');
            highlightSaveBtns();
            break;
        case 'Red':
        case 'Rot':
            elem.style.background = 'red';
            elem.style.color = 'black';
            wert = '"red"';
            JSONmsg = '{' + speicherbereich + ':' + zielspeicher + ',' + produkt + ':{' + parameter + ':{' + subparameter + ':' + wert + '}}}';
            parent.addtoSendQueue(JSONmsg);
            setLocalStorageVariable('2', 'color', 'red');
            highlightSaveBtns();
            break;
        case 'Blue':
        case 'Blau':
            elem.style.background = 'blue';
            elem.style.color = 'white';
            wert = '"blue"';
            JSONmsg = '{' + speicherbereich + ':' + zielspeicher + ',' + produkt + ':{' + parameter + ':{' + subparameter + ':' + wert + '}}}';
            parent.addtoSendQueue(JSONmsg);
            setLocalStorageVariable('2', 'color', 'blue');
            highlightSaveBtns();
            break;
        case 'Yellow':
        case 'Gelb':
            elem.style.background = 'yellow';
            elem.style.color = 'black';
            wert = '"yellow"';
            JSONmsg = '{' + speicherbereich + ':' + zielspeicher + ',' + produkt + ':{' + parameter + ':{' + subparameter + ':' + wert + '}}}';
            parent.addtoSendQueue(JSONmsg);
            setLocalStorageVariable('2', 'color', 'yellow');
            highlightSaveBtns();
            break;
        case 'White':
        case 'Weiß':
            elem.style.background = 'white';
            elem.style.color = 'black';
            wert = '"white"';
            JSONmsg = '{' + speicherbereich + ':' + zielspeicher + ',' + produkt + ':{' + parameter + ':{' + subparameter + ':' + wert + '}}}';
            parent.addtoSendQueue(JSONmsg);
            setLocalStorageVariable('2', 'color', 'white');
            highlightSaveBtns();
            break;
        case 'Cyan':
            elem.style.background = 'cyan';
            elem.style.color = 'black';
            wert = '"cyan"';
            JSONmsg = '{' + speicherbereich + ':' + zielspeicher + ',' + produkt + ':{' + parameter + ':{' + subparameter + ':' + wert + '}}}';
            parent.addtoSendQueue(JSONmsg);
            setLocalStorageVariable('2', 'color', 'cyan');
            highlightSaveBtns();
            break;
        case 'Magenta':
            elem.style.background = 'magenta';
            elem.style.color = 'black';
            wert = '"magenta"';
            JSONmsg = '{' + speicherbereich + ':' + zielspeicher + ',' + produkt + ':{' + parameter + ':{' + subparameter + ':' + wert + '}}}';
            parent.addtoSendQueue(JSONmsg);
            setLocalStorageVariable('2', 'color', 'magenta');
            highlightSaveBtns();
            break;
        default:
            console.log('color not known');
    }
    //optional store val in hidden input
    $('#selVal').val(selText);
});

$("#color_dropdown_menu_3 li").click(function () {
    var selText = $(this).text();
    $(this).parents('.btn-group').find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
    var elem = document.getElementById('color_dropdown_btn3');

    // Set up message: {"speicherbereich":"zielspeicher","produkt":{"parameter":{"subparameter":"wert"}}}
    var speicherbereich = '"memory"';
    var zielspeicher = '"ram"';
    var produkt;
    if (localStorage.getItem('selected_channel') == '1') {
        produkt = '"flash#1"';
    }
    if (localStorage.getItem('selected_channel') == '2') {
        produkt = '"flash#2"';
    }
    var parameter;
    if (localStorage.getItem('selected_mode') == '1') {
        parameter = '"marker1#3"';
    }
    if (localStorage.getItem('selected_mode') == '2') {
        parameter = '"marker2#3"';
    }
    var subparameter = '"color"';
    var wert; //selected in switch case
    var JSONmsg; // combines message elements

    switch (selText) {
        case 'Green':
        case 'Grün':
            elem.style.background = 'green';
            elem.style.color = 'black';
            wert = '"green"';
            JSONmsg = '{' + speicherbereich + ':' + zielspeicher + ',' + produkt + ':{' + parameter + ':{' + subparameter + ':' + wert + '}}}';
            parent.addtoSendQueue(JSONmsg);
            setLocalStorageVariable('3', 'color', 'green');
            highlightSaveBtns();
            break;
        case 'Red':
        case 'Rot':
            elem.style.background = 'red';
            elem.style.color = 'black';
            wert = '"red"';
            JSONmsg = '{' + speicherbereich + ':' + zielspeicher + ',' + produkt + ':{' + parameter + ':{' + subparameter + ':' + wert + '}}}';
            parent.addtoSendQueue(JSONmsg);
            setLocalStorageVariable('3', 'color', 'red');
            highlightSaveBtns();
            break;
        case 'Blue':
        case 'Blau':
            elem.style.background = 'blue';
            elem.style.color = 'white';
            wert = '"blue"';
            JSONmsg = '{' + speicherbereich + ':' + zielspeicher + ',' + produkt + ':{' + parameter + ':{' + subparameter + ':' + wert + '}}}';
            parent.addtoSendQueue(JSONmsg);
            setLocalStorageVariable('3', 'color', 'blue');
            highlightSaveBtns();
            break;
        case 'Yellow':
        case 'Gelb':
            elem.style.background = 'yellow';
            elem.style.color = 'black';
            wert = '"yellow"';
            JSONmsg = '{' + speicherbereich + ':' + zielspeicher + ',' + produkt + ':{' + parameter + ':{' + subparameter + ':' + wert + '}}}';
            parent.addtoSendQueue(JSONmsg);
            setLocalStorageVariable('3', 'color', 'yellow');
            highlightSaveBtns();
            break;
        case 'White':
        case 'Weiß':
            elem.style.background = 'white';
            elem.style.color = 'black';
            wert = '"white"';
            JSONmsg = '{' + speicherbereich + ':' + zielspeicher + ',' + produkt + ':{' + parameter + ':{' + subparameter + ':' + wert + '}}}';
            parent.addtoSendQueue(JSONmsg);
            setLocalStorageVariable('3', 'color', 'white');
            highlightSaveBtns();
            break;
        case 'Cyan':
            elem.style.background = 'cyan';
            elem.style.color = 'black';
            wert = '"cyan"';
            JSONmsg = '{' + speicherbereich + ':' + zielspeicher + ',' + produkt + ':{' + parameter + ':{' + subparameter + ':' + wert + '}}}';
            parent.addtoSendQueue(JSONmsg);
            setLocalStorageVariable('3', 'color', 'cyan');
            highlightSaveBtns();
            break;
        case 'Magenta':
            elem.style.background = 'magenta';
            elem.style.color = 'black';
            wert = '"magenta"';
            JSONmsg = '{' + speicherbereich + ':' + zielspeicher + ',' + produkt + ':{' + parameter + ':{' + subparameter + ':' + wert + '}}}';
            parent.addtoSendQueue(JSONmsg);
            setLocalStorageVariable('3', 'color', 'magenta');
            highlightSaveBtns();
            break;
        default:
            console.log('color not known');
    }
    //optional store val in hidden input
    $('#selVal').val(selText);
});

$("#color_dropdown_menu_4 li").click(function () {
    var selText = $(this).text();
    $(this).parents('.btn-group').find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
    var elem = document.getElementById('color_dropdown_btn4');

    // Set up message: {"speicherbereich":"zielspeicher","produkt":{"parameter":{"subparameter":"wert"}}}
    var speicherbereich = '"memory"';
    var zielspeicher = '"ram"';
    var produkt;
    if (localStorage.getItem('selected_channel') == '1') {
        produkt = '"flash#1"';
    }
    if (localStorage.getItem('selected_channel') == '2') {
        produkt = '"flash#2"';
    }
    var parameter;
    if (localStorage.getItem('selected_mode') == '1') {
        parameter = '"marker1#4"';
    }
    if (localStorage.getItem('selected_mode') == '2') {
        parameter = '"marker2#4"';
    }
    var subparameter = '"color"';
    var wert; //selected in switch case
    var JSONmsg; // combines message elements

    switch (selText) {
        case 'Green':
        case 'Grün':
            elem.style.background = 'green';
            elem.style.color = 'black';
            wert = '"green"';
            JSONmsg = '{' + speicherbereich + ':' + zielspeicher + ',' + produkt + ':{' + parameter + ':{' + subparameter + ':' + wert + '}}}';
            parent.addtoSendQueue(JSONmsg);
            setLocalStorageVariable('4', 'color', 'green');
            highlightSaveBtns();
            break;
        case 'Red':
        case 'Rot':
            elem.style.background = 'red';
            elem.style.color = 'black';
            wert = '"red"';
            JSONmsg = '{' + speicherbereich + ':' + zielspeicher + ',' + produkt + ':{' + parameter + ':{' + subparameter + ':' + wert + '}}}';
            parent.addtoSendQueue(JSONmsg);
            setLocalStorageVariable('4', 'color', 'red');
            highlightSaveBtns();
            break;
        case 'Blue':
        case 'Blau':
            elem.style.background = 'blue';
            elem.style.color = 'white';
            wert = '"blue"';
            JSONmsg = '{' + speicherbereich + ':' + zielspeicher + ',' + produkt + ':{' + parameter + ':{' + subparameter + ':' + wert + '}}}';
            parent.addtoSendQueue(JSONmsg);
            setLocalStorageVariable('4', 'color', 'blue');
            highlightSaveBtns();
            break;
        case 'Yellow':
        case 'Gelb':
            elem.style.background = 'yellow';
            elem.style.color = 'black';
            wert = '"yellow"';
            JSONmsg = '{' + speicherbereich + ':' + zielspeicher + ',' + produkt + ':{' + parameter + ':{' + subparameter + ':' + wert + '}}}';
            parent.addtoSendQueue(JSONmsg);
            setLocalStorageVariable('4', 'color', 'yellow');
            highlightSaveBtns();
            break;
        case 'White':
        case 'Weiß':
            elem.style.background = 'white';
            elem.style.color = 'black';
            wert = '"white"';
            JSONmsg = '{' + speicherbereich + ':' + zielspeicher + ',' + produkt + ':{' + parameter + ':{' + subparameter + ':' + wert + '}}}';
            parent.addtoSendQueue(JSONmsg);
            setLocalStorageVariable('4', 'color', 'white');
            highlightSaveBtns();
            break;
        case 'Cyan':
            elem.style.background = 'cyan';
            elem.style.color = 'black';
            wert = '"cyan"';
            JSONmsg = '{' + speicherbereich + ':' + zielspeicher + ',' + produkt + ':{' + parameter + ':{' + subparameter + ':' + wert + '}}}';
            parent.addtoSendQueue(JSONmsg);
            setLocalStorageVariable('4', 'color', 'cyan');
            highlightSaveBtns();
            break;
        case 'Magenta':
            elem.style.background = 'magenta';
            elem.style.color = 'black';
            wert = '"magenta"';
            JSONmsg = '{' + speicherbereich + ':' + zielspeicher + ',' + produkt + ':{' + parameter + ':{' + subparameter + ':' + wert + '}}}';
            parent.addtoSendQueue(JSONmsg);
            setLocalStorageVariable('4', 'color', 'magenta');
            highlightSaveBtns();
            break;
        default:
            console.log('color not known');
    }
    //optional store val in hidden input
    $('#selVal').val(selText);
});

$("#color_dropdown_menu_5 li").click(function () {
    var selText = $(this).text();
    $(this).parents('.btn-group').find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
    var elem = document.getElementById('color_dropdown_btn5');

    // Set up message: {"speicherbereich":"zielspeicher","produkt":{"parameter":{"subparameter":"wert"}}}
    var speicherbereich = '"memory"';
    var zielspeicher = '"ram"';
    var produkt;
    if (localStorage.getItem('selected_channel') == '1') {
        produkt = '"flash#1"';
    }
    if (localStorage.getItem('selected_channel') == '2') {
        produkt = '"flash#2"';
    }
    var parameter;
    if (localStorage.getItem('selected_mode') == '1') {
        parameter = '"marker1#5"';
    }
    if (localStorage.getItem('selected_mode') == '2') {
        parameter = '"marker2#5"';
    }
    var subparameter = '"color"';
    var wert; //selected in switch case
    var JSONmsg; // combines message elements

    switch (selText) {
        case 'Green':
        case 'Grün':
            elem.style.background = 'green';
            elem.style.color = 'black';
            wert = '"green"';
            JSONmsg = '{' + speicherbereich + ':' + zielspeicher + ',' + produkt + ':{' + parameter + ':{' + subparameter + ':' + wert + '}}}';
            parent.addtoSendQueue(JSONmsg);
            setLocalStorageVariable('5', 'color', 'green');
            highlightSaveBtns();
            break;
        case 'Red':
        case 'Rot':
            elem.style.background = 'red';
            elem.style.color = 'black';
            wert = '"red"';
            JSONmsg = '{' + speicherbereich + ':' + zielspeicher + ',' + produkt + ':{' + parameter + ':{' + subparameter + ':' + wert + '}}}';
            parent.addtoSendQueue(JSONmsg);
            setLocalStorageVariable('5', 'color', 'red');
            highlightSaveBtns();
            break;
        case 'Blue':
        case 'Blau':
            elem.style.background = 'blue';
            elem.style.color = 'white';
            wert = '"blue"';
            JSONmsg = '{' + speicherbereich + ':' + zielspeicher + ',' + produkt + ':{' + parameter + ':{' + subparameter + ':' + wert + '}}}';
            parent.addtoSendQueue(JSONmsg);
            setLocalStorageVariable('5', 'color', 'blue');
            highlightSaveBtns();
            break;
        case 'Yellow':
        case 'Gelb':
            elem.style.background = 'yellow';
            elem.style.color = 'black';
            wert = '"yellow"';
            JSONmsg = '{' + speicherbereich + ':' + zielspeicher + ',' + produkt + ':{' + parameter + ':{' + subparameter + ':' + wert + '}}}';
            parent.addtoSendQueue(JSONmsg);
            setLocalStorageVariable('5', 'color', 'yellow');
            highlightSaveBtns();
            break;
        case 'White':
        case 'Weiß':
            elem.style.background = 'white';
            elem.style.color = 'black';
            wert = '"white"';
            JSONmsg = '{' + speicherbereich + ':' + zielspeicher + ',' + produkt + ':{' + parameter + ':{' + subparameter + ':' + wert + '}}}';
            parent.addtoSendQueue(JSONmsg);
            setLocalStorageVariable('5', 'color', 'white');
            highlightSaveBtns();
            break;
        case 'Cyan':
            elem.style.background = 'cyan';
            elem.style.color = 'black';
            wert = '"cyan"';
            JSONmsg = '{' + speicherbereich + ':' + zielspeicher + ',' + produkt + ':{' + parameter + ':{' + subparameter + ':' + wert + '}}}';
            parent.addtoSendQueue(JSONmsg);
            setLocalStorageVariable('5', 'color', 'cyan');
            highlightSaveBtns();
            break;
        case 'Magenta':
            elem.style.background = 'magenta';
            elem.style.color = 'black';
            wert = '"magenta"';
            JSONmsg = '{' + speicherbereich + ':' + zielspeicher + ',' + produkt + ':{' + parameter + ':{' + subparameter + ':' + wert + '}}}';
            parent.addtoSendQueue(JSONmsg);
            setLocalStorageVariable('5', 'color', 'magenta');
            highlightSaveBtns();
            break;
        default:
            console.log('color not known');
    }
    //optional store val in hidden input
    $('#selVal').val(selText);
});

/**
 * Hide/Show Marker Menu elements on click
 */
$('#Mode').change(function () {


    if (this.checked) {
        col_green.style.visibility = 'visible';
        col_red.style.visibility = 'visible';
        col_runninglight.style.visibility = 'visible';
        // set all markers to off
        deleteAllMarkerColors();
        if (localStorage.getItem('selected_channel') == '1') {
            if (localStorage.getItem('selected_mode') == '1') {
                localStorage.setItem('selected_color_marker1_CH1', 'off');
                localStorage.setItem('selected_color_marker2_CH1', 'off');
                localStorage.setItem('selected_color_marker3_CH1', 'off');
                localStorage.setItem('selected_color_marker4_CH1', 'off');
                localStorage.setItem('selected_color_marker5_CH1', 'off');
                if (localStorage.getItem('selected_mode1_CH1') == 'marker1') {
                    localStorage.setItem('selected_mode1_CH1', 'none');
                }
            }
            if (localStorage.getItem('selected_mode') == '2') {
                localStorage.setItem('selected_color_marker1_CH1_mode2', 'off');
                localStorage.setItem('selected_color_marker2_CH1_mode2', 'off');
                localStorage.setItem('selected_color_marker3_CH1_mode2', 'off');
                localStorage.setItem('selected_color_marker4_CH1_mode2', 'off');
                localStorage.setItem('selected_color_marker5_CH1_mode2', 'off');
                if (localStorage.getItem('selected_mode2_CH1') == 'marker2') {
                    localStorage.setItem('selected_mode2_CH1', 'none');
                }
            }
        }
        if (localStorage.getItem('selected_channel') == '2') {
            if (localStorage.getItem('selected_mode') == '1') {
                localStorage.setItem('selected_color_marker1_CH2', 'off');
                localStorage.setItem('selected_color_marker2_CH2', 'off');
                localStorage.setItem('selected_color_marker3_CH2', 'off');
                localStorage.setItem('selected_color_marker4_CH2', 'off');
                localStorage.setItem('selected_color_marker5_CH2', 'off');
                if (localStorage.getItem('selected_mode1_CH2') == 'marker1') {
                    localStorage.setItem('selected_mode1_CH2', 'none');
                }
            }
            if (localStorage.getItem('selected_mode') == '2') {
                localStorage.setItem('selected_color_marker1_CH2_mode2', 'off');
                localStorage.setItem('selected_color_marker2_CH2_mode2', 'off');
                localStorage.setItem('selected_color_marker3_CH2_mode2', 'off');
                localStorage.setItem('selected_color_marker4_CH2_mode2', 'off');
                localStorage.setItem('selected_color_marker5_CH2_mode2', 'off');
                if (localStorage.getItem('selected_mode2_CH2') == 'marker2') {
                    localStorage.setItem('selected_mode2_CH2', 'none');
                }
            }
        }
        // hide marker elements
        // marker 1
        marker_1.checked = false;
        markerrow1.style.visibility = 'hidden';
        marker_1_color.style.visibility = 'hidden';
        marker_1_position_left.style.visibility = 'hidden';
        marker_1_position.style.visibility = 'hidden';
        marker_1_position_right.style.visibility = 'hidden';
        marker_1_width_left.style.visibility = 'hidden';
        marker_1_width.style.visibility = 'hidden';
        marker_1_width_right.style.visibility = 'hidden';
        // marker 2
        marker_2.checked = false;
        markerrow2.style.visibility = 'hidden';
        marker_2_color.style.visibility = 'hidden';
        marker_2_position_left.style.visibility = 'hidden';
        marker_2_position.style.visibility = 'hidden';
        marker_2_position_right.style.visibility = 'hidden';
        marker_2_width_left.style.visibility = 'hidden';
        marker_2_width.style.visibility = 'hidden';
        marker_2_width_right.style.visibility = 'hidden';
        // marker 3
        marker_3.checked = false;
        markerrow3.style.visibility = 'hidden';
        marker_3_color.style.visibility = 'hidden';
        marker_3_position_left.style.visibility = 'hidden';
        marker_3_position.style.visibility = 'hidden';
        marker_3_position_right.style.visibility = 'hidden';
        marker_3_width_left.style.visibility = 'hidden';
        marker_3_width.style.visibility = 'hidden';
        marker_3_width_right.style.visibility = 'hidden';
        // marker 4
        marker_4.checked = false;
        markerrow4.style.visibility = 'hidden';
        marker_4_color.style.visibility = 'hidden';
        marker_4_position_left.style.visibility = 'hidden';
        marker_4_position.style.visibility = 'hidden';
        marker_4_position_right.style.visibility = 'hidden';
        marker_4_width_left.style.visibility = 'hidden';
        marker_4_width.style.visibility = 'hidden';
        marker_4_width_right.style.visibility = 'hidden';
        // marker 5
        marker_5.checked = false;
        markerrow5.style.visibility = 'hidden';
        marker_5_color.style.visibility = 'hidden';
        marker_5_position_left.style.visibility = 'hidden';
        marker_5_position.style.visibility = 'hidden';
        marker_5_position_right.style.visibility = 'hidden';
        marker_5_width_left.style.visibility = 'hidden';
        marker_5_width.style.visibility = 'hidden';
        marker_5_width_right.style.visibility = 'hidden';
        updateSelection();
    }
    else {
        col_green.style.visibility = 'hidden';
        col_red.style.visibility = 'hidden';
        col_runninglight.style.visibility = 'hidden';
        markerrow1.style.visibility = 'visible';
        markerrow2.style.visibility = 'visible';
        markerrow3.style.visibility = 'visible';
        markerrow4.style.visibility = 'visible';
        markerrow5.style.visibility = 'visible';
    }
})

$('#Marker').change(function () {
    if (localStorage.getItem('selected_channel') == '1') {
        if (localStorage.getItem('selected_mode') == '1') {
            localStorage.setItem('selected_mode1_CH1', 'marker1');
            parent.addtoSendQueue('{"memory":"ram","flash#1":{"operation mode#1":"marker1"}}');
        }
        else {
            localStorage.setItem('selected_mode2_CH1', 'marker2');
            parent.addtoSendQueue('{"memory":"ram","flash#1":{"operation mode#2":"marker2"}}');
        }
    }
    if (localStorage.getItem('selected_channel') == '2') {
        if (localStorage.getItem('selected_mode') == '1') {
            localStorage.setItem('selected_mode1_CH2', 'marker1');
            parent.addtoSendQueue('{"memory":"ram","flash#2":{"operation mode#1":"marker1"}}');
        }
        else {
            localStorage.setItem('selected_mode2_CH2', 'marker2');
            parent.addtoSendQueue('{"memory":"ram","flash#2":{"operation mode#2":"marker2"}}');
        }
    }


    var col_green = document.getElementById('btn_green_col');
    var col_red = document.getElementById('btn_red_col');
    var col_runninglight = document.getElementById('btn_runninglight_col');
    if (this.checked) {
        markerrow1.style.visibility = 'visible';
        /*
        markerrow2.style.visibility = 'visible';
        markerrow3.style.visibility = 'visible';
        markerrow4.style.visibility = 'visible';
        markerrow5.style.visibility = 'visible';
        */
        col_green.style.visibility = 'hidden';
        col_red.style.visibility = 'hidden';
        col_runninglight.style.visibility = 'hidden';
    }
    else {
        markerrow1.style.visibility = 'hidden';
        markerrow2.style.visibility = 'hidden';
        markerrow3.style.visibility = 'hidden';
        markerrow4.style.visibility = 'hidden';
        markerrow5.style.visibility = 'hidden';
        col_green.style.visibility = 'visible';
        col_red.style.visibility = 'visible';
        col_runninglight.style.visibility = 'visible';
    }
    updateSelection(); // to get marker settings loaded
})

// visibility changes of markers on change, reset marker color selections
$('#Marker_1').change(function () {
    if (this.checked) {
        marker_1_color.style.visibility = 'visible';
        marker_1_position_left.style.visibility = 'visible';
        marker_1_position.style.visibility = 'visible';
        marker_1_position_right.style.visibility = 'visible';
        marker_1_width_left.style.visibility = 'visible';
        marker_1_width.style.visibility = 'visible';
        marker_1_width_right.style.visibility = 'visible';

        markerrow2.style.visibility = 'visible';
    }
    else {
        //reset marker color selection
        $('#color_dropdown_menu_1 li').parents('.btn-group').find('.dropdown-toggle').html('Color' + ' <span class="caret"></span>');
        var elem = document.getElementById('color_dropdown_btn1');
        elem.style.background = '#0275d8'; // btn primary blue
        elem.style.color = 'white';
        // reset local storage variable
        resetMarkerColor('1');
        // Send marker color = 'off' message
        var JSONmsg = createJSONmsg('ram', '1', 'color', 'off');
        parent.addtoSendQueue(JSONmsg);
        // hide menu elements
        marker_1_color.style.visibility = 'hidden';
        marker_1_position_left.style.visibility = 'hidden';
        marker_1_position.style.visibility = 'hidden';
        marker_1_position_right.style.visibility = 'hidden';
        marker_1_width_left.style.visibility = 'hidden';
        marker_1_width.style.visibility = 'hidden';
        marker_1_width_right.style.visibility = 'hidden';

        markerrow2.style.visibility = 'hidden';
        document.getElementById('Marker_2').checked = false;
        //reset marker color selection
        $('#color_dropdown_menu_2 li').parents('.btn-group').find('.dropdown-toggle').html('Color' + ' <span class="caret"></span>');
        var elem = document.getElementById('color_dropdown_btn2');
        elem.style.background = '#0275d8'; // btn primary blue
        elem.style.color = 'white';
        // reset local storage variable
        resetMarkerColor('2');
        // Send marker color = 'off' message
        var JSONmsg = createJSONmsg('ram', '2', 'color', 'off');
        parent.addtoSendQueue(JSONmsg);
        // hide menu elements
        marker_2_color.style.visibility = 'hidden';
        marker_2_position_left.style.visibility = 'hidden';
        marker_2_position.style.visibility = 'hidden';
        marker_2_position_right.style.visibility = 'hidden';
        marker_2_width_left.style.visibility = 'hidden';
        marker_2_width.style.visibility = 'hidden';
        marker_2_width_right.style.visibility = 'hidden';

        markerrow3.style.visibility = 'hidden';
        document.getElementById('Marker_3').checked = false;
        //reset marker color selection
        $('#color_dropdown_menu_3 li').parents('.btn-group').find('.dropdown-toggle').html('Color' + ' <span class="caret"></span>');
        var elem = document.getElementById('color_dropdown_btn3');
        elem.style.background = '#0275d8'; // btn primary blue
        elem.style.color = 'white';
        // reset local storage variable
        resetMarkerColor('3');
        // Send marker color = 'off' message
        var JSONmsg = createJSONmsg('ram', '3', 'color', 'off');
        parent.addtoSendQueue(JSONmsg);
        // hide menu elements
        marker_3_color.style.visibility = 'hidden';
        marker_3_position_left.style.visibility = 'hidden';
        marker_3_position.style.visibility = 'hidden';
        marker_3_position_right.style.visibility = 'hidden';
        marker_3_width_left.style.visibility = 'hidden';
        marker_3_width.style.visibility = 'hidden';
        marker_3_width_right.style.visibility = 'hidden';

        markerrow4.style.visibility = 'hidden';
        document.getElementById('Marker_4').checked = false;
        //reset marker color selection
        $('#color_dropdown_menu_4 li').parents('.btn-group').find('.dropdown-toggle').html('Color' + ' <span class="caret"></span>');
        var elem = document.getElementById('color_dropdown_btn4');
        elem.style.background = '#0275d8'; // btn primary blue
        elem.style.color = 'white';
        // reset local storage variable
        resetMarkerColor('4');
        // Send marker color = 'off' message
        var JSONmsg = createJSONmsg('ram', '4', 'color', 'off');
        parent.addtoSendQueue(JSONmsg);
        // hide menu elements
        marker_4_color.style.visibility = 'hidden';
        marker_4_position_left.style.visibility = 'hidden';
        marker_4_position.style.visibility = 'hidden';
        marker_4_position_right.style.visibility = 'hidden';
        marker_4_width_left.style.visibility = 'hidden';
        marker_4_width.style.visibility = 'hidden';
        marker_4_width_right.style.visibility = 'hidden';

        markerrow5.style.visibility = 'hidden';
        document.getElementById('Marker_5').checked = false;
        //reset marker color selection
        $('#color_dropdown_menu_5 li').parents('.btn-group').find('.dropdown-toggle').html('Color' + ' <span class="caret"></span>');
        var elem = document.getElementById('color_dropdown_btn5');
        elem.style.background = '#0275d8'; // btn primary blue
        elem.style.color = 'white';
        // reset local storage variable
        resetMarkerColor('5');
        // Send marker color = 'off' message
        var JSONmsg = createJSONmsg('ram', '5', 'color', 'off');
        parent.addtoSendQueue(JSONmsg);
        // hide menu elements
        marker_5_color.style.visibility = 'hidden';
        marker_5_position_left.style.visibility = 'hidden';
        marker_5_position.style.visibility = 'hidden';
        marker_5_position_right.style.visibility = 'hidden';
        marker_5_width_left.style.visibility = 'hidden';
        marker_5_width.style.visibility = 'hidden';
        marker_5_width_right.style.visibility = 'hidden';

        // show save button
        highlightSaveBtns();
        parent.updateLanguage();
    }
})
$('#Marker_2').change(function () {
    if (this.checked) {
        marker_2_color.style.visibility = 'visible';
        marker_2_position_left.style.visibility = 'visible';
        marker_2_position.style.visibility = 'visible';
        marker_2_position_right.style.visibility = 'visible';
        marker_2_width_left.style.visibility = 'visible';
        marker_2_width.style.visibility = 'visible';
        marker_2_width_right.style.visibility = 'visible';

        markerrow3.style.visibility = 'visible';
    }
    else {
        //reset marker color selection
        $('#color_dropdown_menu_2 li').parents('.btn-group').find('.dropdown-toggle').html('Color' + ' <span class="caret"></span>');
        var elem = document.getElementById('color_dropdown_btn2');
        elem.style.background = '#0275d8'; // btn primary blue
        elem.style.color = 'white';
        // reset local storage variable
        resetMarkerColor('2');
        // Send marker color = 'off' message
        var JSONmsg = createJSONmsg('ram', '2', 'color', 'off');
        parent.addtoSendQueue(JSONmsg);
        // hide menu elements
        marker_2_color.style.visibility = 'hidden';
        marker_2_position_left.style.visibility = 'hidden';
        marker_2_position.style.visibility = 'hidden';
        marker_2_position_right.style.visibility = 'hidden';
        marker_2_width_left.style.visibility = 'hidden';
        marker_2_width.style.visibility = 'hidden';
        marker_2_width_right.style.visibility = 'hidden';

        markerrow3.style.visibility = 'hidden';
        document.getElementById('Marker_3').checked = false;
        //reset marker color selection
        $('#color_dropdown_menu_3 li').parents('.btn-group').find('.dropdown-toggle').html('Color' + ' <span class="caret"></span>');
        var elem = document.getElementById('color_dropdown_btn3');
        elem.style.background = '#0275d8'; // btn primary blue
        elem.style.color = 'white';
        // reset local storage variable
        resetMarkerColor('3');
        // Send marker color = 'off' message
        var JSONmsg = createJSONmsg('ram', '3', 'color', 'off');
        parent.addtoSendQueue(JSONmsg);
        // hide menu elements
        marker_3_color.style.visibility = 'hidden';
        marker_3_position_left.style.visibility = 'hidden';
        marker_3_position.style.visibility = 'hidden';
        marker_3_position_right.style.visibility = 'hidden';
        marker_3_width_left.style.visibility = 'hidden';
        marker_3_width.style.visibility = 'hidden';
        marker_3_width_right.style.visibility = 'hidden';

        markerrow4.style.visibility = 'hidden';
        document.getElementById('Marker_4').checked = false;
        //reset marker color selection
        $('#color_dropdown_menu_4 li').parents('.btn-group').find('.dropdown-toggle').html('Color' + ' <span class="caret"></span>');
        var elem = document.getElementById('color_dropdown_btn4');
        elem.style.background = '#0275d8'; // btn primary blue
        elem.style.color = 'white';
        // reset local storage variable
        resetMarkerColor('4');
        // Send marker color = 'off' message
        var JSONmsg = createJSONmsg('ram', '4', 'color', 'off');
        parent.addtoSendQueue(JSONmsg);
        // hide menu elements
        marker_4_color.style.visibility = 'hidden';
        marker_4_position_left.style.visibility = 'hidden';
        marker_4_position.style.visibility = 'hidden';
        marker_4_position_right.style.visibility = 'hidden';
        marker_4_width_left.style.visibility = 'hidden';
        marker_4_width.style.visibility = 'hidden';
        marker_4_width_right.style.visibility = 'hidden';

        markerrow5.style.visibility = 'hidden';
        document.getElementById('Marker_5').checked = false;
        //reset marker color selection
        $('#color_dropdown_menu_5 li').parents('.btn-group').find('.dropdown-toggle').html('Color' + ' <span class="caret"></span>');
        var elem = document.getElementById('color_dropdown_btn5');
        elem.style.background = '#0275d8'; // btn primary blue
        elem.style.color = 'white';
        // reset local storage variable
        resetMarkerColor('5');
        // Send marker color = 'off' message
        var JSONmsg = createJSONmsg('ram', '5', 'color', 'off');
        parent.addtoSendQueue(JSONmsg);
        // hide menu elements
        marker_5_color.style.visibility = 'hidden';
        marker_5_position_left.style.visibility = 'hidden';
        marker_5_position.style.visibility = 'hidden';
        marker_5_position_right.style.visibility = 'hidden';
        marker_5_width_left.style.visibility = 'hidden';
        marker_5_width.style.visibility = 'hidden';
        marker_5_width_right.style.visibility = 'hidden';

        // show save button
        highlightSaveBtns();
        parent.updateLanguage();
    }
})
$('#Marker_3').change(function () {
    if (this.checked) {
        marker_3_color.style.visibility = 'visible';
        marker_3_position_left.style.visibility = 'visible';
        marker_3_position.style.visibility = 'visible';
        marker_3_position_right.style.visibility = 'visible';
        marker_3_width_left.style.visibility = 'visible';
        marker_3_width.style.visibility = 'visible';
        marker_3_width_right.style.visibility = 'visible';

        markerrow4.style.visibility = 'visible';
    }
    else {
        //reset marker color selection
        $('#color_dropdown_menu_3 li').parents('.btn-group').find('.dropdown-toggle').html('Color' + ' <span class="caret"></span>');
        var elem = document.getElementById('color_dropdown_btn3');
        elem.style.background = '#0275d8'; // btn primary blue
        elem.style.color = 'white';
        // reset local storage variable
        resetMarkerColor('3');
        // Send marker color = 'off' message
        var JSONmsg = createJSONmsg('ram', '3', 'color', 'off');
        parent.addtoSendQueue(JSONmsg);
        // hide menu elements
        marker_3_color.style.visibility = 'hidden';
        marker_3_position_left.style.visibility = 'hidden';
        marker_3_position.style.visibility = 'hidden';
        marker_3_position_right.style.visibility = 'hidden';
        marker_3_width_left.style.visibility = 'hidden';
        marker_3_width.style.visibility = 'hidden';
        marker_3_width_right.style.visibility = 'hidden';

        markerrow4.style.visibility = 'hidden';
        document.getElementById('Marker_4').checked = false;
        //reset marker color selection
        $('#color_dropdown_menu_4 li').parents('.btn-group').find('.dropdown-toggle').html('Color' + ' <span class="caret"></span>');
        var elem = document.getElementById('color_dropdown_btn4');
        elem.style.background = '#0275d8'; // btn primary blue
        elem.style.color = 'white';
        // reset local storage variable
        resetMarkerColor('4');
        // Send marker color = 'off' message
        var JSONmsg = createJSONmsg('ram', '4', 'color', 'off');
        parent.addtoSendQueue(JSONmsg);
        // hide menu elements
        marker_4_color.style.visibility = 'hidden';
        marker_4_position_left.style.visibility = 'hidden';
        marker_4_position.style.visibility = 'hidden';
        marker_4_position_right.style.visibility = 'hidden';
        marker_4_width_left.style.visibility = 'hidden';
        marker_4_width.style.visibility = 'hidden';
        marker_4_width_right.style.visibility = 'hidden';

        markerrow5.style.visibility = 'hidden';
        document.getElementById('Marker_5').checked = false;
        //reset marker color selection
        $('#color_dropdown_menu_5 li').parents('.btn-group').find('.dropdown-toggle').html('Color' + ' <span class="caret"></span>');
        var elem = document.getElementById('color_dropdown_btn5');
        elem.style.background = '#0275d8'; // btn primary blue
        elem.style.color = 'white';
        // reset local storage variable
        resetMarkerColor('5');
        // Send marker color = 'off' message
        var JSONmsg = createJSONmsg('ram', '5', 'color', 'off');
        parent.addtoSendQueue(JSONmsg);
        // hide menu elements
        marker_5_color.style.visibility = 'hidden';
        marker_5_position_left.style.visibility = 'hidden';
        marker_5_position.style.visibility = 'hidden';
        marker_5_position_right.style.visibility = 'hidden';
        marker_5_width_left.style.visibility = 'hidden';
        marker_5_width.style.visibility = 'hidden';
        marker_5_width_right.style.visibility = 'hidden';

        // show save button
        highlightSaveBtns();
        parent.updateLanguage();
    }
})
$('#Marker_4').change(function () {
    if (this.checked) {
        marker_4_color.style.visibility = 'visible';
        marker_4_position_left.style.visibility = 'visible';
        marker_4_position.style.visibility = 'visible';
        marker_4_position_right.style.visibility = 'visible';
        marker_4_width_left.style.visibility = 'visible';
        marker_4_width.style.visibility = 'visible';
        marker_4_width_right.style.visibility = 'visible';

        markerrow5.style.visibility = 'visible';
    }
    else {
        //reset marker color selection
        $('#color_dropdown_menu_4 li').parents('.btn-group').find('.dropdown-toggle').html('Color' + ' <span class="caret"></span>');
        var elem = document.getElementById('color_dropdown_btn4');
        elem.style.background = '#0275d8'; // btn primary blue
        elem.style.color = 'white';
        // reset local storage variable
        resetMarkerColor('4');
        // Send marker color = 'off' message
        var JSONmsg = createJSONmsg('ram', '4', 'color', 'off');
        parent.addtoSendQueue(JSONmsg);
        // hide menu elements
        marker_4_color.style.visibility = 'hidden';
        marker_4_position_left.style.visibility = 'hidden';
        marker_4_position.style.visibility = 'hidden';
        marker_4_position_right.style.visibility = 'hidden';
        marker_4_width_left.style.visibility = 'hidden';
        marker_4_width.style.visibility = 'hidden';
        marker_4_width_right.style.visibility = 'hidden';

        markerrow5.style.visibility = 'hidden';
        document.getElementById('Marker_5').checked = false;
        //reset marker color selection
        $('#color_dropdown_menu_5 li').parents('.btn-group').find('.dropdown-toggle').html('Color' + ' <span class="caret"></span>');
        var elem = document.getElementById('color_dropdown_btn5');
        elem.style.background = '#0275d8'; // btn primary blue
        elem.style.color = 'white';
        // reset local storage variable
        resetMarkerColor('5');
        // Send marker color = 'off' message
        var JSONmsg = createJSONmsg('ram', '5', 'color', 'off');
        parent.addtoSendQueue(JSONmsg);
        // hide menu elements
        marker_5_color.style.visibility = 'hidden';
        marker_5_position_left.style.visibility = 'hidden';
        marker_5_position.style.visibility = 'hidden';
        marker_5_position_right.style.visibility = 'hidden';
        marker_5_width_left.style.visibility = 'hidden';
        marker_5_width.style.visibility = 'hidden';
        marker_5_width_right.style.visibility = 'hidden';

        // show save button
        highlightSaveBtns();
        parent.updateLanguage();
    }
})
$('#Marker_5').change(function () {
    if (this.checked) {
        marker_5_color.style.visibility = 'visible';
        marker_5_position_left.style.visibility = 'visible';
        marker_5_position.style.visibility = 'visible';
        marker_5_position_right.style.visibility = 'visible';
        marker_5_width_left.style.visibility = 'visible';
        marker_5_width.style.visibility = 'visible';
        marker_5_width_right.style.visibility = 'visible';
    }
    else {
        //reset marker color selection
        $('#color_dropdown_menu_5 li').parents('.btn-group').find('.dropdown-toggle').html('Color' + ' <span class="caret"></span>');
        var elem = document.getElementById('color_dropdown_btn5');
        elem.style.background = '#0275d8'; // btn primary blue
        elem.style.color = 'white';
        // reset local storage variable
        resetMarkerColor('5');
        // Send marker color = 'off' message
        var JSONmsg = createJSONmsg('ram', '5', 'color', 'off');
        parent.addtoSendQueue(JSONmsg);
        // hide menu elements
        marker_5_color.style.visibility = 'hidden';
        marker_5_position_left.style.visibility = 'hidden';
        marker_5_position.style.visibility = 'hidden';
        marker_5_position_right.style.visibility = 'hidden';
        marker_5_width_left.style.visibility = 'hidden';
        marker_5_width.style.visibility = 'hidden';
        marker_5_width_right.style.visibility = 'hidden';
        // show save button
        highlightSaveBtns();
        parent.updateLanguage();
    }
})

/**
 * Increase/Decrease Position Value of Marker 1
 */
$('#marker_1_shift_pos_left').click(function () {
    var elem = document.getElementById('marker_1_pos_input');
    elem.value = Number(elem.value) - 1;
    if (elem.value < min_value_marker_1) {
        elem.value = min_value_marker_1;
    }
    var JSONmsg = createJSONmsg('ram', '1', 'position', elem.value);
    parent.addtoSendQueue(JSONmsg);
    setLocalStorageVariable('1', 'position', String(elem.value));
    highlightSaveBtns();

})
$('#marker_1_shift_pos_right').click(function () {
    var elem = document.getElementById('marker_1_pos_input');
    elem.value = Number(elem.value) + 1;
    if (elem.value > max_value_marker_1) {
        elem.value = max_value_marker_1;
    }
    var JSONmsg = createJSONmsg('ram', '1', 'position', elem.value);
    parent.addtoSendQueue(JSONmsg);
    setLocalStorageVariable('1', 'position', String(elem.value));
    highlightSaveBtns();
})
$('#marker_1_pos_input').change(function () {
    var elem = document.getElementById('marker_1_pos_input');
    if (elem.value > max_value_marker_1) {
        elem.value = max_value_marker_1;
    }
    if (elem.value < min_value_marker_1) {
        elem.value = min_value_marker_1;
    }
    var JSONmsg = createJSONmsg('ram', '1', 'position', elem.value);
    parent.addtoSendQueue(JSONmsg);
    setLocalStorageVariable('1', 'position', String(elem.value));
    highlightSaveBtns();
})

/**
 * Increase/Decrease Position Value of Marker 2
 */
$('#marker_2_shift_pos_left').click(function () {
    var elem = document.getElementById('marker_2_pos_input');
    elem.value = Number(elem.value) - 1;
    var min_value = Number(document.getElementById('marker_1_pos_input').value) + Number(document.getElementById('marker_1_width_input').value);
    if (elem.value < min_value) {
        elem.value = min_value;
    }
    if (Number(document.getElementById('marker_1_pos_input').value) === '' || Number(document.getElementById('marker_1_width_input').value === '')) {
        console.log('Previous Marker values not defined!');
        elem.value = '';
    }
    else {
        var JSONmsg = createJSONmsg('ram', '2', 'position', elem.value);
        parent.addtoSendQueue(JSONmsg);
        setLocalStorageVariable('2', 'position', String(elem.value));
        highlightSaveBtns();
    }

})
$('#marker_2_shift_pos_right').click(function () {
    var elem = document.getElementById('marker_2_pos_input');
    elem.value = Number(elem.value) + 1;
    if (elem.value > max_value_marker_1) {
        elem.value = max_value_marker_1;
    }
    var min_value = Number(document.getElementById('marker_1_pos_input').value) + Number(document.getElementById('marker_1_width_input').value);
    if (elem.value < min_value) {
        elem.value = min_value;
    }
    if (Number(document.getElementById('marker_1_pos_input').value) === '' || Number(document.getElementById('marker_1_width_input').value === '')) {
        console.log('Previous Marker values not defined!');
        elem.value = '';
    }
    else {
        var JSONmsg = createJSONmsg('ram', '2', 'position', elem.value);
        parent.addtoSendQueue(JSONmsg);
        setLocalStorageVariable('2', 'position', String(elem.value));
        highlightSaveBtns();
    }
})
$('#marker_2_pos_input').change(function () {
    var elem = document.getElementById('marker_2_pos_input');
    if (elem.value > max_value_marker_1) {
        elem.value = max_value_marker_1;
    }
    var min_value = Number(document.getElementById('marker_1_pos_input').value) + Number(document.getElementById('marker_1_width_input').value);
    if (elem.value < min_value) {
        elem.value = min_value;
    }
    if (Number(document.getElementById('marker_1_pos_input').value) === '' || Number(document.getElementById('marker_1_width_input').value === '')) {
        console.log('Previous Marker values not defined!');
        elem.value = '';
    }
    else {
        var JSONmsg = createJSONmsg('ram', '2', 'position', elem.value);
        parent.addtoSendQueue(JSONmsg);
        setLocalStorageVariable('2', 'position', String(elem.value));
        highlightSaveBtns();
    }

})

/**
 * Increase/Decrease Position Value of Marker 3
 */
$('#marker_3_shift_pos_left').click(function () {
    var elem = document.getElementById('marker_3_pos_input');
    elem.value = Number(elem.value) - 1;
    var min_value = Number(document.getElementById('marker_2_pos_input').value) + Number(document.getElementById('marker_2_width_input').value);
    if (elem.value < min_value) {
        elem.value = min_value;
    }
    if (Number(document.getElementById('marker_2_pos_input').value) === '' || Number(document.getElementById('marker_2_width_input').value === '')) {
        console.log('Previous Marker values not defined!');
        elem.value = '';
    }
    else {
        var JSONmsg = createJSONmsg('ram', '3', 'position', elem.value);
        parent.addtoSendQueue(JSONmsg);
        setLocalStorageVariable('3', 'position', String(elem.value));
        highlightSaveBtns();
    }
})
$('#marker_3_shift_pos_right').click(function () {
    var elem = document.getElementById('marker_3_pos_input');
    elem.value = Number(elem.value) + 1;
    if (elem.value > max_value_marker_1) {
        elem.value = max_value_marker_1;
    }
    var min_value = Number(document.getElementById('marker_2_pos_input').value) + Number(document.getElementById('marker_2_width_input').value);
    if (elem.value < min_value) {
        elem.value = min_value;
    }
    if (Number(document.getElementById('marker_2_pos_input').value) === '' || Number(document.getElementById('marker_2_width_input').value === '')) {
        console.log('Previous Marker values not defined!');
        elem.value = '';
    }
    else {
        var JSONmsg = createJSONmsg('ram', '3', 'position', elem.value);
        parent.addtoSendQueue(JSONmsg);
        setLocalStorageVariable('3', 'position', String(elem.value));
        highlightSaveBtns();
    }
})
$('#marker_3_pos_input').change(function () {
    var elem = document.getElementById('marker_3_pos_input');
    if (elem.value > max_value_marker_1) {
        elem.value = max_value_marker_1;
    }
    var min_value = Number(document.getElementById('marker_2_pos_input').value) + Number(document.getElementById('marker_2_width_input').value);
    if (elem.value < min_value) {
        elem.value = min_value;
    }
    if (Number(document.getElementById('marker_2_pos_input').value) === '' || Number(document.getElementById('marker_2_width_input').value === '')) {
        console.log('Previous Marker values not defined!');
        elem.value = '';
    }
    else {
        var JSONmsg = createJSONmsg('ram', '3', 'position', elem.value);
        parent.addtoSendQueue(JSONmsg);
        setLocalStorageVariable('3', 'position', String(elem.value));
        highlightSaveBtns();
    }
})

/**
 * Increase/Decrease Position Value of Marker 4
 */
$('#marker_4_shift_pos_left').click(function () {
    var elem = document.getElementById('marker_4_pos_input');
    elem.value = Number(elem.value) - 1;
    var min_value = Number(document.getElementById('marker_3_pos_input').value) + Number(document.getElementById('marker_3_width_input').value);
    if (elem.value < min_value) {
        elem.value = min_value;
    }
    if (Number(document.getElementById('marker_3_pos_input').value) === '' || Number(document.getElementById('marker_3_width_input').value === '')) {
        console.log('Previous Marker values not defined!');
        elem.value = '';
    }
    else {
        var JSONmsg = createJSONmsg('ram', '4', 'position', elem.value);
        parent.addtoSendQueue(JSONmsg);
        setLocalStorageVariable('4', 'position', String(elem.value));
        highlightSaveBtns();
    }
})
$('#marker_4_shift_pos_right').click(function () {
    var elem = document.getElementById('marker_4_pos_input');
    elem.value = Number(elem.value) + 1;
    if (elem.value > max_value_marker_1) {
        elem.value = max_value_marker_1;
    }
    var min_value = Number(document.getElementById('marker_3_pos_input').value) + Number(document.getElementById('marker_3_width_input').value);
    if (elem.value < min_value) {
        elem.value = min_value;
    }
    if (Number(document.getElementById('marker_3_pos_input').value) === '' || Number(document.getElementById('marker_3_width_input').value === '')) {
        console.log('Previous Marker values not defined!');
        elem.value = '';
    }
    else {
        var JSONmsg = createJSONmsg('ram', '4', 'position', elem.value);
        parent.addtoSendQueue(JSONmsg);
        setLocalStorageVariable('4', 'position', String(elem.value));
        highlightSaveBtns();
    }
})
$('#marker_4_pos_input').change(function () {
    var elem = document.getElementById('marker_4_pos_input');
    if (elem.value > max_value_marker_1) {
        elem.value = max_value_marker_1;
    }
    var min_value = Number(document.getElementById('marker_3_pos_input').value) + Number(document.getElementById('marker_3_width_input').value);
    if (elem.value < min_value) {
        elem.value = min_value;
    }
    if (Number(document.getElementById('marker_3_pos_input').value) === '' || Number(document.getElementById('marker_3_width_input').value === '')) {
        console.log('Previous Marker values not defined!');
        elem.value = '';
    }
    else {
        var JSONmsg = createJSONmsg('ram', '4', 'position', elem.value);
        parent.addtoSendQueue(JSONmsg);
        setLocalStorageVariable('4', 'position', String(elem.value));
        highlightSaveBtns();
    }
})

/**
 * Increase/Decrease Position Value of Marker 5
 */
$('#marker_5_shift_pos_left').click(function () {
    var elem = document.getElementById('marker_5_pos_input');
    elem.value = Number(elem.value) - 1;
    var min_value = Number(document.getElementById('marker_4_pos_input').value) + Number(document.getElementById('marker_4_width_input').value);
    if (elem.value < min_value) {
        elem.value = min_value;
    }
    if (Number(document.getElementById('marker_4_pos_input').value) === '' || Number(document.getElementById('marker_4_width_input').value === '')) {
        console.log('Previous Marker values not defined!');
        elem.value = '';
    }
    else {
        var JSONmsg = createJSONmsg('ram', '5', 'position', elem.value);
        parent.addtoSendQueue(JSONmsg);
        setLocalStorageVariable('5', 'position', String(elem.value));
        highlightSaveBtns();
    }
})
$('#marker_5_shift_pos_right').click(function () {
    var elem = document.getElementById('marker_5_pos_input');
    elem.value = Number(elem.value) + 1;
    if (elem.value > max_value_marker_1) {
        elem.value = max_value_marker_1;
    }
    var min_value = Number(document.getElementById('marker_4_pos_input').value) + Number(document.getElementById('marker_4_width_input').value);
    if (elem.value < min_value) {
        elem.value = min_value;
    }
    if (Number(document.getElementById('marker_4_pos_input').value) === '' || Number(document.getElementById('marker_4_width_input').value === '')) {
        console.log('Previous Marker values not defined!');
        elem.value = '';
    }
    else {
        var JSONmsg = createJSONmsg('ram', '5', 'position', elem.value);
        parent.addtoSendQueue(JSONmsg);
        setLocalStorageVariable('5', 'position', String(elem.value));
        highlightSaveBtns();
    }
})
$('#marker_5_pos_input').change(function () {
    var elem = document.getElementById('marker_5_pos_input');
    if (elem.value > max_value_marker_1) {
        elem.value = max_value_marker_1;
    }
    var min_value = Number(document.getElementById('marker_4_pos_input').value) + Number(document.getElementById('marker_4_width_input').value);
    if (elem.value < min_value) {
        elem.value = min_value;
    }
    if (Number(document.getElementById('marker_4_pos_input').value) === '' || Number(document.getElementById('marker_4_width_input').value === '')) {
        console.log('Previous Marker values not defined!');
        elem.value = '';
    }
    else {
        var JSONmsg = createJSONmsg('ram', '5', 'position', elem.value);
        parent.addtoSendQueue(JSONmsg);
        setLocalStorageVariable('5', 'position', String(elem.value));
        highlightSaveBtns();
    }
})

/**
 * Increase/Decrease Width Value of Marker 1
 */
$('#marker_1_shift_width_left').click(function () {
    // Decrease shown input value
    var elem = document.getElementById('marker_1_width_input');
    elem.value = Number(elem.value) - 1;
    if (elem.value < 0) {
        elem.value = 0;
    }
    var JSONmsg = createJSONmsg('ram', '1', 'width', elem.value);
    parent.addtoSendQueue(JSONmsg);
    setLocalStorageVariable('1', 'width', String(elem.value));
    highlightSaveBtns();
})
$('#marker_1_shift_width_right').click(function () {
    // Increase shown input value
    var elem = document.getElementById('marker_1_width_input');
    elem.value = Number(elem.value) + 1;
    var max_value = Number(max_value_marker_1) - Number(document.getElementById('marker_1_pos_input').value);
    if (elem.value > max_value) {
        elem.value = max_value;
    }
    var JSONmsg = createJSONmsg('ram', '1', 'width', elem.value);
    parent.addtoSendQueue(JSONmsg);
    setLocalStorageVariable('1', 'width', String(elem.value));
    highlightSaveBtns();
})
$('#marker_1_width_input').change(function () {
    var elem = document.getElementById('marker_1_width_input');
    var max_value = Number(max_value_marker_1) - Number(document.getElementById('marker_1_pos_input').value);
    if (elem.value > max_value) {
        elem.value = max_value;
    }
    if (elem.value < 0) {
        elem.value = 0;
    }
    var JSONmsg = createJSONmsg('ram', '1', 'width', elem.value);
    parent.addtoSendQueue(JSONmsg);
    setLocalStorageVariable('1', 'width', String(elem.value));
    highlightSaveBtns();
})



/**
 * Increase/Decrease Width Value of Marker 2
 */
$('#marker_2_shift_width_left').click(function () {
    // Decrease shown input value
    var elem = document.getElementById('marker_2_width_input');
    elem.value = Number(elem.value) - 1;
    if (elem.value < 0) {
        elem.value = 0;
    }
    if (Number(document.getElementById('marker_1_pos_input').value) === '' || Number(document.getElementById('marker_1_width_input').value === '')) {
        console.log('Previous Marker values not defined!');
        elem.value = '';
    }
    else {
        var JSONmsg = createJSONmsg('ram', '2', 'width', elem.value);
        parent.addtoSendQueue(JSONmsg);
        setLocalStorageVariable('2', 'width', String(elem.value));
        highlightSaveBtns();
    }
})
$('#marker_2_shift_width_right').click(function () {
    // Increase shown input value
    var elem = document.getElementById('marker_2_width_input');
    elem.value = Number(elem.value) + 1;
    var max_value = max_value_marker_1 - Number(document.getElementById('marker_2_pos_input').value);
    if (elem.value > max_value) {
        elem.value = max_value;
    }
    if (Number(document.getElementById('marker_1_pos_input').value) === '' || Number(document.getElementById('marker_1_width_input').value === '')) {
        console.log('Previous Marker values not defined!');
        elem.value = '';
    }
    else {
        var JSONmsg = createJSONmsg('ram', '2', 'width', elem.value);
        parent.addtoSendQueue(JSONmsg);
        setLocalStorageVariable('2', 'width', String(elem.value));
        highlightSaveBtns();
    }
})
$('#marker_2_width_input').change(function () {
    var elem = document.getElementById('marker_2_width_input');
    var max_value = max_value_marker_1 - Number(document.getElementById('marker_2_pos_input').value);
    if (elem.value > max_value) {
        elem.value = max_value;
    }
    if (elem.value < 0) {
        elem.value = 0;
    }
    if (Number(document.getElementById('marker_1_pos_input').value) === '' || Number(document.getElementById('marker_1_width_input').value === '')) {
        console.log('Previous Marker values not defined!');
        elem.value = '';
    }
    else {
        var JSONmsg = createJSONmsg('ram', '2', 'width', elem.value);
        parent.addtoSendQueue(JSONmsg);
        setLocalStorageVariable('2', 'width', String(elem.value));
        highlightSaveBtns();
    }
})

/**
 * Increase/Decrease Width Value of Marker 3
 */
$('#marker_3_shift_width_left').click(function () {
    // Decrease shown input value
    var elem = document.getElementById('marker_3_width_input');
    elem.value = Number(elem.value) - 1;
    if (elem.value < 0) {
        elem.value = 0;
    }
    if (Number(document.getElementById('marker_2_pos_input').value) === '' || Number(document.getElementById('marker_2_width_input').value === '')) {
        console.log('Previous Marker values not defined!');
        elem.value = '';
    }
    else {
        var JSONmsg = createJSONmsg('ram', '3', 'width', elem.value);
        parent.addtoSendQueue(JSONmsg);
        setLocalStorageVariable('3', 'width', String(elem.value));
        highlightSaveBtns();
    }
})
$('#marker_3_shift_width_right').click(function () {
    // Increase shown input value
    var elem = document.getElementById('marker_3_width_input');
    elem.value = Number(elem.value) + 1;
    var max_value = max_value_marker_1 - Number(document.getElementById('marker_3_pos_input').value);
    if (elem.value > max_value) {
        elem.value = max_value;
    }
    if (Number(document.getElementById('marker_2_pos_input').value) === '' || Number(document.getElementById('marker_2_width_input').value === '')) {
        console.log('Previous Marker values not defined!');
        elem.value = '';
    }
    else {
        var JSONmsg = createJSONmsg('ram', '3', 'width', elem.value);
        parent.addtoSendQueue(JSONmsg);
        setLocalStorageVariable('3', 'width', String(elem.value));
        highlightSaveBtns();
    }
})
$('#marker_3_width_input').change(function () {
    var elem = document.getElementById('marker_3_width_input');
    var max_value = max_value_marker_1 - Number(document.getElementById('marker_3_pos_input').value);
    if (elem.value > max_value) {
        elem.value = max_value;
    }
    if (elem.value < 0) {
        elem.value = 0;
    }
    if (Number(document.getElementById('marker_2_pos_input').value) === '' || Number(document.getElementById('marker_2_width_input').value === '')) {
        console.log('Previous Marker values not defined!');
        elem.value = '';
    }
    else {
        var JSONmsg = createJSONmsg('ram', '3', 'width', elem.value);
        parent.addtoSendQueue(JSONmsg);
        setLocalStorageVariable('3', 'width', String(elem.value));
        highlightSaveBtns();
    }
})

/**
 * Increase/Decrease Width Value of Marker 4
 */
$('#marker_4_shift_width_left').click(function () {
    // Decrease shown input value
    var elem = document.getElementById('marker_4_width_input');
    elem.value = Number(elem.value) - 1;
    if (elem.value < 0) {
        elem.value = 0;
    }
    if (Number(document.getElementById('marker_3_pos_input').value) === '' || Number(document.getElementById('marker_3_width_input').value === '')) {
        console.log('Previous Marker values not defined!');
        elem.value = '';
    }
    else {
        var JSONmsg = createJSONmsg('ram', '4', 'width', elem.value);
        parent.addtoSendQueue(JSONmsg);
        setLocalStorageVariable('4', 'width', String(elem.value));
        highlightSaveBtns();
    }
})
$('#marker_4_shift_width_right').click(function () {
    // Increase shown input value
    var elem = document.getElementById('marker_4_width_input');
    elem.value = Number(elem.value) + 1;
    var max_value = max_value_marker_1 - Number(document.getElementById('marker_4_pos_input').value);
    if (elem.value > max_value) {
        elem.value = max_value;
    }
    if (Number(document.getElementById('marker_3_pos_input').value) === '' || Number(document.getElementById('marker_3_width_input').value === '')) {
        console.log('Previous Marker values not defined!');
        elem.value = '';
    }
    else {
        var JSONmsg = createJSONmsg('ram', '4', 'width', elem.value);
        parent.addtoSendQueue(JSONmsg);
        setLocalStorageVariable('4', 'width', String(elem.value));
        highlightSaveBtns();
    }
})
$('#marker_4_width_input').change(function () {
    var elem = document.getElementById('marker_4_width_input');
    var max_value = max_value_marker_1 - Number(document.getElementById('marker_4_pos_input').value);
    if (elem.value > max_value) {
        elem.value = max_value;
    }
    if (elem.value < 0) {
        elem.value = 0;
    }
    if (Number(document.getElementById('marker_3_pos_input').value) === '' || Number(document.getElementById('marker_3_width_input').value === '')) {
        console.log('Previous Marker values not defined!');
        elem.value = '';
    }
    else {
        var JSONmsg = createJSONmsg('ram', '4', 'width', elem.value);
        parent.addtoSendQueue(JSONmsg);
        setLocalStorageVariable('4', 'width', String(elem.value));
        highlightSaveBtns();
    }
})

/**
 * Increase/Decrease Width Value of Marker 5
 */
$('#marker_5_shift_width_left').click(function () {
    // Decrease shown input value
    var elem = document.getElementById('marker_5_width_input');
    elem.value = Number(elem.value) - 1;
    if (elem.value < 0) {
        elem.value = 0;
    }
    if (Number(document.getElementById('marker_4_pos_input').value) === '' || Number(document.getElementById('marker_4_width_input').value === '')) {
        console.log('Previous Marker values not defined!');
        elem.value = '';
    }
    else {
        var JSONmsg = createJSONmsg('ram', '5', 'width', elem.value);
        parent.addtoSendQueue(JSONmsg);
        setLocalStorageVariable('5', 'width', String(elem.value));
        highlightSaveBtns();
    }
})
$('#marker_5_shift_width_right').click(function () {
    // Increase shown input value
    var elem = document.getElementById('marker_5_width_input');
    elem.value = Number(elem.value) + 1;
    var max_value = max_value_marker_1 - Number(document.getElementById('marker_5_pos_input').value);
    if (elem.value > max_value) {
        elem.value = max_value;
    }
    if (Number(document.getElementById('marker_4_pos_input').value) === '' || Number(document.getElementById('marker_4_width_input').value === '')) {
        console.log('Previous Marker values not defined!');
        elem.value = '';
    }
    else {
        var JSONmsg = createJSONmsg('ram', '5', 'width', elem.value);
        parent.addtoSendQueue(JSONmsg);
        setLocalStorageVariable('5', 'width', String(elem.value));
        highlightSaveBtns();
    }
})
$('#marker_5_width_input').change(function () {
    var elem = document.getElementById('marker_5_width_input');
    var max_value = max_value_marker_1 - Number(document.getElementById('marker_5_pos_input').value);
    if (elem.value > max_value) {
        elem.value = max_value;
    }
    if (elem.value < 0) {
        elem.value = 0;
    }
    if (Number(document.getElementById('marker_4_pos_input').value) === '' || Number(document.getElementById('marker_4_width_input').value === '')) {
        console.log('Previous Marker values not defined!');
        elem.value = '';
    }
    else {
        var JSONmsg = createJSONmsg('ram', '5', 'width', elem.value);
        parent.addtoSendQueue(JSONmsg);
        setLocalStorageVariable('5', 'width', String(elem.value));
        highlightSaveBtns();
    }
})


/**
 * creates a marker JSON message corresponding to command overview (XBEE JSON Liste).
 * @param {*string} zielspeicher as string, ex.: 'ram'
 * @param {*string} markernumber as string, ex.: '1'
 * @param {*string} subparameter  as string, ex.: 'color'
 * @param {*variable} wert as value without '', ex.: green
 * @returns 
 */
function createJSONmsg(zielspeicher, markernumber, subparameter, wert) {
    // Set up message: {"speicherbereich":"zielspeicher","produkt":{"parameter":{"subparameter":"wert"}}}
    var speicherbereich = '"memory"';
    zielspeicher = '"' + zielspeicher + '"';
    var produkt;
    if (localStorage.getItem('selected_channel') == '1') {
        produkt = '"flash#1"';
    }
    if (localStorage.getItem('selected_channel') == '2') {
        produkt = '"flash#2"';
    }
    var parameter;
    if (markernumber == '1') {
        if (localStorage.getItem('selected_mode') == '1') {
            parameter = '"marker1#1"';
        }
        if (localStorage.getItem('selected_mode') == '2') {
            parameter = '"marker2#1"';
        }
    }
    if (markernumber == '2') {
        if (localStorage.getItem('selected_mode') == '1') {
            parameter = '"marker1#2"';
        }
        if (localStorage.getItem('selected_mode') == '2') {
            parameter = '"marker2#2"';
        }
    }
    if (markernumber == '3') {
        if (localStorage.getItem('selected_mode') == '1') {
            parameter = '"marker1#3"';
        }
        if (localStorage.getItem('selected_mode') == '2') {
            parameter = '"marker2#3"';
        }
    }
    if (markernumber == '4') {
        if (localStorage.getItem('selected_mode') == '1') {
            parameter = '"marker1#4"';
        }
        if (localStorage.getItem('selected_mode') == '2') {
            parameter = '"marker2#4"';
        }
    }
    if (markernumber == '5') {
        if (localStorage.getItem('selected_mode') == '1') {
            parameter = '"marker1#5"';
        }
        if (localStorage.getItem('selected_mode') == '2') {
            parameter = '"marker2#5"';
        }
    }
    subparameter = '"' + subparameter + '"';
    wert = '"' + wert + '"';
    var JSONmsg = '{' + speicherbereich + ':' + zielspeicher + ',' + produkt + ':{' + parameter + ':{' + subparameter + ':' + wert + '}}}';
    return JSONmsg;
}

/**
 * Save settings in local storage variables.
 * @param {*string} markernumber 
 * @param {*string} subparameter 
 * @param {*string} wert 
 */
function setLocalStorageVariable(markernumber, subparameter, wert) {
    // Channel 1
    if (localStorage.getItem('selected_channel') == '1') { // channel 1
        if (localStorage.getItem('selected_mode') == '1') { // mode 1
            if (subparameter == 'color') {
                switch (markernumber) {
                    case '1':
                        localStorage.setItem('selected_color_marker1_CH1', wert);
                        break;
                    case '2':
                        localStorage.setItem('selected_color_marker2_CH1', wert);
                        break;
                    case '3':
                        localStorage.setItem('selected_color_marker3_CH1', wert);
                        break;
                    case '4':
                        localStorage.setItem('selected_color_marker4_CH1', wert);
                        break;
                    case '5':
                        localStorage.setItem('selected_color_marker5_CH1', wert);
                        break;
                    default:
                        console.log('error: markernumber');
                        break;
                }
            }
            if (subparameter == 'position') {
                switch (markernumber) {
                    case '1':
                        localStorage.setItem('selected_position_marker1_CH1', wert);
                        break;
                    case '2':
                        localStorage.setItem('selected_position_marker2_CH1', wert);
                        break;
                    case '3':
                        localStorage.setItem('selected_position_marker3_CH1', wert);
                        break;
                    case '4':
                        localStorage.setItem('selected_position_marker4_CH1', wert);
                        break;
                    case '5':
                        localStorage.setItem('selected_position_marker5_CH1', wert);
                    default:
                        console.log('error: markernumber');
                        break;
                }
            }
            if (subparameter == 'width') {
                switch (markernumber) {
                    case '1':
                        localStorage.setItem('selected_width_marker1_CH1', wert);
                        break;
                    case '2':
                        localStorage.setItem('selected_width_marker2_CH1', wert);
                        break;
                    case '3':
                        localStorage.setItem('selected_width_marker3_CH1', wert);
                        break;
                    case '4':
                        localStorage.setItem('selected_width_marker4_CH1', wert);
                        break;
                    case '5':
                        localStorage.setItem('selected_width_marker5_CH1', wert);
                    default:
                        console.log('error: markernumber');
                        break;
                }
            }
        }
        if (localStorage.getItem('selected_mode') == '2') { // mode 2
            if (subparameter == 'color') {
                switch (markernumber) {
                    case '1':
                        localStorage.setItem('selected_color_marker1_CH1_mode2', wert);
                        break;
                    case '2':
                        localStorage.setItem('selected_color_marker2_CH1_mode2', wert);
                        break;
                    case '3':
                        localStorage.setItem('selected_color_marker3_CH1_mode2', wert);
                        break;
                    case '4':
                        localStorage.setItem('selected_color_marker4_CH1_mode2', wert);
                        break;
                    case '5':
                        localStorage.setItem('selected_color_marker5_CH1_mode2', wert);
                        break;
                    default:
                        console.log('error: markernumber');
                        break;
                }
            }
            if (subparameter == 'position') {
                switch (markernumber) {
                    case '1':
                        localStorage.setItem('selected_position_marker1_CH1_mode2', wert);
                        break;
                    case '2':
                        localStorage.setItem('selected_position_marker2_CH1_mode2', wert);
                        break;
                    case '3':
                        localStorage.setItem('selected_position_marker3_CH1_mode2', wert);
                        break;
                    case '4':
                        localStorage.setItem('selected_position_marker4_CH1_mode2', wert);
                        break;
                    case '5':
                        localStorage.setItem('selected_position_marker5_CH1_mode2', wert);
                    default:
                        console.log('error: markernumber');
                        break;
                }
            }
            if (subparameter == 'width') {
                switch (markernumber) {
                    case '1':
                        localStorage.setItem('selected_width_marker1_CH1_mode2', wert);
                        break;
                    case '2':
                        localStorage.setItem('selected_width_marker2_CH1_mode2', wert);
                        break;
                    case '3':
                        localStorage.setItem('selected_width_marker3_CH1_mode2', wert);
                        break;
                    case '4':
                        localStorage.setItem('selected_width_marker4_CH1_mode2', wert);
                        break;
                    case '5':
                        localStorage.setItem('selected_width_marker5_CH1_mode2', wert);
                    default:
                        console.log('error: markernumber');
                        break;
                }
            }
        }

    }
    // Channel 2
    if (localStorage.getItem('selected_channel') == '2') { // channel 2
        if (localStorage.getItem('selected_mode') == '1') { // mode 1
            if (subparameter == 'color') {
                switch (markernumber) {
                    case '1':
                        localStorage.setItem('selected_color_marker1_CH2', wert);
                        break;
                    case '2':
                        localStorage.setItem('selected_color_marker2_CH2', wert);
                        break;
                    case '3':
                        localStorage.setItem('selected_color_marker3_CH2', wert);
                        break;
                    case '4':
                        localStorage.setItem('selected_color_marker4_CH2', wert);
                        break;
                    case '5':
                        localStorage.setItem('selected_color_marker5_CH2', wert);
                    default:
                        console.log('error: markernumber');
                        break;
                }
            }
            if (subparameter == 'position') {
                switch (markernumber) {
                    case '1':
                        localStorage.setItem('selected_position_marker1_CH2', wert);
                        break;
                    case '2':
                        localStorage.setItem('selected_position_marker2_CH2', wert);
                        break;
                    case '3':
                        localStorage.setItem('selected_position_marker3_CH2', wert);
                        break;
                    case '4':
                        localStorage.setItem('selected_position_marker4_CH2', wert);
                        break;
                    case '5':
                        localStorage.setItem('selected_position_marker5_CH2', wert);
                    default:
                        console.log('error: markernumber');
                        break;
                }
            }
            if (subparameter == 'width') {
                switch (markernumber) {
                    case '1':
                        localStorage.setItem('selected_width_marker1_CH2', wert);
                        break;
                    case '2':
                        localStorage.setItem('selected_width_marker2_CH2', wert);
                        break;
                    case '3':
                        localStorage.setItem('selected_width_marker3_CH2', wert);
                        break;
                    case '4':
                        localStorage.setItem('selected_width_marker4_CH2', wert);
                        break;
                    case '5':
                        localStorage.setItem('selected_width_marker5_CH2', wert);
                        break;
                    default:
                        console.log('error: markernumber');
                        break;
                }
            }
        }
        if (localStorage.getItem('selected_mode') == '2') { // mode 2
            if (subparameter == 'color') {
                switch (markernumber) {
                    case '1':
                        localStorage.setItem('selected_color_marker1_CH2_mode2', wert);
                        break;
                    case '2':
                        localStorage.setItem('selected_color_marker2_CH2_mode2', wert);
                        break;
                    case '3':
                        localStorage.setItem('selected_color_marker3_CH2_mode2', wert);
                        break;
                    case '4':
                        localStorage.setItem('selected_color_marker4_CH2_mode2', wert);
                        break;
                    case '5':
                        localStorage.setItem('selected_color_marker5_CH2_mode2', wert);
                    default:
                        console.log('error: markernumber');
                        break;
                }
            }
            if (subparameter == 'position') {
                switch (markernumber) {
                    case '1':
                        localStorage.setItem('selected_position_marker1_CH2_mode2', wert);
                        break;
                    case '2':
                        localStorage.setItem('selected_position_marker2_CH2_mode2', wert);
                        break;
                    case '3':
                        localStorage.setItem('selected_position_marker3_CH2_mode2', wert);
                        break;
                    case '4':
                        localStorage.setItem('selected_position_marker4_CH2_mode2', wert);
                        break;
                    case '5':
                        localStorage.setItem('selected_position_marker5_CH2_mode2', wert);
                    default:
                        console.log('error: markernumber');
                        break;
                }
            }
            if (subparameter == 'width') {
                switch (markernumber) {
                    case '1':
                        localStorage.setItem('selected_width_marker1_CH2_mode2', wert);
                        break;
                    case '2':
                        localStorage.setItem('selected_width_marker2_CH2_mode2', wert);
                        break;
                    case '3':
                        localStorage.setItem('selected_width_marker3_CH2_mode2', wert);
                        break;
                    case '4':
                        localStorage.setItem('selected_width_marker4_CH2_mode2', wert);
                        break;
                    case '5':
                        localStorage.setItem('selected_width_marker5_CH2_mode2', wert);
                        break;
                    default:
                        console.log('error: markernumber');
                        break;
                }
            }
        }
    }
}


/**
 * Sets marker checkboxes to 'visible'.
 */
function showMarker() {
    markerrow1.style.visibility = 'visible';
    markerrow2.style.visibility = 'visible';
    markerrow3.style.visibility = 'visible';
    markerrow4.style.visibility = 'visible';
    markerrow5.style.visibility = 'visible';
}

/**
 * Sets marker X (= markernumber) menu elements to 'visible'.
 * @param {*string} markernumber 
 */
function showMarkerSettings(markernumber) {
    if (markernumber == '1') {
        markerrow1.style.visibility = 'visible';
        marker_1_color.style.visibility = 'visible';
        marker_1_position_left.style.visibility = 'visible';
        marker_1_position.style.visibility = 'visible';
        marker_1_position_right.style.visibility = 'visible';
        marker_1_width_left.style.visibility = 'visible';
        marker_1_width.style.visibility = 'visible';
        marker_1_width_right.style.visibility = 'visible';
    }
    if (markernumber == '2') {
        markerrow2.style.visibility = 'visible';
        marker_2_color.style.visibility = 'visible';
        marker_2_position_left.style.visibility = 'visible';
        marker_2_position.style.visibility = 'visible';
        marker_2_position_right.style.visibility = 'visible';
        marker_2_width_left.style.visibility = 'visible';
        marker_2_width.style.visibility = 'visible';
        marker_2_width_right.style.visibility = 'visible';
    }
    if (markernumber == '3') {
        markerrow3.style.visibility = 'visible';
        marker_3_color.style.visibility = 'visible';
        marker_3_position_left.style.visibility = 'visible';
        marker_3_position.style.visibility = 'visible';
        marker_3_position_right.style.visibility = 'visible';
        marker_3_width_left.style.visibility = 'visible';
        marker_3_width.style.visibility = 'visible';
        marker_3_width_right.style.visibility = 'visible';
    }
    if (markernumber == '4') {
        markerrow4.style.visibility = 'visible';
        marker_4_color.style.visibility = 'visible';
        marker_4_position_left.style.visibility = 'visible';
        marker_4_position.style.visibility = 'visible';
        marker_4_position_right.style.visibility = 'visible';
        marker_4_width_left.style.visibility = 'visible';
        marker_4_width.style.visibility = 'visible';
        marker_4_width_right.style.visibility = 'visible';
    }
    if (markernumber == '5') {
        markerrow5.style.visibility = 'visible';
        marker_5_color.style.visibility = 'visible';
        marker_5_position_left.style.visibility = 'visible';
        marker_5_position.style.visibility = 'visible';
        marker_5_position_right.style.visibility = 'visible';
        marker_5_width_left.style.visibility = 'visible';
        marker_5_width.style.visibility = 'visible';
        marker_5_width_right.style.visibility = 'visible';
    }
}


/**
 * Deletes all selected marker colors. 
 */
function deleteAllMarkerColors() {
    $('#color_dropdown_menu_1 li').parents('.btn-group').find('.dropdown-toggle').html('Color' + ' <span class="caret"></span>');
    var elem = document.getElementById('color_dropdown_btn1');
    elem.style.background = '#0275d8';
    elem.style.color = 'white';
    $('#color_dropdown_menu_2 li').parents('.btn-group').find('.dropdown-toggle').html('Color' + ' <span class="caret"></span>');
    elem = document.getElementById('color_dropdown_btn2');
    elem.style.background = '#0275d8';
    elem.style.color = 'white';
    $('#color_dropdown_menu_3 li').parents('.btn-group').find('.dropdown-toggle').html('Color' + ' <span class="caret"></span>');
    elem = document.getElementById('color_dropdown_btn3');
    elem.style.background = '#0275d8';
    elem.style.color = 'white';
    $('#color_dropdown_menu_4 li').parents('.btn-group').find('.dropdown-toggle').html('Color' + ' <span class="caret"></span>');
    elem = document.getElementById('color_dropdown_btn4');
    elem.style.background = '#0275d8';
    elem.style.color = 'white';
    $('#color_dropdown_menu_5 li').parents('.btn-group').find('.dropdown-toggle').html('Color' + ' <span class="caret"></span>');
    elem = document.getElementById('color_dropdown_btn5');
    elem.style.background = '#0275d8';
    elem.style.color = 'white';
}

/**
 * Sets marker color of marker X in localStorage variables to 'off'.
 * @param {*string} marker 
 */
function resetMarkerColor(marker) {
    switch (marker) {
        case '1':
            if (localStorage.getItem('selected_channel') == '1') {
                if (localStorage.getItem('selected_mode') == '1') {
                    localStorage.setItem('selected_color_marker1_CH1', 'off');
                }
                else {
                    localStorage.setItem('selected_color_marker1_CH1_mode2', 'off');
                }
            }
            else {
                if (localStorage.getItem('selected_mode') == '1') {
                    localStorage.setItem('selected_color_marker1_CH2', 'off');
                }
                else {
                    localStorage.setItem('selected_color_marker1_CH2_mode2', 'off');
                }
            }
            break;
        case '2':
            if (localStorage.getItem('selected_channel') == '1') {
                if (localStorage.getItem('selected_mode') == '1') {
                    localStorage.setItem('selected_color_marker2_CH1', 'off');
                }
                else {
                    localStorage.setItem('selected_color_marker2_CH1_mode2', 'off');
                }
            }
            else {
                if (localStorage.getItem('selected_mode') == '1') {
                    localStorage.setItem('selected_color_marker2_CH2', 'off');
                }
                else {
                    localStorage.setItem('selected_color_marker2_CH2_mode2', 'off');
                }
            }
            break;
        case '3':
            if (localStorage.getItem('selected_channel') == '1') {
                if (localStorage.getItem('selected_mode') == '1') {
                    localStorage.setItem('selected_color_marker3_CH1', 'off');
                }
                else {
                    localStorage.setItem('selected_color_marker3_CH1_mode2', 'off');
                }
            }
            else {
                if (localStorage.getItem('selected_mode') == '1') {
                    localStorage.setItem('selected_color_marker3_CH2', 'off');
                }
                else {
                    localStorage.setItem('selected_color_marker3_CH2_mode2', 'off');
                }
            }
            break;
        case '4':
            if (localStorage.getItem('selected_channel') == '1') {
                if (localStorage.getItem('selected_mode') == '1') {
                    localStorage.setItem('selected_color_marker4_CH1', 'off');
                }
                else {
                    localStorage.setItem('selected_color_marker4_CH1_mode2', 'off');
                }
            }
            else {
                if (localStorage.getItem('selected_mode') == '1') {
                    localStorage.setItem('selected_color_marker4_CH2', 'off');
                }
                else {
                    localStorage.setItem('selected_color_marker4_CH2_mode2', 'off');
                }
            }
            break;
        case '5':
            if (localStorage.getItem('selected_channel') == '1') {
                if (localStorage.getItem('selected_mode') == '1') {
                    localStorage.setItem('selected_color_marker5_CH1', 'off');
                }
                else {
                    localStorage.setItem('selected_color_marker5_CH1_mode2', 'off');
                }
            }
            else {
                if (localStorage.getItem('selected_mode') == '1') {
                    localStorage.setItem('selected_color_marker5_CH2', 'off');
                }
                else {
                    localStorage.setItem('selected_color_marker5_CH2_mode2', 'off');
                }
            }
            break;
        default:
            console.log('Error: reset Marker Color');
            break;

    }
}