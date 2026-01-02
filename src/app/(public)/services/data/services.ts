export interface ServiceApproachStep {
  number: number;
  title: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  icon: string;
  shortDescription: string;
  heroSubtitle: string;
  fullDescription: string;
  
  problemStatement: {
    headline: string;
    description: string;
    painPoints: string[];
  };
  
  approach: {
    headline: string;
    description: string;
    steps: ServiceApproachStep[];
  };
  
  keyOutcomes: string[];
  
  keyBenefits: {
    title: string;
    description: string;
    icon?: string;
  }[];
  
  caseStudies: {
    id: string;
    clientName: string;
    industry: string;
    challenge: string;
    solution: string;
    result: string;
    metrics: { label: string; value: string }[];
  }[];
  
  metrics: {
    label: string;
    value: string;
    description?: string;
  }[];
  
  relatedServices: string[];
}

export const services: Service[] = [
  {
    id: 'trade-development',
    title: 'Trade Development',
    slug: 'trade-development',
    icon: 'TrendingUp',
    shortDescription: 'Build and manage high-performing field teams that drive product adoption and market penetration across Zambia.',
    heroSubtitle: 'Expand Market Reach with Expert Field Force Management',
    fullDescription: `Trade development is about creating sustainable pathways for businesses to reach new markets and customers. Our Trade Development service provides end-to-end field force solutions that help you penetrate untapped markets, increase product awareness, and drive measurable revenue growth.`,
    
    problemStatement: {
      headline: 'The Market Expansion Challenge',
      description: `Many businesses know they need to expand their market reach, but lack the infrastructure, expertise, and personnel to execute field marketing effectively. Building an in-house team is expensive, time-consuming, and risky. You need partners who understand local markets and can deploy trained agents quickly.`,
      painPoints: [
        'No established field presence in target markets',
        'High cost of recruiting and training in-house teams',
        'Lack of market knowledge in new districts',
        'Inability to scale operations quickly',
        'No tracking and accountability mechanisms',
      ],
    },
    
    approach: {
      headline: 'Our 5-Step Trade Development Framework',
      description: `We follow a proven methodology that ensures rapid deployment, quality execution, and measurable results.`,
      steps: [
        {
          number: 1,
          title: 'Market Analysis & Planning',
          description: 'We analyze your target markets, identify key locations, and develop a customized field force strategy aligned with your goals.',
        },
        {
          number: 2,
          title: 'Agent Recruitment & Screening',
          description: 'We identify and recruit qualified agents from target regions who understand local dynamics and have existing community networks.',
        },
        {
          number: 3,
          title: 'Comprehensive Training',
          description: 'Our training programs cover product knowledge, sales techniques, compliance, and customer service excellence.',
        },
        {
          number: 4,
          title: 'Deployment & Support',
          description: 'We deploy agents with real-time tracking, field coaching, and logistical support to ensure day-one effectiveness.',
        },
        {
          number: 5,
          title: 'Monitoring & Optimization',
          description: 'We provide detailed performance analytics, conduct regular reviews, and optimize strategies based on field data.',
        },
      ],
    },
    
    keyOutcomes: [
      'Rapid market penetration in new districts',
      'Increased product awareness and adoption',
      'Direct customer acquisition and engagement',
      'Higher conversion rates through trained agents',
      'Scalable operations without fixed overhead',
      'Real-time market feedback and insights',
    ],
    
    keyBenefits: [
      {
        title: 'Speed to Market',
        description: 'Deploy trained agents within 2-4 weeks, not months',
      },
      {
        title: 'Cost Efficiency',
        description: 'Pay for performance; no fixed employment overhead',
      },
      {
        title: 'Local Expertise',
        description: 'Agents understand community networks and local preferences',
      },
      {
        title: 'Data-Driven',
        description: 'Real-time reporting and performance analytics',
      },
      {
        title: 'Risk Mitigation',
        description: 'Proven processes reduce market entry risks',
      },
      {
        title: 'Scalability',
        description: 'Easily scale up or down based on demand',
      },
    ],
    
    caseStudies: [
      {
        id: 'case-1',
        clientName: 'Mobile Money Provider',
        industry: 'Financial Services',
        challenge: 'Launch mobile money services in 5 new provinces with zero brand awareness',
        solution: 'Deployed 120+ trained agents over 8 weeks to conduct door-to-door demonstrations and registrations',
        result: 'Achieved 15,000+ active users in first 3 months, with 68% monthly growth',
        metrics: [
          { label: 'Users Acquired', value: '15,000+' },
          { label: 'Months', value: '3' },
          { label: 'Growth Rate', value: '68%/mo' },
          { label: 'Agent Utilization', value: '94%' },
        ],
      },
      {
        id: 'case-2',
        clientName: 'Insurance Company',
        industry: 'Insurance',
        challenge: 'Increase policy sales in rural markets where digital penetration is low',
        solution: 'Trained field agents as insurance consultants; provided in-person support and education',
        result: 'Increased rural premium revenue by 180% YoY with 92% customer retention',
        metrics: [
          { label: 'Revenue Growth', value: '+180%' },
          { label: 'Retention Rate', value: '92%' },
          { label: 'Policies Sold', value: '8,500+' },
          { label: 'Customer Satisfaction', value: '4.7/5' },
        ],
      },
    ],
    
    metrics: [
      { label: '200+', value: 'Active DSAs', description: 'Across all provinces' },
      { label: '15+', value: 'Districts Covered', description: 'With local presence' },
      { label: '40+', value: 'Clients Served', description: 'From startups to enterprises' },
      { label: '92%', value: 'Avg. Agent Retention', description: 'Highest in the industry' },
    ],
    
    relatedServices: ['agency-banking', 'call-center'],
  },

  {
    id: 'agency-banking',
    title: 'Agency Banking',
    slug: 'agency-banking',
    icon: 'Building2',
    shortDescription: 'Deploy, train, and manage agent networks for financial institutions expanding into rural and underserved markets.',
    heroSubtitle: 'Bringing Banking Services to Every Community',
    fullDescription: `Agency Banking is a cornerstone of financial inclusion. We help banks, fintech companies, and financial institutions expand their reach into rural and underserved communities by deploying trained agents who can provide essential banking services, from deposits and withdrawals to bill payments and microfinance.`,
    
    problemStatement: {
      headline: 'The Financial Inclusion Gap',
      description: `Over 50% of Zambia's population lacks access to formal banking services. For financial institutions, expanding into rural areas requires significant investment in infrastructure, compliance management, and field supervision. The challenge: how to reach these markets cost-effectively while maintaining quality and regulatory standards?`,
      painPoints: [
        'High cost of building physical branches in rural areas',
        'Complex regulatory compliance requirements',
        'Difficulty finding and training qualified agents',
        'Lack of accountability and monitoring systems',
        'Risk of fraud and mismanagement',
        'Limited customer adoption due to trust issues',
      ],
    },
    
    approach: {
      headline: 'Our Agency Banking Deployment Model',
      description: `We combine regulatory expertise with on-ground execution to create sustainable agency banking networks.`,
      steps: [
        {
          number: 1,
          title: 'Regulatory Compliance & Strategy',
          description: 'We navigate regulatory requirements and design compliant agency banking models for your institution.',
        },
        {
          number: 2,
          title: 'Agent Selection & Vetting',
          description: 'We identify community leaders, entrepreneurs, and trusted individuals who can serve as banking agents.',
        },
        {
          number: 3,
          title: 'Training & Certification',
          description: 'Comprehensive training on banking operations, compliance, customer service, and fraud prevention.',
        },
        {
          number: 4,
          title: 'Systems Setup & Integration',
          description: 'We integrate agents with your banking systems, provide devices, and establish reporting mechanisms.',
        },
        {
          number: 5,
          title: 'Ongoing Monitoring & Support',
          description: 'Real-time monitoring, compliance audits, customer feedback loops, and continuous agent training.',
        },
      ],
    },
    
    keyOutcomes: [
      'Expanded geographic reach into underserved markets',
      'Increased customer base and transaction volumes',
      'Reduced operational costs compared to branch expansion',
      'Improved financial inclusion metrics',
      'Higher regulatory compliance standards',
      'Strengthened customer relationships in remote areas',
    ],
    
    keyBenefits: [
      {
        title: 'Regulatory Expertise',
        description: 'We handle all compliance requirements with central bank oversight',
      },
      {
        title: 'Community Trust',
        description: 'We select agents who are trusted members of their communities',
      },
      {
        title: 'Cost-Effective Expansion',
        description: 'Agents model reduces capex vs. branch expansion by 70%+',
      },
      {
        title: 'Real-Time Supervision',
        description: 'Advanced monitoring systems track all transactions and agent performance',
      },
      {
        title: 'Fraud Prevention',
        description: 'Built-in controls, audits, and security protocols minimize risk',
      },
      {
        title: 'Financial Inclusion',
        description: 'Brings formal banking to remote communities',
      },
    ],
    
    caseStudies: [
      {
        id: 'case-3',
        clientName: 'Regional Bank',
        industry: 'Banking',
        challenge: 'Expand into 8 rural provinces while maintaining regulatory compliance and operational efficiency',
        solution: 'Deployed 85 trained banking agents with integrated mobile systems and real-time monitoring',
        result: 'Opened 85 agency banking outlets reaching 120,000+ new customers with 99.2% compliance audit score',
        metrics: [
          { label: 'Agency Outlets', value: '85' },
          { label: 'New Customers', value: '120,000+' },
          { label: 'Compliance Score', value: '99.2%' },
          { label: 'Transaction Vol.', value: '+250%' },
        ],
      },
      {
        id: 'case-4',
        clientName: 'Fintech Startup',
        industry: 'Financial Technology',
        challenge: 'Build ground presence and customer base without heavy capex or dedicated staff',
        solution: 'Deployed agent network of 45 agents across key districts with automated monitoring',
        result: 'Reached 50,000+ customers in 6 months; agents became customer acquisition channel',
        metrics: [
          { label: 'Customers Acquired', value: '50,000+' },
          { label: 'Timeline', value: '6 months' },
          { label: 'Agent Productivity', value: '1,100+ users/agent' },
          { label: 'Monthly Actives', value: '78%' },
        ],
      },
    ],
    
    metrics: [
      { label: '15+', value: 'Districts Served', description: 'With agency banking operations' },
      { label: '85+', value: 'Active Agents', description: 'Across all regions' },
      { label: '120,000+', value: 'End Users Served', description: 'Through agent network' },
      { label: '99%+', value: 'Compliance Rate', description: 'Audit verified' },
    ],
    
    relatedServices: ['trade-development', 'call-center'],
  },

  {
    id: 'call-center',
    title: 'Call Center Services',
    slug: 'call-center',
    icon: 'Phone',
    shortDescription: 'Professional customer support and campaign management solutions with trained agents and quality monitoring.',
    heroSubtitle: 'Customer Support That Builds Loyalty',
    fullDescription: `Customer service excellence is non-negotiable in today's market. Our Call Center Services provide professional, multilingual customer support that handles inquiries, complaints, and campaigns with the highest standards of quality and professionalism.`,
    
    problemStatement: {
      headline: 'The Customer Service Challenge',
      description: `Managing high-quality customer support at scale is expensive and complex. Many businesses struggle with inconsistent service quality, high agent turnover, managing peak demand, and maintaining compliance with regulations. Building an in-house call center ties up capital and management overhead.`,
      painPoints: [
        'Fluctuating call volumes difficult to predict',
        'High cost of maintaining fixed call center infrastructure',
        'Employee retention and training costs',
        'Inconsistent service quality across shifts',
        'Difficulty handling multiple languages',
        'Compliance with data protection regulations',
      ],
    },
    
    approach: {
      headline: 'Our Call Center Execution Framework',
      description: `We operate call centers that prioritize quality, efficiency, and customer satisfaction.`,
      steps: [
        {
          number: 1,
          title: 'Needs Assessment & Capacity Planning',
          description: 'We assess your call volume, peak patterns, and service requirements to design optimal capacity.',
        },
        {
          number: 2,
          title: 'Recruitment & Training',
          description: 'We recruit multilingual agents with customer service experience and provide comprehensive training on your products and protocols.',
        },
        {
          number: 3,
          title: 'Quality Assurance Setup',
          description: 'We implement call monitoring, recording, and quality scoring systems to maintain consistent service standards.',
        },
        {
          number: 4,
          title: 'Operations Management',
          description: 'Daily management of agent schedules, performance tracking, and issue resolution to maintain SLAs.',
        },
        {
          number: 5,
          title: 'Performance Optimization',
          description: 'Monthly reviews of call metrics, customer satisfaction surveys, and continuous training for improvement.',
        },
      ],
    },
    
    keyOutcomes: [
      'Consistent, professional customer support',
      'Reduced customer churn through better service',
      'Improved brand reputation and customer satisfaction',
      'Scalable capacity to handle peak demand',
      'Detailed customer insights from call interactions',
      'Efficient handling of multiple communication channels',
    ],
    
    keyBenefits: [
      {
        title: 'Flexible Capacity',
        description: 'Scale agent count up/down to match seasonal demand',
      },
      {
        title: 'Multilingual Support',
        description: 'Native speakers of English, Bemba, Tonga, and other local languages',
      },
      {
        title: 'Quality Assurance',
        description: '95%+ first-call resolution and customer satisfaction scores',
      },
      {
        title: 'Cost Efficiency',
        description: 'Variable costs replace fixed infrastructure spending',
      },
      {
        title: '24/7 Operations',
        description: 'Round-the-clock availability for critical support needs',
      },
      {
        title: 'Technology Integration',
        description: 'Integration with CRM, helpdesk, and analytics systems',
      },
    ],
    
    caseStudies: [
      {
        id: 'case-5',
        clientName: 'E-commerce Platform',
        industry: 'Retail & E-commerce',
        challenge: 'Handle 2,000+ daily customer inquiries across multiple channels during peak season',
        solution: 'Deployed dedicated call center with 35 trained agents, ticket management system, and multilingual support',
        result: 'Achieved 97% first-call resolution, 4.8/5 customer satisfaction score, 78% reduction in response time',
        metrics: [
          { label: 'First-Call Resolution', value: '97%' },
          { label: 'Customer Satisfaction', value: '4.8/5' },
          { label: 'Response Time', value: '-78%' },
          { label: 'Daily Calls Handled', value: '2,000+' },
        ],
      },
      {
        id: 'case-6',
        clientName: 'Telecom Operator',
        industry: 'Telecommunications',
        challenge: 'Support billing inquiries, technical issues, and new customer activation across the country',
        solution: 'Deployed 50+ multilingual agents with direct integration to customer billing system',
        result: '95% SLA achievement, 89% customer retention improvement, 45% reduction in escalations',
        metrics: [
          { label: 'SLA Achievement', value: '95%' },
          { label: 'Retention Improvement', value: '+89%' },
          { label: 'Escalation Reduction', value: '-45%' },
          { label: 'Agent Utilization', value: '82%' },
        ],
      },
    ],
    
    metrics: [
      { label: '95%+', value: 'SLA Compliance', description: 'Industry-leading performance' },
      { label: '4.7/5', value: 'Avg. Customer Rating', description: 'Across all clients' },
      { label: '50+', value: 'Multilingual Agents', description: 'Ready for deployment' },
      { label: '24/7', value: 'Available Support', description: 'Round-the-clock service' },
    ],
    
    relatedServices: ['trade-development', 'agency-banking'],
  },

  {
    id: 'branding',
    title: 'Branding & Marketing',
    slug: 'branding',
    icon: 'Megaphone',
    shortDescription: 'Increase brand awareness and market presence through strategic field marketing and community engagement.',
    heroSubtitle: 'Build Brand Presence on the Ground',
    fullDescription: `Brand awareness drives customer acquisition. Our Branding & Marketing service uses on-ground field teams to build brand recognition, conduct consumer education, and create memorable brand experiences in target markets.`,
    
    problemStatement: {
      headline: 'The Brand Awareness Gap',
      description: `Many innovative products and services struggle to gain traction because target customers simply don't know they exist. Traditional advertising channels (TV, radio) reach mass audiences but lack targeting precision. Field marketing bridges this gap by connecting brands directly with potential customers in their communities.`,
      painPoints: [
        'High cost of mass media advertising',
        'Difficulty targeting specific geographic or demographic segments',
        'Limited consumer education about new products',
        'Weak brand presence in rural markets',
        'No direct feedback from target customers',
        'Inefficient marketing spend with unclear ROI',
      ],
    },
    
    approach: {
      headline: 'Our Integrated Branding Strategy',
      description: `We combine field marketing, consumer education, and community engagement to build sustainable brand presence.`,
      steps: [
        {
          number: 1,
          title: 'Brand Strategy & Market Research',
          description: 'We understand your brand, target audience, and develop a localized marketing strategy for each market.',
        },
        {
          number: 2,
          title: 'Campaign Design & Materials',
          description: 'We create culturally relevant marketing materials, promotional items, and educational content.',
        },
        {
          number: 3,
          title: 'Field Team Deployment',
          description: 'We deploy trained field marketing agents to conduct product demonstrations, engage communities, and distribute materials.',
        },
        {
          number: 4,
          title: 'Community Activation',
          description: 'We organize promotional events, sponsor community activities, and build grassroots brand advocacy.',
        },
        {
          number: 5,
          title: 'Tracking & Analytics',
          description: 'We measure campaign impact through brand awareness surveys, customer acquisition data, and engagement metrics.',
        },
      ],
    },
    
    keyOutcomes: [
      'Increased brand awareness and recall',
      'Direct engagement with target customers',
      'Higher conversion rates through personal interaction',
      'Authentic grassroots brand advocacy',
      'Valuable market insights and customer feedback',
      'Stronger market position against competitors',
    ],
    
    keyBenefits: [
      {
        title: 'Targeted Reach',
        description: 'Focus marketing spend on high-potential market segments',
      },
      {
        title: 'Personal Touch',
        description: 'Direct customer engagement builds trust and loyalty',
      },
      {
        title: 'Measurable Impact',
        description: 'Track awareness, acquisition, and engagement metrics',
      },
      {
        title: 'Cultural Relevance',
        description: 'Campaigns tailored to local preferences and values',
      },
      {
        title: 'Cost Efficiency',
        description: 'Lower cost per customer reached vs. mass media',
      },
      {
        title: 'Rapid Deployment',
        description: 'Launch campaigns in 2-4 weeks with immediate ground presence',
      },
    ],
    
    caseStudies: [
      {
        id: 'case-7',
        clientName: 'FMCG Company',
        industry: 'Consumer Goods',
        challenge: 'Build brand awareness for new product line in 5 provinces among price-conscious consumers',
        solution: 'Deployed 60 field marketing agents for in-market sampling, demonstrations, and retailer engagement',
        result: 'Achieved 68% aided brand awareness, 41% trial rate, and secured distribution in 500+ retail outlets',
        metrics: [
          { label: 'Brand Awareness', value: '68%' },
          { label: 'Trial Rate', value: '41%' },
          { label: 'Retail Outlets', value: '500+' },
          { label: 'Campaign ROI', value: '320%' },
        ],
      },
      {
        id: 'case-8',
        clientName: 'Tech Startup',
        industry: 'Technology',
        challenge: 'Create market demand for innovative tech product in markets with low digital literacy',
        solution: 'Trained field agents as product educators; conducted workshops and community events',
        result: 'Generated 3,500+ qualified leads, 28% conversion rate, became fastest-growing region',
        metrics: [
          { label: 'Qualified Leads', value: '3,500+' },
          { label: 'Conversion Rate', value: '28%' },
          { label: 'Customers Acquired', value: '980+' },
          { label: 'User Retention', value: '72%' },
        ],
      },
    ],
    
    metrics: [
      { label: '40+', value: 'Campaigns Executed', description: 'For diverse industries' },
      { label: '65+', value: 'Marketing Agents', description: 'Field deployment ready' },
      { label: '85%', value: 'Avg. Awareness Lift', description: 'After campaign period' },
      { label: '32%', value: 'Avg. Conversion Rate', description: 'Industry benchmark exceeded' },
    ],
    
    relatedServices: ['trade-development', 'call-center'],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServiceById(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
