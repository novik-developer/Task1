const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl

const createTimerAnimator = () => {
    return (seconds) => {
        const dateStart = new Date();
        const dateExpect = new Date(seconds * 1000);
        const timer = setInterval(() => {
            const dateNow = new Date();
            const dateFinish = new Date(dateNow - dateStart);
            timerEl.innerHTML = dateFinish.toLocaleTimeString("ru", {
                timeZone: "UTC",
            });
            if (dateExpect - dateFinish <= 0) {
                clearInterval(timer);
            }
        }, 1000);
    };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", (event) => {
    // Очистите input так, чтобы в значении
    // оставались только числа
    event.target.value = parseInt(event.target.value) || "";
});

buttonEl.addEventListener("click", () => {
    const seconds = Number(inputEl.value);

    animateTimer(seconds);
    inputEl.value = "";
});
