import React from 'react';
import { Grid, Column, Tile } from '@carbon/react';

const Introduction = () => {
  return (
    <div style={{ paddingBottom: '4rem' }}>
      <Grid style={{ marginBottom: '2rem' }}>
        <Column sm={4} md={8} lg={12}>
          <h1 className="cds--heading-expressive-06" style={{ marginBottom: '1.5rem', marginTop: '2rem' }}>
            Laboratorio de Bob Shell + GitHub Actions
          </h1>
          <p className="cds--body-long-02" style={{ maxWidth: '800px', lineHeight: '1.6', marginBottom: '2rem' }}>
            Bienvenido a la guía interactiva del laboratorio. En este entorno, aprenderemos cómo la Inteligencia Artificial está revolucionando el ciclo de vida del desarrollo de software (SDLC) mediante la automatización de tareas cognitivas complejas.
          </p>

          <Tile style={{ backgroundColor: '#e5f6ff', marginBottom: '3rem' }}>
            <h3 className="cds--heading-expressive-03" style={{ marginBottom: '1rem' }}>
              El Objetivo del Laboratorio
            </h3>
            <p className="cds--body-long-01">
              El objetivo no es que escribas código desde cero, sino que <strong>orquestes la inteligencia artificial</strong>. Descubrirás cómo configurar a Bob Shell dentro de GitHub Actions para que actúe como un Ingeniero de Seguridad y Calidad autónomo, capaz de:
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginTop: '1rem', lineHeight: '1.8' }}>
              <li>Realizar revisiones profundas de código (Code Reviews).</li>
              <li>Etiquetar y categorizar automáticamente los Issues.</li>
              <li>Generar parches de código y Pull Requests para solucionar vulnerabilidades detectadas.</li>
            </ul>
          </Tile>
        </Column>
      </Grid>

      <Grid style={{ marginBottom: '3rem' }}>
        <Column sm={4} md={4} lg={6} style={{ marginBottom: '1.5rem' }}>
          <Tile style={{ height: '100%' }}>
            <h3 className="cds--heading-expressive-03" style={{ marginBottom: '1rem', color: '#0f62fe' }}>
              ¿Qué es Bob Shell?
            </h3>
            <p className="cds--body-long-01">
              Bob Shell es una herramienta de interfaz de línea de comandos (CLI) impulsada por inteligencia artificial. A diferencia de un chatbot tradicional, Bob Shell puede leer múltiples archivos a la vez, entender bases de código complejas y razonar sobre arquitectura y seguridad directamente desde la terminal del sistema operativo.
            </p>
          </Tile>
        </Column>

        <Column sm={4} md={4} lg={6} style={{ marginBottom: '1.5rem' }}>
          <Tile style={{ height: '100%' }}>
            <h3 className="cds--heading-expressive-03" style={{ marginBottom: '1rem', color: '#0f62fe' }}>
              ¿Qué son las GitHub Actions?
            </h3>
            <p className="cds--body-long-01">
              Es la plataforma de CI/CD nativa de GitHub. Permite ejecutar scripts automáticamente cada vez que ocurre un evento en el repositorio (como hacer push de código, crear un issue o abrir un Pull Request). En este laboratorio, Actions actúa como el orquestador que "despierta" a Bob Shell.
            </p>
          </Tile>
        </Column>
      </Grid>

      <Grid>
        <Column sm={4} md={8} lg={12}>
          <Tile style={{ marginBottom: '2rem' }}>
            <h3 className="cds--heading-expressive-03" style={{ marginBottom: '1rem' }}>
              Caso de Uso: Flujo de Calidad (QA) Automatizado
            </h3>
            <p className="cds--body-long-01" style={{ marginBottom: '1rem' }}>
              El flujo principal de este laboratorio simula un entorno real de QA y revisión de código:
            </p>
            <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8', marginBottom: '1rem' }} className="cds--list--ordered">
              <li>Un desarrollador envía código nuevo a través de un <strong>Pull Request (PR)</strong>.</li>
              <li>El revisor (tú) agrega una etiqueta específica al PR (por ejemplo, <code>review-with-bob</code>).</li>
              <li>Esto activa un <strong>Workflow</strong> en GitHub Actions que extrae el código y se lo envía a Bob junto con las reglas de negocio (Skills).</li>
              <li>Si Bob encuentra que el código está limpio, el PR puede ser aprobado. Si Bob detecta errores o malas prácticas, deja comentarios detallados recomendando el rechazo o los cambios necesarios.</li>
            </ol>
          </Tile>

          <Tile>
            <h3 className="cds--heading-expressive-03" style={{ marginBottom: '1rem' }}>
              Nuestra Aplicación de Prueba (demo-app)
            </h3>
            <p className="cds--body-long-01" style={{ marginBottom: '1rem' }}>
              Para que Bob tenga algo que revisar, el repositorio incluye un proyecto de prueba: una pequeña API de autenticación escrita en Python.
            </p>
            <p className="cds--body-long-01" style={{ marginBottom: '1rem' }}>
              <strong>Rama <code>main</code> (demo-app):</strong> Contiene el código seguro. Utiliza buenas prácticas como encriptación de contraseñas con sales criptográficas y consultas parametrizadas (Prepared Statements) para prevenir inyecciones SQL.
            </p>
            <p className="cds--body-long-01">
              <strong>Rama <code>dev</code> (demo-app-bad):</strong> Contiene una versión maliciosa y saboteada de la aplicación. Aquí encontrarás contraseñas guardadas en texto plano, concatenación directa de variables en consultas SQL (SQL Injection), y falta de validaciones de formato. Tu trabajo será usar los Workflows para que Bob audite esta rama, cace estos errores y proponga las correcciones.
            </p>
          </Tile>
        </Column>
      </Grid>
    </div>
  );
};

export default Introduction;
