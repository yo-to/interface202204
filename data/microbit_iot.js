input.onButtonPressed(Button.A, function () {
    serial.writeLine("get")
})
input.onButtonPressed(Button.AB, function () {
    _4digit.clear()
})
input.onButtonPressed(Button.B, function () {
    _4digit.show(1)
})
let 数字の部分 = ""
let シリアル通信読み取り = ""
let 距離 = 0
let _4digit: grove.TM1637 = null
_4digit = grove.createDisplay(DigitalPin.P1, DigitalPin.P15)
_4digit.clear()
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    距離 = grove.measureInCentimeters(DigitalPin.P0)
    if (距離 < 10) {
        serial.writeLine("get")
    }
    シリアル通信読み取り = serial.readString()
    if (シリアル通信読み取り.includes("P:")) {
        数字の部分 = シリアル通信読み取り.substr(2, 3)
        _4digit.show(parseFloat(数字の部分))
    }
})
