import React from 'react';
import { Grid, Column, Tile } from '@carbon/react';

const Introduction = () => {
  return (
    <div style={{ paddingBottom: '4rem' }}>
      <Grid style={{ marginBottom: '3rem' }}>
        <Column sm={4} md={8} lg={12}>
          <h1 className="cds--heading-expressive-06" style={{ marginBottom: '1.5rem', marginTop: '2rem' }}>
            Laboratorio de Bob Shell + GitHub Actions
          </h1>
          <p className="cds--body-long-02" style={{ maxWidth: '800px', lineHeight: '1.6' }}>
            Bienvenido a la guía interactiva del laboratorio. En este entorno, aprenderemos cómo los Modelos de Lenguaje Grandes (LLMs) están revolucionando el ciclo de vida del desarrollo de software (SDLC) mediante la automatización de tareas cognitivas complejas.
          </p>
        </Column>
      </Grid>

      <Grid>
        <Column sm={4} md={4} lg={6} style={{ marginBottom: '1.5rem' }}>
          <Tile style={{ height: '100%' }}>
            <h3 className="cds--heading-expressive-03" style={{ marginBottom: '1rem', color: '#0f62fe' }}>
              ¿Qué es Bob Shell?
            </h3>
            <p className="cds--body-long-01">
              Bob Shell es una herramienta de interfaz de línea de comandos (CLI) respaldada por <strong>LLMs de IBM</strong>. A diferencia de un chatbot tradicional, Bob Shell puede leer múltiples archivos a la vez, entender bases de código complejas y razonar sobre arquitectura y seguridad directamente desde la terminal del sistema operativo.
            </p>
          </Tile>
        </Column>

        <Column sm={4} md={4} lg={6} style={{ marginBottom: '1.5rem' }}>
          <Tile style={{ height: '100%' }}>
            <h3 className="cds--heading-expressive-03" style={{ marginBottom: '1rem', color: '#0f62fe' }}>
              ¿Qué son las GitHub Actions?
            </h3>
            <p className="cds--body-long-01">
              Es la plataforma de CI/CD (Integración y Despliegue Continuo) nativa de GitHub. Permite ejecutar scripts automáticamente cada vez que ocurre un evento en el repositorio (como hacer push de código, crear un issue o abrir un Pull Request). En este laboratorio, Actions actúa como el orquestador que "despierta" a Bob Shell.
            </p>
          </Tile>
        </Column>

        <Column sm={4} md={8} lg={12}>
          <Tile style={{ backgroundColor: '#e5f6ff' }}>
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
    </div>
  );
};

export default Introduction;
