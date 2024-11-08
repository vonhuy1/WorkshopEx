+++
title = "Nội dung"
type = ""
weight = 2
pre = "3.2. "
+++

#### Phần tiêu đề

Ở đầu mỗi trang đều có phần header này để hiển thị **tiêu đề** và xác định điều hướng ở bên **Navigation panel bên trái trang**.

 - `title = "Write content"` : Để nội dung ngắn gọn súc tích để vừa 1 dòng ở bên Navigation panel bên trái.
 - `chapter = false` : Để mặc định là false. Title ở trên cũng sẽ hiển thị là h1 ở trong bài viết.
 - `weiht:`  Dùng để sắp xếp index của tiêu đề
 - `pre = "<b>2. </b>"` : Đây là đánh số cho trang hiển thị ở **Navigation panel bên trái.**
  ![header](/images/3.content/0002-header.png)   
#### Heading Section
- Chúng ta sẽ thống nhất việc dùng tiêu đề cho các section trong 1 trang sẽ sử dụng h4 (####).

#### Table of Contents (TOC)
1. Sau khi viết xong nội dung (hoặc liệt kê xong các Heading của 1 trang), chúng ta có thể xây dựng **Table of Contents (TOC)** tự động bằng plug-in.

2. Sử dụng tổ hợp phím `Ctrl + Shift + P` sau đó gõ vào **Create Table of Contents** rồi chọn lựa chọn của plug-in M**arkdown All in One**. Enter.
   - Chúng ta sẽ có một cái TOC như sau:

   - Content:
    ![TOC](/images/3.content/0003-tableofcontent.png)

#### Chèn icon trong các phần giới thiệu
1. Ta sử dụng bộ icon tải về từ AWS [here](https://aws.amazon.com/vi/architecture/icons/)
2. Thực hiện lệnh chèn như sau:
    `{< figure src="../images/fcj.png" title="First Cloud Journey" width=150pc >}`


#### Phần ghi chú
1. Trong bài viết có thể sẽ có các đoạn cần làm nổi bật lên như Ghi chú, Cảnh báo,… thì sẽ dùng shortcode theo hướng dẫn tại [đây](https://learn.netlify.app/en/ shortcodes/notice/)

2. Note Note. See more at [Note](https://github.com/Van-Hoang-Kha/van-hoang-kha.github.io/blob/master/source/note.txt)
   > [!NOTE]
   > Đây là Note

3. Notes Info
   > [!INFO]
   > Đây là Info

4. Notes Tip
   > [!TIP]
   > Đây là Tip

5. Notes Warning
   > [!WARNING]
   > Đây là Warning

6. Notes Caution
   > [!CAUTION]
   > Đây là Caution

7. Notes Important
   > [!IMPORTANT]
   > Đây là important

#### Phần tập tin đính kèm

1. Phần này sẽ thực hiện theo hướng dẫn tại [đây](https://learn.netlify.app/en/shortcodes/attachments/)

2. **Vị trí đặt tập tin sẽ là trong thư mục tương ứng với tên trang md.** như sau:
   - **_index.md —> _index.files**
   - **- _index.vi.md —> _index.vi.files**

> [!NOTE]
> Nghĩa là nếu có nhiều ngôn ngữ thì mỗi ngôn ngữ 1 thư mục như vậy cho 1 trang.

3. **Sử dụng shortcode sau để tạo phần đính kèm:**
 - **title** : Tiêu đề phần đính kèm
 - **pattern** : Xác định các tập tin được hiện ra trong box (có thể để tên tập tin hoặc pattern để xác định theo đuôi)

#### Phần vẽ bảng
Để đơn giản hóa việc vẽ bảng, người viết thường sử dụng công cụ [Tables Generator](https://www.tablesgenerator.com/markdown_tables#google_vignette)
 - Truy cập tới trang.
 - Nhập nội dung xong bấm **Generate rồi Copy to clipboard.**
 - Xong vô đây **Paste** vào thôi.
  
#### Phần hình ảnh
 1. **Phần mềm chụp màn hình khuyên dùng:** SnagIt (2019/2020)

 2. **Thiết kế hình ảnh:**

Để tạo sự đồng nhất và dễ hiểu cho người xem, chúng ta định hình ra một chuẩn chung như sau:
 - Về Screenshot Console:
 - Trình duyệt: Chrome tắt Bookmark bar (khuyên dùng)
 - Zoom: Mặc định không zoom in (100%)
 - Độ phân giải màn hình: FullHD (1920 x 1080)
 - Định dạng: PNG (Khuyên dùng)
 - Về Font chữ ghi trên hình:
 - Font: Arial Black
 - Size: 18
 - Không bật Shadow.
 - Về Khung đánh dấu khu vực cần chú ý:
    - Màu: Trùng với màu chữ ghi chú
    - Độ dày (Thickness): 1 px
    - Độ mờ (Opacity): 100%

#### Update config.toml
![UpdateConfig](/images/3.content/0004-updateConfig.png)