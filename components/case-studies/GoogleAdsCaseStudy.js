import CaseStudiesHero from './google-ads/CaseStudiesHero';
import ObjectivesSection from './google-ads/ObjectivesSection';
import ChallengesSection from './google-ads/ChallengesSection';
import KeyAchievements from './google-ads/KeyAchievements ';
import GallerySection from './google-ads/GallerySection';
import ClientOverview from './google-ads/ClientOverview';
import CampaignStrategySection from './google-ads/CampaignStrategySection';

const GoogleAdsCaseStudy = () => {
  return (
    <section>
      {/* Title Section */}
      <CaseStudiesHero />

      {/* Case Study Content */}    
      <ClientOverview />
      <ObjectivesSection />
      <ChallengesSection />
      <CampaignStrategySection />
      <GallerySection />
      <KeyAchievements />  
    </section>
  );
};

export default GoogleAdsCaseStudy;
