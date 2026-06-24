import { Tile, Tag } from '@carbon/react';

/**
 * Tarjeta de reto consistente para los laboratorios.
 *
 * Props:
 *  - num:    número del reto (string|number)
 *  - title:  título del reto
 *  - time:   duración estimada (ej. "4 min")
 *  - tag:    etiqueta de tipo (ej. "Automático", "Manual") — opcional
 *  - tagType: tipo de color de la Tag de Carbon (default "blue")
 *  - children: contenido del reto
 */
const Challenge = ({ num, title, time, tag, tagType = 'blue', children }) => (
  <Tile className="challenge">
    <div className="challenge__head">
      <span className="challenge__num">{num}</span>
      <h3 className="challenge__title cds--heading-expressive-03">{title}</h3>
      <span className="challenge__meta">
        {tag && <Tag type={tagType} size="sm">{tag}</Tag>}
        {time && <Tag type="cool-gray" size="sm">{time}</Tag>}
      </span>
    </div>
    {children}
  </Tile>
);

export default Challenge;
