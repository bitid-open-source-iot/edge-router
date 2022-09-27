#!/bin/bash
echo 'installing git'
sudo apt update
sudo apt install git

echo 'cloning cellular-keepalive from git'
git clone https://github.com/Moxa-Linux/cellular-keepalive.git\
&& sudo mv cellular-keepalive/cellular-keepalive /usr/sbin/cellular-keepalive\
&& sudo mv cellular-keepalive/cellular-keepalive.service /etc/systemd/system/cellular-keepalive.service\
&& sudo chmod +x /usr/sbin/cellular-keepalive\
&& sudo systemctl enable cellular-keepalive\
&& sudo systemctl restart cellular-keepalive\
&& rm -rf cellular-keepalive

echo 'setting apn to mobile.tech5.co.za and dialing up'
sudo cell_mgmt set_apn mobile.tech5.co.za\
&& sudo cell_mgmt start APN=mobile.tech5.co.za




