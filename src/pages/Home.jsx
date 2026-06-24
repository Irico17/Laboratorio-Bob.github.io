import { useNavigate } from 'react-router-dom';
import { Grid, Column, Tile, ClickableTile } from '@carbon/react';
import { ChartRelationship, FlowConnection, Bot, ArrowRight, Time, Document, Code } from '@carbon/icons-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ paddingBottom: '4rem' }}>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <div className="hero-banner">
        <div className="hero-banner__content">
          <span className="hero-banner__eyebrow">IBM Bob · Laboratorios Prácticos</span>
          <h1 className="cds--heading-expressive-06 hero-banner__title">
            Lleva la IA a todo el ciclo de vida del software
          </h1>
          <p className="cds--body-long-02 hero-banner__lede">
            Cuatro laboratorios prácticos para orquestar a <strong>IBM Bob</strong> — el
            agente de IA para el SDLC — desde tu terminal y dentro de tus pipelines:
            documentación, desarrollo seguro, arquitectura, skills, revisión de código y corrección automática de issues.
          </p>
          <div className="hero-banner__badges">
            <span className="hero-pill hero-pill--lab1"><Time size={16} /> Lab 1 · 20 min</span>
            <span className="hero-pill hero-pill--lab2"><Time size={16} /> Lab 2 · 20 min</span>
            <span className="hero-pill hero-pill--lab3"><Time size={16} /> Lab 3 · 20 min</span>
            <span className="hero-pill hero-pill--lab4"><Time size={16} /> Lab 4 · 40 min</span>
          </div>
        </div>
      </div>

      {/* ── Requisitos y Descargas ───────────────────────────── */}
      <Grid style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
        <Column sm={4} md={8} lg={16}>
          <h2 className="cds--heading-expressive-04" style={{ marginBottom: '1rem' }}>
            Requisitos y Descargas
          </h2>
        </Column>
      </Grid>
      <Grid style={{ marginBottom: '2.5rem' }} narrow>
        <Column sm={4} md={4} lg={8} style={{ paddingRight: '1rem', marginBottom: '1rem' }}>
          <Tile style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <Code size={28} style={{ color: '#24a148', marginBottom: '0.75rem' }} />
              <h3 className="cds--heading-expressive-03" style={{ marginBottom: '0.75rem' }}>
                IBM Bob
              </h3>
              <p className="cds--body-long-01" style={{ marginBottom: '1.5rem' }}>
                Descarga e instala IBM Bob en tu entorno local para poder realizar las actividades guiadas.
              </p>
            </div>
            <a 
              href="https://bob.ibm.com/download" 
              target="_blank" 
              rel="noreferrer" 
              className="cds--btn cds--btn--secondary"
              style={{ width: '100%', textAlign: 'center', display: 'inline-block', textDecoration: 'none' }}
            >
              Descargar IBM Bob
            </a>
          </Tile>
        </Column>
        <Column sm={4} md={4} lg={8} style={{ marginBottom: '1rem' }}>
          <Tile style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <Document size={28} style={{ color: '#0f62fe', marginBottom: '0.75rem' }} />
              <h3 className="cds--heading-expressive-03" style={{ marginBottom: '0.75rem' }}>
                Bases de Código para Laboratorios
              </h3>
              <p className="cds--body-long-01" style={{ marginBottom: '1.5rem' }}>
                Descarga el código base vulnerable y estructurado para realizar los retos locales paso a paso.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a 
                href={`${import.meta.env.BASE_URL}downloads/lab1-2.zip`}
                download="lab1-2-app-vulnerable.zip"
                className="cds--btn cds--btn--primary"
                style={{ flex: 1, textAlign: 'center', textDecoration: 'none', padding: '0.75rem 0.5rem', fontSize: '0.875rem' }}
              >
                Descargar Labs 1 &amp; 2
              </a>
              <a 
                href={`${import.meta.env.BASE_URL}downloads/lab3.zip`}
                download="lab3-app-arquitectura.zip"
                className="cds--btn cds--btn--primary"
                style={{ flex: 1, textAlign: 'center', textDecoration: 'none', padding: '0.75rem 0.5rem', fontSize: '0.875rem' }}
              >
                Descargar Lab 3
              </a>
            </div>
          </Tile>
        </Column>
      </Grid>

      {/* ── ¿Qué es Bob? ─────────────────────────────────────── */}
      <Grid style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
        <Column sm={4} md={8} lg={16}>
          <h2 className="cds--heading-expressive-04" style={{ marginBottom: '1rem' }}>
            ¿Qué es IBM Bob?
          </h2>
        </Column>
      </Grid>
      <Grid style={{ marginBottom: '2.5rem' }} narrow>
        <Column sm={4} md={4} lg={8} style={{ paddingRight: '1rem', marginBottom: '1rem' }}>
          <Tile style={{ height: '100%' }}>
            <Bot size={28} style={{ color: '#0f62fe', marginBottom: '0.75rem' }} />
            <h3 className="cds--heading-expressive-03" style={{ marginBottom: '0.75rem' }}>
              Un compañero de desarrollo, no un chatbot
            </h3>
            <p className="cds--body-long-01">
              Bob es un agente de IA que trabaja en todo el SDLC:
              planificar, diseñar, codear, testear y modernizar. Su CLI <strong>Bob Shell</strong>{' '}
              vive en tu terminal, lee múltiples archivos, razona sobre arquitectura y
              seguridad, y deja un registro auto-documentado de cada acción.
            </p>
          </Tile>
        </Column>
        <Column sm={4} md={4} lg={8} style={{ marginBottom: '1rem' }}>
          <Tile style={{ height: '100%' }}>
            <FlowConnection size={28} style={{ color: '#8a3ffc', marginBottom: '0.75rem' }} />
            <h3 className="cds--heading-expressive-03" style={{ marginBottom: '0.75rem' }}>
              Skills + gobernanza
            </h3>
            <p className="cds--body-long-01">
              Bob usa <strong>Skills</strong>: instrucciones reutilizables que lo
              especializan para tareas específicas. En este laboratorio lo conectamos con <strong>Bitbucket Pipelines</strong>{' '}
              para que actúe como revisor de código autónomo y resuelva issues automáticamente.
            </p>
          </Tile>
        </Column>
      </Grid>

      {/* ── Tarjetas de laboratorio ──────────────────────────── */}
      <Grid style={{ marginBottom: '1rem' }}>
        <Column sm={4} md={8} lg={16}>
          <h2 className="cds--heading-expressive-04" style={{ marginBottom: '1rem' }}>
            Laboratorios Prácticos
          </h2>
        </Column>
      </Grid>
      <Grid narrow>
        <Column sm={4} md={4} lg={8} style={{ paddingRight: '1rem', marginBottom: '1rem' }}>
          <ClickableTile
            className="lab-card lab-card--lab1"
            onClick={() => navigate('/lab1')}
          >
            <div className="lab-card__top">
              <Document size={32} />
              <span className="lab-card__time">20 min</span>
            </div>
            <h3 className="cds--heading-expressive-03">Lab 1 · Documentación de Código</h3>
            <p className="cds--body-long-01" style={{ flexGrow: 1 }}>
              Explora una base de código desconocida usando el modo Ask y genera especificaciones API y README completos usando el modo Plan de forma automatizada.
            </p>
            <span className="lab-card__cta">Empezar Lab 1 <ArrowRight size={16} /></span>
          </ClickableTile>
        </Column>
        <Column sm={4} md={4} lg={8} style={{ paddingRight: '1rem', marginBottom: '1rem' }}>
          <ClickableTile
            className="lab-card lab-card--lab2"
            onClick={() => navigate('/lab2')}
          >
            <div className="lab-card__top">
              <Code size={32} />
              <span className="lab-card__time">20 min</span>
            </div>
            <h3 className="cds--heading-expressive-03">Lab 2 · Desarrollo &amp; Mejora</h3>
            <p className="cds--body-long-01" style={{ flexGrow: 1 }}>
              Detecta y corrige vulnerabilidades críticas (SQL Injection, XSS, secretos) en una aplicación vulnerable usando el modo Plan y Agent.
            </p>
            <span className="lab-card__cta">Empezar Lab 2 <ArrowRight size={16} /></span>
          </ClickableTile>
        </Column>
        <Column sm={4} md={4} lg={8} style={{ paddingRight: '1rem', marginBottom: '1rem' }}>
          <ClickableTile
            className="lab-card lab-card--lab3"
            onClick={() => navigate('/lab3')}
          >
            <div className="lab-card__top">
              <ChartRelationship size={32} />
              <span className="lab-card__time">20 min</span>
            </div>
            <h3 className="cds--heading-expressive-03">Lab 3 · Arquitectura &amp; Skills</h3>
            <p className="cds--body-long-01" style={{ flexGrow: 1 }}>
              Analiza y mejora la arquitectura de una app con Bob crudo, crea tu primera
              Skill y mide el salto de calidad al re-ejecutar la tarea con ella.
            </p>
            <span className="lab-card__cta">Empezar Lab 3 <ArrowRight size={16} /></span>
          </ClickableTile>
        </Column>
        <Column sm={4} md={4} lg={8} style={{ marginBottom: '1rem' }}>
          <ClickableTile
            className="lab-card lab-card--lab4"
            onClick={() => navigate('/lab4/setup')}
          >
            <div className="lab-card__top">
              <FlowConnection size={32} />
              <span className="lab-card__time">40 min</span>
            </div>
            <h3 className="cds--heading-expressive-03">Lab 4 · Bitbucket Pipelines</h3>
            <p className="cds--body-long-01" style={{ flexGrow: 1 }}>
              Integra Bob en CI/CD: revisión automática de PRs, comandos <code>/bob</code> en
              comentarios, y corrección de issues que abre PRs documentados — todo sin salir
              de Bitbucket.
            </p>
            <span className="lab-card__cta">Empezar Lab 4 <ArrowRight size={16} /></span>
          </ClickableTile>
        </Column>
      </Grid>

      {/* ── Agenda ───────────────────────────────────────────── */}
      <Grid style={{ marginTop: '1.5rem' }}>
        <Column sm={4} md={8} lg={16}>
          <Tile style={{ backgroundColor: '#edf5ff' }}>
            <h3 className="cds--heading-expressive-03" style={{ marginBottom: '1rem' }}>
              Agenda de la sesión
            </h3>
            <ul className="agenda-list">
              <li><span className="agenda-list__dot agenda-list__dot--lab1" /> <strong>Lab 1 (20 min):</strong> Exploración con Ask (10′) · Documentación y README con Plan (10′).</li>
              <li><span className="agenda-list__dot agenda-list__dot--lab2" /> <strong>Lab 2 (20 min):</strong> Análisis con Plan (10′) · Corrección de SQLi, XSS y secretos con Agent (10′).</li>
              <li><span className="agenda-list__dot agenda-list__dot--lab3" /> <strong>Lab 3 (20 min):</strong> Bob crudo sobre arquitectura (5′) · Crear Skill (10′) · Re-ejecutar con Skill (5′).</li>
              <li><span className="agenda-list__dot agenda-list__dot--lab4" /> <strong>Lab 4 (40 min):</strong> Setup de tokens (8′) · Arquitectura &amp; pipelines (10′) · Retos en vivo (18′) · Cierre (4′).</li>
            </ul>
          </Tile>
        </Column>
      </Grid>
    </div>
  );
};

export default Home;

