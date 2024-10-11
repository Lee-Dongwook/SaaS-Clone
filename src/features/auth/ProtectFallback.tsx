import { useTranslations } from 'next-intl'

import { 
  Tooltip
} from '@/common/Tooltip'

export const ProtectFallback = ({children}: {children: React.ReactNode}) => {
  const t = useTranslations('ProtectFallback');

  return(
    <Tooltip text={t('tooltip')}>
      {children}
    </Tooltip>
  )
}