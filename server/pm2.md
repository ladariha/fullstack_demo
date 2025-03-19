pm2 start
pm2 start --restart-delay=10

pm2 stop all


$ pm2 restart app_name
$ pm2 reload app_name
$ pm2 stop app_name
$ pm2 delete app_name

pm2 logs
pm2 logs --lines 200
pm2 monit
