import React from 'react';
import PropTypes from 'prop-types';
import styles from './footer.module.css';

/**
 * Footer — универсальный подвал сайта.
 *
 * @param {Object[]} socialLinks - массив социальных ссылок ({ name, url }).
 * @returns JSX.Element
 */
function Footer({ socialLinks }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {socialLinks && socialLinks.length > 0 && (
          <ul className={styles.socialList}>
            {socialLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.url}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        )}
        <div className={styles.copyright}>
          © {new Date().getFullYear()} Mobile First. Все права защищены.
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};

Footer.defaultProps = {
  socialLinks: [],
};

export default React.memo(Footer);