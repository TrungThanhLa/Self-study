console.log("Hello World");

class Foo {
    static someMethod() {
        console.log("Some Method");
    }

    // Instance method - Cần phải tạo ra một instance để gọi hoặc đối với constructor function thì phải thêm prototype (VD: Foo.prototype.anotherMethod())
    anotherMethod() {
        console.log("Another Method");
    }
}

Foo.someMethod();
const foo = new Foo();
foo.anotherMethod();


// Đối với method bình thường thì ta phải khởi tạo một instance, và ta có thể gọi được hàm đó
// VD: const foo = new Foo()
//     foo.anotherMethod()
// - Ngược lại, static method sẽ không được gọi từ instance của class đó, mà nó sẽ được gọi từ chính class đó
// VD: Foo.someMethod()

//  ===================================================
// => static thuộc về class và chỉ class mới có thể gọi được static method hoặc static variable, ta không thể gọi static method từ một instance
// - static method được sử dụng khi ta không đòi hỏi phải tạo ra một object để sử dụng method đó.