import sys
import time

i = 0
while i <= 10:
    sys.stdout.write("\x0DProgresso:  "+str (i) +"/10")
    time.sleep(0.5)
    i += 1