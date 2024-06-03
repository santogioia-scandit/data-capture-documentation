import React from 'react'
import classNames from 'classnames';

export default function CustomDocCard(props) {
  const { title, description, link, imgSrc, small = false, smallIcon = false } = props;
  const linkClasses = classNames({
    card: true,
    cardContainer: true,
    'padding--lg': !small,
    'padding--md': small,
  });
  const cardClasses = classNames({
    'custom-doc-card': true,
    'margin-bottom--lg': !small,
    'margin-bottom--sm': small,
    'custom-doc-card--small': small,
  });
  return (
    <article className={cardClasses}>
      <a className={linkClasses} href={link}>
        <h2
          className={`text--truncate cardTitle ${
            smallIcon ? "card-icon-small" : ""
          }`}
          title={title}
        >
          <div className="img-wrap">
            {" "}
            {imgSrc ? <img src={imgSrc} alt="Image description" /> : ""}{" "}
          </div>{" "}
          {title}
        </h2>
        <p className="text--truncate cardDescription" title={description}>
          {description}
        </p>
      </a>
    </article>
  );
}
