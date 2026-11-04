import type { Schema, Struct } from '@strapi/strapi';

export interface DefaultBrandMarkContent extends Struct.ComponentSchema {
  collectionName: 'components_default_brand_mark_contents';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Brand Mark Content';
    icon: 'layer';
  };
  attributes: {
    ariaLabel: Schema.Attribute.String;
    tagline: Schema.Attribute.Component<
      'default.brand-mark-content-tagline',
      false
    >;
    words: Schema.Attribute.Component<
      'default.brand-mark-content-words-item',
      true
    >;
  };
}

export interface DefaultBrandMarkContentTagline extends Struct.ComponentSchema {
  collectionName: 'components_default_brand_mark_content_taglines';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Brand Mark Content Tagline';
    icon: 'layer';
  };
  attributes: {
    accent: Schema.Attribute.String;
    lead: Schema.Attribute.String;
  };
}

export interface DefaultBrandMarkContentWordsItem
  extends Struct.ComponentSchema {
  collectionName: 'components_default_brand_mark_content_words_items';
  info: {
    description: 'Auto-generated array item component from JSON import';
    displayName: 'Brand Mark Content Words Item';
    icon: 'layer';
  };
  attributes: {
    value: Schema.Attribute.String;
  };
}

export interface DefaultCaseStudiesContent extends Struct.ComponentSchema {
  collectionName: 'components_default_case_studies_contents';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Case Studies Content';
    icon: 'layer';
  };
  attributes: {
    card: Schema.Attribute.Component<
      'default.case-studies-content-card',
      false
    >;
    eyebrow: Schema.Attribute.String;
    indexLabel: Schema.Attribute.String;
    intro: Schema.Attribute.String;
    mobileIntro: Schema.Attribute.String;
    swipeLabel: Schema.Attribute.String;
    title: Schema.Attribute.Component<
      'default.case-studies-content-title',
      false
    >;
    trust: Schema.Attribute.Component<
      'default.case-studies-content-trust',
      false
    >;
  };
}

export interface DefaultCaseStudiesContentCard extends Struct.ComponentSchema {
  collectionName: 'components_default_case_studies_content_cards';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Case Studies Content Card';
    icon: 'layer';
  };
  attributes: {
    shiftLabel: Schema.Attribute.String;
    shiftLegend: Schema.Attribute.String;
    stackLabel: Schema.Attribute.String;
  };
}

export interface DefaultCaseStudiesContentTitle extends Struct.ComponentSchema {
  collectionName: 'components_default_case_studies_content_titles';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Case Studies Content Title';
    icon: 'layer';
  };
  attributes: {
    emphasis: Schema.Attribute.String;
    line1: Schema.Attribute.String;
  };
}

export interface DefaultCaseStudiesContentTrust extends Struct.ComponentSchema {
  collectionName: 'components_default_case_studies_content_trusts';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Case Studies Content Trust';
    icon: 'layer';
  };
  attributes: {
    lead: Schema.Attribute.String;
    strong: Schema.Attribute.String;
    tail: Schema.Attribute.String;
  };
}

export interface DefaultCaseStudiesItems extends Struct.ComponentSchema {
  collectionName: 'components_default_case_studies_items';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Case Studies Items';
    icon: 'layer';
  };
  attributes: {
    hook: Schema.Attribute.String;
    industry: Schema.Attribute.String;
    label: Schema.Attribute.String;
    shifts: Schema.Attribute.Component<
      'default.case-studies-items-shifts',
      true
    >;
    summary: Schema.Attribute.String;
    tags: Schema.Attribute.Component<
      'default.case-studies-items-tags-item',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface DefaultCaseStudiesItemsShifts extends Struct.ComponentSchema {
  collectionName: 'components_default_case_studies_items_shifts';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Case Studies Items Shifts';
    icon: 'layer';
  };
  attributes: {
    after: Schema.Attribute.String;
    before: Schema.Attribute.String;
    fill: Schema.Attribute.Integer;
    metric: Schema.Attribute.String;
  };
}

export interface DefaultCaseStudiesItemsTagsItem
  extends Struct.ComponentSchema {
  collectionName: 'components_default_case_studies_items_tags_items';
  info: {
    description: 'Auto-generated array item component from JSON import';
    displayName: 'Case Studies Items Tags Item';
    icon: 'layer';
  };
  attributes: {
    value: Schema.Attribute.String;
  };
}

export interface DefaultCaseStudiesThemeGradientText
  extends Struct.ComponentSchema {
  collectionName: 'components_default_case_studies_theme_gradient_texts';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Case Studies Theme Gradient Text';
    icon: 'layer';
  };
  attributes: {
    background: Schema.Attribute.String;
    backgroundClip: Schema.Attribute.String;
    color: Schema.Attribute.String;
    WebkitBackgroundClip: Schema.Attribute.String;
    WebkitTextFillColor: Schema.Attribute.String;
  };
}

export interface DefaultCaseStudiesThemeTokens extends Struct.ComponentSchema {
  collectionName: 'components_default_case_studies_theme_tokens';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Case Studies Theme Tokens';
    icon: 'layer';
  };
  attributes: {
    accent1: Schema.Attribute.String;
    accent2: Schema.Attribute.String;
    accent3: Schema.Attribute.String;
    bg: Schema.Attribute.String;
    body: Schema.Attribute.String;
    cardCopy: Schema.Attribute.String;
    cardLabel: Schema.Attribute.String;
    cardLabelHi: Schema.Attribute.String;
    ink: Schema.Attribute.String;
    muted: Schema.Attribute.String;
    surface: Schema.Attribute.String;
    tagText: Schema.Attribute.String;
  };
}

export interface DefaultComingSoonContent extends Struct.ComponentSchema {
  collectionName: 'components_default_coming_soon_contents';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Coming Soon Content';
    icon: 'layer';
  };
  attributes: {
    actions: Schema.Attribute.Component<
      'default.coming-soon-content-actions',
      true
    >;
    badge: Schema.Attribute.String;
    body: Schema.Attribute.String;
    fallbackDesc: Schema.Attribute.String;
    homeLabel: Schema.Attribute.String;
    meanwhile: Schema.Attribute.Component<
      'default.coming-soon-content-meanwhile',
      true
    >;
    meanwhileLabel: Schema.Attribute.String;
  };
}

export interface DefaultComingSoonContentActions
  extends Struct.ComponentSchema {
  collectionName: 'components_default_coming_soon_content_actions';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Coming Soon Content Actions';
    icon: 'layer';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
    variant: Schema.Attribute.String;
  };
}

export interface DefaultComingSoonContentMeanwhile
  extends Struct.ComponentSchema {
  collectionName: 'components_default_coming_soon_content_meanwhiles';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Coming Soon Content Meanwhile';
    icon: 'layer';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface DefaultConfigFlipCardQrCornersItem
  extends Struct.ComponentSchema {
  collectionName: 'components_default_config_flip_card_qr_corners_items';
  info: {
    description: 'Auto-generated array item component from JSON import';
    displayName: 'Config Flip Card Qr Corners Item';
    icon: 'layer';
  };
  attributes: {
    value: Schema.Attribute.String;
  };
}

export interface DefaultConfigFlipCardTintFormula
  extends Struct.ComponentSchema {
  collectionName: 'components_default_config_flip_card_tint_formulas';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Config Flip Card Tint Formula';
    icon: 'layer';
  };
  attributes: {
    bgAlphaHex: Schema.Attribute.String;
    borderAlphaHex: Schema.Attribute.String;
    iconAlphaHex: Schema.Attribute.String;
    pulseBaseSeconds: Schema.Attribute.Integer;
    pulseStepSeconds: Schema.Attribute.Decimal;
  };
}

export interface DefaultConfigNotFoundNoise extends Struct.ComponentSchema {
  collectionName: 'components_default_config_not_found_noises';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Config Not Found Noise';
    icon: 'layer';
  };
  attributes: {
    baseFrequency: Schema.Attribute.Decimal;
    numOctaves: Schema.Attribute.Integer;
    size: Schema.Attribute.Integer;
  };
}

export interface DefaultConfigNotFoundStars extends Struct.ComponentSchema {
  collectionName: 'components_default_config_not_found_stars';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Config Not Found Stars';
    icon: 'layer';
  };
  attributes: {
    colors: Schema.Attribute.Component<
      'default.config-not-found-stars-colors-item',
      true
    >;
    count: Schema.Attribute.Integer;
    formula: Schema.Attribute.Component<
      'default.config-not-found-stars-formula',
      false
    >;
    sizes: Schema.Attribute.Component<
      'default.config-not-found-stars-sizes-item',
      true
    >;
  };
}

export interface DefaultConfigNotFoundStarsColorsItem
  extends Struct.ComponentSchema {
  collectionName: 'components_default_config_not_found_stars_colors_items';
  info: {
    description: 'Auto-generated array item component from JSON import';
    displayName: 'Config Not Found Stars Colors Item';
    icon: 'layer';
  };
  attributes: {
    value: Schema.Attribute.String;
  };
}

export interface DefaultConfigNotFoundStarsFormula
  extends Struct.ComponentSchema {
  collectionName: 'components_default_config_not_found_stars_formulas';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Config Not Found Stars Formula';
    icon: 'layer';
  };
  attributes: {
    delayRange: Schema.Attribute.Integer;
    delayStep: Schema.Attribute.Decimal;
    durationBase: Schema.Attribute.Integer;
    durationRange: Schema.Attribute.Integer;
    durationStep: Schema.Attribute.Decimal;
    dxCentre: Schema.Attribute.Integer;
    dxModulo: Schema.Attribute.Integer;
    dxStep: Schema.Attribute.Integer;
    dyCentre: Schema.Attribute.Integer;
    dyModulo: Schema.Attribute.Integer;
    dyStep: Schema.Attribute.Integer;
    glowAlphaHex: Schema.Attribute.String;
    glowBlurOffset: Schema.Attribute.Integer;
    glowBlurSizeFactor: Schema.Attribute.Integer;
    leftBase: Schema.Attribute.Integer;
    leftRange: Schema.Attribute.Integer;
    leftStep: Schema.Attribute.Decimal;
    topBase: Schema.Attribute.Integer;
    topRange: Schema.Attribute.Integer;
    topStep: Schema.Attribute.Decimal;
  };
}

export interface DefaultConfigNotFoundStarsSizesItem
  extends Struct.ComponentSchema {
  collectionName: 'components_default_config_not_found_stars_sizes_items';
  info: {
    description: 'Auto-generated array item component from JSON import';
    displayName: 'Config Not Found Stars Sizes Item';
    icon: 'layer';
  };
  attributes: {
    value: Schema.Attribute.Decimal;
  };
}

export interface DefaultConfigServiceSectionParticles
  extends Struct.ComponentSchema {
  collectionName: 'components_default_config_service_section_particles';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Config Service Section Particles';
    icon: 'layer';
  };
  attributes: {
    background: Schema.Attribute.String;
    delay: Schema.Attribute.Decimal;
    duration: Schema.Attribute.Integer;
    filter: Schema.Attribute.String;
    height: Schema.Attribute.Integer;
    left: Schema.Attribute.String;
    top: Schema.Attribute.String;
    width: Schema.Attribute.Integer;
  };
}

export interface DefaultConfigServiceSectionStats
  extends Struct.ComponentSchema {
  collectionName: 'components_default_config_service_section_stats';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Config Service Section Stats';
    icon: 'layer';
  };
  attributes: {
    color: Schema.Attribute.String;
    delay: Schema.Attribute.Decimal;
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface DefaultConsultationCtaContent extends Struct.ComponentSchema {
  collectionName: 'components_default_consultation_cta_contents';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Consultation Cta Content';
    icon: 'layer';
  };
  attributes: {
    badge: Schema.Attribute.String;
    growthCard: Schema.Attribute.Component<
      'default.consultation-cta-content-growth-card',
      false
    >;
    headingHighlight: Schema.Attribute.String;
    headingLead: Schema.Attribute.String;
    panel: Schema.Attribute.Component<
      'default.consultation-cta-content-panel',
      false
    >;
    points: Schema.Attribute.Component<
      'default.consultation-cta-content-points',
      true
    >;
    resources: Schema.Attribute.Component<
      'default.consultation-cta-content-resources',
      false
    >;
    services: Schema.Attribute.Component<
      'default.consultation-cta-content-services',
      true
    >;
    subheading: Schema.Attribute.String;
    trustNote: Schema.Attribute.String;
  };
}

export interface DefaultConsultationCtaContentGrowthCard
  extends Struct.ComponentSchema {
  collectionName: 'components_default_consultation_cta_content_growth_cards';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Consultation Cta Content Growth Card';
    icon: 'layer';
  };
  attributes: {
    caption: Schema.Attribute.String;
    legend: Schema.Attribute.String;
    stackLabel: Schema.Attribute.String;
  };
}

export interface DefaultConsultationCtaContentPanel
  extends Struct.ComponentSchema {
  collectionName: 'components_default_consultation_cta_content_panels';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Consultation Cta Content Panel';
    icon: 'layer';
  };
  attributes: {
    badge: Schema.Attribute.String;
    headingHighlight: Schema.Attribute.String;
    headingLine1: Schema.Attribute.String;
    headingLine2: Schema.Attribute.String;
    ref: Schema.Attribute.String;
  };
}

export interface DefaultConsultationCtaContentPoints
  extends Struct.ComponentSchema {
  collectionName: 'components_default_consultation_cta_content_points';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Consultation Cta Content Points';
    icon: 'layer';
  };
  attributes: {
    desc: Schema.Attribute.String;
    num: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DefaultConsultationCtaContentResources
  extends Struct.ComponentSchema {
  collectionName: 'components_default_consultation_cta_content_resources';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Consultation Cta Content Resources';
    icon: 'layer';
  };
  attributes: {
    items: Schema.Attribute.Component<
      'default.consultation-cta-content-resources-items',
      true
    >;
    label: Schema.Attribute.String;
  };
}

export interface DefaultConsultationCtaContentResourcesItems
  extends Struct.ComponentSchema {
  collectionName: 'components_default_consultation_cta_content_resources_items';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Consultation Cta Content Resources Items';
    icon: 'layer';
  };
  attributes: {
    desc: Schema.Attribute.String;
    file: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface DefaultConsultationCtaContentServices
  extends Struct.ComponentSchema {
  collectionName: 'components_default_consultation_cta_content_services';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Consultation Cta Content Services';
    icon: 'layer';
  };
  attributes: {
    color: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface DefaultConsultationCtaForm extends Struct.ComponentSchema {
  collectionName: 'components_default_consultation_cta_forms';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Consultation Cta Form';
    icon: 'layer';
  };
  attributes: {
    embedScript: Schema.Attribute.String;
    minHeight: Schema.Attribute.Integer;
    name: Schema.Attribute.String;
    title: Schema.Attribute.String;
    widgetBaseUrl: Schema.Attribute.String;
  };
}

export interface DefaultContentTestimonialsContent
  extends Struct.ComponentSchema {
  collectionName: 'components_default_content_testimonials_contents';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Content Testimonials Content';
    icon: 'layer';
  };
  attributes: {
    badge: Schema.Attribute.String;
    bottomCta: Schema.Attribute.Component<
      'default.content-testimonials-content-bottom-cta',
      false
    >;
    headingLead: Schema.Attribute.String;
    headingRest: Schema.Attribute.String;
    rows: Schema.Attribute.Component<
      'default.content-testimonials-content-rows',
      true
    >;
    subheading: Schema.Attribute.String;
    surface: Schema.Attribute.String;
  };
}

export interface DefaultContentTestimonialsContentBottomCta
  extends Struct.ComponentSchema {
  collectionName: 'components_default_content_testimonials_content_bottom_ctas';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Content Testimonials Content Bottom Cta';
    icon: 'layer';
  };
  attributes: {
    highlight: Schema.Attribute.String;
    post: Schema.Attribute.String;
    pre: Schema.Attribute.String;
  };
}

export interface DefaultContentTestimonialsContentRows
  extends Struct.ComponentSchema {
  collectionName: 'components_default_content_testimonials_content_rows';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Content Testimonials Content Rows';
    icon: 'layer';
  };
  attributes: {
    direction: Schema.Attribute.String;
    duration: Schema.Attribute.Integer;
  };
}

export interface DefaultContentTestimonialsItems
  extends Struct.ComponentSchema {
  collectionName: 'components_default_content_testimonials_items';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Content Testimonials Items';
    icon: 'layer';
  };
  attributes: {
    author: Schema.Attribute.String;
    avatar: Schema.Attribute.String;
    avatarImage: Schema.Attribute.String;
    company: Schema.Attribute.String;
    companyType: Schema.Attribute.String;
    metric: Schema.Attribute.Component<
      'default.content-testimonials-items-metric',
      false
    >;
    quote: Schema.Attribute.String;
    rating: Schema.Attribute.Integer;
    role: Schema.Attribute.String;
  };
}

export interface DefaultContentTestimonialsItemsMetric
  extends Struct.ComponentSchema {
  collectionName: 'components_default_content_testimonials_items_metrics';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Content Testimonials Items Metric';
    icon: 'layer';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface DefaultCoursesModulesItem extends Struct.ComponentSchema {
  collectionName: 'components_default_courses_modules_items';
  info: {
    description: 'Auto-generated array item component from JSON import';
    displayName: 'Courses Modules Item';
    icon: 'layer';
  };
  attributes: {
    value: Schema.Attribute.String;
  };
}

export interface DefaultFaqFaqs extends Struct.ComponentSchema {
  collectionName: 'components_default_faq_faqs';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Faq Faqs';
    icon: 'layer';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface DefaultFaqHeadline extends Struct.ComponentSchema {
  collectionName: 'components_default_faq_headlines';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Faq Headline';
    icon: 'layer';
  };
  attributes: {
    accent: Schema.Attribute.String;
    plain: Schema.Attribute.String;
  };
}

export interface DefaultFaqSupport extends Struct.ComponentSchema {
  collectionName: 'components_default_faq_supports';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Faq Support';
    icon: 'layer';
  };
  attributes: {
    buttonHref: Schema.Attribute.String;
    buttonLabel: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    subtext: Schema.Attribute.String;
  };
}

export interface DefaultFinalCtaPillsItem extends Struct.ComponentSchema {
  collectionName: 'components_default_final_cta_pills_items';
  info: {
    description: 'Auto-generated array item component from JSON import';
    displayName: 'Final Cta Pills Item';
    icon: 'layer';
  };
  attributes: {
    value: Schema.Attribute.String;
  };
}

export interface DefaultFinalCtaPrimary extends Struct.ComponentSchema {
  collectionName: 'components_default_final_cta_primaries';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Final Cta Primary';
    icon: 'layer';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface DefaultFinalCtaSecondary extends Struct.ComponentSchema {
  collectionName: 'components_default_final_cta_secondaries';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Final Cta Secondary';
    icon: 'layer';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface DefaultFinalCtaTrustItem extends Struct.ComponentSchema {
  collectionName: 'components_default_final_cta_trust_items';
  info: {
    description: 'Auto-generated array item component from JSON import';
    displayName: 'Final Cta Trust Item';
    icon: 'layer';
  };
  attributes: {
    value: Schema.Attribute.String;
  };
}

export interface DefaultFlipCardDefaults extends Struct.ComponentSchema {
  collectionName: 'components_default_flip_card_defaults';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Flip Card Defaults';
    icon: 'layer';
  };
  attributes: {
    backTitle: Schema.Attribute.String;
    email: Schema.Attribute.String;
    flipAriaLabel: Schema.Attribute.String;
    flipPrompt: Schema.Attribute.String;
    logo: Schema.Attribute.String;
    logoAlt: Schema.Attribute.String;
    phoneNumbers: Schema.Attribute.Component<
      'default.flip-card-defaults-phone-numbers-item',
      true
    >;
    qrAlt: Schema.Attribute.String;
    qrCode: Schema.Attribute.String;
    reasonsTitle: Schema.Attribute.String;
  };
}

export interface DefaultFlipCardDefaultsPhoneNumbersItem
  extends Struct.ComponentSchema {
  collectionName: 'components_default_flip_card_defaults_phone_numbers_items';
  info: {
    description: 'Auto-generated array item component from JSON import';
    displayName: 'Flip Card Defaults Phone Numbers Item';
    icon: 'layer';
  };
  attributes: {
    value: Schema.Attribute.String;
  };
}

export interface DefaultFlipCardReasons extends Struct.ComponentSchema {
  collectionName: 'components_default_flip_card_reasons';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Flip Card Reasons';
    icon: 'layer';
  };
  attributes: {
    color: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface DefaultFooterColumns extends Struct.ComponentSchema {
  collectionName: 'components_default_footer_columns';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Footer Columns';
    icon: 'layer';
  };
  attributes: {
    heading: Schema.Attribute.String;
    links: Schema.Attribute.Component<'default.footer-columns-links', true>;
  };
}

export interface DefaultFooterColumnsLinks extends Struct.ComponentSchema {
  collectionName: 'components_default_footer_columns_links';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Footer Columns Links';
    icon: 'layer';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface DefaultFooterContact extends Struct.ComponentSchema {
  collectionName: 'components_default_footer_contacts';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Footer Contact';
    icon: 'layer';
  };
  attributes: {
    email: Schema.Attribute.Component<'default.footer-contact-email', false>;
    phones: Schema.Attribute.Component<'default.footer-contact-phones', true>;
  };
}

export interface DefaultFooterContactEmail extends Struct.ComponentSchema {
  collectionName: 'components_default_footer_contact_emails';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Footer Contact Email';
    icon: 'layer';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface DefaultFooterContactPhones extends Struct.ComponentSchema {
  collectionName: 'components_default_footer_contact_phones';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Footer Contact Phones';
    icon: 'layer';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface DefaultFooterContent extends Struct.ComponentSchema {
  collectionName: 'components_default_footer_contents';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Footer Content';
    icon: 'layer';
  };
  attributes: {
    brand: Schema.Attribute.Component<'default.footer-content-brand', false>;
    copyright: Schema.Attribute.String;
  };
}

export interface DefaultFooterContentBrand extends Struct.ComponentSchema {
  collectionName: 'components_default_footer_content_brands';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Footer Content Brand';
    icon: 'layer';
  };
  attributes: {
    ariaLabel: Schema.Attribute.String;
    followLabel: Schema.Attribute.String;
    href: Schema.Attribute.String;
    logoAlt: Schema.Attribute.String;
    name: Schema.Attribute.String;
    subheading: Schema.Attribute.String;
    tagline: Schema.Attribute.String;
  };
}

export interface DefaultFooterLegal extends Struct.ComponentSchema {
  collectionName: 'components_default_footer_legals';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Footer Legal';
    icon: 'layer';
  };
  attributes: {
    desc: Schema.Attribute.String;
    href: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface DefaultFooterSocials extends Struct.ComponentSchema {
  collectionName: 'components_default_footer_socials';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Footer Socials';
    icon: 'layer';
  };
  attributes: {
    href: Schema.Attribute.String;
    iconKey: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface DefaultHeroContent extends Struct.ComponentSchema {
  collectionName: 'components_default_hero_contents';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Hero Content';
    icon: 'layer';
  };
  attributes: {
    brand: Schema.Attribute.String;
    eyebrow: Schema.Attribute.String;
    headlineLead: Schema.Attribute.String;
    headlineMain: Schema.Attribute.String;
    leadAfter: Schema.Attribute.String;
    leadBefore: Schema.Attribute.String;
    leadStrong: Schema.Attribute.String;
    subheadline: Schema.Attribute.String;
  };
}

export interface DefaultHeroCtas extends Struct.ComponentSchema {
  collectionName: 'components_default_hero_ctas';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Hero Ctas';
    icon: 'layer';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
    variant: Schema.Attribute.String;
  };
}

export interface DefaultHeroParticlesColorsItem extends Struct.ComponentSchema {
  collectionName: 'components_default_hero_particles_colors_items';
  info: {
    description: 'Auto-generated array item component from JSON import';
    displayName: 'Hero Particles Colors Item';
    icon: 'layer';
  };
  attributes: {
    value: Schema.Attribute.String;
  };
}

export interface DefaultHeroParticlesFormula extends Struct.ComponentSchema {
  collectionName: 'components_default_hero_particles_formulas';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Hero Particles Formula';
    icon: 'layer';
  };
  attributes: {
    delayRange: Schema.Attribute.Integer;
    delayStep: Schema.Attribute.Decimal;
    durationBase: Schema.Attribute.Integer;
    durationRange: Schema.Attribute.Integer;
    durationStep: Schema.Attribute.Decimal;
    dxCentre: Schema.Attribute.Integer;
    dxModulo: Schema.Attribute.Integer;
    dxStep: Schema.Attribute.Integer;
    dyCentre: Schema.Attribute.Integer;
    dyModulo: Schema.Attribute.Integer;
    dyStep: Schema.Attribute.Integer;
    glowAlphaHex: Schema.Attribute.String;
    glowBlurOffset: Schema.Attribute.Integer;
    glowBlurSizeFactor: Schema.Attribute.Integer;
    leftBase: Schema.Attribute.Integer;
    leftRange: Schema.Attribute.Integer;
    leftStep: Schema.Attribute.Decimal;
    topBase: Schema.Attribute.Integer;
    topRange: Schema.Attribute.Integer;
    topStep: Schema.Attribute.Decimal;
  };
}

export interface DefaultHeroParticlesSizesItem extends Struct.ComponentSchema {
  collectionName: 'components_default_hero_particles_sizes_items';
  info: {
    description: 'Auto-generated array item component from JSON import';
    displayName: 'Hero Particles Sizes Item';
    icon: 'layer';
  };
  attributes: {
    value: Schema.Attribute.Integer;
  };
}

export interface DefaultHeroPolicyCta extends Struct.ComponentSchema {
  collectionName: 'components_default_hero_policy_ctas';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Hero Policy Cta';
    icon: 'layer';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface DefaultHeroStats extends Struct.ComponentSchema {
  collectionName: 'components_default_hero_stats';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Hero Stats';
    icon: 'layer';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface DefaultMainServicesContent extends Struct.ComponentSchema {
  collectionName: 'components_default_main_services_contents';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Main Services Content';
    icon: 'layer';
  };
  attributes: {
    badge: Schema.Attribute.String;
    comingSoonLabel: Schema.Attribute.String;
    headingLead: Schema.Attribute.String;
    headingRest: Schema.Attribute.String;
    subheading: Schema.Attribute.String;
  };
}

export interface DefaultMainServicesServices extends Struct.ComponentSchema {
  collectionName: 'components_default_main_services_services';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Main Services Services';
    icon: 'layer';
  };
  attributes: {
    ctaLabel: Schema.Attribute.String;
    groups: Schema.Attribute.Component<
      'default.main-services-services-groups',
      true
    >;
    href: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    items: Schema.Attribute.Component<
      'default.main-services-services-items',
      true
    >;
    kicker: Schema.Attribute.String;
    tagline: Schema.Attribute.String;
    taglineStrong: Schema.Attribute.String;
    title: Schema.Attribute.String;
    wide: Schema.Attribute.Boolean;
  };
}

export interface DefaultMainServicesServicesGroups
  extends Struct.ComponentSchema {
  collectionName: 'components_default_main_services_services_groups';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Main Services Services Groups';
    icon: 'layer';
  };
  attributes: {
    icon: Schema.Attribute.String;
    items: Schema.Attribute.Component<
      'default.main-services-services-groups-items-item',
      true
    >;
    label: Schema.Attribute.String;
  };
}

export interface DefaultMainServicesServicesGroupsItemsItem
  extends Struct.ComponentSchema {
  collectionName: 'components_default_main_services_services_groups_items_items';
  info: {
    description: 'Auto-generated array item component from JSON import';
    displayName: 'Main Services Services Groups Items Item';
    icon: 'layer';
  };
  attributes: {
    value: Schema.Attribute.String;
  };
}

export interface DefaultMainServicesServicesItems
  extends Struct.ComponentSchema {
  collectionName: 'components_default_main_services_services_items';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Main Services Services Items';
    icon: 'layer';
  };
  attributes: {
    comingSoon: Schema.Attribute.Boolean;
    label: Schema.Attribute.String;
  };
}

export interface DefaultMotionEasing extends Struct.ComponentSchema {
  collectionName: 'components_default_motion_easings';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Motion Easing';
    icon: 'layer';
  };
  attributes: {
    entrance: Schema.Attribute.Component<
      'default.motion-easing-entrance-item',
      true
    >;
    smooth: Schema.Attribute.Component<
      'default.motion-easing-smooth-item',
      true
    >;
  };
}

export interface DefaultMotionEasingEntranceItem
  extends Struct.ComponentSchema {
  collectionName: 'components_default_motion_easing_entrance_items';
  info: {
    description: 'Auto-generated array item component from JSON import';
    displayName: 'Motion Easing Entrance Item';
    icon: 'layer';
  };
  attributes: {
    value: Schema.Attribute.Decimal;
  };
}

export interface DefaultMotionEasingSmoothItem extends Struct.ComponentSchema {
  collectionName: 'components_default_motion_easing_smooth_items';
  info: {
    description: 'Auto-generated array item component from JSON import';
    displayName: 'Motion Easing Smooth Item';
    icon: 'layer';
  };
  attributes: {
    value: Schema.Attribute.Decimal;
  };
}

export interface DefaultMotionSprings extends Struct.ComponentSchema {
  collectionName: 'components_default_motion_springs';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Motion Springs';
    icon: 'layer';
  };
  attributes: {
    dock: Schema.Attribute.Component<'default.motion-springs-dock', false>;
    fast: Schema.Attribute.Component<'default.motion-springs-fast', false>;
    snappy: Schema.Attribute.Component<'default.motion-springs-snappy', false>;
  };
}

export interface DefaultMotionSpringsDock extends Struct.ComponentSchema {
  collectionName: 'components_default_motion_springs_docks';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Motion Springs Dock';
    icon: 'layer';
  };
  attributes: {
    damping: Schema.Attribute.Integer;
    mass: Schema.Attribute.Decimal;
    stiffness: Schema.Attribute.Integer;
  };
}

export interface DefaultMotionSpringsFast extends Struct.ComponentSchema {
  collectionName: 'components_default_motion_springs_fasts';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Motion Springs Fast';
    icon: 'layer';
  };
  attributes: {
    damping: Schema.Attribute.Integer;
    mass: Schema.Attribute.Decimal;
    stiffness: Schema.Attribute.Integer;
    type: Schema.Attribute.String;
  };
}

export interface DefaultMotionSpringsSnappy extends Struct.ComponentSchema {
  collectionName: 'components_default_motion_springs_snappies';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Motion Springs Snappy';
    icon: 'layer';
  };
  attributes: {
    damping: Schema.Attribute.Integer;
    stiffness: Schema.Attribute.Integer;
    type: Schema.Attribute.String;
  };
}

export interface DefaultMotionViewport extends Struct.ComponentSchema {
  collectionName: 'components_default_motion_viewports';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Motion Viewport';
    icon: 'layer';
  };
  attributes: {
    once: Schema.Attribute.Component<'default.motion-viewport-once', false>;
    repeat: Schema.Attribute.Component<'default.motion-viewport-repeat', false>;
  };
}

export interface DefaultMotionViewportOnce extends Struct.ComponentSchema {
  collectionName: 'components_default_motion_viewport_onces';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Motion Viewport Once';
    icon: 'layer';
  };
  attributes: {
    margin: Schema.Attribute.String;
    once: Schema.Attribute.Boolean;
  };
}

export interface DefaultMotionViewportRepeat extends Struct.ComponentSchema {
  collectionName: 'components_default_motion_viewport_repeats';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Motion Viewport Repeat';
    icon: 'layer';
  };
  attributes: {
    margin: Schema.Attribute.String;
    once: Schema.Attribute.Boolean;
  };
}

export interface DefaultNavContent extends Struct.ComponentSchema {
  collectionName: 'components_default_nav_contents';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Nav Content';
    icon: 'layer';
  };
  attributes: {
    brandHref: Schema.Attribute.String;
    brandLogoAlt: Schema.Attribute.String;
    cta: Schema.Attribute.Component<'default.nav-content-cta', false>;
    menuToggleLabel: Schema.Attribute.String;
  };
}

export interface DefaultNavContentCta extends Struct.ComponentSchema {
  collectionName: 'components_default_nav_content_ctas';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Nav Content Cta';
    icon: 'layer';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface DefaultNavItems extends Struct.ComponentSchema {
  collectionName: 'components_default_nav_items';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Nav Items';
    icon: 'layer';
  };
  attributes: {
    children: Schema.Attribute.Component<'default.nav-items-children', true>;
    href: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface DefaultNavItemsChildren extends Struct.ComponentSchema {
  collectionName: 'components_default_nav_items_children';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Nav Items Children';
    icon: 'layer';
  };
  attributes: {
    children: Schema.Attribute.Component<
      'default.nav-items-children-children',
      true
    >;
    comingSoon: Schema.Attribute.Boolean;
    desc: Schema.Attribute.String;
    href: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface DefaultNavItemsChildrenChildren
  extends Struct.ComponentSchema {
  collectionName: 'components_default_nav_items_children_children';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Nav Items Children Children';
    icon: 'layer';
  };
  attributes: {
    children: Schema.Attribute.Component<
      'default.nav-items-children-children-children',
      true
    >;
    desc: Schema.Attribute.String;
    href: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface DefaultNavItemsChildrenChildrenChildren
  extends Struct.ComponentSchema {
  collectionName: 'components_default_nav_items_children_children_children';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Nav Items Children Children Children';
    icon: 'layer';
  };
  attributes: {
    href: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface DefaultNotFoundContent extends Struct.ComponentSchema {
  collectionName: 'components_default_not_found_contents';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Not Found Content';
    icon: 'layer';
  };
  attributes: {
    actions: Schema.Attribute.Component<
      'default.not-found-content-actions',
      true
    >;
    brandAriaLabel: Schema.Attribute.String;
    brandLogoAlt: Schema.Attribute.String;
    code: Schema.Attribute.String;
    description: Schema.Attribute.String;
    eyebrow: Schema.Attribute.String;
    footerNote: Schema.Attribute.String;
    sceneAlt: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DefaultNotFoundContentActions extends Struct.ComponentSchema {
  collectionName: 'components_default_not_found_content_actions';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Not Found Content Actions';
    icon: 'layer';
  };
  attributes: {
    external: Schema.Attribute.Boolean;
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
    variant: Schema.Attribute.String;
  };
}

export interface DefaultOurProcessContent extends Struct.ComponentSchema {
  collectionName: 'components_default_our_process_contents';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Our Process Content';
    icon: 'layer';
  };
  attributes: {
    badge: Schema.Attribute.String;
    headingHighlight: Schema.Attribute.String;
    headingLead: Schema.Attribute.String;
    subheading: Schema.Attribute.String;
    tabs: Schema.Attribute.Component<'default.our-process-content-tabs', false>;
  };
}

export interface DefaultOurProcessContentTabs extends Struct.ComponentSchema {
  collectionName: 'components_default_our_process_content_tabs';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Our Process Content Tabs';
    icon: 'layer';
  };
  attributes: {
    ariaLabel: Schema.Attribute.String;
    hint: Schema.Attribute.String;
  };
}

export interface DefaultOurProcessParticlesParticles
  extends Struct.ComponentSchema {
  collectionName: 'components_default_our_process_particles_particles';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Our Process Particles Particles';
    icon: 'layer';
  };
  attributes: {
    d: Schema.Attribute.String;
    dl: Schema.Attribute.String;
    s: Schema.Attribute.Integer;
    x: Schema.Attribute.String;
    y: Schema.Attribute.String;
  };
}

export interface DefaultOurProcessTracks extends Struct.ComponentSchema {
  collectionName: 'components_default_our_process_tracks';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Our Process Tracks';
    icon: 'layer';
  };
  attributes: {
    accent: Schema.Attribute.String;
    label: Schema.Attribute.String;
    steps: Schema.Attribute.Component<'default.our-process-tracks-steps', true>;
    trackId: Schema.Attribute.String;
  };
}

export interface DefaultOurProcessTracksSteps extends Struct.ComponentSchema {
  collectionName: 'components_default_our_process_tracks_steps';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Our Process Tracks Steps';
    icon: 'layer';
  };
  attributes: {
    accent: Schema.Attribute.String;
    desc: Schema.Attribute.String;
    glow: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    num: Schema.Attribute.String;
    phase: Schema.Attribute.String;
    tag: Schema.Attribute.String;
    title: Schema.Attribute.String;
    visual: Schema.Attribute.Component<
      'default.our-process-tracks-steps-visual',
      false
    >;
  };
}

export interface DefaultOurProcessTracksStepsVisual
  extends Struct.ComponentSchema {
  collectionName: 'components_default_our_process_tracks_steps_visuals';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Our Process Tracks Steps Visual';
    icon: 'layer';
  };
  attributes: {
    caption: Schema.Attribute.String;
    cutLabel: Schema.Attribute.String;
    kind: Schema.Attribute.String;
    lanes: Schema.Attribute.Component<
      'default.our-process-tracks-steps-visual-lanes-item',
      true
    >;
    modules: Schema.Attribute.Component<
      'default.our-process-tracks-steps-visual-modules-item',
      true
    >;
    notes: Schema.Attribute.Component<
      'default.our-process-tracks-steps-visual-notes-item',
      true
    >;
    ringLabel: Schema.Attribute.String;
    rows: Schema.Attribute.Component<
      'default.our-process-tracks-steps-visual-rows-item',
      true
    >;
    stages: Schema.Attribute.Component<
      'default.our-process-tracks-steps-visual-stages-item',
      true
    >;
    stagingLabel: Schema.Attribute.String;
    statuses: Schema.Attribute.Component<
      'default.our-process-tracks-steps-visual-statuses-item',
      true
    >;
    uptimeLabel: Schema.Attribute.String;
    visualStatus: Schema.Attribute.String;
    winnerLabel: Schema.Attribute.String;
  };
}

export interface DefaultOurProcessTracksStepsVisualLanesItem
  extends Struct.ComponentSchema {
  collectionName: 'components_default_our_process_tracks_steps_visual_lanes_items';
  info: {
    description: 'Auto-generated array item component from JSON import';
    displayName: 'Our Process Tracks Steps Visual Lanes Item';
    icon: 'layer';
  };
  attributes: {
    value: Schema.Attribute.String;
  };
}

export interface DefaultOurProcessTracksStepsVisualModulesItem
  extends Struct.ComponentSchema {
  collectionName: 'components_default_our_process_tracks_steps_visual_modules_items';
  info: {
    description: 'Auto-generated array item component from JSON import';
    displayName: 'Our Process Tracks Steps Visual Modules Item';
    icon: 'layer';
  };
  attributes: {
    value: Schema.Attribute.String;
  };
}

export interface DefaultOurProcessTracksStepsVisualNotesItem
  extends Struct.ComponentSchema {
  collectionName: 'components_default_our_process_tracks_steps_visual_notes_items';
  info: {
    description: 'Auto-generated array item component from JSON import';
    displayName: 'Our Process Tracks Steps Visual Notes Item';
    icon: 'layer';
  };
  attributes: {
    value: Schema.Attribute.String;
  };
}

export interface DefaultOurProcessTracksStepsVisualRowsItem
  extends Struct.ComponentSchema {
  collectionName: 'components_default_our_process_tracks_steps_visual_rows_items';
  info: {
    description: 'Auto-generated array item component from JSON import';
    displayName: 'Our Process Tracks Steps Visual Rows Item';
    icon: 'layer';
  };
  attributes: {
    value: Schema.Attribute.String;
  };
}

export interface DefaultOurProcessTracksStepsVisualStagesItem
  extends Struct.ComponentSchema {
  collectionName: 'components_default_our_process_tracks_steps_visual_stages_items';
  info: {
    description: 'Auto-generated array item component from JSON import';
    displayName: 'Our Process Tracks Steps Visual Stages Item';
    icon: 'layer';
  };
  attributes: {
    value: Schema.Attribute.String;
  };
}

export interface DefaultOurProcessTracksStepsVisualStatusesItem
  extends Struct.ComponentSchema {
  collectionName: 'components_default_our_process_tracks_steps_visual_statuses_items';
  info: {
    description: 'Auto-generated array item component from JSON import';
    displayName: 'Our Process Tracks Steps Visual Statuses Item';
    icon: 'layer';
  };
  attributes: {
    value: Schema.Attribute.String;
  };
}

export interface DefaultSectionCtaPrimary extends Struct.ComponentSchema {
  collectionName: 'components_default_section_cta_primaries';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Section Cta Primary';
    icon: 'layer';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface DefaultSectionCtaSecondary extends Struct.ComponentSchema {
  collectionName: 'components_default_section_cta_secondaries';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Section Cta Secondary';
    icon: 'layer';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface DefaultServiceTabsCardOffsets extends Struct.ComponentSchema {
  collectionName: 'components_default_service_tabs_card_offsets';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Service Tabs Card Offsets';
    icon: 'layer';
  };
  attributes: {
    opacity: Schema.Attribute.Decimal;
    rotate: Schema.Attribute.Integer;
    scale: Schema.Attribute.Decimal;
    x: Schema.Attribute.Integer;
    y: Schema.Attribute.Integer;
    zIndex: Schema.Attribute.Integer;
  };
}

export interface DefaultServiceTabsTabs extends Struct.ComponentSchema {
  collectionName: 'components_default_service_tabs_tabs';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Service Tabs Tabs';
    icon: 'layer';
  };
  attributes: {
    color: Schema.Attribute.String;
    glow: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface DefaultServicesDesigning extends Struct.ComponentSchema {
  collectionName: 'components_default_services_designings';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Services Designing';
    icon: 'layer';
  };
  attributes: {
    description: Schema.Attribute.String;
    highlights: Schema.Attribute.Component<
      'default.services-designing-highlights-item',
      true
    >;
    learnMore: Schema.Attribute.Component<
      'default.services-designing-learn-more',
      false
    >;
    logo: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DefaultServicesDesigningHighlightsItem
  extends Struct.ComponentSchema {
  collectionName: 'components_default_services_designing_highlights_items';
  info: {
    description: 'Auto-generated array item component from JSON import';
    displayName: 'Services Designing Highlights Item';
    icon: 'layer';
  };
  attributes: {
    value: Schema.Attribute.String;
  };
}

export interface DefaultServicesDesigningLearnMore
  extends Struct.ComponentSchema {
  collectionName: 'components_default_services_designing_learn_mores';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Services Designing Learn More';
    icon: 'layer';
  };
  attributes: {
    conclusion: Schema.Attribute.String;
    intro: Schema.Attribute.String;
    points: Schema.Attribute.Component<
      'default.services-designing-learn-more-points-item',
      true
    >;
  };
}

export interface DefaultServicesDesigningLearnMorePointsItem
  extends Struct.ComponentSchema {
  collectionName: 'components_default_services_designing_learn_more_points_items';
  info: {
    description: 'Auto-generated array item component from JSON import';
    displayName: 'Services Designing Learn More Points Item';
    icon: 'layer';
  };
  attributes: {
    value: Schema.Attribute.String;
  };
}

export interface DefaultServicesDevelopment extends Struct.ComponentSchema {
  collectionName: 'components_default_services_developments';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Services Development';
    icon: 'layer';
  };
  attributes: {
    description: Schema.Attribute.String;
    highlights: Schema.Attribute.Component<
      'default.services-development-highlights-item',
      true
    >;
    learnMore: Schema.Attribute.Component<
      'default.services-development-learn-more',
      false
    >;
    logo: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DefaultServicesDevelopmentHighlightsItem
  extends Struct.ComponentSchema {
  collectionName: 'components_default_services_development_highlights_items';
  info: {
    description: 'Auto-generated array item component from JSON import';
    displayName: 'Services Development Highlights Item';
    icon: 'layer';
  };
  attributes: {
    value: Schema.Attribute.String;
  };
}

export interface DefaultServicesDevelopmentLearnMore
  extends Struct.ComponentSchema {
  collectionName: 'components_default_services_development_learn_mores';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Services Development Learn More';
    icon: 'layer';
  };
  attributes: {
    conclusion: Schema.Attribute.String;
    intro: Schema.Attribute.String;
    points: Schema.Attribute.Component<
      'default.services-development-learn-more-points-item',
      true
    >;
  };
}

export interface DefaultServicesDevelopmentLearnMorePointsItem
  extends Struct.ComponentSchema {
  collectionName: 'components_default_services_development_learn_more_points_items';
  info: {
    description: 'Auto-generated array item component from JSON import';
    displayName: 'Services Development Learn More Points Item';
    icon: 'layer';
  };
  attributes: {
    value: Schema.Attribute.String;
  };
}

export interface DefaultServicesMarketing extends Struct.ComponentSchema {
  collectionName: 'components_default_services_marketings';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Services Marketing';
    icon: 'layer';
  };
  attributes: {
    description: Schema.Attribute.String;
    highlights: Schema.Attribute.Component<
      'default.services-marketing-highlights-item',
      true
    >;
    learnMore: Schema.Attribute.Component<
      'default.services-marketing-learn-more',
      false
    >;
    logo: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DefaultServicesMarketingHighlightsItem
  extends Struct.ComponentSchema {
  collectionName: 'components_default_services_marketing_highlights_items';
  info: {
    description: 'Auto-generated array item component from JSON import';
    displayName: 'Services Marketing Highlights Item';
    icon: 'layer';
  };
  attributes: {
    value: Schema.Attribute.String;
  };
}

export interface DefaultServicesMarketingLearnMore
  extends Struct.ComponentSchema {
  collectionName: 'components_default_services_marketing_learn_mores';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Services Marketing Learn More';
    icon: 'layer';
  };
  attributes: {
    conclusion: Schema.Attribute.String;
    hook: Schema.Attribute.String;
    intro: Schema.Attribute.Text;
    points: Schema.Attribute.Component<
      'default.services-marketing-learn-more-points-item',
      true
    >;
  };
}

export interface DefaultServicesMarketingLearnMorePointsItem
  extends Struct.ComponentSchema {
  collectionName: 'components_default_services_marketing_learn_more_points_items';
  info: {
    description: 'Auto-generated array item component from JSON import';
    displayName: 'Services Marketing Learn More Points Item';
    icon: 'layer';
  };
  attributes: {
    value: Schema.Attribute.String;
  };
}

export interface DefaultServicesSectionContent extends Struct.ComponentSchema {
  collectionName: 'components_default_services_section_contents';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Services Section Content';
    icon: 'layer';
  };
  attributes: {
    badge: Schema.Attribute.String;
    ctaHref: Schema.Attribute.String;
    ctaLabel: Schema.Attribute.String;
    description: Schema.Attribute.String;
    headingLead: Schema.Attribute.String;
    headingLeadTrail: Schema.Attribute.String;
    headingRest: Schema.Attribute.String;
    intro: Schema.Attribute.String;
    modal: Schema.Attribute.Component<
      'default.services-section-content-modal',
      false
    >;
    tabs: Schema.Attribute.Component<
      'default.services-section-content-tabs',
      false
    >;
    tagline: Schema.Attribute.Component<
      'default.services-section-content-tagline',
      false
    >;
    viewModes: Schema.Attribute.Component<
      'default.services-section-content-view-modes',
      false
    >;
  };
}

export interface DefaultServicesSectionContentModal
  extends Struct.ComponentSchema {
  collectionName: 'components_default_services_section_content_modals';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Services Section Content Modal';
    icon: 'layer';
  };
  attributes: {
    deliverablesLabel: Schema.Attribute.String;
  };
}

export interface DefaultServicesSectionContentTabs
  extends Struct.ComponentSchema {
  collectionName: 'components_default_services_section_content_tabs';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Services Section Content Tabs';
    icon: 'layer';
  };
  attributes: {
    ariaLabel: Schema.Attribute.String;
    hint: Schema.Attribute.String;
    hintCompact: Schema.Attribute.String;
    unseenLabel: Schema.Attribute.String;
  };
}

export interface DefaultServicesSectionContentTagline
  extends Struct.ComponentSchema {
  collectionName: 'components_default_services_section_content_taglines';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Services Section Content Tagline';
    icon: 'layer';
  };
  attributes: {
    line1: Schema.Attribute.String;
    line2: Schema.Attribute.String;
    line3: Schema.Attribute.String;
  };
}

export interface DefaultServicesSectionContentViewModes
  extends Struct.ComponentSchema {
  collectionName: 'components_default_services_section_content_view_modes';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Services Section Content View Modes';
    icon: 'layer';
  };
  attributes: {
    grid: Schema.Attribute.String;
    stack: Schema.Attribute.String;
  };
}

export interface DefaultServicesSeoContent extends Struct.ComponentSchema {
  collectionName: 'components_default_services_seo_contents';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Services Seo Content';
    icon: 'layer';
  };
  attributes: {
    ariaLabel: Schema.Attribute.String;
    categoryHeadingSuffix: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    intro: Schema.Attribute.String;
    itemListName: Schema.Attribute.String;
  };
}

export interface DefaultServicesSeoOrganization extends Struct.ComponentSchema {
  collectionName: 'components_default_services_seo_organizations';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Services Seo Organization';
    icon: 'layer';
  };
  attributes: {
    name: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface DefaultStudentsCompanyItem extends Struct.ComponentSchema {
  collectionName: 'components_default_students_company_items';
  info: {
    description: 'Auto-generated array item component from JSON import';
    displayName: 'Students Company Item';
    icon: 'layer';
  };
  attributes: {
    value: Schema.Attribute.String;
  };
}

export interface DefaultTestimonialClients extends Struct.ComponentSchema {
  collectionName: 'components_default_testimonial_clients';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Testimonial Clients';
    icon: 'layer';
  };
  attributes: {
    image: Schema.Attribute.String;
    name: Schema.Attribute.String;
    quote: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface DefaultTestimonialStudents extends Struct.ComponentSchema {
  collectionName: 'components_default_testimonial_students';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Testimonial Students';
    icon: 'layer';
  };
  attributes: {
    image: Schema.Attribute.String;
    name: Schema.Attribute.String;
    quote: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface DefaultTestimonialsThemeAvatarBadges
  extends Struct.ComponentSchema {
  collectionName: 'components_default_testimonials_theme_avatar_badges';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Testimonials Theme Avatar Badges';
    icon: 'layer';
  };
  attributes: {
    gradient: Schema.Attribute.String;
    initials: Schema.Attribute.String;
  };
}

export interface DefaultTestimonialsThemeAvatarGradients
  extends Struct.ComponentSchema {
  collectionName: 'components_default_testimonials_theme_avatar_gradients';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Testimonials Theme Avatar Gradients';
    icon: 'layer';
  };
  attributes: {};
}

export interface DefaultWhyChooseContent extends Struct.ComponentSchema {
  collectionName: 'components_default_why_choose_contents';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Why Choose Content';
    icon: 'layer';
  };
  attributes: {
    body: Schema.Attribute.Component<'default.why-choose-content-body', true>;
    headingLine1: Schema.Attribute.Component<
      'default.why-choose-content-heading-line1',
      true
    >;
    headingLine2: Schema.Attribute.Component<
      'default.why-choose-content-heading-line2',
      true
    >;
  };
}

export interface DefaultWhyChooseContentBody extends Struct.ComponentSchema {
  collectionName: 'components_default_why_choose_content_bodies';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Why Choose Content Body';
    icon: 'layer';
  };
  attributes: {
    strong: Schema.Attribute.Boolean;
    text: Schema.Attribute.String;
    tone: Schema.Attribute.String;
  };
}

export interface DefaultWhyChooseContentHeadingLine1
  extends Struct.ComponentSchema {
  collectionName: 'components_default_why_choose_content_heading_line1s';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Why Choose Content Heading Line1';
    icon: 'layer';
  };
  attributes: {
    text: Schema.Attribute.String;
    tone: Schema.Attribute.String;
  };
}

export interface DefaultWhyChooseContentHeadingLine2
  extends Struct.ComponentSchema {
  collectionName: 'components_default_why_choose_content_heading_line2s';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Why Choose Content Heading Line2';
    icon: 'layer';
  };
  attributes: {
    text: Schema.Attribute.String;
    tone: Schema.Attribute.String;
  };
}

export interface DefaultWorkDesigning extends Struct.ComponentSchema {
  collectionName: 'components_default_work_designings';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Work Designing';
    icon: 'layer';
  };
  attributes: {
    description: Schema.Attribute.String;
    logo: Schema.Attribute.String;
    longDescription: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DefaultWorkDevelopment extends Struct.ComponentSchema {
  collectionName: 'components_default_work_developments';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Work Development';
    icon: 'layer';
  };
  attributes: {
    description: Schema.Attribute.String;
    logo: Schema.Attribute.String;
    longDescription: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DefaultWorkMarketing extends Struct.ComponentSchema {
  collectionName: 'components_default_work_marketings';
  info: {
    description: 'Auto-generated component from JSON import';
    displayName: 'Work Marketing';
    icon: 'layer';
  };
  attributes: {
    description: Schema.Attribute.String;
    img: Schema.Attribute.String;
    logo: Schema.Attribute.String;
    longDescription: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'default.brand-mark-content': DefaultBrandMarkContent;
      'default.brand-mark-content-tagline': DefaultBrandMarkContentTagline;
      'default.brand-mark-content-words-item': DefaultBrandMarkContentWordsItem;
      'default.case-studies-content': DefaultCaseStudiesContent;
      'default.case-studies-content-card': DefaultCaseStudiesContentCard;
      'default.case-studies-content-title': DefaultCaseStudiesContentTitle;
      'default.case-studies-content-trust': DefaultCaseStudiesContentTrust;
      'default.case-studies-items': DefaultCaseStudiesItems;
      'default.case-studies-items-shifts': DefaultCaseStudiesItemsShifts;
      'default.case-studies-items-tags-item': DefaultCaseStudiesItemsTagsItem;
      'default.case-studies-theme-gradient-text': DefaultCaseStudiesThemeGradientText;
      'default.case-studies-theme-tokens': DefaultCaseStudiesThemeTokens;
      'default.coming-soon-content': DefaultComingSoonContent;
      'default.coming-soon-content-actions': DefaultComingSoonContentActions;
      'default.coming-soon-content-meanwhile': DefaultComingSoonContentMeanwhile;
      'default.config-flip-card-qr-corners-item': DefaultConfigFlipCardQrCornersItem;
      'default.config-flip-card-tint-formula': DefaultConfigFlipCardTintFormula;
      'default.config-not-found-noise': DefaultConfigNotFoundNoise;
      'default.config-not-found-stars': DefaultConfigNotFoundStars;
      'default.config-not-found-stars-colors-item': DefaultConfigNotFoundStarsColorsItem;
      'default.config-not-found-stars-formula': DefaultConfigNotFoundStarsFormula;
      'default.config-not-found-stars-sizes-item': DefaultConfigNotFoundStarsSizesItem;
      'default.config-service-section-particles': DefaultConfigServiceSectionParticles;
      'default.config-service-section-stats': DefaultConfigServiceSectionStats;
      'default.consultation-cta-content': DefaultConsultationCtaContent;
      'default.consultation-cta-content-growth-card': DefaultConsultationCtaContentGrowthCard;
      'default.consultation-cta-content-panel': DefaultConsultationCtaContentPanel;
      'default.consultation-cta-content-points': DefaultConsultationCtaContentPoints;
      'default.consultation-cta-content-resources': DefaultConsultationCtaContentResources;
      'default.consultation-cta-content-resources-items': DefaultConsultationCtaContentResourcesItems;
      'default.consultation-cta-content-services': DefaultConsultationCtaContentServices;
      'default.consultation-cta-form': DefaultConsultationCtaForm;
      'default.content-testimonials-content': DefaultContentTestimonialsContent;
      'default.content-testimonials-content-bottom-cta': DefaultContentTestimonialsContentBottomCta;
      'default.content-testimonials-content-rows': DefaultContentTestimonialsContentRows;
      'default.content-testimonials-items': DefaultContentTestimonialsItems;
      'default.content-testimonials-items-metric': DefaultContentTestimonialsItemsMetric;
      'default.courses-modules-item': DefaultCoursesModulesItem;
      'default.faq-faqs': DefaultFaqFaqs;
      'default.faq-headline': DefaultFaqHeadline;
      'default.faq-support': DefaultFaqSupport;
      'default.final-cta-pills-item': DefaultFinalCtaPillsItem;
      'default.final-cta-primary': DefaultFinalCtaPrimary;
      'default.final-cta-secondary': DefaultFinalCtaSecondary;
      'default.final-cta-trust-item': DefaultFinalCtaTrustItem;
      'default.flip-card-defaults': DefaultFlipCardDefaults;
      'default.flip-card-defaults-phone-numbers-item': DefaultFlipCardDefaultsPhoneNumbersItem;
      'default.flip-card-reasons': DefaultFlipCardReasons;
      'default.footer-columns': DefaultFooterColumns;
      'default.footer-columns-links': DefaultFooterColumnsLinks;
      'default.footer-contact': DefaultFooterContact;
      'default.footer-contact-email': DefaultFooterContactEmail;
      'default.footer-contact-phones': DefaultFooterContactPhones;
      'default.footer-content': DefaultFooterContent;
      'default.footer-content-brand': DefaultFooterContentBrand;
      'default.footer-legal': DefaultFooterLegal;
      'default.footer-socials': DefaultFooterSocials;
      'default.hero-content': DefaultHeroContent;
      'default.hero-ctas': DefaultHeroCtas;
      'default.hero-particles-colors-item': DefaultHeroParticlesColorsItem;
      'default.hero-particles-formula': DefaultHeroParticlesFormula;
      'default.hero-particles-sizes-item': DefaultHeroParticlesSizesItem;
      'default.hero-policy-cta': DefaultHeroPolicyCta;
      'default.hero-stats': DefaultHeroStats;
      'default.main-services-content': DefaultMainServicesContent;
      'default.main-services-services': DefaultMainServicesServices;
      'default.main-services-services-groups': DefaultMainServicesServicesGroups;
      'default.main-services-services-groups-items-item': DefaultMainServicesServicesGroupsItemsItem;
      'default.main-services-services-items': DefaultMainServicesServicesItems;
      'default.motion-easing': DefaultMotionEasing;
      'default.motion-easing-entrance-item': DefaultMotionEasingEntranceItem;
      'default.motion-easing-smooth-item': DefaultMotionEasingSmoothItem;
      'default.motion-springs': DefaultMotionSprings;
      'default.motion-springs-dock': DefaultMotionSpringsDock;
      'default.motion-springs-fast': DefaultMotionSpringsFast;
      'default.motion-springs-snappy': DefaultMotionSpringsSnappy;
      'default.motion-viewport': DefaultMotionViewport;
      'default.motion-viewport-once': DefaultMotionViewportOnce;
      'default.motion-viewport-repeat': DefaultMotionViewportRepeat;
      'default.nav-content': DefaultNavContent;
      'default.nav-content-cta': DefaultNavContentCta;
      'default.nav-items': DefaultNavItems;
      'default.nav-items-children': DefaultNavItemsChildren;
      'default.nav-items-children-children': DefaultNavItemsChildrenChildren;
      'default.nav-items-children-children-children': DefaultNavItemsChildrenChildrenChildren;
      'default.not-found-content': DefaultNotFoundContent;
      'default.not-found-content-actions': DefaultNotFoundContentActions;
      'default.our-process-content': DefaultOurProcessContent;
      'default.our-process-content-tabs': DefaultOurProcessContentTabs;
      'default.our-process-particles-particles': DefaultOurProcessParticlesParticles;
      'default.our-process-tracks': DefaultOurProcessTracks;
      'default.our-process-tracks-steps': DefaultOurProcessTracksSteps;
      'default.our-process-tracks-steps-visual': DefaultOurProcessTracksStepsVisual;
      'default.our-process-tracks-steps-visual-lanes-item': DefaultOurProcessTracksStepsVisualLanesItem;
      'default.our-process-tracks-steps-visual-modules-item': DefaultOurProcessTracksStepsVisualModulesItem;
      'default.our-process-tracks-steps-visual-notes-item': DefaultOurProcessTracksStepsVisualNotesItem;
      'default.our-process-tracks-steps-visual-rows-item': DefaultOurProcessTracksStepsVisualRowsItem;
      'default.our-process-tracks-steps-visual-stages-item': DefaultOurProcessTracksStepsVisualStagesItem;
      'default.our-process-tracks-steps-visual-statuses-item': DefaultOurProcessTracksStepsVisualStatusesItem;
      'default.section-cta-primary': DefaultSectionCtaPrimary;
      'default.section-cta-secondary': DefaultSectionCtaSecondary;
      'default.service-tabs-card-offsets': DefaultServiceTabsCardOffsets;
      'default.service-tabs-tabs': DefaultServiceTabsTabs;
      'default.services-designing': DefaultServicesDesigning;
      'default.services-designing-highlights-item': DefaultServicesDesigningHighlightsItem;
      'default.services-designing-learn-more': DefaultServicesDesigningLearnMore;
      'default.services-designing-learn-more-points-item': DefaultServicesDesigningLearnMorePointsItem;
      'default.services-development': DefaultServicesDevelopment;
      'default.services-development-highlights-item': DefaultServicesDevelopmentHighlightsItem;
      'default.services-development-learn-more': DefaultServicesDevelopmentLearnMore;
      'default.services-development-learn-more-points-item': DefaultServicesDevelopmentLearnMorePointsItem;
      'default.services-marketing': DefaultServicesMarketing;
      'default.services-marketing-highlights-item': DefaultServicesMarketingHighlightsItem;
      'default.services-marketing-learn-more': DefaultServicesMarketingLearnMore;
      'default.services-marketing-learn-more-points-item': DefaultServicesMarketingLearnMorePointsItem;
      'default.services-section-content': DefaultServicesSectionContent;
      'default.services-section-content-modal': DefaultServicesSectionContentModal;
      'default.services-section-content-tabs': DefaultServicesSectionContentTabs;
      'default.services-section-content-tagline': DefaultServicesSectionContentTagline;
      'default.services-section-content-view-modes': DefaultServicesSectionContentViewModes;
      'default.services-seo-content': DefaultServicesSeoContent;
      'default.services-seo-organization': DefaultServicesSeoOrganization;
      'default.students-company-item': DefaultStudentsCompanyItem;
      'default.testimonial-clients': DefaultTestimonialClients;
      'default.testimonial-students': DefaultTestimonialStudents;
      'default.testimonials-theme-avatar-badges': DefaultTestimonialsThemeAvatarBadges;
      'default.testimonials-theme-avatar-gradients': DefaultTestimonialsThemeAvatarGradients;
      'default.why-choose-content': DefaultWhyChooseContent;
      'default.why-choose-content-body': DefaultWhyChooseContentBody;
      'default.why-choose-content-heading-line1': DefaultWhyChooseContentHeadingLine1;
      'default.why-choose-content-heading-line2': DefaultWhyChooseContentHeadingLine2;
      'default.work-designing': DefaultWorkDesigning;
      'default.work-development': DefaultWorkDevelopment;
      'default.work-marketing': DefaultWorkMarketing;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
