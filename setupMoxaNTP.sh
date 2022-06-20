#!/bin/sh

sudo timedatectl set-timezone Africa/Johannesburg

echo '#!/bin/sh'  | sudo tee -a /edge-router/cron-ntp.sh
echo 'ntpdate time.google.com'  | sudo tee -a /edge-router/cron-ntp.sh
echo 'hwclock –w'  | sudo tee -a /edge-router/cron-ntp.sh
echo 'exit 0'  | sudo tee -a /edge-router/cron-ntp.sh

sudo chmod 755 /edge-router/cron-ntp.sh
echo '*/2 * * * * root /edge-router/cron-ntp.sh'  | sudo tee -a /etc/crontab

echo 'DONE'