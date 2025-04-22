// 狗狗資料陣列
const dogData = [
    { name: "雪球", age: 2, breed: "比熊犬", personality: "活潑可愛" },
    { name: "豆豆", age: 3, breed: "柴犬", personality: "勇敢又忠誠" },
    { name: "奶茶", age: 1, breed: "黃金獵犬", personality: "溫柔親人" },
    { name: "黑糖", age: 4, breed: "邊境牧羊犬", personality: "聰明愛學習" },
    { name: "QQ", age: 2, breed: "臘腸狗", personality: "好奇又黏人" }
];

// 顯示狗狗資料
function showInfo(index) {
    const dog = dogData[index];
    const message = `🐶 名字：${dog.name}\n🐾 年齡：${dog.age} 歲\n📛 品種：${dog.breed}\n✨ 個性：${dog.personality}`;
    alert(message);
}
