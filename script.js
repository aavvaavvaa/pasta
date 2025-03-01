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
}
main()