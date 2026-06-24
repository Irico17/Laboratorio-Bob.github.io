import { Tile, OrderedList, ListItem, CodeSnippet, InlineNotification } from '@carbon/react';
import LabHeader from '../components/LabHeader';

const SetupGuide = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', paddingBottom: '4rem' }}>
      <LabHeader eyebrow="LABORATORIO 4 · PASO 1 DE 4" title="Preparación del laboratorio" duration="≈ 8 min" accent="#0f62fe">
        Clonarás el código base con <strong>todas sus ramas</strong> y lo subirás a un repositorio
        nuevo en Bitbucket Cloud bajo tu control, para que los pipelines se ejecuten sin restricciones.
      </LabHeader>

      <Tile style={{ marginBottom: '2rem' }}>
        <h3 className="cds--heading-expressive-03" style={{ marginBottom: '1rem' }}>Fase 1: Clona el repo base y súbelo al tuyo</h3>
        <OrderedList>
          <ListItem>Crea un repositorio <strong>vacío</strong> en tu workspace de Bitbucket Cloud (ej. <code>bob-lab-practica</code>), <strong>sin</strong> README ni <code>.gitignore</code>.</ListItem>
          <ListItem>
            Clona el repositorio base del instructor a tu máquina:
            <CodeSnippet type="multi" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
{`git clone https://bitbucket.org/WORKSPACE_INSTRUCTOR/bob-shell-integration.git
cd bob-shell-integration`}
            </CodeSnippet>
          </ListItem>
          <ListItem>
            Crea una copia local de las dos ramas para llevarte todo: <code>master</code> (app
            limpia) y <code>dev</code> (app vulnerable). Sólo cambia a cada una una vez:
            <CodeSnippet type="multi" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
{`git checkout dev
git checkout master`}
            </CodeSnippet>
          </ListItem>
          <ListItem>
            Apunta el remoto <code>origin</code> a <strong>tu</strong> repositorio nuevo:
            <CodeSnippet type="multi" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
{`git remote set-url origin https://bitbucket.org/TU_WORKSPACE/bob-lab-practica.git`}
            </CodeSnippet>
          </ListItem>
          <ListItem>
            Empuja <strong>todas las ramas</strong> (y tags) a tu repositorio:
            <CodeSnippet type="multi" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
{`git push -u origin --all
git push origin --tags`}
            </CodeSnippet>
          </ListItem>
          <ListItem>
            Verifica en Bitbucket (sección <strong>Branches</strong>) que llegaron las dos ramas:
            <code>master</code> (app limpia) y <code>dev</code> (app vulnerable). Las dos deben existir
            antes de empezar los retos.
          </ListItem>
        </OrderedList>
      </Tile>

      <Tile style={{ marginBottom: '2rem' }}>
        <h3 className="cds--heading-expressive-03" style={{ marginBottom: '1rem' }}>Fase 2: Creación de Tokens</h3>
        <p className="cds--body-long-01" style={{ marginBottom: '1rem' }}>
          La magia de este laboratorio ocurre porque Bob puede leer tu código e interactuar con la API de Bitbucket en tu nombre. Para ello, necesita permisos.
        </p>

        <h4 className="cds--heading-expressive-02" style={{ marginBottom: '0.5rem' }}>A. Repository Access Token de Bitbucket (`BOBSHELL_BB_TOKEN`)</h4>
        <OrderedList style={{ marginBottom: '1.5rem' }}>
          <ListItem>En tu repositorio de Bitbucket, ve a <strong>Repository settings</strong>.</ListItem>
          <ListItem>Entra a <strong>Access tokens</strong> (en la sección Security).</ListItem>
          <ListItem>Clic en <strong>Create Repository Access Token</strong>.</ListItem>
          <ListItem>Asígnale el nombre <code>Bob Lab Token</code> y selecciona los permisos: <strong>Repositories: Write</strong> y <strong>Pull requests: Write</strong>.</ListItem>
          <ListItem>Genera el token y cópialo en un lugar seguro.</ListItem>
        </OrderedList>

        <h4 className="cds--heading-expressive-02" style={{ marginBottom: '0.5rem' }}>B. Llave de Bob Shell (`BOBSHELL_API_KEY`)</h4>
        <p className="cds--body-long-01" style={{ marginBottom: '1rem' }}>
          Ingresa a <a href="https://bob.ibm.com/admin/bobalytics" target="_blank" rel="noreferrer">bob.ibm.com/admin/bobalytics</a> para generar tu API key personal. Asegúrate de seleccionarla con alcance (scope) de <strong>Inference</strong>. Si tienes cualquier duda sobre cómo obtenerla, pregunta al instructor del laboratorio.
        </p>
        <InlineNotification
          kind="warning"
          lowContrast
          hideCloseButton
          title="¿El token dejó de funcionar?"
          subtitle="Los Repository Access Token pueden tener fecha de expiración. Si ves errores 401/403 en los pipelines, vuelve a Repository settings > Access tokens, revoca el viejo, crea uno nuevo con los mismos permisos y actualiza BOBSHELL_BB_TOKEN."
          style={{ marginBottom: 0 }}
        />
      </Tile>

      <Tile style={{ marginBottom: '2rem' }}>
        <h3 className="cds--heading-expressive-03" style={{ marginBottom: '1rem' }}>Fase 3: Configuración de Variables del Repositorio</h3>
        <OrderedList>
          <ListItem>Ve a la página principal de tu <strong>nuevo repositorio</strong> en Bitbucket.</ListItem>
          <ListItem>Haz clic en <strong>Repository settings</strong> &gt; <strong>Pipelines</strong> &gt; <strong>Repository variables</strong>.</ListItem>
          <ListItem>
            Agrega tu Repository Access Token:
            <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem', marginBottom: '0.5rem' }}>
              <li><strong>Name:</strong> <code>BOBSHELL_BB_TOKEN</code></li>
              <li><strong>Value:</strong> <em>Tu token de acceso</em></li>
              <li><strong>Secured:</strong> ✅ Sí</li>
            </ul>
          </ListItem>
          <ListItem>
            Agrega la llave de Bob:
            <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li><strong>Name:</strong> <code>BOBSHELL_API_KEY</code></li>
              <li><strong>Value:</strong> <em>La llave provista en el laboratorio</em></li>
              <li><strong>Secured:</strong> ✅ Sí</li>
            </ul>
          </ListItem>
        </OrderedList>
        <InlineNotification
          kind="info"
          lowContrast
          hideCloseButton
          title="Variables simplificadas"
          subtitle="Solo necesitas estas dos variables. No es necesario configurar variables adicionales de autenticación básica como BITBUCKET_USERNAME o BITBUCKET_API_KEY."
          style={{ marginTop: '1rem', marginBottom: 0 }}
        />
      </Tile>

      <InlineNotification
        kind="info"
        title="¡Habilita los Pipelines!"
        subtitle="Por defecto, Bitbucket Pipelines está deshabilitado en repositorios nuevos. Ve a Repository settings > Pipelines > Settings y activa 'Enable Pipelines'. Asegúrate de que el archivo bitbucket-pipelines.yml esté en la raíz del repositorio."
        lowContrast
        hideCloseButton
      />
    </div>
  );
};

export default SetupGuide;
