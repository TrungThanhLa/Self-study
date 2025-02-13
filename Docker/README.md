# Luồng chạy cơ bản của Docker

Docker file -> Virtual Machine -> Docker Image -> Docker container

Docker workflow image: ![img.png](img/img.png)

- Ta có 2 cách để chạy docker:
+ Tạo Dockerfile -> build ra thành 1 Docker Image -> Run docker image -> Container chạy và vào localhost theo port đã cấu hình
+ Tạo file docker-compose.yml -> docker compose up -> Container chạy và vào localhost theo port đã cấu hình

# Dockerfile
B1: Tạo 1 file Dockerfile
B2: Build bằng file Dockerfile để tạo ra Docker Image (VD: docker build -t my_image:1.0.0 .)
B3: Chạy Docker Image -> Khởi tạo ra 1 container của image (VD: docker run --name demo_container -d -p 80:80 -rm my_image:1.0.0)

# Docker compose file
B1: Tạo 1 file docker-compose.yml
B2: Cấu hình trong file docker-compose.yml
B3: Chạy lệnh docker compose up để chạy file docker-compose.yml -> Chạy ra số container theo cấu hình trong services

* Ở đây ta có thể chọn 2 cách để build ra 1 container chạy:
1, Điền image (VD: image: odoo:17.0 -> Lên Dockerhub tìm đến image odoo với version 17.0 và pull về chạy)
2, Điền dockerfile
VD:
    build:
      context: . (Lấy theo context của file hiện tại, "." tìm Dockerfile là toàn bộ thư mục hiện tại của file docker-compose.yml)
      dockerfile: Dockerfile
-> Lên Dockerhub tìm đến image odoo với version được cấu hình trong FROM và pull về chạy
-> Ngoài ra khác biệt khi chạy Dockerfile đấy là bên cạnh việc pull image về và chạy thì nó còn chạy các lệnh đã được
cấu hình sẵn trong Dockerfile

