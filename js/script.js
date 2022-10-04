'use strict'



window.addEventListener('load', () => {
    document.querySelector('.service-tabs-title').classList.add('active');
    document.querySelector('.service-tabs-content div').classList.add('active');

    function tabSelection() {
        let count = 0;
        let navBar = document.querySelectorAll('.service-tabs-title');
        let tabs = document.querySelectorAll('.service-tabs-content > div');
        let clRemove = function (el) { el.classList.remove('active') };

        tabs.forEach(el => {
            el.dataset.nmb = `${count}`;
            count++;
        })

        count = 0;
        navBar.forEach(el => {
            el.dataset.nmb = `${count}`;
            el.addEventListener('click', function () {
                navBar.forEach(el => clRemove(el));
                tabs.forEach(el => clRemove(el));
                this.classList.add('active');
                document.querySelector(`.service-tabs-content div[data-nmb='${this.dataset.nmb}']`).classList.add('active');
            })
            count++;
        })
    }

    tabSelection();
});

//--------------- WORK ---------------//


window.addEventListener('load', () => {
    const portfolio = {
        category1: {
            path: 'graphic-design',
            images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, ,],
        },
        category2: {
            path: 'web-design',
            images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,],
        },
        category3: {
            path: 'landing-page',
            images: [1, 2, 3, 4, 5, 6, 7, 8, 9,],
        },
        category4: {
            path: 'wordpress',
            images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,],
        },
    };

    let navBar = document.querySelectorAll('.work-tabs-title');
    let loadBtn = document.querySelector('#work .btn');
    loadBtn.style.display = 'none';
    let imgContainer = document.querySelector('.work-images');
    let content = [];
    let count = 0;

    navBar.forEach(el => {

        el.dataset.category = `category${count}`;

        el.addEventListener('click', () => {
            navBar.forEach(el => el.classList.remove('active'));
            el.classList.add('active');
            content = [];

            if (el.dataset.category === 'category0') {
                for (let cat in portfolio) {
                    content.concat(getContent(portfolio[cat]));
                }
                arrShuffle(content);
                content.length > 12 ? loadBtn.style.display = 'block' : loadBtn.style.display = 'none';
            } else {
                content = getContent(portfolio[el.dataset.category]);
                arrShuffle(content);
                content.length > 12 ? loadBtn.style.display = 'block' : loadBtn.style.display = 'none';
            }

            imgContainer.innerHTML = '';
            let first12 = content.slice(0, 12);

            while (first12.length) {
                imgContainer.insertAdjacentHTML('beforeend', content.shift());
                first12.shift();
            }
        });

        count++;
    });

    loadBtn.addEventListener('click', () => {
        for (let i = 0; i < 12; i++) { //  больше= 12
            content.length ? imgContainer.insertAdjacentHTML('beforeend', content.shift()) : false;
        }
        content.length > 0 ? loadBtn.style.display = 'block' : loadBtn.style.display = 'none';
    });

    function getContent(...objects) {
        for (let i = 0; i < objects.length; i++) {
            objects[i].images.map(el => {
                content.push(`
                                <div class="work-images-wrapper">
                                    <img src="/imgs/${objects[i].path}/${el}.jpg" alt="${objects[i].path} image ${el}" class="work-images-item">
                                    <div class="work-images-flip-card">
                                        <img src="/imgs/work-flip-card-img.png" alt="flip card icon">
                                        <p class="fc-turq">creative design</p>
                                        <p>${objects[i].path}</p>
                                    </div>
                                </div>
                            `);
            }).filter(Boolean).join('');
        }
        return content;
    }

    function arrShuffle(array) {
        let currentIndex = array.length;
        let randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    document.querySelector('.work-tabs-title').click();
})

//--------------- Slider ---------------//

const slider = {
    //order in slave objects required! next elem: property += 1: id +=1
    //imgLink should repeat path to photo from root of the project

    1: {
        id: 1,
        header: 'Agata',
        text1: 'Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa.\n' +
            '   Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non\n' +
            '   dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.',
        text2: 'Junior SE',
        imgLink: '/imgs/slider/1.jpg',
    },
    2: {
        id: 2,
        header: 'Ida',
        text1: 'Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa.\n' +
            '   Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non\n' +
            '   dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.',
        text2: 'Middle SE',
        imgLink: '/imgs/slider/2.jpg',
    },
    3: {
        id: 3,
        header: 'John',
        text1: 'Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa.\n' +
            '   Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non\n' +
            '   dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.',
        text2: 'Senior SE',
        imgLink: '/imgs/slider/3.jpg',
    },
    4: {
        id: 4,
        header: 'Alex',
        text1: 'Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa.\n' +
            '   Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non\n' +
            '   dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.',
        text2: 'Team lead',
        imgLink: '/imgs/slider/4.jpg',
    },
    5: {
        id: 5,
        header: 'Ivan',
        text1: 'Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa.\n' +
            '   Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non\n' +
            '   dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.',
        text2: 'Middle SE',
        imgLink: '/imgs/slider/5.jpg',
    },
    6: {
        id: 6,
        header: 'Karen',
        text1: 'Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa.\n' +
            '   Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non\n' +
            '   dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.',
        text2: 'Junior SE',
        imgLink: '/imgs/slider/6.jpg',
    },
    7: {
        id: 7,
        header: 'Jack ',
        text1: 'Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa.\n' +
            '   Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non\n' +
            '   dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.',
        text2: 'Middle SE',
        imgLink: '/imgs/slider/7.jpg',
    },
    8: {
        id: 8,
        header: 'Andrey',
        text1: 'Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa.\n' +
            '   Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non\n' +
            '   dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.',
        text2: 'Junior SE',
        imgLink: '/imgs/slider/8.jpg',
    },
    9: {
        id: 9,
        header: 'Sergey',
        text1: 'Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa.\n' +
            '   Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non\n' +
            '   dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.',
        text2: 'Designer',
        imgLink: '/imgs/slider/9.jpg',
    },
    10: {
        id: 10,
        header: 'Elon ',
        text1: 'Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa.\n' +
            '   Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non\n' +
            '   dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.',
        text2: 'Designer',
        imgLink: '/imgs/slider/10.jpg',
    },
    11: {
        id: 11,
        header: 'Steve',
        text1: 'Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa.\n' +
            '   Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non\n' +
            '   dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.',
        text2: 'Middle QA engineer',
        imgLink: '/imgs/slider/11.jpg',
    },
    12: {
        id: 12,
        header: 'Steve',
        text1: 'Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa.\n' +
            '   Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non\n' +
            '   dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.',
        text2: 'Project manager',
        imgLink: '/imgs/slider/12.jpg',
    },
    13: {
        id: 13,
        header: 'Ignat',
        text1: 'Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa.\n' +
            '   Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non\n' +
            '   dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.',
        text2: 'Junior QA engineer',
        imgLink: '/imgs/slider/13.jpg',
    },

}

window.addEventListener('load', () => {

    //Main ToDos:
    //First page randomizer - done
    //Code refactoring (join listener functions)

    const sliderContainer = document.querySelector('.testimonial-slider-container');
    const size = Object.keys(slider).length;
    const navBar = document.querySelector('.testimonial-slider-nav').children;



    function changeIconsBG(curr, dir) {
        //expected input: current object ID, direction

        let startColl = document.querySelectorAll('.testimonial-slider-nav img');
        let nextId = getNextObjID(curr, dir);

        let leftColl = [];
        let rightColl = [];


        startColl.forEach((el, index) => {
            index < 3 ? leftColl[index] = el.dataset.id : false;
        })
        startColl.forEach((el, index) => {
            index > 0 ? rightColl[index] = el.dataset.id : false;
        })

        rightColl = rightColl.filter(Boolean);

        if (dir === 'l') {
            startColl.forEach((el, index) => {

                if (index === 0) {
                    el.setAttribute('src', slider[nextId].imgLink);
                    el.dataset.id = nextId;
                } else if (index > 0) {
                    el.setAttribute('src', slider[+leftColl[index - 1]].imgLink);
                    el.dataset.id = `${slider[+leftColl[index - 1]].id}`;
                }
            })
        } else if (dir === 'r') {
            startColl.forEach((el, index) => {

                if (index < 3) {
                    el.setAttribute('src', slider[+rightColl[index]].imgLink);
                    el.dataset.id = `${slider[+rightColl[index]].id}`;
                } else if (index === 3) {
                    el.setAttribute('src', slider[nextId].imgLink);
                    el.dataset.id = nextId;
                }
            })
        }

    }


    function changeMainBG(target, dir) {
        /*debugger;*/

        let leftSlide = document.querySelector('.testimonial-slide-wrapper:nth-child(1)').children;
        let centerSlide = document.querySelector('.testimonial-slide-wrapper:nth-child(2)').children;
        let rightSlide = document.querySelector('.testimonial-slide-wrapper:nth-child(3)').children;

        if (dir === 'l') {

            leftSlide[0].innerText = slider[target].text1;
            leftSlide[1].innerText = slider[target].header;
            leftSlide[2].innerText = slider[target].text2;
            leftSlide[3].setAttribute('src', slider[target].imgLink);

            sliderContainer.classList.add('move-left');

        } else if (dir === 'r') {
            rightSlide[0].innerText = slider[target].text1;
            rightSlide[1].innerText = slider[target].header;
            rightSlide[2].innerText = slider[target].text2;
            rightSlide[3].setAttribute('src', slider[target].imgLink);

            sliderContainer.classList.add('move-right');

        }

        setTimeout(() => {
            centerSlide[0].innerText = slider[target].text1;
            centerSlide[1].innerText = slider[target].header;
            centerSlide[2].innerText = slider[target].text2;
            centerSlide[3].setAttribute('src', slider[target].imgLink);

            sliderContainer.classList.remove('move-left', 'move-right');
            //sliderContainer.classList.remove('move-right');

        }, 1000);

    }


    function getNextObjID(curr, dir) {
        //expected input: current object ID, direction
        //expected output: next (left or right) object ID

        let currSlideId = curr;
        let nextSlideId;

        if (dir === 'r') {
            (currSlideId + 1) > size ? nextSlideId = 1 : nextSlideId = currSlideId + 1;
        } else if (dir === 'l') {
            (currSlideId - 1) < 1 ? nextSlideId = size : nextSlideId = currSlideId - 1;
        }

        return nextSlideId;
    }


    function addActiveClass(dir) {
        Array.from(navBar).forEach(el => { dir ? el.classList.remove('active') : false });
        dir === 'l' ? navBar[2].classList.add('active') : false;
        dir === 'r' ? navBar[3].classList.add('active') : false;
    }


    function validate(curr, target, dir) {
        let c = !!Object.keys(slider).includes(`${target}`);
        let t = !!Object.keys(slider).includes(`${target}`);
        let d = !!(dir === 'l' || dir === 'r');

        return c && t && d;
    }






    window.addEventListener('keydown', (ev) => {
        ev.key === 'ArrowLeft' ? leftArrowListener(ev, 'l') : false;
        ev.key === 'ArrowRight' ? rightArrowListener(ev, 'r') : false;
    })


    navBar[0].addEventListener('click', ev => leftArrowListener(ev));

    function leftArrowListener(ev, dirArg) {

        //Left Arrow click

        let firstIcon = +document.querySelector('.testimonial-slider-nav img:nth-child(2)').dataset.id; //1st img of collection
        let target = +document.querySelector('.testimonial-slider-nav img.active').previousElementSibling.dataset.id;

        let dir;
        dirArg ? dir = dirArg : dir = ev.target.dataset.direction;

        if (firstIcon === target && validate(firstIcon, target, dir)) {
            changeIconsBG(firstIcon, dir);
            addActiveClass(dir);
            changeMainBG(target, dir);
        } else if (validate(firstIcon, target, dir)) {
            changeMainBG(target, dir);
            addActiveClass(dir);
        }

    }

    navBar[1].addEventListener('click', ev => {

        //left Image click
        let firstIcon = +ev.target.dataset.id;

        let dir = ev.target.dataset.direction;
        let target = +ev.target.dataset.id;

        if (validate(firstIcon, target, dir)) {
            changeIconsBG(firstIcon, dir);
            changeMainBG(target, dir);
            addActiveClass(dir);
        }

    });

    function centerListener(ev) {

        let dir = ev.target.dataset.direction;
        let target = ev.target.dataset.id;
        if (validate(true, target, dir)) {
            changeMainBG(target, dir);
            addActiveClass(dir);
        }

    }

    navBar[2].addEventListener('click', ev => centerListener(ev));
    navBar[3].addEventListener('click', ev => centerListener(ev));

    navBar[4].addEventListener('click', ev => {

        //right image click
        let lastIcon = +ev.target.dataset.id;

        let dir = ev.target.dataset.direction;
        let target = +ev.target.dataset.id;

        if (validate(lastIcon, target, dir)) {
            changeIconsBG(lastIcon, dir);
            addActiveClass(dir);
            changeMainBG(target, dir);
        }

    });

    navBar[5].addEventListener('click', ev => rightArrowListener(ev));

    function rightArrowListener(ev, dirArg) {

        //Right Arrow click
        let lastIcon = +document.querySelector('.testimonial-slider-nav img:nth-child(5)').dataset.id;
        let target = +document.querySelector('.testimonial-slider-nav img.active').nextElementSibling.dataset.id;

        let dir;
        dirArg ? dir = dirArg : dir = ev.target.dataset.direction;

        if (lastIcon === target && validate(lastIcon, target, dir)) {
            changeIconsBG(lastIcon, dir);
            changeMainBG(target, dir);
        } else if (validate(lastIcon, target, dir)) {
            changeMainBG(target, dir);
            addActiveClass(dir);
        }

    }


    function startScreen() {

        let randClick = Math.floor(Math.random() * 6 + 10);

        for (let i = 0; i < randClick; i++) {
            let randImgNav = Math.floor(Math.random() * 4 + 1);
            navBar[randImgNav].click();
        }
    }
    startScreen();


})


