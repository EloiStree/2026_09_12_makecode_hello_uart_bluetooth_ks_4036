/**
 * KS4036
 * 
 * https://github.com/EloiStree/HelloTwoWheelsCarKS4036
 * 
 * MICRO BIT HUB
 * 
 * https://github.com/EloiStree/2026_09_11_python_micro_bit_hub
 * 
 * UART TO KS4036
 * 
 * https://github.com/EloiStree/2026_09_12_makecode_hello_uart_bluetooth_ks_4036
 */
input.onGesture(Gesture.EightG, function () {
    callback("EV", "8G")
})
function check_for_led (text: string) {
    if (text == "CR") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.red1)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.red1)
        if (true) {
            current_color_left = "r"
            current_color_right = "r"
        }
    }
    if (text == "CG") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.green1)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.green1)
        if (true) {
            current_color_left = "g"
            current_color_right = "g"
        }
    }
    if (text == "CB") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.blue1)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.blue1)
        if (true) {
            current_color_left = "b"
            current_color_right = "b"
        }
    }
    if (text == "CC") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.cyan)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.cyan)
        if (true) {
            current_color_left = "c"
            current_color_right = "c"
        }
    }
    if (text == "CP") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.purple)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.purple)
        if (true) {
            current_color_left = "p"
            current_color_right = "p"
        }
    }
    if (text == "CW") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.white)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.white)
        if (true) {
            current_color_left = "w"
            current_color_right = "w"
        }
    }
    if (text == "CY") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.yellow)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.yellow)
        if (true) {
            current_color_left = "y"
            current_color_right = "y"
        }
    }
    if (text == "C0") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.black)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.black)
        if (true) {
            current_color_left = "0"
            current_color_right = "0"
        }
    }
    if (text == "CLR") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.red1)
        current_color_left = "r"
    }
    if (text == "CLG") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.green1)
        current_color_left = "g"
    }
    if (text == "CLB") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.blue1)
        current_color_left = "b"
    }
    if (text == "CLC") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.cyan)
        current_color_left = "c"
    }
    if (text == "CLP") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.purple)
        current_color_left = "p"
    }
    if (text == "CLW") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.white)
        current_color_left = "w"
    }
    if (text == "CLY") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.yellow)
        current_color_left = "y"
    }
    if (text == "CL0") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.black)
        current_color_left = "0"
    }
    if (text == "CRR") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.red1)
        current_color_right = "r"
    }
    if (text == "CRG") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.green1)
        current_color_right = "g"
    }
    if (text == "CRB") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.blue1)
        current_color_right = "b"
    }
    if (text == "CRC") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.cyan)
        current_color_right = "c"
    }
    if (text == "CRP") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.purple)
        current_color_right = "p"
    }
    if (text == "CRW") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.white)
        current_color_right = "w"
    }
    if (text == "CRY") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.yellow)
        current_color_right = "y"
    }
    if (text == "CR0") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.black)
        current_color_right = "0"
    }
}
function check_for_wheels (text: string) {
    let list: string[] = []
    if (text == "up" || text == "u") {
        set_motors("255", "255")
    }
    if (text == "down" || text == "d") {
        set_motors("-255", "-255")
    }
    if (text == "left" || text == "l") {
        set_motors("0", "255")
    }
    if (text == "right" || text == "r") {
        set_motors("255", "0")
    }
    if (text == "stop" || text == "s") {
        set_motors("0", "0")
    }
    if (text == "full_left" || text == "ll") {
        set_motors("-255", "255")
    }
    if (text == "full_right" || text == "rr") {
        set_motors("255", "-255")
    }
    if (0 == "ML_".indexOf(text)) {
        split_list = text.split("_")
        set_motor_left_from_uart(list[1])
    }
    if (0 == "MR_".indexOf(text)) {
        split_list = text.split("_")
        set_motor_right_from_uart(list[1])
    }
    if (0 == "MLR_".indexOf(text)) {
        split_list = text.split("_")
        set_motors(list[1], list[2])
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
input.onGesture(Gesture.FreeFall, function () {
    callback("EV", "FALL")
})
input.onGesture(Gesture.LogoUp, function () {
    callback("EV", "LU")
})
function callback (prefix: string, value: string) {
    queue_push_uart.push("*" + prefix + value + "*")
}
input.onGesture(Gesture.TiltLeft, function () {
    callback("EV", "TL")
})
input.onGesture(Gesture.SixG, function () {
    callback("EV", "6G")
})
input.onGesture(Gesture.ScreenUp, function () {
    callback("EV", "SU")
})
function check_request_full_info (text: string) {
    if ("?1ms" == text) {
        time_between_state_emit_milliseconds = 100
    }
    if ("?5ms" == text) {
        time_between_state_emit_milliseconds = 500
    }
    if ("?1s" == text) {
        time_between_state_emit_milliseconds = 1000
    }
    if ("?5s" == text) {
        time_between_state_emit_milliseconds = 5000
    }
    if ("?" == text) {
        request_full_info()
    }
    if ("?C" == text) {
        callback("C", "" + input.compassHeading())
    }
    if ("?S" == text) {
        callback("S", "" + input.soundLevel())
    }
    if ("?L" == text) {
        callback("L", "" + input.lightLevel())
    }
    if ("?T" == text) {
        callback("T", "" + input.temperature())
    }
    if ("?A" == text) {
        callback("AX", "" + input.acceleration(Dimension.X))
        callback("AY", "" + input.acceleration(Dimension.Y))
        callback("AZ", "" + input.acceleration(Dimension.Z))
        callback("AS", "" + input.acceleration(Dimension.Strength))
    }
    if ("?AX" == text) {
        callback("AX", "" + input.acceleration(Dimension.X))
    }
    if ("?AY" == text) {
        callback("AY", "" + input.acceleration(Dimension.Y))
    }
    if ("?AZ" == text) {
        callback("AZ", "" + input.acceleration(Dimension.Z))
    }
    if ("?AS" == text) {
        callback("AS", "" + input.acceleration(Dimension.Strength))
    }
    if ("?ML" == text) {
        callback("ML", "" + current_motor_left)
    }
    if ("?MR" == text) {
        callback("MR", "" + current_motor_right)
    }
    if ("?LRL" == text) {
        callback("LRL", "" + MiniCar.PH1())
    }
    if ("?LRR" == text) {
        callback("LRR", "" + MiniCar.PH2())
    }
    if ("?LT" == text) {
        callback("LT", "" + MiniCar.LineTracking())
    }
    if ("?TIME" == text) {
        callback("TIME", "" + input.runningTime())
    }
    if ("?US" == text) {
        let current_ultrasonic = 0
        callback("US", "" + current_ultrasonic)
    }
    if ("?CL" == text) {
        callback("CL", "" + current_color_left)
    }
    if ("?CR" == text) {
        callback("CR", "" + current_color_right)
    }
    if ("?CLR" == text) {
        callback("CL", "" + current_color_left)
        callback("CR", "" + current_color_right)
    }
}
function set_motor_left_from_uart (speed: string) {
    uart_motor_left = speed
    if (speed.includes("-")) {
        MiniCar.motor(Motorlist.M1, Direction1.Backward, parseFloat(speed.substr(1, speed.length - -1)))
    } else {
        MiniCar.motor(Motorlist.M1, Direction1.Forward, parseFloat(speed))
    }
}
input.onGesture(Gesture.ScreenDown, function () {
    callback("EV", "SD")
})
input.onSound(DetectedSound.Loud, function () {
    callback("LOUD", "")
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    queue_data_waiting.push(bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine)))
    received_data_pack_count += 1
})
input.onButtonPressed(Button.AB, function () {
    callback("EV", "AB")
})
input.onGesture(Gesture.Shake, function () {
    callback("EV", "SHAKE")
})
function set_motors (left: string, right: string) {
    set_motor_left_from_uart(left)
    set_motor_right_from_uart(right)
}
input.onGesture(Gesture.TiltRight, function () {
    callback("EV", "TR")
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
input.onGesture(Gesture.LogoDown, function () {
    callback("EV", "LD")
})
input.onSound(DetectedSound.Quiet, function () {
    callback("quiet", "")
})
function set_motor_right_from_uart (speed: string) {
    uart_motor_right = speed
    if (speed.includes("-")) {
        MiniCar.motor(Motorlist.M2, Direction1.Backward, parseFloat(speed.substr(1, speed.length - -1)))
    } else {
        MiniCar.motor(Motorlist.M2, Direction1.Forward, parseFloat(speed))
    }
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    callback("LOGO", "")
})
input.onGesture(Gesture.ThreeG, function () {
    callback("EV", "3G")
})
input.onLogoEvent(TouchButtonEvent.Released, function () {
    callback("logo", "")
})
function request_full_info () {
    callback("C", "" + input.compassHeading())
    callback("S", "" + input.soundLevel())
    callback("L", "" + input.lightLevel())
    callback("T", "" + input.temperature())
    callback("AX", "" + input.acceleration(Dimension.X))
    callback("AY", "" + input.acceleration(Dimension.Y))
    callback("AZ", "" + input.acceleration(Dimension.Z))
    callback("AS", "" + input.acceleration(Dimension.Strength))
    callback("ML", "" + current_motor_left)
    callback("MR", "" + current_motor_right)
    callback("LRL", "" + MiniCar.PH1())
    callback("LRR", "" + MiniCar.PH2())
    callback("LT", "" + MiniCar.LineTracking())
    callback("TIME", "" + input.runningTime())
    callback("US", "" + MiniCar.ultra())
    callback("CL", "" + current_color_left)
    callback("CR", "" + current_color_right)
}
let current_button_b = 0
let previous_button_b = 0
let current_button_a = 0
let previous_button_a = 0
let data = ""
let uart_motor_right = ""
let received_data_pack_count = 0
let queue_data_waiting: string[] = []
let uart_motor_left = ""
let current_motor_right = ""
let current_motor_left = ""
let queue_push_uart: string[] = []
let split_list: string[] = []
let current_color_right = ""
let current_color_left = ""
let time_between_state_emit_milliseconds = 0
time_between_state_emit_milliseconds = 0
let export_spliter = "_"
irRemote.connectInfrared(DigitalPin.P16)
MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.white)
MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.white)
basic.showIcon(IconNames.Square)
set_motors("255", "255")
basic.pause(100)
set_motors("0", "0")
basic.forever(function () {
    data = queue_data_waiting.shift()
    check_for_led(data)
    check_for_wheels(data)
    check_request_full_info(data)
})
basic.forever(function () {
    previous_button_a = current_button_a
    previous_button_b = current_button_b
    if (input.buttonIsPressed(Button.A)) {
        current_button_a = 1
    } else {
        current_button_a = 0
    }
    if (input.buttonIsPressed(Button.B)) {
        current_button_b = 1
    } else {
        current_button_b = 0
    }
    if (previous_button_a != current_button_a) {
        if (1 == current_button_a) {
            callback("A", "")
        } else {
            callback("a", "")
        }
    }
    if (previous_button_b != current_button_b) {
        if (1 != current_button_b) {
            callback("B", "")
        } else {
            callback("b", "")
        }
    }
})
basic.forever(function () {
    if (queue_push_uart.length > 0) {
        bluetooth.uartWriteLine(queue_push_uart.shift())
    }
})
basic.forever(function () {
    if (time_between_state_emit_milliseconds > 0) {
        basic.pause(time_between_state_emit_milliseconds)
        request_full_info()
    }
})
basic.forever(function () {
    current_motor_left = uart_motor_left
    current_motor_right = uart_motor_right
})
basic.forever(function () {
    basic.pause(10)
    if (irRemote.returnIrButton() != 0) {
        callback("RCI", "" + irRemote.returnIrButton())
    }
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Any)) {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.red1)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.red1)
        callback("RC", "00")
    }
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Up)) {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.green1)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.red1)
        callback("RC", "10")
    }
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Unused_2)) {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.blue1)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.red1)
        callback("RC", "20")
    }
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Left)) {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.cyan)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.red1)
        callback("RC", "01")
    }
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Ok)) {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.purple)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.red1)
        callback("RC", "11")
    }
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Right)) {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.white)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.red1)
        callback("RC", "21")
    }
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Unused_3)) {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.yellow)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.red1)
        callback("RC", "02")
    }
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Down)) {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.black)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.red1)
        callback("RC", "12")
    }
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Unused_4)) {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.red1)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.green1)
        callback("RC", "22")
    }
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Number_1)) {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.green1)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.green1)
        callback("RC", "03")
    }
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Number_2)) {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.blue1)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.green1)
        callback("RC", "13")
    }
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Number_3)) {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.cyan)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.green1)
        callback("RC", "23")
    }
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Number_4)) {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.purple)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.green1)
        callback("RC", "04")
    }
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Number_5)) {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.white)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.green1)
        callback("RC", "14")
    }
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Number_6)) {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.yellow)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.green1)
        callback("RC", "24")
    }
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Number_7)) {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.black)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.green1)
        callback("RC", "05")
    }
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Number_8)) {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.red1)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.blue1)
        callback("RC", "15")
    }
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Number_9)) {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.green1)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.blue1)
        callback("RC", "25")
    }
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Star)) {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.blue1)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.blue1)
        callback("RC", "06")
    }
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Number_0)) {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.black)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.black)
        callback("RC", "16")
    }
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Hash)) {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.purple)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.blue1)
        callback("RC", "26")
    }
})
basic.forever(function () {
    basic.pause(5000)
})
basic.forever(function () {
	
})
