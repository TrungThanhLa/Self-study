console.log("Hello World");
// Tư tưởng lập trình hướng đối tượng
// Một đối tượng luôn có: thuộc tính, hành động

// Từ khóa this trong Javascript đề cập đến đối tượng mà nó thuộc về.
const iPhone15 = {
    // Thuộc tính - Property
    name: 'iPhone 15',
    color: 'Black',
    weight: 300,

    // Phương thức - Method
    takePhoto() {
        console.log(this); // Log ra đối tượng mà nó thuộc về (iPhone 15)
        console.log("Take a photo");
    },
    objChild: {
        name: 'Child Object',
        methodChild() {
            console.log(this); // Log ra đối tượng mà nó thuộc về (objChild)
            console.log("Method Child");
        }
    }
}

console.log(iPhone15.takePhoto());
console.log(iPhone15.objChild.methodChild());


function Car(name, color, weight) {
    this.name = name;
    this.color = color;
    this.weight = weight;
    this.run = function () {
        console.log(this);
    }
}

const audi = new Car("Audi", "Black", 500);
console.log(audi.run());

const button = document.querySelector("button");
console.log(button);

button.onclick = function () {
    console.dir(this);
}

// ====================================================

// Nếu this đứng ngoài phương thức, thì this sẽ tham chiếu tới đối tượng global

function myFunc() {
    console.log(this) // Object Window
}

myFunc();

// - Nếu this trong một hàm bình thường sẽ trỏ đến đối tượng Window
// - Còn đối với strict mode thì this sẽ là undefined