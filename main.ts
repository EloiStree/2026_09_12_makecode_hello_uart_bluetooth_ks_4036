function check_for_motor (text: string) {
	
}
function check_for_led (text: string) {
    if (text == "CR") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.red1)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.red1)
    }
    if (text == "CG") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.green1)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.green1)
    }
    if (text == "CB") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.blue1)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.blue1)
    }
    if (text == "CC") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.cyan)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.cyan)
    }
    if (text == "CP") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.purple)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.purple)
    }
    if (text == "CW") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.white)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.white)
    }
    if (text == "CY") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.yellow)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.yellow)
    }
    if (text == "C0") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.black)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.black)
    }
    if (text == "CLR") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.red1)
    }
    if (text == "CLG") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.green1)
    }
    if (text == "CLB") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.blue1)
    }
    if (text == "CLC") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.cyan)
    }
    if (text == "CLP") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.purple)
    }
    if (text == "CLW") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.white)
    }
    if (text == "CLY") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.yellow)
    }
    if (text == "CL0") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.black)
    }
    if (text == "CRR") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.red1)
    }
    if (text == "CRG") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.green1)
    }
    if (text == "CRB") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.blue1)
    }
    if (text == "CRC") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.cyan)
    }
    if (text == "CRP") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.purple)
    }
    if (text == "CRW") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.white)
    }
    if (text == "CRY") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.yellow)
    }
    if (text == "CR0") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.black)
    }
}
function callback_if_changed (prefix: string, previous: string, current: string) {
    if (previous != current) {
        callback(prefix, current)
    }
}
bluetooth.onBluetoothConnected(function () {
    MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.green1)
    MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.green1)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        # # # # #
        `)
})
bluetooth.onBluetoothDisconnected(function () {
    MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.red1)
    MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.red1)
    basic.showLeds(`
        # # # # #
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        `)
})
function callback (prefix: string, value: string) {
    bluetooth.uartWriteLine("*" + prefix + value + "*")
}
function set_motor_left_from_uart (speed: string) {
    uart_motor_right = speed
    if (speed.includes("-")) {
        MiniCar.motor(Motorlist.M1, Direction1.Backward, parseFloat(speed))
    } else {
        MiniCar.motor(Motorlist.M1, Direction1.Forward, parseFloat(speed))
    }
}
function check_wheels () {
    MiniCar.motor(Motorlist.M1, Direction1.Forward, 0)
    MiniCar.motor(Motorlist.M2, Direction1.Forward, 0)
}
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    queue_data_waiting.push(bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine)))
    received_data_pack_count += 1
})
function check_pins (text: string) {
    if (text == "P1") {
        pins.analogWritePin(AnalogPin.P0, 1023)
    }
    if (text == "p1") {
        pins.analogWritePin(AnalogPin.P0, 0)
    }
    if (text == "P3") {
        pins.digitalWritePin(DigitalPin.P3, 1)
    }
    if (text == "p3") {
        pins.digitalWritePin(DigitalPin.P3, 0)
    }
    if (text == "P4") {
        pins.digitalWritePin(DigitalPin.P4, 1)
    }
    if (text == "p4") {
        pins.digitalWritePin(DigitalPin.P4, 0)
    }
    if (text == "P5") {
        pins.digitalWritePin(DigitalPin.P5, 1)
    }
    if (text == "p5") {
        pins.digitalWritePin(DigitalPin.P5, 0)
    }
    if (text == "P7") {
        pins.digitalWritePin(DigitalPin.P7, 1)
    }
    if (text == "p7") {
        pins.digitalWritePin(DigitalPin.P7, 0)
    }
    if (text == "P8") {
        pins.digitalWritePin(DigitalPin.P8, 1)
    }
    if (text == "p8") {
        pins.digitalWritePin(DigitalPin.P8, 0)
    }
    if (text == "P9") {
        pins.digitalWritePin(DigitalPin.P9, 1)
    }
    if (text == "p9") {
        pins.digitalWritePin(DigitalPin.P9, 0)
    }
    if (text == "P10") {
        pins.digitalWritePin(DigitalPin.P10, 1)
    }
    if (text == "p10") {
        pins.digitalWritePin(DigitalPin.P10, 0)
    }
}
function set_motor_right_from_uart (speed: string) {
    uart_motor_left = speed
    if (speed.includes("-")) {
        MiniCar.motor(Motorlist.M2, Direction1.Backward, parseFloat(speed))
    } else {
        MiniCar.motor(Motorlist.M2, Direction1.Forward, parseFloat(speed))
    }
}
let ldr_r = 0
let ldr_l = 0
let previous_ldr_r = 0
let previous_ldr_l = 0
let current_line_tracking = 0
let previous_line_tracking = 0
let current_ultrasonic = 0
let previous_ultrasonic = 0
let current_motor_right = ""
let previous_motor_right = ""
let current_motor_left = ""
let previous_motor_left = ""
let data = ""
let uart_motor_left = ""
let received_data_pack_count = 0
let queue_data_waiting: string[] = []
let uart_motor_right = ""
MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.white)
MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.white)
basic.showIcon(IconNames.Square)
basic.forever(function () {
    data = queue_data_waiting.shift()
    check_for_led(data)
    check_for_motor(data)
})
basic.forever(function () {
    let current_ldr_r = 0
    let current_ldr_l = 0
    previous_motor_left = current_motor_left
    previous_motor_right = current_motor_right
    previous_ultrasonic = current_ultrasonic
    previous_line_tracking = current_line_tracking
    previous_ldr_l = current_ldr_l
    previous_ldr_r = current_ldr_r
    current_motor_left = uart_motor_left
    current_motor_right = uart_motor_right
    current_ultrasonic = MiniCar.ultra()
    current_line_tracking = MiniCar.LineTracking()
    ldr_l = MiniCar.PH1()
    ldr_r = MiniCar.PH2()
})
