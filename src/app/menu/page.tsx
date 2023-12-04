import React from "react";
import "./style.css";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const createElement = React.createElement;

  return createElement(
    'div',
    null,
    createElement('style', null, styles),
    createElement(
      'div',
      { className: 'menu-toggle', id: 'mobile-menu', onClick: toggleMenu },
      createElement('span', { className: 'bar' }),
      createElement('span', { className: 'bar' }),
      createElement('span', { className: 'bar' })
    ),
    createElement(
      'nav',
      { className: `menu ${menuOpen ? 'show' : ''}` },
      createElement(
        'ul',
        null,
        createElement('li', null, createElement('a', { href: '#' }, 'Histórico')),
        createElement('li', null, createElement('a', { href: '#' }, 'Configurações')),
        createElement('li', null, createElement('a', { href: '#' }, 'Ajuda')),
        createElement('li', null, createElement('a', { href: '#' }, 'Sair'))
      )
    )
  );
};

export default App;
