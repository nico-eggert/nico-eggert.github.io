var lang;
var selectedlanguage = 'de';

var de = {
  title: "Vetter Flash Konfiguration",
  usb_status_disconnected: "Status: Keine Verbindung",
  usb_status_connected: "Status: Verbunden",
  loadsettings: "Einstellungen laden",
  savesettings: "Einstellungen speichern",
  menu_header: "Verbindung",
  btn_connect: "Verbinden",
  btnChannel: "LED Band 1",
  btnLength: "Länge",
  btnBrightness: "Helligkeit",
  btnMode_1_CH1: "Modus 1",
  btnMode_2_CH1: "Modus 2",
  btnSave: "Speichern",
  btnLoad: "Laden",
  btnChannel_2: "LED Band 2",
  btnLength_2: "Länge",
  btnBrightness_2: "Helligkeit",
  btnMode_1_CH2: "Modus 1",
  btnMode_2_CH2: "Modus 2",
  btnSave_2: "Speichern",
  btnLoad_2: "Laden",
  btnLocal_config: "Lokale Konfigurationsdaten",
  device_txt: "MAC-Adresse:",
  btnSerialConnect: "USB verbinden",
  btnDeviceConnect: "Gerät verbinden",
  mode_txt: "Modus",
  color_dropdown_btn: "Farbe",
  green_txt: "Grün",
  red_txt: "Rot",
  blue_txt: "Blau",
  yellow_txt: "Gelb",
  white_txt: "Weiß",
  cyan_txt: "Cyan",
  magenta_txt: "Magenta",
  position_placeholder: "Position (mm)",
  width_placeholder: "Breite (mm)"
}
var en = {
  title: "Vetter Flash Configuration",
  usb_status_disconnected: "State: Disconnected",
  usb_status_connected: "State: Connected",
  loadsettings: "Load settings",
  savesettings: "Save settings",
  menu_header: "Connection",
  btn_connect: "Connect",
  btnChannel: "LED band 1",
  btnLength: "Length",
  btnBrightness: "Brightness",
  btnMode_1_CH1: "Mode 1",
  btnMode_2_CH1: "Mode 2",
  btnSave: "Save",
  btnLoad: "Load",
  btnChannel_2: "LED band 2",
  btnLength_2: "Length",
  btnBrightness_2: "Brightness",
  btnMode_1_CH2: "Mode 1",
  btnMode_2_CH2: "Mode 2",
  btnSave_2: "Save",
  btnLoad_2: "Load",
  btnLocal_config: "Local config data",
  device_txt: "MAC Adress:",
  btnSerialConnect: "Connect USB",
  btnDeviceConnect: "Connect Device",
  mode_txt: "Mode",
  color_dropdown_btn: "Color",
  green_txt: "Green",
  red_txt: "Red",
  blue_txt: "Blue",
  yellow_txt: "Yellow",
  white_txt: "White",
  cyan_txt: "Cyan",
  magenta_txt: "Magenta",
  position_placeholder: "Position (mm)",
  width_placeholder: "Width (mm)"
}


// update language, and storage variables by changes on this site
$('#select_de').on('click', function () {
  document.getElementById('language_image').src = "/images/Flaggen/de.png";
  localStorage.setItem('selected_language', 'de');
  lang = de;
  updateLanguage();
});
$('#select_en').on('click', function () {
  document.getElementById('language_image').src = "/images/Flaggen/gb.png";
  localStorage.setItem('selected_language', 'en');
  lang = en;
  updateLanguage();
});

// update Language elements if language gets switched on other side. Looking for changes in storage variables.
// Note: Only gets triggerd if language change occurs on different iframe site than connect.html!!!
window.addEventListener('storage', function (event) {
  updateLanguage();
});


// reads current browser language on page load
var language = window.navigator.userLanguage || window.navigator.language;
// sets language variable and updates all text fields to selected language
if (localStorage.getItem('selected_language') == '') {
  if (language.indexOf('de') !== -1) {
    selectedlanguage = 'de';
    localStorage.setItem('selected_language', 'de');
    lang = de;
  } else {
    selectedlanguage = 'en';
    localStorage.setItem('selected_language', 'en');
    lang = en;
  }
}
console.log('Browser language is', selectedlanguage), '.';
updateLanguage();

function updateLanguage() {

  document.getElementById('title_txt').innerHTML = lang.title;
  if (localStorage.getItem('usb_connected') == 'false') {
    document.getElementById('usb_status_txt').innerHTML = lang.usb_status_disconnected;
  }
  if (localStorage.getItem('usb_connected') == 'true') {
    document.getElementById('usb_status_txt').innerHTML = lang.usb_status_connected;
    var elem = document.getElementById('usb_status_txt');
    if (elem.classList.contains('disabled')) {
      elem.classList.remove('disabled');
    }
  }
  document.getElementById('btnLoadsettings').innerHTML = lang.loadsettings;
  document.getElementById('btnSavesettings').innerHTML = lang.savesettings;
  document.getElementById('menu_header').innerHTML = lang.menu_header;
  document.getElementById('btnConnect').innerHTML = lang.btn_connect;
  document.getElementById('btnChannel').innerHTML = lang.btnChannel;
  document.getElementById('btnLength').innerHTML = lang.btnLength;
  document.getElementById('btnBrightness').innerHTML = lang.btnBrightness;
  document.getElementById('btnMode_1_CH1').innerHTML = lang.btnMode_1_CH1;
  document.getElementById('btnMode_2_CH1').innerHTML = lang.btnMode_2_CH1;
  document.getElementById('btnSave').innerHTML = lang.btnSave;
  document.getElementById('btnLoad').innerHTML = lang.btnLoad;
  document.getElementById('btnChannel_2').innerHTML = lang.btnChannel_2;
  document.getElementById('btnLength_2').innerHTML = lang.btnLength_2;
  document.getElementById('btnBrightness_2').innerHTML = lang.btnBrightness_2;
  document.getElementById('btnMode_1_CH2').innerHTML = lang.btnMode_1_CH2;
  document.getElementById('btnMode_2_CH2').innerHTML = lang.btnMode_2_CH2;
  document.getElementById('btnSave_2').innerHTML = lang.btnSave_2;
  document.getElementById('btnLoad_2').innerHTML = lang.btnLoad_2;
  document.getElementById('btnLocal_config').innerHTML = lang.btnLocal_config;
  // FRAME elements with images
  var frameDoc = FRAME.contentDocument ? frame.contentDocument : frame.contentWindow.document;
  if (FRAME.src == 'https://nico-eggert.github.io/html/connect.html') {
    frameDoc.getElementById('device_txt').innerHTML = lang.device_txt;
    frameDoc.getElementById('btnSerialConnect').innerHTML = '<image style="width: 8%; height: 8%; float:left;" src="../images/plug.png">' + lang.btnSerialConnect + '</image>';
    frameDoc.getElementById('btnDeviceConnect').innerHTML = '<image style="width: 8%; height: 8%; float:left;" src="../images/plug.png">' + lang.btnDeviceConnect + '</image>';
  }
  if (document.getElementById('frame').src == 'https://nico-eggert.github.io/html/mode.html') {
    frameDoc.getElementById('mode_txt').innerHTML = lang.mode_txt;
    // Colors 1
    frameDoc.getElementById('color_dropdown_btn1').innerHTML = lang.color_dropdown_btn;
    frameDoc.getElementById('green_txt_1').innerHTML = lang.green_txt;
    frameDoc.getElementById('red_txt_1').innerHTML = lang.red_txt;
    frameDoc.getElementById('blue_txt_1').innerHTML = lang.blue_txt;
    frameDoc.getElementById('yellow_txt_1').innerHTML = lang.yellow_txt;
    frameDoc.getElementById('white_txt_1').innerHTML = lang.white_txt;
    frameDoc.getElementById('cyan_txt_1').innerHTML = lang.cyan_txt;
    frameDoc.getElementById('magenta_txt_1').innerHTML = lang.magenta_txt;
    frameDoc.getElementsByName('marker_1_pos_input')[0].placeholder = lang.position_placeholder;
    frameDoc.getElementsByName('marker_1_width_input')[0].placeholder = lang.width_placeholder;
    // Colors 2
    frameDoc.getElementById('color_dropdown_btn2').innerHTML = lang.color_dropdown_btn;
    frameDoc.getElementById('green_txt_2').innerHTML = lang.green_txt;
    frameDoc.getElementById('red_txt_2').innerHTML = lang.red_txt;
    frameDoc.getElementById('blue_txt_2').innerHTML = lang.blue_txt;
    frameDoc.getElementById('yellow_txt_2').innerHTML = lang.yellow_txt;
    frameDoc.getElementById('white_txt_2').innerHTML = lang.white_txt;
    frameDoc.getElementById('cyan_txt_2').innerHTML = lang.cyan_txt;
    frameDoc.getElementById('magenta_txt_2').innerHTML = lang.magenta_txt;
    frameDoc.getElementsByName('marker_2_pos_input')[0].placeholder = lang.position_placeholder;
    frameDoc.getElementsByName('marker_2_width_input')[0].placeholder = lang.width_placeholder;
    // Colors 3
    frameDoc.getElementById('color_dropdown_btn3').innerHTML = lang.color_dropdown_btn;
    frameDoc.getElementById('green_txt_3').innerHTML = lang.green_txt;
    frameDoc.getElementById('red_txt_3').innerHTML = lang.red_txt;
    frameDoc.getElementById('blue_txt_3').innerHTML = lang.blue_txt;
    frameDoc.getElementById('yellow_txt_3').innerHTML = lang.yellow_txt;
    frameDoc.getElementById('white_txt_3').innerHTML = lang.white_txt;
    frameDoc.getElementById('cyan_txt_3').innerHTML = lang.cyan_txt;
    frameDoc.getElementById('magenta_txt_3').innerHTML = lang.magenta_txt;
    frameDoc.getElementsByName('marker_3_pos_input')[0].placeholder = lang.position_placeholder;
    frameDoc.getElementsByName('marker_3_width_input')[0].placeholder = lang.width_placeholder;
    // Colors 4
    frameDoc.getElementById('color_dropdown_btn4').innerHTML = lang.color_dropdown_btn;
    frameDoc.getElementById('green_txt_4').innerHTML = lang.green_txt;
    frameDoc.getElementById('red_txt_4').innerHTML = lang.red_txt;
    frameDoc.getElementById('blue_txt_4').innerHTML = lang.blue_txt;
    frameDoc.getElementById('yellow_txt_4').innerHTML = lang.yellow_txt;
    frameDoc.getElementById('white_txt_4').innerHTML = lang.white_txt;
    frameDoc.getElementById('cyan_txt_4').innerHTML = lang.cyan_txt;
    frameDoc.getElementById('magenta_txt_4').innerHTML = lang.magenta_txt;
    frameDoc.getElementsByName('marker_4_pos_input')[0].placeholder = lang.position_placeholder;
    frameDoc.getElementsByName('marker_4_width_input')[0].placeholder = lang.width_placeholder;
    // Colors 5
    frameDoc.getElementById('color_dropdown_btn5').innerHTML = lang.color_dropdown_btn;
    frameDoc.getElementById('green_txt_5').innerHTML = lang.green_txt;
    frameDoc.getElementById('red_txt_5').innerHTML = lang.red_txt;
    frameDoc.getElementById('blue_txt_5').innerHTML = lang.blue_txt;
    frameDoc.getElementById('yellow_txt_5').innerHTML = lang.yellow_txt;
    frameDoc.getElementById('white_txt_5').innerHTML = lang.white_txt;
    frameDoc.getElementById('cyan_txt_5').innerHTML = lang.cyan_txt;
    frameDoc.getElementById('magenta_txt_5').innerHTML = lang.magenta_txt;
    frameDoc.getElementsByName('marker_5_pos_input')[0].placeholder = lang.position_placeholder;
    frameDoc.getElementsByName('marker_5_width_input')[0].placeholder = lang.width_placeholder;
  }

}
