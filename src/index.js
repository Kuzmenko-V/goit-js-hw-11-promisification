// зазание 1
console.log("задание 1");
const delay = ms => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms)
    });
    return promise
};
const logger = time => console.log(`Resolved after ${time}ms`);
// Вызовы функции для проверки
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms
// задание 2
const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];
setTimeout(() => {
    console.log("задание 2");
    const toggleUserState = (allUsers, userName) => {
        const updatedUsers = allUsers.map(user =>
            user.name === userName ? { ...user, active: !user.active } : user,
        );
        const promise = new Promise((resolve, reject) => {
            resolve(updatedUsers);
        });
        return promise
  
    };
    const loggerTaskTwo = updatedUsers => console.table(updatedUsers);
    toggleUserState(users, 'Mango').then(loggerTaskTwo);
    toggleUserState(users, 'Lux').then(loggerTaskTwo);

}, 2500);
//задание 3
setTimeout(() => {
  console.log("задание 3");
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const makeTransaction = (transaction) => {
    const delay = randomIntegerFromInterval(200, 500);
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const canProcess = Math.random() > 0.3;
        if (canProcess) {
          resolve([transaction.id, delay]);
        }
        else {
          reject(transaction.id);
        }
      }, delay);
    });
    console.log(promise);
    return promise
  };
  //--------
  const logSuccess = ([ id, time ]) => {
  console.log(`Transaction ${id} processed in ${time}ms`);
};

const logError = id => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};
makeTransaction({ id: 70, amount: 150 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 71, amount: 230 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 72, amount: 75 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 73, amount: 100 })
  .then(logSuccess)
  .catch(logError);
}, 3500);

