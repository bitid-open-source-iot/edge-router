#!/bin/bash

# Check the status of cell_mgmt
status=$(sudo cell_mgmt status)

# Check if the response contains "disconnected"
if [[ $status == *"disconnected"* ]]; then
  # Start cell_mgmt with the specified APN
  sudo cell_mgmt start APN=mobile.tech5.co.za
fi
