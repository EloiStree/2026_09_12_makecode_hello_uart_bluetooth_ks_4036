def car_control():
    if data == "F":
        Speed_buffer()
        MiniCar.motor(Motorlist.M1, Direction1.FORWARD, 200)
        MiniCar.motor(Motorlist.M2, Direction1.FORWARD, 200)
    elif data == "B":
        MiniCar.motor(Motorlist.M1, Direction1.BACKWARD, 200)
        MiniCar.motor(Motorlist.M2, Direction1.BACKWARD, 200)
    elif data == "L":
        MiniCar.motor(Motorlist.M1, Direction1.BACKWARD, 100)
        MiniCar.motor(Motorlist.M2, Direction1.FORWARD, 100)
    elif data == "R":
        MiniCar.motor(Motorlist.M1, Direction1.FORWARD, 100)
        MiniCar.motor(Motorlist.M2, Direction1.BACKWARD, 100)
    elif data == "S":
        MiniCar.motor(Motorlist.M1, Direction1.BACKWARD, 0)
        MiniCar.motor(Motorlist.M2, Direction1.BACKWARD, 0)

def on_bluetooth_connected():
    MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.CYAN)
    MiniCar.motor(Motorlist.M1, Direction1.FORWARD, 200)
    MiniCar.motor(Motorlist.M2, Direction1.FORWARD, 0)
    basic.show_icon(IconNames.HEART)
bluetooth.on_bluetooth_connected(on_bluetooth_connected)

def Light_Follow():
    global ldr_l, ldr_r
    basic.clear_screen()
    ldr_l = MiniCar.PH1()
    ldr_r = MiniCar.PH2()
    if ldr_l > 650 and ldr_r > 650:
        MiniCar.motor(Motorlist.M1, Direction1.FORWARD, 100)
        MiniCar.motor(Motorlist.M2, Direction1.FORWARD, 100)
    elif ldr_l > 650 and ldr_r <= 650:
        MiniCar.motor(Motorlist.M1, Direction1.BACKWARD, 100)
        MiniCar.motor(Motorlist.M2, Direction1.FORWARD, 100)
    elif ldr_l <= 650 and ldr_r > 650:
        MiniCar.motor(Motorlist.M1, Direction1.FORWARD, 100)
        MiniCar.motor(Motorlist.M2, Direction1.BACKWARD, 100)
    else:
        MiniCar.motor(Motorlist.M1, Direction1.BACKWARD, 0)
        MiniCar.motor(Motorlist.M2, Direction1.BACKWARD, 0)

def on_bluetooth_disconnected():
    MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.YELLOW)
    MiniCar.motor(Motorlist.M1, Direction1.FORWARD, 0)
    MiniCar.motor(Motorlist.M2, Direction1.FORWARD, 200)
    basic.show_icon(IconNames.SAD)
bluetooth.on_bluetooth_disconnected(on_bluetooth_disconnected)

def Tracking_Smart():
    global value
    value = MiniCar.line_tracking()
    if value == 1:
        MiniCar.motor(Motorlist.M1, Direction1.FORWARD, 70)
        MiniCar.motor(Motorlist.M2, Direction1.BACKWARD, 70)
    elif value == 2:
        MiniCar.motor(Motorlist.M1, Direction1.BACKWARD, 70)
        MiniCar.motor(Motorlist.M2, Direction1.FORWARD, 70)
    elif value == 3:
        MiniCar.motor(Motorlist.M1, Direction1.FORWARD, 70)
        MiniCar.motor(Motorlist.M2, Direction1.FORWARD, 70)
    else:
        MiniCar.motor(Motorlist.M1, Direction1.FORWARD, 0)
        MiniCar.motor(Motorlist.M2, Direction1.FORWARD, 0)
def Ultrasonic_Follow():
    global distance
    distance = MiniCar.ultra()
    if distance >= 10 and distance <= 30:
        MiniCar.motor(Motorlist.M1, Direction1.FORWARD, 100)
        MiniCar.motor(Motorlist.M2, Direction1.FORWARD, 100)
    elif distance <= 6:
        MiniCar.motor(Motorlist.M1, Direction1.BACKWARD, 100)
        MiniCar.motor(Motorlist.M2, Direction1.BACKWARD, 100)
    elif distance < 10 and distance > 6 or distance > 30:
        MiniCar.motor(Motorlist.M1, Direction1.BACKWARD, 0)
        MiniCar.motor(Motorlist.M2, Direction1.BACKWARD, 0)
        basic.pause(200)
def avoid():
    global distance
    distance = MiniCar.ultra()
    if distance > 10:
        MiniCar.motor(Motorlist.M1, Direction1.FORWARD, 70)
        MiniCar.motor(Motorlist.M2, Direction1.FORWARD, 70)
    else:
        MiniCar.motor(Motorlist.M1, Direction1.BACKWARD, 70)
        MiniCar.motor(Motorlist.M2, Direction1.FORWARD, 70)
        basic.pause(200)

def on_uart_data_received():
    MiniCar.motor(Motorlist.M2, Direction1.FORWARD, 0)
    MiniCar.motor(Motorlist.M1, Direction1.FORWARD, 0)
bluetooth.on_uart_data_received(serial.delimiters(Delimiters.NEW_LINE),
    on_uart_data_received)

def music2():
    if data == "1":
        music.ring_tone(262)
    elif data == "2":
        music.ring_tone(294)
    elif data == "3":
        music.ring_tone(330)
    elif data == "4":
        music.ring_tone(349)
    elif data == "5":
        music.ring_tone(392)
    elif data == "6":
        music.ring_tone(440)
    elif data == "7":
        music.ring_tone(494)
    elif data == "8":
        music.ring_tone(523)
    elif data == "9":
        music.rest(music.beat(BeatFraction.HALF))
def Speed_buffer():
    MiniCar.motor(Motorlist.M1, Direction1.FORWARD, 50)
    MiniCar.motor(Motorlist.M2, Direction1.FORWARD, 50)
    basic.pause(100)
    MiniCar.motor(Motorlist.M1, Direction1.FORWARD, 80)
    MiniCar.motor(Motorlist.M2, Direction1.FORWARD, 80)
    basic.pause(100)
    MiniCar.motor(Motorlist.M1, Direction1.FORWARD, 110)
    MiniCar.motor(Motorlist.M2, Direction1.FORWARD, 110)
    basic.pause(100)
def LED_RGB():
    if data == "r":
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.RED1)
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.RED1)
    elif data == "g":
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.GREEN1)
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.GREEN1)
    elif data == "b":
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.BLUE1)
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.BLUE1)
    elif data == "y":
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.YELLOW)
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.YELLOW)
    elif data == "c":
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.CYAN)
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.CYAN)
    elif data == "p":
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.PURPLE)
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.PURPLE)
    elif data == "x":
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.BLACK)
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.BLACK)
distance = 0
value = 0
ldr_r = 0
ldr_l = 0
data = ""
basic.show_icon(IconNames.SMALL_HEART)
MiniCar.motor(Motorlist.M1, Direction1.FORWARD, 200)
MiniCar.motor(Motorlist.M2, Direction1.FORWARD, 200)
MiniCar.LED_OFF()
MiniCar.led_show()
MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.RED1)

def on_forever():
    pass
basic.forever(on_forever)
