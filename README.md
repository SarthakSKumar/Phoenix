<img src = "https://github.com/adithya-s-k/Phoenix/blob/master/docs/Repo_Banner.png"></img>
<div align="center">

![License](https://img.shields.io/badge/License-MIT-blue)
[![SarthakSKumar - Phoenix](https://img.shields.io/static/v1?label=SarthakSKumar&message=Phoenix&color=blue&logo=github)](https://github.com/SarthakSKumar/Phoenix)
[![stars - Phoenix](https://img.shields.io/github/stars/SarthakSKumar/Phoenix?style=social)](https://github.com/SarthakSKumar/Phoenix/stars)
[![forks - Phoenix](https://img.shields.io/github/forks/SarthakSKumar/Phoenix?style=social)](https://github.com/SarthakSKumar/Phoenix/forks)<br>
[![issues - Phoenix](https://img.shields.io/github/issues/adithya-s-k/Phoenix)](https://github.com/adithya-s-k/Phoenix/issues)
![Maintained - yes](https://img.shields.io/badge/Maintained-yes-green)
![Contributions - welcome](https://img.shields.io/badge/Contributions-welcome-blueviolet)<br><br>
[![Site](https://img.shields.io/badge/View_site-Phoenix-2ea44f?style=for-the-badge)](https://SarthakSKumar.github.io/Phoenix/)

</div>

## Problem Statement 🗣️
The geography of India is extremely diverse, with landscapes ranging
from snow-capped mountain ranges to deserts, plains, hills and
plateaus. Though the state government claims to have built several
roads in rural areas, the data shows that hundreds of villages do not
have connectivity with major connecting roads. Due to poor
connectivity, villages are deprived of direct access to their
requirements.

## Our Solution 💡
We plan on solving this problem using VTOL (vertical take-off and
landing). People living in remote areas will be delivered the requested
items quickly and efficiently using VTOL. Crucial deliveries like medication
and blood bags can be delivered to the required area very swiftly and safely
using this VTOL.
VTOL is being chosen as our mode of delivery because it is faster than a drone
or quadcopter uses less energy and can be mass-produced for large scale
applications. But the main feature of a VTOL is in its name that is, Vertical
TakeOff and Landing, meaning, it does not require long airstrips or runways
to get airborne, consequently eliminating the need for expensive infrastructure
It holds the advantages of multiple UAVs combined into one.

## Methodology 🪜
We have chosen a tri-copter-based VTOL configuration:
During takeoff and landing, it will act like a tri-copter and when we switch from
takeoff mode to forward flight mode, the two front motors will tilt 90 degrees( it
will be facing forward, this will be accomplished by using a tilt-rotor mechanism)
and act as thrust motors for the plane.
For proof of this concept, we would build a small-scale prototype, keeping the
cost to a minimum and test out different configurations and properties like flight
duration, battery efficiency, payload, and flight range.
It holds the advantages of multiple UAVs combined into one.

## Technologies 🖥️
### Software
#### Website: HTML, CSS, Vanilla JS, Firebase
#### Simulation: ArduPilot (Mission Planner), SITL
#### Callibration: ArduPilot (Mission Planner), PixHawk

### Hardware
#### PixHawk | ESC | Brushless Motors | GPS Module | Radio Telemetry | Servo Motors | ESP32 CAM | FTDI Programmer

## Website 🌐
We have built an interactive and dynamic website which allows the user to 
specify the pickup and drop location. this is taken by the VTOL in realtime 
and acts accordingly. the user is allowed to track his/her order through the website
