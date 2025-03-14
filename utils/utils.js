export const formatToLongDate = (dateString) => {
  try {
    if (!dateString) throw new Error("Formato de fecha inválido");

    const date = new Date(dateString);
    if (isNaN(date.getTime())) throw new Error("Formato de fecha inválido");

    return date.toLocaleDateString("es-AR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch (error) {
    console.log(error.message);
    return "Formato de fecha inválido";
  }
};

export const getTopTags = (articles) => {
  try {
    if (!Array.isArray(articles) || articles.length === 0) {
      throw new Error("No se han recibido artículos");
    }

    return Object.values(
      articles
        .flatMap((article) => article.taxonomy?.tags) // Extrae todos los tags de cada artículo en un solo array
        .reduce((acc, { slug, text }) => {
          // Si el tag ya existe, incrementa en 1 su count, sino lo inicializa con count = 1
          acc[slug] = { slug, text, count: (acc[slug]?.count || 0) + 1 };
          return acc;
        }, {})
    )
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);
  } catch (error) {
    console.error("Error al buscar topTags:", error.message);
    return []; // Devolver un array vacío para evitar que el componente falle
  }
};
