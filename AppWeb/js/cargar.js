document.addEventListener("DOMContentLoaded", () => {

    const imagenApi = document.getElementById("imagen-api");
    const botonCargar = document.getElementById("cargar-imagen-btn");
    const apiURL = "https://picsum.photos/800/600";

    botonCargar.addEventListener("click", () => {
        fetch(apiURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error("No se pudo cargar la imagen");
                }
                return response.url;
            })
            .then(imageUrl => {
                imagenApi.src = imageUrl;
                imagenApi.style.display = "block";
            })
            .catch(error => {
                console.error("Error al cargar la imagen:", error);
            });
    });

});