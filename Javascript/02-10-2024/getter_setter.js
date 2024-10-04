console.log("Hello World");
// Getter - Setter
// - Getter là một phương thức dùng để lấy ra giá trị của một thuộc tính
// - Setter là một phương thức dùng để thiết lập giá trị cho một thuộc tính

// Example
class School {
    constructor(id, name, birthYear, score) {
        this.id = id;
        this.name = name;
        this.birthYear = birthYear;
        // Quy ước _score - sử dụng một thuộc tính protect để lưu trữ điểm số
        // + Do là protect nên ta không nên truy cập trực tiếp nó từ bên ngoài
        // + Phải thông qua một phương thức nào đó để xem hoặc thay đổi giá trị của thuộc tính này
        // Tuy nhiên, do chỉ là quy ước của các LTV, nên là nếu cố tình truy cập hoặc thay đổi thì vẫn được
        this._score = score;
    }

    // Phương thức
    calcAge(currentYear) {
        return currentYear - this.birthYear;
    }

    // Getter cho thuộc tính score
    get score() {
        return this._score;
    }

    // Setter cho thuộc tính score
    set score(value) {
        // Thêm các biểu thức logic để check value xem có hợp lệ không
        if (value >= 0 && value <= 100) {
            this._score = value;
        } else {
            console.log("[ERROR] Điểm số không hợp lệ")
        }
    }
}

const school = new School(1, "La", 2003, 100);
console.log(school.id); // 1
console.log(school.name); // La
console.log(school.birthYear); // 2003
// Gọi vào thẳng lấy giá trị của thuộc tính - không nên truy cập trực tiếp như thế này vì ta đã protect
console.log(school._score); // 100
console.log(school.calcAge(2024));

// Getter
// - Gọi vào hàm getter để lấy giá trị của thuộc tính - dùng cách này vì protect nên ta sẽ lấy value thuộc tính bằng cách sử dụng getter
console.log(school.score); // 100

// Setter
school.score = 101; // "[ERROR] Điểm số không hợp lệ"
school.score = 95;
console.log(school.score); // 95
