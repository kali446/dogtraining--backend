import type { Schema, Attribute } from '@strapi/strapi';

export interface HomeAbout extends Schema.Component {
  collectionName: 'components_home_abouts';
  info: {
    displayName: 'about';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.String & Attribute.Required;
    features: Attribute.Component<'reusables.item', true>;
    cta_btn: Attribute.Component<'reusables.button'>;
  };
}

export interface HomeHero extends Schema.Component {
  collectionName: 'components_home_heroes';
  info: {
    displayName: 'Hero';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.Text & Attribute.Required & Attribute.Unique;
    text: Attribute.String;
    cta_btn: Attribute.Component<'reusables.button'>;
    secondary_btn: Attribute.Component<'reusables.button', true>;
  };
}

export interface HomeStats extends Schema.Component {
  collectionName: 'components_home_stats';
  info: {
    displayName: 'stats';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    cta_btn: Attribute.Component<'reusables.button'>;
    stats: Attribute.Component<'reusables.stat-item', true>;
  };
}

export interface ReusablesButton extends Schema.Component {
  collectionName: 'components_reusables_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    name: Attribute.String;
    url: Attribute.String;
  };
}

export interface ReusablesGlobal extends Schema.Component {
  collectionName: 'components_reusables_globals';
  info: {
    displayName: 'global';
    icon: 'bell';
    description: '';
  };
  attributes: {
    website_name: Attribute.String;
    phones: Attribute.Component<'reusables.item', true>;
    email: Attribute.Email;
    address: Attribute.String;
  };
}

export interface ReusablesItem extends Schema.Component {
  collectionName: 'components_reusables_items';
  info: {
    displayName: 'item';
    icon: 'filter';
  };
  attributes: {
    name: Attribute.String;
  };
}

export interface ReusablesSocial extends Schema.Component {
  collectionName: 'components_reusables_socials';
  info: {
    displayName: 'social';
    icon: 'attachment';
  };
  attributes: {
    name: Attribute.String;
    link: Attribute.String;
  };
}

export interface ReusablesStatItem extends Schema.Component {
  collectionName: 'components_reusables_stat_items';
  info: {
    displayName: 'Stat_item';
  };
  attributes: {
    name: Attribute.String;
    text: Attribute.String;
    icon: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'home.about': HomeAbout;
      'home.hero': HomeHero;
      'home.stats': HomeStats;
      'reusables.button': ReusablesButton;
      'reusables.global': ReusablesGlobal;
      'reusables.item': ReusablesItem;
      'reusables.social': ReusablesSocial;
      'reusables.stat-item': ReusablesStatItem;
    }
  }
}
