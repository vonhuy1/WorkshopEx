var relearn_searchindex = [
  {
    "breadcrumb": "First Cloud Journey \u003e Nội dung",
    "content": "Thư mục content Chúng ta tạm quy ước với nhau là sẽ tổ chức bài Lab với 2 cấp độ là tối đa (VD: 2. -\u003e 2.1. tương ứng với 2.write-content -\u003e 2.1-Directory structure)\nTrong mỗi thư mục sẽ bao gồm:\nCác thư mục thứ cấp. Tập tin _index.md : Chứa nội dung tiếng Anh. Tập tin _index.vi.md : Chứa nội dung tiếng Việt. Nếu chỉ đang viết guide tiếng Việt thôi thì sẽ copy _index.vi.md ra một bản nữa và đổi tên thành _index.md nhá. (Để dịch sau)\nThư mục static/images Đây sẽ là thư mục chứa ảnh cho Lab Guide. Mọi ảnh đều được bỏ vào trong đây. Có thể phân cấp thư mục cho các ảnh để dễ quản lý ảnh.\nCác ảnh này sẽ được sử dụng trong bài viết bằng thẻ gán ảnh: ![Đây là tên ảnh (Hiển thị khi không load được ảnh)](/images/2.1/SNAG001.png?width=90pc)\nMẹo vặt Sử dụng ?width=90pc với các ảnh toàn màn hình và ?width=40pc hoặc ?width=50pc đối với các ảnh crop.\nThư mục public Đây là thư mục sẽ được tạo ra bởi hugo.\nSau khi viết hoàn chỉnh guide hoặc một phần guide mà muốn kiểm tra hiển thị thì có thể chạy lệnh sau để build project: $ hugo\nSau khi build hoàn thành thì sẽ có thư mục public xuất hiện. Tiến hành chạy server để xem thành quả tại: http://localhost:1313 $ hugo server\nTới đây rồi thì hãy thử xóa thư mục public và chạy thử xem Guide này có hoạt động được không nhá.",
    "description": "Thư mục content Chúng ta tạm quy ước với nhau là sẽ tổ chức bài Lab với 2 cấp độ là tối đa (VD: 2. -\u003e 2.1. tương ứng với 2.write-content -\u003e 2.1-Directory structure)\nTrong mỗi thư mục sẽ bao gồm:\nCác thư mục thứ cấp. Tập tin _index.md : Chứa nội dung tiếng Anh. Tập tin _index.vi.md : Chứa nội dung tiếng Việt. Nếu chỉ đang viết guide tiếng Việt thôi thì sẽ copy _index.vi.md ra một bản nữa và đổi tên thành _index.md nhá. (Để dịch sau)",
    "tags": [],
    "title": "Cấu trúc file",
    "uri": "/vi/3-content/3.1-filestructure/index.html"
  },
  {
    "breadcrumb": "",
    "content": "Tổng quan Trong bài này, hướng dẫn cách viết Lab Guide và tạo Workshop\nTải và sử dụng theme Hugo Sử dụng Visual Studio Code Sử dụng Snagit Sử dụng Draw.io Nội dung Giới thiệu Các bước chuẩn bị Nội dung Hoàn thành Workshop",
    "description": "Tổng quan Trong bài này, hướng dẫn cách viết Lab Guide và tạo Workshop\nTải và sử dụng theme Hugo Sử dụng Visual Studio Code Sử dụng Snagit Sử dụng Draw.io Nội dung Giới thiệu Các bước chuẩn bị Nội dung Hoàn thành Workshop",
    "tags": [],
    "title": "First Cloud Journey",
    "uri": "/vi/index.html"
  },
  {
    "breadcrumb": "First Cloud Journey",
    "content": "Trong bài này, hướng dẫn cách viết Lab Guide và tạo Workshop\nTải các công cụ, phần mềm hỗ trợ Cách triển khai cấu trúc file Cách viết nội dung Các bước tiến hành hoàn thành Workshop",
    "description": "Trong bài này, hướng dẫn cách viết Lab Guide và tạo Workshop\nTải các công cụ, phần mềm hỗ trợ Cách triển khai cấu trúc file Cách viết nội dung Các bước tiến hành hoàn thành Workshop",
    "tags": [],
    "title": "Giới thiệu",
    "uri": "/vi/1-introduce/index.html"
  },
  {
    "breadcrumb": "First Cloud Journey \u003e Các bước chuẩn bị",
    "content": "Download Hugo Theme Lab guide sử dụng Theme Hugo. Truy cập vào vào trang chủ Hugo Theme để xem thông tin tổng quan Vào trang Install Hugo để tải Hugo Theme tùy thuộc vào hệ điều hành au khi tải Hugo Theme thành công Các bạn sẽ tải Workshop mẫu về máy tại Workshop Sau khi tải Workshop.zip về máy, giải nén Mở thư mục Workshop Mở workshop bằng IDE( Visual Studio Code ) Thực hiện lệnh để kiểm tra đã tải Hugo thành công: hugo version Thực hiện chạy workshop bằng lệnh: hugo server Mở trình duyệt và nhập: localhost:1313 Thực hiện chỉnh sửa Trong thư mục content, chỉnh sửa nội dung phù hợp với nội dung workshop của bạn Trong thư mục static/iamges, chỉnh sửa và lưu trữ hình ảnh workshop của bạn",
    "description": "Download Hugo Theme Lab guide sử dụng Theme Hugo. Truy cập vào vào trang chủ Hugo Theme để xem thông tin tổng quan Vào trang Install Hugo để tải Hugo Theme tùy thuộc vào hệ điều hành au khi tải Hugo Theme thành công Các bạn sẽ tải Workshop mẫu về máy tại Workshop Sau khi tải Workshop.zip về máy, giải nén Mở thư mục Workshop",
    "tags": [],
    "title": "Tải Hugo Theme",
    "uri": "/vi/2-prerequiste/2.1-hugotheme/index.html"
  },
  {
    "breadcrumb": "First Cloud Journey \u003e Các bước chuẩn bị",
    "content": "Tổng quan Bạn một IDE nào đó có các plug-ins hỗ trợ các loại ngôn ngữ cho thuận tiện trong việc viết: Visual Studio Code, Atom, Notepad++,… (Người viết guide này đang xài Visual Studio Code). Các plug-ins theo IDE: Nghiễm nhiên sẽ cần plug-ins dành cho Markdown (như Markdown All in One, Markdown TOC,…). Mỗi khi viết 1 file ngôn ngữ gì thì VS Code cũng gợi ý cài cái plug-ins liên quan nên không phải lo lắng Nội dung Truy cập vào Visual Studio Code để tải IDE Các bạn truy cập vào trang Document để xem thông tin chi tiết và sử dụng các plugin",
    "description": "Tổng quan Bạn một IDE nào đó có các plug-ins hỗ trợ các loại ngôn ngữ cho thuận tiện trong việc viết: Visual Studio Code, Atom, Notepad++,… (Người viết guide này đang xài Visual Studio Code). Các plug-ins theo IDE: Nghiễm nhiên sẽ cần plug-ins dành cho Markdown (như Markdown All in One, Markdown TOC,…). Mỗi khi viết 1 file ngôn ngữ gì thì VS Code cũng gợi ý cài cái plug-ins liên quan nên không phải lo lắng Nội dung Truy cập vào Visual Studio Code để tải IDE",
    "tags": [],
    "title": "Tải Visual Studio Code",
    "uri": "/vi/2-prerequiste/2.2-ide/index.html"
  },
  {
    "breadcrumb": "First Cloud Journey",
    "content": "Các bước chuẩn bị Tải Hugo Theme Tải IDE Tải Snagit Tải Active Presenter Tải Draw.io",
    "description": "Các bước chuẩn bị Tải Hugo Theme Tải IDE Tải Snagit Tải Active Presenter Tải Draw.io",
    "tags": [],
    "title": "Các bước chuẩn bị",
    "uri": "/vi/2-prerequiste/index.html"
  },
  {
    "breadcrumb": "First Cloud Journey \u003e Nội dung",
    "content": "Phần tiêu đề Ở đầu mỗi trang đều có phần header này để hiển thị tiêu đề và xác định điều hướng ở bên Navigation panel bên trái trang.\ntitle = \"Write content\" : Để nội dung ngắn gọn súc tích để vừa 1 dòng ở bên Navigation panel bên trái. chapter = false : Để mặc định là false. Title ở trên cũng sẽ hiển thị là h1 ở trong bài viết. weiht: Dùng để sắp xếp index của tiêu đề pre = \"\u003cb\u003e2. \u003c/b\u003e\" : Đây là đánh số cho trang hiển thị ở Navigation panel bên trái. Heading Section Chúng ta sẽ thống nhất việc dùng tiêu đề cho các section trong 1 trang sẽ sử dụng h4 (####). Table of Contents (TOC) Sau khi viết xong nội dung (hoặc liệt kê xong các Heading của 1 trang), chúng ta có thể xây dựng Table of Contents (TOC) tự động bằng plug-in.\nSử dụng tổ hợp phím Ctrl + Shift + P sau đó gõ vào Create Table of Contents rồi chọn lựa chọn của plug-in Markdown All in One. Enter.\nChúng ta sẽ có một cái TOC như sau:\nContent: Chèn icon trong các phần giới thiệu Ta sử dụng bộ icon tải về từ AWS here Thực hiện lệnh chèn như sau: {\u003c figure src=\"../images/fcj.png\" title=\"First Cloud Journey\" width=150pc \u003e} Phần ghi chú Trong bài viết có thể sẽ có các đoạn cần làm nổi bật lên như Ghi chú, Cảnh báo,… thì sẽ dùng shortcode theo hướng dẫn tại [đây](https://learn.netlify.app/en/ shortcodes/notice/)\nNote Note. See more at Note\nGhi chú Đây là Note\nNotes Info\nThông tin Đây là Info\nNotes Tip\nMẹo vặt Đây là Tip\nNotes Warning\nCảnh báo Đây là Warning\nNotes Caution\nThận trọng Đây là Caution\nNotes Important\nQuan trọng Đây là important\nPhần tập tin đính kèm Phần này sẽ thực hiện theo hướng dẫn tại đây\nVị trí đặt tập tin sẽ là trong thư mục tương ứng với tên trang md. như sau:\n_index.md —\u003e _index.files - _index.vi.md —\u003e _index.vi.files Ghi chú Nghĩa là nếu có nhiều ngôn ngữ thì mỗi ngôn ngữ 1 thư mục như vậy cho 1 trang.\nSử dụng shortcode sau để tạo phần đính kèm: title : Tiêu đề phần đính kèm pattern : Xác định các tập tin được hiện ra trong box (có thể để tên tập tin hoặc pattern để xác định theo đuôi) Phần vẽ bảng Để đơn giản hóa việc vẽ bảng, người viết thường sử dụng công cụ Tables Generator\nTruy cập tới trang. Nhập nội dung xong bấm Generate rồi Copy to clipboard. Xong vô đây Paste vào thôi. Phần hình ảnh Phần mềm chụp màn hình khuyên dùng: SnagIt (2019/2020)\nThiết kế hình ảnh:\nĐể tạo sự đồng nhất và dễ hiểu cho người xem, chúng ta định hình ra một chuẩn chung như sau:\nVề Screenshot Console: Trình duyệt: Chrome tắt Bookmark bar (khuyên dùng) Zoom: Mặc định không zoom in (100%) Độ phân giải màn hình: FullHD (1920 x 1080) Định dạng: PNG (Khuyên dùng) Về Font chữ ghi trên hình: Font: Arial Black Size: 18 Không bật Shadow. Về Khung đánh dấu khu vực cần chú ý: Màu: Trùng với màu chữ ghi chú Độ dày (Thickness): 1 px Độ mờ (Opacity): 100% Update config.toml",
    "description": "Phần tiêu đề Ở đầu mỗi trang đều có phần header này để hiển thị tiêu đề và xác định điều hướng ở bên Navigation panel bên trái trang.\ntitle = \"Write content\" : Để nội dung ngắn gọn súc tích để vừa 1 dòng ở bên Navigation panel bên trái. chapter = false : Để mặc định là false. Title ở trên cũng sẽ hiển thị là h1 ở trong bài viết. weiht: Dùng để sắp xếp index của tiêu đề pre = \"\u003cb\u003e2. \u003c/b\u003e\" : Đây là đánh số cho trang hiển thị ở Navigation panel bên trái. Heading Section Chúng ta sẽ thống nhất việc dùng tiêu đề cho các section trong 1 trang sẽ sử dụng h4 (####). Table of Contents (TOC) Sau khi viết xong nội dung (hoặc liệt kê xong các Heading của 1 trang), chúng ta có thể xây dựng Table of Contents (TOC) tự động bằng plug-in.",
    "tags": [],
    "title": "Nội dung",
    "uri": "/vi/3-content/3.2-content/index.html"
  },
  {
    "breadcrumb": "First Cloud Journey \u003e Các bước chuẩn bị",
    "content": "Download Snagit Các bạn có thể tải Snagit. Hoặc các bạn có thể tham khảo từ các trang khác. Các tính năng của Snagit",
    "description": "Download Snagit Các bạn có thể tải Snagit. Hoặc các bạn có thể tham khảo từ các trang khác. Các tính năng của Snagit",
    "tags": [],
    "title": "Tải Snagit",
    "uri": "/vi/2-prerequiste/2.3-snagit/index.html"
  },
  {
    "breadcrumb": "First Cloud Journey",
    "content": "Workshop Sau khi hoàn thành các bước, chúng ta tiến hành thực hiện Workshop\nThực hiện bài Hand-on Lab một lần để nắm các bước cần phải làm. (Ghi chú lại những bước lỗi do thiếu (có thể là IAM Role, Permissions,…)) Lên cấu trúc cho Lab Guide (phân theo từng bước). Đây (có thể) cũng chính là cấu trúc thư mục của bài thực hành. Clean up và thực hiện lại bài Lab lần thứ 2. Lần này quay phim lại (có thể sử dụng Active Presenter) hoặc screenshot từng bước và đánh số thứ tự hình ảnh (có thể dùng SnagIt) Viết phần nội dung text cho Lab Guide. (Để sẵn các placeholder cho hình ảnh) Nếu quay phim thì trích xuất hình ảnh từ video ra (có thể sử dụng VLC Player có mục Screenshot) và đặt hình ảnh vào những vị trí đã xác định. Crop hình ảnh loại bỏ đi khung viền của browser (Nếu sử dụng SnagIt thì xác định vùng chụp cố định bỏ đi khung viền browser) Kiểm tra và format lại nội dung với các Notice, bổ sung các Tập tin đính kèm (nếu có)",
    "description": "Workshop Sau khi hoàn thành các bước, chúng ta tiến hành thực hiện Workshop\nThực hiện bài Hand-on Lab một lần để nắm các bước cần phải làm. (Ghi chú lại những bước lỗi do thiếu (có thể là IAM Role, Permissions,…)) Lên cấu trúc cho Lab Guide (phân theo từng bước). Đây (có thể) cũng chính là cấu trúc thư mục của bài thực hành. Clean up và thực hiện lại bài Lab lần thứ 2. Lần này quay phim lại (có thể sử dụng Active Presenter) hoặc screenshot từng bước và đánh số thứ tự hình ảnh (có thể dùng SnagIt) Viết phần nội dung text cho Lab Guide. (Để sẵn các placeholder cho hình ảnh) Nếu quay phim thì trích xuất hình ảnh từ video ra (có thể sử dụng VLC Player có mục Screenshot) và đặt hình ảnh vào những vị trí đã xác định. Crop hình ảnh loại bỏ đi khung viền của browser (Nếu sử dụng SnagIt thì xác định vùng chụp cố định bỏ đi khung viền browser) Kiểm tra và format lại nội dung với các Notice, bổ sung các Tập tin đính kèm (nếu có)",
    "tags": [],
    "title": "Workshop",
    "uri": "/vi/4-workshop/index.html"
  },
  {
    "breadcrumb": "First Cloud Journey",
    "content": "Nội dung Cấu trúc file Nội dung",
    "description": "Nội dung Cấu trúc file Nội dung",
    "tags": [],
    "title": "Nội dung",
    "uri": "/vi/3-content/index.html"
  },
  {
    "breadcrumb": "First Cloud Journey \u003e Các bước chuẩn bị",
    "content": "Download Snagit Các bạn truy cập vào trang Active Presenter để tải về máy. Sau khi cài đặt Active Presenter",
    "description": "Download Snagit Các bạn truy cập vào trang Active Presenter để tải về máy. Sau khi cài đặt Active Presenter",
    "tags": [],
    "title": "Tải Active Presenter",
    "uri": "/vi/2-prerequiste/2.4-activepresenter/index.html"
  },
  {
    "breadcrumb": "First Cloud Journey \u003e Các bước chuẩn bị",
    "content": "Download Snagit Các bạn có thể tải Draw.io tại Draw.io Các bạn có thể sử dụng Draw.io trên web tại Draw.io Tải bộ icon mởi nhất của AWS tại đây Vẽ diagrams theo đúng format và style. Tham khảo tại đây\nMột vài kiến trúc mẫu\nKiến trúc mẫu 1: Kiến trúc mẫu 2: Kiến trúc mẫu 3:",
    "description": "Download Snagit Các bạn có thể tải Draw.io tại Draw.io Các bạn có thể sử dụng Draw.io trên web tại Draw.io Tải bộ icon mởi nhất của AWS tại đây Vẽ diagrams theo đúng format và style. Tham khảo tại đây",
    "tags": [],
    "title": "Tải Draw.io",
    "uri": "/vi/2-prerequiste/2.5-drawio/index.html"
  },
  {
    "breadcrumb": "First Cloud Journey",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Thể loại",
    "uri": "/vi/categories/index.html"
  },
  {
    "breadcrumb": "First Cloud Journey",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Thẻ",
    "uri": "/vi/tags/index.html"
  }
]
