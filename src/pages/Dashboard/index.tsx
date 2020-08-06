import React from 'react';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img 
      src="https://xesque.rocketseat.dev/platform/1587379765556-attachment.svg"
      alt="git hub explorer"
    />

    <Title>
        Explore repositórios no GitHub
    </Title>

    <Form action="">
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">
        Pesquisar
      </button>
    </Form>

    <Repositories>

    </Repositories>
  </>
);

export default Dashboard;