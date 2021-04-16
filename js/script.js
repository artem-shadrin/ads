document.addEventListener('DOMContentLoaded', () => {
    const addSwiper = () => {
        const swiper = new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
            }
        })
    }
    class AdsCard {
        constructor(
            oldPrice,
            price,
            title,
            seen,
            locality,
            date
        ) {
            this.oldPrice = oldPrice
            this.price = price
            this.title = title
            this.seen = seen
            this.locality = locality
            this.date = date
        }
        render() {
            const cardElement = document.createElement('div')
            cardElement.classList.add('cards__item', 'card')
            cardElement.insertAdjacentHTML('afterbegin',`
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src="https://source.unsplash.com/random" alt="Picture" /></div>
                    <div class="swiper-slide"><img src="https://source.unsplash.com/random" alt="Picture" /></div>
                    <div class="swiper-slide"><img src="https://source.unsplash.com/random" alt="Picture" /></div>
                    <div class="swiper-slide"><img src="https://source.unsplash.com/random" alt="Picture" /></div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
            <div class="card__description">
                <div class="card__old-price"><span>${this.oldPrice}</span> ₽</div>
                <div class="card__price"><span>${this.price}</span> ₽</div>
                <div class="card__title">${this.title}</div>
                <div class="card__locality">${this.locality}</div>
                <div class="card__date">00.00.00, 00.00</div>
            </div>
            <div class="card__like icon">
                <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.7145 20.3777L11.0346 20.6553L11.3609 20.3852C12.7603 19.2268 14.9105 17.3458 16.8187 15.4619C17.7725 14.5203 18.6721 13.5719 19.3888 12.7086C20.0941 11.859 20.6617 11.0463 20.9022 10.3825C21.9848 7.3955 21.7974 3.73779 18.6122 1.72888C16.6001 0.459852 14.589 0.789687 13.1306 1.40281C12.4019 1.70916 11.7982 2.09036 11.3774 2.39363C11.2533 2.4831 11.1445 2.56621 11.0524 2.63922C11.0244 2.61489 10.9949 2.5894 10.9638 2.5629C10.7025 2.33971 10.334 2.04131 9.90657 1.74188C9.48051 1.44341 8.98677 1.13747 8.47528 0.904641C7.96903 0.674197 7.41214 0.499902 6.86869 0.5C5.19655 0.5003 3.01031 1.18253 1.76019 3.02228C0.0799236 5.49509 0.0799448 9.17196 1.76022 11.6446C2.42257 12.6193 4.07482 14.289 5.82054 15.9439C7.58336 17.615 9.49312 19.3185 10.7145 20.3777Z" fill="white" stroke="#2C2C2C" />
                </svg>
            </div>
            <div class="card__compare icon">
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                    <path d="M9.5 2.73684V21.2632L9.5 21.2669C9.49997 21.3799 9.49981 21.9023 9.73278 22.4119C9.85392 22.6768 10.0453 22.9547 10.346 23.1653C10.6505 23.3786 11.0346 23.5 11.5 23.5C11.9654 23.5 12.3495 23.3786 12.654 23.1653C12.9547 22.9547 13.1461 22.6768 13.2672 22.4119C13.5002 21.9023 13.5 21.3799 13.5 21.2669L13.5 21.2632V2.73684C13.5 2.38076 13.4113 1.84835 13.1246 1.38729C12.8213 0.899478 12.2959 0.5 11.5 0.5C10.7041 0.5 10.1787 0.899478 9.87539 1.38729C9.5887 1.84835 9.5 2.38076 9.5 2.73684Z" fill="white" stroke="#2C2C2C" />
                    <path d="M16.5 7.34211V21.6579L16.5 21.6609C16.5 21.757 16.4998 22.2045 16.7572 22.6395C17.0432 23.1228 17.5906 23.5 18.5 23.5C19.4094 23.5 19.9568 23.1228 20.2428 22.6395C20.5002 22.2045 20.5 21.757 20.5 21.6609L20.5 21.6579V7.34211C20.5 7.02628 20.3986 6.57393 20.0895 6.18983C19.7632 5.78424 19.2408 5.5 18.5 5.5C17.7592 5.5 17.2368 5.78424 16.9105 6.18983C16.6014 6.57393 16.5 7.02628 16.5 7.34211Z" fill="white" stroke="#2C2C2C" />
                    <path d="M2.5 10.1053V21.8947L2.5 21.8963C2.49999 21.9845 2.49994 22.3934 2.78144 22.7852C3.08545 23.2083 3.63206 23.5 4.5 23.5C5.36794 23.5 5.91455 23.2083 6.21856 22.7852C6.50006 22.3934 6.50001 21.9845 6.5 21.8963V21.8947V10.1053C6.5 9.80295 6.38228 9.39728 6.05762 9.06503C5.72148 8.72103 5.20807 8.5 4.5 8.5C3.79193 8.5 3.27852 8.72103 2.94238 9.06503C2.61772 9.39728 2.5 9.80295 2.5 10.1053Z" fill="white" stroke="#2C2C2C" />
                </svg>
            </div>
            <div class="card__seen ${this.seen?'show':''}">Просмотрено</div>
            <div class="card__delivering icon">
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.42149 19.4356C7.50378 19.4356 8.38115 18.5583 8.38115 17.476C8.38115 16.3937 7.50378 15.5163 6.42149 15.5163C5.33919 15.5163 4.46182 16.3937 4.46182 17.476C4.46182 18.5583 5.33919 19.4356 6.42149 19.4356Z" fill="#C7C7C7"/>
                    <path d="M19.6681 7.15701C19.3836 6.62474 18.8285 6.29297 18.225 6.29432H15.9336V9.35927C15.9336 9.70064 16.2333 9.97678 16.5748 9.97678H21.1774L19.6681 7.15701Z" fill="#C7C7C7"/>
                    <path d="M17.5007 15.5163C16.4183 15.5163 15.5409 16.3937 15.5409 17.4761C15.5409 18.5585 16.4183 19.4359 17.5007 19.4359C18.5831 19.4359 19.4605 18.5585 19.4605 17.4761C19.4605 17.4761 19.4605 17.476 19.4605 17.476C19.4592 16.3942 18.5825 15.5175 17.5007 15.5163Z" fill="#C7C7C7"/>
                    <path d="M22.6466 12.064L21.6335 10.7729H16.5748C15.7943 10.7729 15.1374 10.1396 15.1374 9.35918V5.58964C15.1447 5.27131 14.8925 5.00741 14.5742 5.00015C14.5629 4.9999 14.5516 4.99995 14.5403 5.0004H2.63458C2.29315 5.0004 2 5.24822 2 5.58964V16.4847C2 16.8262 2.29315 17.0928 2.63458 17.0928H3.69119C3.89637 15.585 5.285 14.529 6.79282 14.7341C8.01972 14.901 8.98457 15.8659 9.15153 17.0928H14.7706C14.9759 15.5849 16.3646 14.529 17.8725 14.7342C19.0993 14.9012 20.064 15.866 20.231 17.0928H22.3654C22.7068 17.0928 23 16.8262 23 16.4847V13.0707C22.9966 12.7053 22.8724 12.3514 22.6466 12.064Z" fill="#C7C7C7"/>
                </svg>
            </div>
            <div class="card__transaction icon">
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5 5L12 2L19 5V12.5C18 20 12 21 12 21C12 21 6 20 5 12.5V5ZM13.1325 9.07651L12.439 7.80489C12.2495 7.45742 11.7505 7.45742 11.561 7.80489L10.8675 9.07651C10.7956 9.20838 10.6682 9.30092 10.5206 9.32857L9.09692 9.59518C8.7079 9.66803 8.55372 10.1425 8.82562 10.4301L9.8207 11.4826C9.92389 11.5918 9.97255 11.7415 9.95322 11.8905L9.76683 13.3269C9.7159 13.7194 10.1195 14.0126 10.4771 13.8429L11.7856 13.2218C11.9213 13.1574 12.0787 13.1574 12.2144 13.2218L13.5229 13.8429C13.8805 14.0126 14.2841 13.7194 14.2332 13.3269L14.0468 11.8905C14.0275 11.7415 14.0761 11.5918 14.1793 11.4826L15.1744 10.4301C15.4463 10.1425 15.2921 9.66803 14.9031 9.59518L13.4794 9.32857C13.3318 9.30092 13.2044 9.20838 13.1325 9.07651Z" fill="#C4C4C4" />
            </svg>
            </div>
            `)





            document.querySelector('.cards__container').append(cardElement)
        }
    }
    document.querySelector('.cards__container').addEventListener('click', event => {
        const target = event.target
        target.closest('.card__like') && target.closest('.card__like').classList.toggle('btn__active')
        target.closest('.card__compare') && target.closest('.card__compare').classList.toggle('btn__active')
        target.closest('.card') && target.closest('.card').querySelector('.card__seen').classList.toggle('show')
    })

    const getResource = async (url) => {
        const response = await fetch(url)
        return await response.json()
    }
    getResource('https://6075786f0baf7c0017fa64ce.mockapi.io/products')
        .then(data => {
            const showAllCards = (data) => {
                data.forEach(({oldPrice,price,title,seen,locality,date}) => {
                    new AdsCard(oldPrice,price,title,seen,locality,date).render()
                })
                addSwiper()
            }
            const showSecondaryCards = (data) => {
                data.forEach(({oldPrice,price,title,seen,locality,date}, i) => {
                    i>15 &&
                    new AdsCard(oldPrice,price,title,seen,locality,date).render()
                })
                addSwiper()
            }
            const showPrimaryCards = (data) => {
                for(let i=0; i<16; i++){
                    const {oldPrice,price,title,seen,locality,date} = data[i]
                    new AdsCard(oldPrice,price,title,seen,locality,date).render()
                }
                const createBtnMore = () => {
                    const element = document.createElement('a')
                    element.classList.add('btn__more')
                    element.textContent = `Показать еще`
                    element.style.cursor = 'pointer'
                    element.addEventListener('click',()=> {
                        getResource('https://6075786f0baf7c0017fa64ce.mockapi.io/products')
                        .then(data=>{
                            showSecondaryCards(data)
                        })
                        element.remove()})
                    document.querySelector('.ads').append(element)
                }
                createBtnMore()
                addSwiper()
            }
            showPrimaryCards(data)
            
            
        })

        // const swiper = new Swiper('.swiper-container', {
        //     pagination: {
        //         el: '.swiper-pagination',
        //     }
        // })
})