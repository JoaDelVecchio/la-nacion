import React from "react";
import Link from "next/link";
import Image from "next/image";

const ArticleCard = ({ article, isPriorityImage }) => {
  const { headlines, display_date, promo_items } = article;
  const imageUrl = promo_items?.basic?.url;

  return imageUrl ? (
    <article className="mod-caja-nota lugares w-100-mobile">
      <section className="cont-figure">
        <Link href={`#`} className="figure">
          <picture className="content-pic picture">
            <Image
              src={imageUrl}
              className="content-img"
              alt={headlines?.basic || "Imagen del artículo de noticias"}
              priority={isPriorityImage}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </picture>
        </Link>
      </section>
      <div className="mod-caja-nota__descrip">
        <h2 className="com-title-acu">
          <Link href={"#"}>
            <b>{headlines?.basic}</b>
          </Link>
        </h2>
        <h4 className="com-date">{display_date}</h4>
      </div>
    </article>
  ) : null;
};
export default ArticleCard;
