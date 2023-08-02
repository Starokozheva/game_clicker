// запуск игры
function start_game() {
    object.classList.add('start');
}

// промах
function miss(event) {
    // event.target.id
    if (event.target.id == "area") {
        score--;
        document.title = `Score ${score}`;
    }
}

// попадание по объекту
function hit() {
    score++;
    document.title = `Score ${score}`;

    object.classList.remove('start');
    void object.offsetWidth; //магия
    object.classList.add('start');

    change_object_background();
    change_object_position();
}

// меняет цвет фона объекта
function change_object_background() {
    const colors = ['purple', 'gold', 'orange', 'blue', 'red'];
    const index = Math.floor(Math.random() * colors.length);
    object.style.background = colors[index];
}

// меняет положение объекто по оси X
function change_object_position() {
    const random_offset = Math.random() * 340;
    object.style.left = `${random_offset}px`;
}

let score = 0;
let object = document.querySelector('#object');
