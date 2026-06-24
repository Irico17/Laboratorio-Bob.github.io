import {
  Tile,
  CodeSnippet,
  InlineNotification,
  Tag,
  OrderedList,
  ListItem,
} from '@carbon/react';
import LabHeader from '../components/LabHeader';

const ACCENT = '#da1e28'; // Red for Lab 2

const StepTag = ({ children }) => (
  <Tag type="red" style={{ marginBottom: '0.75rem' }}>{children}</Tag>
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

const Lab2 = () => {
  return (
    <div style={{ maxWidth: '880px', margin: '0 auto', paddingBottom: '4rem' }}>
      <LabHeader
        eyebrow="LABORATORIO 2"
        title="Desarrollo y Mejora de Código"
        duration="20 min"
        accent={ACCENT}
      >
        En este laboratorio usarás Bob como copiloto activo para acelerar la escritura, refactorización y mejora de código. Partirás de la misma aplicación del Lab 1, identificarás vulnerabilidades de seguridad reales y las corregirás usando Bob en modo <strong>Plan</strong> y <strong>Agent (Code)</strong>.
      </LabHeader>

      <Tile style={{ marginBottom: '2rem', backgroundColor: '#fff1f1', borderLeft: `4px solid ${ACCENT}` }}>
        <h3 className="cds--heading-expressive-03" style={{ marginBottom: '0.75rem' }}>🚀 Diferenciador de Bob: IA como Copiloto Activo</h3>
        <p className="cds--body-long-01" style={{ marginBottom: '0.75rem' }}>
          Bob no solo explica código — lo transforma. Con Bob en modo Agent puedes refactorizar, corregir errores, agregar validaciones y mejorar la seguridad de tu código en segundos, manteniendo el contexto completo del proyecto.
        </p>
      </Tile>

      <Tile style={{ marginBottom: '1.5rem' }}>
        <h2 className="cds--heading-expressive-04" style={{ marginBottom: '0.75rem' }}>
          Lo que vas a mejorar
        </h2>
        <p className="cds--body-long-01" style={{ marginBottom: '1rem' }}>
          La misma aplicación de tareas del Lab 1 (<code>app-vulnerable/</code>), que contiene vulnerabilidades intencionales de diversos tipos:
        </p>
        <ul style={{ paddingLeft: '1.5rem', lineHeight: 1.8, marginBottom: '1.5rem' }} className="cds--list--unordered">
          <li><strong>Inyección SQL</strong> en consultas a la base de datos.</li>
          <li><strong>XSS (Cross-Site Scripting)</strong> en el frontend.</li>
          <li><strong>Secretos hardcodeados</strong> en el código fuente.</li>
          <li><strong>Falta de validación</strong> de datos de entrada.</li>
          <li><strong>Manejo inseguro de errores</strong>.</li>
        </ul>

        <h2 className="cds--heading-expressive-04" style={{ marginBottom: '0.75rem' }}>
          Objetivos de Aprendizaje
        </h2>
        <ul style={{ paddingLeft: '1.5rem', lineHeight: 1.8, marginBottom: '1.5rem' }} className="cds--list--unordered">
          <li>✅ Usar el modo Plan para identificar problemas y planificar soluciones de seguridad.</li>
          <li>✅ Usar el modo Agent para implementar correcciones reales de código en tu proyecto.</li>
          <li>✅ Reconocer e implementar soluciones contra la inyección de SQL (SQL Injection).</li>
          <li>✅ Identificar y mitigar la inyección de script (XSS) en la interfaz gráfica.</li>
          <li>✅ Mover credenciales críticas y secretos a variables de entorno.</li>
          <li>✅ Enriquecer las validaciones de entrada utilizando la IA como copiloto.</li>
        </ul>

        <h2 className="cds--heading-expressive-04" style={{ marginBottom: '0.75rem' }}>
          Estructura del Laboratorio
        </h2>
        <CodeSnippet type="multi" style={{ marginBottom: 0 }}>
{`Lab 2 - Desarrollo y Mejora de Código
├── Parte 1: Análisis y Planeación de Mejoras
│   ├── Paso 1.1 – Identificar vulnerabilidades con Bob
│   ├── Paso 1.2 – Crear plan de correcciones
│   └── Paso 1.3 – Priorizar por severidad
└── Parte 2: Implementación de Mejoras con Bob
    ├── Paso 2.1 – Corregir SQL Injection
    ├── Paso 2.2 – Corregir XSS en el frontend
    └── Paso 2.3 – Mover secretos a variables de entorno`}
        </CodeSnippet>
      </Tile>

      {/* ── PARTE 1 ─────────────────────────────────────────── */}
      <Tile style={{ marginBottom: '1.5rem' }}>
        <StepTag>Parte 1 · ≈ 10 min</StepTag>
        <h2 className="cds--heading-expressive-04" style={{ marginBottom: '0.75rem' }}>
          Parte 1: Análisis y Planeación de Mejoras
        </h2>
        <p className="cds--body-long-01" style={{ marginBottom: '1rem', fontWeight: '600' }}>
          Contexto
        </p>
        <p className="cds--body-long-01" style={{ marginBottom: '1.5rem' }}>
          Antes de escribir una sola línea de código, usarás Bob en modo <strong>Plan</strong> (ícono 🎯) para realizar un análisis sistemático de las brechas de seguridad. Un buen plan previo evita errores durante la fase de ejecución.
        </p>

        {/* Paso 1.1 */}
        <h3 className="cds--heading-expressive-03" style={{ marginBottom: '0.5rem', marginTop: '1.5rem' }}>
          Paso 1.1: Solicitar Análisis de Seguridad
        </h3>
        <p className="cds--body-long-01" style={{ marginBottom: '0.75rem' }}>
          Abre Bob en modo <strong>Plan</strong> y ejecuta el siguiente comando:
        </p>
        <CodeSnippet type="multi" style={{ marginBottom: '1rem' }}>
{`Analiza el código en app-vulnerable/ en busca de
vulnerabilidades de seguridad y problemas de calidad de código.

Crea un reporte estructurado que incluya:
1. Lista de todos los problemas encontrados
2. Nivel de severidad: Crítico / Alto / Medio / Bajo
3. Impacto potencial de cada vulnerabilidad
4. Archivo y línea donde se encuentra cada problema
5. Recomendación de solución para cada uno`}
        </CodeSnippet>

        <h4 className="cds--heading-expressive-01" style={{ marginBottom: '0.5rem' }}>🔍 Resultado esperado de Bob:</h4>
        <p className="cds--body-long-01" style={{ marginBottom: '0.5rem' }}>
          Bob debería generar un reporte de análisis de seguridad con un formato estructurado como este:
        </p>
        <CodeSnippet type="multi" style={{ marginBottom: '1.5rem' }}>
{`REPORTE DE ANÁLISIS DE SEGURIDAD
=================================

CRÍTICO:
1. Inyección SQL — app.py, función search_todos()
   Impacto: Acceso no autorizado a toda la base de datos
   Solución: Usar consultas parametrizadas con SQLAlchemy

2. Secretos hardcodeados — config.py, líneas 12-35
   Impacto: Credenciales expuestas en control de versiones
   Solución: Mover a variables de entorno con python-dotenv

ALTO:
3. XSS mediante innerHTML — app.js, función createTodoHTML()
   Impacto: Ejecución de scripts maliciosos en el navegador
   Solución: Usar textContent en lugar de innerHTML

MEDIO:
4. Sin validación de entrada — app.py, create_todo() y update_todo()
   Impacto: Datos inválidos o maliciosos en la base de datos
   Solución: Agregar validación de longitud y formato`}
        </CodeSnippet>

        {/* Paso 1.2 */}
        <h3 className="cds--heading-expressive-03" style={{ marginBottom: '0.5rem', marginTop: '1.5rem' }}>
          Paso 1.2: Explorar las Vulnerabilidades en Detalle
        </h3>
        <p className="cds--body-long-01" style={{ marginBottom: '0.75rem' }}>
          Es primordial entender la raíz del fallo antes de corregirlo. Envía la siguiente solicitud para analizar la inyección de SQL:
        </p>
        <CodeSnippet type="multi" style={{ marginBottom: '1rem' }}>
{`Explícame detalladamente la vulnerabilidad de SQL Injection
en la función search_todos() de app.py.

1. ¿Cómo funciona el ataque?
2. Muéstrame un ejemplo concreto de un payload malicioso
3. ¿Qué daño podría causar en producción?
4. ¿Por qué las consultas parametrizadas lo previenen?`}
        </CodeSnippet>

        <h4 className="cds--heading-expressive-01" style={{ marginBottom: '0.5rem' }}>💡 Explicación técnica:</h4>
        <p className="cds--body-long-01" style={{ marginBottom: '0.5rem' }}>
          La función de consulta original es vulnerable porque interpola dinámicamente el string provisto por el usuario:
        </p>
        <CodeSnippet type="multi" style={{ marginBottom: '1rem' }}>
{`# VULNERABLE: El atacante controla {query} directamente
sql = f"SELECT * FROM todos WHERE title LIKE '%{query}%'"`}
        </CodeSnippet>
        <p className="cds--body-long-01" style={{ marginBottom: '1rem' }}>
          Si el atacante suministra el payload <code>?q='; DROP TABLE todos; --</code>, la sentencia ejecutada en base de datos se deforma a:
          <br />
          <code>SELECT * FROM todos WHERE title LIKE '%'; DROP TABLE todos; --%'</code> provocando la destrucción potencial de la tabla.
        </p>

        <p className="cds--body-long-01" style={{ marginBottom: '0.75rem' }}>
          De forma similar, consulta a Bob sobre la vulnerabilidad XSS en el cliente:
        </p>
        <CodeSnippet type="multi" style={{ marginBottom: '1.5rem' }}>
{`Explícame la vulnerabilidad XSS en la función createTodoHTML()
de app.js.

1. ¿Cómo puede un atacante explotar esta función?
2. Dame un ejemplo de payload malicioso
3. ¿Qué diferencia hay entre innerHTML y textContent?`}
        </CodeSnippet>

        {/* Paso 1.3 */}
        <h3 className="cds--heading-expressive-03" style={{ marginBottom: '0.5rem', marginTop: '1.5rem' }}>
          Paso 1.3: Crear el Plan de Correcciones
        </h3>
        <p className="cds--body-long-01" style={{ marginBottom: '0.75rem' }}>
          Pídele a Bob que estructure las correcciones en un plan por prioridad y estimación de tiempo:
        </p>
        <CodeSnippet type="multi" style={{ marginBottom: '1rem' }}>
{`Basándote en el análisis de seguridad anterior, crea un plan
detallado de correcciones ordenado por prioridad.

Para cada corrección incluye:
1. Qué archivo modificar
2. Qué cambio específico hacer
3. Tiempo estimado de implementación
4. Cómo verificar que la corrección funciona

Organiza el plan de mayor a menor prioridad.`}
        </CodeSnippet>

        <InlineNotification
          kind="info"
          lowContrast
          hideCloseButton
          title="💡 Aprendizaje clave"
          subtitle="El modo Plan es el aliado ideal para trazar el flujo lógico y verificar los pasos antes de aplicar cambios destructivos al código."
          style={{ marginBottom: 0 }}
        />
      </Tile>

      {/* ── PARTE 2 ─────────────────────────────────────────── */}
      <Tile style={{ marginBottom: '1.5rem' }}>
        <StepTag>Parte 2 · ≈ 10 min</StepTag>
        <h2 className="cds--heading-expressive-04" style={{ marginBottom: '0.75rem' }}>
          Parte 2: Implementación de Mejoras con Bob
        </h2>
        <p className="cds--body-long-01" style={{ marginBottom: '1rem', fontWeight: '600' }}>
          Contexto
        </p>
        <p className="cds--body-long-01" style={{ marginBottom: '1.5rem' }}>
          Llegó el momento de ejecutar el plan diseñado. Cambia a Bob al <strong>modo Agent</strong> (ícono 💻). Este modo le concede permiso para leer, modificar y guardar código directamente en tus archivos de desarrollo.
        </p>

        {/* Paso 2.1 */}
        <h3 className="cds--heading-expressive-03" style={{ marginBottom: '0.5rem' }}>
          Paso 2.1: Corregir la Vulnerabilidad de SQL Injection
        </h3>
        <p className="cds--body-long-01" style={{ marginBottom: '0.75rem' }}>
          Ejecuta este prompt en el chat de Bob en modo <strong>Agent</strong>:
        </p>
        <CodeSnippet type="multi" style={{ marginBottom: '1rem' }}>
{`Corrige la vulnerabilidad de SQL Injection en
app-vulnerable/backend/app.py.

En la función search_todos():
- Reemplaza el SQL con f-string por una consulta parametrizada usando SQLAlchemy ORM
- Asegúrate de que el parámetro de búsqueda nunca se interpole directamente en el SQL
- Mantén la misma funcionalidad (buscar por título)`}
        </CodeSnippet>

        <h4 className="cds--heading-expressive-01" style={{ marginBottom: '0.5rem' }}>🔍 Cambio que Bob debe implementar:</h4>
        <p className="cds--body-long-01" style={{ marginBottom: '0.5rem' }}>
          El código pasará de una interpolación insegura a una consulta estructurada a través del ORM:
        </p>
        <CodeSnippet type="multi" style={{ marginBottom: '1.5rem' }}>
{`# ANTES (vulnerable):
sql = f"SELECT * FROM todos WHERE title LIKE '%{query}%'"
result = db.session.execute(sql)

# DESPUÉS (seguro):
results = Todo.query.filter(Todo.title.like(f'%{query}%')).all()
return jsonify([todo.to_dict() for todo in results])`}
        </CodeSnippet>

        {/* Paso 2.2 */}
        <h3 className="cds--heading-expressive-03" style={{ marginBottom: '0.5rem', marginTop: '1.5rem' }}>
          Paso 2.2: Corregir la Vulnerabilidad XSS
        </h3>
        <p className="cds--body-long-01" style={{ marginBottom: '0.75rem' }}>
          Instruye a Bob para reescribir la lógica de renderizado del frontend de forma robusta y libre de XSS:
        </p>
        <CodeSnippet type="multi" style={{ marginBottom: '1rem' }}>
{`Corrige la vulnerabilidad XSS en
app-vulnerable/frontend/app.js.

La función createTodoHTML() usa innerHTML para renderizar
contenido del usuario, lo que permite inyección de scripts.

Refactoriza la función para:
1. Crear los elementos del DOM de forma segura con createElement
2. Usar textContent (nunca innerHTML) para insertar texto del usuario
3. Mantener exactamente la misma estructura visual y funcionalidad`}
        </CodeSnippet>

        <h4 className="cds--heading-expressive-01" style={{ marginBottom: '0.5rem' }}>🔍 Cambio que Bob debe implementar:</h4>
        <p className="cds--body-long-01" style={{ marginBottom: '0.5rem' }}>
          Bob refactorizará la plantilla de texto inline a elementos nativos de JavaScript asignados con <code>textContent</code> para prevenir la interpretación de código HTML/JS provisto por el usuario.
        </p>
        <CodeSnippet type="multi" style={{ marginBottom: '1.5rem' }}>
{`// ANTES (vulnerable):
function createTodoHTML(todo) {
    return \`<div class="todo-item">
        <h3 class="todo-title">\${todo.title}</h3>  <!-- XSS aquí -->
        <p>\${todo.description}</p>                   <!-- XSS aquí -->
    </div>\`;
}

// DESPUÉS (seguro):
// Bob creará elementos del DOM estructurados utilizando document.createElement 
// y aplicando .textContent en lugar de interpolaciones HTML.`}
        </CodeSnippet>

        {/* Paso 2.3 */}
        <h3 className="cds--heading-expressive-03" style={{ marginBottom: '0.5rem', marginTop: '1.5rem' }}>
          Paso 2.3: Mover Secretos a Variables de Env (Environment Variables)
        </h3>
        <p className="cds--body-long-01" style={{ marginBottom: '0.75rem' }}>
          Ejecuta la migración de llaves y credenciales mediante el siguiente prompt:
        </p>
        <CodeSnippet type="multi" style={{ marginBottom: '1rem' }}>
{`Mueve los secretos hardcodeados en
app-vulnerable/backend/config.py
a variables de entorno.

Realiza estos cambios:
1. Modifica config.py para leer todos los secretos con os.getenv()
2. Agrega python-dotenv a requirements.txt
3. Actualiza el .env.example con comentarios claros sobre cada variable
4. Agrega una validación que lance error si faltan variables críticas`}
        </CodeSnippet>

        <h4 className="cds--heading-expressive-01" style={{ marginBottom: '0.5rem' }}>🔍 Cambio esperado en config.py:</h4>
        <CodeSnippet type="multi" style={{ marginBottom: '1.5rem' }}>
{`# ANTES (vulnerable):
DATABASE_URL = "postgresql://admin:SuperSecret123@localhost/todos"
SECRET_KEY = "my-super-secret-key-12345"

# DESPUÉS (seguro):
import os
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv('DATABASE_URL')
SECRET_KEY = os.getenv('SECRET_KEY')

if not DATABASE_URL or not SECRET_KEY:
    raise ValueError("Faltan variables de entorno requeridas. Revisa tu archivo .env")`}
        </CodeSnippet>

        {/* Paso 2.4 */}
        <h3 className="cds--heading-expressive-03" style={{ marginBottom: '0.5rem', marginTop: '1.5rem' }}>
          Paso 2.4 (Bonus): Agregar Validación de Datos
        </h3>
        <p className="cds--body-long-01" style={{ marginBottom: '0.75rem' }}>
          Si completaste los retos previos, intenta agregar comprobaciones a la carga de datos del backend:
        </p>
        <CodeSnippet type="multi" style={{ marginBottom: 0 }}>
{`Agrega validación de datos al endpoint create_todo() en app.py.

Valida que:
- El campo 'title' sea requerido y no esté vacío
- El título tenga entre 1 y 200 caracteres
- La descripción, si existe, tenga menos de 1000 caracteres
- Retorna un error 400 con mensaje descriptivo si la validación falla`}
        </CodeSnippet>
      </Tile>

      {/* ── VERIFICACIÓN FINAL ──────────────────────────────── */}
      <Tile style={{ marginBottom: '1.5rem' }}>
        <h2 className="cds--heading-expressive-04" style={{ marginBottom: '0.75rem' }}>
          Verificación Final
        </h2>
        <p className="cds--body-long-01" style={{ marginBottom: '1rem' }}>
          Valida que las correcciones funcionan adecuadamente ejecutando las siguientes pruebas en tu terminal:
        </p>
        
        <h4 className="cds--heading-expressive-02" style={{ marginBottom: '0.5rem' }}>1. Validar la mitigación de SQL Injection</h4>
        <p className="cds--body-long-01" style={{ marginBottom: '0.5rem' }}>
          La URL del buscador ya no debe procesar sentencias SQL embebidas:
        </p>
        <CodeSnippet type="single" style={{ marginBottom: '1rem' }}>
{`curl "http://localhost:5000/api/todos/search?q=test'%20OR%20'1'='1"`}
        </CodeSnippet>

        <h4 className="cds--heading-expressive-02" style={{ marginBottom: '0.5rem' }}>2. Validar la protección contra XSS</h4>
        <p className="cds--body-long-01" style={{ marginBottom: '0.5rem' }}>
          Envía una tarea con una inyección HTML. Ésta debe renderizarse como texto puro y no ejecutar la alerta en el frontend:
        </p>
        <CodeSnippet type="multi" style={{ marginBottom: '1rem' }}>
{`curl -X POST http://localhost:5000/api/todos \\
  -H "Content-Type: application/json" \\
  -d '{"title":"<img src=x onerror=alert(1)>","description":"prueba"}'`}
        </CodeSnippet>

        <h4 className="cds--heading-expressive-02" style={{ marginBottom: '0.5rem' }}>3. Comprobar que no hay secretos hardcodeados</h4>
        <p className="cds--body-long-01" style={{ marginBottom: '0.5rem' }}>
          El comando grep no debe reportar resultados al buscar credenciales fijas en el archivo:
        </p>
        <CodeSnippet type="single" style={{ marginBottom: '1.5rem' }}>
{`grep -n "SuperSecret\\|sk_live\\|my-super-secret" app-vulnerable/backend/config.py`}
        </CodeSnippet>

        <h2 className="cds--heading-expressive-04" style={{ marginBottom: '0.75rem' }}>
          Resumen de Cambios
        </h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Archivo</th>
              <th style={thStyle}>Vulnerabilidad</th>
              <th style={thStyle}>Corrección</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}><code>backend/app.py</code></td>
              <td style={tdStyle}>SQL Injection</td>
              <td style={tdStyle}>Consultas ORM parametrizadas</td>
            </tr>
            <tr>
              <td style={tdStyle}><code>frontend/app.js</code></td>
              <td style={tdStyle}>XSS con innerHTML</td>
              <td style={tdStyle}>createElement + textContent</td>
            </tr>
            <tr>
              <td style={tdStyle}><code>backend/config.py</code></td>
              <td style={tdStyle}>Secretos hardcodeados</td>
              <td style={tdStyle}>Variables de entorno</td>
            </tr>
            <tr>
              <td style={tdStyle}><code>backend/requirements.txt</code></td>
              <td style={tdStyle}>Falta de dependencias</td>
              <td style={tdStyle}>Adición de <code>python-dotenv</code></td>
            </tr>
          </tbody>
        </table>
      </Tile>

      {/* ── CIERRE ─────────────────────────────────────────── */}
      <Tile style={{ marginBottom: '1.5rem' }}>
        <h2 className="cds--heading-expressive-04" style={{ marginBottom: '0.75rem' }}>
          ¡Felicitaciones! 🎉
        </h2>
        <p className="cds--body-long-01" style={{ marginBottom: '1rem' }}>
          Has culminado con éxito el Laboratorio 2. A lo largo del ejercicio aprendiste a:
        </p>
        <OrderedList style={{ marginBottom: '1.5rem' }}>
          <ListItem>Usar el modo <strong>Plan</strong> para un diagnóstico sistemático de vulnerabilidades y de calidad de código.</ListItem>
          <ListItem>Comprender el comportamiento del ataque por inyección SQL y por inyección XSS de manera práctica.</ListItem>
          <ListItem>Manipular y aplicar el modo <strong>Agent</strong> para corregir vulnerabilidades en el código del proyecto.</ListItem>
          <ListItem>Implementar buenas prácticas de almacenamiento y gestión de secretos utilizando variables de entorno.</ListItem>
        </OrderedList>

        <h3 className="cds--heading-expressive-03" style={{ marginBottom: '0.5rem' }}>
          Buenas Prácticas Consolidadas:
        </h3>
        <p className="cds--body-long-01" style={{ fontWeight: '600', marginTop: '0.5rem' }}>Prevención de SQL Injection:</p>
        <ul style={{ paddingLeft: '1.5rem', lineHeight: 1.8, marginBottom: '0.5rem' }} className="cds--list--unordered">
          <li>Siempre utiliza consultas parametrizadas o mapeadores ORM como SQLAlchemy.</li>
          <li>Nunca concatenes o interpoles variables del usuario directamente en la cadena SQL.</li>
          <li>Filtra y sanitiza todo dato entrante antes de procesarlo.</li>
        </ul>

        <p className="cds--body-long-01" style={{ fontWeight: '600', marginTop: '0.5rem' }}>Prevención de XSS:</p>
        <ul style={{ paddingLeft: '1.5rem', lineHeight: 1.8, marginBottom: '0.5rem' }} className="cds--list--unordered">
          <li>Usa <code>textContent</code> o <code>innerText</code> al inyectar entradas del usuario en el DOM.</li>
          <li>Evita <code>innerHTML</code> a menos que sanitices previamente la cadena con una librería validada (DOMPurify, etc.).</li>
        </ul>

        <p className="cds--body-long-01" style={{ fontWeight: '600', marginTop: '0.5rem' }}>Gestión de Secretos:</p>
        <ul style={{ paddingLeft: '1.5rem', lineHeight: 1.8, marginBottom: 0 }} className="cds--list--unordered">
          <li>Nunca escribas de manera fija (hardcodeada) las contraseñas en el código fuente.</li>
          <li>Consume las variables de entorno utilizando bibliotecas locales como python-dotenv.</li>
          <li>Siempre excluye el archivo local <code>.env</code> a través de tu archivo <code>.gitignore</code>.</li>
        </ul>
      </Tile>

      <InlineNotification
        kind="success"
        title="Listo para la siguiente fase: Lab 3"
        subtitle="Ahora ya sabes cómo realizar revisiones exhaustivas y automatizar la aplicación de correcciones con la ayuda de Bob."
        lowContrast
        hideCloseButton
      />
    </div>
  );
};

export default Lab2;
