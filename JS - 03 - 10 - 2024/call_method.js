console.log("Hello World");

// Call method
// - Phương thức call giống với bind ở chỗ là nó cũng nằm ở trong function constructor.
// => Vậy nên bất cứ hàm nào cũng có thể sử dụng call method.
// - Ngoài ra, call method cũng có thể giúp chúng ta bind this trong quá trình gọi hàm.

function random() {
    console.log(Math.random());
}

// Từ bây giờ ta có 2 cách gọi hàm: random() và random.call()
random.call();

// => Thực chất phương thức gọi hàm chính là random.call()
// => Còn khi ta sử dụng random() gọi hàm, thì Engine của Javascript sẽ nhận biết và tự động thực hiện random.call() để gọi hàm

// - Vậy cách random.call() dùng để làm gì ngoài gọi hàm ?
// Example bind this bằng call medthod:

const developer = {
    firstName: "La",
    lastName: "Thanh",
}

const projectManager = {
    firstName: "Trung",
    lastName: "Thanh",
    showFullName() {
        console.log(this);
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

// projectManager.showFullName.call(); // Lỗi vì khi call như thế này thì this sẽ hiểu là ở phạm vi Window
projectManager.showFullName.call(developer); // bind this của developer vào => this sẽ hiểu là trong phạm vi của developer

// Vậy bind method và call method khác gì nhau ?
// - Bind method sẽ bind this và trả ra một hàm mới chứ không gọi hàm.
// - Call method sẽ bind this trước và sau đó gọi hàm luôn.
