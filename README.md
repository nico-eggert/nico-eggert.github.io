## Progressive Web Apps (PWA) für die Einstellung der SmartFork Flash

Die PWA soll über unsere Website gehostet werden. Jeder (Initial: Fertigung, Später: Kunden) hat über den Webserver die Möglichkeit auf die Website mit der PWA zuzugreifen und kann Änderung an der Konfiguration der Flashsteuerung vornehmen. Die Applikation kann aus dem Browser heruntergeladen werden und ist anschließend auch Offline verwendbar. Neue Firmware-Updates können über Zugriff auf den Webserver heruntergeladen werden -> eine zentrale Stelle an der Updates aufgespielt und verbreitet werden.

Beim Design der Website muss auf Kompatibilität für Smartphonebrowser geachtet werden!

Ziel ist es über die serielle Schnittstelle ein Funkmodul (USB-Stick bsp. Digi XBEE/ZigBee) anzusprechen. Hier können Kommunikationsbefehle in das Funknetz übertragen werden. Die Flash-Steuerung erhält ein Funkmodul das angesprochen wird.


# Einstellungsfunktionen

Einstellungen Flash Steuerung:
1. Lauflicht : Farben, Geschwindigkeit, Helligkeit (%), Umschaltung über Lichttaster, Abstände (LED Anzahl) 
2. Einfahrtiefe: Position (Vom Gabelrücken (mm) oder LED-Ende (mm), LED-Nummer (Anz), Schieberegler (mm oder Prozent))
3. Marker: Farben, Position (wie Einfahrtiefe), Positionsumschlatung über Lichttaster?

# Anzeigen, Menüs
Allgemein: Btn COM Port Connect, Connection Status, Transferstatus Bar, Btn Upload, Btn Download, Btn Import Parameter, Btn Export Parameter, Btn Save, Btn Restore, Btn Restart
Zinkeninformationen: Zinkenlänge (mm), Seriennummer, Hardwareversion, Softwareversion, Costumer ID
Bootloader: Btn Flash Bootloader
Uploadliste: Objekt, ID, Wert, Hex-Wert , Btn Aktualisieren 
Expertenmodus:

# TODO:

- Test einer PWA die von Localhost Webpage heruntergeladen werden kann [x]
- Test der Web Serial API um Zugriff auf den COM Port zu erhalten und Daten an entsprechende Peripherie zu senden/empfangen [x]
- Kommunikation über Serielle Schnittstelle von PWA und Arduino Uno R3 testen [x]
- Webserver über Nodejs erstellen [x]
- Test einer Github-Hompage https://nico-eggert.github.io/ und der PWA Funktionalität -> hier Anpassung der Cache Versionskontrolle [x]
- Beschränkung der erkannten USB-Geräte auf VendorID [x]
- Bootstrap implementieren für Fast-Prototyping der Website [x]
- Einstellungsfunktionen definieren [x]
- 
- Smartfork Webpage Layout übernehmen und auf die gewünschten Einstellungsmöglichkeiten anpassen [ ]
- Schnittstelle Zigbee-Protokoll als Klasse definieren [ ]
- Schnittstelle Zigbee-Protokoll als Klasse implementieren [ ]


# Zukunft:
Erweiterung als Schnittstelle für Konfigurationseinstellungen anderer SmartFork-Komponenten.

