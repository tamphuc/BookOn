# BookOn

## Cấu trúc commit message

`<type>[optional scope]: <description>`

`[optional body]`

`[optional footer]`

## Một số type phổ biến
Một số type phổ biến được khuyên sử dụng bao gồm:

feat: thêm một feature.

fix: fix bug cho hệ thống.

refactor: sửa code nhưng không fix bug cũng không thêm feature hoặc đôi khi bug cũng được fix từ việc refactor.

docs: thêm/thay đổi document.

chore: những sửa đổi nhỏ nhặt không liên quan tới code.

style: những thay đổi không làm thay đổi ý nghĩa của code như thay đổi css/ui chẳng hạn.

perf: code cải tiến về mặt hiệu năng xử lý.

vendor: cập nhật version cho các dependencies, packages.

### ex1:
feat: implement multi-languages
### ex2:
fix: homepage's bug



### note:
render: tao ra mot noi dung xuat ra hinh anh, am thanh 

id: dinh danh 

respon: phan hoi 

request: yeu cau

## Trước khi code:
git pull

## Sau khi code:
git add .

git commit -m ""

git pull

git push origin main

## kiểm tra trên git có cập nhật thì:
git add .

git commit -m ""

git pull

## run:
cd server, npm install, npm run start

cd client, npm install, npm run start 

## front end cần làm thêm:
sign up:dong bao loi username exits, email exist

sign in:dong bao loi username wrong, password wrong

## Tiến độ: 
Full: sign in, sign up 

Back-end:sign in, sign up, search(name, author,tag) 

## Việc cần làm tiếp theo:
Back end:search, import book, read book

Giao diện: home, search, import book

