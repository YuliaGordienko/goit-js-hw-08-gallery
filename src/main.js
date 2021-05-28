// Создай галерею с возможностью клика по ее элементам и просмотра
// полноразмерного изображения в модальном окне.
// Превью результата посмотри по ссылке.

// Разбей задание на несколько подзадач:

// Создание и рендер разметки по массиву данных и предоставленному шаблону.
// Реализация делегирования на галерее ul.js - gallery и
// получение url большого изображения.
// Открытие модального окна по клику на элементе галереи.
// Подмена значения атрибута src элемента img.lightbox__image.
// Закрытие модального окна по клику на кнопку
// button[data - action= "close-lightbox"].
// Очистка значения атрибута src элемента img.lightbox__image.
// Это необходимо для того, чтобы при следующем открытии модального окна,
//   пока грузится изображение, мы не видели предыдущее.
import imagesList from './gallery-items.js';
const mainList = document.querySelector('ul.js-gallery');

function createElementsFromMassive (obj) {
   return  obj.map(({ preview, original, description }) => {

       return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    }).join('')

}
const stringForMakeTags = createElementsFromMassive(imagesList);



mainList.insertAdjacentHTML('afterbegin', stringForMakeTags);
const modalBox = document.querySelector('div.lightbox')
mainList.addEventListener('click', OnMainListClick)



function OnMainListClick(event) {
  event.preventDefault()
  if (!event.target.classList.contains('gallery__image')) {
    return
  }
  modalBox.classList.add('is-open')
  const imageInModal = document.querySelector('.lightbox__image')
 
  imageInModal.src = event.target.dataset.source
  
  }
const closeModalBtn = document.querySelector('.lightbox__button')
closeModalBtn.addEventListener('click', OnCloseModal)
  
  function OnCloseModal (event) {
  modalBox.classList.remove('is-open')
  event.target.dataset.source = '';
}
   
