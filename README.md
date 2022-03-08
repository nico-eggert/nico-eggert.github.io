## Progressive Web Apps (PWA) für die Einstellung der SmartFork Flash

Die PWA soll über unsere Website gehostet werden. Jeder (Initial: Fertigung, Später: Kunden) hat über den Webserver die Möglichkeit auf die Website mit der PWA zuzugreifen und kann Änderung an der Konfiguration der Flashsteuerung vornehmen. Die Applikation kann aus dem Browser heruntergeladen werden und ist anschließend auch Offline verwendbar. Neue Firmware-Updates können über Zugriff auf den Webserver heruntergeladen werden -> eine zentrale Stelle an der Updates aufgespielt und verbreitet werden.

Beim Design der Website muss auf Kompatibilität für Smartphonebrowser geachtet werden!

Ziel ist es über die serielle Schnittstelle ein Funkmodul (USB-Stick bsp. Digi XBEE/ZigBee) anzusprechen. Hier können Kommunikationsbefehle in das Funknetz übertragen werden. Die Flash-Steuerung erhält ein Funkmodul das angesprochen wird.


# Einstellungsfunktionen
Bei der Einstellung wird zwischen Kanal 1 und Kanal 2 unterschieden. 
Die Länge des LED-Bandes wird eingestellt und die Helligkeitsstufe ausgewält.
Es stehen 2 Modi für Farbeinstellungen zur Verfügung. Dabei gibt es fest vorgagebene Modi und die individuelle Markereinstellung. 
Modus 1 ist der Standardbetriebsmodus. Auf Modus 2 kann später über ein Funksignal durch Beispielsweise einen Secure Lichttaster umgeschaltet werden.

Einstellungenoptionen Flash Steuerung:
1. Länge: 335 mm , 636 mm , 935 mm, (1870 mm, implementiert aber in der ersten Fassung nicht als Standard festgelegt!) 
2. Helligkeit: Eco, Medium, Max. 3 fest von uns vordenfinierte Helligkeitsstufen, wobei Max nicht zwangsläufig der maximalen Einstellung entspricht (Bsp.: Max: 66 %).
3. Mode 1: Feste Operationsmodi Grün, Rot, Lauflicht(Rot/Weiß) oder bis zu 5 Marker in 7 Farben (Grün,Rot,Blau,Gelb,Weiß,Türkis,Magenta). Die Start Position und die Markerbreite wird in mm angegeben.
4. Mode 2: Gleiche Opertationsmodi wie für Mode 1.

Einstellungen können sowohl als Text-File gespeichert, als auch aus einem Text-File mit gleicher Formatierung geladen werden.
Die Daten werden ins RAM des Controllers übertragen und auf der Website werden die Einstellungen hervorgehoben. 
Für das Übernehmen der Einstellungen muss immer "Save all" betätigt werden, da an dieser Stelle wird der Befehl, alle Daten im RAM der Steuerung ins ROM zu schreiben, übertragen.

# TODO:
- Test einer PWA die von Localhost Webpage heruntergeladen werden kann                                                                  [✓]
- Test der Web Serial API um Zugriff auf den COM Port zu erhalten und Daten an entsprechende Peripherie zu senden/empfangen             [✓]
- Kommunikation über Serielle Schnittstelle von PWA und Arduino Uno R3 testen                                                           [✓]
- Webserver über Nodejs erstellen                                                                                                       [✓]
- Test einer Github-Hompage https://nico-eggert.github.io/ und der PWA Funktionalität -> hier Cache Versionskontrolle implementieren    [✓]
- Beschränkung der erkannten USB-Geräte auf VendorID                                                                                    [✓]
- Bootstrap implementieren für Fast-Prototyping der Website                                                                             [✓]
- Einstellungsfunktionen definieren                                                                                                     [✓]
- Smartfork Webpage Layout übernehmen und auf die gewünschten Einstellungsmöglichkeiten anpassen                                        [✓]
- Schnittstelle Zigbee-Protokoll als Klasse definieren                                                                                  [✓]
- Schnittstelle Zigbee-Protokoll als Klasse implementieren                                                                              [✓]
- Optimierung des Ladeverhaltens der PWA im Offline Mode (White Sites on load)                                                          [ ]
- Deutsche Sprachausgabe                                                                                                                [ ]
- fontawesome entfernen, da internetverbindung notwendig                                                                                [ ]
- Version auf Github-Homepage Laden                                                                                                     [ ]
- Kiosk Mode testen                                                                                                                     [ ]
- Serielle Schnittstelle an Handy testen                                                                                                [ ] 
- Vorführung -> Anpassungen Interface, ggf. Sonderfunktionen ergänzen                                                                   [ ]

# Zukunft:
Erweiterung als Schnittstelle für Konfigurationseinstellungen anderer SmartFork-Komponenten.

