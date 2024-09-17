console.log("Hello World");
// rest operator
// => rest nghĩa là lấy phần còn lại, gom các giá trị lại thành một array
// - Được sử dụng khi không biết param truyền vào là bao nhiêu, nếu param yêu cầu truyền vào là 2 mà truyền vào 3, 4, 5 thì rest sẽ trả lại một mảng [3, 4, 5]
function log(a, ...numbers) {
    console.log(a); // 1
    console.log(numbers); // [2, 3, 4]
    console.log(arguments); //{"0": 1, "1": 2, "2": 3, "3": 4}
}

log(1, 2, 3, 4);

// VD: Hàm nối chuỗi
// Expect: MU.CHELSEA.REAL.BARCA.PSG

function concat(separator, ...strings) {
    return strings.join(separator);
}

const conCatVariable = concat('.', 'MU', 'CHELSEA', 'REAL', 'BARCA', 'PSG');
console.log(conCatVariable);

// =======================================================

// spread operator
// ARRAY
// => spread trải các giá trị của một array ra thành các phần tử
const arrayA = [1, 2, 3];
const arrayB = [0, ...arrayA, 4];
console.log(arrayB); // [0, 1, 2, 3, 4]
// OBJECT
// => Có 2 kiểu clone object: 1 là shallow-clone, 2 là deep-clone
// - Shallow-clone: Ta sẽ đặt 1 objectB bằng 1 objectA và 2 object này vẫn trỏ vào cùng 1 ô nhớ,
//  vậy nên nếu thay đổi value của 1 key trong objectA hoặc objectB thì nó sẽ tự động thay đổi value của key tương ứng trong object còn lại
// - Deep-clone: Ta sẽ sử dụng spread operator để clone và từ đó 2 object này sẽ không bị thay đổi value của key tương ứng lẫn nhau
// (Tuy nhiên nếu dùng deep-clone thì lưu ý rằng bên trong object đó phải là các value thường thì ta mới có thể sử dụng deep-clone,
//  nếu value là object thì ta sẽ phải tiếp tục sử dụng spread operator để clone object bên trong ra trỏ vùng ô nhớ mới)
const object1 = {
    a: 1,
    b: 2,
    c: 3
}

const object2 = {
    ...object1,
    z: 100
};
object2.a = 299
console.log(object1);
console.log(object2);
// {
// "a": 1,
// "b": 2,
// "c": 3,
// "z": 100
// }

const objectA = {
    a: 1,
    b: { siu: 2 }
}

const objectB = {
    ...objectA,
    b: { ...objectA.b }
}
objectB.b.siu = 3;
console.log(objectA);
console.log(objectB);