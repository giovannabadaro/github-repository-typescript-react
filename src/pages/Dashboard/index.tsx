import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

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
      <a href="teste">
        <img
         src="https://avatars3.githubusercontent.com/u/29736189?s=400&u=698ae6f217cb4fe0aeacd72f7cf2331a0c0527a1&v=4" 
         alt="Giovanna"
        />
        <div>
          <strong>giovannabadaro/machine-learning-brazilian-cities</strong>
          <p>
            A collection of 79 attributes from Brazilian Cities. 
            The implementation does a simple exploration about the dataset and
            use random forest to discover some informations</p>
        </div>
        <FiChevronRight size={30} />
      </a>

      <a href="teste">
        <img
         src="https://avatars3.githubusercontent.com/u/29736189?s=400&u=698ae6f217cb4fe0aeacd72f7cf2331a0c0527a1&v=4" 
         alt="Giovanna"
        />
        <div>
          <strong>giovannabadaro/machine-learning-brazilian-cities</strong>
          <p>
            A collection of 79 attributes from Brazilian Cities. 
            The implementation does a simple exploration about the dataset and
            use random forest to discover some informations</p>
        </div>
        <FiChevronRight size={30} />
      </a>

      <a href="teste">
        <img
         src="https://avatars3.githubusercontent.com/u/29736189?s=400&u=698ae6f217cb4fe0aeacd72f7cf2331a0c0527a1&v=4" 
         alt="Giovanna"
        />
        <div>
          <strong>giovannabadaro/machine-learning-brazilian-cities</strong>
          <p>
            A collection of 79 attributes from Brazilian Cities. 
            The implementation does a simple exploration about the dataset and
            use random forest to discover some informations</p>
        </div>
        <FiChevronRight size={30} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;