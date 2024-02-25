function askQuestion(answer, question) {
    const userAnswer = prompt(question);

    if (userAnswer.toLowerCase() === answer) {
        alert("Угадал!");
        return 1;
    } else {
        alert("Не угадал!");
        return 0;
    }
}

function puzzle() {
    let count = 0;
    count += askQuestion("елка", "Зимой и летом одним цветом?");
    count += askQuestion("лук", "Сидит дед, во сто шуб одет. Кто его раздевает, тот слёзы проливает?");
    alert(`Правильных ответов: ${count}`);
}