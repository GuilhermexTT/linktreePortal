export interface EcosystemModule {
  id: string;
  title: string;
  subtitle: string;
  domain: string;
  description: string;
  logoId: 'aether' | 'luna' | 'hub' | 'commerce' | 'agent';
  url: string;
  isActive: boolean;
  badge?: string;
}

export const ecosystemModules: EcosystemModule[] = [
  {
    id: 'aether-solutions',
    title: 'Aether Solutions',
    subtitle: 'Portal Institucional',
    domain: 'aethersolutions.com.br',
    description: 'Conheça nossos serviços, soluções e infraestrutura.',
    logoId: 'aether',
    url: 'https://aethersolutions.com.br',
    isActive: true
  },
  {
    id: 'blog-luna',
    title: 'Blog da Luna',
    subtitle: 'Centro de Conteúdo e Pesquisa',
    domain: 'blog.aethersolutions.com.br',
    description: 'Insights sobre tecnologia, IA e negócios.',
    logoId: 'luna',
    url: 'https://blog.aethersolutions.com.br',
    isActive: true
  },
  {
    id: 'aether-hub',
    title: 'AetherHub',
    subtitle: 'Centro de Operações Digitais',
    domain: 'hub.aethersolutions.com.br',
    description: 'Produtos, sistemas e soluções empresariais.',
    logoId: 'hub',
    url: 'https://hub.aethersolutions.com.br',
    isActive: true
  }
  // Future extensions can be added here, for example:
  /*
  {
    id: 'aether-commerce',
    title: 'Aether Commerce',
    subtitle: 'Plataforma de Vendas',
    domain: 'commerce.aethersolutions.com.br',
    description: 'Nossa plataforma de e-commerce de alta performance.',
    logoId: 'commerce',
    url: 'https://commerce.aethersolutions.com.br',
    isActive: false,
    badge: 'Em Breve'
  },
  {
    id: 'aether-agent',
    title: 'Aether Agent',
    subtitle: 'Inteligência Artificial Autônoma',
    domain: 'agent.aethersolutions.com.br',
    description: 'Agentes cognitivos integrados para automação de processos.',
    logoId: 'agent',
    url: 'https://agent.aethersolutions.com.br',
    isActive: false,
    badge: 'Em Breve'
  }
  */
];
