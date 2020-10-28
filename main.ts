/**
 * Dra inn en og en av de blå fuksjon-blokkene inn i Gjenta for alltid og test ut hvordan de oppfører seg.
 * 
 * Hvis du har koblet micro:biten og MakeCode sammen, kan du lese av verdiene!
 */
function søyleDiagram () {
    led.plotBarGraph(
    input.acceleration(Dimension.X),
    1023
    )
}
function sendFlereVerdier () {
    serial.writeValue("a.X", input.acceleration(Dimension.X))
    serial.writeValue("a.Y", input.acceleration(Dimension.Y))
    serial.writeValue("a.Z", input.acceleration(Dimension.Z))
    basic.pause(100)
}
function temperaturMålerTilUSB () {
    serial.writeValue("temp", input.temperature())
    basic.pause(100)
}
basic.forever(function () {
	
})
