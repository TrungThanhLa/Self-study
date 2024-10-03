console.log("Hello World");

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

console.log(document.querySelector("#heading").innerText); // Hello Bind Method
console.log($("#heading")); //<h1 id="heading">Hello Bind Method</h1>


const app = (() => {
    const cars = ["BMW", "LAMBORGHINI", "MERCEDES"]

    const root = $("#root");
    const input = $("#input");
    const submit = $("#submit");

    return {
        init() {
            // Handle DOM events
            submit.onclick = () => {
                const car = input.value;
                this.add(car);
                this.render();
                input.value = null;
                input.focus();
            }
            // Phải bind this vào nếu không this trong hàm handleDelete sẽ là root chứ không phải this của app
            root.onclick = this.handleDelete.bind(this);
            this.render();
        },
        add(car) {
            cars.push(car);
        },
        delete(index) {
            cars.splice(index, 1);
            console.log("delete")
        },
        handleDelete(event) {
            if (event.target.closest(".delete")) {
                const index = event.target.getAttribute("data-index");
                this.delete(index);
                this.render();
            }
        },
        render() {
            root.innerHTML = cars.map((car, index) => `
                <li>
                    ${car}
                    <button class="delete" data-index="${index}">Delete</button>
                </li>
            `).join('');
        }
    }
})();

app.init();
