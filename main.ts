function Tracking_Smart () {
    value = MiniCar.LineTracking()
    if (value == 1) {
        MiniCar.motor(Motorlist.M1, Direction1.Forward, 0)
        MiniCar.motor(Motorlist.M2, Direction1.Forward, 0)
    } else if (value == 2) {
        MiniCar.motor(Motorlist.M1, Direction1.Forward, 0)
        MiniCar.motor(Motorlist.M2, Direction1.Forward, 0)
    } else if (value == 3) {
        MiniCar.motor(Motorlist.M1, Direction1.Forward, 0)
        MiniCar.motor(Motorlist.M2, Direction1.Forward, 0)
    } else {
        MiniCar.motor(Motorlist.M1, Direction1.Forward, 0)
        MiniCar.motor(Motorlist.M2, Direction1.Forward, 0)
    }
}
function Speed_buffer () {
    MiniCar.motor(Motorlist.M1, Direction1.Forward, 0)
    MiniCar.motor(Motorlist.M2, Direction1.Forward, 0)
    basic.pause(100)
    MiniCar.motor(Motorlist.M1, Direction1.Forward, 0)
    MiniCar.motor(Motorlist.M2, Direction1.Forward, 0)
    basic.pause(100)
    MiniCar.motor(Motorlist.M1, Direction1.Forward, 0)
    MiniCar.motor(Motorlist.M2, Direction1.Forward, 0)
    basic.pause(100)
}
bluetooth.onBluetoothConnected(function () {
    MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.cyan)
    MiniCar.motor(Motorlist.M1, Direction1.Forward, motor)
    MiniCar.motor(Motorlist.M2, Direction1.Forward, zero)
    basic.showIcon(IconNames.Heart)
    MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.green1)
    MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.black)
})
function car_control () {
    if (data == "F") {
        Speed_buffer()
        MiniCar.motor(Motorlist.M1, Direction1.Forward, 0)
        MiniCar.motor(Motorlist.M2, Direction1.Forward, 0)
    } else if (data == "B") {
        MiniCar.motor(Motorlist.M1, Direction1.Forward, 0)
        MiniCar.motor(Motorlist.M2, Direction1.Forward, 0)
    } else if (data == "L") {
        MiniCar.motor(Motorlist.M1, Direction1.Forward, 0)
        MiniCar.motor(Motorlist.M2, Direction1.Forward, 0)
    } else if (data == "R") {
        MiniCar.motor(Motorlist.M1, Direction1.Forward, 0)
        MiniCar.motor(Motorlist.M2, Direction1.Forward, 0)
    } else if (data == "S") {
        MiniCar.motor(Motorlist.M1, Direction1.Forward, 0)
        MiniCar.motor(Motorlist.M2, Direction1.Forward, 0)
    }
}
bluetooth.onBluetoothDisconnected(function () {
    MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.yellow)
    MiniCar.motor(Motorlist.M1, Direction1.Forward, zero)
    MiniCar.motor(Motorlist.M2, Direction1.Forward, motor)
    basic.showIcon(IconNames.Sad)
    MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.black)
    MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.red1)
})
function Light_Follow () {
    basic.clearScreen()
    ldr_l = MiniCar.PH1()
    ldr_r = MiniCar.PH2()
    if (ldr_l > 650 && ldr_r > 650) {
        MiniCar.motor(Motorlist.M1, Direction1.Forward, 0)
        MiniCar.motor(Motorlist.M2, Direction1.Forward, 0)
    } else if (ldr_l > 650 && ldr_r <= 650) {
        MiniCar.motor(Motorlist.M1, Direction1.Forward, 0)
        MiniCar.motor(Motorlist.M2, Direction1.Forward, 0)
    } else if (ldr_l <= 650 && ldr_r > 650) {
        MiniCar.motor(Motorlist.M1, Direction1.Forward, 0)
        MiniCar.motor(Motorlist.M2, Direction1.Forward, 0)
    } else {
        MiniCar.motor(Motorlist.M1, Direction1.Forward, 0)
        MiniCar.motor(Motorlist.M2, Direction1.Forward, 0)
    }
}
function avoid () {
    distance = MiniCar.ultra()
    if (distance > 10) {
        MiniCar.motor(Motorlist.M1, Direction1.Forward, 0)
        MiniCar.motor(Motorlist.M2, Direction1.Forward, 0)
    } else {
        MiniCar.motor(Motorlist.M1, Direction1.Forward, 0)
        MiniCar.motor(Motorlist.M2, Direction1.Forward, 0)
        basic.pause(200)
    }
}
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    MiniCar.motor(Motorlist.M2, Direction1.Forward, zero)
    MiniCar.motor(Motorlist.M1, Direction1.Forward, zero)
    data = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    if ("9" == data) {
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.red1)
    }
    if ("8" == data) {
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.green1)
    }
    if ("7" == data) {
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.blue1)
    }
})
function Ultrasonic_Follow () {
    distance = MiniCar.ultra()
    if (distance >= 10 && distance <= 30) {
        MiniCar.motor(Motorlist.M1, Direction1.Forward, 0)
        MiniCar.motor(Motorlist.M2, Direction1.Forward, 0)
    } else if (distance <= 6) {
        MiniCar.motor(Motorlist.M1, Direction1.Forward, 0)
        MiniCar.motor(Motorlist.M2, Direction1.Forward, 0)
    } else if (distance < 10 && distance > 6 || distance > 30) {
        MiniCar.motor(Motorlist.M1, Direction1.Forward, 0)
        MiniCar.motor(Motorlist.M2, Direction1.Forward, 0)
        basic.pause(200)
    }
}
function LED_RGB () {
    if (data == "r") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.red1)
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.red1)
    } else if (data == "g") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.green1)
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.green1)
    } else if (data == "b") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.blue1)
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.blue1)
    } else if (data == "y") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.yellow)
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.yellow)
    } else if (data == "c") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.cyan)
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.cyan)
    } else if (data == "p") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.purple)
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.purple)
    } else if (data == "x") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.black)
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.black)
    }
}
function music2 () {
    if (data == "1") {
        music.ringTone(262)
    } else if (data == "2") {
        music.ringTone(294)
    } else if (data == "3") {
        music.ringTone(330)
    } else if (data == "4") {
        music.ringTone(349)
    } else if (data == "5") {
        music.ringTone(392)
    } else if (data == "6") {
        music.ringTone(440)
    } else if (data == "7") {
        music.ringTone(494)
    } else if (data == "8") {
        music.ringTone(523)
    } else if (data == "9") {
        music.rest(music.beat(BeatFraction.Half))
    }
}
let distance = 0
let ldr_r = 0
let ldr_l = 0
let data = ""
let zero = 0
let value = 0
let motor = 0
motor = 200
basic.showIcon(IconNames.SmallHeart)
MiniCar.motor(Motorlist.M1, Direction1.Forward, motor)
MiniCar.motor(Motorlist.M2, Direction1.Forward, motor)
MiniCar.LED_OFF()
MiniCar.led_show()
MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.blue1)
MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.blue1)
basic.forever(function () {
	
})
