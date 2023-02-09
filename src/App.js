import React from 'react';
import {
  ChakraProvider,

  theme,
} from '@chakra-ui/react';

import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <ChakraProvider theme={theme}>
             <AllRoutes/>
    </ChakraProvider>
  );
}

export default App;
