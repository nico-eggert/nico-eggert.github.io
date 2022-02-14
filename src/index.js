/*
let checkserverstate;

let port;
const btnConnect = document.getElementById('btnConnect');
const btnReadserial = document.getElementById('btnReadserial');
const btnSendmsg = document.getElementById('btnSendmsg');


document.addEventListener('DOMContentLoaded', () => {
  //btnConnect.addEventListener('click', clickConnect);
  //btnReadserial.addEventListener('click', clickReadserial);
  //btnSendmsg.addEventListener('click', clickSendmsg);
});
*/


//const { clearInterval } = require("timers");

//const { freemem } = require("os");
//const BTNLOADSETTINGS = document.getElementById('btnLoadsettings');
const BTNSAVESETTINGS = document.getElementById('btnSavesettings');
const BTNCHANNEL = document.getElementById('btnChannel');
const BTNCONNECT = document.getElementById('btnConnect');
const BTNLENGTH = document.getElementById('btnLength');
const BTNBRIGHTNESS = document.getElementById('btnBrightness');
const BTNMODE_1_CH1 = document.getElementById('btnMode_1_CH1');
const BTNMODE_2_CH1 = document.getElementById('btnMode_2_CH1');
const BTNSAVE = document.getElementById('btnSave');
const BTNLOAD = document.getElementById('btnLoad');
const BTNCHANNEL_2 = document.getElementById('btnChannel_2');
const BTNCONNECT_2 = document.getElementById('btnConnect_2');
const BTNLENGTH_2 = document.getElementById('btnLength_2');
const BTNBRIGHTNESS_2 = document.getElementById('btnBrightness_2');
const BTNMODE_1_CH2 = document.getElementById('btnMode_1_CH2');
const BTNMODE_2_CH2 = document.getElementById('btnMode_2_CH2');
const BTNSAVE_2 = document.getElementById('btnSave_2');
const BTNLOAD_2 = document.getElementById('btnLoad_2');
const FRAME = document.getElementById('frame');
// LocalStorage Items correspond to the data in the RAM
localStorage.setItem('selected_channel', '');
localStorage.setItem('selected_mode', '');
localStorage.setItem('selected_length', '335mm');
localStorage.setItem('selected_brightness', 'MED');
localStorage.setItem('selected_mode1_CH1', 'none');
localStorage.setItem('selected_mode2_CH1', 'none');
localStorage.setItem('selected_color_marker1_CH1', 'none');
localStorage.setItem('selected_position_marker1_CH1', 'none');
localStorage.setItem('selected_width_marker1_CH1', 'none');
localStorage.setItem('selected_color_marker2_CH1', 'none');
localStorage.setItem('selected_position_marker2_CH1', 'none');
localStorage.setItem('selected_width_marker2_CH1', 'none');
localStorage.setItem('selected_color_marker3_CH1', 'none');
localStorage.setItem('selected_position_marker3_CH1', 'none');
localStorage.setItem('selected_width_marker3_CH1', 'none');
localStorage.setItem('selected_color_marker4_CH1', 'none');
localStorage.setItem('selected_position_marker4_CH1', 'none');
localStorage.setItem('selected_width_marker4_CH1', 'none');
localStorage.setItem('selected_color_marker5_CH1', 'none');
localStorage.setItem('selected_position_marker5_CH1', 'none');
localStorage.setItem('selected_width_marker5_CH1', 'none');
localStorage.setItem('selected_length_2', '335mm');
localStorage.setItem('selected_brightness_2', 'MED');
localStorage.setItem('selected_mode_1_CH2', 'none');
localStorage.setItem('selected_mode_2_CH2', 'none');
localStorage.setItem('selected_color_marker1_CH2', 'none');
localStorage.setItem('selected_position_marker1_CH2', 'none');
localStorage.setItem('selected_width_marker1_CH2', 'none');
localStorage.setItem('selected_color_marker2_CH2', 'none');
localStorage.setItem('selected_position_marker2_CH2', 'none');
localStorage.setItem('selected_width_marker2_CH2', 'none');
localStorage.setItem('selected_color_marker3_CH2', 'none');
localStorage.setItem('selected_position_marker3_CH2', 'none');
localStorage.setItem('selected_width_marker3_CH2', 'none');
localStorage.setItem('selected_color_marker4_CH2', 'none');
localStorage.setItem('selected_position_marker4_CH2', 'none');
localStorage.setItem('selected_width_marker4_CH2', 'none');
localStorage.setItem('selected_color_marker5_CH2', 'none');
localStorage.setItem('selected_position_marker5_CH2', 'none');
localStorage.setItem('selected_width_marker5_CH2', 'none');
localStorage.setItem('deviceaddress', '');



document.addEventListener('DOMContentLoaded', () => {
  BTNSAVESETTINGS.addEventListener('click', saveSettingstoFile);
  BTNCONNECT.addEventListener('click', loadConnectpage);
  BTNCHANNEL.addEventListener('click', showChannel1Sidemenu);
  BTNLENGTH.addEventListener('click', loadLengthpage_CH1);
  BTNBRIGHTNESS.addEventListener('click', loadBrightnesspage_CH1);
  BTNMODE_1_CH1.addEventListener('click', loadMode1page_CH1);
  BTNMODE_2_CH1.addEventListener('click', loadMode2page_CH1);
  BTNSAVE.addEventListener('click', saveSettings_CH1);
  BTNLOAD.addEventListener('click', loadLoadpage_CH1);
  BTNCHANNEL_2.addEventListener('click', showChannel2Sidemenu);
  BTNLENGTH_2.addEventListener('click', loadLengthpage_CH2);
  BTNBRIGHTNESS_2.addEventListener('click', loadBrightnesspage_CH2);
  BTNMODE_1_CH2.addEventListener('click', loadMode1page_CH2);
  BTNMODE_2_CH2.addEventListener('click', loadMode2page_CH2);
  BTNSAVE_2.addEventListener('click', saveSettings_CH2);
  BTNLOAD_2.addEventListener('click', loadLoadpage_CH2);
})

var language = window.navigator.userLanguage || window.navigator.language;
console.log('language:', language);
var checkConnectionInterval;
var constate; // connectionstate to devicename macadress
var nomsgcounter = 0; // counts the number of FIFO read commands without any new data


connectionstateUSB(); // Check USB connection 

/**
 * Activate cyclic connection check to device
 */
function cyclicConnectionCheck() {
  console.log('deviceaddress: ', localStorage.getItem('deviceaddress'));
  if (localStorage.getItem('deviceaddress') == '') {
    // do nothing, if no device adress has been specified
  }
  else {
    checkConnectionInterval = setInterval(checkconnection, 2500); // send message every cycle to check connection to device
  }

}

/**
 * Show the Channel 1 Sidemenu on click
 */
function showChannel1Sidemenu() {
  var elem = document.getElementById('length_div');
  var displaystyle = elem.style.display;
  if (displaystyle == "none") {
    $("#length_div").show();
    $("#brightness_div").show();
    $("#mode1_div_CH1").show();
    $("#mode2_div_CH1").show();
    $("#save_div").show();
    $("#load_div").show();
  }
  else {
    $("#length_div").hide();
    $("#brightness_div").hide();
    $("#mode1_div_CH1").hide();
    $("#mode2_div_CH1").hide();
    $("#save_div").hide();
    $("#load_div").hide();
  }
}
/**
 * Hides the channel 1 sidemenu buttons
 */
function hideChannel1Sidemenu() {
  $("#length_div").hide();
  $("#brightness_div").hide();
  $("#mode1_div_CH1").hide();
  $("#mode2_div_CH1").hide();
  $("#save_div").hide();
  $("#load_div").hide();
}

/**
 * Show the Channel 2 Sidemenu on click
 */
function showChannel2Sidemenu() {
  var elem = document.getElementById('length_div_2');
  var displaystyle = elem.style.display;
  if (displaystyle == "none") {
    $("#length_div_2").show();
    $("#brightness_div_2").show();
    $("#mode1_div_CH2").show();
    $("#mode2_div_CH2").show();
    $("#save_div_2").show();
    $("#load_div_2").show();
  }
  else {
    $("#length_div_2").hide();
    $("#brightness_div_2").hide();
    $("#mode1_div_CH2").hide();
    $("#mode2_div_CH2").hide();
    $("#save_div_2").hide();
    $("#load_div_2").hide();
  }
}
/**
 * Hides the channel 2 sidemenu buttons
 */
function hideChannel2Sidemenu() {
  $("#length_div_2").hide();
  $("#brightness_div_2").hide();
  $("#mode1_div_CH2").hide();
  $("#mode2_div_CH2").hide();
  $("#save_div_2").hide();
  $("#load_div_2").hide();
}

// Check for the various File API support.
if (window.File && window.FileReader && window.FileList && window.Blob) {
  console.log('The File API is supported.');
  // Great success! All the File APIs are supported.
} else {
  alert('The File APIs are not fully supported in this browser. Loading settings from file and saving settings to file is not possible.');
  document.getElementById('files').classList.add('disabled');
  document.getElementById('list').classList.add('disabled');
  document.getElementById('btnSavesettings').classList.add('disabled');
}

/**
 * Select a file with config data. 
 * Save the settings from the file to local storage variables.
 * Writes the local storage variables to RAM.
 */
function handleFileSelect(evt) {
  var files = evt.target.files; // FileList object

  // files is a FileList of File objects.
  var output = [];

  // set read variable to block reader in cyclic connection check
  for (var i = 0, f; f = files[i]; i++) {
    // Only process text files.
    if (!f.type.match('text.*')) {
      continue;
    }
    var reader = new FileReader(); // create reader instance

    // Closure to capture the file information.
    reader.onload = (function (theFile) {
      return function (e) {
        // save settings to localstorage variables.
        var string = e.target.result;
        var stringarray = string.split(/\r|\n/); // newline splits the array entries
        var count_entries = stringarray.length;
        var JSONmsg = '';
        if (count_entries != '43') { // verify if number of parameters is sufficient
          alert('Parameter count does not match expected number!');
        }
        for (var k = 0; k < count_entries; k++) {
          //console.log(stringarray[k]);
          let position = stringarray[k].search(":"); //delimiter position
          let value = stringarray[k].substring(position + 1, stringarray[k].length);
          // every parameters has a fixed position in the stringarray corresponding to k
          if (k == '1') {
            localStorage.setItem('selected_length', value);
            JSONmsg = '{"memory":"ram","flash#1":{"length":"' + value + '"}}';
            sendXBeeData(JSONmsg);
          }
          if (k == '2') {
            localStorage.setItem('selected_brightness', value);
            JSONmsg = '{"memory":"ram","flash#1":{"brightness":"' + value + '"}}';
            sendXBeeData(JSONmsg);
          }
          if (k == '3') {
            localStorage.setItem('selected_mode1_CH1', value);
            JSONmsg = '{"memory":"ram","flash#1":{"operation mode#1":"' + value + '"}}';
            sendXBeeData(JSONmsg);
          }
          if (k == '4') {
            localStorage.setItem('selected_mode2_CH1', value);
            JSONmsg = '{"memory":"ram","flash#1":{"operation mode#2":"' + value + '"}}';
            sendXBeeData(JSONmsg);
          }
          if (k == '5') {
            localStorage.setItem('selected_color_marker1_CH1', value);
            JSONmsg = '{"memory":"ram","flash#1":{"marker1#1":{"color":"' + value + '"}}}';
            sendXBeeData(JSONmsg);
          }
          if (k == '6') {
            localStorage.setItem('selected_position_marker1_CH1', value);
            JSONmsg = '{"memory":"ram","flash#1":{"marker1#1":{"position":"' + value + '"}}}';
            sendXBeeData(JSONmsg);
          }
          if (k == '7') {
            localStorage.setItem('selected_width_marker1_CH1', value);
            JSONmsg = '{"memory":"ram","flash#1":{"marker1#1":{"width":"' + value + '"}}}';
            sendXBeeData(JSONmsg);
          }
          if (k == '8') {
            localStorage.setItem('selected_color_marker2_CH1', value);
            JSONmsg = '{"memory":"ram","flash#1":{"marker2#1":{"color":"' + value + '"}}}';
            sendXBeeData(JSONmsg);
          }
          if (k == '9') {
            localStorage.setItem('selected_position_marker2_CH1', value);
            JSONmsg = '{"memory":"ram","flash#1":{"marker2#1":{"position":"' + value + '"}}}';
            sendXBeeData(JSONmsg);
          }
          if (k == '10') {
            localStorage.setItem('selected_width_marker2_CH1', value);
            JSONmsg = '{"memory":"ram","flash#1":{"marker2#1":{"width":"' + value + '"}}}';
            sendXBeeData(JSONmsg);
          }
          if (k == '11') {
            localStorage.setItem('selected_color_marker3_CH1', value);
            JSONmsg = '{"memory":"ram","flash#1":{"marker3#1":{"color":"' + value + '"}}}';
            sendXBeeData(JSONmsg);
          }
          if (k == '12') {
            localStorage.setItem('selected_position_marker3_CH1', value);
            JSONmsg = '{"memory":"ram","flash#1":{"marker3#1":{"position":"' + value + '"}}}';
            sendXBeeData(JSONmsg);
          }
          if (k == '13') {
            localStorage.setItem('selected_width_marker3_CH1', value);
            JSONmsg = '{"memory":"ram","flash#1":{"marker3#1":{"width":"' + value + '"}}}';
            sendXBeeData(JSONmsg);
          }
          if (k == '14') {
            localStorage.setItem('selected_color_marker4_CH1', value);
            JSONmsg = '{"memory":"ram","flash#1":{"marker4#1":{"color":"' + value + '"}}}';
            sendXBeeData(JSONmsg);
          }
          if (k == '15') {
            localStorage.setItem('selected_position_marker4_CH1', value);
            JSONmsg = '{"memory":"ram","flash#1":{"marker4#1":{"position":"' + value + '"}}}';
            sendXBeeData(JSONmsg);
          }
          if (k == '16') {
            localStorage.setItem('selected_width_marker4_CH1', value);
            JSONmsg = '{"memory":"ram","flash#1":{"marker4#1":{"width":"' + value + '"}}}';
            sendXBeeData(JSONmsg);
          }
          if (k == '17') {
            localStorage.setItem('selected_color_marker5_CH1', value);
            JSONmsg = '{"memory":"ram","flash#1":{"marker5#1":{"color":"' + value + '"}}}';
            sendXBeeData(JSONmsg);
          }
          if (k == '18') {
            localStorage.setItem('selected_position_marker5_CH1', value);
            JSONmsg = '{"memory":"ram","flash#1":{"marker5#1":{"position":"' + value + '"}}}';
            sendXBeeData(JSONmsg);
          }
          if (k == '19') {
            localStorage.setItem('selected_width_marker5_CH1', value);
            JSONmsg = '{"memory":"ram","flash#1":{"marker5#1":{"width":"' + value + '"}}}';
            sendXBeeData(JSONmsg);
          }
          if (k == '22') { //note: skip \n\n entries before Channnel 2:
            localStorage.setItem('selected_length_2', value);
            JSONmsg = '{"memory":"ram","flash#2":{"length":"' + value + '"}}';
            sendXBeeData(JSONmsg);
          }
          if (k == '23') {
            localStorage.setItem('selected_brightness_2', value);
            JSONmsg = '{"memory":"ram","flash#2":{"brightness":"' + value + '"}}';
            sendXBeeData(JSONmsg);
          }
          if (k == '24') {
            localStorage.setItem('selected_mode_1_CH2', value);
            JSONmsg = '{"memory":"ram","flash#2":{"operation mode#1":"' + value + '"}}';
            sendXBeeData(JSONmsg);
          }
          if (k == '25') {
            localStorage.setItem('selected_mode_2_CH2', value);
            JSONmsg = '{"memory":"ram","flash#2":{"operation mode#2":"' + value + '"}}';
            sendXBeeData(JSONmsg);
          }
          if (k == '26') {
            localStorage.setItem('selected_color_marker1_CH2', value);
            JSONmsg = '{"memory":"ram","flash#2":{"marker1#1":{"color":"' + value + '"}}}';
            sendXBeeData(JSONmsg);
          }
          if (k == '27') {
            localStorage.setItem('selected_position_marker1_CH2', value);
            JSONmsg = '{"memory":"ram","flash#2":{"marker1#1":{"position":"' + value + '"}}}';
            sendXBeeData(JSONmsg);
          }
          if (k == '28') {
            localStorage.setItem('selected_width_marker1_CH2', value);
            JSONmsg = '{"memory":"ram","flash#2":{"marker1#1":{"width":"' + value + '"}}}';
            sendXBeeData(JSONmsg);
          }
          if (k == '29') {
            localStorage.setItem('selected_color_marker2_CH2', value);
            JSONmsg = '{"memory":"ram","flash#2":{"marker2#1":{"color":"' + value + '"}}}';
            sendXBeeData(JSONmsg);
          }
          if (k == '30') {
            localStorage.setItem('selected_position_marker2_CH2', value);
            JSONmsg = '{"memory":"ram","flash#2":{"marker2#1":{"position":"' + value + '"}}}';
            sendXBeeData(JSONmsg);
          }
          if (k == '31') {
            localStorage.setItem('selected_width_marker2_CH2', value);
            JSONmsg = '{"memory":"ram","flash#2":{"marker2#1":{"width":"' + value + '"}}}';
            sendXBeeData(JSONmsg);
          }
          if (k == '32') {
            localStorage.setItem('selected_color_marker3_CH2', value);
            JSONmsg = '{"memory":"ram","flash#2":{"marker3#1":{"color":"' + value + '"}}}';
            sendXBeeData(JSONmsg);
          }
          if (k == '33') {
            localStorage.setItem('selected_position_marker3_CH2', value);
            JSONmsg = '{"memory":"ram","flash#2":{"marker3#1":{"position":"' + value + '"}}}';
            sendXBeeData(JSONmsg);
          }
          if (k == '34') {
            localStorage.setItem('selected_width_marker3_CH2', value);
            JSONmsg = '{"memory":"ram","flash#2":{"marker3#1":{"width":"' + value + '"}}}';
            sendXBeeData(JSONmsg);
          }
          if (k == '35') {
            localStorage.setItem('selected_color_marker4_CH2', value);
            JSONmsg = '{"memory":"ram","flash#2":{"marker4#1":{"color":"' + value + '"}}}';
            sendXBeeData(JSONmsg);
          }
          if (k == '36') {
            localStorage.setItem('selected_position_marker4_CH2', value);
            JSONmsg = '{"memory":"ram","flash#2":{"marker4#1":{"position":"' + value + '"}}}';
            sendXBeeData(JSONmsg);
          }
          if (k == '37') {
            localStorage.setItem('selected_width_marker4_CH2', value);
            JSONmsg = '{"memory":"ram","flash#2":{"marker4#1":{"width":"' + value + '"}}}';
            sendXBeeData(JSONmsg);
          }
          if (k == '38') {
            localStorage.setItem('selected_color_marker5_CH2', value);
            JSONmsg = '{"memory":"ram","flash#2":{"marker5#1":{"color":"' + value + '"}}}';
            sendXBeeData(JSONmsg);
          }
          if (k == '39') {
            localStorage.setItem('selected_position_marker5_CH2', value);
            JSONmsg = '{"memory":"ram","flash#2":{"marker5#1":{"position":"' + value + '"}}}';
            sendXBeeData(JSONmsg);
          }
          if (k == '40') {
            localStorage.setItem('selected_width_marker5_CH2', value);
            JSONmsg = '{"memory":"ram","flash#2":{"marker5#1":{"width":"' + value + '"}}}';
            sendXBeeData(JSONmsg);
          }

        };
      }
    })(f);

    // Read in the text file as a data text.
    reader.readAsText(f);

  }
  document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
  highlight_saveall(1);
  highlight_saveall(2);

}

document.getElementById('files').addEventListener('change', handleFileSelect, false);




/**
 * Save settings from localstorage variables to file
 */
function saveSettingstoFile() {
  console.log('clicked saveSettingstoFile');
  var file;
  var data = [];
  data.push("Channel 1: \n");
  data.push("Length:" + localStorage.getItem('selected_length') + "\n");
  data.push("Brightness:" + localStorage.getItem('selected_brightness') + "\n");
  data.push("Mode1_CH1:" + localStorage.getItem('selected_mode1_CH1') + "\n");
  data.push("Mode2_CH2:" + localStorage.getItem('selected_mode2_CH1') + "\n");
  data.push("Marker1_color:" + localStorage.getItem('selected_color_marker1_CH1') + "\n");
  data.push("Marker1_position:" + localStorage.getItem('selected_position_marker1_CH1') + "\n");
  data.push("Marker1_width:" + localStorage.getItem('selected_width_marker1_CH1') + "\n");
  data.push("Marker2_color:" + localStorage.getItem('selected_color_marker2_CH1') + "\n");
  data.push("Marker2_position:" + localStorage.getItem('selected_position_marker2_CH1') + "\n");
  data.push("Marker2_width:" + localStorage.getItem('selected_width_marker2_CH1') + "\n");
  data.push("Marker3_color:" + localStorage.getItem('selected_color_marker3_CH1') + "\n");
  data.push("Marker3_position:" + localStorage.getItem('selected_position_marker3_CH1') + "\n");
  data.push("Marker3_width:" + localStorage.getItem('selected_width_marker3_CH1') + "\n");
  data.push("Marker4_color:" + localStorage.getItem('selected_color_marker4_CH1') + "\n");
  data.push("Marker4_position:" + localStorage.getItem('selected_position_marker4_CH1') + "\n");
  data.push("Marker4_width:" + localStorage.getItem('selected_width_marker4_CH1') + "\n");
  data.push("Marker5_color:" + localStorage.getItem('selected_color_marker5_CH1') + "\n");
  data.push("Marker5_position:" + localStorage.getItem('selected_position_marker5_CH1') + "\n");
  data.push("Marker5_width:" + localStorage.getItem('selected_width_marker5_CH1') + "\n\n");
  data.push("Channel 2: \n");
  data.push("Length:" + localStorage.getItem('selected_length') + "\n");
  data.push("Brightness:" + localStorage.getItem('selected_brightness') + "\n");
  data.push("Mode1_CH2:" + localStorage.getItem('selected_mode1_CH2') + "\n");
  data.push("Mode2_CH2:" + localStorage.getItem('selected_mode2_CH2') + "\n");
  data.push("Marker1_color:" + localStorage.getItem('selected_color_marker1_CH2') + "\n");
  data.push("Marker1_position:" + localStorage.getItem('selected_position_marker1_CH2') + "\n");
  data.push("Marker1_width:" + localStorage.getItem('selected_width_marker1_CH2') + "\n");
  data.push("Marker2_color:" + localStorage.getItem('selected_color_marker2_CH2') + "\n");
  data.push("Marker2_position:" + localStorage.getItem('selected_position_marker2_CH2') + "\n");
  data.push("Marker2_width:" + localStorage.getItem('selected_width_marker2_CH2') + "\n");
  data.push("Marker3_color:" + localStorage.getItem('selected_color_marker3_CH2') + "\n");
  data.push("Marker3_position:" + localStorage.getItem('selected_position_marker3_CH2') + "\n");
  data.push("Marker3_width:" + localStorage.getItem('selected_width_marker3_CH2') + "\n");
  data.push("Marker4_color:" + localStorage.getItem('selected_color_marker4_CH2') + "\n");
  data.push("Marker4_position:" + localStorage.getItem('selected_position_marker4_CH2') + "\n");
  data.push("Marker4_width:" + localStorage.getItem('selected_width_marker4_CH2') + "\n");
  data.push("Marker5_color:" + localStorage.getItem('selected_color_marker5_CH2') + "\n");
  data.push("Marker5_position:" + localStorage.getItem('selected_position_marker5_CH2') + "\n");
  data.push("Marker5_width:" + localStorage.getItem('selected_width_marker5_CH2') + "\n\n");
  var properties = { type: 'text/plain' }; // Specify the file's mime-type.
  try {
    // Specify the filename using the File constructor, but ...
    file = new File(data, "sf-flash-config.txt", properties);
  } catch (e) {
    // ... fall back to the Blob constructor if that isn't supported. Note: File name can not be specified!
    file = new Blob(data, properties);
  }
  var url = URL.createObjectURL(file);
  console.log(url);
  document.getElementById('btnSavesettings').href = url;
}



/**
 * Load the selected page into the frame and highlight the corresponding sidemenu for Channel 1.
 */
function loadConnectpage() {
  FRAME.src = "/html/connect.html";
  reset_sidemenu_bgcolor();
  document.getElementById('connect_div').style.backgroundColor = "darkgray";
  document.getElementById('menu_header').textContent = "Connection";
  localStorage.setItem('selected_channel', '1');
}
function loadLengthpage_CH1() {
  FRAME.src = "/html/length.html";
  reset_sidemenu_bgcolor();
  document.getElementById('length_div').style.backgroundColor = "darkgray";
  document.getElementById('menu_header').textContent = "Length Settings";
  localStorage.setItem('selected_channel', '1');
}
function loadBrightnesspage_CH1() {
  FRAME.src = "/html/brightness.html";
  reset_sidemenu_bgcolor();
  document.getElementById('brightness_div').style.backgroundColor = "darkgray";
  document.getElementById('menu_header').textContent = "Brightness Settings";
  localStorage.setItem('selected_channel', '1');
}
function loadMode1page_CH1() {
  FRAME.src = "/html/mode.html";
  reset_sidemenu_bgcolor();
  document.getElementById('mode1_div_CH1').style.backgroundColor = "darkgray";
  document.getElementById('menu_header').textContent = "Mode Settings";
  localStorage.setItem('selected_channel', '1');
  localStorage.setItem('selected_mode', '1');
}
function loadMode2page_CH1() {
  FRAME.src = "/html/mode.html";
  reset_sidemenu_bgcolor();
  document.getElementById('mode2_div_CH1').style.backgroundColor = "darkgray";
  document.getElementById('menu_header').textContent = "Mode Settings";
  localStorage.setItem('selected_channel', '1');
  localStorage.setItem('selected_mode', '2');
}
// Sends msg to save all local storage variables to rom
// then read the ROM settings to update the sidemenu icons
function saveSettings_CH1() {
  FRAME.src = "";
  reset_sidemenu_bgcolor();
  document.getElementById('save_div').style.backgroundColor = "darkgray";
  localStorage.setItem('selected_channel', '1');

  if (BTNSAVE.classList.contains('btn-danger')) {
    BTNSAVE.classList.remove("btn-danger");
    BTNSAVE.classList.add("btn-secondary");
    console.log('save all settings');
  }
  if (BTNSAVE.classList.contains('active')) {
    BTNSAVE.classList.remove("active");
  }

  //TODO: Nach testphase einfügen

  sendXBeeData('{"memory":"rom","flash#1":{"all":"ram"}}'); //write all RAM data to ROM
  console.log('send read all rom in 2s ....');
  setTimeout(function () { sendXBeeData('{"memory":"rom","flash#1":{"all":"get"}}'); }, 2000); // TODO: Zeit prüfen, annahme etwa 50 ms pro befehl 40x50 ms = 2000 ms
  console.log('read FIFO after 500 ms ....');
  setTimeout(getNextDataFromQueue, 2500); //  


  //TODO: Nach Testphase löschen! change state icons corresponding to local storage variables
  if (localStorage.getItem('selected_length') == '335 mm') {
    document.getElementById('length_state_icon').src = "../images/335mm_transparent.png";
  }
  if (localStorage.getItem('selected_length') == '635 mm') {
    document.getElementById('length_state_icon').src = "../images/635mm_transparent.png";
  }
  if (localStorage.getItem('selected_length') == '935mm') {
    document.getElementById('length_state_icon').src = "../images/935mm_transparent.png";
  }
  if (localStorage.getItem('selected_length') == '1870mm') {
    document.getElementById('length_state_icon').src = "../images/1870mm_transparent.png";
  }

  if (localStorage.getItem('selected_brightness') == 'eco') {
    document.getElementById('brightness_state_icon').src = "../images/bulb_eco_transparent.png";
  }
  if (localStorage.getItem('selected_brightness') == 'med') {
    document.getElementById('brightness_state_icon').src = "../images/bulb_med_transparent.png";
  }
  if (localStorage.getItem('selected_brightness') == 'max') {
    document.getElementById('brightness_state_icon').src = "../images/bulb_max_transparent.png";
  }

  if (localStorage.getItem('selected_mode1_CH1') == 'all green') {
    document.getElementById('mode1_state_icon_ch1').src = "../images/greenstripe_transparent.png";
  }
  if (localStorage.getItem('selected_mode1_CH1') == 'all red') {
    document.getElementById('mode1_state_icon_ch1').src = "../images/redstripe_transparent.png";
  }
  if (localStorage.getItem('selected_mode1_CH1') == 'runninglight') {
    document.getElementById('mode1_state_icon_ch1').src = "../images/runninglight_transparent.png";
  }
  if (localStorage.getItem('selected_mode2_CH1') == 'all green') {
    document.getElementById('mode2_state_icon_ch1').src = "../images/greenstripe_transparent.png";
  }
  if (localStorage.getItem('selected_mode2_CH1') == 'all red') {
    document.getElementById('mode2_state_icon_ch1').src = "../images/redstripe_transparent.png";
  }
  if (localStorage.getItem('selected_mode2_CH1') == 'runninglight') {
    document.getElementById('mode2_state_icon_ch1').src = "../images/runninglight_transparent.png";
  }
}

function loadLoadpage_CH1() {
  reset_sidemenu_bgcolor();
  document.getElementById('load_div').style.backgroundColor = "darkgray";
  document.getElementById('menu_header').textContent = "Load Settings";
  localStorage.setItem('selected_channel', '1');
  setTimeout(function () { sendXBeeData('{"memory":"ram","flash#1":{"all":"get"}}') }, 50);
  setTimeout(function () { sendXBeeData('{"memory":"rom","flash#1":{"all":"get"}}') }, 200);
  //nur für test
  var RXdata = setTimeout(function () { getNextDataFromQueue() }, 400);
}
/**
 * Load the selected page into the frame and highlight the corresponding sidemenu for Channel 2
 */
function loadLengthpage_CH2() {
  FRAME.src = "/html/length.html";
  reset_sidemenu_bgcolor();
  document.getElementById('length_div_2').style.backgroundColor = "darkgray";
  document.getElementById('menu_header').textContent = "Length Settings";
  localStorage.setItem('selected_channel', '2');
}
function loadBrightnesspage_CH2() {
  FRAME.src = "/html/brightness.html";
  reset_sidemenu_bgcolor();
  document.getElementById('brightness_div_2').style.backgroundColor = "darkgray";
  document.getElementById('menu_header').textContent = "Brightness Settings";
  localStorage.setItem('selected_channel', '2');
}
function loadMode1page_CH2() {
  FRAME.src = "/html/mode.html";
  reset_sidemenu_bgcolor();
  document.getElementById('mode1_div_CH2').style.backgroundColor = "darkgray";
  document.getElementById('menu_header').textContent = "Mode Settings";
  localStorage.setItem('selected_channel', '2');
  localStorage.setItem('selected_mode', '1');
}
function loadMode2page_CH2() {
  FRAME.src = "/html/mode.html";
  reset_sidemenu_bgcolor();
  document.getElementById('mode2_div_CH2').style.backgroundColor = "darkgray";
  document.getElementById('menu_header').textContent = "Mode Settings";
  localStorage.setItem('selected_channel', '2');
  localStorage.setItem('selected_mode', '2');
}
function saveSettings_CH2() {
  reset_sidemenu_bgcolor();
  document.getElementById('save_div_2').style.backgroundColor = "darkgray";
  document.getElementById('menu_header').textContent = "Save Settings";
  localStorage.setItem('selected_channel', '2');

}
function loadLoadpage_CH2() {
  reset_sidemenu_bgcolor();
  document.getElementById('load_div').style.backgroundColor = "darkgray";
  document.getElementById('menu_header').textContent = "Load Settings";
  localStorage.setItem('selected_channel', '2');
  setTimeout(function () { sendXBeeData('{"memory":"ram","flash#2":{"all":"get"}}') }, 50);
  setTimeout(function () { sendXBeeData('{"memory":"rom","flash#2":{"all":"get"}}') }, 200);
  //nur für test
  var RXdata = setTimeout(function () { getNextDataFromQueue() }, 400);

}
/**
 * Reset the backgroundcolor of the side menu to the standard color
 */
function reset_sidemenu_bgcolor() {
  document.getElementById('connect_div').style.backgroundColor = "#424242";
  document.getElementById('length_div').style.backgroundColor = "#424242";
  document.getElementById('brightness_div').style.backgroundColor = "#424242";
  document.getElementById('mode1_div_CH1').style.backgroundColor = "#424242";
  document.getElementById('mode2_div_CH1').style.backgroundColor = "#424242";
  document.getElementById('save_div').style.backgroundColor = "#424242";
  document.getElementById('load_div').style.backgroundColor = "#424242";

  document.getElementById('length_div_2').style.backgroundColor = "#424242";
  document.getElementById('brightness_div_2').style.backgroundColor = "#424242";
  document.getElementById('mode1_div_CH2').style.backgroundColor = "#424242";
  document.getElementById('mode2_div_CH2').style.backgroundColor = "#424242";
  document.getElementById('save_div_2').style.backgroundColor = "#424242";
  document.getElementById('load_div_2').style.backgroundColor = "#424242";

}

/**
 * Highlights the save all button in the sidemenu for the selected channel.
 * @param {number} channel the channel number */
function highlight_saveall(channel) {
  if (channel == '1') {
    if (BTNSAVE.classList.contains('btn-secondary')) {
      BTNSAVE.classList.remove("btn-secondary");
      BTNSAVE.classList.add("btn-danger");
      BTNSAVE.classList.add("active");
    }
  }
  if (channel == '2') {
    if (BTNSAVE_2.classList.contains('btn-secondary')) {
      BTNSAVE_2.classList.remove("btn-secondary");
      BTNSAVE_2.classList.add("btn-danger");
      BTNSAVE_2.classList.add("active");
    }
  }
}

// service worker setup
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").then(registration => {
    console.log("SW Registered!");
    console.log(registration);
  }).catch(error => {
    console.log("SW Registration failed!");
    console.log(error);
  })
} else {
  console.log("Service Worker not supported");
}

/*
//check serial support
if ("serial" in navigator) {
  console.log("Serial supported")
}
else {
  console.log("Serial not supported")
}
*/
/** Sets up event listener for serial connection to USB-Dongle
 *  */
async function connectionstateUSB() {
  navigator.serial.addEventListener('connect', (e) => {
    // Connect to `e.target` or add it to a list of available ports.
    console.log("connected to USB serial");
  });

  // on disconnetion of usb device change state text, switch to connect html and delete stored device address, reset connection state icon
  navigator.serial.addEventListener('disconnect', (e) => {
    // Remove `e.target` from the list of available ports.
    console.log("disconnected USB serial");
    /*
    clearInterval(checkConnectionInterval);
    document.getElementById('status').innerHTML = 'USB: Disconnected';
    FRAME.src = "/html/connect.html";
    localStorage.setItem('deviceaddress', ''); // reset device address
    var elem = document.getElementById('connect_state_icon');
    elem.classList.remove("fa-check");
    elem.classList.add("fa-times");
    hideChannel1Sidemenu();
    hideChannel2Sidemenu();
    if (BTNCHANNEL.classList.contains('disabled')) {
      BTNCHANNEL.classList.remove('disabled');
    }
    else {
      BTNCHANNEL.classList.add('disabled');
    }
    if (BTNCHANNEL_2.classList.contains('disabled')) {
      BTNCHANNEL_2.classList.remove('disabled');
    }
    else {
      BTNCHANNEL_2.classList.add('disabled');
    }
    */
    location.reload(); // reload of page to reset serial connection on connection failure
  });
}

/*
 const filter = { usbVendorId: 0x2341 }; // arduino uno add to request port filters: [{VendorId}]
 
 // request port  and open a connection
 port = await navigator.serial.requestPort({ filters: [filter] });
 // - Wait for the port to open
 await port.open({
   baudRate: 57600, // 57600 xbee, 9600 standard
   dataBits: 8,
   parity: "none",
   stopBits: 1,
   flowControl: "none"
 })
}
 
 
 
async function readSerial() {
 // TextDecoder 
 //const textDecoder = new TextDecoderStream();
 //const readableStreamClosed = port.readable.pipeTo(textDecoder.writable);
 //const reader = textDecoder.readable.getReader();
 
 
 // Listen to data coming from the serial device.
 while (port.readable) {
   const reader = port.readable.getReader();
 
   try {
     while (true) {
       const { value, done } = await reader.read();
       if (done) {
         // Allow the serial port to be closed later.
         reader.releaseLock();
         break;
       }
       //console.log("pre selection: ",value);
       if (value[0] > 47 & value[0] < 65) { //ASCII 47 = "/", ab ASCII 48 "0" , ...
 
         //console.log(value[0]);
         document.getElementById("sample").innerHTML = String.fromCharCode(value[0]); // ASCII to char conversion to html element
       }
       if (value[0] > 64) {
         // remove return character (ASCII 13, or '\r') and a newline character (ASCII 10, or '\n')
         //rsp_msg=remove2ItemAll(value,"13"); 
 
         let str = new TextDecoder().decode(value);
         document.getElementById("rec_msg").innerHTML = str;
       }
     }
   } catch (error) {
     // TODO: Handle non-fatal read error.
   }
 }
}
 
/**
* Remove all entries in Array
*/
/*
function remove2ItemAll(arr, value) {
  var i = 0;
  while (i < arr.length) {
    if (arr[i] === value) {
      arr.splice(i, 2);
    } else {
      ++i;
    }
  }
  return arr;
}
 
async function writeSerial() {
  const writer = port.writable.getWriter();
  var data = document.getElementById('send_msg_input').value;
 
  var enc = new TextEncoder();
  data = enc.encode(data);
 
  await writer.write(data);
 
  // Allow the serial port to be closed later
  writer.releaseLock();
}
 
/**
 * Button Click Funtions
 */
/*
async function clickConnect() {
  await connect();
  document.getElementById('status').innerText = 'Connected'; // Update Connection Status
  //readSerial();
}
 
async function clickReadserial() {
  readSerial();
}
 
async function clickSendmsg() {
  writeSerial();
  console.log('write serial');
}
 
 
/**
 * Check Server Connectivity
 * @returns 
 */
async function webserverstate() {
  $.ajax({
    url: "http://127.0.0.1:8887/",
    cache: false,
    async: false,
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      // some error code.
      console.log('no connection to webserver');
      document.getElementById('server_status').innerHTML = 'Not Available';
    },
    success: function (html) {
      // do something.
      console.log('connection to webserver available');
      document.getElementById('server_status').innerHTML = 'Available';
    }
  });
}



async function connectSerial() {
  XBee3.begin();
}

/**
 * Sends a message to the deviceadress and verifies if a return message is send.
 * Returns a bool state to show the connection state.
 * Deactivates channels in sidemenu and loads connection page.
 * @returns state: true -> connection running , false -> connection lost
 */
async function checkconnection() {
  var state;
  sendXBeeData('{"memory":"ram","flash":{"power":"get"}}');
  console.log('dealy 1 500ms');
  let delayres = await delay(500);
  getNextDataFromQueue(); // read Fifo data
  console.log('delay 2 500ms');
  delayres = await delay(500);
  console.log('after delay 1 und 2');
  state = constate;
  if (state) {
    return state;
  }
  else {// connection lost
    console.log("connection lost");
    /*
    clearInterval(checkConnectionInterval);
    document.getElementById('status').innerHTML = 'USB: Disconnected';
    localStorage.setItem('deviceaddress', ''); // reset device address
    var elem = document.getElementById('connect_state_icon');
    elem.classList.remove("fa-check");
    elem.classList.add("fa-times");
    hideChannel1Sidemenu();
    hideChannel2Sidemenu();
    if (BTNCHANNEL.classList.contains('disabled')) {
      // do nothing
    }
    else {
      BTNCHANNEL.classList.add('disabled');
    }
    if (BTNCHANNEL_2.classList.contains('disabled')) {
      // do nothing
    }
    else {
      BTNCHANNEL_2.classList.add('disabled');
    }
    FRAME.src = "/html/connect.html";
    */
    location.reload(); // reload of page to reset serial connection on connection failure
    return state;
  }
}

async function delay(delayInms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(2);
    }, delayInms);
  });
}



/**
 * Looks through all entries in FIFO.
 * Updates local Storage variables for selection of RAM settings.
 * Updates state icons in sidemenu with ROM settings.
 */
async function getNextDataFromQueue() {
  console.log('getDatafromQueue');

  var RXData = new XBeeData();
  var data_count = XBee3.RxQueue.getLength();
  if (data_count == 0) {
    console.log('no data in FIFO after call');
    nomsgcounter = nomsgcounter + 1;
    if (nomsgcounter == 2) {
      console.log('No msg in FIFO for 2 iterrations');
      constate = false;
    }
  }

  while (data_count > 0) {
    nomsgcounter = 0; // reset no message counter
    if (data_count) {
      console.log('number of data in FIFO:', data_count); // 3
      RXData = XBee3.RxQueue.shift(); // 0, 1, 2
    }
    else {
      RXData = 0;
    }
    console.log(RXData);

    // power
    if (RXData.JSONDocument["flash"]) {
      if (RXData.JSONDocument["flash"]["power"]) {
        if (RXData.JSONDocument["flash"]["power"] == 'on') {
          console.log("constate true");

          if (constate == false) {
            console.log('constate false -> ')
            cyclicConnectionCheck(); // start connection check
          }
          constate = true;
        }
        if (RXData.JSONDocument["flash"]["power"] == 'off') {
          //sendXBeeData('{"memory":"ram","flash":{"power":"on"}}');
          constate = false;
          clearInterval(checkConnectionInterval); // resetIntervalTimer
        }
      }
    }

    // Channel 1
    // Load RAM settings to local storage variables
    if (RXData.JSONDocument["flash#1"]) {
      if (RXData.JSONDocument["memory"] == "ram") {
        console.log("ram");

        // length
        if (RXData.JSONDocument["flash#1"]["length"]) {
          if (RXData.JSONDocument["flash#1"]["length"] == '335 mm') {
            localStorage.setItem('selected_length', '335 mm');
          }
          if (RXData.JSONDocument["flash#1"]["length"] == '635 mm') {
            localStorage.setItem('selected_length', '635 mm');
          }
          if (RXData.JSONDocument["flash#1"]["length"] == '935 mm') {
            localStorage.setItem('selected_length', '935 mm');
          }
          if (RXData.JSONDocument["flash#1"]["length"] == '1870 mm') {
            localStorage.setItem('selected_length', '1870 mm');
          }
        }
        // brightness
        if (RXData.JSONDocument["flash#1"]["brightness"]) {
          if (RXData.JSONDocument["flash#1"]["brightness"] == 'eco') {
            localStorage.setItem('selected_brightness', 'eco');
          }
          if (RXData.JSONDocument["flash#1"]["brightness"] == 'medium') {
            localStorage.setItem('selected_brightness', 'med');
          }
          if (RXData.JSONDocument["flash#1"]["brightness"] == 'max') {
            localStorage.setItem('selected_brightness', 'max');
          }
        }
        // operation mode 1 channel 1
        if (RXData.JSONDocument["flash#1"]["operation mode#1"]) {
          if (RXData.JSONDocument["flash#1"]["operation mode#1"] == 'all green') {
            localStorage.setItem('selected_mode1_CH1', 'all green');
          }
          if (RXData.JSONDocument["flash#1"]["operation mode#1"] == 'all red') {
            localStorage.setItem('selected_mode1_CH1', 'all red');
          }
          if (RXData.JSONDocument["flash#1"]["operation mode#1"] == 'runninglight') {
            localStorage.setItem('selected_mode1_CH1', 'runninglight');
          }
        }
        // operation mode 2 channel 1
        if (RXData.JSONDocument["flash#1"]["operation mode#2"]) {
          if (RXData.JSONDocument["flash#1"]["operation mode#2"] == 'all green') {
            localStorage.setItem('selected_mode2_CH1', 'all green');
          }
          if (RXData.JSONDocument["flash#1"]["operation mode#2"] == 'all red') {
            localStorage.setItem('selected_mode2_CH1', 'all red');
          }
          if (RXData.JSONDocument["flash#1"]["operation mode#2"] == 'runninglight') {
            localStorage.setItem('selected_mode2_CH1', 'runninglight');
          }
        }
      }
      // Set sidemenu icons to ROM settings
      if (RXData.JSONDocument["memory"] == "rom") {
        console.log("rom");
        // length
        if (RXData.JSONDocument["flash#1"]["length"]) {
          if (RXData.JSONDocument["flash#1"]["length"] == '335 mm') {
            document.getElementById('length_state_icon').src = "../images/335mm_transparent.png";
          }
          if (RXData.JSONDocument["flash#1"]["length"] == '635 mm') {
            document.getElementById('length_state_icon').src = "../images/635mm_transparent.png";
          }
          if (RXData.JSONDocument["flash#1"]["length"] == '935 mm') {
            document.getElementById('length_state_icon').src = "../images/935mm_transparent.png";
          }
          if (RXData.JSONDocument["flash#1"]["length"] == '1870 mm') {
            document.getElementById('length_state_icon').src = "../images/1870mm_transparent.png";
          }
        }
        // brightness
        if (RXData.JSONDocument["flash#1"]["brightness"]) {
          if (RXData.JSONDocument["flash#1"]["brightness"] == 'eco') {
            document.getElementById('brightness_state_icon').src = "../images/bulb_eco_transparent.png";
          }
          if (RXData.JSONDocument["flash#1"]["brightness"] == 'medium') {
            document.getElementById('brightness_state_icon').src = "../images/bulb_med_transparent.png";
          }
          if (RXData.JSONDocument["flash#1"]["brightness"] == 'max') {
            document.getElementById('brightness_state_icon').src = "../images/bulb_max_transparent.png";
          }
        }
        // operation mode 1 channel 1
        if (RXData.JSONDocument["flash#1"]["operation mode#1"]) {
          if (RXData.JSONDocument["flash#1"]["operation mode#1"] == 'all off') {
            document.getElementById('mode1_state_icon_ch1').src = "../images/runninglight_empty.png";
          }
          if (RXData.JSONDocument["flash#1"]["operation mode#1"] == 'all green') {
            document.getElementById('mode1_state_icon_ch1').src = "../images/greenstripe_transparent.png";
          }
          if (RXData.JSONDocument["flash#1"]["operation mode#1"] == 'all red') {
            document.getElementById('mode1_state_icon_ch1').src = "../images/redstripe_transparent.png";
          }
          if (RXData.JSONDocument["flash#1"]["operation mode#1"] == 'runninglight') {
            document.getElementById('mode1_state_icon_ch1').src = "../images/runninglight_transparent.png";
          }
          if (RXData.JSONDocument["flash#1"]["operation mode#1"] == 'marker1') {
            document.getElementById('mode1_state_icon_ch1').src = "../images/M_transparent.png";
          }
          if (RXData.JSONDocument["flash#1"]["operation mode#1"] == 'marker2') {
            document.getElementById('mode1_state_icon_ch1').src = "../images/M_transparent.png";
          }
        }
        // operation mode 2 channel 1
        if (RXData.JSONDocument["flash#1"]["operation mode#2"]) {
          if (RXData.JSONDocument["flash#1"]["operation mode#2"] == 'all off') {
            document.getElementById('mode2_state_icon_ch1').src = "../images/runninglight_empty.png";
          }
          if (RXData.JSONDocument["flash#1"]["operation mode#2"] == 'all green') {
            document.getElementById('mode2_state_icon_ch1').src = "../images/greenstripe_transparent.png";
          }
          if (RXData.JSONDocument["flash#1"]["operation mode#2"] == 'all red') {
            document.getElementById('mode2_state_icon_ch1').src = "../images/redstripe_transparent.png";
          }
          if (RXData.JSONDocument["flash#1"]["operation mode#2"] == 'runninglight') {
            document.getElementById('mode2_state_icon_ch1').src = "../images/runninglight_transparent.png";
          }
          if (RXData.JSONDocument["flash#1"]["operation mode#2"] == 'marker1') {
            document.getElementById('mode2_state_icon_ch1').src = "../images/M_transparent.png";
          }
          if (RXData.JSONDocument["flash#1"]["operation mode#2"] == 'marker2') {
            document.getElementById('mode2_state_icon_ch1').src = "../images/M_transparent.png";
          }
        }
      }
    }

    data_count = XBee3.RxQueue.getLength(); // update remaining number of messages in FIFO
    if (data_count > 50) {
      alert('Error: Message overflow. 50+ messages in FIFO!');
    }
  }
  console.log('FIFO is empty');
}

/**
 * Sends the TXString comand to the previously
 * @param {string} TXString corresponding to command overview
 */
async function sendXBeeData(TXString) {
  let address = localStorage.getItem('deviceaddress');
  if (address == '') {
    //do nothing
    console.log('no deviceaddress existing');
  }
  else {
    const TXData = new XBeeData();
    TXData.MACAddress.set(address);
    TXData.JSONDocument = JSON.parse(TXString);
    console.log('Send Data: ', TXData);
    XBee3.writeJSONDocument(TXData);
  }
}




