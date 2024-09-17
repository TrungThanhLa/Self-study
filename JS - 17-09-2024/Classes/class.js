console.log("Hello World");

// Constructor Function
function course(name, price) {
    this.name = name;
    this.price = price;
}

// Classes
class Course {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const declareFunction = new course("JS", 1000);
const classes = new Course("PHP", 2000);
console.log(declareFunction);
// {
// "name": "JS",
// "price": 1000
// }
console.log(classes);
// {
//     "name": "PHP",
//     "price": 2000
// }

// =====================================================

// Ta có 2 cách thiết kế một đối tượng:
// 1, Khai báo constructor function
// - Khai báo một constructor function và gọi nó bằng cách sử dụng "new"
// 2, Khai báo Class
// - Khai báo một class và gọi nó bằng cách sử dụng "new"

//  => 2 cách này giống nhau và đều có thể sử dụng nhưng thực tế ta sẽ sử dụng cách khai báo Class
//  Vì khi sử dụng class ta sẽ viết code một cách tổ chức hơn khi cấu trúc code phức tạp