// Importando components
import { Footer } from './components/Footer';
import { Header } from './components/Header/Header';
import { Layout } from './components/Layout';
import {
  ChakraProvider,
  Input,
  Box,
  Center,
  Button
} from '@chakra-ui/react'
import { login } from './services/login'
import { button } from './components/Button';
import { Card } from './components/Card';

// Utilizamos styled-components no css
//import styled from 'styled-components';

// Criando um styled-component
// const Box = styled.div`
//   background-color: orange;
//   border-radius: 25px;
// `

function App() {
  return (
    <ChakraProvider>
      {/* <Layout> */}
      {/* <Box>
          <h1> Faça Login </h1>
        </Box> */}
      <Header />
      <Box minHeight='100vh' backgroundColor='#9413dc' padding='5px'>
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px'>
          {/* <Center>
            <h1>Faça o login</h1>
          </Center> */}
          {/* <label htmlFor='emailInput'> E-mail </label>
          <input id='emailInput' type='email' /> */}
          {/* <Input placeholder="E-mail" /> */}
          <Card/>
          {/* <label htmlFor='passwordInput'> Senha </label>
          <input id='passwordInput' type='password' /> */}
          {/* <Input placeholder="Password" /> */}

          {/* <button>Entrar</button> */}
          <Button onClick={button} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
            Entrar
          </Button>
          {/* </Layout> */}
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;


