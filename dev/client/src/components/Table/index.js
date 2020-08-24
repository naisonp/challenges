import React from 'react';

import { Button } from '../../components';
import { TableContainer, Header, Head, Row, Cell } from './styles';

function Table({ header, data, onEdit, onDelete, onFinish, ...props }) {
  return (
    <TableContainer>
      <tbody>
        <Header>
          {header.map((head) => {
            const { value } = head;
            return (
              <Head key={value}>
                {value}
              </Head>
            );
          })}
          {onEdit && (<Head />)}
          {onDelete && (<Head />)}
        </Header>

        {data.map((value, index) => {
          return (
            <Row key={index} >
              {header.map(({ dataIndex, render }) => {
                const content = (value)[dataIndex];
                return (
                  <Cell key={dataIndex}>
                    {render ? render(content) : <span>{content}</span>}
                  </Cell>
                );
              })}
              {onEdit && (
                <Cell>
                  <Button text="Editar" onClick={() => onEdit(value)} />
                </Cell>
              )}
              {onDelete && (
                <Cell>
                  <Button text="Excluir" onClick={() => onDelete(value)} />
                </Cell>
              )}
            </Row>
          );
        })}
      </tbody>
    </TableContainer>
  )
}

export default Table;
