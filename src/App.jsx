import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import {
  Header,
  HeaderName,
  HeaderGlobalBar,
  HeaderMenuButton,
  SideNav,
  SideNavItems,
  SideNavLink,
  Content,
  Theme
} from '@carbon/react';

// Pages
import Introduction from './pages/Introduction';
import Architecture from './pages/Architecture';
import SetupGuide from './pages/SetupGuide';
import Workflows from './pages/Workflows';
import Skills from './pages/Skills';
import PracticalLab from './pages/PracticalLab';

const App = () => {
  const location = useLocation();
  const [isSideNavExpanded, setIsSideNavExpanded] = useState(true);

  return (
    <Theme theme="g100">
      <Header aria-label="Bob Shell Lab">
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={() => setIsSideNavExpanded(!isSideNavExpanded)}
          isActive={isSideNavExpanded}
        />
        <HeaderName href="/" prefix="IBM">
          Bob Shell + GitHub Actions Lab
        </HeaderName>
        <HeaderGlobalBar />
      </Header>
      
      {isSideNavExpanded && (
        <SideNav 
          isFixedNav={false}
          expanded={true} 
          isChildOfHeader={false} 
          aria-label="Side navigation"
        >
          <SideNavItems>
          <SideNavLink renderIcon={() => null} as={Link} to="/" isActive={location.pathname === '/'}>
            1. Introducción
          </SideNavLink>
          <SideNavLink renderIcon={() => null} as={Link} to="/arquitectura" isActive={location.pathname === '/arquitectura'}>
            2. Arquitectura
          </SideNavLink>
          <SideNavLink renderIcon={() => null} as={Link} to="/setup" isActive={location.pathname === '/setup'}>
            3. Setup del Laboratorio
          </SideNavLink>
          <SideNavLink renderIcon={() => null} as={Link} to="/workflows" isActive={location.pathname === '/workflows'}>
            4. Workflows Detallados
          </SideNavLink>
          <SideNavLink renderIcon={() => null} as={Link} to="/skills" isActive={location.pathname === '/skills'}>
            5. Configuración de Skills
          </SideNavLink>
          <SideNavLink renderIcon={() => null} as={Link} to="/practica" isActive={location.pathname === '/practica'}>
            6. Práctica (Retos)
          </SideNavLink>
          </SideNavItems>
        </SideNav>
      )}

      <Content id="main-content" style={{ minHeight: '100vh', backgroundColor: '#f4f4f4', padding: '3rem', marginLeft: isSideNavExpanded ? '16rem' : '0', transition: 'margin-left 0.11s cubic-bezier(0.2, 0, 0.38, 0.9)' }}>
        <Theme theme="white">
          <Routes>
            <Route path="/" element={<Introduction />} />
            <Route path="/arquitectura" element={<Architecture />} />
            <Route path="/setup" element={<SetupGuide />} />
            <Route path="/workflows" element={<Workflows />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/practica" element={<PracticalLab />} />
          </Routes>
        </Theme>
      </Content>
    </Theme>
  );
};

export default App;
