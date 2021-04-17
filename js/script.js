import AdsCard from './modules/card'
import addSwiper from './modules/swiper'
import getResource from './modules/service'

const createBtnMore = () => {
    const element = document.createElement('div')
    element.classList.add('card__btn-more')
    element.insertAdjacentHTML('afterbegin', `
        Показать еще
        <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.11707 1.954L8.07108 9.14214L15.0251 1.954" stroke="#00A0AB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `)
    element.style.cursor = 'pointer'
    element.addEventListener('click', () => {
        element.innerHTML = `<div class="lds-dual-ring"></div>`
        getResource(_URL).then(data => {
            showSecondaryCards(data);
            element.remove()
        })

    })
    document.querySelector('.ads').append(element)
}
const showSecondaryCards = (data) => {
    data.forEach(({
        oldPrice,
        price,
        title,
        seen,
        locality,
        date
    }, i) => {
        i > 15 && new AdsCard(oldPrice, price, title, seen, locality, date).render()
    })
    addSwiper()
}
const showPrimaryCards = (data) => {
    for (let i = 0; i < 16; i++) {
        const {
            oldPrice,
            price,
            title,
            seen,
            locality,
            date
        } = data[i]
        new AdsCard(oldPrice, price, title, seen, locality, date).render()
    }
    createBtnMore()
    addSwiper()
}
const _URL = 'https://6075786f0baf7c0017fa64ce.mockapi.io/products'

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.cards__container').addEventListener('click', event => {
        const target = event.target
        target.closest('.card__like') && target.closest('.card__like').classList.toggle('btn__active')
        target.closest('.card__compare') && target.closest('.card__compare').classList.toggle('btn__active')
    })
    getResource(_URL).then(data => showPrimaryCards(data))
})