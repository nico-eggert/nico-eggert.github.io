var pbcount = 0; //Counter for connection process 0-100.
var functionlock = false; // while functionlock gets set to true by one of the functions, all ohter functions cant start.

/**
 * Setup for button click event of connection buttons
 */
const btnDeviceConnect = document.getElementById('btnDeviceConnect');
//const btnDeviceConnect = document.getElementById('btnDeviceConnect');
if (btnDeviceConnect != null) {
  btnDeviceConnect.addEventListener('click', clickSerialConnect);
  //btnDeviceConnect.addEventListener('click', clickConnect);
}


/**
 * Start connection process -> Establish serial connection to USB device.
 * Enable device connection. Check every 1s for broadcast messages in Serial FIFO.
 * On new message, deviceaddress gets set and clickConnect() gets started.
 */
async function clickSerialConnect() {
  if (functionlock == false) {
    functionlock = true;
    parent.connectSerial();
    document.getElementById('spinner').style.visibility = 'visible';
    while (localStorage.getItem('deviceaddress') == '') {
      setTimeout(function () { parent.getNextDataFromQueue() }, 200);
      $("#txt_progressbarstep").text('Suche Gerät');
      delayres = await parent.delay(1000);
    }
    console.log('DEVICE ADDRESS IS:', localStorage.getItem('deviceaddress'));
    // display device address
    document.getElementById('devicename').value = localStorage.getItem('deviceaddress');
    // Enable device connection
    /*
    var elem = document.getElementById('btnDeviceConnect');
    if (elem.classList.contains('disabled')) {
      elem.classList.remove('disabled');
    }
    */
    // set local storage variable
    localStorage.setItem('usb_connected', 'true');
    $("#txt_progressbarstep").text('');
    functionlock = false;
    clickConnect();
  }
}



/**
 * Checks connection to device by sending a message (MEMS_B out) and checking if a response message is send.
 * Then starts data loading process for updating rom/ram data.
 */
async function clickConnect() {
  var connectionstate = false;
  connectionstate = parent.checkconnection();
  console.log('timeout start progressbar');
  var delayres = await parent.delay(1500);
  console.log('check connectionstate before animation: ', connectionstate);
  document.getElementById('spinner').style.animation = "colorchange 2s linear infinite";
  connectionstate.then(dataLoading());
}

/**
 * Commands to read all rom and all ram data get send.
 * Current Step text gets displayed.
 * Unlocks sidemenu buttons.
 * Starts cyclic connection check.
 */

function dataLoading() {
  if (pbcount < 100) {
    pbcount = pbcount + 1;
    //$(".progress-bar").css("width", pbcount + "%").text(pbcount + "%");
  }
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
    // hide loader
    document.getElementById('spinner').style.visibility = 'hidden';
  }

  // Wait for sometime before running this script again
  if (pbcount != 100) {
    setTimeout(dataLoading, 50);
  }
  else {
    // do nothing
  }
}







