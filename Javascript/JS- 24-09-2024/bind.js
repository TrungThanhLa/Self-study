console.log("Hello World");
// - Phương thức bind nghĩa là ràng buộc
// - Phương thức bind có thể ràng buộc this trong các hàm, trong các phương thức trở thành một đối tượng khác tùy ý chúng ta

this.name = "Thành";
this.age = 21;

const developer = {
    name: "Thành",
    age: 22,
    getFullName() {
        console.log(`${this.name} ${this.age}`);
        return `${this.name} ${this.age}`;
    }
}

const productManager = {
    name: "La Thành",
    age: 25,
}

// Case 1:
console.log(developer.getFullName()); // Thành 22

// Case 2:
const getDeveloperInfor = developer.getFullName;
console.log(getDeveloperInfor()); // Thành 21

// Nếu muốn ràng buộc this trở thành một đối tượng khác

const getDeveloperInfor2 = developer.getFullName.bind(developer);
console.log(getDeveloperInfor2()); // Thành 22

const getPMInfor = developer.getFullName.bind(productManager);
console.log(getPMInfor()); // La Thành 25

// ==============================================

const button = document.getElementById('button_bind');
console.log(button);

button.onclick = developer.getFullName.bind(productManager);
