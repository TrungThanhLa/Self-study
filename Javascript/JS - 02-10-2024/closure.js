console.log("Hello World");
// Closure
// - Là một hàm có thể ghi nhớ nơi nó được tạo ra
// - Truy cập được biến ở bên ngoài phạm vi của nó

function createCounter() {
    let counter = 0;

    function increase() {
        return ++counter
    }

    return increase
}

const counter1 = createCounter();
console.log(counter1()) // 1
console.log(counter1()) // 2
console.log(counter1()) // 3

// * Tại sao gọi hàm counter1() 3 lần mà kết quả không trả ra 1,1,1 mà lại là 1,2,3 ?
// * Giải thích:
// - Hàm increase() được return từ hàm createCounter() và được gán vào biến counter1
// - Và hàm increase() đã ghi nhớ nơi nó được tạo ra (trong hàm createCounter())
// - Và nó có thể truy cập được biến ở bên ngoài phạm vi của nó (biến counter trong hàm createCounter())
// - Môi trường của createCounter() được tạo ra và nó tạo ra một biến counter = 0
// + Lần đầu chạy: Tìm biến counter ở bên ngoài phạm vi của nó => ++0 => 1
// + Lần thứ 2 chạy: Tìm biến counter ở bên ngoài phạm vi của nó => ++1 => 2
// + Lần thứ 3 chạy: Tìm biến counter ở bên ngoài phạm vi của nó => ++2 => 3
// => Tức là khi hàm increase() truy cập biến ở bên ngoài phạm vi của nó thì nó chỉ truy cập vào một
// phạm vi duy nhất đã được tạo ra ban đầu chứ không phải mỗi lần chạy lại hàm là một lần tạo ra phạm vi mới
// Vậy nên biến counter mới được lưu ở phạm vi khởi tạo ban đầu, và nó cũng lưu giá trị thẳng vào biến counter
// sau mỗi lần ta gọi hàm increase()

//==================================================

// ỨNG DỤNG CLOSURE VỚI LOGGER

// * Log bình thường

// console.log('[INFO] Hàm gửi mail bắt đầu chạy')
// console.log('[ERROR] Xảy ra lỗi tại xxx. Message: xxx')
// console.log('[ERROR] Xảy ra lỗi tại xxx. Message: xxx')
// console.log('[ERROR] Xảy ra lỗi tại xxx. Message: xxx')
// console.log('[ERROR] Xảy ra lỗi tại xxx. Message: xxx')
// console.log('[INFO] Hàm gửi mail bắt đầu chạy')
// console.log('[INFO] Hàm gửi mail bắt đầu chạy')

// * Sử dụng Closure

function createLogger(namespace) {
    function logger(message) {
        console.log(`[${namespace}] ${message}`);
    }
    return logger
}

// Home.js

const loggerInfo = createLogger('INFO');
loggerInfo('Hàm gửi mail bắt đầu chạy')
loggerInfo('Hàm gửi mail chạy thành công')
const errorInfo = createLogger('ERROR');
errorInfo('Email không tồn tại trong DB');
errorInfo('Xảy ra lỗi tại dòng 1');


// ỨNG DỤNG CLOSURE VỚI VIỆC LƯU TRỮ LOCAL STORAGE
// => Thêm, sửa, xóa
// - Do là ta phải trả về 3 thứ là thêm, sửa, xóa nên ta sẽ không thể trả ra 3 hàm được
// - Thay vào đó, ta sẽ trả ra 1 object chứa 3 hàm thêm, sửa, xóa và
function createStorage(key) {
    const store = JSON.parse(localStorage.getItem(key)) || {};

    // Hàm dùng để lưu vào localStorage
    const save = () => {
        localStorage.setItem(key, JSON.stringify(store))
    }

    const storage = {
        get(key) {
            return store[key];
        },
        set(key, value) {
            store[key] = value;
            save();
        },
        remove(key) {
            delete store[key];
            save();
        }
    }
    return storage
}

// Profile.js
const profileSetting = createStorage('profile_setting');

console.log(profileSetting.get('fullName'));
profileSetting.set('fullName', 'La Thanh');
profileSetting.set('age', '21');
profileSetting.set('address', 'Ha Dong');
profileSetting.remove('address');
