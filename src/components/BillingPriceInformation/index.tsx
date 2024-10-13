import { useTranslations } from 'next-intl';

import { BillingPricingCard } from '@/components/BillingPriceCard';
import { BillingPriceFeature } from '@/components/BillingPriceFeature';
import type { PlanId } from '@/types/SubScription';
import { PricingPlanList } from '@/utils/AppConfig';

export const BillingPriceInformation = (props: {
  buttonList: Record<PlanId, React.ReactNode>;
}) => {
  const t = useTranslations('PricingPlan');

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-3">
      {PricingPlanList.map((plan) => (
        <BillingPricingCard
          key={plan.id}
          planId={plan.id}
          price={plan.price}
          interval={plan.interval}
          button={props.buttonList[plan.id]}
        >
          <BillingPriceFeature>
            {t('feature_team_member', {
              number: plan.features.teamMember,
            })}
          </BillingPriceFeature>
          <BillingPriceFeature>
            {t('feature_website', {
              numbr: plan.features.website,
            })}
          </BillingPriceFeature>
          <BillingPriceFeature>
            {t('feature_storage', {
              number: plan.features.storage,
            })}
          </BillingPriceFeature>
          <BillingPriceFeature>
            {t('feature_transfer', {
              number: plan.features.transfer,
            })}
          </BillingPriceFeature>
          <BillingPriceFeature>
            {t('feature_email_support')}
          </BillingPriceFeature>
        </BillingPricingCard>
      ))}
    </div>
  );
};
