import * as React from "react";
import {
  Calendar,
  Heart,
  Globe,
  Zap,
  Brain,
  Repeat,
  Sparkles,
  Compass,
  Lightbulb,
  Activity,
  Layers,
  ChevronRight,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  calendar: Calendar,
  heart: Heart,
  globe: Globe,
  zap: Zap,
  brain: Brain,
  repeat: Repeat,
  sparkles: Sparkles,
  compass: Compass,
  lightbulb: Lightbulb,
  activity: Activity,
  layers: Layers,
  chevronRight: ChevronRight,
  check: Check,
};

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({
  name,
  className,
  size = 24,
}) => {
  const IconComponent = iconMap[name.toLowerCase()];

  if (!IconComponent) {
    return null;
  }

  return (
    <IconComponent
      className={cn("flex-shrink-0", className)}
      size={size}
      strokeWidth={1.5}
    />
  );
};

