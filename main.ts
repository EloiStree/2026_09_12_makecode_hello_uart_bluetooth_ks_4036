/**
 * # *C128* COMPASS
 * 
 * # *S15* SOUND
 * 
 * # *L0* LIGHT_MICRO_BIT
 * 
 * # *T31* TEMPERATURE
 * 
 * # *AX-16* ACCELEROMETER_X
 * 
 * # *AY1056* ACCELEROMETER_Y
 * 
 * # *AZ-32* ACCELEROMETER_Z
 * 
 * # *AS1056* ACCELEROMETER_STRENGTH
 * 
 * # *ML0* MOTOR_LEFT
 * 
 * # *MR0* MOTOR_RIGHT
 * 
 * # *LRL918* LIGHT_RESISTANCE_LEFT
 * 
 * # *LRR935* LIGHT_RESISTANCE_RIGHT
 * 
 * # *LT0* LINE_TACK_0123
 * 
 * # *TIME490390* TIME
 * 
 * # *US23* ULTRASONIC
 * 
 * # *CLR0G255B255* COLOR_LEFT_RESISTANCE
 * 
 * # *CRR0G255B255* COLOR_RIGHT_RESISTANCE
 * 
 * # *LT1* LINE_TRACK_LEFT
 * 
 * # *RT1* LINE_TRACK_RIGHT
 * 
 * # *EVSHAKE* SHAKED
 * 
 * # *EV3G* 3G FORCE
 * 
 * # *EV6G* 6G FORCE
 * 
 * # *EV8G* 8G FORCE
 * 
 * # *EVTR* TILT RIGHT
 * 
 * # *EVTL* TILT LEFT
 * 
 * # *EVLU* LOGO UP
 * 
 * # *EVLD* LOGO DOWN
 * 
 * # *EVSU* SCREEN UP
 * 
 * # *EVSU* SCREEN DOWN
 * 
 * # *EVFALL* MICRO BIT FALL
 * 
 * # *LOGO* LOGO TRUE
 * 
 * # *logo* LOGO FALSE
 * 
 * # *A* BUTTON A TRUE
 * 
 * # *a* BUTTON A FALSE
 * 
 * # *B* BUTTON B TRUE
 * 
 * # *b* BUTTON B FALSE
 * 
 * # *LOUD* LOUD TRUE
 * 
 * # *quiet* LOUD FALSE
 * 
 * # *EVAB* TRIGGER A+B
 */
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
function append_five_boolean_to_b62_char_build_list (w1: boolean, w2: boolean, w3: boolean, w4: boolean, w5: boolean, g1: boolean, g2: boolean, g3: boolean, g4: boolean, g5: boolean, to_apppend_at_list: string) {
    if (w1 == g1 && (w2 == g2 && (w3 == g3 && (w4 == g4 && w5 == g5)))) {
        building_list.push(to_apppend_at_list)
    }
}
function append_five_boolean_to_b62_char (w1: boolean, w2: boolean, w3: boolean, w4: boolean, w5: boolean, g1: boolean, g2: boolean, g3: boolean, g4: boolean, g5: boolean, to_apppend_at_list: string) {
	
}
function append_five_boolean_to_b32_build_list (b1: boolean, b2: boolean, b3: boolean, b4: boolean, b5: boolean) {
    append_five_boolean_to_b62_char_build_list(false, false, false, false, false, b1, b2, b3, b4, b5, "0")
    append_five_boolean_to_b62_char_build_list(false, false, false, false, true, b1, b2, b3, b4, b5, "1")
    append_five_boolean_to_b62_char_build_list(false, false, false, true, false, b1, b2, b3, b4, b5, "2")
    append_five_boolean_to_b62_char_build_list(false, false, false, true, true, b1, b2, b3, b4, b5, "3")
    append_five_boolean_to_b62_char_build_list(false, false, true, false, false, b1, b2, b3, b4, b5, "4")
    append_five_boolean_to_b62_char_build_list(false, false, true, false, true, b1, b2, b3, b4, b5, "5")
    append_five_boolean_to_b62_char_build_list(false, false, true, true, false, b1, b2, b3, b4, b5, "6")
    append_five_boolean_to_b62_char_build_list(false, false, true, true, true, b1, b2, b3, b4, b5, "7")
    append_five_boolean_to_b62_char_build_list(false, true, false, false, false, b1, b2, b3, b4, b5, "8")
    append_five_boolean_to_b62_char_build_list(false, true, false, false, true, b1, b2, b3, b4, b5, "9")
    append_five_boolean_to_b62_char_build_list(false, true, false, true, false, b1, b2, b3, b4, b5, "A")
    append_five_boolean_to_b62_char_build_list(false, true, false, true, true, b1, b2, b3, b4, b5, "B")
    append_five_boolean_to_b62_char_build_list(false, true, true, false, false, b1, b2, b3, b4, b5, "C")
    append_five_boolean_to_b62_char_build_list(false, true, true, false, true, b1, b2, b3, b4, b5, "D")
    append_five_boolean_to_b62_char_build_list(false, true, true, true, false, b1, b2, b3, b4, b5, "E")
    append_five_boolean_to_b62_char_build_list(false, true, true, true, true, b1, b2, b3, b4, b5, "F")
    append_five_boolean_to_b62_char_build_list(true, false, false, false, false, b1, b2, b3, b4, b5, "G")
    append_five_boolean_to_b62_char_build_list(true, false, false, false, true, b1, b2, b3, b4, b5, "H")
    append_five_boolean_to_b62_char_build_list(true, false, false, true, false, b1, b2, b3, b4, b5, "I")
    append_five_boolean_to_b62_char_build_list(true, false, false, true, true, b1, b2, b3, b4, b5, "J")
    append_five_boolean_to_b62_char_build_list(true, false, true, false, false, b1, b2, b3, b4, b5, "K")
    append_five_boolean_to_b62_char_build_list(true, false, true, false, true, b1, b2, b3, b4, b5, "L")
    append_five_boolean_to_b62_char_build_list(true, false, true, true, false, b1, b2, b3, b4, b5, "M")
    append_five_boolean_to_b62_char_build_list(true, false, true, true, true, b1, b2, b3, b4, b5, "N")
    append_five_boolean_to_b62_char_build_list(true, true, false, false, false, b1, b2, b3, b4, b5, "O")
    append_five_boolean_to_b62_char_build_list(true, true, false, false, true, b1, b2, b3, b4, b5, "P")
    append_five_boolean_to_b62_char_build_list(true, true, false, true, false, b1, b2, b3, b4, b5, "Q")
    append_five_boolean_to_b62_char_build_list(true, true, false, true, true, b1, b2, b3, b4, b5, "R")
    append_five_boolean_to_b62_char_build_list(true, true, true, false, false, b1, b2, b3, b4, b5, "S")
    append_five_boolean_to_b62_char_build_list(true, true, true, false, true, b1, b2, b3, b4, b5, "T")
    append_five_boolean_to_b62_char_build_list(true, true, true, true, false, b1, b2, b3, b4, b5, "U")
    append_five_boolean_to_b62_char_build_list(true, true, true, true, true, b1, b2, b3, b4, b5, "V")
}
input.onGesture(Gesture.EightG, function () {
    bool_8g = true
    basic.pause(500)
    bool_8g = false
    callback("EV", "8G")
})
function append_360_as_b62_building_list (_360: number) {
    append_int_as_b62_building_list(convertToText(Math.round(Math.map(_360, 0, 360, 0, 61))))
}
function check_for_led (text: string) {
    set_color_left_right_from_text(text)
}
function append_255_as_b62_building_list (num: number) {
    append_int_as_b62_building_list(convertToText(Math.round(Math.map(num, 0, 255, 0, 61))))
}
function check_for_wheels (text: string) {
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
    if (0 == text.indexOf("ML_")) {
        split_list = text.split("_")
        set_motor_left_from_uart(split_list[1])
    }
    if (0 == text.indexOf("MR_")) {
        split_list = text.split("_")
        set_motor_right_from_uart(split_list[1])
    }
    if (0 == text.indexOf("MLR_")) {
        split_list = text.split("_")
        set_motors(split_list[1], split_list[2])
    }
    if (text == "ML+") {
        set_motor_left_from_uart("255")
    }
    if (text == "ML-") {
        set_motor_left_from_uart("-255")
    }
    if (text == "ML0") {
        set_motor_left_from_uart("0")
    }
    if (text == "MR+") {
        set_motor_right_from_uart("255")
    }
    if (text == "MR-") {
        set_motor_right_from_uart("-255")
    }
    if (text == "MR0") {
        set_motor_right_from_uart("0")
    }
    if (text == "ML") {
        set_motor_left_from_uart("255")
    }
    if (text == "ml") {
        set_motor_left_from_uart("0")
    }
    if (text == "MR") {
        set_motor_right_from_uart("255")
    }
    if (text == "mr") {
        set_motor_right_from_uart("0")
    }
}
function callback_if_changed (prefix: string, previous: string, current: string) {
    if (previous != current) {
        callback(prefix, current)
    }
}
bluetooth.onBluetoothConnected(function () {
    set_color_left_right_from_text("CG")
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        # # # # #
        `)
    callback("CONNECTED", "")
})
function set_color_left_right_from_text (color_text: string) {
    set_color_left(color_text)
    set_color_right(color_text)
}
bluetooth.onBluetoothDisconnected(function () {
    set_color_left_right_from_text("CR")
    basic.showLeds(`
        # # # # #
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        `)
})
function set_right_binary_color_rgb (r: boolean, g: boolean, b: boolean) {
    binary_right_led_red = r
    binary_right_led_green = g
    binary_right_led_blue = b
}
input.onGesture(Gesture.FreeFall, function () {
    callback("EV", "FALL")
})
input.onGesture(Gesture.LogoUp, function () {
    callback("EV", "LU")
})
function append_1023_as_b62_building_list (num: number) {
    append_int_as_b62_building_list(convertToText(Math.round(Math.map(num, 0, 1023, 0, 61))))
}
function callback (prefix: string, value: string) {
    queue_push_uart.push("*" + prefix + value + "*")
}
input.onGesture(Gesture.TiltLeft, function () {
    callback("EV", "TL")
})
input.onGesture(Gesture.SixG, function () {
    bool_6g = true
    basic.pause(500)
    bool_6g = false
    callback("EV", "6G")
})
input.onGesture(Gesture.ScreenUp, function () {
    callback("EV", "SU")
})
function append_s1023_as_b62_building_list (num: number) {
    append_int_as_b62_building_list(convertToText(Math.round(Math.map(num, -1023, 1023, 0, 61))))
}
/**
 * (  ~mbit|t|P2> 10>  ~mbit|t|P8> 20> ~mbit|t|p2> 10> ~mbit|t|p8> 20> )x100
 */
function check_pin_2_8 () {
    split_list = data.split("_")
    if (split_list.length > 1) {
        if ("LPWM" == split_list[0]) {
            pins.servoWritePin(AnalogPin.P8, parseFloat(split_list[1]))
        }
        if ("RPWM" == split_list[0]) {
            pins.servoWritePin(AnalogPin.P2, parseFloat(split_list[1]))
        }
        if ("P2" == split_list[0]) {
            pins.servoWritePin(AnalogPin.P2, parseFloat(split_list[1]))
        }
    }
    if ("LPWM+" == data) {
        pins.servoWritePin(AnalogPin.P8, 180)
    }
    if ("LPWM0" == data) {
        pins.servoWritePin(AnalogPin.P8, 90)
    }
    if ("LPWM-" == data) {
        pins.servoWritePin(AnalogPin.P8, 0)
    }
    if ("RPWM+" == data) {
        pins.servoWritePin(AnalogPin.P2, 180)
    }
    if ("RPWM0" == data) {
        pins.servoWritePin(AnalogPin.P2, 90)
    }
    if ("RPWM-" == data) {
        pins.servoWritePin(AnalogPin.P2, 0)
    }
    if ("PINL" == data) {
        pins.digitalWritePin(DigitalPin.P8, 1)
    }
    if ("pinl" == data) {
        pins.digitalWritePin(DigitalPin.P8, 0)
    }
    if ("PINR" == data) {
        pins.digitalWritePin(DigitalPin.P2, 1)
    }
    if ("pinr" == data) {
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
}
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
function clamp_value (value: number, min: number, max: number) {
    if (value < min) {
        clamped_value = min
    } else {
        if (value > max) {
            clamped_value = max
        } else {
            clamped_value = value
        }
    }
}
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    queue_data_waiting.push(bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine)))
    received_data_pack_count += 1
})
function check_for_servo (text: string) {
    if (0 == text.indexOf("PS_")) {
        split_list = text.split("_")
        if (2 == parseFloat(split_list[1])) {
            pins.servoWritePin(AnalogPin.P2, parseFloat(split_list[2]))
        }
        if (3 == parseFloat(split_list[1])) {
            pins.servoWritePin(AnalogPin.P3, parseFloat(split_list[2]))
        }
        if (4 == parseFloat(split_list[1])) {
            pins.servoWritePin(AnalogPin.P4, parseFloat(split_list[2]))
        }
        if (5 == parseFloat(split_list[1])) {
            pins.servoWritePin(AnalogPin.P5, parseFloat(split_list[2]))
        }
        if (7 == parseFloat(split_list[1])) {
            pins.servoWritePin(AnalogPin.P7, parseFloat(split_list[2]))
        }
        if (8 == parseFloat(split_list[1])) {
            pins.servoWritePin(AnalogPin.P8, parseFloat(split_list[2]))
        }
        if (9 == parseFloat(split_list[1])) {
            pins.servoWritePin(AnalogPin.P9, parseFloat(split_list[2]))
        }
        if (10 == parseFloat(split_list[1])) {
            pins.servoWritePin(AnalogPin.P10, parseFloat(split_list[2]))
        }
    }
}
input.onButtonPressed(Button.AB, function () {
    callback("EV", "AB")
})
function set_color_left (color: string) {
    if (color == "CR" || color == "CLR") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.red1)
        current_color_left = "r"
        set_left_binary_color_rgb(true, false, false)
    }
    if (color == "CG" || color == "CLG") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.green1)
        current_color_left = "g"
        set_left_binary_color_rgb(false, true, false)
    }
    if (color == "CB" || color == "CLB") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.blue1)
        current_color_left = "b"
        set_left_binary_color_rgb(false, false, true)
    }
    if (color == "CC" || color == "CLC") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.cyan)
        current_color_left = "c"
        set_left_binary_color_rgb(false, true, true)
    }
    if (color == "CW" || color == "CLW") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.white)
        current_color_left = "w"
        set_left_binary_color_rgb(true, true, true)
    }
    if (color == "CY" || color == "CLY") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.yellow)
        current_color_left = "y"
        set_left_binary_color_rgb(true, true, false)
    }
    if (color == "CP" || color == "CLP") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.purple)
        current_color_left = "p"
        set_left_binary_color_rgb(true, false, true)
    }
    if (color == "C0" || color == "CL0") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.black)
        current_color_left = "0"
        set_left_binary_color_rgb(false, false, false)
    }
    if (0 == color.indexOf("C_") || 0 == color.indexOf("CL_")) {
        split_list = color.split("_")
        MiniCar.PWM_LED_L(pwm_led_l.pwm_red_r, 255 - parseFloat(split_list[1]))
        MiniCar.PWM_LED_L(pwm_led_l.pwm_green_r, 255 - parseFloat(split_list[2]))
        MiniCar.PWM_LED_L(pwm_led_l.pwm_blue_r, 255 - parseFloat(split_list[3]))
        current_color_left = "R" + parseFloat(split_list[1]) + "G" + parseFloat(split_list[2]) + "B" + parseFloat(split_list[3])
        set_left_binary_color_rgb(parseFloat(split_list[1]) > 150, parseFloat(split_list[2]) > 150, parseFloat(split_list[3]) > 150)
    }
}
input.onGesture(Gesture.Shake, function () {
    callback("EV", "SHAKE")
})
function build_and_send_boolean_uart () {
    building_list = []
    append_five_boolean_to_b32_build_list(input.buttonIsPressed(Button.A), input.buttonIsPressed(Button.B), input.logoIsPressed(), input.isGesture(Gesture.Shake), input.isGesture(Gesture.FreeFall))
    append_five_boolean_to_b32_build_list(bool_3g, bool_6g, bool_8g, input.isGesture(Gesture.LogoUp), input.isGesture(Gesture.LogoDown))
    append_five_boolean_to_b32_build_list(input.isGesture(Gesture.ScreenUp), input.isGesture(Gesture.ScreenDown), input.isGesture(Gesture.TiltLeft), input.isGesture(Gesture.TiltRight), true)
    append_five_boolean_to_b32_build_list(line_track_left == 1, line_track_right == 1, MiniCar.PH1() > 950, MiniCar.PH2() > 950, MiniCar.ultra() < 10)
    append_five_boolean_to_b32_build_list(parseFloat(current_motor_left) > 50, parseFloat(current_motor_right) > 50, parseFloat(current_motor_left) < -50, parseFloat(current_motor_right) < -50, binary_left_led_red)
    append_five_boolean_to_b32_build_list(binary_left_led_green, binary_left_led_blue, binary_right_led_red, binary_right_led_green, binary_right_led_blue)
    string_build = ""
    for (let value of building_list) {
        string_build = "" + string_build + value
    }
    previous_boolean_string_builder = current_boolean_string_builder
    current_boolean_string_builder = "*B_" + string_build + "*"
    if (previous_boolean_string_builder != current_boolean_string_builder) {
        bluetooth.uartWriteLine(current_boolean_string_builder)
    }
}
function set_motors (left: string, right: string) {
    set_motor_left_from_uart(left)
    set_motor_right_from_uart(right)
}
function set_left_binary_color_rgb (r: boolean, g: boolean, b: boolean) {
    binary_left_led_red = r
    binary_left_led_green = g
    binary_left_led_blue = b
}
input.onGesture(Gesture.TiltRight, function () {
    callback("EV", "TR")
})
function check_pins (text: string) {
    if (text == "P2") {
        pins.analogWritePin(AnalogPin.P2, 1023)
    }
    if (text == "p2") {
        pins.analogWritePin(AnalogPin.P2, 0)
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
function set_color_right (color: string) {
    if (color == "CR" || color == "CRR") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.red1)
        current_color_right = "r"
        set_right_binary_color_rgb(true, false, false)
    }
    if (color == "CG" || color == "CRG") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.green1)
        current_color_right = "g"
        set_right_binary_color_rgb(false, true, false)
    }
    if (color == "CB" || color == "CRB") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.blue1)
        current_color_right = "b"
        set_right_binary_color_rgb(false, false, true)
    }
    if (color == "CC" || color == "CRC") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.cyan)
        current_color_right = "c"
        set_right_binary_color_rgb(false, true, true)
    }
    if (color == "CW" || color == "CRW") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.white)
        current_color_right = "w"
        set_right_binary_color_rgb(true, true, true)
    }
    if (color == "CY" || color == "CRY") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.yellow)
        current_color_right = "y"
        set_right_binary_color_rgb(true, true, false)
    }
    if (color == "CP" || color == "CRP") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.purple)
        current_color_right = "p"
        set_right_binary_color_rgb(true, false, true)
    }
    if (color == "C0" || color == "CR0") {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.black)
        current_color_right = "0"
        set_right_binary_color_rgb(false, false, false)
    }
    if (0 == color.indexOf("C_") || 0 == color.indexOf("CR_")) {
        split_list = color.split("_")
        MiniCar.PWM_LED_R(pwm_led_r.pem_red_l, 255 - parseFloat(split_list[1]))
        MiniCar.PWM_LED_R(pwm_led_r.pwm_green_l, 255 - parseFloat(split_list[2]))
        MiniCar.PWM_LED_R(pwm_led_r.pwm_blue_l, 255 - parseFloat(split_list[3]))
        current_color_right = "R" + parseFloat(split_list[1]) + "G" + parseFloat(split_list[2]) + "B" + parseFloat(split_list[3])
        set_right_binary_color_rgb(parseFloat(split_list[1]) > 150, parseFloat(split_list[2]) > 150, parseFloat(split_list[3]) > 150)
    }
}
input.onGesture(Gesture.LogoDown, function () {
    callback("EV", "LD")
})
input.onSound(DetectedSound.Quiet, function () {
    callback("quiet", "")
})
function add_if_value_equals_to_b62 (value: string, is_equals: string, append: string) {
    if (value == is_equals) {
        building_list.push(append)
    }
}
function set_motor_right_from_uart (speed: string) {
    uart_motor_right = speed
    if (speed.includes("-")) {
        MiniCar.motor(Motorlist.M2, Direction1.Backward, parseFloat(speed.substr(1, speed.length - -1)))
    } else {
        MiniCar.motor(Motorlist.M2, Direction1.Forward, parseFloat(speed))
    }
}
function append_int_as_b62_building_list (int_value: string) {
    add_if_value_equals_to_b62(int_value, "0", "0")
    add_if_value_equals_to_b62(int_value, "1", "1")
    add_if_value_equals_to_b62(int_value, "2", "2")
    add_if_value_equals_to_b62(int_value, "3", "3")
    add_if_value_equals_to_b62(int_value, "4", "4")
    add_if_value_equals_to_b62(int_value, "5", "5")
    add_if_value_equals_to_b62(int_value, "6", "6")
    add_if_value_equals_to_b62(int_value, "7", "7")
    add_if_value_equals_to_b62(int_value, "8", "8")
    add_if_value_equals_to_b62(int_value, "9", "9")
    add_if_value_equals_to_b62(int_value, "10", "A")
    add_if_value_equals_to_b62(int_value, "11", "B")
    add_if_value_equals_to_b62(int_value, "12", "C")
    add_if_value_equals_to_b62(int_value, "13", "D")
    add_if_value_equals_to_b62(int_value, "14", "E")
    add_if_value_equals_to_b62(int_value, "15", "F")
    add_if_value_equals_to_b62(int_value, "16", "G")
    add_if_value_equals_to_b62(int_value, "17", "H")
    add_if_value_equals_to_b62(int_value, "18", "I")
    add_if_value_equals_to_b62(int_value, "19", "J")
    add_if_value_equals_to_b62(int_value, "20", "K")
    add_if_value_equals_to_b62(int_value, "21", "L")
    add_if_value_equals_to_b62(int_value, "22", "M")
    add_if_value_equals_to_b62(int_value, "23", "N")
    add_if_value_equals_to_b62(int_value, "24", "O")
    add_if_value_equals_to_b62(int_value, "25", "P")
    add_if_value_equals_to_b62(int_value, "26", "Q")
    add_if_value_equals_to_b62(int_value, "27", "R")
    add_if_value_equals_to_b62(int_value, "28", "S")
    add_if_value_equals_to_b62(int_value, "29", "T")
    add_if_value_equals_to_b62(int_value, "30", "U")
    add_if_value_equals_to_b62(int_value, "31", "V")
    add_if_value_equals_to_b62(int_value, "32", "W")
    add_if_value_equals_to_b62(int_value, "33", "X")
    add_if_value_equals_to_b62(int_value, "34", "Y")
    add_if_value_equals_to_b62(int_value, "35", "Z")
    add_if_value_equals_to_b62(int_value, "36", "a")
    add_if_value_equals_to_b62(int_value, "37", "b")
    add_if_value_equals_to_b62(int_value, "38", "c")
    add_if_value_equals_to_b62(int_value, "39", "d")
    add_if_value_equals_to_b62(int_value, "40", "e")
    add_if_value_equals_to_b62(int_value, "41", "f")
    add_if_value_equals_to_b62(int_value, "42", "g")
    add_if_value_equals_to_b62(int_value, "43", "h")
    add_if_value_equals_to_b62(int_value, "44", "i")
    add_if_value_equals_to_b62(int_value, "45", "j")
    add_if_value_equals_to_b62(int_value, "46", "k")
    add_if_value_equals_to_b62(int_value, "47", "l")
    add_if_value_equals_to_b62(int_value, "48", "m")
    add_if_value_equals_to_b62(int_value, "49", "n")
    add_if_value_equals_to_b62(int_value, "50", "o")
    add_if_value_equals_to_b62(int_value, "51", "p")
    add_if_value_equals_to_b62(int_value, "52", "q")
    add_if_value_equals_to_b62(int_value, "53", "r")
    add_if_value_equals_to_b62(int_value, "54", "s")
    add_if_value_equals_to_b62(int_value, "55", "t")
    add_if_value_equals_to_b62(int_value, "56", "u")
    add_if_value_equals_to_b62(int_value, "57", "v")
    add_if_value_equals_to_b62(int_value, "58", "w")
    add_if_value_equals_to_b62(int_value, "59", "x")
    add_if_value_equals_to_b62(int_value, "60", "y")
    add_if_value_equals_to_b62(int_value, "61", "z")
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    callback("LOGO", "")
})
input.onGesture(Gesture.ThreeG, function () {
    bool_3g = true
    basic.pause(500)
    bool_3g = false
    callback("EV", "3G")
})
function build_and_send_analog_uart () {
    building_list = []
    if (true) {
        append_int_as_b62_building_list(convertToText(Math.round(input.runningTime() / 60000 % 60)))
        append_int_as_b62_building_list(convertToText(Math.round(input.runningTime() / 1000 % 60)))
    }
    if (true) {
        append_int_as_b62_building_list(convertToText(Math.round(input.temperature())))
        append_255_as_b62_building_list(input.soundLevel())
        append_255_as_b62_building_list(input.lightLevel())
        append_360_as_b62_building_list(input.compassHeading())
    }
    if (true) {
        append_s1023_as_b62_building_list(input.acceleration(Dimension.X))
        append_s1023_as_b62_building_list(input.acceleration(Dimension.Y))
        append_s1023_as_b62_building_list(input.acceleration(Dimension.Z))
    }
    if (true) {
        append_s255_as_b62_building_list(parseFloat(current_motor_left))
        append_s255_as_b62_building_list(parseFloat(current_motor_right))
    }
    if (true) {
        clamp_value(MiniCar.PH1(), 0, 1023)
        append_1023_as_b62_building_list(clamped_value)
        clamp_value(MiniCar.PH2(), 0, 1023)
        append_1023_as_b62_building_list(clamped_value)
    }
    if (true) {
        clamp_value(MiniCar.ultra(), 0, 200)
        append_int_as_b62_building_list(convertToText(Math.round(Math.map(clamped_value, 0, 200, 0, 61))))
        clamp_value(MiniCar.ultra(), 0, 61)
        append_int_as_b62_building_list(convertToText(Math.round(clamped_value)))
    }
    string_build = ""
    for (let value of building_list) {
        string_build = "" + string_build + value
    }
    previous_analog_string_builder = current_analog_string_builder
    current_analog_string_builder = "*A_" + string_build + "*"
    if (previous_analog_string_builder != current_analog_string_builder) {
    	
    }
    bluetooth.uartWriteLine(current_analog_string_builder)
}
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
    callback("CL", current_color_right)
    callback("CR", current_color_left)
    callback("LT", "" + line_track_left)
    callback("RT", "" + line_track_right)
}
function append_s255_as_b62_building_list (num: number) {
    append_int_as_b62_building_list(convertToText(Math.round(Math.map(num, -255, 255, 0, 61))))
}
let current_button_b = 0
let previous_button_b = 0
let current_button_a = 0
let previous_button_a = 0
let current_line_tracking = 0
let previous_line_tracking = 0
let pin_2_analog_read_value = 0
let pin_8_digit_read_value = 0
let current_analog_string_builder = ""
let previous_analog_string_builder = ""
let uart_motor_right = ""
let current_boolean_string_builder = ""
let previous_boolean_string_builder = ""
let string_build = ""
let binary_left_led_blue = false
let binary_left_led_green = false
let binary_left_led_red = false
let line_track_right = 0
let line_track_left = 0
let bool_3g = false
let received_data_pack_count = 0
let queue_data_waiting: string[] = []
let clamped_value = 0
let uart_motor_left = ""
let current_color_right = ""
let current_color_left = ""
let current_motor_right = ""
let current_motor_left = ""
let data = ""
let bool_6g = false
let queue_push_uart: string[] = []
let binary_right_led_blue = false
let binary_right_led_green = false
let binary_right_led_red = false
let split_list: string[] = []
let bool_8g = false
let building_list: string[] = []
let time_between_state_emit_milliseconds = 0
time_between_state_emit_milliseconds = 0
let export_spliter = "_"
irRemote.connectInfrared(DigitalPin.P16)
set_color_left_right_from_text("CW")
basic.showIcon(IconNames.Square)
set_motors("255", "255")
basic.pause(100)
set_motors("0", "0")
basic.forever(function () {
    let is_reading_pin_right_analog = 0
    let is_reading_pin_left_digit = 0
    if (is_reading_pin_left_digit) {
        pin_8_digit_read_value = pins.digitalReadPin(DigitalPin.P8)
    }
    if (is_reading_pin_right_analog) {
        pin_2_analog_read_value = pins.analogReadPin(AnalogReadWritePin.P2)
    }
})
basic.forever(function () {
    basic.pause(2000)
})
basic.forever(function () {
    basic.pause(10)
    if (irRemote.returnIrButton() != 0) {
        callback("RCI", "" + irRemote.returnIrButton())
    }
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Any)) {
        callback("RC", "00")
    }
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Up)) {
        set_color_left_right_from_text("CG")
        callback("RC", "10")
    }
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Unused_2)) {
        callback("RC", "20")
    }
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Left)) {
        set_color_left_right_from_text("CR")
        callback("RC", "01")
    }
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Ok)) {
        set_color_left_right_from_text("CW")
        callback("RC", "11")
    }
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Right)) {
        set_color_left_right_from_text("CB")
        callback("RC", "21")
    }
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Unused_3)) {
        callback("RC", "02")
    }
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Down)) {
        set_color_left_right_from_text("C0")
        callback("RC", "12")
    }
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Unused_4)) {
        callback("RC", "22")
    }
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Number_1)) {
        callback("RC", "03")
    }
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Number_2)) {
        callback("RC", "13")
    }
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Number_3)) {
        callback("RC", "23")
    }
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Number_4)) {
        callback("RC", "04")
    }
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Number_5)) {
        callback("RC", "14")
    }
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Number_6)) {
        callback("RC", "24")
    }
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Number_7)) {
        callback("RC", "05")
    }
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Number_8)) {
        callback("RC", "15")
    }
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Number_9)) {
        callback("RC", "25")
    }
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Star)) {
        callback("RC", "06")
    }
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Number_0)) {
        set_color_left_right_from_text("C0")
        callback("RC", "16")
    }
    if (irRemote.returnIrButton() == irRemote.irButton(IrButton.Hash)) {
        callback("RC", "26")
    }
})
basic.forever(function () {
	
})
basic.forever(function () {
    if (time_between_state_emit_milliseconds > 0) {
        basic.pause(time_between_state_emit_milliseconds)
        request_full_info()
    }
})
basic.forever(function () {
    if (queue_push_uart.length > 0) {
        bluetooth.uartWriteLine(queue_push_uart.shift())
    }
})
basic.forever(function () {
    previous_line_tracking = current_line_tracking
    current_line_tracking = MiniCar.LineTracking()
    if (previous_line_tracking != current_line_tracking) {
        if (current_line_tracking == 0) {
            line_track_left = 1
            line_track_right = 1
            callback("LT1", "")
            callback("RT1", "")
        }
        if (current_line_tracking == 1) {
            line_track_left = 0
            line_track_right = 1
            callback("LT0", "")
            callback("RT1", "")
        }
        if (current_line_tracking == 2) {
            line_track_left = 1
            line_track_right = 0
            callback("LT1", "")
            callback("RT0", "")
        }
        if (current_line_tracking == 3) {
            line_track_left = 0
            line_track_right = 0
            callback("RT0", "")
            callback("LT0", "")
        }
    }
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
    if (queue_data_waiting.length > 0) {
        data = queue_data_waiting.shift()
        check_for_led(data)
        check_for_wheels(data)
        check_request_full_info(data)
        check_for_servo(data)
        check_pins(data)
        check_pin_2_8()
        if (data == "PING") {
            callback("PONG", "")
        }
    }
})
basic.forever(function () {
    basic.pause(100)
    build_and_send_boolean_uart()
    build_and_send_analog_uart()
})
basic.forever(function () {
    current_motor_left = uart_motor_left
    current_motor_right = uart_motor_right
})
control.inBackground(function () {
    control.waitMicros(6000)
})
