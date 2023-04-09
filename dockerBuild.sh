# docker login registry.gitlab.com
# docker build -t registry.gitlab.com/savoir-ms/mobifarm-ussd-service:latest .
# 
# docker push registry.gitlab.com/savoir-ms/mobifarm-ussd-service:latest


#docker build -t 172.104.253.95:8095/mobigrow/com.wati.ussd.services:latest .

#docker build -t savoirms/mobigrow/com.wati.ussd.services:latest .

#docker push savoirms/mobigrow/com.wati.ussd.services:latest

docker build -t savoirms/mbg-pesame-app:latest .

docker push savoirms/mbg-pesame-app:latest

#docker push 172.104.253.95:8095/mobigrow/com.wati.ussd.services:latest