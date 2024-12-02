// Tipo de parâmetros passados entre as telas na navegação
export type RootStackParamList = {
    Login: undefined;
    Cadastro: undefined;
    Main: undefined;
    Configurações: undefined;
    Perfil: undefined;  
    SearchScreen: undefined;   
    CadastroEvento: undefined;
    ConfigGeral: undefined;
    Chat: undefined;
    Grupos: undefined;
    Mapa: { selectedNeighborhood: Neighborhood }
  };

  export type MainTabParamList = {
    Mapa: undefined;
    Grupos: undefined;
    Eventos: undefined;
    Perfil: undefined;
    Configurações: undefined;
    Chat: undefined;
    ConfigGeral: undefined;
  };
  
  // Interface que define os dados de um bairro
  export interface Neighborhood {
    id: string;               // ID único do bairro
    name: string;             // Nome do bairro
    latitude: number;         // Latitude do bairro
    longitude: number;        // Longitude do bairro
  }
  