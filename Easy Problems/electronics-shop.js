function getMoneySpent(keyboards, drives, b) {
    return keyboards.reduce((acc, curr) => Math.max(acc, ...drives.map(sum => sum + curr).filter(ku => b >= ku)), -1);
}