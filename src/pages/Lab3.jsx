import {
  Tile,
  OrderedList,
  ListItem,
  CodeSnippet,
  InlineNotification,
  Tag,
} from '@carbon/react';
import LabHeader from '../components/LabHeader';

const ACCENT = '#8a3ffc';

const StepTag = ({ children }) => (
  <Tag type="purple" style={{ marginBottom: '0.75rem' }}>{children}</Tag>
);

const Lab3 = () => {
  return (
    <div style={{ maxWidth: '880px', margin: '0 auto', paddingBottom: '4rem' }}>
      <LabHeader
        eyebrow="LABORATORIO 3"
        title="Arquitectura & Skills con Bob"
        duration="20 min"
        accent={ACCENT}
      >
        Vas a vivir en carne propia la diferencia entre usar a Bob “crudo” y usar a Bob
        guiado por una <strong>Skill</strong>. Primero le pides que analice y mejore la
        arquitectura de una app; luego creas tu propia Skill; y al final repites la tarea
        para ver cuánto mejora el resultado.
      </LabHeader>

      <Tile style={{ marginBottom: '2rem', backgroundColor: '#f6f2ff', borderLeft: `4px solid ${ACCENT}` }}>
        <h3 className="cds--heading-expressive-03" style={{ marginBottom: '0.75rem' }}>🎯 Objetivo</h3>
        <p className="cds--body-long-01" style={{ marginBottom: '0.75rem' }}>
          Entender qué son las Skills, por qué importan, y comprobar que un mismo prompt
          produce resultados <strong>mucho más consistentes y accionables</strong> cuando Bob
          sigue una Skill bien escrita.
        </p>
      </Tile>

      {/* ── PASO 0 · SETUP ──────────────────────────────────── */}
      <Tile style={{ marginBottom: '1.5rem' }}>
        <StepTag>Paso 0 · ≈ 1 min</StepTag>
        <h2 className="cds--heading-expressive-04" style={{ marginBottom: '0.75rem' }}>
          Prepara el entorno
        </h2>
        <p className="cds--body-long-01" style={{ marginBottom: '0.75rem' }}>
          Necesitas <code>bob</code> instalado (<a href="https://bob.ibm.com/download" target="_blank" rel="noreferrer">bob.ibm.com/download</a>, requiere Node 22+). Luego clona el proyecto de práctica de este laboratorio — una pequeña app con la arquitectura deliberadamente desordenada:
        </p>
        <CodeSnippet type="multi" style={{ marginBottom: 0 }}>
{`git clone git@bitbucket.org:bob-shell-integration/lab3-demo.git
cd lab3-demo`}
        </CodeSnippet>
      </Tile>

      {/* ── PARTE A ─────────────────────────────────────────── */}
      <Tile style={{ marginBottom: '1.5rem' }}>
        <StepTag>Parte A · ≈ 5 min</StepTag>
        <h2 className="cds--heading-expressive-04" style={{ marginBottom: '0.75rem' }}>
          1. Bob “crudo”: analiza la arquitectura
        </h2>
        <p className="cds--body-long-01" style={{ marginBottom: '1rem' }}>
          El proyecto es un único archivo monolítico (<code>app.py</code>) que mezcla HTTP, lógica
          de negocio y SQL. Pídele a Bob que lo analice <strong>sin ninguna Skill activa</strong>:
        </p>
        <CodeSnippet type="multi" style={{ marginBottom: '1rem' }}>
{`bob

> Analiza la arquitectura de este proyecto y propón una versión
  mejor estructurada. Explica los problemas que encuentres.`}
        </CodeSnippet>
        <p className="cds--body-long-01" style={{ marginBottom: 0 }}>
          Observa el resultado y guárdalo mentalmente. Suele ser correcto pero{' '}
          <strong>inconsistente</strong>: a veces da un diagrama, a veces no; a veces propone
          capas, a veces sólo renombra funciones; el formato cambia en cada corrida. Esa
          variabilidad es justo lo que una Skill elimina.
        </p>
      </Tile>

      {/* ── PARTE B ─────────────────────────────────────────── */}
      <Tile style={{ marginBottom: '1.5rem' }}>
        <StepTag>Parte B · ≈ 10 min</StepTag>
        <h2 className="cds--heading-expressive-04" style={{ marginBottom: '0.75rem' }}>
          2. Crea tu primera Skill
        </h2>

        <p className="cds--body-long-01" style={{ marginBottom: '1rem' }}>
          Las <strong>Skills</strong> son conjuntos de instrucciones reutilizables que enseñan a
          Bob a hacer una tarea de forma consistente y repetible — como recetas. Aportan:
        </p>
        <ul style={{ paddingLeft: '1.5rem', lineHeight: 1.8, marginBottom: '1rem' }} className="cds--list--unordered">
          <li><strong>Consistencia:</strong> el mismo enfoque y formato cada vez.</li>
          <li><strong>Reutilización:</strong> se definen una vez y sirven en chats y pipelines.</li>
          <li><strong>Especialización:</strong> experiencia de dominio (arquitectura, seguridad, docs…).</li>
          <li><strong>Colaboración:</strong> se versionan en el repo y se comparten en el equipo.</li>
        </ul>

        <h4 className="cds--heading-expressive-02" style={{ marginBottom: '0.5rem' }}>¿Cómo se estructuran?</h4>
        <p className="cds--body-long-01" style={{ marginBottom: '0.75rem' }}>
          Una carpeta dentro de <code>.bob/skills/</code> con un archivo <code>SKILL.md</code>.
          El archivo lleva <em>front matter</em> YAML (con <code>name</code> y{' '}
          <code>description</code>) seguido de las instrucciones. <em>¡Una Skill sin{' '}
          <code>description</code> es ignorada!</em>
        </p>
        <CodeSnippet type="multi" style={{ marginBottom: '1rem' }}>
{`.bob/
└── skills/
    └── architecture-review/
        └── SKILL.md`}
        </CodeSnippet>

        <h4 className="cds--heading-expressive-02" style={{ marginBottom: '0.5rem' }}>
          👉 Pídele a Bob que la cree por ti
        </h4>
        <p className="cds--body-long-01" style={{ marginBottom: '0.75rem' }}>
          Copia este prompt en Bob para que genere la Skill por ti:
        </p>
        <CodeSnippet type="multi" style={{ marginBottom: '1rem' }}>
{`Crea una nueva Skill avanzada para revisión de arquitectura. Reglas estrictas:

1. Crea la carpeta .bob/skills/architecture-review/ con un archivo SKILL.md.
2. El SKILL.md debe empezar con este front matter YAML exacto (para garantizar la auto-activación):
   ---
   name: architecture-review
   description: Use this skill when the user asks to review, refactor, modularize, analyze circular imports, or reorganize the architecture of a multi-file software project.
   ---
3. Instrucciones de ejecución para Bob (escríbelas debajo del YAML):
   (a) Mapeo General: Identificar y listar el propósito de cada archivo en el workspace.
   (b) Análisis de Acoplamiento y Dependencias: Detectar explícitamente dependencias circulares entre módulos, responsabilidades mezcladas y duplicidad de utilidades o conexiones a BD.
   (c) Tabla de Hallazgos: Tabla de 4 columnas (Archivo y Línea | Problema Detectado | Severidad (Crítica/Alta/Media) | Impacto).
   (d) Arquitectura Objetivo: Proponer un diseño limpio en capas (Separación de Conceptos) y renderizarlo usando un diagrama Mermaid de flujo/capas.
   (e) Plan de Migración: Listar pasos secuenciales libres de dependencias para migrar el código desordenado al diseño objetivo sin romper funcionalidad.
   (f) Cierre: Resumen ejecutivo de 3 viñetas concisas.
4. Restricción de salida: Evita introducciones conversacionales largas. Ve directo al formato estructurado.`}
        </CodeSnippet>

        <InlineNotification
          kind="info"
          lowContrast
          hideCloseButton
          title="¿Sin tiempo o falló tu Bob?"
          subtitle="El repositorio ya incluye una versión modelo en .bob/skills/architecture-review/SKILL.md. Úsala como respaldo o para comparar con la que generaste."
          style={{ marginBottom: 0 }}
        />
      </Tile>

      {/* ── PARTE C ─────────────────────────────────────────── */}
      <Tile style={{ marginBottom: '1.5rem' }}>
        <StepTag>Parte C · ≈ 5 min</StepTag>
        <h2 className="cds--heading-expressive-04" style={{ marginBottom: '0.75rem' }}>
          3. Re-ejecuta la tarea con la Skill y compara
        </h2>
        <p className="cds--body-long-01" style={{ marginBottom: '1rem' }}>
          Ahora repite el análisis del paso 1, pero pidiéndole a Bob que use tu Skill:
        </p>
        <CodeSnippet type="multi" style={{ marginBottom: '1rem' }}>
{`bob

> Usa la skill architecture-review para analizar este proyecto.`}
        </CodeSnippet>
        <OrderedList style={{ marginBottom: '1rem' }}>
          <ListItem>El resultado ahora trae <strong>siempre</strong> la misma estructura: tabla de problemas, diagrama Mermaid y plan por pasos.</ListItem>
          <ListItem>Compáralo con la salida “cruda” de la Parte A: misma IA, prompt casi idéntico, resultado drásticamente más útil y accionable.</ListItem>
          <ListItem><strong>Bonus:</strong> crea una segunda Skill <code>documentation</code> (mismo método) y pídele a Bob que documente la arquitectura propuesta. Tienes el modelo en <code>.bob/skills/documentation/SKILL.md</code>.</ListItem>
        </OrderedList>
        <p className="cds--body-long-01" style={{ marginBottom: 0 }}>
          💡 <strong>La idea clave:</strong> una Skill no le da “más inteligencia” a Bob — le da{' '}
          <em>criterio y formato</em>. Ese mismo principio es el que, en el Lab 4, hace que Bob
          revise PRs y corrija issues siguiendo los estándares de tu equipo.
        </p>
      </Tile>

      <InlineNotification
        kind="success"
        title="¡Listo el Lab 3!"
        subtitle="Creaste una Skill y comprobaste el salto de consistencia. En el Lab 4 esas mismas Skills se cargan automáticamente dentro de Bitbucket Pipelines."
        lowContrast
        hideCloseButton
      />
    </div>
  );
};

export default Lab3;
