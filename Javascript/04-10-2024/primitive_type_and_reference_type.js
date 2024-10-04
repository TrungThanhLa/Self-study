console.log("Hello World");

// * Values type
let a =  1;
let b = a;
a = 2;
console.log(b); // 1

// - Đối với Value type thì khi tạo ra một biến thì sẽ có một vùng nhớ mới được tạo ra, với mỗi lần khai báo
// - Trong trường hợp này:
// + Biến a tạo ra một vùng nhớ mới, và lưu giá trị của biến a vào vùng nhớ đó
// + Biến b cũng tạo ra một vùng nhớ mới, và nó sao chép giá trị được lưu ở ô nhớ của biến a vào ô nhớ của biến b

// * Reference type

// - Object
let obj = {
    name: "Mercedes"
}

let objClone = obj;

obj.name = "BMW";

console.log(objClone.name); // BMW

// - Array
let arr = [1, 2, 3];
let arrClone = arr;
arr[0] = 5;
console.log(arrClone); // [5, 2, 3]

// Tại sao lại vậy ?
// - Bởi vì đây là Reference type (Kiểu tham chiếu)
// - Khi tạo biến obj, sẽ cấp một ô nhớ, lưu { name: 'Mercedes' } vào ô nhớ, và TRẢ VỀ ĐỊA CHỈ Ô NHỚ ĐÃ LƯU VÀ GÁN CHO BIẾN A
// - Khi tạo biến objClone, tạo ra một ô nhớ mới, thì lý do obj thay đổi mà objClone cũng thay đổi theo đó là do objClone cũng
// trỏ đến cùng địa chỉ ô nhớ đã lưu của biến obj thay vì clone giá trị của ô nhớ obj sang objClone.
// => Vậy nên khi sửa giá trị trong biến obj thì value của biến objClone cũng thay đổi, vì 2 biến đang trỏ cùng đến 1 ô nhớ.