export const isEmptyObj = (obj) => {
    return Object.keys(obj).length === 0
}


export const likeUnlikeFunc = (id) => {

    let arrLikes = JSON.parse(localStorage.getItem("likes")) || []; // Проверка на наличие элемента в localStorage

    if (arrLikes.includes(id)) {
        let filterArr = arrLikes.filter(item => item !== id);
        localStorage.setItem("likes", JSON.stringify(filterArr));
    } else {
        arrLikes.push(id); // Просто добавляем элемент в массив
        localStorage.setItem("likes", JSON.stringify(arrLikes)); // Сохраняем массив
    }

    //? Закончи функцию и обдумай решение и после можешь переходить к rtk query 


}