/**
 * @file    XBee3.js
 * @author  Michael Koch <michael.koch@smartfork.com>
 * @version 1.0
 * @date    06.01.2022
 */

 /*
EXAMPLE:
    ...  
*/

class XBeeQueue 
{
    constructor(...elements) {
      // Initializing the queue with given arguments 
      this.elements = [...elements];
    }
    // Proxying the push/shift methods
    push(...args) {
      return this.elements.push(...args);
    }
    shift(...args) {
      return this.elements.shift(...args);
    }
    // Add some length utility methods
    getLength(...args) {
      return this.elements.length;
    }
    setLength(length) {
      return this.elements.length = length;
    }
};

class XBeeData
{
    /* Class-Constructor */
    constructor() {}

    /* Public variables */
    MACAddress = new XBeeAddress64();
    JSONDocument;
};

class XBeeAddress64
{
    /* Class-Constructor */
    constructor() {}

    /* Public */
	getMsb() {return this.#msb;}
	getLsb() {return this.#lsb;}
	get()    {return this.getMsb() + this.getLsb();}
	setMsb(msb) {this.#msb = msb;}
	setLsb(lsb) {this.#lsb = lsb;}
	set(address) { /* set() erwartet MAC-Adresse als String */
        // HIER NOCH FEHLER ABFANGEN
        this.setMsb( address.substring(0, 8) );
        this.setLsb( address.substring(8, 16) );
	}
	
    /* Private*/
	#msb;
	#lsb;
};

class XBee3Class
{
    /* Class-Constructor */
    constructor() {
        if ("serial" in navigator) 
        { 
            console.log("The Web Serial API is supported."); 
        }
        else                       
        { 
            console.log("Sorry, the Web Serial API is NOT supported."); 
            alert("Sorry, the Web Serial API is NOT supported. Please use a supported browser and version, see https://caniuse.com/web-serial"); 
        }
    }

    /* Public functions */
    async begin() { 
        // Check if the Web Serial API is supported
        if ("serial" in navigator) 
        {
            // The Web Serial API is supported.
            this._XBConnectSerial();
        }
        else 
        {
            console.log("Sorry, the Web Serial API is NOT supported."); 
        }
    }

    async end(){
        /* Set port status to closed */
        this.#portOpenStatus = false;
        
        /* Reset-Delete XBee RX Queue  */
        this.RxQueue = new XBeeQueue(); 
    }

    async writeJSONDocument( XBeeData ) {

        /* Based on Transmit Request frame - 0x10 */
        /* See page 198 in XBee3® Zigbee® RF Module User Guide */ 
        
        let checksum = 0;

        /* Convert MAC-Address-String to MAC-Address-Array */
        const MACAddressArray = this. _convertMACFromString2Array( XBeeData.MACAddress.get() );
        if ( !MACAddressArray ) { console.error( "Wrong entry of the mac address." ); return; }
    
        /* Data sent to the destination device. */
        /* Convert JSONDocument to RFdata Array */	
        const TxJSONStr = JSON.stringify( XBeeData.JSONDocument );
        const RFdataLength = TxJSONStr.length;
        const buf = new ArrayBuffer( RFdataLength ); // 2 bytes for each char
        const RFdata = new Uint8Array( buf );
        for (let i = 0; i < RFdataLength; i++) 
        {
            RFdata[i] = TxJSONStr.charCodeAt( i );
        }     
        
      
        const writer = this.#port.writable.getWriter();
        
        /* Start delimiter */
        await writer.write( new Uint8Array( [0x7E] ) );
   
        /* Length */
        await writer.write( new Uint8Array( [ ( 14 + RFdataLength ) >> 8 ] ) );
        await writer.write( new Uint8Array( [ ( 14 + RFdataLength ) ] ) );
        
        /* Frame type */
        await writer.write( new Uint8Array( [0x10] ) );
        checksum = checksum + 0x10;
        
        /* Frame ID */
        /* If 0, no response from XBee over Uart is required. */
        await writer.write( new Uint8Array( [0x00] ) );
        checksum = checksum + 0x00;
        
        /* 64-bit destination address*/
        await writer.write( MACAddressArray );
        for (let i = 0; i < MACAddressArray.length; i++ ) 
        {
            checksum = checksum + MACAddressArray[i];
        }
        
        /* 16-bit destination address*/
        await writer.write( new Uint8Array( [0xFF] ) );
        checksum = checksum + 0xFF;
        
        await writer.write( new Uint8Array( [0xFE] ) );
        checksum = checksum + 0xFE;
        
        /* Broadcast radius */
        await writer.write( new Uint8Array( [0x00] ) );
        checksum = checksum + 0x00;
        
        /* Options */
        await writer.write( new Uint8Array( [0x00] ) );
        checksum = checksum + 0x00;
        
        /* RF Data */    
        await writer.write( RFdata );
        for (let i = 0; i < RFdataLength; i++ ) 
        {
            checksum = checksum + RFdata[i];
        }
        
        /* Checksum */
        //Serial.write(0xFF-(byte)checksum);	
        await writer.write( new Uint8Array( [ 0xff - checksum ] ) );

        // Allow the serial port to be closed later.
        writer.releaseLock();

 /*        desAdd = 0x0013a20041adaeab;
        
        destinationMACAddress64bit = new Uint8Array([0x00,0x13,0xa2,0x00,0x00,0x00,0x00,0x00]);
        let j = 4;
        let wert;
        for (var i = 3; i >= 0; i--) 
        {                       
            wert = ( desAdd & ( 0x000000FF << i*8 ) ) >> i*8;
            //console.log(wert.toString(16));
            destinationMACAddress64bit[j] = wert;
            j++;
        }

        const writer = this.#port.writable.getWriter();

        await writer.write( destinationMACAddress64bit );

        const data = new Uint8Array([104, 101, 108, 108, 111]); // hello
        //await writer.write(data);

        let str = "gude";
        //console.log(str.charAt(1));
        var buf = new ArrayBuffer(str.length); // 2 bytes for each char
        var bufView = new Uint8Array(buf);
        for (var i = 0, strLen = str.length; i < strLen; i++) {
            bufView[i] = str.charCodeAt(i);
        }
        //await writer.write(bufView);

        // Allow the serial port to be closed later.
        writer.releaseLock(); */
    }

    /* Public variables */
    RxQueue = new XBeeQueue();
    //debugAddress = new XBeeAddress64();

    /* Private functions */
    async _XBConnectSerial() {
        try {
            // Filter on devices with the Arduino Uno USB Vendor/Product IDs.
            const filters = [   { usbVendorId: 0x1027 , usbProductId: 0x24577}, // Digi Xbee:1027 24577
                                { usbVendorId: 0x1027 , usbProductId: 0x24597}, // USB-Stick:1027 24597 
                                { usbVendorId: 0x0403 , usbProductId: 0x6001}   // Digi USB: 0403 6001
             ];  
            
            // Prompt user to select any serial port.
            this.#port = await navigator.serial.requestPort( {filters} );
            // await port.open({ baudRate: document.getElementById("baud").value });
            await this.#port.open({ baudRate: 57600 });
            // Port is open. Set status variable true. 
            this.#portOpenStatus = true;
            
            console.log( this.#port.getInfo() );
            
            this._readJSONDocument_UntilClosed();

            console.log("Serial connected");
        } catch {
            alert("Serial Connection Failed");
        }
    }

    async _readJSONDocument_UntilClosed() {
        while ( this.#port.readable && this.#portOpenStatus )
        {    
            const reader = this.#port.readable.getReader();

            let APIFrame = new Array();
            let APIFrameByteCNT;
            let APILength;
            let APIFrameType;

            try
            {
                // Listen to data coming from the serial device.
                while ( this.#portOpenStatus ) 
                {
                    
                    const { value, done } = await reader.read();
                    if (done) 
                    {
                        // Allow the serial port to be closed later.
                        reader.releaseLock();
                        console.log("DONE");
                        break;
                    }

                    for (var i = 0; i < value.length; i++) 
                    {
                        if( value[i] == parseInt('7e', 16) ) 
                        { 
                            // API frame byte 1, Start delimiter
                            
                            // Neues Frame, Alle Parameter zurücksetzen
                            APIFrameByteCNT = 1;
                            APIFrame = new Array();
                            APIFrame[ 0 ] = 0;
                            APILength = 0;
                            APIFrameType = 0;

                            // Start delimiter in API frame schreiben
                            APIFrame[ APIFrameByteCNT ] = value[i];

                            // Byte Position im API frame um Eins erhöhen
                            APIFrameByteCNT++;

                            //console.log("Start delimiter: 0x" + APIFrame[1].toString(16) );
                        } 
                        else if( APIFrameByteCNT > 1 )
                        {
                            switch( APIFrameByteCNT )
                            {
                                case 2: // API frame byte 2, Length
                                    APIFrame[ 2 ] = value[i];
                                    APIFrameByteCNT++;
                                    break;

                                case 3: // API frame byte 3, Length
                                    APIFrame[ 3 ] = value[i];
                                    APILength = ( APIFrame[2] << 8 ) | ( APIFrame[3] );
                                    APIFrameByteCNT++;     
                                    //console.log( "Length: " + APILength ); 
                                    break;

                                case 4: // API frame byte 4, Frame type
                                    APIFrame[ 4 ] = value[i];
                                    APIFrameType = APIFrame[ 4 ];
                                    APIFrameByteCNT++; 
                                    //console.log("Frame type: 0x" + APIFrameType.toString(16) );
                                    break;

                                default: 
                                    if( APIFrameByteCNT < APILength + 4 ) 
                                    {
                                        // Checksum noch nicht erreicht
                                        APIFrame[ APIFrameByteCNT ] = value[i];             
                                        APIFrameByteCNT++; 
                                    }
                                    else if (APIFrameByteCNT == APILength + 4 ) 
                                    { 
                                        // Checksum erreicht
                                        APIFrame[ APIFrameByteCNT ] = value[i]; 
                                        APIFrameByteCNT = 0;

                                        switch( APIFrameType.toString(16) ) 
                                        {
                                            case '90':
                                                let startDelimiter = APIFrame[1];
                                                
                                                let SourceAddress64bitH = ( ( APIFrame[5] << 24 )  & 0xFF000000 ) 
                                                                        | ( ( APIFrame[6] << 16 )  & 0x00FF0000 )
                                                                        | ( ( APIFrame[7] << 8  )  & 0x0000FF00 )
                                                                        | ( ( APIFrame[8] << 0  )  & 0x000000FF );
                                                let SourceAddress64bitL = ( ( APIFrame[9] << 24 )  & 0xFF000000 ) 
                                                                        | ( ( APIFrame[10] << 16 ) & 0x00FF0000 )
                                                                        | ( ( APIFrame[11] << 8  ) & 0x0000FF00 )
                                                                        | ( ( APIFrame[12] << 0  ) & 0x000000FF );     
                                                let SourceAddress16bit =  ( ( APIFrame[13] << 8 )  & 0xFF00 ) 
                                                                        | ( ( APIFrame[14] << 0 )  & 0x00FF ) 
                                                let ReceiveOptions = APIFrame[15] & 0xFF; 
                                                
                                                let RxJSONStr = new String();

                                                /* Position der hintersten Klammer im JSON Format suchen. 
                                                Im empfangenen Frame werden dahinter Nullen mitgeschickt. 
                                                Diese können aber nicht  von JSON.parse() geparsed werden 
                                                und müssen deshalb entfernt werden. 
                                                Die Position der Klammer wird in j gespeichert */ 
                                                let j = 0;
                                                for (let i = ( APIFrame.length - 2 ); i >= 16; i--) 
                                                {
                                                    if( APIFrame[i] == 0x7D ) { j = i; break;}
                                                }

                                                /* Data Received String bis zur Position der Klammer (j) zusammenfügen.
                                                Der String ist Input für JSON.parse() */
                                                for (let i = 16; i <= j; i++) 
                                                {
                                                    RxJSONStr =  RxJSONStr + String.fromCharCode( APIFrame[i] ); 
                                                }

                                                /* Checksumme auslesen */
                                                let checksum = APIFrame[ ( APIFrame.length - 1 ) ];

                                                ///////////////////////////////////////////////////////////////////////////
                                                
                                                /* Received JSON String in JSON Objekt parsen. */
                                                const RXdata = new XBeeData();
                                                try 
                                                {
                                                     /* Save XBee Mac Address from source as Hex-String */
                                                    RXdata.MACAddress.setLsb( SourceAddress64bitL.toString(16) );
                                                    RXdata.MACAddress.setMsb( SourceAddress64bitH.toString(16) ); 

                                                     /* Save received JSON Data */
                                                    RXdata.JSONDocument = JSON.parse( RxJSONStr );  
                                                }
                                                catch( err ) 
                                                {
                                                    console.log(err);
                                                    RXdata.JSONDocument = "error";
                                                }

                                                //console.log(RXdata);

                                                //appendToTerminal( RxJSONStr + "\n" );

                                                this.RxQueue.push(RXdata);
                                            
                                                break;
                                        }
                                    }
                                    
                                    break;
                            }
                        }
                    }      
                }
            }
            catch( error ) 
            {
                console.log( error );
                // TODO: Handle non-fatal read error.
            }
            finally 
            {
                // Allow the serial port to be closed later.
                reader.releaseLock();
            }
        }

        await this.#port.close();
        console.log("Serial disconnected");
    }

    _convertMACFromString2Array( HEXString) {

        if ( HEXString.length == 16 )
        {
            const HEXArrayLength = HEXString.length / 2;
            const HEXbuf = new ArrayBuffer( HEXArrayLength ); // 1 byte for each char (hex)
            const HEXArray = new Uint8Array( HEXbuf );

            let a = 0; 
            let b = 0;

            for ( let i = 0; i < HEXArrayLength; i++ ) 
            {
                for ( let j = 0; j < 2; j++ )
                {
                    //console.log(  HEXString.charAt( 2*i + j ) );
                    switch ( HEXString.charAt( 2*i + j ) ) 
                    {
                        case '0': if(j==0){ a = 0x0f; } else { b = 0xf0; } break;
                        case '1': if(j==0){ a = 0x1f; } else { b = 0xf1; } break;
                        case '2': if(j==0){ a = 0x2f; } else { b = 0xf2; } break;
                        case '3': if(j==0){ a = 0x3f; } else { b = 0xf3; } break;
                        case '4': if(j==0){ a = 0x4f; } else { b = 0xf4; } break;
                        case '5': if(j==0){ a = 0x5f; } else { b = 0xf5; } break;
                        case '6': if(j==0){ a = 0x6f; } else { b = 0xf6; } break;
                        case '7': if(j==0){ a = 0x7f; } else { b = 0xf7; } break;
                        case '8': if(j==0){ a = 0x8f; } else { b = 0xf8; } break;
                        case '9': if(j==0){ a = 0x9f; } else { b = 0xf9; } break;
                        case 'a': if(j==0){ a = 0xaf; } else { b = 0xfa; } break;
                        case 'b': if(j==0){ a = 0xbf; } else { b = 0xfb; } break;
                        case 'c': if(j==0){ a = 0xcf; } else { b = 0xfc; } break;
                        case 'd': if(j==0){ a = 0xdf; } else { b = 0xfd; } break;
                        case 'e': if(j==0){ a = 0xef; } else { b = 0xfe; } break;
                        case 'f': if(j==0){ a = 0xff; } else { b = 0xff; } break;
                        case 'A': if(j==0){ a = 0xaf; } else { b = 0xfa; } break;
                        case 'B': if(j==0){ a = 0xbf; } else { b = 0xfb; } break;
                        case 'C': if(j==0){ a = 0xcf; } else { b = 0xfc; } break;
                        case 'D': if(j==0){ a = 0xdf; } else { b = 0xfd; } break;
                        case 'E': if(j==0){ a = 0xef; } else { b = 0xfe; } break;
                        case 'F': if(j==0){ a = 0xff; } else { b = 0xff; } break;
                        default: console.error( "[MAC-ADDRESS] Invalid sign." ); return 0;
                    } 
                }

                HEXArray[i] = a & b;
            }
            return HEXArray;
        }
        else
        {
            console.error( "[MAC-ADDRESS] Wrong length." ); return 0;
        }    
    }

    /* Private variables */
    #port; // Serial port object
    #portOpenStatus = false;
}

const XBee3 = new XBee3Class();