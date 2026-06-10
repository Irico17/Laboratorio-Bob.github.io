import React from 'react';
import { Tile, OrderedList, ListItem, InlineNotification } from '@carbon/react';

const PracticalLab = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', paddingBottom: '4rem' }}>
      <h1 className="cds--heading-expressive-05" style={{ marginBottom: '1.5rem', marginTop: '2rem' }}>
        Laboratorio Práctico (Los Retos)
      </h1>
      
      <p className="cds--body-long-01" style={{ marginBottom: '2rem' }}>
        Ahora que tienes tu entorno configurado y entiendes cómo funciona Bob, es hora de poner a prueba la automatización. Asegúrate de estar trabajando sobre la rama <strong>\`dev\`</strong> de tu propio repositorio, ya que contiene el código vulnerable preparado para el laboratorio.
      </p>

      <Tile style={{ marginBottom: '1.5rem', borderLeft: '4px solid #0f62fe' }}>
        <h3 className="cds--heading-expressive-03" style={{ marginBottom: '1rem' }}>Reto 1: Activación por Push (Revisión Instantánea)</h3>
        <OrderedList>
          <ListItem>Abre el archivo <code>demo-app-bad/auth/login_bad.py</code> en la rama <code>dev</code>.</ListItem>
          <ListItem>Realiza una pequeña modificación (ej. añade un comentario) y haz <strong>commit y push</strong> a tu repositorio remoto.</ListItem>
          <ListItem>Dirígete a la pestaña <strong>Actions</strong> de tu repositorio en GitHub. Verás que el workflow <code>Review Commit on Push</code> se dispara instantáneamente.</ListItem>
          <ListItem>Abre el workflow y revisa el <strong>Step Summary</strong> para ver el veredicto de seguridad emitido por Bob.</ListItem>
        </OrderedList>
      </Tile>

      <Tile style={{ marginBottom: '1.5rem', borderLeft: '4px solid #0f62fe' }}>
        <h3 className="cds--heading-expressive-03" style={{ marginBottom: '1rem' }}>Reto 2: Triaje Automático de Issues</h3>
        <OrderedList>
          <ListItem>Ve a la pestaña <strong>Issues</strong> de tu repositorio y crea un nuevo Issue.</ListItem>
          <ListItem><strong>Título:</strong> <em>Fix SQL Injection vulnerability in login process</em></ListItem>
          <ListItem><strong>Descripción:</strong> <em>El proceso de login actual concatena strings de SQL directamente desde el input del usuario.</em></ListItem>
          <ListItem>Guarda el issue y actualiza la página después de ~30 segundos. ¡Bob le habrá asignado automáticamente etiquetas como <code>security</code> y <code>bug</code>!</ListItem>
        </OrderedList>
      </Tile>

      <Tile style={{ marginBottom: '1.5rem', borderLeft: '4px solid #0f62fe' }}>
        <h3 className="cds--heading-expressive-03" style={{ marginBottom: '1rem' }}>Reto 3: Auto-Fix (Resolución Automática por IA)</h3>
        <OrderedList>
          <ListItem>Vuelve al Issue que creaste en el Reto 2.</ListItem>
          <ListItem>Añade manualmente la etiqueta <strong><code>fix-with-bob</code></strong> al Issue.</ListItem>
          <ListItem>Ve a la pestaña <strong>Actions</strong>. Verás que se ejecuta <code>Fix Issues with Bob</code>.</ListItem>
          <ListItem>Cuando termine el workflow, ve a la pestaña <strong>Pull Requests</strong>. Bob habrá creado un PR de forma autónoma con el código modificado para solucionar la inyección SQL.</ListItem>
        </OrderedList>
      </Tile>

      <Tile style={{ marginBottom: '1.5rem', borderLeft: '4px solid #0f62fe' }}>
        <h3 className="cds--heading-expressive-03" style={{ marginBottom: '1rem' }}>Reto 4: Pull Request Review (Análisis Arquitectónico)</h3>
        <OrderedList>
          <ListItem>Abre un nuevo <strong>Pull Request</strong> comparando tu rama <code>dev</code> contra la rama <code>main</code>.</ListItem>
          <ListItem>En las opciones del PR a la derecha, añade la etiqueta <strong><code>review-with-bob</code></strong>.</ListItem>
          <ListItem>Espera a que el workflow finalice. Bob publicará un comentario extenso y estructurado directamente en el timeline del PR advirtiéndote sobre la deuda técnica de esa rama.</ListItem>
        </OrderedList>
      </Tile>

      <Tile style={{ marginBottom: '2rem', borderLeft: '4px solid #0f62fe' }}>
        <h3 className="cds--heading-expressive-03" style={{ marginBottom: '1rem' }}>Reto 5: Análisis Global del Repositorio</h3>
        <OrderedList>
          <ListItem>Ve a la pestaña <strong>Actions</strong> de GitHub.</ListItem>
          <ListItem>En el menú lateral izquierdo, selecciona <strong>Deep Branch Review</strong>.</ListItem>
          <ListItem>Haz clic en el botón gris <strong>Run workflow</strong> en la esquina derecha.</ListItem>
          <ListItem>Selecciona la rama <code>dev</code> y ejecútalo.</ListItem>
          <ListItem>Al terminar, ve a la pestaña de <strong>Issues</strong> para leer el reporte resumen, o descarga el archivo <strong>Artifact</strong> masivo desde la página del workflow run.</ListItem>
        </OrderedList>
      </Tile>

      <InlineNotification
        kind="success"
        title="¡Felicidades!"
        subtitle="Has integrado exitosamente inteligencia artificial generativa en todo el ciclo de vida del código."
        lowContrast
        hideCloseButton
      />
    </div>
  );
};

export default PracticalLab;
