read -p 'Username: ' uservar
read -p 'Password: ' passvar

rm /rockwell/passwdtest
touch /rockwell/passwdtest
mosquitto_passwd -b /rockwell/passwdtest $uservar $passvar
