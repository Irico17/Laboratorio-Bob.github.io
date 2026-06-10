import React from 'react';
import { Tile, OrderedList, ListItem, CodeSnippet, InlineNotification } from '@carbon/react';

const SetupGuide = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', paddingBottom: '4rem' }}>
      <h1 className="cds--heading-expressive-05" style={{ marginBottom: '1.5rem', marginTop: '2rem' }}>
        Preparación del Laboratorio (Setup)
      </h1>
      
      <p className="cds--body-long-01" style={{ marginBottom: '2rem' }}>
        Para garantizar que los flujos de trabajo automatizados se ejecuten sin restricciones de permisos (algo común en los "forks" estándar de GitHub), vamos a clonar el código base y subirlo a un repositorio completamente nuevo bajo tu control.
      </p>

      <Tile style={{ marginBottom: '2rem' }}>
        <h3 className="cds--heading-expressive-03" style={{ marginBottom: '1rem' }}>Fase 1: Clonación y Creación de tu Repositorio</h3>
        <OrderedList>
          <ListItem>Crea un repositorio <strong>vacío</strong> y público en tu cuenta de GitHub (ej. <code>bob-lab-practica</code>).</ListItem>
          <ListItem>
            Abre tu terminal y clona el repositorio base oficial a tu máquina local:
            <CodeSnippet type="multi" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
{`git clone https://github.com/Irico17/bob-shell-integration.git
cd bob-shell-integration`}
            </CodeSnippet>
          </ListItem>
          <ListItem>
            Cambia la URL remota apuntando a tu nuevo repositorio vacío:
            <CodeSnippet type="multi" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
{`git remote set-url origin https://github.com/TU_USUARIO/bob-lab-practica.git`}
            </CodeSnippet>
          </ListItem>
          <ListItem>
            Sube todas las ramas (incluyendo \`dev\`) a tu nuevo repositorio:
            <CodeSnippet type="multi" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
{`git push -u origin --all`}
            </CodeSnippet>
          </ListItem>
        </OrderedList>
      </Tile>

      <Tile style={{ marginBottom: '2rem' }}>
        <h3 className="cds--heading-expressive-03" style={{ marginBottom: '1rem' }}>Fase 2: Creación de Tokens</h3>
        <p className="cds--body-long-01" style={{ marginBottom: '1rem' }}>
          La magia de este laboratorio ocurre porque Bob puede leer tu código e interactuar con la API de GitHub en tu nombre. Para ello, necesita permisos.
        </p>

        <h4 className="cds--heading-expressive-02" style={{ marginBottom: '0.5rem' }}>A. Token de GitHub (\`GH_PAT\`)</h4>
        <OrderedList style={{ marginBottom: '1.5rem' }}>
          <ListItem>En GitHub, haz clic en tu foto de perfil &gt; <strong>Settings</strong>.</ListItem>
          <ListItem>Entra a <strong>Developer settings</strong> &gt; <strong>Personal access tokens</strong> &gt; <strong>Tokens (classic)</strong>.</ListItem>
          <ListItem>Clic en <strong>Generate new token (classic)</strong>.</ListItem>
          <ListItem>Asígnale el nombre <code>Bob Lab Token</code> y selecciona el scope <strong>\`repo\`</strong> (Full control of private repositories).</ListItem>
          <ListItem>Genera el token y cópialo en un lugar seguro (inicia con <code>ghp_</code>).</ListItem>
        </OrderedList>

        <h4 className="cds--heading-expressive-02" style={{ marginBottom: '0.5rem' }}>B. Llave de Bob Shell (\`BOBSHELL_API_KEY\`)</h4>
        <p className="cds--body-long-01">
          Solicita al instructor del laboratorio tu llave de acceso para la API de IBM Bob Shell.
        </p>
      </Tile>

      <Tile style={{ marginBottom: '2rem' }}>
        <h3 className="cds--heading-expressive-03" style={{ marginBottom: '1rem' }}>Fase 3: Configuración de Secrets</h3>
        <OrderedList>
          <ListItem>Ve a la página principal de tu <strong>nuevo repositorio</strong> en GitHub.</ListItem>
          <ListItem>Haz clic en <strong>Settings</strong> &gt; <strong>Secrets and variables</strong> &gt; <strong>Actions</strong>.</ListItem>
          <ListItem>Clic en <strong>New repository secret</strong>.</ListItem>
          <ListItem>
            Agrega tu token de GitHub:
            <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem', marginBottom: '0.5rem' }}>
              <li><strong>Name:</strong> <code>GH_PAT</code></li>
              <li><strong>Secret:</strong> <em>Tu token ghp_...</em></li>
            </ul>
          </ListItem>
          <ListItem>
            Agrega la llave de Bob:
            <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li><strong>Name:</strong> <code>BOBSHELL_API_KEY</code></li>
              <li><strong>Secret:</strong> <em>La llave provista por IBM</em></li>
            </ul>
          </ListItem>
        </OrderedList>
      </Tile>

      <InlineNotification
        kind="info"
        title="¡Habilita las Actions!"
        subtitle="Por defecto, GitHub suele pedirte que confirmes la ejecución de workflows en repositorios nuevos. Ve a la pestaña 'Actions' de tu repositorio y haz clic en el botón verde 'I understand my workflows, go ahead and enable them' si te aparece."
        lowContrast
        hideCloseButton
      />
    </div>
  );
};

export default SetupGuide;
