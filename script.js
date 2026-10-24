window.onload = function () {

    const trackerBtn = document.getElementById('start-tracker-btn');

    if (trackerBtn) {
        trackerBtn.addEventListener('click', function () {

            const userName = prompt("Введите ваше имя:");
            alert(`Привет, ${userName || 'Эко-активист'}! Добро пожаловать в трекер потребления воды.`);

            const waterConsumption = [3.2, 1.2, 4.0, 1.5, 2.8, 1.1, 3.5];

            function findMax(arr) {
                return Math.max(...arr);
            }

            function filterHighConsumption(arr) {
                return arr.filter(days => days > 3);
            }

            function calculateSum(arr) {
                return arr.reduce((total, current) => total + current, 0);
            }

            let lowConsumptionDaysCount = 0;

            for (let i = 0; i < waterConsumption.length; i++) {
                if (waterConsumption[i] <= 1.5) {
                    lowConsumptionDaysCount++;
                }
            }

            const lowConsumptionPercentage = (lowConsumptionDaysCount / waterConsumption.length) * 100;
            const totalWater = calculateSum(waterConsumption);
            const averageWater = totalWater / waterConsumption.length;
            const exceededDaysCount = filterHighConsumption(waterConsumption).length;

            alert(`За неделю вы выпили ${totalWater.toFixed(1)} литров воды, в ${exceededDaysCount} днях норма была превышена.`);

            console.log(`Процент дней с низким потреблением: ${lowConsumptionPercentage.toFixed(1)}%`);
            console.log(`Количество дней с низким потреблением: ${lowConsumptionDaysCount}`);

            if (averageWater < 2) {
                console.log("Рекомендуется увеличить потребление воды до 2–2,5 литров в день.");
            }
        });
    }
};
