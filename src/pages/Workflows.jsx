import React from 'react';
import { Accordion, AccordionItem, Tile, StructuredListWrapper, StructuredListHead, StructuredListRow, StructuredListCell, StructuredListBody } from '@carbon/react';

const Workflows = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', paddingBottom: '4rem' }}>
      <h1 className="cds--heading-expressive-05" style={{ marginBottom: '1.5rem', marginTop: '2rem' }}>
        Workflows Automatizados (A fondo)
      </h1>
      
      <p className="cds--body-long-01" style={{ marginBottom: '2rem' }}>
        A diferencia de los laboratorios tradicionales donde ejecutas comandos manualmente, aquí el protagonista es <strong>GitHub Actions</strong>. Hemos configurado eventos que "despiertan" a Bob Shell en el servidor, permitiéndole analizar tu código automáticamente.
      </p>

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
