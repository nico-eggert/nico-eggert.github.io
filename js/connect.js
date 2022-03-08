//let port;
//let checkserverstate;
var pbcount = 0; //ProgressBarCounter for animation of the percentage
//var serialconnected = false; // check if device is connected to serial port

/**
 * Setup for button click event of connection buttons
 */
const btnSerialConnect = document.getElementById('btnSerialConnect');
const btnDeviceConnect = document.getElementById('btnDeviceConnect');
if (btnSerialConnect != null) {
  btnSerialConnect.addEventListener('click', clickSerialConnect);
  btnDeviceConnect.addEventListener('click', clickConnect);
}

//check serial support
if ("serial" in navigator) {
  //console.log("Serial supported")
}
else {
  //console.log("Serial not supported")
}


  
 

/*
// connection button function
async function connect() {
  console.log('async function connect');



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
  }).then(toggle_serialconstate());
}
*/
/*
function toggle_serialconstate() {
  if (serialconnected == true) {
    serialconnected = false;
  }
  else {
    serialconnected = true;
  }
}
*/

/*
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
 * Start connection process -> Establish serial connection to USB device.
 * Enable device connection.
 */
function clickSerialConnect() {
  parent.connectSerial();
  localStorage.setItem('deviceaddress', document.getElementById('devicename').value);
  console.log('deviceadress: ', localStorage.getItem('deviceaddress'));
  // Enable device connection
  var elem=document.getElementById('btnDeviceConnect');
  if(elem.classList.contains('disabled')){
    elem.classList.remove('disabled');
  }
  // set local storage variable
  localStorage.setItem('usb_connected','true');
}

/**
 * Checks connection to device by sending a message and checking if a response message is send.
 * Then starts animation of progressbar.
 */
async function clickConnect(){
  document.getElementById('progressbar_div').style.visibility="visible";
  var connectionstate = false;
  connectionstate = parent.checkconnection();
  console.log('timeout start progressbar');
  var delayres =await parent.delay(1500);
  console.log('check connectionstate before animation: ', connectionstate);
  connectionstate.then(animateProgressbar());
}
/*
async function clickReadserial() {
  readSerial();
}

async function clickSendmsg() {
  writeSerial();
}
*/
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
  if (pbcount == 25) {
    //TODO: Add function call usb-connection
    if(localStorage.getItem('selected_language') == 'en' ){
    $("#txt_progressbarstep").text("Connection to USB-Dongle successful");
    }
    if(localStorage.getItem('selected_language') == 'de' ){
      $("#txt_progressbarstep").text("Verbindung USB-Dongle erfolgreich");
    }
  }
  if (pbcount == 50) {
    //TODO: Add function call search for and connect to SF-Flash device
    if(localStorage.getItem('selected_language') == 'en' ){
    $("#txt_progressbarstep").text("Connection to SF-Flash successful");
    }
    if(localStorage.getItem('selected_language') == 'de' ){
      $("#txt_progressbarstep").text("SF-Flash Verbindung erfolgreich");
    }
  }
  if (pbcount == 75) {
    parent.addtoSendQueue('{"memory":"ram","flash#1":{"all":"get"}}');
    parent.addtoSendQueue('{"memory":"rom","flash#1":{"all":"get"}}');
    //setTimeout(function () { parent.addtoSendQueue('{"memory":"ram","flash#1":{"all":"get"}}') }, 50);
    //setTimeout(function () { parent.addtoSendQueue('{"memory":"rom","flash#1":{"all":"get"}}') }, 200);


    //TODO: Add function call read current settings on flash
    if(localStorage.getItem('selected_language') == 'en' ){
    $("#txt_progressbarstep").text("Get data from SF-Flash");
    }
    if(localStorage.getItem('selected_language') == 'de' ){
      $("#txt_progressbarstep").text("Anfragen der SF-Flash Daten");
    }
  }
  if (pbcount == 85) {
    setTimeout(function () { parent.getNextDataFromQueue() }, 100);


    //TODO: Add function call read current settings on flash
    if(localStorage.getItem('selected_language') == 'en' ){
    $("#txt_progressbarstep").text("Reading data from SF-Flash");
    }
    if(localStorage.getItem('selected_language') == 'de' ){
      $("#txt_progressbarstep").text("Auslesen der SF-Flash Daten");
    }
  }
  if (pbcount == 100) {
    parent.cyclicConnectionCheck();
    if(localStorage.getItem('selected_language') == 'en' ){
    $("#txt_progressbarstep").text("Success");
    }
    if(localStorage.getItem('selected_language') == 'de' ){
      $("#txt_progressbarstep").text("Auslesen erfolgreich");
    }
    var elem = window.parent.document.getElementById('connect_state_icon');
    elem.src="images/check.png";
    /*
    elem.classList.remove("fa-times");
    elem.classList.add("fa-check");
    */

    btnChannel = parent.document.getElementById('btnChannel');
    if (btnChannel.classList.contains('disabled')) {
      btnChannel.classList.remove('disabled');
    }
    btnChannel_2 = parent.document.getElementById('btnChannel_2');
    if (btnChannel_2.classList.contains('disabled')) {
      btnChannel_2.classList.remove('disabled');
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







