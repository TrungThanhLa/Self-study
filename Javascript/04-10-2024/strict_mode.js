"use strict"
console.log("Hello World");
// Strict Mode
// - Chế độ nghiêm ngặt, hiểu đơn giản thì "use strict" là chế độ giúp viết code Javascript trở nên an toàn hơn.
// - Khi sử dụng strict mode thì trong một số trường hợp các bạn sẽ tránh được những cách viết code được coi là chưa an toàn như:
// + Quên sử dụng từ khóa khai báo biến
// + Tránh đặt nhầm trùng tên các tham số
// + Báo lỗi trong một số được hợp không được phép
// + Không sử dụng được một số từ khóa dễ gây nhầm lẫn hoặc được coi là có thể được thêm vào ngôn ngữ trong tương lai

// - Từ ES5 có nhiều thay đổi và conflicts với code ở các bản ES trước đó, vậy nên cần có cơ chế để quyết định
// sử dụng code mới hoặc code cũ.
// - "use strict" là flag để biết mình muốn dùng code mới (từ bản ES5 trở về sau)

// Lưu ý:
// + "use strict" phải được nằm ở đầu file
// + Khi đã bật "use strict" thì không có cách nào cancel được
// + Khi sử dụng class hoặc module thì strict mode sẽ được bật tự động mà không cần phải thêm "use strict"
