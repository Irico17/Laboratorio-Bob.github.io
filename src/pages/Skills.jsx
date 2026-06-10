import React from 'react';
import { Grid, Column, Tile, CodeSnippet, InlineNotification, UnorderedList, ListItem } from '@carbon/react';

const Skills = () => {
  return (
    <div style={{ paddingBottom: '4rem' }}>
      <h1 className="cds--heading-expressive-05" style={{ marginBottom: '1.5rem', marginTop: '2rem' }}>
        Configuración de Skills (Contexto para IA)
      </h1>
      
      <p className="cds--body-long-01" style={{ maxWidth: '800px', marginBottom: '2rem' }}>
        Para que la Inteligencia Artificial analice el código adecuadamente, no basta con decirle "revisa este código". Necesitamos darle <strong>contexto corporativo, estándares de seguridad y convenciones de equipo</strong>. Aquí es donde entran las Skills.
      </p>

      <Grid style={{ marginBottom: '2rem' }}>
        <Column sm={4} md={8} lg={12}>
          <Tile>
            <h3 className="cds--heading-expressive-03" style={{ marginBottom: '1rem' }}>Estructura del Proyecto</h3>
            <p className="cds--body-long-01" style={{ marginBottom: '1rem' }}>
              Las skills deben almacenarse obligatoriamente en la ruta <code>.bob/skills/</code> en la raíz de tu repositorio. Cada skill es una subcarpeta con un archivo <code>SKILL.md</code>.
            </p>
            <CodeSnippet type="multi" style={{ marginBottom: '1rem' }}>
{`mi-repositorio/
├── .github/
│   └── workflows/
├── .bob/
│   └── skills/
│       ├── owasp-security/
│       │   └── SKILL.md
│       └── clean-code-rules/
│           └── SKILL.md
└── src/`}
            </CodeSnippet>
          </Tile>
        </Column>
      </Grid>

      <h2 className="cds--heading-expressive-04" style={{ marginBottom: '1.5rem' }}>Ingeniería de Prompts (Prompt Engineering)</h2>
      <Grid style={{ marginBottom: '2rem' }}>
        <Column sm={4} md={4} lg={6}>
          <Tile style={{ height: '100%' }}>
            <h4 className="cds--heading-expressive-02" style={{ marginBottom: '1rem', color: '#0f62fe' }}>1. Role Prompting</h4>
            <p className="cds--body-long-01">
              Comienza tu <code>SKILL.md</code> asignándole un rol a Bob. Ej: <em>"Actúa como un Arquitecto de Software Senior y experto en Ciberseguridad"</em>. Esto calibra los pesos internos del LLM para dar respuestas más técnicas.
            </p>
          </Tile>
        </Column>
        <Column sm={4} md={4} lg={6}>
          <Tile style={{ height: '100%' }}>
            <h4 className="cds--heading-expressive-02" style={{ marginBottom: '1rem', color: '#0f62fe' }}>2. Definición de Severidad</h4>
            <p className="cds--body-long-01">
              Fuerza al modelo a usar una escala estandarizada para que su salida sea predecible. Ej: <em>"Clasifica todo hallazgo como CRITICAL, HIGH, MEDIUM o LOW"</em>.
            </p>
          </Tile>
        </Column>
      </Grid>
      <Grid style={{ marginBottom: '2rem' }}>
        <Column sm={4} md={4} lg={6}>
          <Tile style={{ height: '100%' }}>
            <h4 className="cds--heading-expressive-02" style={{ marginBottom: '1rem', color: '#0f62fe' }}>3. Few-Shot Prompting</h4>
            <p className="cds--body-long-01">
              La IA aprende mejor con ejemplos. Incluye dentro de tu archivo markdown un bloque con un <strong>"Bad Code Example"</strong> y un <strong>"Good Code Example"</strong> para que entienda exactamente qué patrón detectar.
            </p>
          </Tile>
        </Column>
        <Column sm={4} md={4} lg={6}>
          <Tile style={{ height: '100%' }}>
            <h4 className="cds--heading-expressive-02" style={{ marginBottom: '1rem', color: '#0f62fe' }}>4. Formato de Salida</h4>
            <p className="cds--body-long-01">
              Exige que la respuesta venga en un formato procesable si planeas automatizar pasos posteriores. Ej: <em>"Responde únicamente con un bloque de código Markdown sin texto introductorio"</em>.
            </p>
          </Tile>
        </Column>
      </Grid>

      <InlineNotification
        kind="info"
        title="Reto de Creación:"
        subtitle="Crea tu propia skill en la carpeta .bob/skills/ y haz push a tu repositorio. ¡Mira cómo Bob adopta la nueva personalidad en tu siguiente Pull Request!"
        lowContrast
        hideCloseButton
      />
    </div>
  );
};

export default Skills;
