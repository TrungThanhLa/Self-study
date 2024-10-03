console.log("Hello World");
// HOISTING
// - Hoisting là việc đưa phần khai báo lên đầu phạm vi
// - Cách hoạt động: Engine sẽ đọc code 1 lượt và rồi mới phân tích cú pháp,
// check xem có phải cú pháp được hoist không, nếu có thì nó sẽ lưu vào bộ nhớ
// và rồi nó mới thực thi lại chương trình của chúng ta


// * Hoist với từ khóa var:

console.log(age) // undefined
// console.log(fullName) // ReferenceError : fullName is.....
var age = 16;
// + Khai báo biến: var age
// + Gán value: age = 16

// => Engine của JS sẽ đọc và check ra được cú pháp hoist là từ khóa var age


// * Hoist với function declaration:

console.log(sum(6, 9)); // 15

function sum(a, b) {
    return a + b;
}

// => Engine của JS sẽ đọc và check ra được cú pháp hoist là cả một function sum


// * Hoist với let, const
// - Cũng được hoisting nhưng mà sẽ được hoist khác với var
// Lưu ý: Khai báo biến với let, const khi được hoisted không được tạo giá trị
// và được đưa vào "Temporal Dead Zone" (Vùng tạm thời không sử dụng được)

{
    // console.log(fullName) // ReferenceError : Cannot access 'fullName' before initialization
    let fullName = "Nguyen Van A";
}

// =========================================
// Exercise

const counter1 = makeCounter();

console.log(counter1()) // 1

function makeCounter() {
    let counter = 0;

    return increase

    function increase() {
        return ++counter
    }
}

// Tại sao kết qiar vẫn trả ra 1 mà không bị lỗi?
// Giải thích:
// - Đó là vì hoisting
// - Đầu tiên, hàm makeCounter() sẽ được hoisted lên đầu vì Engine đã đọc hết cú pháp và check ra được cú pháp hoist của hàm makeCounter()
// - Tiếp theo, Engine sẽ đọc bên trong phạm vi hàm makeCounter() và sẽ hoist hàm increase() lên đầu phạm vi,
// đó là lý do hàm increase dù ở dưới return nhưng vẫn có thể chạy được

// Hàm sau khi được hoisted:
// function makeCounter() {
//     let counter = 0;
//
//     function increase() {
//         return ++counter
//     }
//
//     return increase
// }
//
// const counter1 = makeCounter();
//
// console.log(counter1()) // 1


