import { Metadata } from 'next';
import HomeClient from './HomeClient';


export const metadata: Metadata = {
  title: 'Easttlux Ventures | Field Force Solutions in Zambia',
  description: 'Deploy, train, and manage field forces that drive financial inclusion and trade growth across Zambia. Trade Development, Agency Banking, Call Center & Project Management.',
  keywords: 'field force, zambia, trade development, agency banking, DSA, direct sales agents, financial inclusion',
};

export default function Page() {
  return <HomeClient />;
}
