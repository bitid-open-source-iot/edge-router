#!/bin/bash
read -p 'SSID: ' ssidvar
read -p 'Password: ' passvar

wifi_mgmt start Type=wpa SSID=$ssidvar Password=$passvar
# sudo wifi_mgmt insert Type=wpa SSID=$ssidvar Password=passvar
# sudo wifi_mgmt list
# sudo wifi_mgmt start xxx