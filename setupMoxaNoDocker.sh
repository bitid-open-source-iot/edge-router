#!/bin/bash

read -p "UPGRADE THE OS? REMEMBER TO SELECT (I) WHEN PROPMTED! (Y/N): " user_response_os

# Convert the response to uppercase
user_response_os=$(echo "$user_response_os" | tr '[:lower:]' '[:upper:]')

# Check the user's response
if [ "$user_response_os" == "Y" ]; then
    echo "Upgrading OS..."
    sudo apt-get -y update
    sudo apt-get -y upgrade
    sudo apt-get dist-upgrade
    sudo apt-get -y update
    sudo apt-get -y upgrade
    sudo apt-get dist-upgrade
    sudo reboot
else
    echo "Skipping OS upgrade."
fi

echo "MAKE SURE YOU HAVE UPGRADED THE MOXA DEVICE."

# Ask the user if they want to install Git
read -p "DO YOU WANT TO INSTALL GIT? (Y/N): " user_response

# Convert the response to uppercase
user_response=$(echo "$user_response" | tr '[:lower:]' '[:upper:]')

# Check the user's response
if [ "$user_response" == "Y" ]; then
    echo "Installing Git..."
    
    # Update package list and install Git
    if command -v apt-get &> /dev/null; then
        sudo apt-get update
        sudo apt-get install git -y
    elif command -v yum &> /dev/null; then
        sudo yum install git -y
    elif command -v brew &> /dev/null; then
        brew install git
    else
        echo "Package manager not found. Please install Git manually."
    fi
    
    echo "Git installation complete."
else
    echo "Git installation aborted."
fi



# Check if wget is installed
if ! command -v wget &> /dev/null
then
    echo "wget could not be found. Installing wget..."

    # Check if the package manager is apt (Debian/Ubuntu)
    if command -v apt-get &> /dev/null
    then
        sudo apt-get update
        sudo apt-get install wget -y
    # Check if the package manager is yum (CentOS/RHEL)
    elif command -v yum &> /dev/null
    then
        sudo yum install wget -y
    # Check if the package manager is dnf (Fedora)
    elif command -v dnf &> /dev/null
    then
        sudo dnf install wget -y
    # Check if the package manager is pacman (Arch Linux)
    elif command -v pacman &> /dev/null
    then
        sudo pacman -S wget --noconfirm
    else
        echo "No compatible package manager found. Please install wget manually."
        exit 1
    fi

    echo "wget installed successfully."
else
    echo "wget is already installed."
fi






echo "installing missing dependencies"

read -p "DO YOU WANT TO INSTALL dependencies libatomic1 and build-essential ? (Y/N): " user_response_dependencies
user_response_dependencies=$(echo "$user_response_dependencies" | tr '[:lower:]' '[:upper:]')

# Check the user's response
if [ "$user_response_dependencies" == "Y" ]; then
    echo "installing dependencies..."
    sudo apt-get install libatomic1 -y
    sudo apt-get install -y build-essential
else
    echo "skipping dependencies installation."
fi

# read -p "DO YOU WANT TO INSTALL PYTHON? (Y/N): " user_response_python
# user_response_python=$(echo "$user_response_python" | tr '[:lower:]' '[:upper:]')

# # Check the user's response
# if [ "$user_response_python" == "Y" ]; then
#     echo "Installing python..."
#     sudo apt-get install -y build-essential libssl-dev zlib1g-dev libbz2-dev \
#     libreadline-dev libsqlite3-dev wget curl llvm libncurses5-dev libncursesw5-dev \
#     xz-utils tk-dev libffi-dev liblzma-dev python3-openssl

#     wget https://www.python.org/ftp/python/3.12.0/Python-3.12.0.tgz
    
#     tar -xf Python-3.12.0.tgz
    
#     cd Python-3.12.0
#     ./configure --enable-optimizations

#     make -j 8

#     make altinstall

#     python3.12 --version
# else
#     echo "skipping python installation."
# fi




read -p "DO YOU WANT TO INSTALL NVM? (Y/N): " user_response_nvm

# Convert the response to uppercase
user_response_nvm=$(echo "$user_response_nvm" | tr '[:lower:]' '[:upper:]')

# Check the user's response
if [ "$user_response_nvm" == "Y" ]; then
    echo "Installing nvm..."
    wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

    export NVM_DIR="$HOME/.nvm" 

    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

    nvm install 14.16.1
    echo "Completed nvm installation."
else
    echo "skipping nvm installation."
fi


# Check if /edge-router directory exists, if not, create it
if [ ! -d "/edge-router" ]; then
    sudo mkdir /edge-router
    echo "/edge-router directory created."
else
    echo "/edge-router directory already exists."
fi

# Check if /var/www/node/edge-router directory exists, if not, create it
if [ ! -d "/edge-router" ]; then
    sudo mkdir /edge-router
    echo "/edge-router directory created."
else
    echo "/edge-router directory already exists."
fi


# Directory to check
DIR="/var/www/node/edge-router"

# Check if directory exists
if [ -d "$DIR" ]; then
  echo "Directory $DIR exists."
else
  echo "Directory $DIR does not exist. Creating..."
  sudo mkdir -p "$DIR"
  if [ $? -eq 0 ]; then
    echo "Directory $DIR created successfully."
    sudo chown -R moxa:moxa "$DIR"
  else
    echo "Failed to create directory $DIR."
  fi
fi




# # Generate SSH key with the name moxa
# read -p "DO YOU WANT TO GENERATE a MOXA SSH KEY? (Y/N): " user_response_sshkey

# # Convert the response to uppercase
# user_response_sshkey=$(echo "$user_response_sshkey" | tr '[:lower:]' '[:upper:]')


# # Check the user's response
# if [ "$user_response_sshkey" == "Y" ]; then
#     ssh-keygen -t rsa -b 2048 -f ~/.ssh/moxa -N ""

#     # Check if the key was created successfully
#     if [ -f ~/.ssh/moxa.pub ]; then
#     # Echo the public key to the screen
#     cat ~/.ssh/moxa.pub
#     else
#     echo "Failed to generate SSH key."
#     fi
# else
#     echo "Skipping SSH key generation."
# fi


# Generate SSH key with the name moxa
read -p "DO YOU WANT TO CLONE EDGE-ROUTER? (Y/N): " user_response_clone

# Convert the response to uppercase
user_response_clone=$(echo "$user_response_clone" | tr '[:lower:]' '[:upper:]')


# Check the user's response
if [ "$user_response_clone" == "Y" ]; then

    # Variables
    REPO_URL="https://github.com/bitid-open-source-iot/edge-router.git"
    TARGET_DIR="/var/www/node/edge-router"

    # Create target directory if it doesn't exist
    if [ ! -d "$TARGET_DIR" ]; then
    echo "Creating target directory..."
    sudo mkdir -p $TARGET_DIR
    fi

    # Set permissions for the target directory
    echo "Setting permissions for the target directory..."
    sudo chown -R $USER:$USER $TARGET_DIR

    # Clone the repository
    echo "Cloning the repository..."
    git clone $REPO_URL $TARGET_DIR

    # Set appropriate permissions for the cloned directory
    echo "Setting permissions for the cloned directory..."
    sudo chown -R moxa:moxa $TARGET_DIR

    echo "Repository cloned successfully into $TARGET_DIR"

    echo 'installing node modules'

    cd /var/www/node/edge-router
    npm i
    cp config.template.json config.json
else
    echo "Skipping repository clone."
fi



echo "Creating edge-router service...if its not there already"

SERVICE_NAME=edge-router
SERVICE_FILE=/etc/systemd/system/$SERVICE_NAME.service
NODE_PATH=/home/moxa/.nvm/versions/node/v14.16.1/bin/node
SCRIPT_PATH=/var/www/node/edge-router/index.js
USER=moxa
GROUP=moxa

# Check if the service file exists
if [ ! -f "$SERVICE_FILE" ]; then
  echo "Service $SERVICE_NAME not found. Creating service..."

  # Create the service file with the specified contents
sudo bash -c "cat <<EOL > /etc/systemd/system/edge-router.service
[Service]
ExecStart=$NODE_PATH $SCRIPT_PATH
Restart=always
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=$SERVICE_NAME
User=$USER
Group=$GROUP
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
EOL"

  # Reload systemd to recognize the new service
  sudo systemctl daemon-reload

  # Enable the service to start on boot
  sudo systemctl enable $SERVICE_NAME

  # Start the service immediately
  sudo systemctl start $SERVICE_NAME

  echo "Service $SERVICE_NAME created and started."
  echo "enable it with sudo systemctl enable $SERVICE_NAME"
  echo "and start it with sudo systemctl start $SERVICE_NAME"
else
  echo "Service $SERVICE_NAME already exists."
  echo "You can restart it with sudo systemctl restart $SERVICE_NAME"
fi

echo "To test the service run: $NODE_PATH $SCRIPT_PATH"



echo "Creating check_and_start_cell_mgmt.sh script"
# Specify the name of the new script
new_script_name="check_and_start_cell_mgmt.sh"

if [ ! -f "/edge-router/$new_script_name" ]; then
    # Define the content of the new script
    script_content='#!/bin/bash

    current_date_time=$(date "+%Y-%m-%d %H:%M:%S")
    echo $current_date_time
    
    # Check the status of cell_mgmt
    status=$(sudo cell_mgmt status)

    echo $status

    # Check if the response contains "disconnected"
    # if [[ $status == *"disconnected"* ]]; then
    if echo "$status" | grep -q "disconnected"; then
        echo "got status: $status....trying: sudo cell_mgmt start APN=mobile.tech5.co.za"

        # Start cell_mgmt with the specified APN.
        echo "Stopping cell_mgmt....trying: sudo cell_mgmt stop"
        statusError1=$(sudo cell_mgmt stop)
        echo "sudo cell_mgmt stop: $statusError1: $statusError1"
        statusError2=$(sudo cell_mgmt start APN=mobile.tech5.co.za)
        echo "Starting cell_mgmt....trying: sudo cell_mgmt start APN=mobile.tech5.co.za: statusError2: $statusError2"
    fi'

    # Create the new script and write the content to it
    echo "$script_content" | sudo tee /edge-router/$new_script_name

    # Make the new script executable
    sudo chmod +x /edge-router/$new_script_name

    # Confirm creation
    echo "Script /edge-router/$new_script_name has been created and made executable."
else
    echo "Script /edge-router/$new_script_name already exists. Skipping creation."
fi



echo "Updating crontab to run check_and_start_cell_mgmt.sh every 2 minutes"

# Define the cron job you want to add
cron_job="*/1 * * * * /edge-router/$new_script_name >> /edge-router/$new_script_name.log 2>&1"

# Check if the cron job already exists
(sudo crontab -l | grep -Fxq "$cron_job")

# If the cron job does not exist, add it
if [ $? -ne 0 ]; then
    (sudo crontab -l; echo "$cron_job") | sudo crontab -
    echo "Cron job added."
else
    echo "Cron job already exists."
fi


read -p "YOU SHOULD REBOOT. DO YOU WANT TO REBOOT? (Y/N): " user_response_reboot

# Convert the response to uppercase
user_response_reboot=$(echo "$user_response_reboot" | tr '[:lower:]' '[:upper:]')


# Check the user's response
if [ "$user_response_reboot" == "Y" ]; then
    sudo reboot
fi