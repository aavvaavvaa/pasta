function main() {
    document.querySelectorAll(".gif_url").forEach((el) => {
        el.addEventListener("click", function() {
            let m = document.querySelector(".gif_modal")
            let c = m.querySelector('img')
            if (c) {
                c.src = this.src
                m.classList.add("active");
            }
        });
    })
    document.querySelector(".gif_modal").addEventListener("click", function() {
        document.querySelector(".gif_modal").classList.remove("active");
    });
    document.querySelectorAll(".tab-btn").forEach(button => {
        button.addEventListener("click", function() {
            // Убираем активный класс у всех кнопок и таблиц
            document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
            document.querySelectorAll(".table_container").forEach(table => table.classList.remove("active"));

            // Делаем текущую кнопку и соответствующую таблицу активной
            this.classList.add("active");
            document.getElementById(this.dataset.target).classList.add("active");
        });
    });
}
main()