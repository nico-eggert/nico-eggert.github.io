const stringdata_array = []; // array to save all string commands in a queue

// button constants
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
const BTNLOCALCONGIG = document.getElementById('btnLocal_config');
const FRAME = document.getElementById('frame');
// localStorage items correspond to the data in the RAM
localStorage.setItem('usb_connected', 'false');
localStorage.setItem('selected_language', '');
localStorage.setItem('loadingdata', 'false');
localStorage.setItem('deviceaddress', '');
localStorage.setItem('selected_channel', '');
localStorage.setItem('selected_mode', '');
// CHANNEL 1
localStorage.setItem('selected_length', 'none');
localStorage.setItem('selected_brightness', 'none');
localStorage.setItem('selected_mode1_CH1', 'none');
localStorage.setItem('selected_mode2_CH1', 'none');
// marker channel 1 mode 1 
localStorage.setItem('selected_color_marker1_CH1', 'off');
localStorage.setItem('selected_position_marker1_CH1', 'none');
localStorage.setItem('selected_width_marker1_CH1', 'none');
localStorage.setItem('selected_color_marker2_CH1', 'off');
localStorage.setItem('selected_position_marker2_CH1', 'none');
localStorage.setItem('selected_width_marker2_CH1', 'none');
localStorage.setItem('selected_color_marker3_CH1', 'off');
localStorage.setItem('selected_position_marker3_CH1', 'none');
localStorage.setItem('selected_width_marker3_CH1', 'none');
localStorage.setItem('selected_color_marker4_CH1', 'off');
localStorage.setItem('selected_position_marker4_CH1', 'none');
localStorage.setItem('selected_width_marker4_CH1', 'none');
localStorage.setItem('selected_color_marker5_CH1', 'off');
localStorage.setItem('selected_position_marker5_CH1', 'none');
localStorage.setItem('selected_width_marker5_CH1', 'none');
// marker channel 1 mode 2 
localStorage.setItem('selected_color_marker1_CH1_mode2', 'off');
localStorage.setItem('selected_position_marker1_CH1_mode2', 'none');
localStorage.setItem('selected_width_marker1_CH1_mode2', 'none');
localStorage.setItem('selected_color_marker2_CH1_mode2', 'off');
localStorage.setItem('selected_position_marker2_CH1_mode2', 'none');
localStorage.setItem('selected_width_marker2_CH1_mode2', 'none');
localStorage.setItem('selected_color_marker3_CH1_mode2', 'off');
localStorage.setItem('selected_position_marker3_CH1_mode2', 'none');
localStorage.setItem('selected_width_marker3_CH1_mode2', 'none');
localStorage.setItem('selected_color_marker4_CH1_mode2', 'off');
localStorage.setItem('selected_position_marker4_CH1_mode2', 'none');
localStorage.setItem('selected_width_marker4_CH1_mode2', 'none');
localStorage.setItem('selected_color_marker5_CH1_mode2', 'off');
localStorage.setItem('selected_position_marker5_CH1_mode2', 'none');
localStorage.setItem('selected_width_marker5_CH1_mode2', 'none');
// CHANNEL 2
localStorage.setItem('selected_length_2', 'none');
localStorage.setItem('selected_brightness_2', 'none');
localStorage.setItem('selected_mode1_CH2', 'none');
localStorage.setItem('selected_mode2_CH2', 'none');
// marker channel 2 mode 1
localStorage.setItem('selected_color_marker1_CH2', 'off');
localStorage.setItem('selected_position_marker1_CH2', 'none');
localStorage.setItem('selected_width_marker1_CH2', 'none');
localStorage.setItem('selected_color_marker2_CH2', 'off');
localStorage.setItem('selected_position_marker2_CH2', 'none');
localStorage.setItem('selected_width_marker2_CH2', 'none');
localStorage.setItem('selected_color_marker3_CH2', 'off');
localStorage.setItem('selected_position_marker3_CH2', 'none');
localStorage.setItem('selected_width_marker3_CH2', 'none');
localStorage.setItem('selected_color_marker4_CH2', 'off');
localStorage.setItem('selected_position_marker4_CH2', 'none');
localStorage.setItem('selected_width_marker4_CH2', 'none');
localStorage.setItem('selected_color_marker5_CH2', 'off');
localStorage.setItem('selected_position_marker5_CH2', 'none');
localStorage.setItem('selected_width_marker5_CH2', 'none');
// marker channel 2 mode 2
localStorage.setItem('selected_color_marker1_CH2_mode2', 'off');
localStorage.setItem('selected_position_marker1_CH2_mode2', 'none');
localStorage.setItem('selected_width_marker1_CH2_mode2', 'none');
localStorage.setItem('selected_color_marker2_CH2_mode2', 'off');
localStorage.setItem('selected_position_marker2_CH2_mode2', 'none');
localStorage.setItem('selected_width_marker2_CH2_mode2', 'none');
localStorage.setItem('selected_color_marker3_CH2_mode2', 'off');
localStorage.setItem('selected_position_marker3_CH2_mode2', 'none');
localStorage.setItem('selected_width_marker3_CH2_mode2', 'none');
localStorage.setItem('selected_color_marker4_CH2_mode2', 'off');
localStorage.setItem('selected_position_marker4_CH2_mode2', 'none');
localStorage.setItem('selected_width_marker4_CH2_mode2', 'none');
localStorage.setItem('selected_color_marker5_CH2_mode2', 'off');
localStorage.setItem('selected_position_marker5_CH2_mode2', 'none');
localStorage.setItem('selected_width_marker5_CH2_mode2', 'none');



// click event listener for buttons
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
  BTNLOCALCONGIG.addEventListener('click', toggleLocalCongigSidemenu);
})


var checkConnectionInterval; // interval return variable, can be cleared to reset the interval call of connection check
var constate; // connectionstate to devicename macadress
var nomsgcounter = 0; // counts the number of FIFO read commands without any new data


connectionstateUSB(); // Check USB connection 

/**
 * Activate cyclic connection check to device
 */
function cyclicConnectionCheck() {
  console.log('deviceaddress: ', localStorage.getItem('deviceaddress'));
  if (localStorage.getItem('deviceaddress') == '') {
    // do nothing
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
 * Hides or shows localconfig sidemenu buttons
 */
function toggleLocalCongigSidemenu() {
  var elem = document.getElementById('local_save_div');
  var displaystyle = elem.style.display;
  if (displaystyle == "none") {
    $('#local_save_div').show();
    $('#local_load_div').show();
  }
  else {
    $('#local_save_div').hide();
    $('#local_load_div').hide();
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
  reset_sidemenu_bgcolor();
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
        console.log('file entries:', count_entries);
        var JSONmsg = '';
        if (count_entries != '73') { // verify if number of parameters is sufficient
          alert('Parameter count does not match expected number of elements(!=43)!');
        }
        else {
          FRAME.src = "/html/load.html";
          clearInterval(checkConnectionInterval); // deactivate connection check
          constate = false; // reset connection state variable of connection check
          localStorage.setItem('loadingdata', 'true');
          for (var k = 0; k < count_entries; k++) {
            //console.log(stringarray[k]);
            let position = stringarray[k].search(":"); //delimiter position
            let value = stringarray[k].substring(position + 1, stringarray[k].length);
            // every parameters has a fixed position in the stringarray corresponding to k
            if (k == '1') {
              localStorage.setItem('selected_length', value);
              JSONmsg = '{"memory":"ram","flash#1":{"length":"' + value + '"}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '2') {
              localStorage.setItem('selected_brightness', value);
              JSONmsg = '{"memory":"ram","flash#1":{"brightness":"' + value + '"}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '3') {
              localStorage.setItem('selected_mode1_CH1', value);
              JSONmsg = '{"memory":"ram","flash#1":{"operation mode#1":"' + value + '"}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '4') {
              localStorage.setItem('selected_mode2_CH1', value);
              JSONmsg = '{"memory":"ram","flash#1":{"operation mode#2":"' + value + '"}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '5') {
              localStorage.setItem('selected_color_marker1_CH1', value);
              JSONmsg = '{"memory":"ram","flash#1":{"marker1#1":{"color":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '6') {
              localStorage.setItem('selected_position_marker1_CH1', value);
              JSONmsg = '{"memory":"ram","flash#1":{"marker1#1":{"position":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '7') {
              localStorage.setItem('selected_width_marker1_CH1', value);
              JSONmsg = '{"memory":"ram","flash#1":{"marker1#1":{"width":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '8') {
              localStorage.setItem('selected_color_marker2_CH1', value);
              JSONmsg = '{"memory":"ram","flash#1":{"marker1#2":{"color":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '9') {
              localStorage.setItem('selected_position_marker2_CH1', value);
              JSONmsg = '{"memory":"ram","flash#1":{"marker1#2":{"position":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '10') {
              localStorage.setItem('selected_width_marker2_CH1', value);
              JSONmsg = '{"memory":"ram","flash#1":{"marker1#2":{"width":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '11') {
              localStorage.setItem('selected_color_marker3_CH1', value);
              JSONmsg = '{"memory":"ram","flash#1":{"marker1#3":{"color":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '12') {
              localStorage.setItem('selected_position_marker3_CH1', value);
              JSONmsg = '{"memory":"ram","flash#1":{"marker1#3":{"position":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '13') {
              localStorage.setItem('selected_width_marker3_CH1', value);
              JSONmsg = '{"memory":"ram","flash#1":{"marker1#3":{"width":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '14') {
              localStorage.setItem('selected_color_marker4_CH1', value);
              JSONmsg = '{"memory":"ram","flash#1":{"marker1#4":{"color":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '15') {
              localStorage.setItem('selected_position_marker4_CH1', value);
              JSONmsg = '{"memory":"ram","flash#1":{"marker1#4":{"position":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '16') {
              localStorage.setItem('selected_width_marker4_CH1', value);
              JSONmsg = '{"memory":"ram","flash#1":{"marker1#4":{"width":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '17') {
              localStorage.setItem('selected_color_marker5_CH1', value);
              JSONmsg = '{"memory":"ram","flash#1":{"marker1#5":{"color":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '18') {
              localStorage.setItem('selected_position_marker5_CH1', value);
              JSONmsg = '{"memory":"ram","flash#1":{"marker1#5":{"position":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '19') {
              localStorage.setItem('selected_width_marker5_CH1', value);
              JSONmsg = '{"memory":"ram","flash#1":{"marker1#5":{"width":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '20') {
              localStorage.setItem('selected_color_marker1_CH1_mode2', value);
              JSONmsg = '{"memory":"ram","flash#1":{"marker2#1":{"color":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '21') {
              localStorage.setItem('selected_position_marker1_CH1_mode2', value);
              JSONmsg = '{"memory":"ram","flash#1":{"marker2#1":{"position":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '22') {
              localStorage.setItem('selected_width_marker1_CH1_mode2', value);
              JSONmsg = '{"memory":"ram","flash#1":{"marker2#1":{"width":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '23') {
              localStorage.setItem('selected_color_marker2_CH1_mode2', value);
              JSONmsg = '{"memory":"ram","flash#1":{"marker2#2":{"color":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '24') {
              localStorage.setItem('selected_position_marker2_CH1_mode2', value);
              JSONmsg = '{"memory":"ram","flash#1":{"marker2#2":{"position":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '25') {
              localStorage.setItem('selected_width_marker2_CH1_mode2', value);
              JSONmsg = '{"memory":"ram","flash#1":{"marker2#2":{"width":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '26') {
              localStorage.setItem('selected_color_marker3_CH1_mode2', value);
              JSONmsg = '{"memory":"ram","flash#1":{"marker2#3":{"color":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '27') {
              localStorage.setItem('selected_position_marker3_CH1_mode2', value);
              JSONmsg = '{"memory":"ram","flash#1":{"marker2#3":{"position":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '28') {
              localStorage.setItem('selected_width_marker3_CH1_mode2', value);
              JSONmsg = '{"memory":"ram","flash#1":{"marker2#3":{"width":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '29') {
              localStorage.setItem('selected_color_marker4_CH1_mode2', value);
              JSONmsg = '{"memory":"ram","flash#1":{"marker2#4":{"color":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '30') {
              localStorage.setItem('selected_position_marker4_CH2_mode2', value);
              JSONmsg = '{"memory":"ram","flash#1":{"marker2#4":{"position":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '31') {
              localStorage.setItem('selected_width_marker4_CH1_mode2', value);
              JSONmsg = '{"memory":"ram","flash#1":{"marker2#4":{"width":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '32') {
              localStorage.setItem('selected_color_marker5_CH1_mode2', value);
              JSONmsg = '{"memory":"ram","flash#1":{"marker2#5":{"color":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '33') {
              localStorage.setItem('selected_position_marker5_CH1_mode2', value);
              JSONmsg = '{"memory":"ram","flash#1":{"marker2#5":{"position":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '34') {
              localStorage.setItem('selected_width_marker5_CH1_mode2', value);
              JSONmsg = '{"memory":"ram","flash#1":{"marker2#5":{"width":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '37') { //note: skip \n\n entries before Channnel 2:
              localStorage.setItem('selected_length_2', value);
              JSONmsg = '{"memory":"ram","flash#2":{"length":"' + value + '"}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '38') {
              localStorage.setItem('selected_brightness_2', value);
              JSONmsg = '{"memory":"ram","flash#2":{"brightness":"' + value + '"}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '39') {
              localStorage.setItem('selected_mode1_CH2', value);
              JSONmsg = '{"memory":"ram","flash#2":{"operation mode#1":"' + value + '"}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '40') {
              localStorage.setItem('selected_mode2_CH2', value);
              JSONmsg = '{"memory":"ram","flash#2":{"operation mode#2":"' + value + '"}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '41') {
              localStorage.setItem('selected_color_marker1_CH2', value);
              JSONmsg = '{"memory":"ram","flash#2":{"marker1#1":{"color":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '42') {
              localStorage.setItem('selected_position_marker1_CH2', value);
              JSONmsg = '{"memory":"ram","flash#2":{"marker1#1":{"position":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '43') {
              localStorage.setItem('selected_width_marker1_CH2', value);
              JSONmsg = '{"memory":"ram","flash#2":{"marker1#1":{"width":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '44') {
              localStorage.setItem('selected_color_marker2_CH2', value);
              JSONmsg = '{"memory":"ram","flash#2":{"marker1#2":{"color":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '45') {
              localStorage.setItem('selected_position_marker2_CH2', value);
              JSONmsg = '{"memory":"ram","flash#2":{"marker1#2":{"position":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '46') {
              localStorage.setItem('selected_width_marker2_CH2', value);
              JSONmsg = '{"memory":"ram","flash#2":{"marker1#2":{"width":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '47') {
              localStorage.setItem('selected_color_marker3_CH2', value);
              JSONmsg = '{"memory":"ram","flash#2":{"marker1#3":{"color":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '48') {
              localStorage.setItem('selected_position_marker3_CH2', value);
              JSONmsg = '{"memory":"ram","flash#2":{"marker1#3":{"position":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '49') {
              localStorage.setItem('selected_width_marker3_CH2', value);
              JSONmsg = '{"memory":"ram","flash#2":{"marker1#3":{"width":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '50') {
              localStorage.setItem('selected_color_marker4_CH2', value);
              JSONmsg = '{"memory":"ram","flash#2":{"marker1#4":{"color":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '51') {
              localStorage.setItem('selected_position_marker4_CH2', value);
              JSONmsg = '{"memory":"ram","flash#2":{"marker1#4":{"position":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '52') {
              localStorage.setItem('selected_width_marker4_CH2', value);
              JSONmsg = '{"memory":"ram","flash#2":{"marker1#4":{"width":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '53') {
              localStorage.setItem('selected_color_marker5_CH2', value);
              JSONmsg = '{"memory":"ram","flash#2":{"marker1#5":{"color":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '54') {
              localStorage.setItem('selected_position_marker5_CH2', value);
              JSONmsg = '{"memory":"ram","flash#2":{"marker1#5":{"position":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '55') {
              localStorage.setItem('selected_width_marker5_CH2', value);
              JSONmsg = '{"memory":"ram","flash#2":{"marker1#5":{"width":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '56') {
              localStorage.setItem('selected_color_marker1_CH2_mode2', value);
              JSONmsg = '{"memory":"ram","flash#2":{"marker2#1":{"color":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '57') {
              localStorage.setItem('selected_position_marker1_CH2_mode2', value);
              JSONmsg = '{"memory":"ram","flash#2":{"marker2#1":{"position":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '58') {
              localStorage.setItem('selected_width_marker1_CH2_mode2', value);
              JSONmsg = '{"memory":"ram","flash#2":{"marker2#1":{"width":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '59') {
              localStorage.setItem('selected_color_marker2_CH2_mode2', value);
              JSONmsg = '{"memory":"ram","flash#2":{"marker2#2":{"color":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '60') {
              localStorage.setItem('selected_position_marker2_CH2_mode2', value);
              JSONmsg = '{"memory":"ram","flash#2":{"marker2#2":{"position":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '61') {
              localStorage.setItem('selected_width_marker2_CH2_mode2', value);
              JSONmsg = '{"memory":"ram","flash#2":{"marker2#2":{"width":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '62') {
              localStorage.setItem('selected_color_marker3_CH2_mode2', value);
              JSONmsg = '{"memory":"ram","flash#2":{"marker2#3":{"color":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '63') {
              localStorage.setItem('selected_position_marker3_CH2_mode2', value);
              JSONmsg = '{"memory":"ram","flash#2":{"marker2#3":{"position":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '64') {
              localStorage.setItem('selected_width_marker3_CH2_mode2', value);
              JSONmsg = '{"memory":"ram","flash#2":{"marker2#3":{"width":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '65') {
              localStorage.setItem('selected_color_marker4_CH2_mode2', value);
              JSONmsg = '{"memory":"ram","flash#2":{"marker2#4":{"color":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '66') {
              localStorage.setItem('selected_position_marker4_CH2_mode2', value);
              JSONmsg = '{"memory":"ram","flash#2":{"marker2#4":{"position":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '67') {
              localStorage.setItem('selected_width_marker4_CH2_mode2', value);
              JSONmsg = '{"memory":"ram","flash#2":{"marker2#4":{"width":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '68') {
              localStorage.setItem('selected_color_marker5_CH2_mode2', value);
              JSONmsg = '{"memory":"ram","flash#2":{"marker2#5":{"color":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '69') {
              localStorage.setItem('selected_position_marker5_CH2_mode2', value);
              JSONmsg = '{"memory":"ram","flash#2":{"marker2#5":{"position":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);
            }
            if (k == '70') {
              localStorage.setItem('selected_width_marker5_CH2_mode2', value);
              JSONmsg = '{"memory":"ram","flash#2":{"marker2#5":{"width":"' + value + '"}}}';
              addtoSendQueue(JSONmsg);

              addtoSendQueue('{"memory":"ram","flash":{"power":"get"}}');// send to trigger cyclic connection check again
              setTimeout(getNextDataFromQueue, 500); //read answer of get power command to trigger cyclic connection check

              // open both channels to show user that the loaded data is not saved yet
              showChannel1Sidemenu();
              showChannel2Sidemenu();
              setTimeout(resetLoadingvariable, 7000);
              setTimeout(setLoadimage, 7000);
            }
          }
        }
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
 * Displays check image on load config data element
 */
function setLoadimage() {
  document.getElementById("loadSettings_img").src = "../images/check.png";
}

/**
 * Sets 'loadingdata' local Storage variable to false.
 */
function resetLoadingvariable() {
  localStorage.setItem('loadingdata', 'false');
}

/**
 * Save settings from localstorage variables to file
 */
function saveSettingstoFile() {
  reset_sidemenu_bgcolor();
  var file;
  var data = [];
  data.push("Channel 1: \n");
  data.push("Length:" + localStorage.getItem('selected_length') + "\n");
  data.push("Brightness:" + localStorage.getItem('selected_brightness') + "\n");
  data.push("Mode1_CH1:" + localStorage.getItem('selected_mode1_CH1') + "\n");
  data.push("Mode2_CH2:" + localStorage.getItem('selected_mode2_CH1') + "\n");
  data.push("Marker1#1_color:" + localStorage.getItem('selected_color_marker1_CH1') + "\n");
  data.push("Marker1#1_position:" + localStorage.getItem('selected_position_marker1_CH1') + "\n");
  data.push("Marker1#1_width:" + localStorage.getItem('selected_width_marker1_CH1') + "\n");
  data.push("Marker1#2_color:" + localStorage.getItem('selected_color_marker2_CH1') + "\n");
  data.push("Marker1#2_position:" + localStorage.getItem('selected_position_marker2_CH1') + "\n");
  data.push("Marker1#2_width:" + localStorage.getItem('selected_width_marker2_CH1') + "\n");
  data.push("Marker1#3_color:" + localStorage.getItem('selected_color_marker3_CH1') + "\n");
  data.push("Marker1#3_position:" + localStorage.getItem('selected_position_marker3_CH1') + "\n");
  data.push("Marker1#3_width:" + localStorage.getItem('selected_width_marker3_CH1') + "\n");
  data.push("Marker1#4_color:" + localStorage.getItem('selected_color_marker4_CH1') + "\n");
  data.push("Marker1#4_position:" + localStorage.getItem('selected_position_marker4_CH1') + "\n");
  data.push("Marker1#4_width:" + localStorage.getItem('selected_width_marker4_CH1') + "\n");
  data.push("Marker1#5_color:" + localStorage.getItem('selected_color_marker5_CH1') + "\n");
  data.push("Marker1#5_position:" + localStorage.getItem('selected_position_marker5_CH1') + "\n");
  data.push("Marker1#5_width:" + localStorage.getItem('selected_width_marker5_CH1') + "\n");
  data.push("Marker2#1_color:" + localStorage.getItem('selected_color_marker1_CH1_mode2') + "\n");
  data.push("Marker2#1_position:" + localStorage.getItem('selected_position_marker1_CH1_mode2') + "\n");
  data.push("Marker2#1_width:" + localStorage.getItem('selected_width_marker1_CH1_mode2') + "\n");
  data.push("Marker2#2_color:" + localStorage.getItem('selected_color_marker2_CH1_mode2') + "\n");
  data.push("Marker2#2_position:" + localStorage.getItem('selected_position_marker2_CH1_mode2') + "\n");
  data.push("Marker2#2_width:" + localStorage.getItem('selected_width_marker2_CH1_mode2') + "\n");
  data.push("Marker2#3_color:" + localStorage.getItem('selected_color_marker3_CH1_mode2') + "\n");
  data.push("Marker2#3_position:" + localStorage.getItem('selected_position_marker3_CH1_mode2') + "\n");
  data.push("Marker2#3_width:" + localStorage.getItem('selected_width_marker3_CH1_mode2') + "\n");
  data.push("Marker2#4_color:" + localStorage.getItem('selected_color_marker4_CH1_mode2') + "\n");
  data.push("Marker2#4_position:" + localStorage.getItem('selected_position_marker4_CH1_mode2') + "\n");
  data.push("Marker2#4_width:" + localStorage.getItem('selected_width_marker4_CH1_mode2') + "\n");
  data.push("Marker2#5_color:" + localStorage.getItem('selected_color_marker5_CH1_mode2') + "\n");
  data.push("Marker2#5_position:" + localStorage.getItem('selected_position_marker5_CH1_mode2') + "\n");
  data.push("Marker2#5_width:" + localStorage.getItem('selected_width_marker5_CH1_mode2') + "\n\n");
  data.push("Channel 2: \n");
  data.push("Length:" + localStorage.getItem('selected_length_2') + "\n");
  data.push("Brightness:" + localStorage.getItem('selected_brightness_2') + "\n");
  data.push("Mode1_CH2:" + localStorage.getItem('selected_mode1_CH2') + "\n");
  data.push("Mode2_CH2:" + localStorage.getItem('selected_mode2_CH2') + "\n");
  data.push("Marker1#1_color:" + localStorage.getItem('selected_color_marker1_CH2') + "\n");
  data.push("Marker1#1_position:" + localStorage.getItem('selected_position_marker1_CH2') + "\n");
  data.push("Marker1#1_width:" + localStorage.getItem('selected_width_marker1_CH2') + "\n");
  data.push("Marker1#2_color:" + localStorage.getItem('selected_color_marker2_CH2') + "\n");
  data.push("Marker1#2_position:" + localStorage.getItem('selected_position_marker2_CH2') + "\n");
  data.push("Marker1#2_width:" + localStorage.getItem('selected_width_marker2_CH2') + "\n");
  data.push("Marker1#3_color:" + localStorage.getItem('selected_color_marker3_CH2') + "\n");
  data.push("Marker1#3_position:" + localStorage.getItem('selected_position_marker3_CH2') + "\n");
  data.push("Marker1#3_width:" + localStorage.getItem('selected_width_marker3_CH2') + "\n");
  data.push("Marker1#4_color:" + localStorage.getItem('selected_color_marker4_CH2') + "\n");
  data.push("Marker1#4_position:" + localStorage.getItem('selected_position_marker4_CH2') + "\n");
  data.push("Marker1#4_width:" + localStorage.getItem('selected_width_marker4_CH2') + "\n");
  data.push("Marker1#5_color:" + localStorage.getItem('selected_color_marker5_CH2') + "\n");
  data.push("Marker1#5_position:" + localStorage.getItem('selected_position_marker5_CH2') + "\n");
  data.push("Marker1#5_width:" + localStorage.getItem('selected_width_marker5_CH2') + "\n");
  data.push("Marker2#1_color:" + localStorage.getItem('selected_color_marker1_CH2_mode2') + "\n");
  data.push("Marker2#1_position:" + localStorage.getItem('selected_position_marker1_CH2_mode2') + "\n");
  data.push("Marker2#1_width:" + localStorage.getItem('selected_width_marker1_CH2_mode2') + "\n");
  data.push("Marker2#2_color:" + localStorage.getItem('selected_color_marker2_CH2_mode2') + "\n");
  data.push("Marker2#2_position:" + localStorage.getItem('selected_position_marker2_CH2_mode2') + "\n");
  data.push("Marker2#2_width:" + localStorage.getItem('selected_width_marker2_CH2_mode2') + "\n");
  data.push("Marker2#3_color:" + localStorage.getItem('selected_color_marker3_CH2_mode2') + "\n");
  data.push("Marker2#3_position:" + localStorage.getItem('selected_position_marker3_CH2_mode2') + "\n");
  data.push("Marker2#3_width:" + localStorage.getItem('selected_width_marker3_CH2_mode2') + "\n");
  data.push("Marker2#4_color:" + localStorage.getItem('selected_color_marker4_CH2_mode2') + "\n");
  data.push("Marker2#4_position:" + localStorage.getItem('selected_position_marker4_CH2_mode2') + "\n");
  data.push("Marker2#4_width:" + localStorage.getItem('selected_width_marker4_CH2_mode2') + "\n");
  data.push("Marker2#5_color:" + localStorage.getItem('selected_color_marker5_CH2_mode2') + "\n");
  data.push("Marker2#5_position:" + localStorage.getItem('selected_position_marker5_CH2_mode2') + "\n");
  data.push("Marker2#5_width:" + localStorage.getItem('selected_width_marker5_CH2_mode2') + "\n\n");
  var properties = { type: 'text/plain' }; // Specify the file's mime-type.
  try {
    // Specify the filename using the File constructor, but ...
    console.log('file');
    file = new File(data, "sf-flash-config.txt", properties);
  } catch (e) {
    // ... fall back to the Blob constructor if that isn't supported. Note: File name can not be specified!
    console.log('blob');
    file = new Blob(data, properties);
  }
  var url = URL.createObjectURL(file);
  console.log(url);
  document.getElementById('btnSavesettings').href = url;
  document.getElementById('saveSettings_img').src = "../images/check.png";
  BTNSAVESETTINGS.removeAttribute('href');

}

/**
 * Load the selected page into the frame and highlight the corresponding sidemenu for Channel 1.
 */
function loadConnectpage() {
  FRAME.src = "/html/connect.html";
  reset_sidemenu_bgcolor();
  document.getElementById('connect_div').style.backgroundColor = "darkgray";
  updateLanguage();
  localStorage.setItem('selected_channel', '1');
}
function loadLengthpage_CH1() {
  FRAME.src = "/html/length.html";
  reset_sidemenu_bgcolor();
  document.getElementById('length_div').style.backgroundColor = "darkgray";
  updateLanguage();
  localStorage.setItem('selected_channel', '1');
}
function loadBrightnesspage_CH1() {
  FRAME.src = "/html/brightness.html";
  reset_sidemenu_bgcolor();
  document.getElementById('brightness_div').style.backgroundColor = "darkgray";
  updateLanguage();
  localStorage.setItem('selected_channel', '1');
}
function loadMode1page_CH1() {
  localStorage.setItem('selected_channel', '1');
  localStorage.setItem('selected_mode', '1');
  reset_sidemenu_bgcolor();
  document.getElementById('mode1_div_CH1').style.backgroundColor = "darkgray";
  FRAME.src = "/html/mode.html";
  updateLanguage();
}
function loadMode2page_CH1() {
  localStorage.setItem('selected_channel', '1');
  localStorage.setItem('selected_mode', '2');
  reset_sidemenu_bgcolor();
  document.getElementById('mode2_div_CH1').style.backgroundColor = "darkgray";
  FRAME.src = "/html/mode.html";
  updateLanguage();
}
// Sends msg to save all local storage variables to rom
// then read the ROM settings to update the sidemenu icons
function saveSettings_CH1() {
  FRAME.src = "";
  reset_sidemenu_bgcolor();
  document.getElementById('save_div').style.backgroundColor = "darkgray";
  localStorage.setItem('selected_channel', '1');

  if (BTNSAVE.classList.contains('custom-button-save')) {
    BTNSAVE.classList.remove("custom-button-save");
    BTNSAVE.classList.add("custom-button-default");
    console.log('save all settings');
  }
  if (BTNSAVE.classList.contains('active')) {
    BTNSAVE.classList.remove("active");
  }

  //TODO: Nach testphase einfügen

  addtoSendQueue('{"memory":"rom","flash#1":{"all":"ram"}}'); //write all RAM data to ROM
  console.log('send read all rom in 3,5s ....');
  setTimeout(function () { addtoSendQueue('{"memory":"rom","flash#1":{"all":"get"}}'); }, 3500); // TODO: Zeit prüfen, annahme etwa 50 ms pro befehl 40x50 ms = 2000 ms
  console.log('read FIFO after 4 s ....');
  setTimeout(getNextDataFromQueue, 4000); //  


  //TODO: Nach Testphase löschen! change state icons corresponding to local storage variables
  /*
  if (localStorage.getItem('selected_length') == '335 mm') {
    document.getElementById('length_state_icon').src = "../images/335mm_transparent.png";
  }
  if (localStorage.getItem('selected_length') == '635 mm') {
    document.getElementById('length_state_icon').src = "../images/635mm_transparent.png";
  }
  if (localStorage.getItem('selected_length') == '935 mm') {
    document.getElementById('length_state_icon').src = "../images/935mm_transparent.png";
  }
  if (localStorage.getItem('selected_length') == '1870 mm') {
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
    document.getElementById('mode1_state_icon_ch1').src = "../images/greenstripe.png";
  }
  if (localStorage.getItem('selected_mode1_CH1') == 'all red') {
    document.getElementById('mode1_state_icon_ch1').src = "../images/redstripe.png";
  }
  if (localStorage.getItem('selected_mode1_CH1') == 'runninglight') {
    document.getElementById('mode1_state_icon_ch1').src = "../images/runninglight_1.png";
  }
  if (localStorage.getItem('selected_mode1_CH1') == 'marker1') {
    document.getElementById('mode1_state_icon_ch1').src = "../images/M_transparent.png";
  }
  if (localStorage.getItem('selected_mode2_CH1') == 'all green') {
    document.getElementById('mode2_state_icon_ch1').src = "../images/greenstripe.png";
  }
  if (localStorage.getItem('selected_mode2_CH1') == 'all red') {
    document.getElementById('mode2_state_icon_ch1').src = "../images/redstripe.png";
  }
  if (localStorage.getItem('selected_mode2_CH1') == 'runninglight') {
    document.getElementById('mode2_state_icon_ch1').src = "../images/runninglight_1.png";
  }
  if (localStorage.getItem('selected_mode2_CH1') == 'marker2') {
    document.getElementById('mode2_state_icon_ch1').src = "../images/M_transparent.png";
  }
  */
}

function loadLoadpage_CH1() {
  reset_sidemenu_bgcolor();
  document.getElementById('load_div').style.backgroundColor = "darkgray";
  document.getElementById('menu_header').textContent = "Load Settings";
  localStorage.setItem('selected_channel', '1');
  setTimeout(function () { addtoSendQueue('{"memory":"ram","flash#1":{"all":"get"}}') }, 50);
  setTimeout(function () { addtoSendQueue('{"memory":"rom","flash#1":{"all":"get"}}') }, 250);
  //nur für test TODO: nach test auskommentieren!
  var RXdata = setTimeout(function () { getNextDataFromQueue() }, 400);
}
/**
 * Load the selected page into the frame and highlight the corresponding sidemenu for Channel 2
 */
function loadLengthpage_CH2() {
  FRAME.src = "/html/length.html";
  reset_sidemenu_bgcolor();
  document.getElementById('length_div_2').style.backgroundColor = "darkgray";
  updateLanguage();
  localStorage.setItem('selected_channel', '2');
}
function loadBrightnesspage_CH2() {
  FRAME.src = "/html/brightness.html";
  reset_sidemenu_bgcolor();
  document.getElementById('brightness_div_2').style.backgroundColor = "darkgray";
  updateLanguage();
  localStorage.setItem('selected_channel', '2');
}
function loadMode1page_CH2() {
  localStorage.setItem('selected_channel', '2');
  localStorage.setItem('selected_mode', '1');
  reset_sidemenu_bgcolor();
  document.getElementById('mode1_div_CH2').style.backgroundColor = "darkgray";
  FRAME.src = "/html/mode.html";
  updateLanguage();
}
function loadMode2page_CH2() {
  localStorage.setItem('selected_channel', '2');
  localStorage.setItem('selected_mode', '2');
  reset_sidemenu_bgcolor();
  document.getElementById('mode2_div_CH2').style.backgroundColor = "darkgray";
  FRAME.src = "/html/mode.html";
  updateLanguage();
}
function saveSettings_CH2() {
  FRAME.src = "";
  reset_sidemenu_bgcolor();
  document.getElementById('save_div_2').style.backgroundColor = "darkgray";
  document.getElementById('menu_header').textContent = "Save Settings";
  localStorage.setItem('selected_channel', '2');

  if (BTNSAVE_2.classList.contains('custom-button-save')) {
    BTNSAVE_2.classList.remove("custom-button-save");
    BTNSAVE_2.classList.add("custom-button-default");
    console.log('save all settings');
  }
  if (BTNSAVE_2.classList.contains('active')) {
    BTNSAVE_2.classList.remove("active");
  }

  //TODO: Nach testphase einfügen

  addtoSendQueue('{"memory":"rom","flash#2":{"all":"ram"}}'); //write all RAM data to ROM
  console.log('send read all rom in 3,5s ....');
  setTimeout(function () { addtoSendQueue('{"memory":"rom","flash#2":{"all":"get"}}'); }, 3500); // TODO: Zeit prüfen, annahme etwa 50 ms pro befehl 70x50 ms = 3500 ms
  console.log('read FIFO after 4 s ....');
  setTimeout(getNextDataFromQueue, 4000); //  


  //TODO: Nach Testphase löschen! change state icons corresponding to local storage variables
  /*
  if (localStorage.getItem('selected_length_2') == '335 mm') {
    document.getElementById('length_state_icon_2').src = "../images/335mm_transparent.png";
  }
  if (localStorage.getItem('selected_length_2') == '635 mm') {
    document.getElementById('length_state_icon_2').src = "../images/635mm_transparent.png";
  }
  if (localStorage.getItem('selected_length_2') == '935 mm') {
    document.getElementById('length_state_icon_2').src = "../images/935mm_transparent.png";
  }
  if (localStorage.getItem('selected_length_2') == '1870 mm') {
    document.getElementById('length_state_icon_2').src = "../images/1870mm_transparent.png";
  }

  if (localStorage.getItem('selected_brightness_2') == 'eco') {
    document.getElementById('brightness_state_icon_2').src = "../images/bulb_eco_transparent.png";
  }
  if (localStorage.getItem('selected_brightness_2') == 'med') {
    document.getElementById('brightness_state_icon_2').src = "../images/bulb_med_transparent.png";
  }
  if (localStorage.getItem('selected_brightness_2') == 'max') {
    document.getElementById('brightness_state_icon_2').src = "../images/bulb_max_transparent.png";
  }

  if (localStorage.getItem('selected_mode1_CH2') == 'all green') {
    document.getElementById('mode1_state_icon_ch2').src = "../images/greenstripe.png";
  }
  if (localStorage.getItem('selected_mode1_CH2') == 'all red') {
    document.getElementById('mode1_state_icon_ch2').src = "../images/redstripe.png";
  }
  if (localStorage.getItem('selected_mode1_CH2') == 'runninglight') {
    document.getElementById('mode1_state_icon_ch2').src = "../images/runninglight_1.png";
  }
  if (localStorage.getItem('selected_mode1_CH2') == 'marker1') {
    document.getElementById('mode1_state_icon_ch2').src = "../images/M_transparent.png";
  }
  if (localStorage.getItem('selected_mode2_CH2') == 'all green') {
    document.getElementById('mode2_state_icon_ch2').src = "../images/greenstripe.png";
  }
  if (localStorage.getItem('selected_mode2_CH2') == 'all red') {
    document.getElementById('mode2_state_icon_ch2').src = "../images/redstripe.png";
  }
  if (localStorage.getItem('selected_mode2_CH2') == 'runninglight') {
    document.getElementById('mode2_state_icon_ch2').src = "../images/runninglight_1.png";
  }
  if (localStorage.getItem('selected_mode2_CH2') == 'marker2') {
    document.getElementById('mode2_state_icon_ch2').src = "../images/M_transparent.png";
  }
  */
}
function loadLoadpage_CH2() {
  reset_sidemenu_bgcolor();
  document.getElementById('load_div_2').style.backgroundColor = "darkgray";
  document.getElementById('menu_header').textContent = "Load Settings";
  localStorage.setItem('selected_channel', '2');
  setTimeout(function () { addtoSendQueue('{"memory":"ram","flash#2":{"all":"get"}}') }, 50);
  setTimeout(function () { addtoSendQueue('{"memory":"rom","flash#2":{"all":"get"}}') }, 200);
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
    if (BTNSAVE.classList.contains('custom-button-default')) {
      BTNSAVE.classList.remove("custom-button-default");
      BTNSAVE.classList.add("custom-button-save");
      BTNSAVE.classList.add("active");
    }
  }
  if (channel == '2') {
    if (BTNSAVE_2.classList.contains('custom-button-default')) {
      BTNSAVE_2.classList.remove("custom-button-default");
      BTNSAVE_2.classList.add("custom-button-save");
      BTNSAVE_2.classList.add("active");
    }
  }
}
// service worker setup
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").then(registration => {
    console.log("SW Registered!");
    //console.log(registration);
  }).catch(error => {
    console.log("SW Registration failed!");
    console.log(error);
  })
} else {
  console.log("Service Worker not supported");
}


/** Sets up event listener for serial connection to USB-Dongle
 *  */
async function connectionstateUSB() {
  navigator.serial.addEventListener('connect', (e) => {
    // Connect to `e.target` or add it to a list of available ports.
    localStorage.setItem('usb_connected', 'true');
    updateLanguage();
    console.log("connected to USB serial");
  });

  // on disconnetion of usb device change state text, switch to connect html and delete stored device address, reset connection state icon
  navigator.serial.addEventListener('disconnect', (e) => {
    // Remove `e.target` from the list of available ports.
    localStorage.setItem('usb_connected', 'false');
    updateLanguage();
    console.log("disconnected USB serial");
    location.reload(); // reload of page to reset serial connection on connection failure
  });
}


/**
 * Check Server Connectivity
 * @returns 
 */
async function webserverstate() {
  $.ajax({
    url: "http://127.0.0.1:8887/", //server url localhost: http://127.0.0.1:8887/ or http://nico-eggert.github.io/
    cache: false,
    async: false,
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      // some error code.
      console.log('no connection to webserver');
      // possible display of connetion state in html element
      //document.getElementById('server_status').innerHTML = 'Not Available';
    },
    success: function (html) {
      // do something.
      console.log('connection to webserver available');
      // possible display of connetion state in html element
      //document.getElementById('server_status').innerHTML = 'Available';
    }
  });
}


/**
 * Starts connection to the serial interface.
 */
async function connectSerial() {
  XBee3.begin();
}

/**
 * Sends a message to the deviceadress and verifies if a return message is send within 500ms.
 * Returns a bool state to show the connection state.
 * Deactivates channels in sidemenu and loads connection page.
 * @returns state : true -> connection running , false -> connection lost
 */
async function checkconnection() {
  var state;
  addtoSendQueue('{"memory":"ram","flash":{"power":"get"}}');
  let delayres = await delay(500);
  getNextDataFromQueue(); // read Fifo data, changes constate variable
  delayres = await delay(500);
  state = constate;


  state = true;//TODO: wieder löschen nach test, nur um verbindung immer aufrecht zu halten in testphase

  if (state) {
    return state;
  }
  else {// connection lost
    console.log("connection lost");
    // reset sidemenu icons to X
    document.getElementById('length_state_icon').src = 'images/x.png';
    document.getElementById('brightness_state_icon').src = 'images/x.png';
    document.getElementById('mode1_state_icon_ch1').src = 'images/x.png';
    document.getElementById('mode2_state_icon_ch1').src = 'images/x.png';
    document.getElementById('length_state_icon_2').src = 'images/x.png';
    document.getElementById('brightness_state_icon_2').src = 'images/x.png';
    document.getElementById('mode1_state_icon_ch2').src = 'images/x.png';
    document.getElementById('mode2_state_icon_ch2').src = 'images/x.png';
    location.reload(); // reload of page to reset serial connection on connection failure
    return state;
  }
}

/**
 * Set a delay time until follwing code gets executed.
 * @param {number} delayInms 
 * @returns 
 */
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
 * Updates constate variable which showcases if connetion to mac address device is still running.
 */
//TODO: add channel 2 functions
async function getNextDataFromQueue() {
  //console.log('getDatafromQueue');

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
          if (constate == false) {
            console.log('constate in init false -> start cyclicConnectionCheck');
            cyclicConnectionCheck(); // start connection check
          }
          constate = true;
        }
        if (RXData.JSONDocument["flash"]["power"] == 'off') {
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
          if (RXData.JSONDocument["flash#1"]["operation mode#1"] == 'marker1') {
            localStorage.setItem('selected_mode1_CH1', 'marker1');
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
          if (RXData.JSONDocument["flash#1"]["operation mode#2"] == 'marker2') {
            localStorage.setItem('selected_mode2_CH1', 'marker2');
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
            document.getElementById('mode1_state_icon_ch1').src = "../images/greenstripe.png";
          }
          if (RXData.JSONDocument["flash#1"]["operation mode#1"] == 'all red') {
            document.getElementById('mode1_state_icon_ch1').src = "../images/redstripe.png";
          }
          if (RXData.JSONDocument["flash#1"]["operation mode#1"] == 'runninglight') {
            document.getElementById('mode1_state_icon_ch1').src = "../images/runninglight_1.png";
          }
          if (RXData.JSONDocument["flash#1"]["operation mode#1"] == 'marker1') {
            document.getElementById('mode1_state_icon_ch1').src = "../images/M_transparent.png";
          }
          /*
          if (RXData.JSONDocument["flash#1"]["operation mode#1"] == 'marker2') {
            document.getElementById('mode1_state_icon_ch1').src = "../images/M_transparent.png";
          }
          */
        }
        // operation mode 2 channel 1
        if (RXData.JSONDocument["flash#1"]["operation mode#2"]) {
          if (RXData.JSONDocument["flash#1"]["operation mode#2"] == 'all off') {
            document.getElementById('mode2_state_icon_ch1').src = "../images/runninglight_empty.png";
          }
          if (RXData.JSONDocument["flash#1"]["operation mode#2"] == 'all green') {
            document.getElementById('mode2_state_icon_ch1').src = "../images/greenstripe.png";
          }
          if (RXData.JSONDocument["flash#1"]["operation mode#2"] == 'all red') {
            document.getElementById('mode2_state_icon_ch1').src = "../images/redstripe.png";
          }
          if (RXData.JSONDocument["flash#1"]["operation mode#2"] == 'runninglight') {
            document.getElementById('mode2_state_icon_ch1').src = "../images/runninglight_1.png";
          }
          /*
          if (RXData.JSONDocument["flash#1"]["operation mode#2"] == 'marker1') {
            document.getElementById('mode2_state_icon_ch1').src = "../images/M_transparent.png";
          }
          */
          if (RXData.JSONDocument["flash#1"]["operation mode#2"] == 'marker2') {
            document.getElementById('mode2_state_icon_ch1').src = "../images/M_transparent.png";
          }
        }
      }
    }
    // Channel 2
    // Load RAM settings to local storage variables
    if (RXData.JSONDocument["flash#2"]) {
      if (RXData.JSONDocument["memory"] == "ram") {
        console.log("ram");

        // length
        if (RXData.JSONDocument["flash#2"]["length"]) {
          if (RXData.JSONDocument["flash#2"]["length"] == '335 mm') {
            localStorage.setItem('selected_length_2', '335 mm');
          }
          if (RXData.JSONDocument["flash#2"]["length"] == '635 mm') {
            localStorage.setItem('selected_length_2', '635 mm');
          }
          if (RXData.JSONDocument["flash#2"]["length"] == '935 mm') {
            localStorage.setItem('selected_length_2', '935 mm');
          }
          if (RXData.JSONDocument["flash#2"]["length"] == '1870 mm') {
            localStorage.setItem('selected_length_2', '1870 mm');
          }
        }
        // brightness
        if (RXData.JSONDocument["flash#2"]["brightness"]) {
          if (RXData.JSONDocument["flash#2"]["brightness"] == 'eco') {
            localStorage.setItem('selected_brightness_2', 'eco');
          }
          if (RXData.JSONDocument["flash#2"]["brightness"] == 'medium') {
            localStorage.setItem('selected_brightness_2', 'med');
          }
          if (RXData.JSONDocument["flash#2"]["brightness"] == 'max') {
            localStorage.setItem('selected_brightness_2', 'max');
          }
        }
        // operation mode 1 channel 2
        if (RXData.JSONDocument["flash#2"]["operation mode#1"]) {
          if (RXData.JSONDocument["flash#2"]["operation mode#1"] == 'all green') {
            localStorage.setItem('selected_mode1_CH2', 'all green');
          }
          if (RXData.JSONDocument["flash#2"]["operation mode#1"] == 'all red') {
            localStorage.setItem('selected_mode1_CH2', 'all red');
          }
          if (RXData.JSONDocument["flash#2"]["operation mode#1"] == 'runninglight') {
            localStorage.setItem('selected_mode1_CH2', 'runninglight');
          }
          if (RXData.JSONDocument["flash#2"]["operation mode#2"] == 'marker1') {
            localStorage.setItem('selected_mode1_CH2', 'marker1');
          }
        }
        // operation mode 2 channel 2
        if (RXData.JSONDocument["flash#2"]["operation mode#2"]) {
          if (RXData.JSONDocument["flash#2"]["operation mode#2"] == 'all green') {
            localStorage.setItem('selected_mode2_CH2', 'all green');
          }
          if (RXData.JSONDocument["flash#2"]["operation mode#2"] == 'all red') {
            localStorage.setItem('selected_mode2_CH2', 'all red');
          }
          if (RXData.JSONDocument["flash#2"]["operation mode#2"] == 'runninglight') {
            localStorage.setItem('selected_mode2_CH2', 'runninglight');
          }
          if (RXData.JSONDocument["flash#2"]["operation mode#2"] == 'marker2') {
            localStorage.setItem('selected_mode2_CH2', 'marker2');
          }
        }
      }
      // Set sidemenu icons to ROM settings
      if (RXData.JSONDocument["memory"] == "rom") {
        console.log("rom");
        // length
        if (RXData.JSONDocument["flash#2"]["length"]) {
          if (RXData.JSONDocument["flash#2"]["length"] == '335 mm') {
            document.getElementById('length_state_icon_2').src = "../images/335mm_transparent.png";
          }
          if (RXData.JSONDocument["flash#2"]["length"] == '635 mm') {
            document.getElementById('length_state_icon_2').src = "../images/635mm_transparent.png";
          }
          if (RXData.JSONDocument["flash#2"]["length"] == '935 mm') {
            document.getElementById('length_state_icon_2').src = "../images/935mm_transparent.png";
          }
          if (RXData.JSONDocument["flash#2"]["length"] == '1870 mm') {
            document.getElementById('length_state_icon_2').src = "../images/1870mm_transparent.png";
          }
        }
        // brightness
        if (RXData.JSONDocument["flash#2"]["brightness"]) {
          if (RXData.JSONDocument["flash#2"]["brightness"] == 'eco') {
            document.getElementById('brightness_state_icon_2').src = "../images/bulb_eco_transparent.png";
          }
          if (RXData.JSONDocument["flash#2"]["brightness"] == 'medium') {
            document.getElementById('brightness_state_icon_2').src = "../images/bulb_med_transparent.png";
          }
          if (RXData.JSONDocument["flash#2"]["brightness"] == 'max') {
            document.getElementById('brightness_state_icon_2').src = "../images/bulb_max_transparent.png";
          }
        }
        // operation mode 1 channel 2
        if (RXData.JSONDocument["flash#2"]["operation mode#1"]) {
          if (RXData.JSONDocument["flash#2"]["operation mode#1"] == 'all off') {
            document.getElementById('mode1_state_icon_ch2').src = "../images/runninglight_empty.png";
          }
          if (RXData.JSONDocument["flash#2"]["operation mode#1"] == 'all green') {
            document.getElementById('mode1_state_icon_ch2').src = "../images/greenstripe.png";
          }
          if (RXData.JSONDocument["flash#2"]["operation mode#1"] == 'all red') {
            document.getElementById('mode1_state_icon_ch2').src = "../images/redstripe.png";
          }
          if (RXData.JSONDocument["flash#2"]["operation mode#1"] == 'runninglight') {
            document.getElementById('mode1_state_icon_ch2').src = "../images/runninglight_1.png";
          }
          if (RXData.JSONDocument["flash#2"]["operation mode#1"] == 'marker1') {
            document.getElementById('mode1_state_icon_ch2').src = "../images/M_transparent.png";
          }
          /*
          if (RXData.JSONDocument["flash#2"]["operation mode#1"] == 'marker2') {
            document.getElementById('mode1_state_icon_ch2').src = "../images/M_transparent.png";
          }
          */
        }
        // operation mode 2 channel 2
        if (RXData.JSONDocument["flash#2"]["operation mode#2"]) {
          if (RXData.JSONDocument["flash#2"]["operation mode#2"] == 'all off') {
            document.getElementById('mode2_state_icon_ch2').src = "../images/runninglight_empty.png";
          }
          if (RXData.JSONDocument["flash#2"]["operation mode#2"] == 'all green') {
            document.getElementById('mode2_state_icon_ch2').src = "../images/greenstripe.png";
          }
          if (RXData.JSONDocument["flash#2"]["operation mode#2"] == 'all red') {
            document.getElementById('mode2_state_icon_ch2').src = "../images/redstripe.png";
          }
          if (RXData.JSONDocument["flash#2"]["operation mode#2"] == 'runninglight') {
            document.getElementById('mode2_state_icon_ch2').src = "../images/runninglight_1.png";
          }
          /*
          if (RXData.JSONDocument["flash#2"]["operation mode#2"] == 'marker1') {
            document.getElementById('mode2_state_icon_ch2').src = "../images/M_transparent.png";
          }
          */
          if (RXData.JSONDocument["flash#2"]["operation mode#2"] == 'marker2') {
            document.getElementById('mode2_state_icon_ch2').src = "../images/M_transparent.png";
          }
        }
      }
    }

    data_count = XBee3.RxQueue.getLength(); // update remaining number of messages in FIFO
    if (data_count > 50) {
      alert('Error: Message overflow. 50+ messages in FIFO!');
    }
  }
}

/**
 * Sends the first string command in the queue array
 * use stringdata_array with all strings that should be send
 */
async function sendXBeeData() {
  let address = localStorage.getItem('deviceaddress');
  if (address == '') {
    //do nothing
    //console.log('no device address existing');
  }
  else {
    if (stringdata_array[0] === undefined) {
      //do nothing
      //console.log('ERROR: fct[sendXBeeData] array undefined');
    }
    else {
      const TXData = new XBeeData();
      TXData.MACAddress.set(address);
      console.log('Send Data String: ', stringdata_array[0]);
      TXData.JSONDocument = JSON.parse(stringdata_array[0]); // use first entry
      //console.log('Send Data: ', TXData);
      XBee3.writeJSONDocument(TXData);
      stringdata_array.shift(); // remove first entry
      messages = stringdata_array.length; // update message count
      //console.log('messages in SEND queue: ', messages);
    }
  }
}

/**
 * adds the string_element to the end of the send queue
 * @param {command} string_element string element representing the json format command
 */
function addtoSendQueue(string_element) {
  var count_entries = stringdata_array.length;
  stringdata_array[count_entries] = string_element;
}

// send first data in SendQueue periodically
setInterval(sendXBeeData, 100);






