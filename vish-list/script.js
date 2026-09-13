const wishlist = [
    {
        title: "Косметика Flower Knows",
        description: "Любой косметос от Flower Knows. Если палетка то пж с розовыми оттенками. Розового очень мало",
        background: "images/flower-knows.jpg"
    },

    {
        title: "Тушь Maybelline Sky High",
        description: "Можно Sky High, но это по желанию подойдет и любая другая тушь",
        background: "images/maybelline.jpg"
    },

    {
        title: "Акрил",
        description: "Акрил",
        background: "images/acryl.jpg"
    },

    {
        title: "Вазелин",
        description: "ааааааааааааааааа",
        background: "images/vaseline.jpg"
    },

    {
        title: "Сухой шампунь",
        description: "Какой-нибудь сухой шампунь. Можно Ice",
        background: "images/dry-shampoo.jpg"
    },

    {
        title: "Мышка",
        description: "Любая мышка. Можно даже самую дешевую",
        background: "images/mouse.jpg"
    },

    {
        title: "Tesori d'Oriente",
        description: "Туалетная вода от Tesori d'Oriente. Там классные парфюмы и много миллилитров по 150. запах можно выбрать любой",
        background: "images/tesori.jpg"
    },

    {
        title: "Книги на английском",
        description: "Какие-нибудь книги на английском примерно уровня A2–B1",
        background: "images/books.jpg"
    },

    {
        title: "Чипсы",
        description: "Чипсы с солью или соль+перец. Соль+перец это новый вкус",
        background: "images/chips.jpg"
    },

    {
        title: "скитлас",
        description: "Просто скитлс",
        background: "images/skittles.jpg"
    },

    {
        title: "Шампунь Art&Fact",
        description: "Можно заказать шампунь от арт энд факт. Если брать будешь то либо для объема, либо увлажняющий",
        background: "images/art-fact.jpg"
    },

    {
        title: "YooAh",
        description: "Хайлайтер-палетка YooAh в оттенке 02",
        background: "images/yooah.jpg"
    },

    {
        title: "Средство для веснушек",
        description: "Спрей для веснушек. Можно спрей для отросших корней коричневого цвета или маркер для веснушек",
        background: "images/freckles.jpg"
    },

    {
        title: "Нарукавники для умывания",
        description: "Нарукавники для умывания, нада оч",
        background: "images/wristbands.jpg"
    },

    {
        title: "Клей момент",
        description: "Клей",
        background: "images/moment.jpg"
    },

    {
        title: "Чехол-раскладушка",
        description: "Тот чехол с алика на самсунг s23 FE.. FE обязательно они там отличаются оч",
        background: "images/case.jpg"
    },

    {
        title: "Кристалл-дезодорант",
        description: "Кристалл-дезодорант минеральный",
        background: "images/deodorant.jpg"
    },

    {
        title: "Подставка для телефона",
        description: "Чтобы смотреть видео, когда играю. Можно какую-нибудь розовую прикольну милую ня кавайную",
        background: "images/phone-stand.jpg"
    },

    {
        title: "Кружки",
        description: "Наверное, не надо больше кружек, мне некудаа",
        background: "images/mugs.jpg"
    },

    {
        title: "Фигурки",
        description: "Фигурки всякие тоже не надо. Ну если только не Пушин)))))))))))))",
        background: "images/pushin.jpg"
    }
];

let currentPage = -1;

const page = document.getElementById("page");
const card = document.getElementById("card");
const title = document.getElementById("title");
const description = document.getElementById("description");
const nextButton = document.getElementById("nextButton");
const counter = document.getElementById("counter");

function showPage(index) {

    const item = wishlist[index];

    title.textContent = item.title;
    description.textContent = item.description;

    counter.textContent = `${index + 1} / ${wishlist.length}`;

    page.style.backgroundImage = `url("${item.background}")`;

    if (index === wishlist.length -1) {
        nextButton.innerHTML = `В начало <span>↻</span>`;
    } else {
        nextButton.innerHTML = `Далее <span>→</span>`;
    }

    card.classList.remove("fade-in");

    void card.offsetWidth;

    card.classList.add("fade-in");
}

nextButton.addEventListener("click", () => {

    page.classList.add("fade-out");

    setTimeout(() => {

        if (currentPage === wishlist.length - 1) {

            currentPage = -1;

            title.textContent = "Вишлист для Стефании";
            description.textContent = "";

            counter.textContent = "";

            nextButton.innerHTML = `Далее <span>→</span>`;

            page.style.backgroundImage = "";

        } else {

            currentPage++;

            showPage(currentPage);
        }

        page.classList.remove("fade-out");

    }, 450);
});