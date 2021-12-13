let port;
let checkserverstate;
const butConnect = document.getElementById('butConnect');
const butReadserial = document.getElementById('butReadserial');
const butSendmsg = document.getElementById('butSendmsg');


document.addEventListener('DOMContentLoaded', () => {
  butConnect.addEventListener('click', clickConnect);
  butReadserial.addEventListener('click', clickReadserial);
  butSendmsg.addEventListener('click', clickSendmsg);
});


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

//check serial support
if ("serial" in navigator) {
  console.log("Serial supported")
}
else {
  console.log("Serial not supported")
}

// connection button function
async function connect() {
  navigator.serial.addEventListener('connect', (e) => {
    // Connect to `e.target` or add it to a list of available ports.
    console.log("connected to USB serial");
    document.getElementById('status').innerText = 'Connected';
  });

  navigator.serial.addEventListener('disconnect', (e) => {
    // Remove `e.target` from the list of available ports.
    console.log("disconnected USB serial");
    document.getElementById('status').innerHTML = 'Disconnected';
  });


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
        if (value[0] > 47 & value[0]<65) { //ASCII 47 = "/", ab ASCII 48 "0" , ...

          //console.log(value[0]);
          document.getElementById("sample").innerHTML = String.fromCharCode(value[0]); // ASCII to char conversion to html element
        }
        if (value[0]> 64)
        {
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

  var enc =  new TextEncoder();
  data = enc.encode(data);

  await writer.write(data);

  // Allow the serial port to be closed later
  writer.releaseLock();
}

/**
 * Button Click Funtions
 */
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
 * UI Code
 */
function toggleUIConnected(connected) {
  let lbl = 'Connect';
  if (connected) {
    lbl = 'Disconnect';
  }
  butConnect.textContent = lbl;
  ledCBs.forEach((cb) => {
    if (connected) {
      cb.removeAttribute('disabled');
      return;
    }
    cb.setAttribute('disabled', true);
  });
}

/**
 * Check Server Connectivity
 * @returns 
 */
function webserverstate() {
  $.ajax({
    url: "http://127.0.0.1:8887/",
    cache: false,
    async: false,
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      // some error code.
      //console.log('no connection to webserver');
      document.getElementById('server_status').innerHTML = 'Not Available';
    },
    success: function (html) {
      // do something.
      //console.log('connection to webserver available');
      document.getElementById('server_status').innerHTML = 'Available';
    }
  });
}


   //setInterval(function() {webserverstate()},5000);




