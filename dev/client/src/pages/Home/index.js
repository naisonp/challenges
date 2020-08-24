import React, { useState } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import { Container, Header, Menu, Content } from './styles';
import { Heroes, Battle } from '../index';


function Home() {
  const [tab, setTab] = useState(1);

  const onSelectTab = (tab) => {
    setTab(tab);
  };

  return (
    <Container>
      <Header>
        <Menu selectedTab={tab}>
          <Link to='/heroes' className='link' onClick={(e) => onSelectTab(1)}>Heróis</Link>
          <Link to='/batalha' className='link' onClick={(e) => onSelectTab(2)}>Batalhas</Link>
        </Menu>
      </Header>
      <Content>
        <Switch>
          <Route exact path={'/heroes'} component={() => (<Heroes />)} />
          <Route path={'/batalha'} component={() => (<Battle />)} />
        </Switch>
      </Content>
    </Container>
  )
}

export default Home;
