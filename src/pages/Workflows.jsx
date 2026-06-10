import React from 'react';
import { Accordion, AccordionItem, Tile, CodeSnippet } from '@carbon/react';

const Workflows = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', paddingBottom: '4rem' }}>
      <h1 className="cds--heading-expressive-05" style={{ marginBottom: '1.5rem', marginTop: '2rem' }}>
        Workflows Automatizados (A fondo)
      </h1>
      
      <p className="cds--body-long-01" style={{ marginBottom: '2rem' }}>
        A diferencia de los laboratorios tradicionales donde ejecutas comandos manualmente, aquí el protagonista es <strong>GitHub Actions</strong>. Hemos configurado eventos que "despiertan" a Bob Shell en el servidor, permitiéndole analizar tu código automáticamente.
      </p>

      <Tile style={{ marginBottom: '2rem', backgroundColor: '#e5f6ff' }}>
        <h3 className="cds--heading-expressive-03" style={{ marginBottom: '1rem' }}>Conceptos Básicos de GitHub Actions</h3>
        <p className="cds--body-long-01" style={{ marginBottom: '1rem' }}>
          Para entender los archivos <code>.yml</code> de la carpeta <code>.github/workflows</code>, debes conocer su nomenclatura básica:
        </p>
        <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', marginBottom: '1rem' }} className="cds--list--unordered">
          <li><strong>Triggers (<code>on:</code>)</strong>: Es el evento que dispara el workflow. Puede ser un <code>push</code>, la creación de un <code>pull_request</code>, o manual (<code>workflow_dispatch</code>).</li>
          <li><strong>Jobs</strong>: Representan un conjunto de tareas que se ejecutan en un <em>Runner</em> (un servidor de GitHub).</li>
          <li><strong>Steps</strong>: Son los comandos individuales dentro de un Job. Aquí es donde descargamos Bob, leemos los archivos y ejecutamos los análisis.</li>
        </ul>
      </Tile>

      <h2 className="cds--heading-expressive-04" style={{ marginBottom: '1rem' }}>Anatomía de un Workflow con Bob</h2>
      <Tile style={{ marginBottom: '2rem' }}>
        <p className="cds--body-long-01" style={{ marginBottom: '1rem' }}>
          Veamos un ejemplo de código real (como el que está en <code>review-pr-with-skills.yml</code>) para entender las partes clave del código que le da vida a Bob y cómo agregar tus propias Skills:
        </p>
        
        <h4 className="cds--heading-expressive-02" style={{ marginBottom: '0.5rem' }}>1. Clonar el Código</h4>
        <CodeSnippet type="multi" style={{ marginBottom: '1rem' }}>
{`- name: Checkout code
  uses: actions/checkout@v4
  with:
    fetch-depth: 0`}
        </CodeSnippet>
        <p className="cds--body-long-01" style={{ marginBottom: '1.5rem' }}>
          Este paso estándar de GitHub Actions descarga el código de tu repositorio al servidor (Runner) para que Bob pueda leerlo. El <code>fetch-depth: 0</code> asegura que se traiga todo el historial, necesario para que Bob pueda comparar qué código es nuevo y qué código es viejo.
        </p>

        <h4 className="cds--heading-expressive-02" style={{ marginBottom: '0.5rem' }}>2. Construir el Prompt y Ejecutar Bob</h4>
        <CodeSnippet type="multi" style={{ marginBottom: '1rem' }}>
{`- name: Execute Bob
  env:
    BOBSHELL_API_KEY: \${{ secrets.BOBSHELL_API_KEY }}
  run: |
    # 1. Leer el código y la skill
    CODE=$(cat archivo.py)
    SKILL=$(cat .bob/skills/code-review/SKILL.md)
    
    # 2. Construir el prompt
    PROMPT="Analiza este código usando estas reglas:
    $SKILL
    
    Código:
    $CODE"
    
    # 3. Ejecutar Bob
    bob --accept-license --yolo -p "$PROMPT"`}
        </CodeSnippet>
        <p className="cds--body-long-01">
          <strong>Aquí ocurre la magia:</strong>
          <br/><br/>
          Primero, inyectamos la llave secreta en el entorno (<code>env:</code>) para que Bob pueda autenticarse. Luego, en lugar de comandos inventados, construimos un <strong>Prompt</strong> masivo. Leemos el contenido de los archivos fuente y le concatenamos el texto de nuestras reglas (Skills).
          <br/><br/>
          Finalmente llamamos a <code>bob -p "$PROMPT"</code> (o usando tuberías con <code>&lt; archivo_prompt.txt</code>) para que procese todo de una vez.
          <br/><br/>
          <strong>¿Cómo agregas tu propia Skill al Workflow?</strong> Es tan sencillo como cambiar la ruta de donde se lee la skill en el código de arriba. En lugar de <code>cat .bob/skills/code-review/SKILL.md</code>, lo cambias por la ruta de tu nueva creación: <code>cat .bob/skills/mi-nueva-skill/SKILL.md</code>. Bob ingerirá esas instrucciones y las aplicará inmediatamente al análisis.
        </p>
      </Tile>

      <h2 className="cds--heading-expressive-04" style={{ marginBottom: '1rem' }}>Análisis y Revisión de Código</h2>
      <Accordion style={{ marginBottom: '2rem' }}>
        <AccordionItem title="Deep Branch Review (Análisis profundo)">
          <p className="cds--body-long-01" style={{ marginBottom: '1rem' }}>
            <strong>Activación:</strong> Manual (Pestaña Actions &gt; Run Workflow).
          </p>
          <p className="cds--body-long-01" style={{ marginBottom: '1rem' }}>
            <strong>Cómo funciona:</strong> Este workflow recorre toda la rama seleccionada buscando archivos fuente (Python, JS, etc.). En lugar de enviarle a Bob todo de golpe (lo cual rebasaría la memoria), divide los archivos en pequeños lotes y los envía a Bob a través de <code>stdin</code>. Bob aplica todas las reglas de las <em>Skills</em> y finalmente emite un reporte masivo.
          </p>
          <p className="cds--body-long-01">
            <strong>Resultado:</strong> Crea un Issue resumen en tu repositorio y sube un <em>Artifact</em> con el detalle línea por línea de las vulnerabilidades encontradas.
          </p>
        </AccordionItem>

        <AccordionItem title="Review Commit on Push">
          <p className="cds--body-long-01" style={{ marginBottom: '1rem' }}>
            <strong>Activación:</strong> Automática (Al hacer <code>git push</code>).
          </p>
          <p className="cds--body-long-01">
            <strong>Cómo funciona:</strong> Es un escáner de impacto quirúrgico. Cuando subes código, este workflow extrae exclusivamente el <em>git diff</em> (solo lo que cambiaste). Se lo entrega a Bob para evaluar si ese cambio específico introdujo un bug. Si lo encuentra, sube un reporte de salud a los <em>Step Summaries</em> de Actions.
          </p>
        </AccordionItem>

        <AccordionItem title="Review PR with Skills">
          <p className="cds--body-long-01" style={{ marginBottom: '1rem' }}>
            <strong>Activación:</strong> Por Etiqueta (Agregar <code>review-with-bob</code> a un PR).
          </p>
          <p className="cds--body-long-01">
            <strong>Cómo funciona:</strong> Bob lee la totalidad de los archivos modificados en un Pull Request. Se comporta como un revisor humano senior: busca problemas arquitectónicos y de seguridad, y luego comenta directamente en el Pull Request indicando por qué el código podría fallar en producción.
          </p>
        </AccordionItem>
      </Accordion>

      <h2 className="cds--heading-expressive-04" style={{ marginBottom: '1rem' }}>Gestión, Triaje y Resolución</h2>
      <Accordion>
        <AccordionItem title="Label New Issues (Triaje Inteligente)">
          <p className="cds--body-long-01" style={{ marginBottom: '1rem' }}>
            <strong>Cómo funciona:</strong> Cuando un usuario reporta un problema (Issue), Bob evalúa el texto del reporte. Utiliza un <em>prompt</em> que contiene todas las etiquetas válidas del repositorio, y deduce cuál le corresponde (ej. "bug", "security"). Luego usa la API de GitHub CLI (<code>gh api</code>) para asignar la etiqueta sin intervención humana.
          </p>
        </AccordionItem>

        <AccordionItem title="Fix Issues with Bob (Resolución Automática)">
          <p className="cds--body-long-01" style={{ marginBottom: '1rem' }}>
            <strong>Activación:</strong> Agregar la etiqueta <code>fix-with-bob</code> a un Issue.
          </p>
          <p className="cds--body-long-01">
            <strong>Cómo funciona:</strong> ¡Esta es la automatización más avanzada! Bob lee el Issue. Luego, analiza la base de código entera para entender dónde reside el bug. Procede a escribir el código para parchear la vulnerabilidad. Finalmente, el workflow hace commit de esos cambios en una rama nueva y abre un <strong>Pull Request</strong> automáticamente para que tú lo apruebes.
          </p>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Workflows;
