import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Table } from '../../components';
import { Container, Header, Title } from './styles';

import * as BattleService from '../../services/BattleService';


const headerTable = [
  {
    value: 'Herói',
    dataIndex: 'heroName'
  },
  {
    value: 'Classe Herói',
    dataIndex: 'classHero'
  },
  {
    value: 'Monstro',
    dataIndex: 'monsterName'
  },
  {
    value: 'Classe Monstro',
    dataIndex: 'dangerLevel'
  },
  {
    value: 'Latitude',
    dataIndex: 'latitude'
  },
  {
    value: 'Longitude',
    dataIndex: 'longitude'
  }
];

function Battles() {
  const [battles, setBattles] = useState([]);

  useEffect(() => {
    async function getBattle() {
      try {
        const response = await BattleService.list();
        setBattles(response);
      } catch (err) {
        toast.error(err.mensage);
      }
    }
    getBattle();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Lista de Batalhas</Title>
      </Header>
      <Table
        header={headerTable}
        data={battles}
      />
    </Container>
  )
}

export default Battles;

