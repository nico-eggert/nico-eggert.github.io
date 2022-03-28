var pbcount = 0; //ProgressBarCounter for animation of the percentage

/**
 * Setup for button click event of connection buttons
 */
const btnSerialConnect = document.getElementById('btnSerialConnect');
const btnDeviceConnect = document.getElementById('btnDeviceConnect');
if (btnSerialConnect != null) {
  btnSerialConnect.addEventListener('click', clickSerialConnect);
  btnDeviceConnect.addEventListener('click', clickConnect);
}


/**
 * Start connection process -> Establish serial connection to USB device.
 * Enable device connection.
 */
function clickSerialConnect() {
  parent.connectSerial();
  localStorage.setItem('deviceaddress', document.getElementById('devicename').value);
  console.log('deviceadress: ', localStorage.getItem('deviceaddress'));
  // Enable device connection
  var elem = document.getElementById('btnDeviceConnect');
  if (elem.classList.contains('disabled')) {
    elem.classList.remove('disabled');
  }
  // set local storage variable
  localStorage.setItem('usb_connected', 'true');
}

/**
 * Checks connection to device by sending a message and checking if a response message is send.
 * Then starts animation of progressbar.
 */
async function clickConnect() {
  document.getElementById('progressbar_div').style.visibility = "visible";
  var connectionstate = false;
  connectionstate = parent.checkconnection();
  console.log('timeout start progressbar');
  var delayres = await parent.delay(1500);
  console.log('check connectionstate before animation: ', connectionstate);
  connectionstate.then(animateProgressbar());
}
/**
 * Animation function for the progress bar
 * Fills the bar and changes the shown percentage and a text to display the current connection step
 * Changes the status element to show connection state
 */

function animateProgressbar() {
  if (pbcount < 100) {
    pbcount = pbcount + 1;
    $(".progress-bar").css("width", pbcount + "%").text(pbcount + "%");
  }
  /*
  if (pbcount == 20) {
    //TODO: Add function call usb-connection
    if (localStorage.getItem('selected_language') == 'en') {
      $("#txt_progressbarstep").text("Connection to USB-Dongle successful");
    }
    if (localStorage.getItem('selected_language') == 'de') {
      $("#txt_progressbarstep").text("Verbindung USB-Dongle erfolgreich");
    }
  }
  if (pbcount == 40) {
    //TODO: Add function call search for and connect to SF-Flash device
    if (localStorage.getItem('selected_language') == 'en') {
      $("#txt_progressbarstep").text("Connection to SF-Flash successful");
    }
    if (localStorage.getItem('selected_language') == 'de') {
      $("#txt_progressbarstep").text("SF-Flash Verbindung erfolgreich");
    }
  }
  */
  if (pbcount == 10) {
    parent.addtoSendQueue('{"memory":"rom","flash#1":{"all":"get"}}');
    parent.addtoSendQueue('{"memory":"rom","flash#2":{"all":"get"}}');
    if (localStorage.getItem('selected_language') == 'en') {
      $("#txt_progressbarstep").text("Request ROM data from SF-Flash");
    }
    if (localStorage.getItem('selected_language') == 'de') {
      $("#txt_progressbarstep").text("Anfragen der SF-Flash Daten");
    }
  }
  if (pbcount == 50) {
    parent.addtoSendQueue('{"memory":"ram","flash#1":{"all":"get"}}');
    parent.addtoSendQueue('{"memory":"ram","flash#2":{"all":"get"}}');
    setTimeout(function () { parent.getNextDataFromQueue() }, 200);
    if (localStorage.getItem('selected_language') == 'en') {
      $("#txt_progressbarstep").text("Request RAM data from SF-Flash");
    }
    if (localStorage.getItem('selected_language') == 'de') {
      $("#txt_progressbarstep").text("Anfragen der SF-Flash  RAM-Daten");
    }
  }
  if (pbcount == 100) {
    parent.cyclicConnectionCheck();
    if (localStorage.getItem('selected_language') == 'en') {
      $("#txt_progressbarstep").text("Success");
    }
    if (localStorage.getItem('selected_language') == 'de') {
      $("#txt_progressbarstep").text("Auslesen erfolgreich");
    }
    var elem = window.parent.document.getElementById('connect_state_icon');
    elem.src = "images/check.png";
    // enable sidemenu buttons
    btnChannel = parent.document.getElementById('btnChannel');
    if (btnChannel.classList.contains('disabled')) {
      btnChannel.classList.remove('disabled');
    }
    btnChannel_2 = parent.document.getElementById('btnChannel_2');
    if (btnChannel_2.classList.contains('disabled')) {
      btnChannel_2.classList.remove('disabled');
    }
    btnLocalconfig = parent.document.getElementById('btnLocal_config');
    if (btnLocalconfig.classList.contains('disabled')) {
      btnLocalconfig.classList.remove('disabled');
    }
    window.parent.document.getElementById('frame').src = "";
  }

  // Wait for sometime before running this script again
  if (pbcount != 100) {
    setTimeout(animateProgressbar, 50);
  }
  else {
    // do nothing
  }
}







