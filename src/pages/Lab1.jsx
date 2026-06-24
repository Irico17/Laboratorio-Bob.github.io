import {
  Tile,
  CodeSnippet,
  InlineNotification,
  Tag,
  OrderedList,
  ListItem,
} from '@carbon/react';
import LabHeader from '../components/LabHeader';

const ACCENT = '#0043ce'; // Dark Blue for Lab 1

const StepTag = ({ children }) => (
  <Tag type="blue" style={{ marginBottom: '0.75rem' }}>{children}</Tag>
);

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: '1rem',
  marginBottom: '1.5rem',
};

const thStyle = {
  backgroundColor: '#f4f4f4',
  borderBottom: '2px solid #e0e0e0',
  padding: '0.5rem 0.75rem',
  textAlign: 'left',
  fontWeight: '600',
  fontSize: '0.875rem',
};

const tdStyle = {
  borderBottom: '1px solid #e0e0e0',
  padding: '0.5rem 0.75rem',
  fontSize: '0.875rem',
};

const Lab1 = () => {
  return (
    <div style={{ maxWidth: '880px', margin: '0 auto', paddingBottom: '4rem' }}>
      <LabHeader
        eyebrow="LABORATORIO 1"
        title="Documentación de Código"
        duration="20 min"
        accent={ACCENT}
      >
        En este laboratorio usarás Bob para generar documentación técnica de forma automática sobre una aplicación web existente. Aprenderás a usar los diferentes modos de Bob para explorar código desconocido, entender su arquitectura y producir documentación clara y consistente sin tener que escribirla manualmente.
      </LabHeader>

      <Tile style={{ marginBottom: '2rem', backgroundColor: '#edf5ff', borderLeft: `4px solid ${ACCENT}` }}>
        <h3 className="cds--heading-expressive-03" style={{ marginBottom: '0.75rem' }}>🔍 Diferenciador de Bob: Generación Automática de Documentación</h3>
        <p className="cds--body-long-01" style={{ marginBottom: '0.75rem' }}>
          Bob puede leer código en cualquier lenguaje, entender su propósito y generar documentación estructurada en segundos. Esto reduce drásticamente el tiempo dedicado a documentar y garantiza consistencia entre todo el equipo.
        </p>
      </Tile>

      <Tile style={{ marginBottom: '1.5rem' }}>
        <h2 className="cds--heading-expressive-04" style={{ marginBottom: '0.75rem' }}>
          Lo que vas a documentar
        </h2>
        <p className="cds--body-long-01" style={{ marginBottom: '1rem' }}>
          Una aplicación de tareas (todo app) con la siguiente estructura técnica:
        </p>
        <ul style={{ paddingLeft: '1.5rem', lineHeight: 1.8, marginBottom: '1.5rem' }} className="cds--list--unordered">
          <li><strong>Backend en Python/Flask</strong> con endpoints REST.</li>
          <li><strong>Frontend en HTML/CSS/JavaScript</strong> vainilla.</li>
          <li><strong>Base de datos</strong> SQLite/PostgreSQL con SQLAlchemy.</li>
        </ul>

        <h2 className="cds--heading-expressive-04" style={{ marginBottom: '0.75rem' }}>
          Objetivos de Aprendizaje
        </h2>
        <ul style={{ paddingLeft: '1.5rem', lineHeight: 1.8, marginBottom: '1.5rem' }} className="cds--list--unordered">
          <li>✅ Usar el modo Ask para entender código desconocido rápidamente.</li>
          <li>✅ Usar el modo Plan para estructurar la documentación.</li>
          <li>✅ Generar documentación detallada de funciones, endpoints y arquitectura con Bob.</li>
          <li>✅ Crear un README profesional utilizando IA como copiloto.</li>
        </ul>

        <h2 className="cds--heading-expressive-04" style={{ marginBottom: '0.75rem' }}>
          Estructura del Laboratorio
        </h2>
        <CodeSnippet type="multi" style={{ marginBottom: 0 }}>
{`Lab 1 - Documentación de Código
├── Parte 1: Exploración y Comprensión del Código
│   ├── Paso 1.1 – Explorar la arquitectura general
│   ├── Paso 1.2 – Entender el backend
│   └── Paso 1.3 – Entender el frontend
└── Parte 2: Generación de Documentación
    ├── Paso 2.1 – Documentar funciones del backend
    ├── Paso 2.2 – Documentar el frontend
    └── Paso 2.3 – Generar un README completo`}
        </CodeSnippet>
      </Tile>

      {/* ── PARTE 1 ─────────────────────────────────────────── */}
      <Tile style={{ marginBottom: '1.5rem' }}>
        <StepTag>Parte 1 · ≈ 10 min</StepTag>
        <h2 className="cds--heading-expressive-04" style={{ marginBottom: '0.75rem' }}>
          Parte 1: Exploración y Comprensión del Código
        </h2>
        <p className="cds--body-long-01" style={{ marginBottom: '1rem', fontWeight: '600' }}>
          Contexto
        </p>
        <p className="cds--body-long-01" style={{ marginBottom: '1.5rem' }}>
          Antes de poder documentar código, necesitas entenderlo. Bob en modo <strong>Ask</strong> actúa como un experto que puede explicarte cualquier parte de la base de código al instante.
          Abre los archivos en <code>app-vulnerable/</code> — esta es la aplicación que vas a documentar.
        </p>
        
        {/* Paso 1.1 */}
        <h3 className="cds--heading-expressive-03" style={{ marginBottom: '0.5rem', marginTop: '1.5rem' }}>
          Paso 1.1: Explorar la Arquitectura General
        </h3>
        <p className="cds--body-long-01" style={{ marginBottom: '0.75rem' }}>
          Abre Bob y cambia al <strong>modo Ask</strong> (ícono ❓). Ejecuta el siguiente prompt:
        </p>
        <CodeSnippet type="multi" style={{ marginBottom: '1rem' }}>
{`Analiza los archivos en app-vulnerable/ y explícame:
1. ¿Qué tipo de aplicación es esta?
2. ¿Cuál es la arquitectura general (backend, frontend, base de datos)?
3. ¿Cuáles son los archivos principales y qué rol cumple cada uno?
4. ¿Qué tecnologías y librerías se usan?`}
        </CodeSnippet>
        
        <h4 className="cds--heading-expressive-01" style={{ marginBottom: '0.5rem' }}>🔍 Qué esperar de Bob:</h4>
        <p className="cds--body-long-01" style={{ marginBottom: '1rem' }}>
          Bob identificará correctamente:
        </p>
        <ul style={{ paddingLeft: '1.5rem', lineHeight: 1.8, marginBottom: '1rem' }} className="cds--list--unordered">
          <li>Una aplicación web de tareas (Todo App).</li>
          <li>Un backend de Flask con SQLAlchemy y una API REST.</li>
          <li>Un frontend con HTML, CSS y JavaScript vainilla.</li>
          <li>Una base de datos relacional con el modelo de datos <code>Todo</code>.</li>
        </ul>

        <InlineNotification
          kind="info"
          lowContrast
          hideCloseButton
          title="💡 Aprendizaje clave"
          subtitle="En segundos Bob puede orientarte en un proyecto desconocido, ahorrando tiempo de exploración manual."
          style={{ marginBottom: '1.5rem' }}
        />

        {/* Paso 1.2 */}
        <h3 className="cds--heading-expressive-03" style={{ marginBottom: '0.5rem', marginTop: '1.5rem' }}>
          Paso 1.2: Entender el Backend en Profundidad
        </h3>
        <p className="cds--body-long-01" style={{ marginBottom: '0.75rem' }}>
          Envía este prompt en modo <strong>Ask</strong> para analizar la lógica de los endpoints:
        </p>
        <CodeSnippet type="multi" style={{ marginBottom: '1rem' }}>
{`Analizando app-vulnerable/backend/app.py, explícame:
1. ¿Cuáles son todos los endpoints de la API y qué hace cada uno?
2. ¿Qué métodos HTTP acepta cada endpoint?
3. ¿Qué datos recibe y qué datos retorna cada endpoint?
4. ¿Existe algún patrón de manejo de errores?`}
        </CodeSnippet>

        <h4 className="cds--heading-expressive-01" style={{ marginBottom: '0.5rem' }}>🔍 Qué esperar de Bob:</h4>
        <p className="cds--body-long-01" style={{ marginBottom: '0.5rem' }}>
          Debe enumerar y explicar el comportamiento de los siguientes endpoints:
        </p>
        
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Endpoint</th>
              <th style={thStyle}>Método</th>
              <th style={thStyle}>Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}><code>/api/todos</code></td>
              <td style={tdStyle}>GET</td>
              <td style={tdStyle}>Obtener todas las tareas</td>
            </tr>
            <tr>
              <td style={tdStyle}><code>/api/todos</code></td>
              <td style={tdStyle}>POST</td>
              <td style={tdStyle}>Crear una nueva tarea</td>
            </tr>
            <tr>
              <td style={tdStyle}><code>/api/todos/&lt;id&gt;</code></td>
              <td style={tdStyle}>GET</td>
              <td style={tdStyle}>Obtener una tarea específica</td>
            </tr>
            <tr>
              <td style={tdStyle}><code>/api/todos/&lt;id&gt;</code></td>
              <td style={tdStyle}>PUT</td>
              <td style={tdStyle}>Actualizar una tarea</td>
            </tr>
            <tr>
              <td style={tdStyle}><code>/api/todos/&lt;id&gt;</code></td>
              <td style={tdStyle}>DELETE</td>
              <td style={tdStyle}>Eliminar una tarea</td>
            </tr>
            <tr>
              <td style={tdStyle}><code>/api/todos/search</code></td>
              <td style={tdStyle}>GET</td>
              <td style={tdStyle}>Buscar tareas por título</td>
            </tr>
            <tr>
              <td style={tdStyle}><code>/api/health</code></td>
              <td style={tdStyle}>GET</td>
              <td style={tdStyle}>Estado de la aplicación</td>
            </tr>
          </tbody>
        </table>

        {/* Paso 1.3 */}
        <h3 className="cds--heading-expressive-03" style={{ marginBottom: '0.5rem', marginTop: '1.5rem' }}>
          Paso 1.3: Entender el Frontend
        </h3>
        <p className="cds--body-long-01" style={{ marginBottom: '0.75rem' }}>
          Envía el siguiente prompt para que Bob analice el comportamiento del cliente JavaScript:
        </p>
        <CodeSnippet type="multi" style={{ marginBottom: '1rem' }}>
{`Analiza app-vulnerable/frontend/app.js y explícame:
1. ¿Cómo está organizado el código JavaScript?
2. ¿Cuáles son las funciones principales y qué hace cada una?
3. ¿Cómo se comunica el frontend con el backend?
4. ¿Cómo se maneja el estado de la aplicación?`}
        </CodeSnippet>

        <h4 className="cds--heading-expressive-01" style={{ marginBottom: '0.5rem' }}>🔍 Qué esperar de Bob:</h4>
        <p className="cds--body-long-01" style={{ marginBottom: '0.5rem' }}>
          Bob identificará la organización e identificará funciones clave del DOM y de peticiones fetch:
        </p>
        <ul style={{ paddingLeft: '1.5rem', lineHeight: 1.8, marginBottom: '1rem' }} className="cds--list--unordered">
          <li><code>fetchTodos()</code> — obtiene la lista de tareas del API.</li>
          <li><code>createTodo()</code> — envía una nueva tarea al backend.</li>
          <li><code>displayTodos()</code> — renderiza la lista en el DOM.</li>
          <li><code>toggleTodo()</code> — cambia el estado completado/pendiente.</li>
          <li><code>deleteTodo()</code> — elimina una tarea.</li>
        </ul>
        <p className="cds--body-long-01" style={{ color: '#525252', fontStyle: 'italic', marginTop: '0.5rem' }}>
          ⚠️ Nota: Bob también puede señalar aspectos de la implementación que merecen atención (vulnerabilidades). Eso lo exploraremos en el Lab 2.
        </p>
      </Tile>

      {/* ── PARTE 2 ─────────────────────────────────────────── */}
      <Tile style={{ marginBottom: '1.5rem' }}>
        <StepTag>Parte 2 · ≈ 10 min</StepTag>
        <h2 className="cds--heading-expressive-04" style={{ marginBottom: '0.75rem' }}>
          Parte 2: Generación de Documentación
        </h2>
        <p className="cds--body-long-01" style={{ marginBottom: '1rem', fontWeight: '600' }}>
          Contexto
        </p>
        <p className="cds--body-long-01" style={{ marginBottom: '1.5rem' }}>
          Ahora que entiendes el código, Bob en modo <strong>Plan</strong> te ayudará a estructurar y generar documentación profesional de forma sistemática.
          Cambia al <strong>modo Plan</strong> (ícono 🎯).
        </p>

        {/* Paso 2.1 */}
        <h3 className="cds--heading-expressive-03" style={{ marginBottom: '0.5rem' }}>
          Paso 2.1: Documentar los Endpoints del Backend
        </h3>
        <p className="cds--body-long-01" style={{ marginBottom: '0.75rem' }}>
          Utiliza este prompt para generar la referencia de API técnica detallada y la especificación OpenAPI:
        </p>
        <CodeSnippet type="multi" style={{ marginBottom: '1rem' }}>
{`Genera documentación técnica completa de la API REST en
app-vulnerable/backend/app.py.

Para cada endpoint incluye:
- Ruta y método HTTP
- Descripción del propósito
- Parámetros de entrada (con tipos y si son requeridos u opcionales)
- Formato de respuesta exitosa (con ejemplo JSON)
- Posibles errores y sus códigos HTTP
- Ejemplo de uso con curl
- Genera la especificación OpenAPI definitiva para las APIs REST`}
        </CodeSnippet>

        <h4 className="cds--heading-expressive-01" style={{ marginBottom: '0.5rem' }}>🔍 Resultado esperado de Bob:</h4>
        <p className="cds--body-long-01" style={{ marginBottom: '0.5rem' }}>
          Bob debe generar un bloque estructurado de documentación técnica y OpenAPI similar al siguiente fragmento:
        </p>
        <CodeSnippet type="multi" style={{ marginBottom: '1.5rem' }}>
{`## API Reference

### GET /api/todos
Retorna la lista completa de tareas ordenadas por fecha de creación.

**Respuesta exitosa (200):**
[
  {
    "id": 1,
    "title": "Mi primera tarea",
    "description": "Descripción opcional",
    "completed": false,
    "created_at": "2024-01-15T10:30:00"
  }
]

**Ejemplo:**
curl http://localhost:5000/api/todos`}
        </CodeSnippet>

        {/* Paso 2.2 */}
        <h3 className="cds--heading-expressive-03" style={{ marginBottom: '0.5rem', marginTop: '1.5rem' }}>
          Paso 2.2: Documentar el Modelo de Datos
        </h3>
        <p className="cds--body-long-01" style={{ marginBottom: '0.75rem' }}>
          Genera explicaciones de la estructura de la base de datos con el siguiente prompt:
        </p>
        <CodeSnippet type="multi" style={{ marginBottom: '1.5rem' }}>
{`Analiza app-vulnerable/backend/models.py and genera:
1. Documentación del modelo de datos Todo con descripción de cada campo
2. Un diagrama de entidad simple en texto (ASCII)
3. Ejemplos de datos válidos para cada campo`}
        </CodeSnippet>

        {/* Paso 2.3 */}
        <h3 className="cds--heading-expressive-03" style={{ marginBottom: '0.5rem', marginTop: '1.5rem' }}>
          Paso 2.3: Generar un README Completo
        </h3>
        <p className="cds--body-long-01" style={{ marginBottom: '0.75rem' }}>
          Este es el paso principal del laboratorio. Bob generará un README profesional listo para producción:
        </p>
        <CodeSnippet type="multi" style={{ marginBottom: '1.5rem' }}>
{`Basándote en el código completo de app-vulnerable/,
genera un README.md profesional y completo en español que incluya:

1. Título y descripción del proyecto
2. Badge de tecnologías usadas (Flask, Python, JavaScript)
3. Tabla de contenidos
4. Requisitos previos (Python, pip)
5. Instrucciones de instalación paso a paso
6. Cómo ejecutar la aplicación
7. Documentación completa de la API (todos los endpoints)
8. Estructura del proyecto (árbol de archivos)
9. Modelo de datos
10. Cómo contribuir`}
        </CodeSnippet>

        <InlineNotification
          kind="info"
          lowContrast
          hideCloseButton
          title="💡 Aprendizaje clave"
          subtitle="Con un solo prompt bien construido, Bob puede generar documentación que tomaría horas escribir manualmente, y además es consistente con el código real."
          style={{ marginBottom: 0 }}
        />
      </Tile>

      {/* ── CIERRE ─────────────────────────────────────────── */}
      <Tile style={{ marginBottom: '1.5rem' }}>
        <h2 className="cds--heading-expressive-04" style={{ marginBottom: '0.75rem' }}>
          ¡Felicitaciones! 🎉
        </h2>
        <p className="cds--body-long-01" style={{ marginBottom: '1rem' }}>
          Completaste con éxito el Laboratorio 1. A lo largo de esta sesión aprendiste a:
        </p>
        <OrderedList style={{ marginBottom: '1.5rem' }}>
          <ListItem>Usar el modo <strong>Ask</strong> para explorar y comprender una base de código desconocida en minutos.</ListItem>
          <ListItem>Usar el modo <strong>Plan</strong> para estructurar y redactar contenido técnico complejo.</ListItem>
          <ListItem>Generar especificaciones técnicas y documentación de APIs con ejemplos reales.</ListItem>
          <ListItem>Consolidar un archivo <code>README.md</code> profesional con Bob como tu copiloto de escritura técnica.</ListItem>
        </OrderedList>

        <h4 className="cds--heading-expressive-02" style={{ marginBottom: '0.5rem' }}>Reflexión Final:</h4>
        <p className="cds--body-long-01" style={{ marginBottom: 0 }}>
          Compara el tiempo que tomó con Bob versus el tiempo que hubiera tomado escribir toda esa documentación manualmente. La diferencia es típicamente de <strong>10x a 20x más rápido</strong>, con una consistencia y fidelidad al código real excepcionales.
        </p>
      </Tile>

      <InlineNotification
        kind="success"
        title="Siguiente paso: Lab 2"
        subtitle="En el Lab 2 usarás Bob para ir más allá de la lectura: detectarás problemas reales de seguridad y calidad en este mismo código y los corregirás con Bob como copiloto activo."
        lowContrast
        hideCloseButton
      />
    </div>
  );
};

export default Lab1;
