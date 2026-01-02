import { TrendingUp, Building2, Phone, Megaphone, LucideIcon } from 'lucide-react';

type IconName = 'TrendingUp' | 'Building2' | 'Phone' | 'Megaphone';

const iconMap: Record<IconName, LucideIcon> = {
  TrendingUp,
  Building2,
  Phone,
  Megaphone,
};

export function getIcon(iconName: string): LucideIcon | undefined {
  return iconMap[iconName as IconName];
}
