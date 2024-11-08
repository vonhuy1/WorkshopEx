+++
title = "Cấu trúc file"
type = ""
weight = 1
pre = "3.1. "
+++

#### Thư mục content

1. Chúng ta tạm quy ước với nhau là sẽ tổ chức bài Lab với 2 cấp độ là tối đa (VD: **2. -> 2.1.** tương ứng với **2.write-content -> 2.1-Directory structure**)

2. Trong mỗi thư mục sẽ bao gồm:
   - Các thư mục thứ cấp.
   - Tập tin **_index.md** : Chứa nội dung tiếng Anh.
   - Tập tin **_index.vi.md** : Chứa nội dung tiếng Việt.

3. Nếu chỉ đang viết guide tiếng Việt thôi thì sẽ copy **_index.vi.md** ra một bản nữa và đổi tên thành **_index.md** nhá. (Để dịch sau)

#### Thư mục static/images
1. Đây sẽ là thư mục chứa ảnh cho Lab Guide. Mọi ảnh đều được bỏ vào trong đây. Có thể phân cấp thư mục cho các ảnh để dễ quản lý ảnh.

2. Các ảnh này sẽ được sử dụng trong bài viết bằng thẻ gán ảnh:
    `![Đây là tên ảnh (Hiển thị khi không load được ảnh)](/images/2.1/SNAG001.png?width=90pc)`
    
    > [!TIP]
    > Sử dụng ?width=90pc với các ảnh toàn màn hình và ?width=40pc hoặc ?width=50pc đối với các ảnh crop.

#### Thư mục public
1. Đây là thư mục sẽ được tạo ra bởi hugo.

2. Sau khi viết hoàn chỉnh guide hoặc một phần guide mà muốn kiểm tra hiển thị thì có thể chạy lệnh sau để build project: `$ hugo`
   
3. Sau khi build hoàn thành thì sẽ có thư mục public xuất hiện. Tiến hành chạy server để xem thành quả tại: **http://localhost:1313** `$ hugo server`

![FolderContent](/images/3.content/0001-content.png)

*Tới đây rồi thì hãy thử xóa thư mục public và chạy thử xem Guide này có hoạt động được không nhá.*