import type { Schema, Struct } from '@strapi/strapi';

export interface SectionImageGrid extends Struct.ComponentSchema {
  collectionName: 'components_section_image_grids';
  info: {
    description: '';
    displayName: 'image_grid';
    icon: 'apps';
  };
  attributes: {
    image: Schema.Attribute.Media<'images', true>;
  };
}

export interface SectionSectionContent extends Struct.ComponentSchema {
  collectionName: 'components_section_section_contents';
  info: {
    displayName: 'section_content';
    icon: 'filter';
  };
  attributes: {
    content: Schema.Attribute.Blocks & Schema.Attribute.Required;
    metadata: Schema.Attribute.Component<'section.section-metadata', false> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionSectionGrid extends Struct.ComponentSchema {
  collectionName: 'components_section_section_grids';
  info: {
    description: '';
    displayName: 'section_grid';
    icon: 'grid';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image_grid: Schema.Attribute.Component<'section.image-grid', true>;
    section_metadata: Schema.Attribute.Component<
      'section.section-metadata',
      false
    > &
      Schema.Attribute.Required;
    text_grid: Schema.Attribute.Component<'section.text-grid', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionSectionMetadata extends Struct.ComponentSchema {
  collectionName: 'components_section_section_metadata';
  info: {
    description: '';
    displayName: 'section_metadata';
    icon: 'chartBubble';
  };
  attributes: {
    background: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
        minLength: 4;
      }>;
    section_id: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
        minLength: 3;
      }>;
  };
}

export interface SectionSectionTwoColumns extends Struct.ComponentSchema {
  collectionName: 'components_section_section_two_columns';
  info: {
    description: '';
    displayName: 'section_two_columns';
    icon: 'server';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    metadata: Schema.Attribute.Component<'section.section-metadata', false> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
        minLength: 3;
      }>;
  };
}

export interface SectionTextGrid extends Struct.ComponentSchema {
  collectionName: 'components_section_text_grids';
  info: {
    displayName: 'text_grid';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
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
  export module Public {
    export interface ComponentSchemas {
      'section.image-grid': SectionImageGrid;
      'section.section-content': SectionSectionContent;
      'section.section-grid': SectionSectionGrid;
      'section.section-metadata': SectionSectionMetadata;
      'section.section-two-columns': SectionSectionTwoColumns;
      'section.text-grid': SectionTextGrid;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
