/**
 * Encabezado reutilizable para las secciones de laboratorio.
 * Muestra una barra de acento de color, un eyebrow (etiqueta superior),
 * el título y un pill con la duración.
 *
 * Props:
 *  - eyebrow:  texto pequeño superior (ej. "LABORATORIO 3")
 *  - title:    título principal
 *  - duration: texto del pill (ej. "20 min")
 *  - accent:   color de acento ("#8a3ffc" lab3, "#0f62fe" lab4)
 *  - children: descripción / subtítulo
 */
const LabHeader = ({ eyebrow, title, duration, accent = '#0f62fe', children }) => (
  <div
    className="lab-header"
    style={{ borderLeft: `4px solid ${accent}`, paddingLeft: '1.25rem' }}
  >
    {eyebrow && (
      <div
        className="lab-header__eyebrow"
        style={{ color: accent, letterSpacing: '0.08em' }}
      >
        {eyebrow}
      </div>
    )}
    <div className="lab-header__title-row">
      <h1 className="cds--heading-expressive-05" style={{ margin: 0 }}>
        {title}
      </h1>
      {duration && (
        <span
          className="lab-header__pill"
          style={{ backgroundColor: accent }}
        >
          ⏱ {duration}
        </span>
      )}
    </div>
    {children && (
      <p className="cds--body-long-02 lab-header__lede">{children}</p>
    )}
  </div>
);

export default LabHeader;
