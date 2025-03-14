export const mockApiResponse = {
  articles: [
    {
      _id: "1",
      title: "Artículo 1",
      subtype: "7",
      display_date: "2023-08-12T10:15:30.000Z",
      website_url: "/noticias/articulo-1",
      promo_items: { basic: { url: "https://example.com/image1.jpg" } },
      taxonomy: { tags: [{ slug: "javascript", text: "JavaScript" }] },
    },
    {
      _id: "2",
      title: "Artículo 2",
      subtype: "7",
      display_date: "2023-09-05T14:22:10.000Z",
      website_url: "/noticias/articulo-2",
      promo_items: { basic: { url: "https://example.com/image2.jpg" } },
      taxonomy: { tags: [{ slug: "react", text: "ReactJS" }] },
    },
    {
      _id: "3",
      title: "Artículo 3",
      subtype: "8",
      display_date: "2023-07-20T08:45:00.000Z",
      website_url: "/noticias/articulo-3",
      promo_items: { basic: { url: "https://example.com/image3.jpg" } },
      taxonomy: { tags: [{ slug: "python", text: "Python" }] },
    },
    {
      _id: "4",
      title: "Artículo 4",
      subtype: "7",
      display_date: "2023-10-10T18:05:45.000Z",
      website_url: "/noticias/articulo-4",
      promo_items: { basic: { url: "https://example.com/image4.jpg" } },
      taxonomy: { tags: [{ slug: "javascript", text: "JavaScript" }] },
    },
    {
      _id: "5",
      title: "Artículo 5",
      subtype: "9",
      display_date: "2023-06-30T12:00:00.000Z",
      website_url: "/noticias/articulo-5",
      promo_items: { basic: { url: "https://example.com/image5.jpg" } },
      taxonomy: { tags: [{ slug: "nodejs", text: "Node.js" }] },
    },
    {
      _id: "6",
      title: "Artículo 6",
      subtype: "7",
      display_date: "2023-11-15T09:30:00.000Z",
      website_url: "/noticias/articulo-6",
      promo_items: { basic: { url: "https://example.com/image6.jpg" } },
      taxonomy: { tags: [{ slug: "javascript", text: "JavaScript" }] },
    },
    {
      _id: "7",
      title: "Artículo 7",
      subtype: "7",
      display_date: "2023-12-01T14:45:20.000Z",
      website_url: "/noticias/articulo-7",
      promo_items: { basic: { url: "https://example.com/image7.jpg" } },
      taxonomy: { tags: [{ slug: "react", text: "ReactJS" }] },
    },
    {
      _id: "8",
      title: "Artículo 8",
      subtype: "8",
      display_date: "2023-09-25T11:10:00.000Z",
      website_url: "/noticias/articulo-8",
      promo_items: { basic: { url: "https://example.com/image8.jpg" } },
      taxonomy: { tags: [{ slug: "nodejs", text: "Node.js" }] },
    },
    {
      _id: "9",
      title: "Artículo 9",
      subtype: "7",
      display_date: "2023-10-22T16:00:00.000Z",
      website_url: "/noticias/articulo-9",
      promo_items: { basic: { url: "https://example.com/image9.jpg" } },
      taxonomy: { tags: [{ slug: "typescript", text: "TypeScript" }] },
    },
    {
      _id: "10",
      title: "Artículo 10",
      subtype: "7",
      display_date: "2023-11-29T07:45:30.000Z",
      website_url: "/noticias/articulo-10",
      promo_items: { basic: { url: "https://example.com/image10.jpg" } },
      taxonomy: { tags: [{ slug: "javascript", text: "JavaScript" }] },
    },
    {
      _id: "11",
      title: "Artículo 11",
      subtype: "9",
      display_date: "2023-06-05T12:30:00.000Z",
      website_url: "/noticias/articulo-11",
      promo_items: { basic: { url: "https://example.com/image11.jpg" } },
      taxonomy: { tags: [{ slug: "docker", text: "Docker" }] },
    },
    {
      _id: "12",
      title: "Artículo 12",
      subtype: "7",
      display_date: "2023-06-03T12:30:00.000Z",
      website_url: "/noticias/articulo-12",
      promo_items: { basic: { url: "https://example.com/image12.jpg" } },
      taxonomy: { tags: [{ slug: "docker", text: "Docker" }] },
    },
  ],
};

export const expectedArticlesAfterFetch = [
  {
    _id: "1",
    title: "Artículo 1",
    subtype: "7",
    display_date: "12 de agosto de 2023",
    website_url: "/noticias/articulo-1",
    promo_items: { basic: { url: "https://example.com/image1.jpg" } },
    taxonomy: { tags: [{ slug: "javascript", text: "JavaScript" }] },
  },
  {
    _id: "2",
    title: "Artículo 2",
    subtype: "7",
    display_date: "5 de septiembre de 2023",
    website_url: "/noticias/articulo-2",
    promo_items: { basic: { url: "https://example.com/image2.jpg" } },
    taxonomy: { tags: [{ slug: "react", text: "ReactJS" }] },
  },
  {
    _id: "4",
    title: "Artículo 4",
    subtype: "7",
    display_date: "10 de octubre de 2023",
    website_url: "/noticias/articulo-4",
    promo_items: { basic: { url: "https://example.com/image4.jpg" } },
    taxonomy: { tags: [{ slug: "javascript", text: "JavaScript" }] }, // Actualizado a 'javascript'
  },
  {
    _id: "6",
    title: "Artículo 6",
    subtype: "7",
    display_date: "15 de noviembre de 2023",
    website_url: "/noticias/articulo-6",
    promo_items: { basic: { url: "https://example.com/image6.jpg" } },
    taxonomy: { tags: [{ slug: "javascript", text: "JavaScript" }] }, // Actualizado a 'javascript'
  },
  {
    _id: "7",
    title: "Artículo 7",
    subtype: "7",
    display_date: "1 de diciembre de 2023",
    website_url: "/noticias/articulo-7",
    promo_items: { basic: { url: "https://example.com/image7.jpg" } },
    taxonomy: { tags: [{ slug: "react", text: "ReactJS" }] }, // Actualizado a 'react'
  },
  {
    _id: "9",
    title: "Artículo 9",
    subtype: "7",
    display_date: "22 de octubre de 2023",
    website_url: "/noticias/articulo-9",
    promo_items: { basic: { url: "https://example.com/image9.jpg" } },
    taxonomy: { tags: [{ slug: "typescript", text: "TypeScript" }] },
  },
  {
    _id: "10",
    title: "Artículo 10",
    subtype: "7",
    display_date: "29 de noviembre de 2023",
    website_url: "/noticias/articulo-10",
    promo_items: { basic: { url: "https://example.com/image10.jpg" } },
    taxonomy: { tags: [{ slug: "javascript", text: "JavaScript" }] }, // Actualizado a 'javascript'
  },
  {
    _id: "12",
    title: "Artículo 12",
    subtype: "7",
    display_date: "3 de junio de 2023",
    website_url: "/noticias/articulo-12",
    promo_items: { basic: { url: "https://example.com/image12.jpg" } },
    taxonomy: { tags: [{ slug: "docker", text: "Docker" }] }, // Actualizado a 'docker'
  },
];

export const expectedTopTags = [
  { slug: "javascript", text: "JavaScript", count: 4 },
  { slug: "nodejs", text: "Node.js", count: 3 },
  { slug: "react", text: "ReactJS", count: 2 },
  { slug: "docker", text: "Docker", count: 2 },
  { slug: "typescript", text: "TypeScript", count: 1 },
  { slug: "python", text: "Python", count: 1 },
];

export const mockArticlesTags = [
  {
    _id: 1,
    title: "Aprendiendo JavaScript",
    taxonomy: {
      tags: [
        { slug: "javascript", text: "JavaScript" },
        { slug: "programming", text: "Programming" },
      ],
    },
  },
  {
    _id: 2,
    title: "Guía de desarrollo web",
    taxonomy: {
      tags: [
        { slug: "javascript", text: "JavaScript" },
        { slug: "webdev", text: "Web Development" },
      ],
    },
  },
  {
    _id: 3,
    title: "Patrones de diseño en programación",
    taxonomy: {
      tags: [
        { slug: "programming", text: "Programming" },
        { slug: "webdev", text: "Web Development" },
      ],
    },
  },
  {
    _id: 4,
    title: "Node.js y su ecosistema",
    taxonomy: {
      tags: [
        { slug: "nodejs", text: "Node.js" },
        { slug: "javascript", text: "JavaScript" },
      ],
    },
  },
];
