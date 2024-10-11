import { cn } from "@/utils/twMerge";

interface IBackground {
  children: React.ReactNode;
  className?: string;
}

export const Background = (props: IBackground) => {
  return(<div className={cn('w-full bg-secondary', props.className)}>{props.children}</div>)
}