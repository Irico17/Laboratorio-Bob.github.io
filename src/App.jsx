import { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import {
  Header,
  HeaderName,
  HeaderGlobalBar,
  HeaderMenuButton,
  SideNav,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem,
  Content,
  Theme,
} from '@carbon/react';
import {
  Home as HomeIcon,
  ChartRelationship,
  FlowConnection,
  Settings,
  Application,
  Rocket,
} from '@carbon/icons-react';

// Pages
import Home from './pages/Home';
import Lab3 from './pages/Lab3';
import Architecture from './pages/Architecture';
import SetupGuide from './pages/SetupGuide';
import Workflows from './pages/Workflows';
import PracticalLab from './pages/PracticalLab';

const App = () => {
  const location = useLocation();
  const path = location.pathname;
  const [isSideNavExpanded, setIsSideNavExpanded] = useState(true);
  const isLab4 = path.startsWith('/lab4');

  return (
    <Theme theme="g100">
      <Header aria-label="Bob Shell Lab">
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={() => setIsSideNavExpanded(!isSideNavExpanded)}
          isActive={isSideNavExpanded}
        />
        <HeaderName href="#/" prefix="IBM">
          Bob × Bitbucket · Laboratorios
        </HeaderName>
        <HeaderGlobalBar />
      </Header>

      <SideNav
        isFixedNav={false}
        expanded={isSideNavExpanded}
        isChildOfHeader={false}
        aria-label="Side navigation"
      >
        <SideNavItems>
          <SideNavLink renderIcon={HomeIcon} as={Link} to="/" isActive={path === '/'}>
            Inicio
          </SideNavLink>

          <SideNavLink
            renderIcon={ChartRelationship}
            as={Link}
            to="/lab3"
            isActive={path === '/lab3'}
          >
            Lab 3 · Arquitectura &amp; Skills
          </SideNavLink>

          <SideNavMenu
            renderIcon={FlowConnection}
            title="Lab 4 · Bitbucket Pipelines"
            defaultExpanded={isLab4}
            isActive={isLab4}
          >
            <SideNavMenuItem as={Link} to="/lab4/setup" isActive={path === '/lab4/setup'}>
              <span className="subnav-item"><Settings size={16} /> 1 · Setup</span>
            </SideNavMenuItem>
            <SideNavMenuItem as={Link} to="/lab4/arquitectura" isActive={path === '/lab4/arquitectura'}>
              <span className="subnav-item"><ChartRelationship size={16} /> 2 · Arquitectura</span>
            </SideNavMenuItem>
            <SideNavMenuItem as={Link} to="/lab4/pipelines" isActive={path === '/lab4/pipelines'}>
              <span className="subnav-item"><Application size={16} /> 3 · Pipelines a fondo</span>
            </SideNavMenuItem>
            <SideNavMenuItem as={Link} to="/lab4/retos" isActive={path === '/lab4/retos'}>
              <span className="subnav-item"><Rocket size={16} /> 4 · Retos guiados</span>
            </SideNavMenuItem>
          </SideNavMenu>
        </SideNavItems>
      </SideNav>

      <Content
        id="main-content"
        style={{
          minHeight: '100vh',
          backgroundColor: '#f4f4f4',
          padding: '3rem',
          marginLeft: isSideNavExpanded ? '16rem' : '0',
          transition: 'margin-left 0.11s cubic-bezier(0.2, 0, 0.38, 0.9)',
        }}
      >
        <Theme theme="white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lab3" element={<Lab3 />} />
            <Route path="/lab4/arquitectura" element={<Architecture />} />
            <Route path="/lab4/setup" element={<SetupGuide />} />
            <Route path="/lab4/pipelines" element={<Workflows />} />
            <Route path="/lab4/retos" element={<PracticalLab />} />
          </Routes>
        </Theme>
      </Content>
    </Theme>
  );
};

export default App;
