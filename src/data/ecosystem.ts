export interface EcosystemModule {
  id: string;
  title: string;
  subtitle: string;
  domain: string;
  description: string;
  logoId: 'adisea' | 'luna' | 'hub' | 'commerce' | 'agent';
  url: string;
  isActive: boolean;
  badge?: string;
}

export const ecosystemModules: EcosystemModule[] = [
  {
    id: 'adisea',
    title: 'Adisea',
    subtitle: 'Portal Institucional',
    domain: 'adisea.com.br',
    description: 'Conheça nossos serviços, soluções e infraestrutura.',
    logoId: 'adisea',
    url: 'https://adisea.com.br',
    isActive: true
  },
  {
    id: 'adisea-hub',
    title: 'Nossos produtos',
    subtitle: 'Adisea Hub',
    domain: 'hub.adisea.com.br',
    description: 'Produtos, sistemas e soluções empresariais.',
    logoId: 'hub',
    url: 'https://hub.adisea.com.br',
    isActive: true
  },
  {
    id: 'blog-luna',
    title: 'Blog da Luna',
    subtitle: 'Centro de Conteúdo e Pesquisa',
    domain: 'blog.adisea.com.br',
    description: 'Insights sobre tecnologia, IA e negócios.',
    logoId: 'luna',
    url: 'https://blog.adisea.com.br',
    isActive: true
  }
  // Future extensions can be added here, for example:
  /*
  {
    id: 'adisea-commerce',
    title: 'Adisea Commerce',
    subtitle: 'Plataforma de Vendas',
    domain: 'commerce.adisea.com.br',
    description: 'Nossa plataforma de e-commerce de alta performance.',
    logoId: 'commerce',
    url: 'https://commerce.adisea.com.br',
    isActive: false,
    badge: 'Em Breve'
  },
  {
    id: 'adisea-agent',
    title: 'Adisea Agent',
    subtitle: 'Inteligência Artificial Autônoma',
    domain: 'agent.adisea.com.br',
    description: 'Agentes cognitivos integrados para automação de processos.',
    logoId: 'agent',
    url: 'https://agent.adisea.com.br',
    isActive: false,
    badge: 'Em Breve'
  }
  */
];
