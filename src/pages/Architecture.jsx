import React, { useEffect, useRef } from 'react';
import { Tile, StructuredListWrapper, StructuredListHead, StructuredListRow, StructuredListCell, StructuredListBody } from '@carbon/react';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: true,
  theme: 'default',
  securityLevel: 'loose',
});

const MermaidChart = ({ chart }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current && chart) {
      mermaid.render('mermaid-' + Math.random().toString(36).substring(7), chart)
        .then(({ svg }) => {
          ref.current.innerHTML = svg;
        })
        .catch(e => {
          console.error("Mermaid syntax error", e);
        });
    }
  }, [chart]);

  return <div ref={ref} className="mermaid-diagram" />;
};

const rawChart = `flowchart LR
    A["GitHub Event (Push, PR)"] -->|"Webhook"| B("GitHub Actions Runner")
    B -->|"Checkout Code & Skills"| C{"Bob Shell"}
    C -->|"Security Feedback"| C
    C -->|"gh API (Comments/PRs)"| A

    style A fill:#f4f4f4,stroke:#333,stroke-width:2px,color:#000
    style B fill:#0f62fe,stroke:#0f62fe,stroke-width:2px,color:#fff
    style C fill:#1192e8,stroke:#1192e8,stroke-width:2px,color:#fff
`;

const Architecture = () => {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', paddingBottom: '4rem' }}>
      <h1 className="cds--heading-expressive-05" style={{ marginBottom: '1.5rem', marginTop: '2rem' }}>
        Arquitectura de Integración
      </h1>
      
      <p className="cds--body-long-01" style={{ marginBottom: '2rem' }}>
        Para entender cómo logramos la automatización, es crucial visualizar el ciclo de vida de una petición. La interacción es completamente asíncrona y está impulsada por eventos.
      </p>

      <Tile style={{ marginBottom: '3rem', padding: '2rem', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%' }}>
          <MermaidChart chart={rawChart} />
        </div>
      </Tile>

      <h3 className="cds--heading-expressive-03" style={{ marginBottom: '1.5rem' }}>Componentes del Flujo</h3>
      
      <StructuredListWrapper>
        <StructuredListHead>
          <StructuredListRow head>
            <StructuredListCell head>Componente</StructuredListCell>
            <StructuredListCell head>Rol en la Arquitectura</StructuredListCell>
          </StructuredListRow>
        </StructuredListHead>
        <StructuredListBody>
          <StructuredListRow>
            <StructuredListCell><strong>GitHub Repository</strong></StructuredListCell>
            <StructuredListCell>El origen de la verdad. Donde reside el código y ocurren los eventos (Ej. un desarrollador hace <code>git push</code>).</StructuredListCell>
          </StructuredListRow>
          <StructuredListRow>
            <StructuredListCell><strong>GitHub Actions Runner</strong></StructuredListCell>
            <StructuredListCell>Una máquina virtual (típicamente Ubuntu) que arranca al detectar el evento. Clona el código fuente e instala el binario de Bob Shell.</StructuredListCell>
          </StructuredListRow>
          <StructuredListRow>
            <StructuredListCell><strong>Bob Shell</strong></StructuredListCell>
            <StructuredListCell>El agente inteligente. Toma el código fuente, lee las reglas (<em>Skills</em>) del repositorio, procesa la información para detectar anomalías y genera una respuesta automatizada (diagnóstico o código parcheado).</StructuredListCell>
          </StructuredListRow>
          <StructuredListRow>
            <StructuredListCell><strong>GitHub CLI (gh)</strong></StructuredListCell>
            <StructuredListCell>Herramienta utilizada por el runner para inyectar la respuesta de Bob de vuelta a GitHub en forma de Comentarios, Issues o etiquetas.</StructuredListCell>
          </StructuredListRow>
        </StructuredListBody>
      </StructuredListWrapper>
    </div>
  );
};

export default Architecture;
