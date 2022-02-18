radio.onReceivedString(function (receivedString) {
    singnal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    led.plotBarGraph(
    Math.map(singnal, -95, -42, 0, 9),
    9
    )
})
let singnal = 0
radio.setGroup(1)
