
const projects = document.querySelectorAll(".project-section")
projects.forEach(project => {
    const description = project.querySelector(".project-description")
    project.addEventListener("click", () => {
        description.classList.toggle("h-96")
    })
})
