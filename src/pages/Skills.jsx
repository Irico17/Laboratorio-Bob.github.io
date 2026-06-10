import React from 'react';
import { Tile, OrderedList, ListItem, CodeSnippet } from '@carbon/react';

const Skills = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', paddingBottom: '4rem' }}>
      <h1 className="cds--heading-expressive-05" style={{ marginBottom: '1.5rem', marginTop: '2rem' }}>
        Skills (Reglas de Negocio)
      </h1>
      
      <p className="cds--body-long-01" style={{ marginBottom: '2rem' }}>
        Los <strong>Skills</strong> son conjuntos de instrucciones reutilizables que enseñan a Bob nuevos flujos de trabajo y tareas especializadas. Piense en ellos como recetas que Bob sigue para completar tipos específicos de trabajo de manera consistente y repetible.
      </p>

      <Tile style={{ marginBottom: '2rem' }}>
        <h3 className="cds--heading-expressive-03" style={{ marginBottom: '1rem' }}>¿Por qué usar Skills?</h3>
        <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }} className="cds--list--unordered">
          <li><strong>Reutilización:</strong> Defina flujos de trabajo una vez y úselos en múltiples conversaciones o pipelines.</li>
          <li><strong>Consistencia:</strong> Asegure que Bob siga el mismo enfoque cada vez para tareas específicas.</li>
          <li><strong>Especialización:</strong> Cree experiencia específica del dominio para revisiones de código, pruebas, documentación y más.</li>
          <li><strong>Colaboración en equipo:</strong> Comparta flujos de trabajo estandarizados en su equipo a través del control de versiones.</li>
          <li><strong>Flexibilidad:</strong> Incluya archivos de apoyo como listas de verificación, plantillas y materiales de referencia.</li>
        </ul>
      </Tile>

      <h2 className="cds--heading-expressive-04" style={{ marginBottom: '1rem', marginTop: '3rem' }}>¿Cómo funcionan los Skills?</h2>
      <p className="cds--body-long-01" style={{ marginBottom: '1rem' }}>
        Cuando activa un Skill, Bob recibe las instrucciones del Skill y obtiene acceso a cualquier archivo de apoyo en el directorio del Skill. Bob luego sigue estas instrucciones para completar su tarea según el flujo de trabajo definido.
      </p>
      <p className="cds--body-long-01" style={{ marginBottom: '2rem' }}>
        Bob determina automáticamente cuándo activar un Skill según su solicitud y la descripción del Skill (en pipelines, podemos forzar su uso inyectando el Skill en el Prompt).
      </p>

      <Tile style={{ marginBottom: '2rem' }}>
        <h3 className="cds--heading-expressive-03" style={{ marginBottom: '1rem' }}>Crear un Skill desde Cero</h3>
        
        <h4 className="cds--heading-expressive-02" style={{ marginBottom: '0.5rem', marginTop: '1.5rem' }}>1. Configuración Básica</h4>
        <p className="cds--body-long-01" style={{ marginBottom: '1rem' }}>
          Cree una carpeta dentro de <code>.bob/skills/</code> en la raíz de su proyecto. Agregue un archivo llamado <code>SKILL.md</code> dentro de esa carpeta. La estructura ideal de carpetas se ve así:
        </p>
        <CodeSnippet type="multi" style={{ marginBottom: '1rem' }}>
{`.bob/
└── skills/
    ├── code-review/
    │   ├── SKILL.md
    │   └── secure-coding-guidelines.md
    └── api-docs/
        ├── SKILL.md
        └── api-template.md`}
        </CodeSnippet>
        
        <h4 className="cds--heading-expressive-02" style={{ marginBottom: '0.5rem', marginTop: '1.5rem' }}>2. Formato del archivo SKILL.md</h4>
        <p className="cds--body-long-01" style={{ marginBottom: '1rem' }}>
          El archivo usa <em>front matter</em> YAML en la parte superior, seguido de las instrucciones:
        </p>
        <CodeSnippet type="multi" style={{ marginBottom: '1rem' }}>
{`---
name: code-review
description: Revisar código en busca de errores, problemas de seguridad y mejores prácticas
---

Al revisar código, verifique:
- Vulnerabilidades de seguridad
- Problemas de rendimiento
- Manejo de errores faltante en límites de API
- Importaciones no utilizadas y código muerto

Proporcione un resumen con niveles de gravedad para cada hallazgo.`}
        </CodeSnippet>
        <p className="cds--body-long-01" style={{ marginBottom: '1rem' }}>
          <strong>Campos requeridos:</strong>
        </p>
        <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', marginBottom: '1rem' }} className="cds--list--unordered">
          <li><code>name</code>: El nombre de visualización del Skill.</li>
          <li><code>description</code>: Un resumen claro que ayuda a Bob a decidir cuándo activar este Skill. <em>¡Los Skills sin descripciones son ignorados!</em></li>
        </ul>
        <p className="cds--body-long-01">
          Todo lo que está debajo del delimitador <code>---</code> se convierte en las instrucciones que Bob recibe.
        </p>

        <h4 className="cds--heading-expressive-02" style={{ marginBottom: '0.5rem', marginTop: '1.5rem' }}>3. Archivos de Apoyo</h4>
        <p className="cds--body-long-01" style={{ marginBottom: '1rem' }}>
          Puede incluir archivos adicionales junto a <code>SKILL.md</code>. Bob puede leer estos archivos (por ejemplo: listas de verificación, plantillas, guías de estilo, scripts) automáticamente una vez que se activa el Skill.
        </p>

        <h4 className="cds--heading-expressive-02" style={{ marginBottom: '0.5rem', marginTop: '1.5rem' }}>4. Uso en el Workflow</h4>
        <p className="cds--body-long-01" style={{ marginBottom: '1rem' }}>
          Para obligar a tu workflow a usar el Skill, simplemente menciónalo en el prompt de GitHub Actions:
        </p>
        <CodeSnippet type="single" style={{ marginBottom: '1rem' }}>
          bob --prompt "Por favor usa el skill de 'code-review' para analizar este archivo"
        </CodeSnippet>
      </Tile>

      <h2 className="cds--heading-expressive-04" style={{ marginBottom: '1rem', marginTop: '3rem' }}>Escribir Skills Efectivos</h2>
      
      <Tile style={{ marginBottom: '2rem' }}>
        <h4 className="cds--heading-expressive-02" style={{ marginBottom: '0.5rem' }}>Descripciones Claras</h4>
        <p className="cds--body-long-01" style={{ marginBottom: '1rem' }}>
          Bob se basa en las descripciones para determinar la relevancia del Skill.
        </p>
        <p className="cds--body-long-01">✅ <strong>Bueno:</strong> "Revisar código en busca de errores, problemas de seguridad y mejores prácticas"</p>
        <p className="cds--body-long-01" style={{ marginBottom: '1rem' }}>❌ <strong>Evitar:</strong> "Skill de revisión de código"</p>

        <h4 className="cds--heading-expressive-02" style={{ marginBottom: '0.5rem', marginTop: '1.5rem' }}>Instrucciones Enfocadas</h4>
        <p className="cds--body-long-01" style={{ marginBottom: '1rem' }}>
          Mantenga el archivo principal enfocado en el flujo de trabajo central. Mueva material detallado a archivos de apoyo. Ejemplo:
        </p>
        <CodeSnippet type="multi" style={{ marginBottom: '1rem' }}>
{`---
name: api-documentation
description: Generar documentación de API siguiendo estándares OpenAPI
---
Genere documentación de API.
Siga la guía de estilo en 'api-style-guide.md' y use la plantilla en 'api-template.md'.`}
        </CodeSnippet>

        <h4 className="cds--heading-expressive-02" style={{ marginBottom: '0.5rem', marginTop: '1.5rem' }}>Pasos Accionables</h4>
        <p className="cds--body-long-01">
          Estructure las instrucciones como pasos claros y accionables (1. Revise, 2. Cree un plan, 3. Implemente, 4. Verifique).
        </p>
      </Tile>

    </div>
  );
};

export default Skills;
