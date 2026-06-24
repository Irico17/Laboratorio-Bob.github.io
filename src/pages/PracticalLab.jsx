import {
  Tile,
  OrderedList,
  ListItem,
  UnorderedList,
  InlineNotification,
  CodeSnippet,
  Accordion,
  AccordionItem,
} from '@carbon/react';
import LabHeader from '../components/LabHeader';
import Challenge from '../components/Challenge';

const SOLID_SKILL_PROMPT = `Crea una nueva Skill para revisión de arquitectura y principios SOLID.

1. Crea la carpeta .bob/skills/solid-principles/ con un archivo SKILL.md.
2. El SKILL.md debe empezar con front matter YAML:
   ---
   name: solid-principles
   description: <cuándo activarla: revisar diseño OO, acoplamiento y SOLID>
   ---
3. Escribe instrucciones ESTRICTAS que obliguen a Bob a, para cada archivo relevante:
   - Evaluar los 5 principios SOLID uno por uno (SRP, OCP, LSP, ISP, DIP).
   - Señalar cada violación con archivo:línea y el principio incumplido.
   - Proponer el refactor concreto (con un fragmento de código si aplica).
   - Recomendar el patrón de diseño adecuado cuando corresponda.
   - Cerrar con un puntaje de salud de diseño (1-5) y los 3 cambios prioritarios.
4. El formato de salida debe ser SIEMPRE el mismo: una tabla de hallazgos
   seguida de las recomendaciones priorizadas.`;

const PracticalLab = () => {
  return (
    <div style={{ maxWidth: '820px', margin: '0 auto', paddingBottom: '4rem' }}>
      <LabHeader
        eyebrow="LABORATORIO 4 · PASO 4 DE 4"
        title="Retos guiados"
        duration="18 min"
        accent="#0f62fe"
      >
        Cuatro retos en orden, del más automático al más avanzado. Trabaja sobre la rama{' '}
        <code>dev</code> (con la <code>demo-app</code> vulnerable) y ten abierto un Pull Request
        de <code>dev</code> → <code>master</code> antes de empezar.
      </LabHeader>

      {/* Ruta del lab con tiempos */}
      <ul className="lab-route" style={{ marginBottom: '2rem' }}>
        <li>
          <span className="lab-route__step">Reto 1</span>
          <span className="lab-route__label">Revisión de PR</span>
          <span className="lab-route__time">≈ 4 min · automático</span>
        </li>
        <li>
          <span className="lab-route__step">Reto 2</span>
          <span className="lab-route__label">Comandos /bob</span>
          <span className="lab-route__time">≈ 3 min · comentarios</span>
        </li>
        <li>
          <span className="lab-route__step">Reto 3</span>
          <span className="lab-route__label">Issue → PR</span>
          <span className="lab-route__time">≈ 6 min · manual</span>
        </li>
        <li>
          <span className="lab-route__step">Reto 4</span>
          <span className="lab-route__label">Skill SOLID</span>
          <span className="lab-route__time">≈ 5 min · skills en CI</span>
        </li>
      </ul>

      {/* Antes de empezar */}
      <Tile style={{ marginBottom: '2rem', backgroundColor: '#edf5ff' }}>
        <h3 className="cds--heading-expressive-03" style={{ marginBottom: '0.75rem' }}>
          Antes de empezar
        </h3>
        <UnorderedList>
          <ListItem>Estás en tu repositorio con <strong>Pipelines habilitado</strong> y las variables <code>BOBSHELL_API_KEY</code> y <code>BOBSHELL_BB_TOKEN</code> cargadas.</ListItem>
          <ListItem>Tienes un <strong>Pull Request abierto</strong> de <code>dev</code> hacia <code>master</code>.</ListItem>
          <ListItem>Tienes a mano la sección <strong>Pipelines</strong> del repositorio (ahí lanzarás los pipelines manuales).</ListItem>
        </UnorderedList>
      </Tile>

      <InlineNotification
        kind="info"
        lowContrast
        hideCloseButton
        title="Cada pipeline tarda unos minutos"
        subtitle="Lanza el pipeline y sigue avanzando o explicando — no te quedes mirando la pantalla. Vuelve a revisar el resultado cuando termine."
        style={{ marginBottom: '1.5rem' }}
      />

      {/* ── RETO 1 ─────────────────────────────────────────── */}
      <Challenge num="1" title="Revisión automática del Pull Request" time="≈ 4 min" tag="Automático">
        <div className="trigger-note">Se dispara solo al abrir o actualizar un PR — no haces nada manual.</div>
        <OrderedList>
          <ListItem>Abre el Pull Request de <code>dev</code> → <code>master</code> (o haz un commit para actualizarlo).</ListItem>
          <ListItem>En la pestaña <strong>Pipelines</strong> verás arrancar <strong>BobShell PR Review</strong>.</ListItem>
          <ListItem>Cuando termine, vuelve al PR: Bob deja un <strong>comentario estructurado</strong> con los problemas de seguridad y arquitectura del código de <code>dev</code>.</ListItem>
        </OrderedList>
        <p className="cds--body-long-01" style={{ marginBottom: 0 }}>
          💡 Es el mismo rol de un revisor senior, pero automático y consistente en cada PR.
        </p>
      </Challenge>

      {/* ── RETO 2 ─────────────────────────────────────────── */}
      <Challenge num="2" title="Conversa con Bob desde los comentarios" time="≈ 3 min" tag="Comentarios">
        <div className="trigger-note">Escribe comandos <code>/bob</code> en los comentarios del PR.</div>
        <p className="cds--body-long-01" style={{ marginBottom: '1rem' }}>
          El pipeline programado <code>bob-poll-comments</code> revisa los comentarios y responde.
          Prueba cualquiera de estos en el PR:
        </p>
        <CodeSnippet type="multi" style={{ marginBottom: '1rem' }}>
{`/bob ¿hay problemas de seguridad en este diff?
/bob label
/bob deep-review`}
        </CodeSnippet>
        <OrderedList>
          <ListItem><code>/bob &lt;pregunta&gt;</code> → Bob responde en el hilo del PR.</ListItem>
          <ListItem><code>/bob label</code> → publica las categorías sugeridas (bug, security, refactor…).</ListItem>
          <ListItem>En vivo puedes forzarlo: <strong>Run pipeline</strong> &gt; <strong>bob-poll-comments</strong>.</ListItem>
        </OrderedList>
      </Challenge>

      {/* ── RETO 3 ─────────────────────────────────────────── */}
      <Challenge num="3" title="De un “issue” a un PR documentado" time="≈ 6 min" tag="bob-fix-issue">
        <div className="trigger-note">El “issue” es texto que tú tipeas — sin cuentas ni servicios extra.</div>
        <p className="cds--body-long-01" style={{ marginBottom: '1rem' }}>
          Bob lee el problema, corrige el código, crea una rama nueva, abre un PR y documenta la
          solución — todo dentro de Bitbucket.
        </p>
        <OrderedList>
          <ListItem>Ve a <strong>Pipelines</strong> &gt; <strong>Run pipeline</strong> &gt; pipeline personalizado <strong>bob-fix-issue</strong>.</ListItem>
          <ListItem>Completa las variables:
            <UnorderedList style={{ marginTop: '0.5rem' }}>
              <ListItem><strong>ISSUE_TITLE:</strong> <em>SQL injection en el login</em></ListItem>
              <ListItem><strong>ISSUE_BODY:</strong> <em>El endpoint /login concatena el input del usuario en la consulta SQL.</em></ListItem>
              <ListItem><strong>TARGET_BRANCH:</strong> <code>master</code></ListItem>
            </UnorderedList>
          </ListItem>
          <ListItem>Al terminar, abre <strong>Pull Requests</strong>: hay una rama <code>fix/&lt;slug&gt;</code> y un PR nuevo.</ListItem>
          <ListItem>Revisa el PR: su <strong>descripción documenta la solución</strong> y el código incluye <code>docs/fixes/&lt;slug&gt;.md</code> con la causa raíz y cómo verificarla.</ListItem>
        </OrderedList>
      </Challenge>

      {/* ── RETO 4 ─────────────────────────────────────────── */}
      <Challenge num="4" title="Crea tu Skill de arquitectura (SOLID) y aplícala en CI" time="≈ 5 min" tag="Skills en CI" tagType="purple">
        <div className="trigger-note">Las Skills de <code>.bob/skills/</code> se cargan solas en cada pipeline.</div>
        <p className="cds--body-long-01" style={{ marginBottom: '1rem' }}>
          En el Lab 3 creaste una Skill para usarla local. Aquí creas una de{' '}
          <strong>principios SOLID y buenas prácticas de arquitectura</strong> y la subes para que
          Bob la aplique <strong>automáticamente</strong> en sus revisiones de pipeline.
        </p>
        <OrderedList>
          <ListItem>Pídele a Bob que cree la Skill con este prompt:</ListItem>
        </OrderedList>
        <CodeSnippet type="multi" style={{ margin: '0.5rem 0 1rem' }}>
          {SOLID_SKILL_PROMPT}
        </CodeSnippet>
        <OrderedList>
          <ListItem>Sube la nueva carpeta a tu rama:
            <CodeSnippet type="multi" style={{ marginTop: '0.5rem' }}>
{`git add .bob/skills/solid-principles/
git commit -m "Añade skill de principios SOLID"
git push origin dev`}
            </CodeSnippet>
          </ListItem>
          <ListItem>Actualiza el PR (un commit nuevo basta) y observa cómo la revisión de Bob ahora <strong>evalúa SOLID</strong> con tu formato.</ListItem>
        </OrderedList>
        <InlineNotification
          kind="info"
          lowContrast
          hideCloseButton
          title="Respaldo en el repo"
          subtitle="Si tu Bob falla, ya hay una versión modelo en .bob/skills/solid-principles/SKILL.md para comparar o usar directamente."
          style={{ marginTop: '1rem', marginBottom: 0 }}
        />
      </Challenge>

      {/* ── Extras para llevar ─────────────────────────────── */}
      <h2 className="cds--heading-expressive-04" style={{ margin: '2.5rem 0 1rem' }}>
        Para llevar (opcional)
      </h2>
      <Accordion style={{ marginBottom: '2rem' }}>
        <AccordionItem title="Revisión instantánea al hacer push (sin PR)">
          <p className="cds--body-long-01" style={{ marginBottom: '0.75rem' }}>
            Haz <strong>commit y push</strong> a una rama sin PR abierto. El pipeline <code>default</code> (<strong>BobShell Commit Review</strong>) extrae solo tu diff y publica un artifact <code>bobshell-commit-review.md</code> con el veredicto.
          </p>
          <p className="cds--body-long-01" style={{ marginBottom: '0.5rem' }}>
            Puedes probarlo rápidamente creando y subiendo un commit vacío desde tu terminal con estos comandos:
          </p>
          <CodeSnippet type="multi" style={{ marginBottom: '0.5rem' }}>
{`git commit --allow-empty -m "chore: probar pipeline de revision de commit instantaneo"
git push origin dev`}
          </CodeSnippet>
        </AccordionItem>
        <AccordionItem title="Análisis profundo de toda la rama (bob-deep-review)">
          <p className="cds--body-long-01" style={{ marginBottom: '0.5rem' }}>
            <strong>Run pipeline</strong> &gt; <strong>bob-deep-review</strong> sobre <code>dev</code>.
            Bob recorre todos los archivos fuente por lotes y genera el artifact{' '}
            <code>bobshell-deep-review.md</code> con el reporte completo de vulnerabilidades.
          </p>
        </AccordionItem>
        <AccordionItem title="¿Se puede integrar Bob con herramientas como Jira?">
          <p className="cds--body-long-01" style={{ marginBottom: '0.75rem' }}>
            Sí. Aunque este laboratorio está completamente enfocado en flujos nativos de Bitbucket Cloud, Bob Shell puede integrarse con plataformas externas de gestión de incidencias como <strong>Jira Cloud</strong>.
          </p>
          <p className="cds--body-long-01" style={{ marginBottom: '0.75rem' }}>
            En un entorno de producción, Bob es capaz de conectarse a la API de Jira, leer la descripción de un ticket de soporte, analizar su contexto y asignarle etiquetas o prioridades directamente en tu tablero del proyecto.
          </p>
          <p className="cds--body-long-01" style={{ marginBottom: 0 }}>
            Para este laboratorio práctico de Bitbucket, realizamos la categorización de forma nativa sobre los Pull Requests mediante el pipeline <code>bob-label-pr</code> (activado con el comando <code>/bob label</code> en comentarios o pasándole el <code>PR_ID</code> de tu Pull Request de forma manual).
          </p>
        </AccordionItem>
        <AccordionItem title="¿Cómo reinicio el laboratorio?">
          <p className="cds--body-long-01" style={{ marginBottom: '0.75rem' }}>
            Para volver a empezar con el código vulnerable original:
          </p>
          <CodeSnippet type="multi">
{`git checkout dev
git reset --hard origin/dev   # descarta cambios locales
# si Bob modificó la nube, re-empuja tu copia limpia:
git push origin dev --force`}
          </CodeSnippet>
        </AccordionItem>
      </Accordion>

      <InlineNotification
        kind="success"
        title="¡Completaste el Lab 4!"
        subtitle="Integraste IA en todo el ciclo: revisión de PRs, comandos /bob, corrección de issues con PRs documentados y Skills aplicadas en CI — sin salir de Bitbucket."
        lowContrast
        hideCloseButton
      />
    </div>
  );
};

export default PracticalLab;
