import { Accordion, AccordionItem, Tile, CodeSnippet } from '@carbon/react';
import LabHeader from '../components/LabHeader';

const Workflows = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', paddingBottom: '4rem' }}>
      <LabHeader eyebrow="LABORATORIO 4 · PASO 3 DE 4" title="Los pipelines a fondo" duration="≈ 9 min" accent="#0f62fe">
        A diferencia de los laboratorios donde ejecutas comandos manualmente, aquí el protagonista
        es <strong>Bitbucket Pipelines</strong>. Hemos configurado eventos que "despiertan" a Bob
        Shell en el servidor para que analice tu código automáticamente.
      </LabHeader>

      <Tile style={{ marginBottom: '2rem', backgroundColor: '#e5f6ff' }}>
        <h3 className="cds--heading-expressive-03" style={{ marginBottom: '1rem' }}>Conceptos Básicos de Bitbucket Pipelines</h3>
        <p className="cds--body-long-01" style={{ marginBottom: '1rem' }}>
          Para entender el archivo <code>bitbucket-pipelines.yml</code> en la raíz del repositorio, debes conocer su nomenclatura básica:
        </p>
        <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', marginBottom: '1rem' }} className="cds--list--unordered">
          <li><strong>Pipelines sections</strong>: Define cuándo se ejecutan los pipelines. <code>pull-requests:</code> se activa al abrir/actualizar un PR, <code>default:</code> al hacer push, y <code>custom:</code> para ejecución manual o por API.</li>
          <li><strong>Steps</strong>: Cada pipeline contiene uno o más steps. Cada step se ejecuta en un contenedor Docker limpio.</li>
          <li><strong>Scripts</strong>: Son los comandos dentro de un step. Aquí es donde instalamos Bob, leemos los archivos y ejecutamos los análisis.</li>
          <li><strong>Variables</strong>: Se definen en <code>Repository settings &gt; Pipelines &gt; Repository variables</code> y se inyectan automáticamente como variables de entorno.</li>
        </ul>
      </Tile>

      <h2 className="cds--heading-expressive-04" style={{ marginBottom: '1rem' }}>Anatomía de un Pipeline con Bob</h2>
      <Tile style={{ marginBottom: '2rem' }}>
        <p className="cds--body-long-01" style={{ marginBottom: '1rem' }}>
          Veamos un ejemplo del código real del <code>bitbucket-pipelines.yml</code> para entender las partes clave que le dan vida a Bob y cómo agregar tus propias Skills:
        </p>
        
        <h4 className="cds--heading-expressive-02" style={{ marginBottom: '0.5rem' }}>1. Clonar el Código</h4>
        <CodeSnippet type="multi" style={{ marginBottom: '1rem' }}>
{`# Bitbucket Pipelines clona automáticamente el código.
# Controlamos la profundidad del historial con:
clone:
  depth: 50`}
        </CodeSnippet>
        <p className="cds--body-long-01" style={{ marginBottom: '1.5rem' }}>
          A diferencia de GitHub Actions donde usas <code>actions/checkout@v4</code>, Bitbucket Pipelines clona el repositorio automáticamente. La opción <code>depth: 50</code> asegura que se traigan suficientes commits para que Bob pueda comparar qué código es nuevo y qué código es viejo.
        </p>

        <h4 className="cds--heading-expressive-02" style={{ marginBottom: '0.5rem' }}>2. Construir el Prompt y Ejecutar Bob</h4>
        <CodeSnippet type="multi" style={{ marginBottom: '1rem' }}>
{`script:
  - chmod +x scripts/*.sh
  - bash scripts/install-bob-shell.sh
  # Las variables se inyectan automáticamente desde Repository variables
  # No se necesita sintaxis especial como \${{ secrets.X }}
  - export BOBSHELL_COMMAND="bash scripts/bob-ci-runner.sh"
  - ./scripts/bobshell-pr-review.sh`}
        </CodeSnippet>
        <p className="cds--body-long-01">
          <strong>Aquí ocurre la magia:</strong>
          <br/><br/>
          Las variables de repositorio (como <code>BOBSHELL_API_KEY</code> y <code>BOBSHELL_BB_TOKEN</code>) se inyectan automáticamente al entorno — sin necesidad de la sintaxis <code>{'${{ secrets.X }}'}</code> de GitHub.
          <br/><br/>
          El script <code>bobshell-pr-review.sh</code> se encarga de: extraer el diff del PR, cargar todas las Skills desde <code>.bob/skills/</code>, construir un prompt masivo, ejecutar Bob y publicar el resultado como comentario en el PR.
          <br/><br/>
          <strong>¿Cómo agregas tu propia Skill al Pipeline?</strong> Simplemente crea una nueva carpeta en <code>.bob/skills/mi-nueva-skill/SKILL.md</code>. Los scripts automáticamente detectan y cargan todas las Skills del directorio <code>.bob/skills/</code>.
        </p>
      </Tile>

      <h2 className="cds--heading-expressive-04" style={{ marginBottom: '1rem' }}>Análisis y Revisión de Código</h2>
      <Accordion style={{ marginBottom: '2rem' }}>
        <AccordionItem title="Deep Branch Review (Análisis profundo)">
          <p className="cds--body-long-01" style={{ marginBottom: '1rem' }}>
            <strong>Activación:</strong> Manual (Pipeline personalizado <code>bob-deep-review</code> en la interfaz de Pipelines).
          </p>
          <p className="cds--body-long-01" style={{ marginBottom: '1rem' }}>
            <strong>Cómo funciona:</strong> Este pipeline recorre toda la rama seleccionada buscando archivos fuente (Python, JS, etc.). En lugar de enviarle a Bob todo de golpe (lo cual rebasaría la memoria), divide los archivos en pequeños lotes y los envía a Bob a través de <code>stdin</code>. Bob aplica todas las <em>Skills</em> y finalmente emite un reporte masivo.
          </p>
          <p className="cds--body-long-01">
            <strong>Resultado:</strong> Genera un <em>Artifact</em> descargable con el detalle línea por línea de las vulnerabilidades encontradas.
          </p>
        </AccordionItem>

        <AccordionItem title="Review Commit on Push">
          <p className="cds--body-long-01" style={{ marginBottom: '1rem' }}>
            <strong>Activación:</strong> Automática (Al hacer <code>git push</code> a una rama sin PR abierto).
          </p>
          <p className="cds--body-long-01">
            <strong>Cómo funciona:</strong> Es un escáner de impacto quirúrgico. Cuando subes código, el pipeline <code>default</code> extrae exclusivamente el <em>git diff</em> (solo lo que cambiaste). Se lo entrega a Bob para evaluar si ese cambio específico introdujo un bug. Si lo encuentra, sube un reporte de salud como artifact del pipeline.
          </p>
        </AccordionItem>

        <AccordionItem title="Review PR (Revisión Automática de PR)">
          <p className="cds--body-long-01" style={{ marginBottom: '1rem' }}>
            <strong>Activación:</strong> Automática (Al abrir o actualizar un Pull Request).
          </p>
          <p className="cds--body-long-01">
            <strong>Cómo funciona:</strong> Bob lee la totalidad de los archivos modificados en un Pull Request. Se comporta como un revisor humano senior: busca problemas arquitectónicos y de seguridad, y luego comenta directamente en el Pull Request indicando por qué el código podría fallar en producción.
          </p>
        </AccordionItem>
      </Accordion>

      <h2 className="cds--heading-expressive-04" style={{ marginBottom: '1rem' }}>Gestión, Triaje y Resolución de Issues</h2>
      <Tile style={{ marginBottom: '1.5rem', backgroundColor: '#fff8e1' }}>
        <p className="cds--body-long-01" style={{ margin: 0 }}>
          ⚠️ <strong>Las Issues nativas de Bitbucket están deprecadas</strong> (Atlassian las elimina el <strong>20 de agosto de 2026</strong>). Por eso este laboratorio gestiona los “issues” de forma <strong>Bitbucket-native</strong>: el problema se pasa como texto al pipeline (o se lee de un PR).
        </p>
      </Tile>
      <Accordion>
        <AccordionItem title="Triaje / Etiquetado de PRs (bob-label-pr)">
          <p className="cds--body-long-01" style={{ marginBottom: '1rem' }}>
            <strong>Activación:</strong> comentario <code>/bob label</code> en un PR (lo detecta <code>bob-poll-comments</code>) o ejecución manual del pipeline <code>bob-label-pr</code> con un <code>PR_ID</code>.
          </p>
          <p className="cds--body-long-01">
            <strong>Cómo funciona:</strong> Bob evalúa título, descripción y archivos cambiados del PR, deduce las categorías apropiadas (bug, security, refactor, performance…) y publica un comentario estructurado con la clasificación. Como los PRs de Bitbucket Cloud no tienen labels nativos, el triaje se entrega como comentario.
          </p>
        </AccordionItem>

        <AccordionItem title="Fix de un Issue → Branch + PR + Docs (bob-fix-issue)">
          <p className="cds--body-long-01" style={{ marginBottom: '1rem' }}>
            <strong>Activación:</strong> pipeline personalizado <code>bob-fix-issue</code>, pasando el problema como texto: <code>ISSUE_TITLE</code> y <code>ISSUE_BODY</code> (más <code>TARGET_BRANCH</code>).
          </p>
          <p className="cds--body-long-01" style={{ marginBottom: '1rem' }}>
            <strong>Cómo funciona:</strong> ¡La automatización más avanzada! Bob lee el problema tipeado, analiza la base de código para localizar el bug, escribe el parche siguiendo las Skills, crea una rama <code>fix/&lt;slug&gt;</code>, hace commit, abre un <strong>Pull Request</strong> cuya descripción <strong>documenta la solución</strong>, y añade un <code>docs/fixes/&lt;slug&gt;.md</code> con la causa raíz.
          </p>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Workflows;
