import { useNavigate } from 'react-router-dom';
import { Grid, Column, Tile, ClickableTile } from '@carbon/react';
import { ChartRelationship, FlowConnection, Bot, ArrowRight, Time } from '@carbon/icons-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ paddingBottom: '4rem' }}>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <div className="hero-banner">
        <div className="hero-banner__content">
          <span className="hero-banner__eyebrow">IBM Bob · Bitbucket Pipelines</span>
          <h1 className="cds--heading-expressive-06 hero-banner__title">
            Lleva la IA a todo el ciclo de vida del software
          </h1>
          <p className="cds--body-long-02 hero-banner__lede">
            Dos laboratorios prácticos para orquestar a <strong>IBM Bob</strong> — el
            agente de IA para el SDLC — desde tu terminal y dentro de tus pipelines:
            arquitectura, skills, revisión de código y corrección automática de issues.
          </p>
          <div className="hero-banner__badges">
            <span className="hero-pill hero-pill--lab3"><Time size={16} /> Lab 3 · 20 min</span>
            <span className="hero-pill hero-pill--lab4"><Time size={16} /> Lab 4 · 40 min</span>
          </div>
        </div>
      </div>

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
              Bob (GA desde abril de 2026) es un agente de IA que trabaja en todo el SDLC:
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
              Skills + multi-modelo + gobernanza
            </h3>
            <p className="cds--body-long-01">
              Bob enruta cada tarea al modelo adecuado (Anthropic Claude, Mistral, IBM
              Granite) y usa <strong>Skills</strong>: instrucciones reutilizables que lo
              especializan. En estos labs lo conectamos a <strong>Bitbucket Pipelines</strong>{' '}
              para que actúe como revisor de código y QA autónomo.
            </p>
          </Tile>
        </Column>
      </Grid>

      {/* ── Tarjetas de laboratorio ──────────────────────────── */}
      <Grid style={{ marginBottom: '1rem' }}>
        <Column sm={4} md={8} lg={16}>
          <h2 className="cds--heading-expressive-04" style={{ marginBottom: '1rem' }}>
            Los dos laboratorios
          </h2>
        </Column>
      </Grid>
      <Grid narrow>
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
              Agenda de la sesión (60 min)
            </h3>
            <ul className="agenda-list">
              <li><span className="agenda-list__dot agenda-list__dot--lab3" /> <strong>Lab 3 (20 min):</strong> Parte A — Bob crudo sobre arquitectura (5′) · Parte B — crea tu primera Skill (10′) · Parte C — re-ejecuta con la Skill y compara (5′).</li>
              <li><span className="agenda-list__dot agenda-list__dot--lab4" /> <strong>Lab 4 (40 min):</strong> Setup de tokens (8′) · Arquitectura &amp; pipelines (10′) · Retos en vivo (18′) · Cierre (4′).</li>
            </ul>
          </Tile>
        </Column>
      </Grid>
    </div>
  );
};

export default Home;
