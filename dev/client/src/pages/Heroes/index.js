import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import io from 'socket.io-client';
import { Table, Button } from '../../components';
import DialogHeroCreate from './DialogHeroCreate';
import DialogHeroUpdate from './DialogHeroUpdate';
import { Container, Header, Title, Status } from './styles';

import * as HeroService from '../../services/HeroService';

const headerTable = [
  {
    value: 'Status',
    dataIndex: 'allocated',
    render(allocated) {
      return (<Status status={allocated} />);
    },
  },
  {
    value: 'Nome',
    dataIndex: 'name',
  },
  {
    value: 'Classe',
    dataIndex: 'class',
  },
  {
    value: 'Latitude',
    dataIndex: 'latitude',
  },
  {
    value: 'Longitude',
    dataIndex: 'longitude',
  }

];

function Heroes() {
  const [openDialogHeroCreate, setOpenDialogHeroCreate] = useState(false);
  const [openDialogHeroUpdate, setOpenDialogHeroUpdate] = useState(false);
  const [heroes, setHeroes] = useState([]);
  const [currentRecordHero, setCurrtentRecordHero] = useState({});

  useEffect(() => {
    async function getHeros() {
      try {
        const response = await HeroService.list();
        setHeroes(response);
      } catch (err) {
        toast.error(err.mensage);
      }
    }
    getHeros();

    const socket = io('http://localhost:3002');
    socket.on('hero', async (hero) => {
      toast.warning('Uma ameaça foi detectada e temos um herói pronto a combater a ameaça');
      setHeroes(state => {
        const newState = state.map(item => {
          if (item._id === hero._id) {
            return { ...hero }
          }
          return item
        })
        return newState
      });
    });

  }, []);

  const handleCreateHero = (e) => {
    setOpenDialogHeroCreate(true);
  };

  const handleSubmitHero = async (hero) => {
    try {
      const response = await HeroService.create(hero);
      setHeroes(state => [...state, response]);
      setOpenDialogHeroCreate(false);
      toast.success('Herói cadastrado com sucesso');
    } catch (err) {
      toast.error(err.mensage);
    }
  }

  const handleUpdate = (hero) => {
    setCurrtentRecordHero(hero);
    setOpenDialogHeroUpdate(true);
  }

  const handleSubmitDelete = async (hero) => {
    try {
      const response = await HeroService.remove(hero._id);
      setHeroes(response);
      toast.success('Herói removido com sucesso');
    } catch (err) {
      toast.error(err.mensage);
    }
  }

  const handleSubmitUpdate = async (hero) => {
    try {
      const response = await HeroService.update(hero);
      setHeroes(response);
      setOpenDialogHeroUpdate(false);
      toast.success('Herói atualizado com sucesso');
    } catch (err) {
      toast.error(err.mensage);
    }
  }

  return (
    <Container>
      <Header>
        <Title>Lista de Heróis</Title>
        <Button
          text="Novo Herói"
          onClick={handleCreateHero}
        />
      </Header>
      <Table
        header={headerTable}
        data={heroes}
        onEdit={handleUpdate}
        onDelete={handleSubmitDelete}
      />

      <DialogHeroCreate
        open={openDialogHeroCreate}
        onOpenChange={setOpenDialogHeroCreate}
        onSubmit={handleSubmitHero}
      />

      {currentRecordHero && (
        <DialogHeroUpdate
          open={openDialogHeroUpdate}
          onOpenChange={setOpenDialogHeroUpdate}
          record={currentRecordHero}
          onSubmit={handleSubmitUpdate}
        />
      )}
    </Container>
  )
}

export default Heroes;
