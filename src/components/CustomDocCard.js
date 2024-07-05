import React from 'react'
import classNames from 'classnames';

export default function CustomDocCard(props) {
  const { title, description, link, imgSrc, small = false, smallIcon = false, children } = props;
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
        <div
          className={`${children || imgSrc ? "img-wrap" : ""} cardTitle ${
            smallIcon ? "card-icon-small" : ""
          }`}
        >
          {imgSrc ? <img src={imgSrc} alt="Image description" /> : children}
        </div>
        <h2
          className={`text--truncate cardTitle ${
            smallIcon ? "card-icon-small" : ""
          }`}
          title={title}
        >
          {title}
        </h2>
        <p className="text--truncate cardDescription" title={description}>
          {description}
        </p>
      </a>
    </article>
  );
}
