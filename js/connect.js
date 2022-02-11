let port;
let checkserverstate;
var pbcount = 0; //ProgressBarCounter for animation of the percentage
//var serialconnected = false; // check if device is connected to serial port

/**
 * Setup for button click event of connection button
 */
const btnSerialConnect = document.getElementById('btnSerialConnect');
const btnConnect = document.getElementById('btnConnect');
if (btnSerialConnect != null) {
  btnSerialConnect.addEventListener('click', clickSerialConnect);
  btnConnect.addEventListener('click', clickConnect);
}


//check serial support
if ("serial" in navigator) {
  console.log("Serial supported")
}
else {
  console.log("Serial not supported")
}


  
 


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
 * Start connection process -> Establish serial connection to USB device
 */
function clickSerialConnect() {
  console.log('click Serial connect');
  parent.connectSerial();
  localStorage.setItem('deviceaddress', document.getElementById('devicename').value);
  console.log('deviceadress: ', localStorage.getItem('deviceaddress'));
  var elem=document.getElementById('btnConnect');
  elem.classList.remove('disabled');
}

/**
 * Checks connection to device by sending a message and checking if a response message is send.
 * Then starts animation of progressbar.
 */
async function clickConnect(){
  console.log('click connect');
  document.getElementById('progressbar_div').style.visibility="visible";
  var connectionstate = false;
  connectionstate = parent.checkconnection();
  console.log('timeout start progressbar');
  var delayres =await parent.delay(2000);
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
    parent.document.getElementById('status').innerHTML = 'USB: Connected';
  }

  if (pbcount == 25) {
    //TODO: Add function call usb-connection
    $("#txt_progressbarstep").text("Connection to USB-Dongle successful");
  }
  if (pbcount == 50) {
    //TODO: Add function call search for and connect to SF-Flash device
    $("#txt_progressbarstep").text("Connection to SF-Flash successful");
  }
  if (pbcount == 75) {
    //parent.sendXBeeData('{"memory":"ram","flash#1":{"brightness":"get"}}');
    setTimeout(function () { parent.sendXBeeData('{"memory":"ram","flash#1":{"all":"get"}}') }, 50);
    setTimeout(function () { parent.sendXBeeData('{"memory":"rom","flash#1":{"all":"get"}}') }, 200);


    //TODO: Add function call read current settings on flash
    $("#txt_progressbarstep").text("Get data from SF-Flash");
  }
  if (pbcount == 85) {
    //parent.getNextDataFromQueue();
    setTimeout(function () { parent.getNextDataFromQueue() }, 100);
    //setTimeout(function(){parent.sendXBeeData('{"memory":"ram","flash#2":{"all":"get"}}')}, 100);


    //TODO: Add function call read current settings on flash
    $("#txt_progressbarstep").text("Reading data from SF-Flash");
  }
  if (pbcount == 100) {
    parent.cyclicConnectionCheck();
    $("#txt_progressbarstep").text("Success");
    var elem = window.parent.document.getElementById('connect_state_icon');
    elem.classList.remove("fa-times");
    elem.classList.add("fa-check");

    btnChannel = parent.document.getElementById('btnChannel');
    if (btnChannel.classList.contains('disabled')) {
      btnChannel.classList.remove('disabled');
    }
    btnChannel_2 = parent.document.getElementById('btnChannel_2');
    if (btnChannel_2.classList.contains('disabled')) {
      btnChannel_2.classList.remove('disabled');
    }
    window.parent.document.getElementById('frame').src = "";
    alert('Choose a channel!');
}

  // Wait for sometime before running this script again
  if (pbcount != 100) {
    setTimeout(animateProgressbar, 50);
  }
  else {
    // do nothing
  }
}

/**
 * Check if device got connected to serial port. Check if messages can be send to the selected deviceadress.
 */
/*
navigator.serial.addEventListener('connect', (e) => {
  // Connect to `e.target` or add it to a list of available ports.
  console.log("Device connected to USB serial");
  //serialconnected = true;
  var connectionstate = false;
  var counter = 0;
  while (!connectionstate) {
    connectionstate = parent.checkconnection();
    counter = counter + 1;
    if (counter == 100000) {
      alert('Error: No connection to device. Please check your device address or power state of device.');
      connectionstate = true;
    }
  }
});
*/

/*
navigator.serial.addEventListener('disconnect', (e) => {
  // Remove `e.target` from the list of available ports.
  console.log("Device disconnected from USB serial");
  pbcount = 0; // reset progressbar counter
  $(".progress-bar").css("width", pbcount + "%").text(pbcount + "%");
  $("#txt_progressbarstep").text("Disconnected");
  window.parent.document.getElementById('status').innerHTML = 'USB-Dongle: Disconnected';
  toggle_serialconstate();
  var elem = window.parent.document.getElementById('connect_state_icon');
  elem.classList.remove("fa-check");
  elem.classList.add("fa-times");
});
*/





