import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** 
 * The `FormattedNumber` type represents a number that can optionally be returnedas
   * a formatted String. It does not try to coerce the type.
 **/
  FormattedNumber: any,
  /** An ISO 8601 datetime */
  AnalyticsDateTime: any,
  MarketingDateTime: any,
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any,
  /** Date in YYYY-MM-DD format */
  CommerceDate: any,
  /** An ISO 8601 datetime */
  CommerceDateTime: any,
};

export type AddAssetToConsignmentSubmissionInput = {
  /** The type of the asset */
  asset_type: Scalars['String'],
  /** The token provided by Gemini for your asset */
  gemini_token: Scalars['String'],
  /** The id of the submission you want to attach an asset to */
  submission_id: Scalars['String'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type AddAssetToConsignmentSubmissionPayload = {
  __typename?: 'AddAssetToConsignmentSubmissionPayload',
  asset?: Maybe<Asset>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type AddInitialOfferToOrderInput = {
  /** ID of order */
  orderId: Scalars['ID'],
  /** Offer price */
  offerPrice?: Maybe<MoneyInput>,
  /** Offer note */
  note?: Maybe<Scalars['String']>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type AddInitialOfferToOrderPayload = {
  __typename?: 'AddInitialOfferToOrderPayload',
  orderOrError?: Maybe<OrderOrFailureUnionType>,
  clientMutationId?: Maybe<Scalars['String']>,
};

/** One item in an aggregation */
export type AggregationCount = {
  __typename?: 'AggregationCount',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A type-specific ID. */
  id: Scalars['ID'],
  count?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  sortable_id?: Maybe<Scalars['String']>,
};

export type AnalyticsArtist = {
  __typename?: 'AnalyticsArtist',
  entityId: Scalars['String'],
};

export type AnalyticsArtwork = {
  __typename?: 'AnalyticsArtwork',
  entityId: Scalars['String'],
};

/** Publish artwork Series Stats */
export type AnalyticsArtworksPublishedStats = {
  __typename?: 'AnalyticsArtworksPublishedStats',
  percentageChanged: Scalars['Int'],
  period: AnalyticsQueryPeriodEnum,
  timeSeries: Array<AnalyticsPartnerTimeSeriesStats>,
  totalCount: Scalars['Int'],
};


/** Visitor countries, device, referals and session page */
export type AnalyticsGroupedStats = {
  __typename?: 'AnalyticsGroupedStats',
  groupedEntity: AnalyticsGroupedStatsUnion,
  period: AnalyticsQueryPeriodEnum,
};

/** The connection type for GroupedStats. */
export type AnalyticsGroupedStatsConnection = {
  __typename?: 'AnalyticsGroupedStatsConnection',
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AnalyticsGroupedStatsEdge>>>,
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<AnalyticsGroupedStats>>>,
  /** Information to aid in pagination. */
  pageInfo: AnalyticsPageInfo,
};

/** An edge in a connection. */
export type AnalyticsGroupedStatsEdge = {
  __typename?: 'AnalyticsGroupedStatsEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of the edge. */
  node?: Maybe<AnalyticsGroupedStats>,
};

export enum AnalyticsGroupedStatsMetricEnum {
  /** visitor_by_device */
  VISITOR_BY_DEVICE = 'VISITOR_BY_DEVICE',
  /** visitor_by_landing_page */
  VISITOR_BY_LANDING_PAGE = 'VISITOR_BY_LANDING_PAGE',
  /** visitor_by_location */
  VISITOR_BY_LOCATION = 'VISITOR_BY_LOCATION',
  /** visitor_by_referral */
  VISITOR_BY_REFERRAL = 'VISITOR_BY_REFERRAL'
}

export enum AnalyticsGroupedStatsObjectTypeEnum {
  /** country */
  COUNTRY = 'COUNTRY',
  /** device type */
  DEVICE = 'DEVICE',
  /** landing page */
  LANDING_PAGE = 'LANDING_PAGE',
  /** referral */
  REFERRAL = 'REFERRAL'
}

/** A grouped stat item: country or device etc. */
export type AnalyticsGroupedStatsUnion = AnalyticsVisitorsByCountry | AnalyticsVisitorsByDevice | AnalyticsVisitorsByLandingPage | AnalyticsVisitorsByReferral;

/** A histogram bin */
export type AnalyticsHistogramBin = {
  __typename?: 'AnalyticsHistogramBin',
  maxPriceCents: Scalars['Int'],
  minPriceCents: Scalars['Int'],
  numArtworks: Scalars['Int'],
  minPrice?: Maybe<Scalars['String']>,
  maxPrice?: Maybe<Scalars['String']>,
};


/** A histogram bin */
export type AnalyticsHistogramBinMinPriceArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


/** A histogram bin */
export type AnalyticsHistogramBinMaxPriceArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};

/** Information about pagination in a connection. */
export type AnalyticsPageInfo = {
  __typename?: 'AnalyticsPageInfo',
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>,
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'],
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'],
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>,
};

/** Stats for pageviews of partner content */
export type AnalyticsPageviewStats = {
  __typename?: 'AnalyticsPageviewStats',
  artworkViews?: Maybe<Scalars['Int']>,
  galleryViews?: Maybe<Scalars['Int']>,
  percentageChanged: Scalars['Int'],
  period: AnalyticsQueryPeriodEnum,
  showViews?: Maybe<Scalars['Int']>,
  timeSeries: Array<AnalyticsPartnerTimeSeriesStats>,
  totalCount: Scalars['Int'],
  uniqueVisitors?: Maybe<Scalars['Int']>,
};

/** Audience stats of a partner */
export type AnalyticsPartnerAudienceStats = {
  __typename?: 'AnalyticsPartnerAudienceStats',
  commercialVisitors: Scalars['Int'],
  partnerId: Scalars['String'],
  period: AnalyticsQueryPeriodEnum,
  uniqueVisitors: Scalars['Int'],
};

/** Inquiry count time series data of a partner */
export type AnalyticsPartnerInquiryCountTimeSeriesStats = {
  __typename?: 'AnalyticsPartnerInquiryCountTimeSeriesStats',
  count?: Maybe<Scalars['Int']>,
  endTime?: Maybe<Scalars['AnalyticsDateTime']>,
  startTime?: Maybe<Scalars['AnalyticsDateTime']>,
};

/** Inquiry stats of a partner */
export type AnalyticsPartnerInquiryStats = {
  __typename?: 'AnalyticsPartnerInquiryStats',
  inquiryCount: Scalars['Int'],
  inquiryResponseTime?: Maybe<Scalars['Int']>,
  partnerId: Scalars['String'],
  period: AnalyticsQueryPeriodEnum,
  /** Partner inquiry count time series */
  timeSeries?: Maybe<Array<AnalyticsPartnerInquiryCountTimeSeriesStats>>,
};


/** Inquiry stats of a partner */
export type AnalyticsPartnerInquiryStatsTimeSeriesArgs = {
  cumulative?: Maybe<Scalars['Boolean']>
};

/** Sales stats of a partner */
export type AnalyticsPartnerSalesStats = {
  __typename?: 'AnalyticsPartnerSalesStats',
  orderCount: Scalars['Int'],
  orderResponseTime?: Maybe<Scalars['Int']>,
  partnerId: Scalars['String'],
  period: AnalyticsQueryPeriodEnum,
  /** Partner sales time series */
  timeSeries?: Maybe<Array<AnalyticsPartnerSalesTimeSeriesStats>>,
  totalCents: Scalars['Int'],
  total?: Maybe<Scalars['String']>,
};


/** Sales stats of a partner */
export type AnalyticsPartnerSalesStatsTimeSeriesArgs = {
  cumulative?: Maybe<Scalars['Boolean']>
};


/** Sales stats of a partner */
export type AnalyticsPartnerSalesStatsTotalArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};

/** Sales time series data of a partner */
export type AnalyticsPartnerSalesTimeSeriesStats = {
  __typename?: 'AnalyticsPartnerSalesTimeSeriesStats',
  count?: Maybe<Scalars['Int']>,
  endTime?: Maybe<Scalars['AnalyticsDateTime']>,
  startTime?: Maybe<Scalars['AnalyticsDateTime']>,
  totalCents: Scalars['Int'],
  total?: Maybe<Scalars['String']>,
};


/** Sales time series data of a partner */
export type AnalyticsPartnerSalesTimeSeriesStatsTotalArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};

/** Partner Stats */
export type AnalyticsPartnerStats = {
  __typename?: 'AnalyticsPartnerStats',
  /** Time series data on number of artworks published */
  artworksPublished?: Maybe<AnalyticsArtworksPublishedStats>,
  /** Audience stats */
  audience?: Maybe<AnalyticsPartnerAudienceStats>,
  /** Visitor countries, device, referals and session page */
  groupedStats?: Maybe<AnalyticsGroupedStatsConnection>,
  /** Inquiry stats */
  inquiry?: Maybe<AnalyticsPartnerInquiryStats>,
  /** Different types of partner pageviews */
  pageviews?: Maybe<AnalyticsPageviewStats>,
  partnerId: Scalars['String'],
  /** Artworks, shows, or artists ranked by views. Capped at 20 by the underlying sql query. */
  rankedStats?: Maybe<AnalyticsRankedStatsConnection>,
  /** Sales stats */
  sales?: Maybe<AnalyticsPartnerSalesStats>,
  /** Top artworks ranked by views */
  topArtworks?: Maybe<AnalyticsRankedStatsConnection>,
  /** Number of unique visitors */
  uniqueVisitors?: Maybe<Scalars['Int']>,
};


/** Partner Stats */
export type AnalyticsPartnerStatsArtworksPublishedArgs = {
  period: AnalyticsQueryPeriodEnum
};


/** Partner Stats */
export type AnalyticsPartnerStatsAudienceArgs = {
  period: AnalyticsQueryPeriodEnum
};


/** Partner Stats */
export type AnalyticsPartnerStatsGroupedStatsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  metric: AnalyticsGroupedStatsMetricEnum,
  objectType: AnalyticsGroupedStatsObjectTypeEnum,
  period: AnalyticsQueryPeriodEnum
};


/** Partner Stats */
export type AnalyticsPartnerStatsInquiryArgs = {
  period: AnalyticsQueryPeriodEnum
};


/** Partner Stats */
export type AnalyticsPartnerStatsPageviewsArgs = {
  period: AnalyticsQueryPeriodEnum
};


/** Partner Stats */
export type AnalyticsPartnerStatsRankedStatsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  objectType: AnalyticsRankedStatsObjectTypeEnum,
  period: AnalyticsQueryPeriodEnum
};


/** Partner Stats */
export type AnalyticsPartnerStatsSalesArgs = {
  period: AnalyticsQueryPeriodEnum
};


/** Partner Stats */
export type AnalyticsPartnerStatsTopArtworksArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


/** Partner Stats */
export type AnalyticsPartnerStatsUniqueVisitorsArgs = {
  period: AnalyticsQueryPeriodEnum
};

/** Partner Time Series Stats */
export type AnalyticsPartnerTimeSeriesStats = {
  __typename?: 'AnalyticsPartnerTimeSeriesStats',
  count?: Maybe<Scalars['Int']>,
  endTime?: Maybe<Scalars['AnalyticsDateTime']>,
  startTime?: Maybe<Scalars['AnalyticsDateTime']>,
};

/** Price Context Filter Type */
export type AnalyticsPriceContextFilterType = {
  __typename?: 'AnalyticsPriceContextFilterType',
  category?: Maybe<AnalyticsPricingContextCategoryEnum>,
  dimension?: Maybe<AnalyticsPricingContextDimensionEnum>,
};

/** Pricing Context Histogram */
export type AnalyticsPricingContext = {
  __typename?: 'AnalyticsPricingContext',
  appliedFilters: AnalyticsPriceContextFilterType,
  bins: Array<AnalyticsHistogramBin>,
  appliedFiltersDisplay?: Maybe<Scalars['String']>,
};

export enum AnalyticsPricingContextCategoryEnum {
  /** Architecture */
  ARCHITECTURE = 'ARCHITECTURE',
  /** Books and Portfolios */
  BOOKS_AND_PORTFOLIOS = 'BOOKS_AND_PORTFOLIOS',
  /** Design/Decorative Art */
  DESIGN_DECORATIVE_ART = 'DESIGN_DECORATIVE_ART',
  /** Drawing, Collage or other Work on Paper */
  DRAWING_COLLAGE_OTHER_WORK_ON_PAPER = 'DRAWING_COLLAGE_OTHER_WORK_ON_PAPER',
  /** Fashion Design and Wearable Art */
  FASHION = 'FASHION',
  /** Installation */
  INSTALLATION = 'INSTALLATION',
  /** Jewelry */
  JEWELRY = 'JEWELRY',
  /** Mixed Media */
  MIXED_MEDIA = 'MIXED_MEDIA',
  /** Other */
  OTHER = 'OTHER',
  /** Painting */
  PAINTING = 'PAINTING',
  /** Performance Art */
  PERFORMANCE = 'PERFORMANCE',
  /** Photography */
  PHOTOGRAPHY = 'PHOTOGRAPHY',
  /** Posters */
  POSTERS = 'POSTERS',
  /** Print */
  PRINT = 'PRINT',
  /** Sculpture */
  SCULPTURE = 'SCULPTURE',
  /** Sound */
  SOUND = 'SOUND',
  /** Textile Arts */
  TEXTILE = 'TEXTILE',
  /** Video/Film/Animation */
  VIDEO_FILM_ANIMATION = 'VIDEO_FILM_ANIMATION',
  /** Work on Paper */
  WORK_ON_PAPER = 'WORK_ON_PAPER'
}

export enum AnalyticsPricingContextDimensionEnum {
  /** Large */
  LARGE = 'LARGE',
  /** Medium */
  MEDIUM = 'MEDIUM',
  /** Small */
  SMALL = 'SMALL'
}

export enum AnalyticsQueryPeriodEnum {
  /** Four weeks */
  FOUR_WEEKS = 'FOUR_WEEKS',
  /** One year */
  ONE_YEAR = 'ONE_YEAR',
  /** Sixteen weeks */
  SIXTEEN_WEEKS = 'SIXTEEN_WEEKS'
}

export type AnalyticsRankedEntityUnion = Artwork | Show | Artist;

/** Top artworks, shows, or artists from a partner */
export type AnalyticsRankedStats = {
  __typename?: 'AnalyticsRankedStats',
  period: AnalyticsQueryPeriodEnum,
  rankedEntity: AnalyticsRankedStatsUnion,
  value: Scalars['Int'],
  entity?: Maybe<AnalyticsRankedEntityUnion>,
};

/** The connection type for RankedStats. */
export type AnalyticsRankedStatsConnection = {
  __typename?: 'AnalyticsRankedStatsConnection',
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AnalyticsRankedStatsEdge>>>,
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<AnalyticsRankedStats>>>,
  /** Information to aid in pagination. */
  pageInfo: AnalyticsPageInfo,
};

/** An edge in a connection. */
export type AnalyticsRankedStatsEdge = {
  __typename?: 'AnalyticsRankedStatsEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of the edge. */
  node?: Maybe<AnalyticsRankedStats>,
};

export enum AnalyticsRankedStatsObjectTypeEnum {
  /** Artist */
  ARTIST = 'ARTIST',
  /** Artwork */
  ARTWORK = 'ARTWORK',
  /** Show */
  SHOW = 'SHOW'
}

/** An artwork, artist, or show */
export type AnalyticsRankedStatsUnion = AnalyticsArtist | AnalyticsArtwork | AnalyticsShow;

export type AnalyticsShow = {
  __typename?: 'AnalyticsShow',
  entityId: Scalars['String'],
};

export type AnalyticsVisitorsByCountry = {
  __typename?: 'AnalyticsVisitorsByCountry',
  metric: Scalars['String'],
  name: Scalars['String'],
  percent: Scalars['Float'],
  type: Scalars['String'],
  value: Scalars['Int'],
};

export type AnalyticsVisitorsByDevice = {
  __typename?: 'AnalyticsVisitorsByDevice',
  metric: Scalars['String'],
  name: Scalars['String'],
  percent: Scalars['Float'],
  type: Scalars['String'],
  value: Scalars['Int'],
};

export type AnalyticsVisitorsByLandingPage = {
  __typename?: 'AnalyticsVisitorsByLandingPage',
  metric: Scalars['String'],
  name: Scalars['String'],
  percent: Scalars['Float'],
  type: Scalars['String'],
  value: Scalars['Int'],
};

export type AnalyticsVisitorsByReferral = {
  __typename?: 'AnalyticsVisitorsByReferral',
  metric: Scalars['String'],
  name: Scalars['String'],
  percent: Scalars['Float'],
  type: Scalars['String'],
  value: Scalars['Int'],
};

export type ApproveOrderInput = {
  /** Order ID */
  orderId: Scalars['String'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type ApproveOrderPayload = {
  __typename?: 'ApproveOrderPayload',
  orderOrError?: Maybe<OrderOrFailureUnionType>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type Article = Node & {
  __typename?: 'Article',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A type-specific ID. */
  id: Scalars['ID'],
  cached?: Maybe<Scalars['Int']>,
  author?: Maybe<Author>,
  channel_id?: Maybe<Scalars['String']>,
  contributing_authors?: Maybe<Array<Maybe<Author>>>,
  href?: Maybe<Scalars['String']>,
  published_at?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  thumbnail_title?: Maybe<Scalars['String']>,
  thumbnail_teaser?: Maybe<Scalars['String']>,
  thumbnail_image?: Maybe<Image>,
  tier?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['String']>,
};


export type ArticlePublished_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type ArticleUpdated_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};

/** A connection to a list of items. */
export type ArticleConnection = {
  __typename?: 'ArticleConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ArticleEdge>>>,
  pageCursors?: Maybe<PageCursors>,
  totalCount?: Maybe<Scalars['Int']>,
};

/** An edge in a connection. */
export type ArticleEdge = {
  __typename?: 'ArticleEdge',
  /** The item at the end of the edge */
  node?: Maybe<Article>,
  /** A cursor for use in pagination */
  cursor: Scalars['String'],
};

export enum ArticleSorts {
  PUBLISHED_AT_ASC = 'PUBLISHED_AT_ASC',
  PUBLISHED_AT_DESC = 'PUBLISHED_AT_DESC'
}

export type Artist = Node & Searchable & {
  __typename?: 'Artist',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A slug ID. */
  id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  _id: Scalars['ID'],
  cached?: Maybe<Scalars['Int']>,
  alternate_names?: Maybe<Array<Maybe<Scalars['String']>>>,
  articlesConnection?: Maybe<ArticleConnection>,
  articles?: Maybe<Array<Maybe<Article>>>,
  artists?: Maybe<Array<Maybe<Artist>>>,
  artworks?: Maybe<Array<Maybe<Artwork>>>,
  artworks_connection?: Maybe<ArtworkConnection>,
  auctionResults?: Maybe<AuctionResultConnection>,
  bio?: Maybe<Scalars['String']>,
  /** The Artist biography article written by Artsy */
  biography?: Maybe<Article>,
  biography_blurb?: Maybe<ArtistBlurb>,
  birthday?: Maybe<Scalars['String']>,
  blurb?: Maybe<Scalars['String']>,
  carousel?: Maybe<ArtistCarousel>,
  collections?: Maybe<Array<Maybe<Scalars['String']>>>,
  contemporary?: Maybe<Array<Maybe<Artist>>>,
  consignable?: Maybe<Scalars['Boolean']>,
  counts?: Maybe<ArtistCounts>,
  currentEvent?: Maybe<CurrentEvent>,
  deathday?: Maybe<Scalars['String']>,
  disablePriceContext?: Maybe<Scalars['Boolean']>,
  display_auction_link?: Maybe<Scalars['Boolean']>,
  /** Custom-sorted list of shows for an artist, in order of significance. */
  exhibition_highlights?: Maybe<Array<Maybe<Show>>>,
  /** Artworks Elastic Search results */
  filtered_artworks?: Maybe<FilterArtworks>,
  /** A string showing the total number of works and those for sale */
  formatted_artworks_count?: Maybe<Scalars['String']>,
  /** A string of the form "Nationality, Birthday (or Birthday-Deathday)" */
  formatted_nationality_and_birthday?: Maybe<Scalars['String']>,
  /** A list of genes associated with an artist */
  genes?: Maybe<Array<Maybe<Gene>>>,
  gender?: Maybe<Scalars['String']>,
  href?: Maybe<Scalars['String']>,
  has_metadata?: Maybe<Scalars['Boolean']>,
  hometown?: Maybe<Scalars['String']>,
  image?: Maybe<Image>,
  imageUrl?: Maybe<Scalars['String']>,
  initials?: Maybe<Scalars['String']>,
  insights?: Maybe<Array<Maybe<ArtistInsight>>>,
  is_consignable?: Maybe<Scalars['Boolean']>,
  /** Only specific Artists should show a link to auction results. */
  is_display_auction_link?: Maybe<Scalars['Boolean']>,
  is_followed?: Maybe<Scalars['Boolean']>,
  is_public?: Maybe<Scalars['Boolean']>,
  is_shareable?: Maybe<Scalars['Boolean']>,
  displayLabel?: Maybe<Scalars['String']>,
  location?: Maybe<Scalars['String']>,
  meta?: Maybe<ArtistMeta>,
  nationality?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  partners?: Maybe<PartnerArtistConnection>,
  partner_artists?: Maybe<Array<Maybe<PartnerArtist>>>,
  partner_shows?: Maybe<Array<Maybe<PartnerShow>>>,
  public?: Maybe<Scalars['Boolean']>,
  related?: Maybe<ArtistRelatedData>,
  sales?: Maybe<Array<Maybe<Sale>>>,
  shows?: Maybe<Array<Maybe<Show>>>,
  showsConnection?: Maybe<ShowConnection>,
  /** Use this attribute to sort by when sorting a collection of Artists */
  sortable_id?: Maybe<Scalars['String']>,
  statuses?: Maybe<ArtistStatuses>,
  highlights?: Maybe<ArtistHighlights>,
  years?: Maybe<Scalars['String']>,
  marketingCollections?: Maybe<Array<Maybe<MarketingCollection>>>,
};


export type ArtistArticlesConnectionArgs = {
  sort?: Maybe<ArticleSorts>,
  limit?: Maybe<Scalars['Int']>,
  in_editorial_feed?: Maybe<Scalars['Boolean']>,
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type ArtistArticlesArgs = {
  sort?: Maybe<ArticleSorts>,
  limit?: Maybe<Scalars['Int']>,
  in_editorial_feed?: Maybe<Scalars['Boolean']>
};


export type ArtistArtistsArgs = {
  size?: Maybe<Scalars['Int']>,
  exclude_artists_without_artworks?: Maybe<Scalars['Boolean']>
};


export type ArtistArtworksArgs = {
  size?: Maybe<Scalars['Int']>,
  page?: Maybe<Scalars['Int']>,
  sort?: Maybe<ArtworkSorts>,
  published?: Maybe<Scalars['Boolean']>,
  filter?: Maybe<Array<Maybe<ArtistArtworksFilters>>>,
  exclude?: Maybe<Array<Maybe<Scalars['String']>>>
};


export type ArtistArtworks_ConnectionArgs = {
  exclude?: Maybe<Array<Maybe<Scalars['String']>>>,
  filter?: Maybe<Array<Maybe<ArtistArtworksFilters>>>,
  published?: Maybe<Scalars['Boolean']>,
  sort?: Maybe<ArtworkSorts>,
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type ArtistAuctionResultsArgs = {
  sort?: Maybe<AuctionResultSorts>,
  recordsTrusted?: Maybe<Scalars['Boolean']>,
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type ArtistBiography_BlurbArgs = {
  partner_bio?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Format>
};


export type ArtistBlurbArgs = {
  format?: Maybe<Format>
};


export type ArtistContemporaryArgs = {
  size?: Maybe<Scalars['Int']>,
  exclude_artists_without_artworks?: Maybe<Scalars['Boolean']>
};


export type ArtistExhibition_HighlightsArgs = {
  size?: Maybe<Scalars['Int']>
};


export type ArtistFiltered_ArtworksArgs = {
  acquireable?: Maybe<Scalars['Boolean']>,
  offerable?: Maybe<Scalars['Boolean']>,
  aggregation_partner_cities?: Maybe<Array<Maybe<Scalars['String']>>>,
  aggregations?: Maybe<Array<Maybe<ArtworkAggregation>>>,
  artist_id?: Maybe<Scalars['String']>,
  artist_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  at_auction?: Maybe<Scalars['Boolean']>,
  attribution_class?: Maybe<Array<Maybe<Scalars['String']>>>,
  color?: Maybe<Scalars['String']>,
  dimension_range?: Maybe<Scalars['String']>,
  extra_aggregation_gene_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  include_artworks_by_followed_artists?: Maybe<Scalars['Boolean']>,
  include_medium_filter_in_aggregation?: Maybe<Scalars['Boolean']>,
  inquireable_only?: Maybe<Scalars['Boolean']>,
  for_sale?: Maybe<Scalars['Boolean']>,
  gene_id?: Maybe<Scalars['String']>,
  gene_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  height?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['String']>,
  marketable?: Maybe<Scalars['Boolean']>,
  medium?: Maybe<Scalars['String']>,
  period?: Maybe<Scalars['String']>,
  periods?: Maybe<Array<Maybe<Scalars['String']>>>,
  major_periods?: Maybe<Array<Maybe<Scalars['String']>>>,
  partner_id?: Maybe<Scalars['ID']>,
  partner_cities?: Maybe<Array<Maybe<Scalars['String']>>>,
  price_range?: Maybe<Scalars['String']>,
  page?: Maybe<Scalars['Int']>,
  sale_id?: Maybe<Scalars['ID']>,
  size?: Maybe<Scalars['Int']>,
  sort?: Maybe<Scalars['String']>,
  tag_id?: Maybe<Scalars['String']>,
  keyword?: Maybe<Scalars['String']>,
  keyword_match_exact?: Maybe<Scalars['Boolean']>
};


export type ArtistInitialsArgs = {
  length?: Maybe<Scalars['Int']>
};


export type ArtistPartnersArgs = {
  represented_by?: Maybe<Scalars['Boolean']>,
  partner_category?: Maybe<Array<Maybe<Scalars['String']>>>,
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type ArtistPartner_ArtistsArgs = {
  size?: Maybe<Scalars['Int']>
};


export type ArtistPartner_ShowsArgs = {
  active?: Maybe<Scalars['Boolean']>,
  at_a_fair?: Maybe<Scalars['Boolean']>,
  is_reference?: Maybe<Scalars['Boolean']>,
  size?: Maybe<Scalars['Int']>,
  solo_show?: Maybe<Scalars['Boolean']>,
  status?: Maybe<Scalars['String']>,
  top_tier?: Maybe<Scalars['Boolean']>,
  visible_to_public?: Maybe<Scalars['Boolean']>,
  sort?: Maybe<PartnerShowSorts>
};


export type ArtistSalesArgs = {
  live?: Maybe<Scalars['Boolean']>,
  is_auction?: Maybe<Scalars['Boolean']>,
  size?: Maybe<Scalars['Int']>,
  sort?: Maybe<SaleSorts>
};


export type ArtistShowsArgs = {
  active?: Maybe<Scalars['Boolean']>,
  at_a_fair?: Maybe<Scalars['Boolean']>,
  is_reference?: Maybe<Scalars['Boolean']>,
  size?: Maybe<Scalars['Int']>,
  solo_show?: Maybe<Scalars['Boolean']>,
  status?: Maybe<Scalars['String']>,
  top_tier?: Maybe<Scalars['Boolean']>,
  visible_to_public?: Maybe<Scalars['Boolean']>,
  sort?: Maybe<PartnerShowSorts>
};


export type ArtistShowsConnectionArgs = {
  active?: Maybe<Scalars['Boolean']>,
  at_a_fair?: Maybe<Scalars['Boolean']>,
  is_reference?: Maybe<Scalars['Boolean']>,
  size?: Maybe<Scalars['Int']>,
  solo_show?: Maybe<Scalars['Boolean']>,
  status?: Maybe<Scalars['String']>,
  top_tier?: Maybe<Scalars['Boolean']>,
  visible_to_public?: Maybe<Scalars['Boolean']>,
  sort?: Maybe<PartnerShowSorts>,
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type ArtistMarketingCollectionsArgs = {
  size?: Maybe<Scalars['Int']>
};

export type ArtistArtworkGrid = ArtworkContextGrid & {
  __typename?: 'ArtistArtworkGrid',
  title?: Maybe<Scalars['String']>,
  ctaTitle?: Maybe<Scalars['String']>,
  ctaHref?: Maybe<Scalars['String']>,
  artworks?: Maybe<ArtworkConnection>,
};


export type ArtistArtworkGridArtworksArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};

export enum ArtistArtworksFilters {
  IS_FOR_SALE = 'IS_FOR_SALE',
  IS_NOT_FOR_SALE = 'IS_NOT_FOR_SALE'
}

export type ArtistBlurb = {
  __typename?: 'ArtistBlurb',
  credit?: Maybe<Scalars['String']>,
  text?: Maybe<Scalars['String']>,
  /** The partner id of the partner who submitted the featured bio. */
  partner_id?: Maybe<Scalars['String']>,
};

export type ArtistCarousel = {
  __typename?: 'ArtistCarousel',
  images?: Maybe<Array<Maybe<Image>>>,
};

/** A connection to a list of items. */
export type ArtistConnection = {
  __typename?: 'ArtistConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ArtistEdge>>>,
  pageCursors?: Maybe<PageCursors>,
  totalCount?: Maybe<Scalars['Int']>,
};

export type ArtistCounts = {
  __typename?: 'ArtistCounts',
  artworks?: Maybe<Scalars['FormattedNumber']>,
  follows?: Maybe<Scalars['FormattedNumber']>,
  for_sale_artworks?: Maybe<Scalars['FormattedNumber']>,
  partner_shows?: Maybe<Scalars['FormattedNumber']>,
  related_artists?: Maybe<Scalars['Int']>,
  articles?: Maybe<Scalars['Int']>,
  ecommerce_artworks?: Maybe<Scalars['FormattedNumber']>,
  has_make_offer_artworks?: Maybe<Scalars['Boolean']>,
  auction_artworks?: Maybe<Scalars['FormattedNumber']>,
};


export type ArtistCountsArtworksArgs = {
  format?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>
};


export type ArtistCountsFollowsArgs = {
  format?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>
};


export type ArtistCountsFor_Sale_ArtworksArgs = {
  format?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>
};


export type ArtistCountsPartner_ShowsArgs = {
  format?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>
};


export type ArtistCountsEcommerce_ArtworksArgs = {
  format?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>
};


export type ArtistCountsAuction_ArtworksArgs = {
  format?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>
};

/** An edge in a connection. */
export type ArtistEdge = {
  __typename?: 'ArtistEdge',
  /** The item at the end of the edge */
  node?: Maybe<Artist>,
  /** A cursor for use in pagination */
  cursor: Scalars['String'],
};

export type ArtistGroup = {
  __typename?: 'ArtistGroup',
  /** Letter artists group belongs to */
  letter?: Maybe<Scalars['String']>,
  /** Artists sorted by last name */
  items?: Maybe<Array<Maybe<Artist>>>,
};

export type ArtistHighlights = {
  __typename?: 'ArtistHighlights',
  partners?: Maybe<PartnerArtistConnection>,
};


export type ArtistHighlightsPartnersArgs = {
  represented_by?: Maybe<Scalars['Boolean']>,
  partner_category?: Maybe<Array<Maybe<Scalars['String']>>>,
  display_on_partner_profile?: Maybe<Scalars['Boolean']>,
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};

export type ArtistInsight = {
  __typename?: 'ArtistInsight',
  /** The type of insight. */
  type?: Maybe<Scalars['String']>,
  /** Label to use when displaying the insight. */
  label?: Maybe<Scalars['String']>,
  /** List of entities relevant to the insight. */
  entities?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type ArtistItem = Node & Searchable & {
  __typename?: 'ArtistItem',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A slug ID. */
  id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  _id: Scalars['ID'],
  cached?: Maybe<Scalars['Int']>,
  alternate_names?: Maybe<Array<Maybe<Scalars['String']>>>,
  articlesConnection?: Maybe<ArticleConnection>,
  articles?: Maybe<Array<Maybe<Article>>>,
  artists?: Maybe<Array<Maybe<Artist>>>,
  artworks?: Maybe<Array<Maybe<Artwork>>>,
  artworks_connection?: Maybe<ArtworkConnection>,
  auctionResults?: Maybe<AuctionResultConnection>,
  bio?: Maybe<Scalars['String']>,
  /** The Artist biography article written by Artsy */
  biography?: Maybe<Article>,
  biography_blurb?: Maybe<ArtistBlurb>,
  birthday?: Maybe<Scalars['String']>,
  blurb?: Maybe<Scalars['String']>,
  carousel?: Maybe<ArtistCarousel>,
  collections?: Maybe<Array<Maybe<Scalars['String']>>>,
  contemporary?: Maybe<Array<Maybe<Artist>>>,
  consignable?: Maybe<Scalars['Boolean']>,
  counts?: Maybe<ArtistCounts>,
  currentEvent?: Maybe<CurrentEvent>,
  deathday?: Maybe<Scalars['String']>,
  disablePriceContext?: Maybe<Scalars['Boolean']>,
  display_auction_link?: Maybe<Scalars['Boolean']>,
  /** Custom-sorted list of shows for an artist, in order of significance. */
  exhibition_highlights?: Maybe<Array<Maybe<Show>>>,
  /** Artworks Elastic Search results */
  filtered_artworks?: Maybe<FilterArtworks>,
  /** A string showing the total number of works and those for sale */
  formatted_artworks_count?: Maybe<Scalars['String']>,
  /** A string of the form "Nationality, Birthday (or Birthday-Deathday)" */
  formatted_nationality_and_birthday?: Maybe<Scalars['String']>,
  /** A list of genes associated with an artist */
  genes?: Maybe<Array<Maybe<Gene>>>,
  gender?: Maybe<Scalars['String']>,
  href?: Maybe<Scalars['String']>,
  has_metadata?: Maybe<Scalars['Boolean']>,
  hometown?: Maybe<Scalars['String']>,
  image?: Maybe<Image>,
  imageUrl?: Maybe<Scalars['String']>,
  initials?: Maybe<Scalars['String']>,
  insights?: Maybe<Array<Maybe<ArtistInsight>>>,
  is_consignable?: Maybe<Scalars['Boolean']>,
  /** Only specific Artists should show a link to auction results. */
  is_display_auction_link?: Maybe<Scalars['Boolean']>,
  is_followed?: Maybe<Scalars['Boolean']>,
  is_public?: Maybe<Scalars['Boolean']>,
  is_shareable?: Maybe<Scalars['Boolean']>,
  displayLabel?: Maybe<Scalars['String']>,
  location?: Maybe<Scalars['String']>,
  meta?: Maybe<ArtistMeta>,
  nationality?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  partners?: Maybe<PartnerArtistConnection>,
  partner_artists?: Maybe<Array<Maybe<PartnerArtist>>>,
  partner_shows?: Maybe<Array<Maybe<PartnerShow>>>,
  public?: Maybe<Scalars['Boolean']>,
  related?: Maybe<ArtistRelatedData>,
  sales?: Maybe<Array<Maybe<Sale>>>,
  shows?: Maybe<Array<Maybe<Show>>>,
  showsConnection?: Maybe<ShowConnection>,
  /** Use this attribute to sort by when sorting a collection of Artists */
  sortable_id?: Maybe<Scalars['String']>,
  statuses?: Maybe<ArtistStatuses>,
  highlights?: Maybe<ArtistHighlights>,
  years?: Maybe<Scalars['String']>,
};


export type ArtistItemArticlesConnectionArgs = {
  sort?: Maybe<ArticleSorts>,
  limit?: Maybe<Scalars['Int']>,
  in_editorial_feed?: Maybe<Scalars['Boolean']>,
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type ArtistItemArticlesArgs = {
  sort?: Maybe<ArticleSorts>,
  limit?: Maybe<Scalars['Int']>,
  in_editorial_feed?: Maybe<Scalars['Boolean']>
};


export type ArtistItemArtistsArgs = {
  size?: Maybe<Scalars['Int']>,
  exclude_artists_without_artworks?: Maybe<Scalars['Boolean']>
};


export type ArtistItemArtworksArgs = {
  size?: Maybe<Scalars['Int']>,
  page?: Maybe<Scalars['Int']>,
  sort?: Maybe<ArtworkSorts>,
  published?: Maybe<Scalars['Boolean']>,
  filter?: Maybe<Array<Maybe<ArtistArtworksFilters>>>,
  exclude?: Maybe<Array<Maybe<Scalars['String']>>>
};


export type ArtistItemArtworks_ConnectionArgs = {
  exclude?: Maybe<Array<Maybe<Scalars['String']>>>,
  filter?: Maybe<Array<Maybe<ArtistArtworksFilters>>>,
  published?: Maybe<Scalars['Boolean']>,
  sort?: Maybe<ArtworkSorts>,
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type ArtistItemAuctionResultsArgs = {
  sort?: Maybe<AuctionResultSorts>,
  recordsTrusted?: Maybe<Scalars['Boolean']>,
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type ArtistItemBiography_BlurbArgs = {
  partner_bio?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Format>
};


export type ArtistItemBlurbArgs = {
  format?: Maybe<Format>
};


export type ArtistItemContemporaryArgs = {
  size?: Maybe<Scalars['Int']>,
  exclude_artists_without_artworks?: Maybe<Scalars['Boolean']>
};


export type ArtistItemExhibition_HighlightsArgs = {
  size?: Maybe<Scalars['Int']>
};


export type ArtistItemFiltered_ArtworksArgs = {
  acquireable?: Maybe<Scalars['Boolean']>,
  offerable?: Maybe<Scalars['Boolean']>,
  aggregation_partner_cities?: Maybe<Array<Maybe<Scalars['String']>>>,
  aggregations?: Maybe<Array<Maybe<ArtworkAggregation>>>,
  artist_id?: Maybe<Scalars['String']>,
  artist_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  at_auction?: Maybe<Scalars['Boolean']>,
  attribution_class?: Maybe<Array<Maybe<Scalars['String']>>>,
  color?: Maybe<Scalars['String']>,
  dimension_range?: Maybe<Scalars['String']>,
  extra_aggregation_gene_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  include_artworks_by_followed_artists?: Maybe<Scalars['Boolean']>,
  include_medium_filter_in_aggregation?: Maybe<Scalars['Boolean']>,
  inquireable_only?: Maybe<Scalars['Boolean']>,
  for_sale?: Maybe<Scalars['Boolean']>,
  gene_id?: Maybe<Scalars['String']>,
  gene_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  height?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['String']>,
  marketable?: Maybe<Scalars['Boolean']>,
  medium?: Maybe<Scalars['String']>,
  period?: Maybe<Scalars['String']>,
  periods?: Maybe<Array<Maybe<Scalars['String']>>>,
  major_periods?: Maybe<Array<Maybe<Scalars['String']>>>,
  partner_id?: Maybe<Scalars['ID']>,
  partner_cities?: Maybe<Array<Maybe<Scalars['String']>>>,
  price_range?: Maybe<Scalars['String']>,
  page?: Maybe<Scalars['Int']>,
  sale_id?: Maybe<Scalars['ID']>,
  size?: Maybe<Scalars['Int']>,
  sort?: Maybe<Scalars['String']>,
  tag_id?: Maybe<Scalars['String']>,
  keyword?: Maybe<Scalars['String']>,
  keyword_match_exact?: Maybe<Scalars['Boolean']>
};


export type ArtistItemInitialsArgs = {
  length?: Maybe<Scalars['Int']>
};


export type ArtistItemPartnersArgs = {
  represented_by?: Maybe<Scalars['Boolean']>,
  partner_category?: Maybe<Array<Maybe<Scalars['String']>>>,
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type ArtistItemPartner_ArtistsArgs = {
  size?: Maybe<Scalars['Int']>
};


export type ArtistItemPartner_ShowsArgs = {
  active?: Maybe<Scalars['Boolean']>,
  at_a_fair?: Maybe<Scalars['Boolean']>,
  is_reference?: Maybe<Scalars['Boolean']>,
  size?: Maybe<Scalars['Int']>,
  solo_show?: Maybe<Scalars['Boolean']>,
  status?: Maybe<Scalars['String']>,
  top_tier?: Maybe<Scalars['Boolean']>,
  visible_to_public?: Maybe<Scalars['Boolean']>,
  sort?: Maybe<PartnerShowSorts>
};


export type ArtistItemSalesArgs = {
  live?: Maybe<Scalars['Boolean']>,
  is_auction?: Maybe<Scalars['Boolean']>,
  size?: Maybe<Scalars['Int']>,
  sort?: Maybe<SaleSorts>
};


export type ArtistItemShowsArgs = {
  active?: Maybe<Scalars['Boolean']>,
  at_a_fair?: Maybe<Scalars['Boolean']>,
  is_reference?: Maybe<Scalars['Boolean']>,
  size?: Maybe<Scalars['Int']>,
  solo_show?: Maybe<Scalars['Boolean']>,
  status?: Maybe<Scalars['String']>,
  top_tier?: Maybe<Scalars['Boolean']>,
  visible_to_public?: Maybe<Scalars['Boolean']>,
  sort?: Maybe<PartnerShowSorts>
};


export type ArtistItemShowsConnectionArgs = {
  active?: Maybe<Scalars['Boolean']>,
  at_a_fair?: Maybe<Scalars['Boolean']>,
  is_reference?: Maybe<Scalars['Boolean']>,
  size?: Maybe<Scalars['Int']>,
  solo_show?: Maybe<Scalars['Boolean']>,
  status?: Maybe<Scalars['String']>,
  top_tier?: Maybe<Scalars['Boolean']>,
  visible_to_public?: Maybe<Scalars['Boolean']>,
  sort?: Maybe<PartnerShowSorts>,
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};

export type ArtistMeta = {
  __typename?: 'ArtistMeta',
  description?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};

export type ArtistRelatedData = {
  __typename?: 'ArtistRelatedData',
  genes?: Maybe<GeneConnection>,
  artists?: Maybe<ArtistConnection>,
  /** A list of the current user’s suggested artists, based on a single artist */
  suggested?: Maybe<ArtistConnection>,
};


export type ArtistRelatedDataGenesArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type ArtistRelatedDataArtistsArgs = {
  exclude_artists_without_artworks?: Maybe<Scalars['Boolean']>,
  min_forsale_artworks?: Maybe<Scalars['Int']>,
  kind?: Maybe<RelatedArtistsKind>,
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type ArtistRelatedDataSuggestedArgs = {
  artist_id?: Maybe<Scalars['String']>,
  exclude_artists_without_forsale_artworks?: Maybe<Scalars['Boolean']>,
  exclude_artists_without_artworks?: Maybe<Scalars['Boolean']>,
  exclude_followed_artists?: Maybe<Scalars['Boolean']>,
  exclude_artist_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  page?: Maybe<Scalars['Int']>,
  size?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};

export enum ArtistSorts {
  sortable_id_asc = 'sortable_id_asc',
  sortable_id_desc = 'sortable_id_desc',
  trending_desc = 'trending_desc',
  SORTABLE_ID_ASC = 'SORTABLE_ID_ASC',
  SORTABLE_ID_DESC = 'SORTABLE_ID_DESC',
  TRENDING_DESC = 'TRENDING_DESC'
}

export type ArtistStatuses = {
  __typename?: 'ArtistStatuses',
  artists?: Maybe<Scalars['Boolean']>,
  articles?: Maybe<Scalars['Boolean']>,
  artworks?: Maybe<Scalars['Boolean']>,
  auction_lots?: Maybe<Scalars['Boolean']>,
  biography?: Maybe<Scalars['Boolean']>,
  contemporary?: Maybe<Scalars['Boolean']>,
  cv?: Maybe<Scalars['Boolean']>,
  shows?: Maybe<Scalars['Boolean']>,
};


export type ArtistStatusesCvArgs = {
  minShowCount?: Maybe<Scalars['Int']>
};

export type Artwork = Node & Searchable & Sellable & {
  __typename?: 'Artwork',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A slug ID. */
  id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  _id: Scalars['ID'],
  cached?: Maybe<Scalars['Int']>,
  additional_information?: Maybe<Scalars['String']>,
  artist?: Maybe<Artist>,
  artists?: Maybe<Array<Maybe<Artist>>>,
  artist_names?: Maybe<Scalars['String']>,
  articles?: Maybe<Array<Maybe<Article>>>,
  availability?: Maybe<Scalars['String']>,
  can_share_image?: Maybe<Scalars['Boolean']>,
  category?: Maybe<Scalars['String']>,
  /** Attribution class object */
  attribution_class?: Maybe<AttributionClass>,
  collecting_institution?: Maybe<Scalars['String']>,
  contact_label?: Maybe<Scalars['String']>,
  /** Pre-filled inquiry text */
  contact_message?: Maybe<Scalars['String']>,
  /** Returns the associated Fair/Sale/PartnerShow */
  context?: Maybe<ArtworkContext>,
  contextGrids?: Maybe<Array<Maybe<ArtworkContextGrid>>>,
  cultural_maker?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  dimensions?: Maybe<Dimensions>,
  /** Returns an HTML string representing the embedded content (video) */
  embed?: Maybe<Scalars['String']>,
  edition_of?: Maybe<Scalars['String']>,
  edition_sets?: Maybe<Array<Maybe<EditionSet>>>,
  exhibition_history?: Maybe<Scalars['String']>,
  fair?: Maybe<Fair>,
  /** Formatted artwork metadata, including artist, title, date and partner; e.g., 'Andy Warhol, Truck, 1980, Westward Gallery'. */
  formattedMetadata?: Maybe<Scalars['String']>,
  height?: Maybe<Scalars['String']>,
  /** Returns the highlighted shows and articles */
  highlights?: Maybe<Array<Maybe<Highlighted>>>,
  href?: Maybe<Scalars['String']>,
  image?: Maybe<Image>,
  imageUrl?: Maybe<Scalars['String']>,
  image_rights?: Maybe<Scalars['String']>,
  image_title?: Maybe<Scalars['String']>,
  images?: Maybe<Array<Maybe<Image>>>,
  /** Private text field for partner use */
  inventoryId?: Maybe<Scalars['String']>,
  /** Whether a work can be purchased through e-commerce */
  is_acquireable?: Maybe<Scalars['Boolean']>,
  /** Whether a user can make an offer on a work */
  is_offerable?: Maybe<Scalars['Boolean']>,
  /** Is this artwork part of an auction that is currently running? */
  is_biddable?: Maybe<Scalars['Boolean']>,
  /** When in an auction, can the work be bought immediately */
  is_buy_nowable?: Maybe<Scalars['Boolean']>,
  is_comparable_with_auction_results?: Maybe<Scalars['Boolean']>,
  /** Are we able to display a contact form on artwork pages? */
  is_contactable?: Maybe<Scalars['Boolean']>,
  is_downloadable?: Maybe<Scalars['Boolean']>,
  is_embeddable_video?: Maybe<Scalars['Boolean']>,
  is_ecommerce?: Maybe<Scalars['Boolean']>,
  is_for_sale?: Maybe<Scalars['Boolean']>,
  is_hangable?: Maybe<Scalars['Boolean']>,
  /** Do we want to encourage inquiries on this work? */
  is_inquireable?: Maybe<Scalars['Boolean']>,
  /** Is this artwork part of an auction? */
  is_in_auction?: Maybe<Scalars['Boolean']>,
  /** Is this artwork part of a current show */
  is_in_show?: Maybe<Scalars['Boolean']>,
  is_not_for_sale?: Maybe<Scalars['String']>,
  is_on_hold?: Maybe<Scalars['String']>,
  is_price_hidden?: Maybe<Scalars['Boolean']>,
  is_price_range?: Maybe<Scalars['Boolean']>,
  is_purchasable?: Maybe<Scalars['Boolean']>,
  is_saved?: Maybe<Scalars['Boolean']>,
  is_shareable?: Maybe<Scalars['Boolean']>,
  is_sold?: Maybe<Scalars['Boolean']>,
  is_unique?: Maybe<Scalars['Boolean']>,
  displayLabel?: Maybe<Scalars['String']>,
  layer?: Maybe<ArtworkLayer>,
  layers?: Maybe<Array<Maybe<ArtworkLayer>>>,
  literature?: Maybe<Scalars['String']>,
  manufacturer?: Maybe<Scalars['String']>,
  medium?: Maybe<Scalars['String']>,
  metric?: Maybe<Scalars['String']>,
  meta?: Maybe<ArtworkMeta>,
  myLotStanding?: Maybe<Array<LotStanding>>,
  /** [DO NOT USE] Weekly pageview data (static). */
  pageviews?: Maybe<Scalars['Int']>,
  partner?: Maybe<Partner>,
  pickup_available?: Maybe<Scalars['Boolean']>,
  price?: Maybe<Scalars['String']>,
  priceCents?: Maybe<PriceCents>,
  listPrice?: Maybe<ListPrice>,
  price_currency?: Maybe<Scalars['String']>,
  /** Is this work available for shipping only within the Contenental US? */
  shipsToContinentalUSOnly?: Maybe<Scalars['Boolean']>,
  /** The string that describes domestic and international shipping. */
  shippingInfo?: Maybe<Scalars['String']>,
  /** Minimal location information describing from where artwork will be shipped. */
  shippingOrigin?: Maybe<Scalars['String']>,
  provenance?: Maybe<Scalars['String']>,
  publisher?: Maybe<Scalars['String']>,
  related?: Maybe<Array<Maybe<Artwork>>>,
  sale?: Maybe<Sale>,
  sale_artwork?: Maybe<SaleArtwork>,
  sale_message?: Maybe<Scalars['String']>,
  series?: Maybe<Scalars['String']>,
  show?: Maybe<PartnerShow>,
  v2_shows?: Maybe<Array<Maybe<Show>>>,
  shows?: Maybe<Array<Maybe<PartnerShow>>>,
  signature?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  /** Formatted artwork metadata, including artist, title, date and partner; e.g., 'Andy Warhol, Truck, 1980, Westward Gallery'. */
  to_s?: Maybe<Scalars['String']>,
  /** Whether this Artwork is Published of not */
  published: Scalars['Boolean'],
  /** If the category is video, then it returns the href for the (youtube/vimeo) video, otherwise returns the website from CMS */
  website?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['String']>,
  framed?: Maybe<ArtworkInfoRow>,
  signatureInfo?: Maybe<ArtworkInfoRow>,
  conditionDescription?: Maybe<ArtworkInfoRow>,
  certificateOfAuthenticity?: Maybe<ArtworkInfoRow>,
  /** If you need to render artwork dimensions as a string, prefer the `Artwork#dimensions` field */
  widthCm?: Maybe<Scalars['Float']>,
  /** If you need to render artwork dimensions as a string, prefer the `Artwork#dimensions` field */
  heightCm?: Maybe<Scalars['Float']>,
  /** score assigned to an artwork based on its dimensions */
  sizeScore?: Maybe<Scalars['Float']>,
  pricingContext?: Maybe<AnalyticsPricingContext>,
};


export type ArtworkAdditional_InformationArgs = {
  format?: Maybe<Format>
};


export type ArtworkArtistArgs = {
  shallow?: Maybe<Scalars['Boolean']>
};


export type ArtworkArtistsArgs = {
  shallow?: Maybe<Scalars['Boolean']>
};


export type ArtworkArticlesArgs = {
  size?: Maybe<Scalars['Int']>
};


export type ArtworkDescriptionArgs = {
  format?: Maybe<Format>
};


export type ArtworkEmbedArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  autoplay?: Maybe<Scalars['Boolean']>
};


export type ArtworkEdition_SetsArgs = {
  sort?: Maybe<EditionSetSorts>
};


export type ArtworkExhibition_HistoryArgs = {
  format?: Maybe<Format>
};


export type ArtworkImagesArgs = {
  size?: Maybe<Scalars['Int']>
};


export type ArtworkLayerArgs = {
  id?: Maybe<Scalars['String']>
};


export type ArtworkLiteratureArgs = {
  format?: Maybe<Format>
};


export type ArtworkManufacturerArgs = {
  format?: Maybe<Format>
};


export type ArtworkMyLotStandingArgs = {
  live?: Maybe<Scalars['Boolean']>
};


export type ArtworkPartnerArgs = {
  shallow?: Maybe<Scalars['Boolean']>
};


export type ArtworkProvenanceArgs = {
  format?: Maybe<Format>
};


export type ArtworkPublisherArgs = {
  format?: Maybe<Format>
};


export type ArtworkRelatedArgs = {
  size?: Maybe<Scalars['Int']>
};


export type ArtworkSale_ArtworkArgs = {
  sale_id?: Maybe<Scalars['String']>
};


export type ArtworkSeriesArgs = {
  format?: Maybe<Format>
};


export type ArtworkShowArgs = {
  size?: Maybe<Scalars['Int']>,
  active?: Maybe<Scalars['Boolean']>,
  at_a_fair?: Maybe<Scalars['Boolean']>,
  sort?: Maybe<PartnerShowSorts>
};


export type ArtworkV2_ShowsArgs = {
  size?: Maybe<Scalars['Int']>,
  active?: Maybe<Scalars['Boolean']>,
  at_a_fair?: Maybe<Scalars['Boolean']>,
  sort?: Maybe<ShowSort>
};


export type ArtworkShowsArgs = {
  size?: Maybe<Scalars['Int']>,
  active?: Maybe<Scalars['Boolean']>,
  at_a_fair?: Maybe<Scalars['Boolean']>,
  sort?: Maybe<PartnerShowSorts>
};


export type ArtworkSignatureArgs = {
  format?: Maybe<Format>
};

export enum ArtworkAggregation {
  COLOR = 'COLOR',
  DIMENSION_RANGE = 'DIMENSION_RANGE',
  FOLLOWED_ARTISTS = 'FOLLOWED_ARTISTS',
  MAJOR_PERIOD = 'MAJOR_PERIOD',
  MEDIUM = 'MEDIUM',
  MERCHANDISABLE_ARTISTS = 'MERCHANDISABLE_ARTISTS',
  GALLERY = 'GALLERY',
  INSTITUTION = 'INSTITUTION',
  PARTNER_CITY = 'PARTNER_CITY',
  PERIOD = 'PERIOD',
  PRICE_RANGE = 'PRICE_RANGE',
  TOTAL = 'TOTAL'
}

/** A connection to a list of items. */
export type ArtworkConnection = {
  __typename?: 'ArtworkConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ArtworkEdge>>>,
  pageCursors?: Maybe<PageCursors>,
  totalCount?: Maybe<Scalars['Int']>,
};

export type ArtworkContext = ArtworkContextAuction | ArtworkContextFair | ArtworkContextPartnerShow | ArtworkContextSale;

export type ArtworkContextAuction = Node & {
  __typename?: 'ArtworkContextAuction',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A slug ID. */
  id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  _id: Scalars['ID'],
  cached?: Maybe<Scalars['Int']>,
  artworks?: Maybe<Array<Maybe<Artwork>>>,
  /** Returns a connection of artworks for a sale. */
  artworksConnection?: Maybe<ArtworkConnection>,
  associated_sale?: Maybe<Sale>,
  auction_state?: Maybe<Scalars['String']>,
  /** A bid increment policy that explains minimum bids in ranges. */
  bid_increments?: Maybe<Array<Maybe<BidIncrement>>>,
  /** Auction's buyer's premium policy. */
  buyers_premium?: Maybe<Array<Maybe<BuyersPremium>>>,
  cover_image?: Maybe<Image>,
  currency?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  display_timely_at?: Maybe<Scalars['String']>,
  eligible_sale_artworks_count?: Maybe<Scalars['Int']>,
  end_at?: Maybe<Scalars['String']>,
  event_start_at?: Maybe<Scalars['String']>,
  event_end_at?: Maybe<Scalars['String']>,
  /** A formatted description of when the auction starts or ends or if it has ended */
  formattedStartDateTime?: Maybe<Scalars['String']>,
  href?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  initials?: Maybe<Scalars['String']>,
  is_auction?: Maybe<Scalars['Boolean']>,
  is_benefit?: Maybe<Scalars['Boolean']>,
  isBenefit?: Maybe<Scalars['Boolean']>,
  isGalleryAuction?: Maybe<Scalars['Boolean']>,
  is_auction_promo?: Maybe<Scalars['Boolean']>,
  is_closed?: Maybe<Scalars['Boolean']>,
  is_open?: Maybe<Scalars['Boolean']>,
  is_live_open?: Maybe<Scalars['Boolean']>,
  is_preview?: Maybe<Scalars['Boolean']>,
  is_registration_closed?: Maybe<Scalars['Boolean']>,
  is_with_buyers_premium?: Maybe<Scalars['Boolean']>,
  live_start_at?: Maybe<Scalars['String']>,
  /** Returns a live auctions url if the sale is open and start time is after now */
  live_url_if_open?: Maybe<Scalars['String']>,
  partner?: Maybe<Partner>,
  profile?: Maybe<Profile>,
  promoted_sale?: Maybe<Sale>,
  registration_ends_at?: Maybe<Scalars['String']>,
  /** A registration for this sale or null */
  registrationStatus?: Maybe<Bidder>,
  require_bidder_approval?: Maybe<Scalars['Boolean']>,
  sale_artworks?: Maybe<Array<Maybe<SaleArtwork>>>,
  sale_artworks_connection?: Maybe<SaleArtworkConnection>,
  sale_type?: Maybe<Scalars['String']>,
  start_at?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  sale_artwork?: Maybe<SaleArtwork>,
  symbol?: Maybe<Scalars['String']>,
};


export type ArtworkContextAuctionArtworksArgs = {
  page?: Maybe<Scalars['Int']>,
  size?: Maybe<Scalars['Int']>,
  all?: Maybe<Scalars['Boolean']>,
  exclude?: Maybe<Array<Maybe<Scalars['String']>>>
};


export type ArtworkContextAuctionArtworksConnectionArgs = {
  exclude?: Maybe<Array<Maybe<Scalars['String']>>>,
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type ArtworkContextAuctionEnd_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type ArtworkContextAuctionEvent_Start_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type ArtworkContextAuctionEvent_End_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type ArtworkContextAuctionInitialsArgs = {
  length?: Maybe<Scalars['Int']>
};


export type ArtworkContextAuctionLive_Start_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type ArtworkContextAuctionRegistration_Ends_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type ArtworkContextAuctionSale_ArtworksArgs = {
  page?: Maybe<Scalars['Int']>,
  size?: Maybe<Scalars['Int']>,
  all?: Maybe<Scalars['Boolean']>
};


export type ArtworkContextAuctionSale_Artworks_ConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type ArtworkContextAuctionStart_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type ArtworkContextAuctionSale_ArtworkArgs = {
  id: Scalars['String']
};

export type ArtworkContextFair = {
  __typename?: 'ArtworkContextFair',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A slug ID. */
  id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  _id: Scalars['ID'],
  about?: Maybe<Scalars['String']>,
  followed_content?: Maybe<FollowedContent>,
  artists?: Maybe<ArtistConnection>,
  cached?: Maybe<Scalars['Int']>,
  banner_size?: Maybe<Scalars['String']>,
  counts?: Maybe<FairCounts>,
  /** A formatted description of the start to end dates */
  exhibition_period?: Maybe<Scalars['String']>,
  /** A formatted description of when the fair starts or closes or if it is closed */
  formattedOpeningHours?: Maybe<Scalars['String']>,
  has_full_feature?: Maybe<Scalars['Boolean']>,
  has_homepage_section?: Maybe<Scalars['Boolean']>,
  has_large_banner?: Maybe<Scalars['Boolean']>,
  has_listing?: Maybe<Scalars['Boolean']>,
  hours?: Maybe<Scalars['String']>,
  href?: Maybe<Scalars['String']>,
  image?: Maybe<Image>,
  is_active?: Maybe<Scalars['Boolean']>,
  /** Are we currently in the fair's active period? */
  isActive?: Maybe<Scalars['Boolean']>,
  links?: Maybe<Scalars['String']>,
  mobile_image?: Maybe<Image>,
  is_published?: Maybe<Scalars['Boolean']>,
  location?: Maybe<Location>,
  name?: Maybe<Scalars['String']>,
  profile?: Maybe<Profile>,
  /** This connection only supports forward pagination. We're replacing Relay's default cursor with one from Gravity. */
  shows_connection?: Maybe<ShowConnection>,
  start_at?: Maybe<Scalars['String']>,
  end_at?: Maybe<Scalars['String']>,
  active_start_at?: Maybe<Scalars['String']>,
  organizer?: Maybe<Organizer>,
  published?: Maybe<Scalars['Boolean']>,
  tagline?: Maybe<Scalars['String']>,
  ticketsLink?: Maybe<Scalars['String']>,
  /** The exhibitors with booths in this fair with letter. */
  exhibitors_grouped_by_name?: Maybe<Array<Maybe<FairExhibitorsGroup>>>,
  /** Artworks Elastic Search results */
  filteredArtworks?: Maybe<FilterArtworks>,
  sponsoredContent?: Maybe<FairSponsoredContent>,
};


export type ArtworkContextFairArtistsArgs = {
  sort?: Maybe<FairArtistSorts>,
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type ArtworkContextFairShows_ConnectionArgs = {
  section?: Maybe<Scalars['String']>,
  sort?: Maybe<ShowSort>,
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type ArtworkContextFairStart_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type ArtworkContextFairEnd_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type ArtworkContextFairActive_Start_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type ArtworkContextFairFilteredArtworksArgs = {
  acquireable?: Maybe<Scalars['Boolean']>,
  offerable?: Maybe<Scalars['Boolean']>,
  aggregation_partner_cities?: Maybe<Array<Maybe<Scalars['String']>>>,
  aggregations?: Maybe<Array<Maybe<ArtworkAggregation>>>,
  artist_id?: Maybe<Scalars['String']>,
  artist_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  at_auction?: Maybe<Scalars['Boolean']>,
  attribution_class?: Maybe<Array<Maybe<Scalars['String']>>>,
  color?: Maybe<Scalars['String']>,
  dimension_range?: Maybe<Scalars['String']>,
  extra_aggregation_gene_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  include_artworks_by_followed_artists?: Maybe<Scalars['Boolean']>,
  include_medium_filter_in_aggregation?: Maybe<Scalars['Boolean']>,
  inquireable_only?: Maybe<Scalars['Boolean']>,
  for_sale?: Maybe<Scalars['Boolean']>,
  gene_id?: Maybe<Scalars['String']>,
  gene_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  height?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['String']>,
  marketable?: Maybe<Scalars['Boolean']>,
  medium?: Maybe<Scalars['String']>,
  period?: Maybe<Scalars['String']>,
  periods?: Maybe<Array<Maybe<Scalars['String']>>>,
  major_periods?: Maybe<Array<Maybe<Scalars['String']>>>,
  partner_id?: Maybe<Scalars['ID']>,
  partner_cities?: Maybe<Array<Maybe<Scalars['String']>>>,
  price_range?: Maybe<Scalars['String']>,
  page?: Maybe<Scalars['Int']>,
  sale_id?: Maybe<Scalars['ID']>,
  size?: Maybe<Scalars['Int']>,
  sort?: Maybe<Scalars['String']>,
  tag_id?: Maybe<Scalars['String']>,
  keyword?: Maybe<Scalars['String']>,
  keyword_match_exact?: Maybe<Scalars['Boolean']>
};

/** A specific grid. */
export type ArtworkContextGrid = {
  title?: Maybe<Scalars['String']>,
  ctaTitle?: Maybe<Scalars['String']>,
  ctaHref?: Maybe<Scalars['String']>,
  artworks?: Maybe<ArtworkConnection>,
};


/** A specific grid. */
export type ArtworkContextGridArtworksArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};

export type ArtworkContextPartnerShow = Node & {
  __typename?: 'ArtworkContextPartnerShow',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A slug ID. */
  id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  _id: Scalars['ID'],
  cached?: Maybe<Scalars['Int']>,
  artists?: Maybe<Array<Maybe<Artist>>>,
  /** The artworks featured in the show */
  artworks?: Maybe<Array<Maybe<Artwork>>>,
  /** A connection of artworks featured in the show */
  artworksConnection?: Maybe<ArtworkConnection>,
  counts?: Maybe<PartnerShowCounts>,
  cover_image?: Maybe<Image>,
  created_at?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  displayable?: Maybe<Scalars['Boolean']>,
  end_at?: Maybe<Scalars['String']>,
  events?: Maybe<Array<Maybe<PartnerShowEventType>>>,
  /** A formatted description of the start to end dates */
  exhibition_period?: Maybe<Scalars['String']>,
  fair?: Maybe<Fair>,
  href?: Maybe<Scalars['String']>,
  images?: Maybe<Array<Maybe<Image>>>,
  /** Flag showing if show has any location. */
  has_location?: Maybe<Scalars['Boolean']>,
  /** Gravity doesn’t expose the `active` flag. Temporarily re-state its logic. */
  is_active?: Maybe<Scalars['Boolean']>,
  is_displayable?: Maybe<Scalars['Boolean']>,
  is_fair_booth?: Maybe<Scalars['Boolean']>,
  kind?: Maybe<Scalars['String']>,
  location?: Maybe<Location>,
  meta_image?: Maybe<Image>,
  /** The exhibition title */
  name?: Maybe<Scalars['String']>,
  partner?: Maybe<Partner>,
  press_release?: Maybe<Scalars['String']>,
  start_at?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  /** A formatted update on upcoming status changes */
  status_update?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
};


export type ArtworkContextPartnerShowArtworksArgs = {
  exclude?: Maybe<Array<Maybe<Scalars['String']>>>,
  for_sale?: Maybe<Scalars['Boolean']>,
  published?: Maybe<Scalars['Boolean']>,
  all?: Maybe<Scalars['Boolean']>,
  page?: Maybe<Scalars['Int']>,
  size?: Maybe<Scalars['Int']>
};


export type ArtworkContextPartnerShowArtworksConnectionArgs = {
  exclude?: Maybe<Array<Maybe<Scalars['String']>>>,
  for_sale?: Maybe<Scalars['Boolean']>,
  published?: Maybe<Scalars['Boolean']>,
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type ArtworkContextPartnerShowCreated_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type ArtworkContextPartnerShowEnd_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type ArtworkContextPartnerShowImagesArgs = {
  size?: Maybe<Scalars['Int']>,
  default?: Maybe<Scalars['Boolean']>,
  page?: Maybe<Scalars['Int']>
};


export type ArtworkContextPartnerShowPress_ReleaseArgs = {
  format?: Maybe<Format>
};


export type ArtworkContextPartnerShowStart_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type ArtworkContextPartnerShowStatus_UpdateArgs = {
  max_days?: Maybe<Scalars['Int']>
};

export type ArtworkContextSale = Node & {
  __typename?: 'ArtworkContextSale',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A slug ID. */
  id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  _id: Scalars['ID'],
  cached?: Maybe<Scalars['Int']>,
  artworks?: Maybe<Array<Maybe<Artwork>>>,
  /** Returns a connection of artworks for a sale. */
  artworksConnection?: Maybe<ArtworkConnection>,
  associated_sale?: Maybe<Sale>,
  auction_state?: Maybe<Scalars['String']>,
  /** A bid increment policy that explains minimum bids in ranges. */
  bid_increments?: Maybe<Array<Maybe<BidIncrement>>>,
  /** Auction's buyer's premium policy. */
  buyers_premium?: Maybe<Array<Maybe<BuyersPremium>>>,
  cover_image?: Maybe<Image>,
  currency?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  display_timely_at?: Maybe<Scalars['String']>,
  eligible_sale_artworks_count?: Maybe<Scalars['Int']>,
  end_at?: Maybe<Scalars['String']>,
  event_start_at?: Maybe<Scalars['String']>,
  event_end_at?: Maybe<Scalars['String']>,
  /** A formatted description of when the auction starts or ends or if it has ended */
  formattedStartDateTime?: Maybe<Scalars['String']>,
  href?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  initials?: Maybe<Scalars['String']>,
  is_auction?: Maybe<Scalars['Boolean']>,
  is_benefit?: Maybe<Scalars['Boolean']>,
  isBenefit?: Maybe<Scalars['Boolean']>,
  isGalleryAuction?: Maybe<Scalars['Boolean']>,
  is_auction_promo?: Maybe<Scalars['Boolean']>,
  is_closed?: Maybe<Scalars['Boolean']>,
  is_open?: Maybe<Scalars['Boolean']>,
  is_live_open?: Maybe<Scalars['Boolean']>,
  is_preview?: Maybe<Scalars['Boolean']>,
  is_registration_closed?: Maybe<Scalars['Boolean']>,
  is_with_buyers_premium?: Maybe<Scalars['Boolean']>,
  live_start_at?: Maybe<Scalars['String']>,
  /** Returns a live auctions url if the sale is open and start time is after now */
  live_url_if_open?: Maybe<Scalars['String']>,
  partner?: Maybe<Partner>,
  profile?: Maybe<Profile>,
  promoted_sale?: Maybe<Sale>,
  registration_ends_at?: Maybe<Scalars['String']>,
  /** A registration for this sale or null */
  registrationStatus?: Maybe<Bidder>,
  require_bidder_approval?: Maybe<Scalars['Boolean']>,
  sale_artworks?: Maybe<Array<Maybe<SaleArtwork>>>,
  sale_artworks_connection?: Maybe<SaleArtworkConnection>,
  sale_type?: Maybe<Scalars['String']>,
  start_at?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  sale_artwork?: Maybe<SaleArtwork>,
  symbol?: Maybe<Scalars['String']>,
};


export type ArtworkContextSaleArtworksArgs = {
  page?: Maybe<Scalars['Int']>,
  size?: Maybe<Scalars['Int']>,
  all?: Maybe<Scalars['Boolean']>,
  exclude?: Maybe<Array<Maybe<Scalars['String']>>>
};


export type ArtworkContextSaleArtworksConnectionArgs = {
  exclude?: Maybe<Array<Maybe<Scalars['String']>>>,
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type ArtworkContextSaleEnd_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type ArtworkContextSaleEvent_Start_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type ArtworkContextSaleEvent_End_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type ArtworkContextSaleInitialsArgs = {
  length?: Maybe<Scalars['Int']>
};


export type ArtworkContextSaleLive_Start_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type ArtworkContextSaleRegistration_Ends_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type ArtworkContextSaleSale_ArtworksArgs = {
  page?: Maybe<Scalars['Int']>,
  size?: Maybe<Scalars['Int']>,
  all?: Maybe<Scalars['Boolean']>
};


export type ArtworkContextSaleSale_Artworks_ConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type ArtworkContextSaleStart_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type ArtworkContextSaleSale_ArtworkArgs = {
  id: Scalars['String']
};

/** An edge in a connection. */
export type ArtworkEdge = {
  __typename?: 'ArtworkEdge',
  /** The item at the end of the edge */
  node?: Maybe<Artwork>,
  /** A cursor for use in pagination */
  cursor: Scalars['String'],
};

export type ArtworkFilterFacet = ArtworkFilterTag | ArtworkFilterGene;

export type ArtworkFilterGene = Node & {
  __typename?: 'ArtworkFilterGene',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A slug ID. */
  id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  _id: Scalars['ID'],
  cached?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  href?: Maybe<Scalars['String']>,
  image?: Maybe<Image>,
  count?: Maybe<Scalars['Int']>,
  /** Artworks Elastic Search results */
  filtered_artworks?: Maybe<FilterArtworks>,
};


export type ArtworkFilterGeneFiltered_ArtworksArgs = {
  acquireable?: Maybe<Scalars['Boolean']>,
  offerable?: Maybe<Scalars['Boolean']>,
  aggregation_partner_cities?: Maybe<Array<Maybe<Scalars['String']>>>,
  aggregations?: Maybe<Array<Maybe<ArtworkAggregation>>>,
  artist_id?: Maybe<Scalars['String']>,
  artist_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  at_auction?: Maybe<Scalars['Boolean']>,
  attribution_class?: Maybe<Array<Maybe<Scalars['String']>>>,
  color?: Maybe<Scalars['String']>,
  dimension_range?: Maybe<Scalars['String']>,
  extra_aggregation_gene_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  include_artworks_by_followed_artists?: Maybe<Scalars['Boolean']>,
  include_medium_filter_in_aggregation?: Maybe<Scalars['Boolean']>,
  inquireable_only?: Maybe<Scalars['Boolean']>,
  for_sale?: Maybe<Scalars['Boolean']>,
  gene_id?: Maybe<Scalars['String']>,
  gene_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  height?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['String']>,
  marketable?: Maybe<Scalars['Boolean']>,
  medium?: Maybe<Scalars['String']>,
  period?: Maybe<Scalars['String']>,
  periods?: Maybe<Array<Maybe<Scalars['String']>>>,
  major_periods?: Maybe<Array<Maybe<Scalars['String']>>>,
  partner_id?: Maybe<Scalars['ID']>,
  partner_cities?: Maybe<Array<Maybe<Scalars['String']>>>,
  price_range?: Maybe<Scalars['String']>,
  page?: Maybe<Scalars['Int']>,
  sale_id?: Maybe<Scalars['ID']>,
  size?: Maybe<Scalars['Int']>,
  sort?: Maybe<Scalars['String']>,
  tag_id?: Maybe<Scalars['String']>,
  keyword?: Maybe<Scalars['String']>,
  keyword_match_exact?: Maybe<Scalars['Boolean']>
};

export type ArtworkFilterTag = Node & {
  __typename?: 'ArtworkFilterTag',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A slug ID. */
  id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  _id: Scalars['ID'],
  cached?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  href?: Maybe<Scalars['String']>,
  image?: Maybe<Image>,
  count?: Maybe<Scalars['Int']>,
  /** Artworks Elastic Search results */
  filtered_artworks?: Maybe<FilterArtworks>,
};


export type ArtworkFilterTagFiltered_ArtworksArgs = {
  acquireable?: Maybe<Scalars['Boolean']>,
  offerable?: Maybe<Scalars['Boolean']>,
  aggregation_partner_cities?: Maybe<Array<Maybe<Scalars['String']>>>,
  aggregations?: Maybe<Array<Maybe<ArtworkAggregation>>>,
  artist_id?: Maybe<Scalars['String']>,
  artist_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  at_auction?: Maybe<Scalars['Boolean']>,
  attribution_class?: Maybe<Array<Maybe<Scalars['String']>>>,
  color?: Maybe<Scalars['String']>,
  dimension_range?: Maybe<Scalars['String']>,
  extra_aggregation_gene_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  include_artworks_by_followed_artists?: Maybe<Scalars['Boolean']>,
  include_medium_filter_in_aggregation?: Maybe<Scalars['Boolean']>,
  inquireable_only?: Maybe<Scalars['Boolean']>,
  for_sale?: Maybe<Scalars['Boolean']>,
  gene_id?: Maybe<Scalars['String']>,
  gene_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  height?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['String']>,
  marketable?: Maybe<Scalars['Boolean']>,
  medium?: Maybe<Scalars['String']>,
  period?: Maybe<Scalars['String']>,
  periods?: Maybe<Array<Maybe<Scalars['String']>>>,
  major_periods?: Maybe<Array<Maybe<Scalars['String']>>>,
  partner_id?: Maybe<Scalars['ID']>,
  partner_cities?: Maybe<Array<Maybe<Scalars['String']>>>,
  price_range?: Maybe<Scalars['String']>,
  page?: Maybe<Scalars['Int']>,
  sale_id?: Maybe<Scalars['ID']>,
  size?: Maybe<Scalars['Int']>,
  sort?: Maybe<Scalars['String']>,
  tag_id?: Maybe<Scalars['String']>,
  keyword?: Maybe<Scalars['String']>,
  keyword_match_exact?: Maybe<Scalars['Boolean']>
};

export type ArtworkInfoRow = {
  __typename?: 'ArtworkInfoRow',
  /** Label for information row */
  label?: Maybe<Scalars['String']>,
  /** Additional details about given attribute */
  details?: Maybe<Scalars['String']>,
};

/** An inquiry on an Artwork */
export type ArtworkInquiry = {
  __typename?: 'ArtworkInquiry',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  id: Scalars['ID'],
  artwork: Artwork,
  impulse_conversation_id?: Maybe<Scalars['String']>,
};

/** A connection to a list of items. */
export type ArtworkInquiryConnection = {
  __typename?: 'ArtworkInquiryConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ArtworkInquiryEdge>>>,
};

/** An edge in a connection. */
export type ArtworkInquiryEdge = {
  __typename?: 'ArtworkInquiryEdge',
  /** The item at the end of the edge */
  node?: Maybe<ArtworkInquiry>,
  /** A cursor for use in pagination */
  cursor: Scalars['String'],
};

export type ArtworkItem = Node & Searchable & Sellable & {
  __typename?: 'ArtworkItem',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A slug ID. */
  id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  _id: Scalars['ID'],
  cached?: Maybe<Scalars['Int']>,
  additional_information?: Maybe<Scalars['String']>,
  artist?: Maybe<Artist>,
  artists?: Maybe<Array<Maybe<Artist>>>,
  artist_names?: Maybe<Scalars['String']>,
  articles?: Maybe<Array<Maybe<Article>>>,
  availability?: Maybe<Scalars['String']>,
  can_share_image?: Maybe<Scalars['Boolean']>,
  category?: Maybe<Scalars['String']>,
  /** Attribution class object */
  attribution_class?: Maybe<AttributionClass>,
  collecting_institution?: Maybe<Scalars['String']>,
  contact_label?: Maybe<Scalars['String']>,
  /** Pre-filled inquiry text */
  contact_message?: Maybe<Scalars['String']>,
  /** Returns the associated Fair/Sale/PartnerShow */
  context?: Maybe<ArtworkContext>,
  contextGrids?: Maybe<Array<Maybe<ArtworkContextGrid>>>,
  cultural_maker?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  dimensions?: Maybe<Dimensions>,
  /** Returns an HTML string representing the embedded content (video) */
  embed?: Maybe<Scalars['String']>,
  edition_of?: Maybe<Scalars['String']>,
  edition_sets?: Maybe<Array<Maybe<EditionSet>>>,
  exhibition_history?: Maybe<Scalars['String']>,
  fair?: Maybe<Fair>,
  /** Formatted artwork metadata, including artist, title, date and partner; e.g., 'Andy Warhol, Truck, 1980, Westward Gallery'. */
  formattedMetadata?: Maybe<Scalars['String']>,
  height?: Maybe<Scalars['String']>,
  /** Returns the highlighted shows and articles */
  highlights?: Maybe<Array<Maybe<Highlighted>>>,
  href?: Maybe<Scalars['String']>,
  image?: Maybe<Image>,
  imageUrl?: Maybe<Scalars['String']>,
  image_rights?: Maybe<Scalars['String']>,
  image_title?: Maybe<Scalars['String']>,
  images?: Maybe<Array<Maybe<Image>>>,
  /** Private text field for partner use */
  inventoryId?: Maybe<Scalars['String']>,
  /** Whether a work can be purchased through e-commerce */
  is_acquireable?: Maybe<Scalars['Boolean']>,
  /** Whether a user can make an offer on a work */
  is_offerable?: Maybe<Scalars['Boolean']>,
  /** Is this artwork part of an auction that is currently running? */
  is_biddable?: Maybe<Scalars['Boolean']>,
  /** When in an auction, can the work be bought immediately */
  is_buy_nowable?: Maybe<Scalars['Boolean']>,
  is_comparable_with_auction_results?: Maybe<Scalars['Boolean']>,
  /** Are we able to display a contact form on artwork pages? */
  is_contactable?: Maybe<Scalars['Boolean']>,
  is_downloadable?: Maybe<Scalars['Boolean']>,
  is_embeddable_video?: Maybe<Scalars['Boolean']>,
  is_ecommerce?: Maybe<Scalars['Boolean']>,
  is_for_sale?: Maybe<Scalars['Boolean']>,
  is_hangable?: Maybe<Scalars['Boolean']>,
  /** Do we want to encourage inquiries on this work? */
  is_inquireable?: Maybe<Scalars['Boolean']>,
  /** Is this artwork part of an auction? */
  is_in_auction?: Maybe<Scalars['Boolean']>,
  /** Is this artwork part of a current show */
  is_in_show?: Maybe<Scalars['Boolean']>,
  is_not_for_sale?: Maybe<Scalars['String']>,
  is_on_hold?: Maybe<Scalars['String']>,
  is_price_hidden?: Maybe<Scalars['Boolean']>,
  is_price_range?: Maybe<Scalars['Boolean']>,
  is_purchasable?: Maybe<Scalars['Boolean']>,
  is_saved?: Maybe<Scalars['Boolean']>,
  is_shareable?: Maybe<Scalars['Boolean']>,
  is_sold?: Maybe<Scalars['Boolean']>,
  is_unique?: Maybe<Scalars['Boolean']>,
  displayLabel?: Maybe<Scalars['String']>,
  layer?: Maybe<ArtworkLayer>,
  layers?: Maybe<Array<Maybe<ArtworkLayer>>>,
  literature?: Maybe<Scalars['String']>,
  manufacturer?: Maybe<Scalars['String']>,
  medium?: Maybe<Scalars['String']>,
  metric?: Maybe<Scalars['String']>,
  meta?: Maybe<ArtworkMeta>,
  myLotStanding?: Maybe<Array<LotStanding>>,
  /** [DO NOT USE] Weekly pageview data (static). */
  pageviews?: Maybe<Scalars['Int']>,
  partner?: Maybe<Partner>,
  pickup_available?: Maybe<Scalars['Boolean']>,
  price?: Maybe<Scalars['String']>,
  priceCents?: Maybe<PriceCents>,
  listPrice?: Maybe<ListPrice>,
  price_currency?: Maybe<Scalars['String']>,
  /** Is this work available for shipping only within the Contenental US? */
  shipsToContinentalUSOnly?: Maybe<Scalars['Boolean']>,
  /** The string that describes domestic and international shipping. */
  shippingInfo?: Maybe<Scalars['String']>,
  /** Minimal location information describing from where artwork will be shipped. */
  shippingOrigin?: Maybe<Scalars['String']>,
  provenance?: Maybe<Scalars['String']>,
  publisher?: Maybe<Scalars['String']>,
  related?: Maybe<Array<Maybe<Artwork>>>,
  sale?: Maybe<Sale>,
  sale_artwork?: Maybe<SaleArtwork>,
  sale_message?: Maybe<Scalars['String']>,
  series?: Maybe<Scalars['String']>,
  show?: Maybe<PartnerShow>,
  v2_shows?: Maybe<Array<Maybe<Show>>>,
  shows?: Maybe<Array<Maybe<PartnerShow>>>,
  signature?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  /** Formatted artwork metadata, including artist, title, date and partner; e.g., 'Andy Warhol, Truck, 1980, Westward Gallery'. */
  to_s?: Maybe<Scalars['String']>,
  /** Whether this Artwork is Published of not */
  published: Scalars['Boolean'],
  /** If the category is video, then it returns the href for the (youtube/vimeo) video, otherwise returns the website from CMS */
  website?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['String']>,
  framed?: Maybe<ArtworkInfoRow>,
  signatureInfo?: Maybe<ArtworkInfoRow>,
  conditionDescription?: Maybe<ArtworkInfoRow>,
  certificateOfAuthenticity?: Maybe<ArtworkInfoRow>,
  /** If you need to render artwork dimensions as a string, prefer the `Artwork#dimensions` field */
  widthCm?: Maybe<Scalars['Float']>,
  /** If you need to render artwork dimensions as a string, prefer the `Artwork#dimensions` field */
  heightCm?: Maybe<Scalars['Float']>,
  /** score assigned to an artwork based on its dimensions */
  sizeScore?: Maybe<Scalars['Float']>,
};


export type ArtworkItemAdditional_InformationArgs = {
  format?: Maybe<Format>
};


export type ArtworkItemArtistArgs = {
  shallow?: Maybe<Scalars['Boolean']>
};


export type ArtworkItemArtistsArgs = {
  shallow?: Maybe<Scalars['Boolean']>
};


export type ArtworkItemArticlesArgs = {
  size?: Maybe<Scalars['Int']>
};


export type ArtworkItemDescriptionArgs = {
  format?: Maybe<Format>
};


export type ArtworkItemEmbedArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  autoplay?: Maybe<Scalars['Boolean']>
};


export type ArtworkItemEdition_SetsArgs = {
  sort?: Maybe<EditionSetSorts>
};


export type ArtworkItemExhibition_HistoryArgs = {
  format?: Maybe<Format>
};


export type ArtworkItemImagesArgs = {
  size?: Maybe<Scalars['Int']>
};


export type ArtworkItemLayerArgs = {
  id?: Maybe<Scalars['String']>
};


export type ArtworkItemLiteratureArgs = {
  format?: Maybe<Format>
};


export type ArtworkItemManufacturerArgs = {
  format?: Maybe<Format>
};


export type ArtworkItemMyLotStandingArgs = {
  live?: Maybe<Scalars['Boolean']>
};


export type ArtworkItemPartnerArgs = {
  shallow?: Maybe<Scalars['Boolean']>
};


export type ArtworkItemProvenanceArgs = {
  format?: Maybe<Format>
};


export type ArtworkItemPublisherArgs = {
  format?: Maybe<Format>
};


export type ArtworkItemRelatedArgs = {
  size?: Maybe<Scalars['Int']>
};


export type ArtworkItemSale_ArtworkArgs = {
  sale_id?: Maybe<Scalars['String']>
};


export type ArtworkItemSeriesArgs = {
  format?: Maybe<Format>
};


export type ArtworkItemShowArgs = {
  size?: Maybe<Scalars['Int']>,
  active?: Maybe<Scalars['Boolean']>,
  at_a_fair?: Maybe<Scalars['Boolean']>,
  sort?: Maybe<PartnerShowSorts>
};


export type ArtworkItemV2_ShowsArgs = {
  size?: Maybe<Scalars['Int']>,
  active?: Maybe<Scalars['Boolean']>,
  at_a_fair?: Maybe<Scalars['Boolean']>,
  sort?: Maybe<ShowSort>
};


export type ArtworkItemShowsArgs = {
  size?: Maybe<Scalars['Int']>,
  active?: Maybe<Scalars['Boolean']>,
  at_a_fair?: Maybe<Scalars['Boolean']>,
  sort?: Maybe<PartnerShowSorts>
};


export type ArtworkItemSignatureArgs = {
  format?: Maybe<Format>
};

export type ArtworkLayer = {
  __typename?: 'ArtworkLayer',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A type-specific ID. */
  id: Scalars['ID'],
  artworks?: Maybe<Array<Maybe<Artwork>>>,
  /** A connection of artworks from a Layer. */
  artworksConnection?: Maybe<ArtworkConnection>,
  description?: Maybe<Scalars['String']>,
  href?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
};


export type ArtworkLayerArtworksConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};

export type ArtworkMeta = {
  __typename?: 'ArtworkMeta',
  description?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  share?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};


export type ArtworkMetaDescriptionArgs = {
  limit?: Maybe<Scalars['Int']>
};

/** The results for one of the requested aggregations */
export type ArtworksAggregationResults = {
  __typename?: 'ArtworksAggregationResults',
  counts?: Maybe<Array<Maybe<AggregationCount>>>,
  slice?: Maybe<ArtworkAggregation>,
};

export enum ArtworkSorts {
  availability_desc = 'availability_desc',
  created_at_asc = 'created_at_asc',
  created_at_desc = 'created_at_desc',
  deleted_at_asc = 'deleted_at_asc',
  deleted_at_desc = 'deleted_at_desc',
  iconicity_desc = 'iconicity_desc',
  merchandisability_desc = 'merchandisability_desc',
  published_at_asc = 'published_at_asc',
  published_at_desc = 'published_at_desc',
  partner_updated_at_desc = 'partner_updated_at_desc',
  title_asc = 'title_asc',
  title_desc = 'title_desc',
  AVAILABILITY_DESC = 'AVAILABILITY_DESC',
  CREATED_AT_ASC = 'CREATED_AT_ASC',
  CREATED_AT_DESC = 'CREATED_AT_DESC',
  DELETED_AT_ASC = 'DELETED_AT_ASC',
  DELETED_AT_DESC = 'DELETED_AT_DESC',
  ICONICITY_DESC = 'ICONICITY_DESC',
  MERCHANDISABILITY_DESC = 'MERCHANDISABILITY_DESC',
  PARTNER_UPDATED_AT_DESC = 'PARTNER_UPDATED_AT_DESC',
  PUBLISHED_AT_ASC = 'PUBLISHED_AT_ASC',
  PUBLISHED_AT_DESC = 'PUBLISHED_AT_DESC',
  TITLE_ASC = 'TITLE_ASC',
  TITLE_DESC = 'TITLE_DESC'
}

export type ArtworkVersion = {
  __typename?: 'ArtworkVersion',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  id: Scalars['ID'],
  /** Artwork title */
  title?: Maybe<Scalars['String']>,
  /** The Image id */
  defaultImageID?: Maybe<Scalars['String']>,
  /** The artists related to this Artwork Version */
  artists?: Maybe<Scalars['String']>,
  /** The names for the artists related to this Artwork Version */
  artistNames?: Maybe<Scalars['String']>,
  /** The image representing the Artwork Version */
  image?: Maybe<Image>,
};

/** An asset which is assigned to a consignment submission */
export type Asset = {
  __typename?: 'Asset',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  id: Scalars['ID'],
  /** The convection submission ID */
  submission_id?: Maybe<Scalars['String']>,
  /** The gemini token for the asset */
  gemini_token?: Maybe<Scalars['String']>,
  /** The type of the asset */
  asset_type?: Maybe<Scalars['String']>,
};

/** Fields of an attachment (currently from Radiation) */
export type Attachment = {
  __typename?: 'Attachment',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  id: Scalars['ID'],
  /** Content type of file. */
  content_type: Scalars['String'],
  /** File name. */
  file_name: Scalars['String'],
  download_url: Scalars['String'],
};

/** Collection of fields that describe attribution class */
export type AttributionClass = {
  __typename?: 'AttributionClass',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  id: Scalars['ID'],
  /** Shortest form of attribution class display */
  name?: Maybe<Scalars['String']>,
  /** Descriptive phrase used as companion for attribution class name display */
  info?: Maybe<Scalars['String']>,
  /** Longer version of attribution class display */
  short_description?: Maybe<Scalars['String']>,
  /** Long descriptive phrase used as companion for short_description */
  long_description?: Maybe<Scalars['String']>,
  /** Longer version of attribution class display */
  shortDescription?: Maybe<Scalars['String']>,
  /** Long descriptive phrase used as companion for short_description */
  longDescription?: Maybe<Scalars['String']>,
};

export type AuctionArtworkGrid = ArtworkContextGrid & {
  __typename?: 'AuctionArtworkGrid',
  title?: Maybe<Scalars['String']>,
  ctaTitle?: Maybe<Scalars['String']>,
  ctaHref?: Maybe<Scalars['String']>,
  artworks?: Maybe<ArtworkConnection>,
};


export type AuctionArtworkGridArtworksArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};

/** In centimeters. */
export type AuctionLotDimensions = {
  __typename?: 'AuctionLotDimensions',
  width?: Maybe<Scalars['Float']>,
  height?: Maybe<Scalars['Float']>,
  depth?: Maybe<Scalars['Float']>,
};

export type AuctionLotEstimate = {
  __typename?: 'AuctionLotEstimate',
  low?: Maybe<Scalars['Float']>,
  high?: Maybe<Scalars['Float']>,
  display?: Maybe<Scalars['String']>,
};

export type AuctionLotImages = {
  __typename?: 'AuctionLotImages',
  larger?: Maybe<Image>,
  thumbnail?: Maybe<Image>,
};

export type AuctionResult = Node & {
  __typename?: 'AuctionResult',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  id: Scalars['ID'],
  title?: Maybe<Scalars['String']>,
  artist_id: Scalars['String'],
  date?: Maybe<Scalars['String']>,
  date_text?: Maybe<Scalars['String']>,
  medium_text?: Maybe<Scalars['String']>,
  category_text?: Maybe<Scalars['String']>,
  dimension_text?: Maybe<Scalars['String']>,
  dimensions?: Maybe<AuctionLotDimensions>,
  organization?: Maybe<Scalars['String']>,
  sale_date?: Maybe<Scalars['String']>,
  sale_date_text?: Maybe<Scalars['String']>,
  sale_title?: Maybe<Scalars['String']>,
  currency?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  external_url?: Maybe<Scalars['String']>,
  images?: Maybe<AuctionLotImages>,
  estimate?: Maybe<AuctionLotEstimate>,
  price_realized?: Maybe<AuctionResultPriceRealized>,
};


export type AuctionResultDateArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type AuctionResultSale_DateArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};

/** A connection to a list of items. */
export type AuctionResultConnection = {
  __typename?: 'AuctionResultConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<AuctionResultEdge>>>,
  pageCursors?: Maybe<PageCursors>,
  totalCount?: Maybe<Scalars['Int']>,
};

/** An edge in a connection. */
export type AuctionResultEdge = {
  __typename?: 'AuctionResultEdge',
  /** The item at the end of the edge */
  node?: Maybe<AuctionResult>,
  /** A cursor for use in pagination */
  cursor: Scalars['String'],
};

export type AuctionResultPriceRealized = {
  __typename?: 'AuctionResultPriceRealized',
  cents?: Maybe<Scalars['Float']>,
  cents_usd?: Maybe<Scalars['Float']>,
  display?: Maybe<Scalars['String']>,
};


export type AuctionResultPriceRealizedDisplayArgs = {
  format?: Maybe<Scalars['String']>
};

export enum AuctionResultSorts {
  DATE_DESC = 'DATE_DESC',
  PRICE_AND_DATE_DESC = 'PRICE_AND_DATE_DESC',
  ESTIMATE_AND_DATE_DESC = 'ESTIMATE_AND_DATE_DESC'
}

export type Author = {
  __typename?: 'Author',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A type-specific ID. */
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  href?: Maybe<Scalars['String']>,
  profile_handle?: Maybe<Scalars['String']>,
};

export type Bidder = {
  __typename?: 'Bidder',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  id: Scalars['ID'],
  created_at?: Maybe<Scalars['String']>,
  pin?: Maybe<Scalars['String']>,
  qualified_for_bidding?: Maybe<Scalars['Boolean']>,
  sale?: Maybe<Sale>,
};


export type BidderCreated_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};

export type BidderPosition = {
  __typename?: 'BidderPosition',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  id: Scalars['ID'],
  created_at?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['String']>,
  processed_at?: Maybe<Scalars['String']>,
  display_max_bid_amount_dollars?: Maybe<Scalars['String']>,
  display_suggested_next_bid_dollars?: Maybe<Scalars['String']>,
  highest_bid?: Maybe<HighestBid>,
  is_active?: Maybe<Scalars['Boolean']>,
  is_retracted?: Maybe<Scalars['Boolean']>,
  is_with_bid_max?: Maybe<Scalars['Boolean']>,
  is_winning?: Maybe<Scalars['Boolean']>,
  max_bid?: Maybe<BidderPositionMaxBid>,
  max_bid_amount_cents?: Maybe<Scalars['Int']>,
  sale_artwork?: Maybe<SaleArtwork>,
  suggested_next_bid?: Maybe<BidderPositionSuggestedNextBid>,
  suggested_next_bid_cents?: Maybe<Scalars['Int']>,
};


export type BidderPositionCreated_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type BidderPositionUpdated_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type BidderPositionProcessed_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};

export type BidderPositionInput = {
  sale_id: Scalars['String'],
  artwork_id: Scalars['String'],
  max_bid_amount_cents: Scalars['Float'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type BidderPositionMaxBid = {
  __typename?: 'BidderPositionMaxBid',
  /** A formatted price with various currency formatting options. */
  amount?: Maybe<Scalars['String']>,
  /** An amount of money expressed in cents. */
  cents?: Maybe<Scalars['Float']>,
  /** A pre-formatted price. */
  display?: Maybe<Scalars['String']>,
};


export type BidderPositionMaxBidAmountArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};

export type BidderPositionPayload = {
  __typename?: 'BidderPositionPayload',
  result?: Maybe<BidderPositionResult>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type BidderPositionResult = {
  __typename?: 'BidderPositionResult',
  status: Scalars['String'],
  message_header?: Maybe<Scalars['String']>,
  message_description_md?: Maybe<Scalars['String']>,
  position?: Maybe<BidderPosition>,
};

export type BidderPositionSuggestedNextBid = {
  __typename?: 'BidderPositionSuggestedNextBid',
  /** A formatted price with various currency formatting options. */
  amount?: Maybe<Scalars['String']>,
  /** An amount of money expressed in cents. */
  cents?: Maybe<Scalars['Float']>,
  /** A pre-formatted price. */
  display?: Maybe<Scalars['String']>,
};


export type BidderPositionSuggestedNextBidAmountArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};

export type BidIncrement = {
  __typename?: 'BidIncrement',
  amount?: Maybe<Scalars['Int']>,
  from?: Maybe<Scalars['Int']>,
  to?: Maybe<Scalars['Int']>,
};

export type BidIncrementsFormatted = {
  __typename?: 'BidIncrementsFormatted',
  cents?: Maybe<Scalars['Float']>,
  display?: Maybe<Scalars['String']>,
};

export type BuyerAcceptOfferInput = {
  /** Offer ID */
  offerId: Scalars['String'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type BuyerAcceptOfferPayload = {
  __typename?: 'buyerAcceptOfferPayload',
  orderOrError?: Maybe<OrderOrFailureUnionType>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type BuyerCounterOfferInput = {
  /** The ID of the offer to counter */
  offerId: Scalars['String'],
  /** Offer price */
  offerPrice?: Maybe<MoneyInput>,
  /** Offer note */
  note?: Maybe<Scalars['String']>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type BuyerCounterOfferPayload = {
  __typename?: 'buyerCounterOfferPayload',
  orderOrError?: Maybe<OrderOrFailureUnionType>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type BuyerRejectOfferInput = {
  /** Offer ID */
  offerId: Scalars['String'],
  /** Reason for rejecting offer */
  rejectReason?: Maybe<CancelReasonType>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type BuyerRejectOfferPayload = {
  __typename?: 'buyerRejectOfferPayload',
  orderOrError?: Maybe<OrderOrFailureUnionType>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type BuyersPremium = {
  __typename?: 'BuyersPremium',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A slug ID. */
  id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  _id: Scalars['ID'],
  /** A formatted price with various currency formatting options. */
  amount?: Maybe<Scalars['String']>,
  cents?: Maybe<Scalars['Int']>,
  percent?: Maybe<Scalars['Float']>,
};


export type BuyersPremiumAmountArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};

export type BuyOrder = Order & {
  __typename?: 'BuyOrder',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  id: Scalars['ID'],
  /** Order Mode */
  mode?: Maybe<OrderModeEnum>,
  /** Currency code of this order */
  currencyCode?: Maybe<Scalars['String']>,
  /** State of the order */
  state?: Maybe<Scalars['String']>,
  /** Reason for current state */
  stateReason?: Maybe<Scalars['String']>,
  /** Uniq user-friendly code of the order */
  code?: Maybe<Scalars['String']>,
  /** Order Requested Fulfillment */
  requestedFulfillment?: Maybe<RequestedFulfillment>,
  /** Item total in cents */
  itemsTotalCents?: Maybe<Scalars['Int']>,
  /** A formatted price with various currency formatting options. */
  itemsTotal?: Maybe<Scalars['String']>,
  /** Total list price in cents */
  totalListPriceCents?: Maybe<Scalars['Int']>,
  /** A formatted price with various currency formatting options. */
  totalListPrice?: Maybe<Scalars['String']>,
  /** Shipping total in cents */
  shippingTotalCents?: Maybe<Scalars['Int']>,
  /** A formatted price with various currency formatting options. */
  shippingTotal?: Maybe<Scalars['String']>,
  /** Tax total in cents */
  taxTotalCents?: Maybe<Scalars['Int']>,
  /** A formatted price with various currency formatting options. */
  taxTotal?: Maybe<Scalars['String']>,
  /** Transaction fee in cents */
  transactionFeeCents?: Maybe<Scalars['Int']>,
  /** A formatted price with various currency formatting options. */
  transactionFee?: Maybe<Scalars['String']>,
  /** Commission fee in cents */
  commissionFeeCents?: Maybe<Scalars['Int']>,
  /** A formatted price with various currency formatting options. */
  commissionFee?: Maybe<Scalars['String']>,
  /** Partner commission rate used to calculate commission fee */
  commissionRate?: Maybe<Scalars['Float']>,
  /** Partner commission rate formatted into percentage */
  displayCommissionRate?: Maybe<Scalars['String']>,
  /** Buyer total in cents */
  buyerTotalCents?: Maybe<Scalars['Int']>,
  /** A formatted price with various currency formatting options. */
  buyerTotal?: Maybe<Scalars['String']>,
  /** Seller total in cents */
  sellerTotalCents?: Maybe<Scalars['Int']>,
  /** A formatted price with various currency formatting options. */
  sellerTotal?: Maybe<Scalars['String']>,
  /** List of order line items */
  lineItems?: Maybe<OrderLineItemConnection>,
  /** Seller of this order */
  seller?: Maybe<OrderParty>,
  /** Buyer of this order */
  buyer?: Maybe<OrderParty>,
  /** Credit card on this order */
  creditCard?: Maybe<CreditCard>,
  /** Whether or not the last attempt to charge the buyer failed */
  lastTransactionFailed?: Maybe<Scalars['Boolean']>,
  lastApprovedAt?: Maybe<Scalars['String']>,
  lastSubmittedAt?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['String']>,
  stateUpdatedAt?: Maybe<Scalars['String']>,
  stateExpiresAt?: Maybe<Scalars['String']>,
  /** Buyer phone number */
  buyerPhoneNumber?: Maybe<Scalars['String']>,
};


export type BuyOrderItemsTotalArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


export type BuyOrderTotalListPriceArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


export type BuyOrderShippingTotalArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


export type BuyOrderTaxTotalArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


export type BuyOrderTransactionFeeArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


export type BuyOrderCommissionFeeArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


export type BuyOrderBuyerTotalArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


export type BuyOrderSellerTotalArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


export type BuyOrderLastApprovedAtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type BuyOrderLastSubmittedAtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type BuyOrderUpdatedAtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type BuyOrderCreatedAtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type BuyOrderStateUpdatedAtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type BuyOrderStateExpiresAtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};

export enum CancelReasonType {
  BUYER_REJECTED = 'BUYER_REJECTED',
  SELLER_LAPSED = 'SELLER_LAPSED',
  SELLER_REJECTED = 'SELLER_REJECTED',
  SELLER_REJECTED_OFFER_TOO_LOW = 'SELLER_REJECTED_OFFER_TOO_LOW',
  SELLER_REJECTED_SHIPPING_UNAVAILABLE = 'SELLER_REJECTED_SHIPPING_UNAVAILABLE',
  SELLER_REJECTED_ARTWORK_UNAVAILABLE = 'SELLER_REJECTED_ARTWORK_UNAVAILABLE',
  SELLER_REJECTED_OTHER = 'SELLER_REJECTED_OTHER'
}

/** Fields of partner category (currently from Gravity). */
export type Category = {
  __typename?: 'Category',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A slug ID. */
  id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  _id: Scalars['ID'],
  category_type?: Maybe<Scalars['String']>,
  internal?: Maybe<Scalars['Boolean']>,
  name?: Maybe<Scalars['String']>,
};

export enum CategoryType {
  GALLERY = 'GALLERY',
  INSTITUTION = 'INSTITUTION'
}

export type City = {
  __typename?: 'City',
  slug?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  coordinates?: Maybe<LatLng>,
  shows?: Maybe<ShowConnection>,
  fairs?: Maybe<FairConnection>,
  sponsoredContent?: Maybe<CitySponsoredContent>,
};


export type CityShowsArgs = {
  sort?: Maybe<PartnerShowSorts>,
  status?: Maybe<EventStatus>,
  partnerType?: Maybe<PartnerShowPartnerType>,
  dayThreshold?: Maybe<Scalars['Int']>,
  includeStubShows?: Maybe<Scalars['Boolean']>,
  discoverable?: Maybe<Scalars['Boolean']>,
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type CityFairsArgs = {
  sort?: Maybe<FairSorts>,
  status?: Maybe<EventStatus>,
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};

export type CitySponsoredContent = {
  __typename?: 'CitySponsoredContent',
  introText?: Maybe<Scalars['String']>,
  artGuideUrl?: Maybe<Scalars['String']>,
  featuredShows?: Maybe<Array<Maybe<Show>>>,
  shows?: Maybe<ShowConnection>,
};


export type CitySponsoredContentShowsArgs = {
  sort?: Maybe<PartnerShowSorts>,
  status?: Maybe<EventStatus>,
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};

export type Collection = Node & {
  __typename?: 'Collection',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A slug ID. */
  id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  _id: Scalars['ID'],
  cached?: Maybe<Scalars['Int']>,
  artworks_connection?: Maybe<ArtworkConnection>,
  description: Scalars['String'],
  default: Scalars['Boolean'],
  name: Scalars['String'],
  private: Scalars['Boolean'],
  slug: Scalars['String'],
};


export type CollectionArtworks_ConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  private?: Maybe<Scalars['Boolean']>,
  sort?: Maybe<CollectionSorts>
};

export enum CollectionSorts {
  POSITION_ASC = 'POSITION_ASC',
  POSITION_DESC = 'POSITION_DESC'
}

export type CollectorProfileType = {
  __typename?: 'CollectorProfileType',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  id: Scalars['ID'],
  email?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  confirmed_buyer_at?: Maybe<Scalars['String']>,
  collector_level?: Maybe<Scalars['Int']>,
  self_reported_purchases?: Maybe<Scalars['String']>,
  loyalty_applicant_at?: Maybe<Scalars['String']>,
  professional_buyer_at?: Maybe<Scalars['String']>,
  professional_buyer_applied_at?: Maybe<Scalars['String']>,
  intents?: Maybe<Array<Maybe<Scalars['String']>>>,
};


export type CollectorProfileTypeConfirmed_Buyer_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type CollectorProfileTypeLoyalty_Applicant_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type CollectorProfileTypeProfessional_Buyer_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type CollectorProfileTypeProfessional_Buyer_Applied_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};

/** Autogenerated input type of AddInitialOfferToOrder */
export type CommerceAddInitialOfferToOrderInput = {
  amountCents: Scalars['Int'],
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>,
  note?: Maybe<Scalars['String']>,
  orderId: Scalars['ID'],
};

/** Autogenerated return type of AddInitialOfferToOrder */
export type CommerceAddInitialOfferToOrderPayload = {
  __typename?: 'CommerceAddInitialOfferToOrderPayload',
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>,
  /** A union of success/failure */
  orderOrError: CommerceOrderOrFailureUnion,
};

/** An generic error type for mutations */
export type CommerceApplicationError = {
  __typename?: 'CommerceApplicationError',
  /** Code of this error */
  code: Scalars['String'],
  /** What caused the error */
  data?: Maybe<Scalars['String']>,
  /** Type of this error */
  type: Scalars['String'],
};

/** Autogenerated input type of ApproveOrder */
export type CommerceApproveOrderInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
};

/** Autogenerated return type of ApproveOrder */
export type CommerceApproveOrderPayload = {
  __typename?: 'CommerceApproveOrderPayload',
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>,
  /** A union of success/failure */
  orderOrError: CommerceOrderOrFailureUnion,
};

/** Autogenerated input type of BuyerAcceptOffer */
export type CommerceBuyerAcceptOfferInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>,
  offerId: Scalars['ID'],
};

/** Autogenerated return type of BuyerAcceptOffer */
export type CommerceBuyerAcceptOfferPayload = {
  __typename?: 'CommerceBuyerAcceptOfferPayload',
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>,
  /** A union of success/failure */
  orderOrError: CommerceOrderOrFailureUnion,
};

/** Autogenerated input type of BuyerCounterOffer */
export type CommerceBuyerCounterOfferInput = {
  amountCents: Scalars['Int'],
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>,
  note?: Maybe<Scalars['String']>,
  offerId: Scalars['ID'],
};

/** Autogenerated return type of BuyerCounterOffer */
export type CommerceBuyerCounterOfferPayload = {
  __typename?: 'CommerceBuyerCounterOfferPayload',
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>,
  /** A union of success/failure */
  orderOrError: CommerceOrderOrFailureUnion,
};

/** Autogenerated input type of BuyerRejectOffer */
export type CommerceBuyerRejectOfferInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>,
  offerId: Scalars['ID'],
  rejectReason?: Maybe<CommerceCancelReasonTypeEnum>,
};

/** Autogenerated return type of BuyerRejectOffer */
export type CommerceBuyerRejectOfferPayload = {
  __typename?: 'CommerceBuyerRejectOfferPayload',
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>,
  /** A union of success/failure */
  orderOrError: CommerceOrderOrFailureUnion,
};

export type CommerceBuyOrder = CommerceOrder & {
  __typename?: 'CommerceBuyOrder',
  buyer: CommerceOrderPartyUnion,
  buyerPhoneNumber?: Maybe<Scalars['String']>,
  buyerTotalCents?: Maybe<Scalars['Int']>,
  code: Scalars['String'],
  commissionFeeCents?: Maybe<Scalars['Int']>,
  commissionRate?: Maybe<Scalars['Float']>,
  createdAt: Scalars['String'],
  creditCardId?: Maybe<Scalars['String']>,
  currencyCode: Scalars['String'],
  displayCommissionRate?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  internalID: Scalars['ID'],
  /** Item total in cents, for Offer Orders this field reflects current offer */
  itemsTotalCents?: Maybe<Scalars['Int']>,
  lastApprovedAt?: Maybe<Scalars['String']>,
  lastSubmittedAt?: Maybe<Scalars['String']>,
  lastTransactionFailed?: Maybe<Scalars['Boolean']>,
  lineItems?: Maybe<CommerceLineItemConnection>,
  mode?: Maybe<CommerceOrderModeEnum>,
  requestedFulfillment?: Maybe<CommerceRequestedFulfillmentUnion>,
  seller: CommerceOrderPartyUnion,
  sellerTotalCents?: Maybe<Scalars['Int']>,
  shippingTotalCents?: Maybe<Scalars['Int']>,
  state: CommerceOrderStateEnum,
  stateExpiresAt?: Maybe<Scalars['String']>,
  stateReason?: Maybe<Scalars['String']>,
  stateUpdatedAt?: Maybe<Scalars['String']>,
  taxTotalCents?: Maybe<Scalars['Int']>,
  totalListPriceCents: Scalars['Int'],
  transactionFeeCents?: Maybe<Scalars['Int']>,
  updatedAt: Scalars['String'],
  buyerDetails?: Maybe<OrderParty>,
  sellerDetails?: Maybe<OrderParty>,
  creditCard?: Maybe<CreditCard>,
  itemsTotal?: Maybe<Scalars['String']>,
  sellerTotal?: Maybe<Scalars['String']>,
  commissionFee?: Maybe<Scalars['String']>,
  totalListPrice?: Maybe<Scalars['String']>,
  buyerTotal?: Maybe<Scalars['String']>,
  taxTotal?: Maybe<Scalars['String']>,
  shippingTotal?: Maybe<Scalars['String']>,
  transactionFee?: Maybe<Scalars['String']>,
};


export type CommerceBuyOrderCreatedAtArgs = {
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type CommerceBuyOrderLastApprovedAtArgs = {
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type CommerceBuyOrderLastSubmittedAtArgs = {
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type CommerceBuyOrderLineItemsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type CommerceBuyOrderStateExpiresAtArgs = {
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type CommerceBuyOrderStateUpdatedAtArgs = {
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type CommerceBuyOrderUpdatedAtArgs = {
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type CommerceBuyOrderItemsTotalArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


export type CommerceBuyOrderSellerTotalArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


export type CommerceBuyOrderCommissionFeeArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


export type CommerceBuyOrderTotalListPriceArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


export type CommerceBuyOrderBuyerTotalArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


export type CommerceBuyOrderTaxTotalArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


export type CommerceBuyOrderShippingTotalArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


export type CommerceBuyOrderTransactionFeeArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};

export enum CommerceCancelReasonTypeEnum {
  /** cancelation reason is: buyer_lapsed */
  BUYER_LAPSED = 'BUYER_LAPSED',
  /** cancelation reason is: buyer_rejected */
  BUYER_REJECTED = 'BUYER_REJECTED',
  /** cancelation reason is: seller_lapsed */
  SELLER_LAPSED = 'SELLER_LAPSED',
  /** cancelation reason is: seller_rejected */
  SELLER_REJECTED = 'SELLER_REJECTED',
  /** cancelation reason is: seller_rejected_artwork_unavailable */
  SELLER_REJECTED_ARTWORK_UNAVAILABLE = 'SELLER_REJECTED_ARTWORK_UNAVAILABLE',
  /** cancelation reason is: seller_rejected_offer_too_low */
  SELLER_REJECTED_OFFER_TOO_LOW = 'SELLER_REJECTED_OFFER_TOO_LOW',
  /** cancelation reason is: seller_rejected_other */
  SELLER_REJECTED_OTHER = 'SELLER_REJECTED_OTHER',
  /** cancelation reason is: seller_rejected_shipping_unavailable */
  SELLER_REJECTED_SHIPPING_UNAVAILABLE = 'SELLER_REJECTED_SHIPPING_UNAVAILABLE'
}

/** Autogenerated input type of ConfirmFulfillment */
export type CommerceConfirmFulfillmentInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
};

/** Autogenerated return type of ConfirmFulfillment */
export type CommerceConfirmFulfillmentPayload = {
  __typename?: 'CommerceConfirmFulfillmentPayload',
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>,
  /** A union of success/failure */
  orderOrError: CommerceOrderOrFailureUnion,
};

/** Autogenerated input type of ConfirmPickup */
export type CommerceConfirmPickupInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
};

/** Autogenerated return type of ConfirmPickup */
export type CommerceConfirmPickupPayload = {
  __typename?: 'CommerceConfirmPickupPayload',
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>,
  /** A union of success/failure */
  orderOrError: CommerceOrderOrFailureUnion,
};

/** Autogenerated input type of CreateOfferOrderWithArtwork */
export type CommerceCreateOfferOrderWithArtworkInput = {
  /** Artwork Id */
  artworkId: Scalars['String'],
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>,
  /** EditionSet Id */
  editionSetId?: Maybe<Scalars['String']>,
  /** 
 * When set to false, we will create a new order. Otherwise if current user has
   * pending/submitted orders on same artwork/edition with same quantity, we will return that
 **/
  findActiveOrCreate?: Maybe<Scalars['Boolean']>,
  /** Number of items in the line item, default is 1 */
  quantity?: Maybe<Scalars['Int']>,
};

/** Autogenerated return type of CreateOfferOrderWithArtwork */
export type CommerceCreateOfferOrderWithArtworkPayload = {
  __typename?: 'CommerceCreateOfferOrderWithArtworkPayload',
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>,
  /** 
 * A union of success/failure. If find_active_or_create is not false, it will
   * return existing pending/submitted order for current user if exists, otherwise
   * it will return newly created order
 **/
  orderOrError: CommerceOrderOrFailureUnion,
};

/** Autogenerated input type of CreateOrderWithArtwork */
export type CommerceCreateOrderWithArtworkInput = {
  /** Artwork Id */
  artworkId: Scalars['String'],
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>,
  /** EditionSet Id */
  editionSetId?: Maybe<Scalars['String']>,
  /** Number of items in the line item */
  quantity?: Maybe<Scalars['Int']>,
};

/** Autogenerated return type of CreateOrderWithArtwork */
export type CommerceCreateOrderWithArtworkPayload = {
  __typename?: 'CommerceCreateOrderWithArtworkPayload',
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>,
  /** A union of success/failure */
  orderOrError: CommerceOrderOrFailureUnion,
};



/** Autogenerated input type of FixFailedPayment */
export type CommerceFixFailedPaymentInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>,
  creditCardId: Scalars['String'],
  offerId: Scalars['ID'],
};

/** Autogenerated return type of FixFailedPayment */
export type CommerceFixFailedPaymentPayload = {
  __typename?: 'CommerceFixFailedPaymentPayload',
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>,
  /** A union of success/failure */
  orderOrError: CommerceOrderOrFailureUnion,
};

/** Autogenerated input type of FulfillAtOnce */
export type CommerceFulfillAtOnceInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>,
  fulfillment: CommerceFulfillmentAttributes,
  id: Scalars['ID'],
};

/** Autogenerated return type of FulfillAtOnce */
export type CommerceFulfillAtOncePayload = {
  __typename?: 'CommerceFulfillAtOncePayload',
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>,
  /** A union of success/failure */
  orderOrError: CommerceOrderOrFailureUnion,
};

/** A Fulfillment for an order */
export type CommerceFulfillment = {
  __typename?: 'CommerceFulfillment',
  courier: Scalars['String'],
  createdAt: Scalars['String'],
  estimatedDelivery?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  internalID: Scalars['ID'],
  notes?: Maybe<Scalars['String']>,
  trackingId?: Maybe<Scalars['String']>,
  updatedAt: Scalars['String'],
};


/** A Fulfillment for an order */
export type CommerceFulfillmentCreatedAtArgs = {
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


/** A Fulfillment for an order */
export type CommerceFulfillmentEstimatedDeliveryArgs = {
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


/** A Fulfillment for an order */
export type CommerceFulfillmentUpdatedAtArgs = {
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};

/** Attributes of a Fulfillment */
export type CommerceFulfillmentAttributes = {
  courier: Scalars['String'],
  estimatedDelivery?: Maybe<Scalars['CommerceDate']>,
  notes?: Maybe<Scalars['String']>,
  trackingId?: Maybe<Scalars['String']>,
};

/** The connection type for Fulfillment. */
export type CommerceFulfillmentConnection = {
  __typename?: 'CommerceFulfillmentConnection',
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CommerceFulfillmentEdge>>>,
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<CommerceFulfillment>>>,
  /** Information to aid in pagination. */
  pageInfo: CommercePageInfo,
};

/** An edge in a connection. */
export type CommerceFulfillmentEdge = {
  __typename?: 'CommerceFulfillmentEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of the edge. */
  node?: Maybe<CommerceFulfillment>,
};

/** A Line Item */
export type CommerceLineItem = {
  __typename?: 'CommerceLineItem',
  artworkId: Scalars['String'],
  artworkVersionId: Scalars['String'],
  commissionFeeCents?: Maybe<Scalars['Int']>,
  createdAt: Scalars['String'],
  editionSetId?: Maybe<Scalars['String']>,
  fulfillments?: Maybe<CommerceFulfillmentConnection>,
  id: Scalars['ID'],
  internalID: Scalars['ID'],
  listPriceCents: Scalars['Int'],
  order: CommerceOrder,
  priceCents: Scalars['Int'],
  quantity: Scalars['Int'],
  shippingTotalCents?: Maybe<Scalars['Int']>,
  updatedAt: Scalars['String'],
  artwork?: Maybe<Artwork>,
  artworkVersion?: Maybe<ArtworkVersion>,
  shippingTotal?: Maybe<Scalars['String']>,
  listPrice?: Maybe<Scalars['String']>,
  commissionFee?: Maybe<Scalars['String']>,
};


/** A Line Item */
export type CommerceLineItemCreatedAtArgs = {
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


/** A Line Item */
export type CommerceLineItemFulfillmentsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


/** A Line Item */
export type CommerceLineItemUpdatedAtArgs = {
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


/** A Line Item */
export type CommerceLineItemShippingTotalArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


/** A Line Item */
export type CommerceLineItemListPriceArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


/** A Line Item */
export type CommerceLineItemCommissionFeeArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};

/** The connection type for LineItem. */
export type CommerceLineItemConnection = {
  __typename?: 'CommerceLineItemConnection',
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CommerceLineItemEdge>>>,
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<CommerceLineItem>>>,
  /** Information to aid in pagination. */
  pageInfo: CommercePageInfo,
};

/** An edge in a connection. */
export type CommerceLineItemEdge = {
  __typename?: 'CommerceLineItemEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of the edge. */
  node?: Maybe<CommerceLineItem>,
};

/** An Offer */
export type CommerceOffer = {
  __typename?: 'CommerceOffer',
  amountCents: Scalars['Int'],
  buyerTotalCents?: Maybe<Scalars['Int']>,
  createdAt: Scalars['String'],
  creatorId: Scalars['String'],
  currencyCode: Scalars['String'],
  from: CommerceOrderPartyUnion,
  fromParticipant?: Maybe<CommerceOrderParticipantEnum>,
  id: Scalars['ID'],
  internalID: Scalars['ID'],
  note?: Maybe<Scalars['String']>,
  order: CommerceOrder,
  respondsTo?: Maybe<CommerceOffer>,
  shippingTotalCents?: Maybe<Scalars['Int']>,
  submittedAt?: Maybe<Scalars['String']>,
  taxTotalCents?: Maybe<Scalars['Int']>,
  fromDetails?: Maybe<OrderParty>,
  amount?: Maybe<Scalars['String']>,
  taxTotal?: Maybe<Scalars['String']>,
  shippingTotal?: Maybe<Scalars['String']>,
  buyerTotal?: Maybe<Scalars['String']>,
};


/** An Offer */
export type CommerceOfferCreatedAtArgs = {
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


/** An Offer */
export type CommerceOfferSubmittedAtArgs = {
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


/** An Offer */
export type CommerceOfferAmountArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


/** An Offer */
export type CommerceOfferTaxTotalArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


/** An Offer */
export type CommerceOfferShippingTotalArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


/** An Offer */
export type CommerceOfferBuyerTotalArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};

/** The connection type for Offer. */
export type CommerceOfferConnection = {
  __typename?: 'CommerceOfferConnection',
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CommerceOfferEdge>>>,
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<CommerceOffer>>>,
  /** Information to aid in pagination. */
  pageInfo: CommercePageInfo,
};

/** An edge in a connection. */
export type CommerceOfferEdge = {
  __typename?: 'CommerceOfferEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of the edge. */
  node?: Maybe<CommerceOffer>,
};

export type CommerceOfferOrder = CommerceOrder & {
  __typename?: 'CommerceOfferOrder',
  awaitingResponseFrom?: Maybe<CommerceOrderParticipantEnum>,
  buyer: CommerceOrderPartyUnion,
  buyerPhoneNumber?: Maybe<Scalars['String']>,
  buyerTotalCents?: Maybe<Scalars['Int']>,
  code: Scalars['String'],
  commissionFeeCents?: Maybe<Scalars['Int']>,
  commissionRate?: Maybe<Scalars['Float']>,
  createdAt: Scalars['String'],
  creditCardId?: Maybe<Scalars['String']>,
  currencyCode: Scalars['String'],
  displayCommissionRate?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  internalID: Scalars['ID'],
  /** Item total in cents, for Offer Orders this field reflects current offer */
  itemsTotalCents?: Maybe<Scalars['Int']>,
  lastApprovedAt?: Maybe<Scalars['String']>,
  /** Last submitted offer */
  lastOffer?: Maybe<CommerceOffer>,
  lastSubmittedAt?: Maybe<Scalars['String']>,
  lastTransactionFailed?: Maybe<Scalars['Boolean']>,
  lineItems?: Maybe<CommerceLineItemConnection>,
  mode?: Maybe<CommerceOrderModeEnum>,
  myLastOffer?: Maybe<CommerceOffer>,
  offers?: Maybe<CommerceOfferConnection>,
  requestedFulfillment?: Maybe<CommerceRequestedFulfillmentUnion>,
  seller: CommerceOrderPartyUnion,
  sellerTotalCents?: Maybe<Scalars['Int']>,
  shippingTotalCents?: Maybe<Scalars['Int']>,
  state: CommerceOrderStateEnum,
  stateExpiresAt?: Maybe<Scalars['String']>,
  stateReason?: Maybe<Scalars['String']>,
  stateUpdatedAt?: Maybe<Scalars['String']>,
  taxTotalCents?: Maybe<Scalars['Int']>,
  totalListPriceCents: Scalars['Int'],
  transactionFeeCents?: Maybe<Scalars['Int']>,
  updatedAt: Scalars['String'],
  buyerDetails?: Maybe<OrderParty>,
  sellerDetails?: Maybe<OrderParty>,
  creditCard?: Maybe<CreditCard>,
  itemsTotal?: Maybe<Scalars['String']>,
  sellerTotal?: Maybe<Scalars['String']>,
  commissionFee?: Maybe<Scalars['String']>,
  totalListPrice?: Maybe<Scalars['String']>,
  buyerTotal?: Maybe<Scalars['String']>,
  taxTotal?: Maybe<Scalars['String']>,
  shippingTotal?: Maybe<Scalars['String']>,
  transactionFee?: Maybe<Scalars['String']>,
  offerTotal?: Maybe<Scalars['String']>,
};


export type CommerceOfferOrderCreatedAtArgs = {
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type CommerceOfferOrderLastApprovedAtArgs = {
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type CommerceOfferOrderLastSubmittedAtArgs = {
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type CommerceOfferOrderLineItemsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type CommerceOfferOrderOffersArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  fromId?: Maybe<Scalars['String']>,
  fromType?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type CommerceOfferOrderStateExpiresAtArgs = {
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type CommerceOfferOrderStateUpdatedAtArgs = {
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type CommerceOfferOrderUpdatedAtArgs = {
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type CommerceOfferOrderItemsTotalArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


export type CommerceOfferOrderSellerTotalArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


export type CommerceOfferOrderCommissionFeeArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


export type CommerceOfferOrderTotalListPriceArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


export type CommerceOfferOrderBuyerTotalArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


export type CommerceOfferOrderTaxTotalArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


export type CommerceOfferOrderShippingTotalArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


export type CommerceOfferOrderTransactionFeeArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


export type CommerceOfferOrderOfferTotalArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};

/** Order */
export type CommerceOrder = {
  buyer: CommerceOrderPartyUnion,
  buyerPhoneNumber?: Maybe<Scalars['String']>,
  buyerTotalCents?: Maybe<Scalars['Int']>,
  code: Scalars['String'],
  commissionFeeCents?: Maybe<Scalars['Int']>,
  commissionRate?: Maybe<Scalars['Float']>,
  createdAt: Scalars['String'],
  creditCardId?: Maybe<Scalars['String']>,
  currencyCode: Scalars['String'],
  displayCommissionRate?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  internalID: Scalars['ID'],
  /** Item total in cents, for Offer Orders this field reflects current offer */
  itemsTotalCents?: Maybe<Scalars['Int']>,
  lastApprovedAt?: Maybe<Scalars['String']>,
  lastSubmittedAt?: Maybe<Scalars['String']>,
  lastTransactionFailed?: Maybe<Scalars['Boolean']>,
  lineItems?: Maybe<CommerceLineItemConnection>,
  mode?: Maybe<CommerceOrderModeEnum>,
  requestedFulfillment?: Maybe<CommerceRequestedFulfillmentUnion>,
  seller: CommerceOrderPartyUnion,
  sellerTotalCents?: Maybe<Scalars['Int']>,
  shippingTotalCents?: Maybe<Scalars['Int']>,
  state: CommerceOrderStateEnum,
  stateExpiresAt?: Maybe<Scalars['String']>,
  stateReason?: Maybe<Scalars['String']>,
  stateUpdatedAt?: Maybe<Scalars['String']>,
  taxTotalCents?: Maybe<Scalars['Int']>,
  totalListPriceCents: Scalars['Int'],
  transactionFeeCents?: Maybe<Scalars['Int']>,
  updatedAt: Scalars['String'],
  buyerDetails?: Maybe<OrderParty>,
  sellerDetails?: Maybe<OrderParty>,
  creditCard?: Maybe<CreditCard>,
  itemsTotal?: Maybe<Scalars['String']>,
  sellerTotal?: Maybe<Scalars['String']>,
  commissionFee?: Maybe<Scalars['String']>,
  totalListPrice?: Maybe<Scalars['String']>,
  buyerTotal?: Maybe<Scalars['String']>,
  taxTotal?: Maybe<Scalars['String']>,
  shippingTotal?: Maybe<Scalars['String']>,
  transactionFee?: Maybe<Scalars['String']>,
};


/** Order */
export type CommerceOrderCreatedAtArgs = {
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


/** Order */
export type CommerceOrderLastApprovedAtArgs = {
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


/** Order */
export type CommerceOrderLastSubmittedAtArgs = {
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


/** Order */
export type CommerceOrderLineItemsArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


/** Order */
export type CommerceOrderStateExpiresAtArgs = {
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


/** Order */
export type CommerceOrderStateUpdatedAtArgs = {
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


/** Order */
export type CommerceOrderUpdatedAtArgs = {
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


/** Order */
export type CommerceOrderItemsTotalArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


/** Order */
export type CommerceOrderSellerTotalArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


/** Order */
export type CommerceOrderCommissionFeeArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


/** Order */
export type CommerceOrderTotalListPriceArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


/** Order */
export type CommerceOrderBuyerTotalArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


/** Order */
export type CommerceOrderTaxTotalArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


/** Order */
export type CommerceOrderShippingTotalArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


/** Order */
export type CommerceOrderTransactionFeeArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};

/** Order Action data */
export type CommerceOrderActionData = {
  __typename?: 'CommerceOrderActionData',
  clientSecret: Scalars['String'],
};

/** Fields to sort by */
export enum CommerceOrderConnectionSortEnum {
  /** Sort by the timestamp the state of the order expires at in ascending order */
  STATE_EXPIRES_AT_ASC = 'STATE_EXPIRES_AT_ASC',
  /** Sort by the timestamp the state of the order expires at in descending order */
  STATE_EXPIRES_AT_DESC = 'STATE_EXPIRES_AT_DESC',
  /** Sort by the timestamp the state of order was last updated in ascending order */
  STATE_UPDATED_AT_ASC = 'STATE_UPDATED_AT_ASC',
  /** Sort by the timestamp the state of order was last updated in descending order */
  STATE_UPDATED_AT_DESC = 'STATE_UPDATED_AT_DESC',
  /** Sort by the timestamp the order was last updated in ascending order */
  UPDATED_AT_ASC = 'UPDATED_AT_ASC',
  /** Sort by the timestamp the order was last updated in descending order */
  UPDATED_AT_DESC = 'UPDATED_AT_DESC'
}

/** The connection type for Order. */
export type CommerceOrderConnectionWithTotalCount = {
  __typename?: 'CommerceOrderConnectionWithTotalCount',
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CommerceOrderEdge>>>,
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<CommerceOrder>>>,
  pageCursors?: Maybe<CommercePageCursors>,
  /** Information to aid in pagination. */
  pageInfo: CommercePageInfo,
  totalCount?: Maybe<Scalars['Int']>,
  totalPages?: Maybe<Scalars['Int']>,
};

/** An edge in a connection. */
export type CommerceOrderEdge = {
  __typename?: 'CommerceOrderEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of the edge. */
  node?: Maybe<CommerceOrder>,
};

export enum CommerceOrderFulfillmentTypeEnum {
  /** fulfillment type is: pickup */
  PICKUP = 'PICKUP',
  /** fulfillment type is: ship */
  SHIP = 'SHIP'
}

export enum CommerceOrderModeEnum {
  /** Buy Order */
  BUY = 'BUY',
  /** Offer Order */
  OFFER = 'OFFER'
}

/** Represents either a resolved Order or a potential failure */
export type CommerceOrderOrFailureUnion = CommerceOrderRequiresAction | CommerceOrderWithMutationFailure | CommerceOrderWithMutationSuccess;

export enum CommerceOrderParticipantEnum {
  /** Participant on the buyer side */
  BUYER = 'BUYER',
  /** Participant on the seller side */
  SELLER = 'SELLER'
}

/** Represents either a partner or a user */
export type CommerceOrderPartyUnion = CommercePartner | CommerceUser;

/** Data reflecting actions required */
export type CommerceOrderRequiresAction = {
  __typename?: 'CommerceOrderRequiresAction',
  /** Data related to action needed */
  actionData: CommerceOrderActionData,
};

export enum CommerceOrderStateEnum {
  /** order is abandoned by buyer and never submitted */
  ABANDONED = 'ABANDONED',
  /** order is approved by seller */
  APPROVED = 'APPROVED',
  /** order is canceled */
  CANCELED = 'CANCELED',
  /** order is fulfilled by seller */
  FULFILLED = 'FULFILLED',
  /** order is still pending submission by buyer */
  PENDING = 'PENDING',
  /** order is refunded after being approved or fulfilled */
  REFUNDED = 'REFUNDED',
  /** order is submitted by buyer */
  SUBMITTED = 'SUBMITTED'
}

/** An error response for changes to an order */
export type CommerceOrderWithMutationFailure = {
  __typename?: 'CommerceOrderWithMutationFailure',
  error: CommerceApplicationError,
};

/** A successfully returned order type */
export type CommerceOrderWithMutationSuccess = {
  __typename?: 'CommerceOrderWithMutationSuccess',
  order: CommerceOrder,
};

export type CommercePageCursor = {
  __typename?: 'CommercePageCursor',
  /** first cursor on the page */
  cursor: Scalars['String'],
  /** is this the current page? */
  isCurrent: Scalars['Boolean'],
  /** page number out of totalPages */
  page: Scalars['Int'],
};

export type CommercePageCursors = {
  __typename?: 'CommercePageCursors',
  around: Array<CommercePageCursor>,
  /** optional, may be included in field around */
  first?: Maybe<CommercePageCursor>,
  /** optional, may be included in field around */
  last?: Maybe<CommercePageCursor>,
  previous?: Maybe<CommercePageCursor>,
};

/** Information about pagination in a connection. */
export type CommercePageInfo = {
  __typename?: 'CommercePageInfo',
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>,
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'],
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'],
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>,
};

export type CommercePartner = {
  __typename?: 'CommercePartner',
  id: Scalars['String'],
  type: Scalars['String'],
};

export type CommercePickup = {
  __typename?: 'CommercePickup',
  fulfillmentType: Scalars['String'],
};

/** Autogenerated input type of RejectOrder */
export type CommerceRejectOrderInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
};

/** Autogenerated return type of RejectOrder */
export type CommerceRejectOrderPayload = {
  __typename?: 'CommerceRejectOrderPayload',
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>,
  /** A union of success/failure */
  orderOrError: CommerceOrderOrFailureUnion,
};

/** Represents either a shipping information or pickup */
export type CommerceRequestedFulfillmentUnion = CommercePickup | CommerceShip;

/** Autogenerated input type of SellerAcceptOffer */
export type CommerceSellerAcceptOfferInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>,
  offerId: Scalars['ID'],
};

/** Autogenerated return type of SellerAcceptOffer */
export type CommerceSellerAcceptOfferPayload = {
  __typename?: 'CommerceSellerAcceptOfferPayload',
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>,
  /** A union of success/failure */
  orderOrError: CommerceOrderOrFailureUnion,
};

/** Autogenerated input type of SellerCounterOffer */
export type CommerceSellerCounterOfferInput = {
  amountCents: Scalars['Int'],
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>,
  note?: Maybe<Scalars['String']>,
  offerId: Scalars['ID'],
};

/** Autogenerated return type of SellerCounterOffer */
export type CommerceSellerCounterOfferPayload = {
  __typename?: 'CommerceSellerCounterOfferPayload',
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>,
  /** A union of success/failure */
  orderOrError: CommerceOrderOrFailureUnion,
};

/** Autogenerated input type of SellerRejectOffer */
export type CommerceSellerRejectOfferInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>,
  offerId: Scalars['ID'],
  rejectReason?: Maybe<CommerceCancelReasonTypeEnum>,
};

/** Autogenerated return type of SellerRejectOffer */
export type CommerceSellerRejectOfferPayload = {
  __typename?: 'CommerceSellerRejectOfferPayload',
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>,
  /** A union of success/failure */
  orderOrError: CommerceOrderOrFailureUnion,
};

/** Autogenerated input type of SetPayment */
export type CommerceSetPaymentInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>,
  creditCardId: Scalars['String'],
  id: Scalars['ID'],
};

/** Autogenerated return type of SetPayment */
export type CommerceSetPaymentPayload = {
  __typename?: 'CommerceSetPaymentPayload',
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>,
  /** A union of success/failure */
  orderOrError: CommerceOrderOrFailureUnion,
};

/** Autogenerated input type of SetShipping */
export type CommerceSetShippingInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>,
  fulfillmentType: CommerceOrderFulfillmentTypeEnum,
  id: Scalars['ID'],
  shipping?: Maybe<CommerceShippingAttributes>,
};

/** Autogenerated return type of SetShipping */
export type CommerceSetShippingPayload = {
  __typename?: 'CommerceSetShippingPayload',
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>,
  /** A union of success/failure */
  orderOrError: CommerceOrderOrFailureUnion,
};

export type CommerceShip = {
  __typename?: 'CommerceShip',
  addressLine1?: Maybe<Scalars['String']>,
  addressLine2?: Maybe<Scalars['String']>,
  city?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  phoneNumber?: Maybe<Scalars['String']>,
  postalCode?: Maybe<Scalars['String']>,
  region?: Maybe<Scalars['String']>,
};

/** Shipping information */
export type CommerceShippingAttributes = {
  addressLine1?: Maybe<Scalars['String']>,
  addressLine2?: Maybe<Scalars['String']>,
  city?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  phoneNumber: Scalars['String'],
  postalCode?: Maybe<Scalars['String']>,
  region?: Maybe<Scalars['String']>,
};

/** Autogenerated input type of SubmitOrder */
export type CommerceSubmitOrderInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
};

/** Autogenerated return type of SubmitOrder */
export type CommerceSubmitOrderPayload = {
  __typename?: 'CommerceSubmitOrderPayload',
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>,
  /** A union of success/failure */
  orderOrError: CommerceOrderOrFailureUnion,
};

/** Autogenerated input type of SubmitOrderWithOffer */
export type CommerceSubmitOrderWithOfferInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>,
  offerId: Scalars['ID'],
};

/** Autogenerated return type of SubmitOrderWithOffer */
export type CommerceSubmitOrderWithOfferPayload = {
  __typename?: 'CommerceSubmitOrderWithOfferPayload',
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>,
  /** A union of success/failure */
  orderOrError: CommerceOrderOrFailureUnion,
};

/** Autogenerated input type of SubmitPendingOffer */
export type CommerceSubmitPendingOfferInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>,
  offerId: Scalars['ID'],
};

/** Autogenerated return type of SubmitPendingOffer */
export type CommerceSubmitPendingOfferPayload = {
  __typename?: 'CommerceSubmitPendingOfferPayload',
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>,
  /** A union of success/failure */
  orderOrError: CommerceOrderOrFailureUnion,
};

export type CommerceUser = {
  __typename?: 'CommerceUser',
  id: Scalars['String'],
};

export type ConfirmPickupInput = {
  /** Order ID */
  orderId: Scalars['String'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type ConfirmPickupPayload = {
  __typename?: 'ConfirmPickupPayload',
  orderOrError?: Maybe<OrderOrFailureUnionType>,
  clientMutationId?: Maybe<Scalars['String']>,
};

/** A work to be consigned to the user */
export type ConsignmentSubmission = {
  __typename?: 'ConsignmentSubmission',
  /** An optional type-specific ID. */
  id?: Maybe<Scalars['ID']>,
  /** The gravity ID for an Artist */
  artist_id: Scalars['String'],
  /** Does the artwork come with an certificate of authenticity? */
  authenticity_certificate?: Maybe<Scalars['Boolean']>,
  /** The set in which to put the work */
  category?: Maybe<SubmissionCategoryAggregation>,
  /** The depth of the work */
  depth?: Maybe<Scalars['String']>,
  /** A string, either CM or IN */
  dimensions_metric?: Maybe<SubmissionDimensionAggregation>,
  /** Is the work a part of an edition */
  edition?: Maybe<Scalars['Boolean']>,
  /** The number of the individual work if in a set */
  edition_number?: Maybe<Scalars['String']>,
  /** The whole size of the set of works */
  edition_size?: Maybe<Scalars['Int']>,
  /** The height of the work */
  height?: Maybe<Scalars['String']>,
  /** The city where the work currently resides */
  location_city?: Maybe<Scalars['String']>,
  /** The country where the work currently resides */
  location_country?: Maybe<Scalars['String']>,
  /** The state where the work currently resides */
  location_state?: Maybe<Scalars['String']>,
  /** The materials in which the work is created */
  medium?: Maybe<Scalars['String']>,
  /** The history of an work */
  provenance?: Maybe<Scalars['String']>,
  /** Is this work signed? */
  signature?: Maybe<Scalars['Boolean']>,
  /** The name of the work */
  title?: Maybe<Scalars['String']>,
  /** The internal state of the work, e.g. draft/submitted */
  state?: Maybe<SubmissionStateAggregation>,
  /** The width of the work */
  width?: Maybe<Scalars['String']>,
  /** The year the work was created */
  year?: Maybe<Scalars['String']>,
  /** The user who submitted the work */
  user_id?: Maybe<Scalars['ID']>,
  artist?: Maybe<Artist>,
};

/** A connection to a list of items. */
export type ConsignmentSubmissionConnection = {
  __typename?: 'ConsignmentSubmissionConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ConsignmentSubmissionEdge>>>,
};

/** An edge in a connection. */
export type ConsignmentSubmissionEdge = {
  __typename?: 'ConsignmentSubmissionEdge',
  /** The item at the end of the edge */
  node?: Maybe<ConsignmentSubmission>,
  /** A cursor for use in pagination */
  cursor: Scalars['String'],
};

export type Convection = {
  __typename?: 'Convection',
  geminiTemplateKey: Scalars['String'],
};

/** A conversation. */
export type Conversation = Node & {
  __typename?: 'Conversation',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** An optional type-specific ID. */
  id?: Maybe<Scalars['ID']>,
  /** Gravity inquiry id. */
  inquiry_id?: Maybe<Scalars['String']>,
  /** The participant who initiated the conversation */
  from: ConversationInitiator,
  /** The participant(s) responding to the conversation */
  to: ConversationResponder,
  buyer_outcome?: Maybe<Scalars['String']>,
  buyer_outcome_at?: Maybe<Scalars['String']>,
  created_at?: Maybe<Scalars['String']>,
  purchase_request?: Maybe<Scalars['Boolean']>,
  from_last_viewed_message_id?: Maybe<Scalars['String']>,
  initial_message: Scalars['String'],
  /** This is a snippet of text from the last message. */
  last_message?: Maybe<Scalars['String']>,
  last_message_at?: Maybe<Scalars['String']>,
  /** Impulse id of the last message. */
  last_message_id?: Maybe<Scalars['String']>,
  /** True if user/conversation initiator is a recipient. */
  is_last_message_to_user?: Maybe<Scalars['Boolean']>,
  /** Timestamp if the user opened the last message, null in all other cases */
  last_message_open?: Maybe<Scalars['String']>,
  /** Delivery id if the user is a recipient of the last message, null otherwise. */
  last_message_delivery_id?: Maybe<Scalars['String']>,
  /** Only the artworks discussed in the conversation. */
  artworks?: Maybe<Array<Maybe<Artwork>>>,
  /** The artworks and/or partner shows discussed in the conversation. */
  items?: Maybe<Array<Maybe<ConversationItem>>>,
  /** A connection for all messages in a single conversation */
  messages?: Maybe<MessageConnection>,
  /** True if there is an unread message by the user. */
  unread?: Maybe<Scalars['Boolean']>,
};


/** A conversation. */
export type ConversationBuyer_Outcome_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


/** A conversation. */
export type ConversationCreated_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


/** A conversation. */
export type ConversationLast_Message_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


/** A conversation. */
export type ConversationMessagesArgs = {
  sort?: Maybe<Sort>,
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};

/** A connection to a list of items. */
export type ConversationConnection = {
  __typename?: 'ConversationConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ConversationEdge>>>,
  totalUnreadCount?: Maybe<Scalars['Int']>,
};

/** An edge in a connection. */
export type ConversationEdge = {
  __typename?: 'ConversationEdge',
  /** The item at the end of the edge */
  node?: Maybe<Conversation>,
  /** A cursor for use in pagination */
  cursor: Scalars['String'],
};

/** The participant who started the conversation, currently always a User */
export type ConversationInitiator = {
  __typename?: 'ConversationInitiator',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  id: Scalars['ID'],
  /** The type of participant, e.g. Partner or User */
  type: Scalars['String'],
  name: Scalars['String'],
  email: Scalars['String'],
  initials?: Maybe<Scalars['String']>,
};


/** The participant who started the conversation, currently always a User */
export type ConversationInitiatorInitialsArgs = {
  length?: Maybe<Scalars['Int']>
};

export type ConversationItem = {
  __typename?: 'ConversationItem',
  item?: Maybe<ConversationItemType>,
  title?: Maybe<Scalars['String']>,
  permalink?: Maybe<Scalars['String']>,
};

export type ConversationItemType = Artwork | Show;

/** The participant responding to the conversation, currently always a Partner */
export type ConversationResponder = {
  __typename?: 'ConversationResponder',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  id: Scalars['ID'],
  /** The type of participant, e.g. Partner or User */
  type: Scalars['String'],
  name: Scalars['String'],
  /** An array of Impulse IDs that correspond to all email addresses that messages should be sent to */
  reply_to_impulse_ids: Array<Maybe<Scalars['String']>>,
  initials?: Maybe<Scalars['String']>,
};


/** The participant responding to the conversation, currently always a Partner */
export type ConversationResponderInitialsArgs = {
  length?: Maybe<Scalars['Int']>
};

export type CreateBidderInput = {
  sale_id: Scalars['String'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type CreateBidderPayload = {
  __typename?: 'CreateBidderPayload',
  bidder?: Maybe<Bidder>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type CreateGeminiEntryForAssetInput = {
  /** The path to the file */
  source_key: Scalars['String'],
  /** The template key, this is `name` in the asset request */
  template_key: Scalars['String'],
  /** The S3 bucket where the file was uploaded */
  source_bucket: Scalars['String'],
  /** Additional JSON data to pass through gemini, should definitely contain an `id` and a `_type` */
  metadata: Scalars['JSON'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type CreateGeminiEntryForAssetPayload = {
  __typename?: 'CreateGeminiEntryForAssetPayload',
  asset?: Maybe<GeminiEntry>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type CreateOfferOrderWithArtworkInput = {
  /** BSON ID of artwork */
  artworkId: Scalars['String'],
  /** ID of artwork's edition set */
  editionSetId?: Maybe<Scalars['String']>,
  /** quantity of artwork */
  quantity?: Maybe<Scalars['Int']>,
  /** 
 * When set to true, we will not reuse existing pending/submitted order.
   * Otherwise if current user has pending/submitted orders on same artwork/edition
   * with same quantity, we will return that
 **/
  find_active_or_create?: Maybe<Scalars['Boolean']>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type CreateOfferOrderWithArtworkPayload = {
  __typename?: 'CreateOfferOrderWithArtworkPayload',
  orderOrError?: Maybe<OrderOrFailureUnionType>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type CreateOrderWithArtworkInput = {
  /** BSON ID of artwork */
  artworkId: Scalars['String'],
  /** ID of artwork's edition set */
  editionSetId?: Maybe<Scalars['String']>,
  /** quantity of artwork */
  quantity?: Maybe<Scalars['Int']>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type CreateOrderWithArtworkPayload = {
  __typename?: 'CreateOrderWithArtworkPayload',
  orderOrError?: Maybe<OrderOrFailureUnionType>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type CreateSubmissionMutationInput = {
  /** The gravity ID for an Artist */
  artist_id: Scalars['String'],
  /** Does the artwork come with an certificate of authenticity? */
  authenticity_certificate?: Maybe<Scalars['Boolean']>,
  /** The set in which to put the work */
  category?: Maybe<SubmissionCategoryAggregation>,
  /** The depth of the work */
  depth?: Maybe<Scalars['String']>,
  /** A string, either CM or IN */
  dimensions_metric?: Maybe<SubmissionDimensionAggregation>,
  /** Is the work a part of an edition */
  edition?: Maybe<Scalars['Boolean']>,
  /** The number of the individual work if in a set */
  edition_number?: Maybe<Scalars['String']>,
  /** The whole size of the set of works */
  edition_size?: Maybe<Scalars['Int']>,
  /** The height of the work */
  height?: Maybe<Scalars['String']>,
  /** The city where the work currently resides */
  location_city?: Maybe<Scalars['String']>,
  /** The country where the work currently resides */
  location_country?: Maybe<Scalars['String']>,
  /** The state where the work currently resides */
  location_state?: Maybe<Scalars['String']>,
  /** The materials in which the work is created */
  medium?: Maybe<Scalars['String']>,
  /** The history of an work */
  provenance?: Maybe<Scalars['String']>,
  /** Is this work signed? */
  signature?: Maybe<Scalars['Boolean']>,
  /** The name of the work */
  title?: Maybe<Scalars['String']>,
  /** The internal state of the work, e.g. draft/submitted */
  state?: Maybe<SubmissionStateAggregation>,
  /** The width of the work */
  width?: Maybe<Scalars['String']>,
  /** The year the work was created */
  year?: Maybe<Scalars['String']>,
  /** The user who submitted the work */
  user_id?: Maybe<Scalars['ID']>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type CreateSubmissionMutationPayload = {
  __typename?: 'CreateSubmissionMutationPayload',
  consignment_submission?: Maybe<ConsignmentSubmission>,
  clientMutationId?: Maybe<Scalars['String']>,
};

/** An asset which is assigned to a consignment submission */
export type Credentials = {
  __typename?: 'Credentials',
  /** The key to use with S3. */
  credentials: Scalars['String'],
  /** A base64 encoded version of the S3 policy */
  policy_encoded: Scalars['String'],
  /** The s3 policy document for your request */
  policy_document: S3PolicyDocumentType,
  /** The signature for your asset. */
  signature: Scalars['String'],
};

export type CreditCard = {
  __typename?: 'CreditCard',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  id: Scalars['ID'],
  /** Brand of credit card */
  brand: Scalars['String'],
  /** Name on the credit card */
  name?: Maybe<Scalars['String']>,
  /** Last four digits on the credit card */
  last_digits: Scalars['String'],
  /** Credit card's expiration month */
  expiration_month: Scalars['Int'],
  /** Credit card's expiration year */
  expiration_year: Scalars['Int'],
  /** Billing address street1 */
  street1?: Maybe<Scalars['String']>,
  /** Billing address street2 */
  street2?: Maybe<Scalars['String']>,
  /** Billing address city */
  city?: Maybe<Scalars['String']>,
  /** Billing address state */
  state?: Maybe<Scalars['String']>,
  /** Billing address country code */
  country?: Maybe<Scalars['String']>,
  /** Billing address postal code */
  postal_code?: Maybe<Scalars['String']>,
};

/** A connection to a list of items. */
export type CreditCardConnection = {
  __typename?: 'CreditCardConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CreditCardEdge>>>,
};

/** An edge in a connection. */
export type CreditCardEdge = {
  __typename?: 'CreditCardEdge',
  /** The item at the end of the edge */
  node?: Maybe<CreditCard>,
  /** A cursor for use in pagination */
  cursor: Scalars['String'],
};

export type CreditCardInput = {
  token: Scalars['String'],
  oneTimeUse?: Maybe<Scalars['Boolean']>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type CreditCardMutationFailure = {
  __typename?: 'CreditCardMutationFailure',
  mutationError?: Maybe<GravityMutationError>,
};

export type CreditCardMutationSuccess = {
  __typename?: 'CreditCardMutationSuccess',
  creditCard?: Maybe<CreditCard>,
  creditCardEdge?: Maybe<CreditCardEdge>,
};

export type CreditCardMutationType = CreditCardMutationSuccess | CreditCardMutationFailure;

export type CreditCardPayload = {
  __typename?: 'CreditCardPayload',
  credit_card?: Maybe<CreditCard>,
  creditCardOrError?: Maybe<CreditCardMutationType>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type CroppedImageUrl = {
  __typename?: 'CroppedImageUrl',
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  url?: Maybe<Scalars['String']>,
};

export type CurrentEvent = {
  __typename?: 'CurrentEvent',
  event: UnderlyingCurrentEvent,
  image?: Maybe<Image>,
  /** The state of the event */
  status?: Maybe<Scalars['String']>,
  /** Name of the partner associated to the event */
  partner?: Maybe<Scalars['String']>,
  /** Location and date of the event if available */
  details?: Maybe<Scalars['String']>,
  /** Name of the event */
  name?: Maybe<Scalars['String']>,
  /** Link to the event */
  href?: Maybe<Scalars['String']>,
};

export type DaySchedule = {
  __typename?: 'DaySchedule',
  start_time?: Maybe<Scalars['Int']>,
  end_time?: Maybe<Scalars['Int']>,
  day_of_week?: Maybe<Scalars['String']>,
};

export type DeepZoom = {
  __typename?: 'DeepZoom',
  Image?: Maybe<DeepZoomImage>,
};

export type DeepZoomImage = {
  __typename?: 'DeepZoomImage',
  Format?: Maybe<Scalars['String']>,
  Overlap?: Maybe<Scalars['Int']>,
  Size?: Maybe<DeepZoomImageSize>,
  TileSize?: Maybe<Scalars['Int']>,
  Url?: Maybe<Scalars['String']>,
  xmlns?: Maybe<Scalars['String']>,
};

export type DeepZoomImageSize = {
  __typename?: 'DeepZoomImageSize',
  Width?: Maybe<Scalars['Int']>,
  Height?: Maybe<Scalars['Int']>,
};

export type DeleteCreditCardInput = {
  id: Scalars['String'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type DeleteCreditCardPayload = {
  __typename?: 'DeleteCreditCardPayload',
  creditCardOrError?: Maybe<CreditCardMutationType>,
  clientMutationId?: Maybe<Scalars['String']>,
};

/** Fields of a delivery (currently from Radiation) */
export type Delivery = {
  __typename?: 'Delivery',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  id: Scalars['ID'],
  /** Masked email w/ display name. */
  full_transformed_email: Scalars['String'],
  delivered_at?: Maybe<Scalars['String']>,
  bounced_at?: Maybe<Scalars['String']>,
  opened_at?: Maybe<Scalars['String']>,
  clicked_at?: Maybe<Scalars['String']>,
};


/** Fields of a delivery (currently from Radiation) */
export type DeliveryDelivered_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


/** Fields of a delivery (currently from Radiation) */
export type DeliveryBounced_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


/** Fields of a delivery (currently from Radiation) */
export type DeliveryOpened_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


/** Fields of a delivery (currently from Radiation) */
export type DeliveryClicked_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};

export type Dimensions = {
  __typename?: 'dimensions',
  in?: Maybe<Scalars['String']>,
  cm?: Maybe<Scalars['String']>,
};

export type DoNotUseThisPartner = {
  __typename?: 'DoNotUseThisPartner',
  displayName?: Maybe<Scalars['String']>,
  display_name?: Maybe<Scalars['String']>,
  givenName?: Maybe<Scalars['String']>,
  given_name?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  relativeSize?: Maybe<Scalars['Int']>,
  relative_size?: Maybe<Scalars['Int']>,
  slug?: Maybe<Scalars['String']>,
  subscriptionState?: Maybe<Scalars['String']>,
  subscription_state?: Maybe<Scalars['String']>,
};

export type EcommerceError = {
  __typename?: 'EcommerceError',
  /** The error message */
  type: Scalars['String'],
  /** The error message */
  code: Scalars['String'],
  /** A data object in JSON format providing additional context about the error. */
  data?: Maybe<Scalars['String']>,
};

export type EditableLocation = {
  /** First line of an address */
  address?: Maybe<Scalars['String']>,
  /** Second line of an address */
  address_2?: Maybe<Scalars['String']>,
  /** The city the location is based in */
  city?: Maybe<Scalars['String']>,
  /** The county the location is based in */
  country?: Maybe<Scalars['String']>,
  /** An optional display string for the location */
  summary?: Maybe<Scalars['String']>,
  /** Postal code for a string */
  postal_code?: Maybe<Scalars['String']>,
  /** The (optional) name of the state for location */
  state?: Maybe<Scalars['String']>,
  /** The (optional) state code of the state for location */
  state_code?: Maybe<Scalars['String']>,
};

export type EditionSet = Sellable & {
  __typename?: 'EditionSet',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  id: Scalars['ID'],
  dimensions?: Maybe<Dimensions>,
  edition_of?: Maybe<Scalars['String']>,
  is_acquireable?: Maybe<Scalars['Boolean']>,
  is_offerable?: Maybe<Scalars['Boolean']>,
  is_for_sale?: Maybe<Scalars['Boolean']>,
  is_sold?: Maybe<Scalars['Boolean']>,
  price?: Maybe<Scalars['String']>,
  listPrice?: Maybe<ListPrice>,
  /** score assigned to an artwork based on its dimensions */
  sizeScore?: Maybe<Scalars['Float']>,
  sale_message?: Maybe<Scalars['String']>,
  /** If you need to render artwork dimensions as a string, prefer the `Artwork#dimensions` field */
  widthCm?: Maybe<Scalars['Float']>,
  /** If you need to render artwork dimensions as a string, prefer the `Artwork#dimensions` field */
  heightCm?: Maybe<Scalars['Float']>,
};

export enum EditionSetSorts {
  PRICE_ASC = 'PRICE_ASC'
}

export type EndSaleInput = {
  sale_id?: Maybe<Scalars['String']>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type EndSalePayload = {
  __typename?: 'EndSalePayload',
  sale?: Maybe<Sale>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export enum EventStatus {
  closed = 'closed',
  current = 'current',
  running = 'running',
  upcoming = 'upcoming',
  /** End date is in the past */
  CLOSED = 'CLOSED',
  /** Start date or end date is in the future */
  CURRENT = 'CURRENT',
  /** Start date is in the past and end date is in the future */
  RUNNING = 'RUNNING',
  /** Start date is in the future */
  UPCOMING = 'UPCOMING',
  /** End date is in near future */
  CLOSING_SOON = 'CLOSING_SOON',
  /** Special filtering option which is used to show running and upcoming shows */
  RUNNING_AND_UPCOMING = 'RUNNING_AND_UPCOMING'
}

export type ExactPrice = {
  __typename?: 'ExactPrice',
  priceCents: Scalars['Int'],
};

export type ExternalPartner = {
  __typename?: 'ExternalPartner',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A type-specific ID. */
  id: Scalars['ID'],
  city?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
};

export type Fair = {
  __typename?: 'Fair',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A slug ID. */
  id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  _id: Scalars['ID'],
  about?: Maybe<Scalars['String']>,
  followed_content?: Maybe<FollowedContent>,
  artists?: Maybe<ArtistConnection>,
  cached?: Maybe<Scalars['Int']>,
  banner_size?: Maybe<Scalars['String']>,
  counts?: Maybe<FairCounts>,
  /** A formatted description of the start to end dates */
  exhibition_period?: Maybe<Scalars['String']>,
  /** A formatted description of when the fair starts or closes or if it is closed */
  formattedOpeningHours?: Maybe<Scalars['String']>,
  has_full_feature?: Maybe<Scalars['Boolean']>,
  has_homepage_section?: Maybe<Scalars['Boolean']>,
  has_large_banner?: Maybe<Scalars['Boolean']>,
  has_listing?: Maybe<Scalars['Boolean']>,
  hours?: Maybe<Scalars['String']>,
  href?: Maybe<Scalars['String']>,
  image?: Maybe<Image>,
  is_active?: Maybe<Scalars['Boolean']>,
  /** Are we currently in the fair's active period? */
  isActive?: Maybe<Scalars['Boolean']>,
  links?: Maybe<Scalars['String']>,
  mobile_image?: Maybe<Image>,
  is_published?: Maybe<Scalars['Boolean']>,
  location?: Maybe<Location>,
  name?: Maybe<Scalars['String']>,
  profile?: Maybe<Profile>,
  /** This connection only supports forward pagination. We're replacing Relay's default cursor with one from Gravity. */
  shows_connection?: Maybe<ShowConnection>,
  start_at?: Maybe<Scalars['String']>,
  end_at?: Maybe<Scalars['String']>,
  active_start_at?: Maybe<Scalars['String']>,
  organizer?: Maybe<Organizer>,
  published?: Maybe<Scalars['Boolean']>,
  tagline?: Maybe<Scalars['String']>,
  ticketsLink?: Maybe<Scalars['String']>,
  /** The exhibitors with booths in this fair with letter. */
  exhibitors_grouped_by_name?: Maybe<Array<Maybe<FairExhibitorsGroup>>>,
  /** Artworks Elastic Search results */
  filteredArtworks?: Maybe<FilterArtworks>,
  sponsoredContent?: Maybe<FairSponsoredContent>,
};


export type FairArtistsArgs = {
  sort?: Maybe<FairArtistSorts>,
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type FairShows_ConnectionArgs = {
  section?: Maybe<Scalars['String']>,
  sort?: Maybe<ShowSort>,
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type FairStart_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type FairEnd_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type FairActive_Start_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type FairFilteredArtworksArgs = {
  acquireable?: Maybe<Scalars['Boolean']>,
  offerable?: Maybe<Scalars['Boolean']>,
  aggregation_partner_cities?: Maybe<Array<Maybe<Scalars['String']>>>,
  aggregations?: Maybe<Array<Maybe<ArtworkAggregation>>>,
  artist_id?: Maybe<Scalars['String']>,
  artist_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  at_auction?: Maybe<Scalars['Boolean']>,
  attribution_class?: Maybe<Array<Maybe<Scalars['String']>>>,
  color?: Maybe<Scalars['String']>,
  dimension_range?: Maybe<Scalars['String']>,
  extra_aggregation_gene_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  include_artworks_by_followed_artists?: Maybe<Scalars['Boolean']>,
  include_medium_filter_in_aggregation?: Maybe<Scalars['Boolean']>,
  inquireable_only?: Maybe<Scalars['Boolean']>,
  for_sale?: Maybe<Scalars['Boolean']>,
  gene_id?: Maybe<Scalars['String']>,
  gene_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  height?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['String']>,
  marketable?: Maybe<Scalars['Boolean']>,
  medium?: Maybe<Scalars['String']>,
  period?: Maybe<Scalars['String']>,
  periods?: Maybe<Array<Maybe<Scalars['String']>>>,
  major_periods?: Maybe<Array<Maybe<Scalars['String']>>>,
  partner_id?: Maybe<Scalars['ID']>,
  partner_cities?: Maybe<Array<Maybe<Scalars['String']>>>,
  price_range?: Maybe<Scalars['String']>,
  page?: Maybe<Scalars['Int']>,
  sale_id?: Maybe<Scalars['ID']>,
  size?: Maybe<Scalars['Int']>,
  sort?: Maybe<Scalars['String']>,
  tag_id?: Maybe<Scalars['String']>,
  keyword?: Maybe<Scalars['String']>,
  keyword_match_exact?: Maybe<Scalars['Boolean']>
};

export enum FairArtistSorts {
  NAME_ASC = 'NAME_ASC',
  NAME_DESC = 'NAME_DESC'
}

/** A connection to a list of items. */
export type FairConnection = {
  __typename?: 'FairConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<FairEdge>>>,
  pageCursors?: Maybe<PageCursors>,
  totalCount?: Maybe<Scalars['Int']>,
};

export type FairCounts = {
  __typename?: 'FairCounts',
  artists?: Maybe<Scalars['FormattedNumber']>,
  artworks?: Maybe<Scalars['FormattedNumber']>,
  partners?: Maybe<Scalars['FormattedNumber']>,
  partner_shows?: Maybe<Scalars['FormattedNumber']>,
};


export type FairCountsArtistsArgs = {
  format?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>
};


export type FairCountsArtworksArgs = {
  format?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>
};


export type FairCountsPartnersArgs = {
  format?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>
};


export type FairCountsPartner_ShowsArgs = {
  format?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>
};

/** An edge in a connection. */
export type FairEdge = {
  __typename?: 'FairEdge',
  /** The item at the end of the edge */
  node?: Maybe<Fair>,
  /** A cursor for use in pagination */
  cursor: Scalars['String'],
};

export type FairExhibitor = {
  __typename?: 'FairExhibitor',
  /** A slug ID. */
  id: Scalars['ID'],
  /** Exhibitor name */
  name?: Maybe<Scalars['String']>,
  /** Exhibitors _id */
  partner_id?: Maybe<Scalars['String']>,
  /** Partner default profile id */
  profile_id?: Maybe<Scalars['String']>,
};

export type FairExhibitorsGroup = {
  __typename?: 'FairExhibitorsGroup',
  /** Letter exhibitors group belongs to */
  letter?: Maybe<Scalars['String']>,
  /** The exhibitor data. */
  exhibitors?: Maybe<Array<Maybe<FairExhibitor>>>,
};

export enum FairSorts {
  CREATED_AT_ASC = 'CREATED_AT_ASC',
  CREATED_AT_DESC = 'CREATED_AT_DESC',
  NAME_ASC = 'NAME_ASC',
  NAME_DESC = 'NAME_DESC',
  START_AT_ASC = 'START_AT_ASC',
  START_AT_DESC = 'START_AT_DESC'
}

export type FairSponsoredContent = {
  __typename?: 'FairSponsoredContent',
  activationText?: Maybe<Scalars['String']>,
  pressReleaseUrl?: Maybe<Scalars['String']>,
};

export type FeaturedLinkItem = {
  __typename?: 'FeaturedLinkItem',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  id?: Maybe<Scalars['String']>,
  href?: Maybe<Scalars['String']>,
  image?: Maybe<Image>,
  initials?: Maybe<Scalars['String']>,
  subtitle?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};


export type FeaturedLinkItemInitialsArgs = {
  length?: Maybe<Scalars['Int']>
};

export type Feedback = {
  __typename?: 'Feedback',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  id: Scalars['ID'],
  /** Feedback message */
  message: Scalars['String'],
};

export type FilterArtworks = Node & {
  __typename?: 'FilterArtworks',
  /** The ID of the object. */
  __id: Scalars['ID'],
  /** Returns aggregation counts for the given filter query. */
  aggregations?: Maybe<Array<Maybe<ArtworksAggregationResults>>>,
  artworks_connection?: Maybe<ArtworkConnection>,
  counts?: Maybe<FilterArtworksCounts>,
  followed_artists_total?: Maybe<Scalars['Int']>,
  /** Artwork results. */
  hits?: Maybe<Array<Maybe<Artwork>>>,
  /** Returns a list of merchandisable artists sorted by merch score. */
  merchandisable_artists?: Maybe<Array<Maybe<Artist>>>,
  total?: Maybe<Scalars['Int']>,
  facet?: Maybe<ArtworkFilterFacet>,
};


export type FilterArtworksArtworks_ConnectionArgs = {
  sort?: Maybe<Scalars['String']>,
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};

export type FilterArtworksCounts = {
  __typename?: 'FilterArtworksCounts',
  total?: Maybe<Scalars['FormattedNumber']>,
  followed_artists?: Maybe<Scalars['FormattedNumber']>,
};


export type FilterArtworksCountsTotalArgs = {
  format?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>
};


export type FilterArtworksCountsFollowed_ArtistsArgs = {
  format?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>
};

export type FilterPartners = {
  __typename?: 'FilterPartners',
  aggregations?: Maybe<Array<Maybe<PartnersAggregationResults>>>,
  hits?: Maybe<Array<Maybe<Partner>>>,
  total?: Maybe<Scalars['Int']>,
};

export type FilterSaleArtworks = {
  __typename?: 'FilterSaleArtworks',
  /** Returns aggregation counts for the given filter query. */
  aggregations?: Maybe<Array<Maybe<SaleArtworksAggregationResults>>>,
  counts?: Maybe<FilterSaleArtworksCounts>,
  /** Sale Artwork results. */
  hits?: Maybe<Array<Maybe<SaleArtwork>>>,
};

export type FilterSaleArtworksCounts = {
  __typename?: 'FilterSaleArtworksCounts',
  total?: Maybe<Scalars['FormattedNumber']>,
  followed_artists?: Maybe<Scalars['FormattedNumber']>,
};


export type FilterSaleArtworksCountsTotalArgs = {
  format?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>
};


export type FilterSaleArtworksCountsFollowed_ArtistsArgs = {
  format?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>
};

export type FixFailedPaymentInput = {
  /** Offer ID */
  offerId: Scalars['ID'],
  /** Credit card ID */
  creditCardId: Scalars['String'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type FixFailedPaymentPayload = {
  __typename?: 'FixFailedPaymentPayload',
  orderOrError?: Maybe<OrderOrFailureUnionType>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type FollowArtist = {
  __typename?: 'FollowArtist',
  artist?: Maybe<Artist>,
  auto?: Maybe<Scalars['Boolean']>,
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  id: Scalars['ID'],
};

/** A connection to a list of items. */
export type FollowArtistConnection = {
  __typename?: 'FollowArtistConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<FollowArtistEdge>>>,
};

export type FollowArtistCounts = {
  __typename?: 'FollowArtistCounts',
  artists?: Maybe<Scalars['Int']>,
};

/** An edge in a connection. */
export type FollowArtistEdge = {
  __typename?: 'FollowArtistEdge',
  /** The item at the end of the edge */
  node?: Maybe<FollowArtist>,
  /** A cursor for use in pagination */
  cursor: Scalars['String'],
};

export type FollowArtistInput = {
  artist_id?: Maybe<Scalars['String']>,
  unfollow?: Maybe<Scalars['Boolean']>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type FollowArtistPayload = {
  __typename?: 'FollowArtistPayload',
  artist?: Maybe<Artist>,
  /** Popular artists */
  popular_artists?: Maybe<PopularArtists>,
  clientMutationId?: Maybe<Scalars['String']>,
};


export type FollowArtistPayloadPopular_ArtistsArgs = {
  exclude_followed_artists?: Maybe<Scalars['Boolean']>,
  exclude_artist_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  size?: Maybe<Scalars['Int']>
};

export type FollowArtists = {
  __typename?: 'FollowArtists',
  artists?: Maybe<Array<Maybe<Artist>>>,
  counts?: Maybe<FollowArtistCounts>,
};

export type FollowedArtistsArtworksGroup = Node & {
  __typename?: 'FollowedArtistsArtworksGroup',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  href?: Maybe<Scalars['String']>,
  /** List of artworks in this group. */
  artworks?: Maybe<Array<Maybe<Artwork>>>,
  artworksConnection?: Maybe<ArtworkConnection>,
  artists?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  image?: Maybe<Image>,
  published_at?: Maybe<Scalars['String']>,
};


export type FollowedArtistsArtworksGroupArtworksConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type FollowedArtistsArtworksGroupPublished_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};

/** A connection to a list of items. */
export type FollowedArtistsArtworksGroupConnection = {
  __typename?: 'FollowedArtistsArtworksGroupConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<FollowedArtistsArtworksGroupEdge>>>,
};

/** An edge in a connection. */
export type FollowedArtistsArtworksGroupEdge = {
  __typename?: 'FollowedArtistsArtworksGroupEdge',
  /** The item at the end of the edge */
  node?: Maybe<FollowedArtistsArtworksGroup>,
  /** A cursor for use in pagination */
  cursor: Scalars['String'],
};

export type FollowedContent = {
  __typename?: 'FollowedContent',
  artists?: Maybe<Array<Maybe<Artist>>>,
  galleries?: Maybe<Array<Maybe<Partner>>>,
};

/** A connection to a list of items. */
export type FollowedFairConnection = {
  __typename?: 'FollowedFairConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<FollowedFairEdge>>>,
};

/** An edge in a connection. */
export type FollowedFairEdge = {
  __typename?: 'FollowedFairEdge',
  /** The item at the end of the edge */
  node?: Maybe<Fair>,
  /** A cursor for use in pagination */
  cursor: Scalars['String'],
};

/** A connection to a list of items. */
export type FollowedShowConnection = {
  __typename?: 'FollowedShowConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<FollowedShowEdge>>>,
};

/** An edge in a connection. */
export type FollowedShowEdge = {
  __typename?: 'FollowedShowEdge',
  /** The item at the end of the edge */
  node?: Maybe<Show>,
  /** A cursor for use in pagination */
  cursor: Scalars['String'],
};

export type FollowGene = {
  __typename?: 'FollowGene',
  gene?: Maybe<Gene>,
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  id: Scalars['ID'],
};

/** A connection to a list of items. */
export type FollowGeneConnection = {
  __typename?: 'FollowGeneConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<FollowGeneEdge>>>,
};

/** An edge in a connection. */
export type FollowGeneEdge = {
  __typename?: 'FollowGeneEdge',
  /** The item at the end of the edge */
  node?: Maybe<FollowGene>,
  /** A cursor for use in pagination */
  cursor: Scalars['String'],
};

export type FollowGeneInput = {
  gene_id?: Maybe<Scalars['String']>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type FollowGenePayload = {
  __typename?: 'FollowGenePayload',
  gene?: Maybe<Gene>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type FollowProfileInput = {
  profile_id?: Maybe<Scalars['String']>,
  unfollow?: Maybe<Scalars['Boolean']>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type FollowProfilePayload = {
  __typename?: 'FollowProfilePayload',
  profile?: Maybe<Profile>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type FollowsAndSaves = {
  __typename?: 'FollowsAndSaves',
  /** A list of published artworks by followed artists (grouped by date and artists). */
  bundledArtworksByArtist?: Maybe<FollowedArtistsArtworksGroupConnection>,
  /** A list of the current user’s currently followed shows */
  shows?: Maybe<FollowedShowConnection>,
  /** A list of the current user’s currently followed fair profiles */
  fairs?: Maybe<FollowedFairConnection>,
};


export type FollowsAndSavesBundledArtworksByArtistArgs = {
  sort?: Maybe<ArtworkSorts>,
  for_sale?: Maybe<Scalars['Boolean']>,
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type FollowsAndSavesShowsArgs = {
  status?: Maybe<EventStatus>,
  dayThreshold?: Maybe<Scalars['Int']>,
  city?: Maybe<Scalars['String']>,
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type FollowsAndSavesFairsArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};

export type FollowShowInput = {
  partner_show_id?: Maybe<Scalars['String']>,
  unfollow?: Maybe<Scalars['Boolean']>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type FollowShowPayload = {
  __typename?: 'FollowShowPayload',
  show?: Maybe<Show>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export enum Format {
  HTML = 'HTML',
  PLAIN = 'PLAIN',
  markdown = 'markdown'
}

export type FormattedDaySchedules = {
  __typename?: 'FormattedDaySchedules',
  days?: Maybe<Scalars['String']>,
  hours?: Maybe<Scalars['String']>,
};


export type FulfillmentInputType = {
  /** Courier of the fulfiller */
  courier: Scalars['String'],
  /** Courier's Tracking ID of this fulfillment */
  trackingId?: Maybe<Scalars['String']>,
  /** Estimated delivery in YY-MM-DD format */
  estimatedDelivery?: Maybe<Scalars['String']>,
};

export type FulfillOrderAtOnceInput = {
  /** ID of the order */
  orderId: Scalars['String'],
  /** Fulfillment information of this order */
  fulfillment: FulfillmentInputType,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type FulfillOrderAtOncePayload = {
  __typename?: 'FulfillOrderAtOncePayload',
  orderOrError?: Maybe<OrderOrFailureUnionType>,
  clientMutationId?: Maybe<Scalars['String']>,
};

/** An entry from gemini */
export type GeminiEntry = {
  __typename?: 'GeminiEntry',
  /** The token that represents the gemini entry. */
  token: Scalars['String'],
};

export type Gene = Node & {
  __typename?: 'Gene',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A slug ID. */
  id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  _id: Scalars['ID'],
  cached?: Maybe<Scalars['Int']>,
  artists?: Maybe<Array<Maybe<Artist>>>,
  artists_connection?: Maybe<ArtistConnection>,
  artworks_connection?: Maybe<GeneArtworksConnection>,
  description?: Maybe<Scalars['String']>,
  display_name?: Maybe<Scalars['String']>,
  /** Artworks Elastic Search results */
  filtered_artworks?: Maybe<FilterArtworks>,
  href?: Maybe<Scalars['String']>,
  image?: Maybe<Image>,
  is_published?: Maybe<Scalars['Boolean']>,
  is_followed?: Maybe<Scalars['Boolean']>,
  mode?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  /** A list of genes similar to the specified gene */
  similar?: Maybe<GeneConnection>,
  trending_artists?: Maybe<Array<Maybe<Artist>>>,
};


export type GeneArtists_ConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type GeneArtworks_ConnectionArgs = {
  acquireable?: Maybe<Scalars['Boolean']>,
  offerable?: Maybe<Scalars['Boolean']>,
  aggregation_partner_cities?: Maybe<Array<Maybe<Scalars['String']>>>,
  aggregations?: Maybe<Array<Maybe<ArtworkAggregation>>>,
  artist_id?: Maybe<Scalars['String']>,
  artist_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  at_auction?: Maybe<Scalars['Boolean']>,
  attribution_class?: Maybe<Array<Maybe<Scalars['String']>>>,
  color?: Maybe<Scalars['String']>,
  dimension_range?: Maybe<Scalars['String']>,
  extra_aggregation_gene_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  include_artworks_by_followed_artists?: Maybe<Scalars['Boolean']>,
  include_medium_filter_in_aggregation?: Maybe<Scalars['Boolean']>,
  inquireable_only?: Maybe<Scalars['Boolean']>,
  for_sale?: Maybe<Scalars['Boolean']>,
  gene_id?: Maybe<Scalars['String']>,
  gene_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  height?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['String']>,
  marketable?: Maybe<Scalars['Boolean']>,
  medium?: Maybe<Scalars['String']>,
  period?: Maybe<Scalars['String']>,
  periods?: Maybe<Array<Maybe<Scalars['String']>>>,
  major_periods?: Maybe<Array<Maybe<Scalars['String']>>>,
  partner_id?: Maybe<Scalars['ID']>,
  partner_cities?: Maybe<Array<Maybe<Scalars['String']>>>,
  price_range?: Maybe<Scalars['String']>,
  page?: Maybe<Scalars['Int']>,
  sale_id?: Maybe<Scalars['ID']>,
  size?: Maybe<Scalars['Int']>,
  sort?: Maybe<Scalars['String']>,
  tag_id?: Maybe<Scalars['String']>,
  keyword?: Maybe<Scalars['String']>,
  keyword_match_exact?: Maybe<Scalars['Boolean']>,
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type GeneFiltered_ArtworksArgs = {
  acquireable?: Maybe<Scalars['Boolean']>,
  offerable?: Maybe<Scalars['Boolean']>,
  aggregation_partner_cities?: Maybe<Array<Maybe<Scalars['String']>>>,
  aggregations?: Maybe<Array<Maybe<ArtworkAggregation>>>,
  artist_id?: Maybe<Scalars['String']>,
  artist_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  at_auction?: Maybe<Scalars['Boolean']>,
  attribution_class?: Maybe<Array<Maybe<Scalars['String']>>>,
  color?: Maybe<Scalars['String']>,
  dimension_range?: Maybe<Scalars['String']>,
  extra_aggregation_gene_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  include_artworks_by_followed_artists?: Maybe<Scalars['Boolean']>,
  include_medium_filter_in_aggregation?: Maybe<Scalars['Boolean']>,
  inquireable_only?: Maybe<Scalars['Boolean']>,
  for_sale?: Maybe<Scalars['Boolean']>,
  gene_id?: Maybe<Scalars['String']>,
  gene_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  height?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['String']>,
  marketable?: Maybe<Scalars['Boolean']>,
  medium?: Maybe<Scalars['String']>,
  period?: Maybe<Scalars['String']>,
  periods?: Maybe<Array<Maybe<Scalars['String']>>>,
  major_periods?: Maybe<Array<Maybe<Scalars['String']>>>,
  partner_id?: Maybe<Scalars['ID']>,
  partner_cities?: Maybe<Array<Maybe<Scalars['String']>>>,
  price_range?: Maybe<Scalars['String']>,
  page?: Maybe<Scalars['Int']>,
  sale_id?: Maybe<Scalars['ID']>,
  size?: Maybe<Scalars['Int']>,
  sort?: Maybe<Scalars['String']>,
  tag_id?: Maybe<Scalars['String']>,
  keyword?: Maybe<Scalars['String']>,
  keyword_match_exact?: Maybe<Scalars['Boolean']>
};


export type GeneSimilarArgs = {
  exclude_gene_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type GeneTrending_ArtistsArgs = {
  sample?: Maybe<Scalars['Int']>
};

/** A connection to a list of items. */
export type GeneArtworksConnection = {
  __typename?: 'GeneArtworksConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GeneArtworksEdge>>>,
  /** Returns aggregation counts for the given filter query. */
  aggregations?: Maybe<Array<Maybe<ArtworksAggregationResults>>>,
  counts?: Maybe<FilterArtworksCounts>,
};

/** An edge in a connection. */
export type GeneArtworksEdge = {
  __typename?: 'GeneArtworksEdge',
  /** The item at the end of the edge */
  node?: Maybe<Artwork>,
  /** A cursor for use in pagination */
  cursor: Scalars['String'],
};

/** A connection to a list of items. */
export type GeneConnection = {
  __typename?: 'GeneConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GeneEdge>>>,
};

/** An edge in a connection. */
export type GeneEdge = {
  __typename?: 'GeneEdge',
  /** The item at the end of the edge */
  node?: Maybe<Gene>,
  /** A cursor for use in pagination */
  cursor: Scalars['String'],
};

export type GeneFamily = {
  __typename?: 'GeneFamily',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A slug ID. */
  id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  _id: Scalars['ID'],
  name: Scalars['String'],
  genes?: Maybe<Array<Maybe<Gene>>>,
};

/** A connection to a list of items. */
export type GeneFamilyConnection = {
  __typename?: 'GeneFamilyConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<GeneFamilyEdge>>>,
};

/** An edge in a connection. */
export type GeneFamilyEdge = {
  __typename?: 'GeneFamilyEdge',
  /** The item at the end of the edge */
  node?: Maybe<GeneFamily>,
  /** A cursor for use in pagination */
  cursor: Scalars['String'],
};

export type GeneItem = Node & {
  __typename?: 'GeneItem',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A slug ID. */
  id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  _id: Scalars['ID'],
  cached?: Maybe<Scalars['Int']>,
  artists?: Maybe<Array<Maybe<Artist>>>,
  artists_connection?: Maybe<ArtistConnection>,
  artworks_connection?: Maybe<GeneArtworksConnection>,
  description?: Maybe<Scalars['String']>,
  display_name?: Maybe<Scalars['String']>,
  /** Artworks Elastic Search results */
  filtered_artworks?: Maybe<FilterArtworks>,
  href?: Maybe<Scalars['String']>,
  image?: Maybe<Image>,
  is_published?: Maybe<Scalars['Boolean']>,
  is_followed?: Maybe<Scalars['Boolean']>,
  mode?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  /** A list of genes similar to the specified gene */
  similar?: Maybe<GeneConnection>,
  trending_artists?: Maybe<Array<Maybe<Artist>>>,
};


export type GeneItemArtists_ConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type GeneItemArtworks_ConnectionArgs = {
  acquireable?: Maybe<Scalars['Boolean']>,
  offerable?: Maybe<Scalars['Boolean']>,
  aggregation_partner_cities?: Maybe<Array<Maybe<Scalars['String']>>>,
  aggregations?: Maybe<Array<Maybe<ArtworkAggregation>>>,
  artist_id?: Maybe<Scalars['String']>,
  artist_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  at_auction?: Maybe<Scalars['Boolean']>,
  attribution_class?: Maybe<Array<Maybe<Scalars['String']>>>,
  color?: Maybe<Scalars['String']>,
  dimension_range?: Maybe<Scalars['String']>,
  extra_aggregation_gene_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  include_artworks_by_followed_artists?: Maybe<Scalars['Boolean']>,
  include_medium_filter_in_aggregation?: Maybe<Scalars['Boolean']>,
  inquireable_only?: Maybe<Scalars['Boolean']>,
  for_sale?: Maybe<Scalars['Boolean']>,
  gene_id?: Maybe<Scalars['String']>,
  gene_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  height?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['String']>,
  marketable?: Maybe<Scalars['Boolean']>,
  medium?: Maybe<Scalars['String']>,
  period?: Maybe<Scalars['String']>,
  periods?: Maybe<Array<Maybe<Scalars['String']>>>,
  major_periods?: Maybe<Array<Maybe<Scalars['String']>>>,
  partner_id?: Maybe<Scalars['ID']>,
  partner_cities?: Maybe<Array<Maybe<Scalars['String']>>>,
  price_range?: Maybe<Scalars['String']>,
  page?: Maybe<Scalars['Int']>,
  sale_id?: Maybe<Scalars['ID']>,
  size?: Maybe<Scalars['Int']>,
  sort?: Maybe<Scalars['String']>,
  tag_id?: Maybe<Scalars['String']>,
  keyword?: Maybe<Scalars['String']>,
  keyword_match_exact?: Maybe<Scalars['Boolean']>,
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type GeneItemFiltered_ArtworksArgs = {
  acquireable?: Maybe<Scalars['Boolean']>,
  offerable?: Maybe<Scalars['Boolean']>,
  aggregation_partner_cities?: Maybe<Array<Maybe<Scalars['String']>>>,
  aggregations?: Maybe<Array<Maybe<ArtworkAggregation>>>,
  artist_id?: Maybe<Scalars['String']>,
  artist_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  at_auction?: Maybe<Scalars['Boolean']>,
  attribution_class?: Maybe<Array<Maybe<Scalars['String']>>>,
  color?: Maybe<Scalars['String']>,
  dimension_range?: Maybe<Scalars['String']>,
  extra_aggregation_gene_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  include_artworks_by_followed_artists?: Maybe<Scalars['Boolean']>,
  include_medium_filter_in_aggregation?: Maybe<Scalars['Boolean']>,
  inquireable_only?: Maybe<Scalars['Boolean']>,
  for_sale?: Maybe<Scalars['Boolean']>,
  gene_id?: Maybe<Scalars['String']>,
  gene_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  height?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['String']>,
  marketable?: Maybe<Scalars['Boolean']>,
  medium?: Maybe<Scalars['String']>,
  period?: Maybe<Scalars['String']>,
  periods?: Maybe<Array<Maybe<Scalars['String']>>>,
  major_periods?: Maybe<Array<Maybe<Scalars['String']>>>,
  partner_id?: Maybe<Scalars['ID']>,
  partner_cities?: Maybe<Array<Maybe<Scalars['String']>>>,
  price_range?: Maybe<Scalars['String']>,
  page?: Maybe<Scalars['Int']>,
  sale_id?: Maybe<Scalars['ID']>,
  size?: Maybe<Scalars['Int']>,
  sort?: Maybe<Scalars['String']>,
  tag_id?: Maybe<Scalars['String']>,
  keyword?: Maybe<Scalars['String']>,
  keyword_match_exact?: Maybe<Scalars['Boolean']>
};


export type GeneItemSimilarArgs = {
  exclude_gene_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type GeneItemTrending_ArtistsArgs = {
  sample?: Maybe<Scalars['Int']>
};

export type GravityMutationError = {
  __typename?: 'GravityMutationError',
  type?: Maybe<Scalars['String']>,
  message?: Maybe<Scalars['String']>,
  detail?: Maybe<Scalars['String']>,
  error?: Maybe<Scalars['String']>,
};

export type HighestBid = {
  __typename?: 'HighestBid',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  id: Scalars['ID'],
  created_at?: Maybe<Scalars['String']>,
  number?: Maybe<Scalars['Int']>,
  is_cancelled?: Maybe<Scalars['Boolean']>,
  /** A formatted price with various currency formatting options. */
  amount?: Maybe<Scalars['String']>,
  cents?: Maybe<Scalars['Int']>,
  display?: Maybe<Scalars['String']>,
  amount_cents?: Maybe<Scalars['Int']>,
  display_amount_dollars?: Maybe<Scalars['String']>,
};


export type HighestBidCreated_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type HighestBidAmountArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};

export type Highlighted = HighlightedShow | HighlightedArticle;

export type HighlightedArticle = Node & {
  __typename?: 'HighlightedArticle',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A type-specific ID. */
  id: Scalars['ID'],
  cached?: Maybe<Scalars['Int']>,
  author?: Maybe<Author>,
  channel_id?: Maybe<Scalars['String']>,
  contributing_authors?: Maybe<Array<Maybe<Author>>>,
  href?: Maybe<Scalars['String']>,
  published_at?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  thumbnail_title?: Maybe<Scalars['String']>,
  thumbnail_teaser?: Maybe<Scalars['String']>,
  thumbnail_image?: Maybe<Image>,
  tier?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['String']>,
};


export type HighlightedArticlePublished_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type HighlightedArticleUpdated_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};

export type HighlightedShow = Node & {
  __typename?: 'HighlightedShow',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A slug ID. */
  id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  _id: Scalars['ID'],
  cached?: Maybe<Scalars['Int']>,
  /** The Artists presenting in this show */
  artists?: Maybe<Array<Maybe<Artist>>>,
  /** The artworks featured in this show */
  artworks?: Maybe<Array<Maybe<Artwork>>>,
  /** The artworks featured in the show */
  artworks_connection?: Maybe<ArtworkConnection>,
  /** Artists inside the show who do not have artworks present */
  artists_without_artworks?: Maybe<Array<Maybe<Artist>>>,
  /** Artists in the show grouped by last name */
  artists_grouped_by_name?: Maybe<Array<Maybe<ArtistGroup>>>,
  /** The general city, derived from a fair location, a show location or a potential city */
  city?: Maybe<Scalars['String']>,
  /** The image you should use to represent this show */
  cover_image?: Maybe<Image>,
  /** An object that represents some of the numbers you might want to highlight */
  counts?: Maybe<ShowCounts>,
  /** A description of the show */
  description?: Maybe<Scalars['String']>,
  displayable?: Maybe<Scalars['Boolean']>,
  end_at?: Maybe<Scalars['String']>,
  /** Events from the partner that runs this show */
  events?: Maybe<Array<Maybe<PartnerShowEventType>>>,
  /** A formatted description of the start to end dates */
  exhibition_period?: Maybe<Scalars['String']>,
  /** If the show is in a Fair, then that fair */
  fair?: Maybe<Fair>,
  /** Artworks Elastic Search results */
  filteredArtworks?: Maybe<FilterArtworks>,
  /** A path to the show on Artsy */
  href?: Maybe<Scalars['String']>,
  /** Images that represent the show, you may be interested in meta_image or cover_image for a definitive thumbnail */
  images?: Maybe<Array<Maybe<Image>>>,
  /** Flag showing if show has any location. */
  has_location?: Maybe<Scalars['Boolean']>,
  /** Gravity doesn’t expose the `active` flag. Temporarily re-state its logic. */
  is_active?: Maybe<Scalars['Boolean']>,
  /** Is this something we can display to the front-end? */
  is_displayable?: Maybe<Scalars['Boolean']>,
  /** Does the show exist as a fair booth? */
  is_fair_booth?: Maybe<Scalars['Boolean']>,
  /** Is it a show provided for historical reference? */
  is_reference?: Maybe<Scalars['Boolean']>,
  is_local_discovery?: Maybe<Scalars['Boolean']>,
  /** Is it an outsourced local discovery stub show? */
  isStubShow?: Maybe<Scalars['Boolean']>,
  /** Whether the show is in a fair, group or solo */
  kind?: Maybe<Scalars['String']>,
  /** Where the show is located (Could also be a fair location) */
  location?: Maybe<Location>,
  /** An image representing the show, or a sharable image from an artwork in the show */
  meta_image?: Maybe<Image>,
  /** Is the user following this show */
  is_followed?: Maybe<Scalars['Boolean']>,
  /** The exhibition title */
  name?: Maybe<Scalars['String']>,
  /** Shows that are near (~75km) from this show */
  nearbyShows?: Maybe<ShowConnection>,
  /** Alternate Markdown-supporting free text representation of the opening reception event’s date/time */
  openingReceptionText?: Maybe<Scalars['String']>,
  /** The partner that represents this show, could be a non-Artsy partner */
  partner?: Maybe<PartnerTypes>,
  /** The press release for this show */
  press_release?: Maybe<Scalars['String']>,
  /** Link to the press release for this show */
  pressReleaseUrl?: Maybe<Scalars['String']>,
  /** When this show starts */
  start_at?: Maybe<Scalars['String']>,
  /** Is this show running, upcoming or closed? */
  status?: Maybe<Scalars['String']>,
  /** A formatted update on upcoming status changes */
  status_update?: Maybe<Scalars['String']>,
  /** Is it a fair booth or a show? */
  type?: Maybe<Scalars['String']>,
  /** A Connection of followed artists by current user for this show */
  followedArtists?: Maybe<ShowFollowArtistConnection>,
};


export type HighlightedShowArtworksArgs = {
  exclude?: Maybe<Array<Maybe<Scalars['String']>>>,
  for_sale?: Maybe<Scalars['Boolean']>,
  published?: Maybe<Scalars['Boolean']>,
  all?: Maybe<Scalars['Boolean']>,
  page?: Maybe<Scalars['Int']>,
  size?: Maybe<Scalars['Int']>
};


export type HighlightedShowArtworks_ConnectionArgs = {
  exclude?: Maybe<Array<Maybe<Scalars['String']>>>,
  for_sale?: Maybe<Scalars['Boolean']>,
  published?: Maybe<Scalars['Boolean']>,
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type HighlightedShowEnd_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type HighlightedShowFilteredArtworksArgs = {
  acquireable?: Maybe<Scalars['Boolean']>,
  offerable?: Maybe<Scalars['Boolean']>,
  aggregation_partner_cities?: Maybe<Array<Maybe<Scalars['String']>>>,
  aggregations?: Maybe<Array<Maybe<ArtworkAggregation>>>,
  artist_id?: Maybe<Scalars['String']>,
  artist_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  at_auction?: Maybe<Scalars['Boolean']>,
  attribution_class?: Maybe<Array<Maybe<Scalars['String']>>>,
  color?: Maybe<Scalars['String']>,
  dimension_range?: Maybe<Scalars['String']>,
  extra_aggregation_gene_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  include_artworks_by_followed_artists?: Maybe<Scalars['Boolean']>,
  include_medium_filter_in_aggregation?: Maybe<Scalars['Boolean']>,
  inquireable_only?: Maybe<Scalars['Boolean']>,
  for_sale?: Maybe<Scalars['Boolean']>,
  gene_id?: Maybe<Scalars['String']>,
  gene_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  height?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['String']>,
  marketable?: Maybe<Scalars['Boolean']>,
  medium?: Maybe<Scalars['String']>,
  period?: Maybe<Scalars['String']>,
  periods?: Maybe<Array<Maybe<Scalars['String']>>>,
  major_periods?: Maybe<Array<Maybe<Scalars['String']>>>,
  partner_id?: Maybe<Scalars['ID']>,
  partner_cities?: Maybe<Array<Maybe<Scalars['String']>>>,
  price_range?: Maybe<Scalars['String']>,
  page?: Maybe<Scalars['Int']>,
  sale_id?: Maybe<Scalars['ID']>,
  size?: Maybe<Scalars['Int']>,
  sort?: Maybe<Scalars['String']>,
  tag_id?: Maybe<Scalars['String']>,
  keyword?: Maybe<Scalars['String']>,
  keyword_match_exact?: Maybe<Scalars['Boolean']>
};


export type HighlightedShowImagesArgs = {
  size?: Maybe<Scalars['Int']>,
  default?: Maybe<Scalars['Boolean']>,
  page?: Maybe<Scalars['Int']>
};


export type HighlightedShowNearbyShowsArgs = {
  sort?: Maybe<PartnerShowSorts>,
  status?: Maybe<EventStatus>,
  discoverable?: Maybe<Scalars['Boolean']>,
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type HighlightedShowPress_ReleaseArgs = {
  format?: Maybe<Format>
};


export type HighlightedShowStart_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type HighlightedShowStatus_UpdateArgs = {
  max_days?: Maybe<Scalars['Int']>
};


export type HighlightedShowFollowedArtistsArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};

export type HomePage = {
  __typename?: 'HomePage',
  /** Single artist module to show on the home screen. */
  artist_module?: Maybe<HomePageArtistModule>,
  /** Artist modules to show on the home screen */
  artist_modules?: Maybe<Array<Maybe<HomePageArtistModule>>>,
  /** Single artwork module to show on the home screen */
  artwork_module?: Maybe<HomePageArtworkModule>,
  /** Artwork modules to show on the home screen */
  artwork_modules?: Maybe<Array<Maybe<HomePageArtworkModule>>>,
  /** A list of enabled hero units to show on the requested platform */
  hero_units?: Maybe<Array<Maybe<HomePageHeroUnit>>>,
  fairs_module?: Maybe<HomePageFairsModule>,
};


export type HomePageArtist_ModuleArgs = {
  key?: Maybe<HomePageArtistModuleTypes>
};


export type HomePageArtwork_ModuleArgs = {
  followed_artist_id?: Maybe<Scalars['String']>,
  generic_gene_id?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  key?: Maybe<Scalars['String']>,
  related_artist_id?: Maybe<Scalars['String']>
};


export type HomePageArtwork_ModulesArgs = {
  max_followed_gene_rails?: Maybe<Scalars['Int']>,
  max_rails?: Maybe<Scalars['Int']>,
  order?: Maybe<Array<Maybe<HomePageArtworkModuleTypes>>>,
  exclude?: Maybe<Array<Maybe<HomePageArtworkModuleTypes>>>
};


export type HomePageHero_UnitsArgs = {
  platform: HomePageHeroUnitPlatform
};

export type HomePageArtistModule = Node & {
  __typename?: 'HomePageArtistModule',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** Module identifier. */
  key?: Maybe<Scalars['String']>,
  results?: Maybe<Array<Maybe<Artist>>>,
};

export enum HomePageArtistModuleTypes {
  /** Artists recommended for the specific user. */
  SUGGESTED = 'SUGGESTED',
  /** The trending artists. */
  TRENDING = 'TRENDING',
  /** The most searched for artists. */
  POPULAR = 'POPULAR'
}

export type HomePageArtworkModule = Node & {
  __typename?: 'HomePageArtworkModule',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  context?: Maybe<HomePageModuleContext>,
  display?: Maybe<Scalars['String']>,
  is_displayable?: Maybe<Scalars['Boolean']>,
  key?: Maybe<Scalars['String']>,
  params?: Maybe<HomePageModulesParams>,
  results?: Maybe<Array<Maybe<Artwork>>>,
  title?: Maybe<Scalars['String']>,
};

export enum HomePageArtworkModuleTypes {
  FOLLOWED_GENES = 'FOLLOWED_GENES',
  GENERIC_GENES = 'GENERIC_GENES',
  ACTIVE_BIDS = 'ACTIVE_BIDS',
  CURRENT_FAIRS = 'CURRENT_FAIRS',
  FOLLOWED_ARTIST = 'FOLLOWED_ARTIST',
  FOLLOWED_ARTISTS = 'FOLLOWED_ARTISTS',
  FOLLOWED_GALLERIES = 'FOLLOWED_GALLERIES',
  LIVE_AUCTIONS = 'LIVE_AUCTIONS',
  POPULAR_ARTISTS = 'POPULAR_ARTISTS',
  RECOMMENDED_WORKS = 'RECOMMENDED_WORKS',
  RELATED_ARTISTS = 'RELATED_ARTISTS',
  SAVED_WORKS = 'SAVED_WORKS',
  RECENTLY_VIEWED_WORKS = 'RECENTLY_VIEWED_WORKS',
  SIMILAR_TO_RECENTLY_VIEWED = 'SIMILAR_TO_RECENTLY_VIEWED',
  SIMILAR_TO_SAVED_WORKS = 'SIMILAR_TO_SAVED_WORKS'
}

export type HomePageFairsModule = {
  __typename?: 'HomePageFairsModule',
  results: Array<Maybe<Fair>>,
};

export type HomePageHeroUnit = {
  __typename?: 'HomePageHeroUnit',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A slug ID. */
  id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  _id: Scalars['ID'],
  cached?: Maybe<Scalars['Int']>,
  mode?: Maybe<HomePageHeroUnitMode>,
  heading?: Maybe<Scalars['String']>,
  href?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  title_image_url?: Maybe<Scalars['String']>,
  subtitle?: Maybe<Scalars['String']>,
  link_text?: Maybe<Scalars['String']>,
  credit_line?: Maybe<Scalars['String']>,
  /** The image to show, on desktop this defaults to the wide version. */
  background_image_url?: Maybe<Scalars['String']>,
};


export type HomePageHeroUnitTitle_Image_UrlArgs = {
  retina?: Maybe<Scalars['Boolean']>
};


export type HomePageHeroUnitBackground_Image_UrlArgs = {
  version?: Maybe<HomePageHeroUnitImageVersion>
};

export enum HomePageHeroUnitImageVersion {
  WIDE = 'WIDE',
  NARROW = 'NARROW'
}

export enum HomePageHeroUnitMode {
  LEFT_DARK = 'LEFT_DARK',
  LEFT_LIGHT = 'LEFT_LIGHT',
  CENTERED_DARK = 'CENTERED_DARK',
  CENTERED_LIGHT = 'CENTERED_LIGHT',
  RIGHT_DARK = 'RIGHT_DARK',
  RIGHT_LIGHT = 'RIGHT_LIGHT'
}

export enum HomePageHeroUnitPlatform {
  MOBILE = 'MOBILE',
  DESKTOP = 'DESKTOP',
  MARTSY = 'MARTSY'
}

export type HomePageModuleContext = HomePageModuleContextFair | HomePageModuleContextFollowArtists | HomePageModuleContextFollowedArtist | HomePageModuleContextGene | HomePageModuleContextRelatedArtist | HomePageModuleContextSale | HomePageModuleContextTrending;

export type HomePageModuleContextFair = {
  __typename?: 'HomePageModuleContextFair',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A slug ID. */
  id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  _id: Scalars['ID'],
  about?: Maybe<Scalars['String']>,
  followed_content?: Maybe<FollowedContent>,
  artists?: Maybe<ArtistConnection>,
  cached?: Maybe<Scalars['Int']>,
  banner_size?: Maybe<Scalars['String']>,
  counts?: Maybe<FairCounts>,
  /** A formatted description of the start to end dates */
  exhibition_period?: Maybe<Scalars['String']>,
  /** A formatted description of when the fair starts or closes or if it is closed */
  formattedOpeningHours?: Maybe<Scalars['String']>,
  has_full_feature?: Maybe<Scalars['Boolean']>,
  has_homepage_section?: Maybe<Scalars['Boolean']>,
  has_large_banner?: Maybe<Scalars['Boolean']>,
  has_listing?: Maybe<Scalars['Boolean']>,
  hours?: Maybe<Scalars['String']>,
  href?: Maybe<Scalars['String']>,
  image?: Maybe<Image>,
  is_active?: Maybe<Scalars['Boolean']>,
  /** Are we currently in the fair's active period? */
  isActive?: Maybe<Scalars['Boolean']>,
  links?: Maybe<Scalars['String']>,
  mobile_image?: Maybe<Image>,
  is_published?: Maybe<Scalars['Boolean']>,
  location?: Maybe<Location>,
  name?: Maybe<Scalars['String']>,
  profile?: Maybe<Profile>,
  /** This connection only supports forward pagination. We're replacing Relay's default cursor with one from Gravity. */
  shows_connection?: Maybe<ShowConnection>,
  start_at?: Maybe<Scalars['String']>,
  end_at?: Maybe<Scalars['String']>,
  active_start_at?: Maybe<Scalars['String']>,
  organizer?: Maybe<Organizer>,
  published?: Maybe<Scalars['Boolean']>,
  tagline?: Maybe<Scalars['String']>,
  ticketsLink?: Maybe<Scalars['String']>,
  /** The exhibitors with booths in this fair with letter. */
  exhibitors_grouped_by_name?: Maybe<Array<Maybe<FairExhibitorsGroup>>>,
  /** Artworks Elastic Search results */
  filteredArtworks?: Maybe<FilterArtworks>,
  sponsoredContent?: Maybe<FairSponsoredContent>,
};


export type HomePageModuleContextFairArtistsArgs = {
  sort?: Maybe<FairArtistSorts>,
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type HomePageModuleContextFairShows_ConnectionArgs = {
  section?: Maybe<Scalars['String']>,
  sort?: Maybe<ShowSort>,
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type HomePageModuleContextFairStart_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type HomePageModuleContextFairEnd_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type HomePageModuleContextFairActive_Start_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type HomePageModuleContextFairFilteredArtworksArgs = {
  acquireable?: Maybe<Scalars['Boolean']>,
  offerable?: Maybe<Scalars['Boolean']>,
  aggregation_partner_cities?: Maybe<Array<Maybe<Scalars['String']>>>,
  aggregations?: Maybe<Array<Maybe<ArtworkAggregation>>>,
  artist_id?: Maybe<Scalars['String']>,
  artist_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  at_auction?: Maybe<Scalars['Boolean']>,
  attribution_class?: Maybe<Array<Maybe<Scalars['String']>>>,
  color?: Maybe<Scalars['String']>,
  dimension_range?: Maybe<Scalars['String']>,
  extra_aggregation_gene_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  include_artworks_by_followed_artists?: Maybe<Scalars['Boolean']>,
  include_medium_filter_in_aggregation?: Maybe<Scalars['Boolean']>,
  inquireable_only?: Maybe<Scalars['Boolean']>,
  for_sale?: Maybe<Scalars['Boolean']>,
  gene_id?: Maybe<Scalars['String']>,
  gene_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  height?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['String']>,
  marketable?: Maybe<Scalars['Boolean']>,
  medium?: Maybe<Scalars['String']>,
  period?: Maybe<Scalars['String']>,
  periods?: Maybe<Array<Maybe<Scalars['String']>>>,
  major_periods?: Maybe<Array<Maybe<Scalars['String']>>>,
  partner_id?: Maybe<Scalars['ID']>,
  partner_cities?: Maybe<Array<Maybe<Scalars['String']>>>,
  price_range?: Maybe<Scalars['String']>,
  page?: Maybe<Scalars['Int']>,
  sale_id?: Maybe<Scalars['ID']>,
  size?: Maybe<Scalars['Int']>,
  sort?: Maybe<Scalars['String']>,
  tag_id?: Maybe<Scalars['String']>,
  keyword?: Maybe<Scalars['String']>,
  keyword_match_exact?: Maybe<Scalars['Boolean']>
};

export type HomePageModuleContextFollowArtists = {
  __typename?: 'HomePageModuleContextFollowArtists',
  artists?: Maybe<Array<Maybe<Artist>>>,
  counts?: Maybe<FollowArtistCounts>,
};

export type HomePageModuleContextFollowedArtist = {
  __typename?: 'HomePageModuleContextFollowedArtist',
  artist?: Maybe<Artist>,
};

export type HomePageModuleContextGene = Node & {
  __typename?: 'HomePageModuleContextGene',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A slug ID. */
  id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  _id: Scalars['ID'],
  cached?: Maybe<Scalars['Int']>,
  artists?: Maybe<Array<Maybe<Artist>>>,
  artists_connection?: Maybe<ArtistConnection>,
  artworks_connection?: Maybe<GeneArtworksConnection>,
  description?: Maybe<Scalars['String']>,
  display_name?: Maybe<Scalars['String']>,
  /** Artworks Elastic Search results */
  filtered_artworks?: Maybe<FilterArtworks>,
  href?: Maybe<Scalars['String']>,
  image?: Maybe<Image>,
  is_published?: Maybe<Scalars['Boolean']>,
  is_followed?: Maybe<Scalars['Boolean']>,
  mode?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  /** A list of genes similar to the specified gene */
  similar?: Maybe<GeneConnection>,
  trending_artists?: Maybe<Array<Maybe<Artist>>>,
};


export type HomePageModuleContextGeneArtists_ConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type HomePageModuleContextGeneArtworks_ConnectionArgs = {
  acquireable?: Maybe<Scalars['Boolean']>,
  offerable?: Maybe<Scalars['Boolean']>,
  aggregation_partner_cities?: Maybe<Array<Maybe<Scalars['String']>>>,
  aggregations?: Maybe<Array<Maybe<ArtworkAggregation>>>,
  artist_id?: Maybe<Scalars['String']>,
  artist_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  at_auction?: Maybe<Scalars['Boolean']>,
  attribution_class?: Maybe<Array<Maybe<Scalars['String']>>>,
  color?: Maybe<Scalars['String']>,
  dimension_range?: Maybe<Scalars['String']>,
  extra_aggregation_gene_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  include_artworks_by_followed_artists?: Maybe<Scalars['Boolean']>,
  include_medium_filter_in_aggregation?: Maybe<Scalars['Boolean']>,
  inquireable_only?: Maybe<Scalars['Boolean']>,
  for_sale?: Maybe<Scalars['Boolean']>,
  gene_id?: Maybe<Scalars['String']>,
  gene_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  height?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['String']>,
  marketable?: Maybe<Scalars['Boolean']>,
  medium?: Maybe<Scalars['String']>,
  period?: Maybe<Scalars['String']>,
  periods?: Maybe<Array<Maybe<Scalars['String']>>>,
  major_periods?: Maybe<Array<Maybe<Scalars['String']>>>,
  partner_id?: Maybe<Scalars['ID']>,
  partner_cities?: Maybe<Array<Maybe<Scalars['String']>>>,
  price_range?: Maybe<Scalars['String']>,
  page?: Maybe<Scalars['Int']>,
  sale_id?: Maybe<Scalars['ID']>,
  size?: Maybe<Scalars['Int']>,
  sort?: Maybe<Scalars['String']>,
  tag_id?: Maybe<Scalars['String']>,
  keyword?: Maybe<Scalars['String']>,
  keyword_match_exact?: Maybe<Scalars['Boolean']>,
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type HomePageModuleContextGeneFiltered_ArtworksArgs = {
  acquireable?: Maybe<Scalars['Boolean']>,
  offerable?: Maybe<Scalars['Boolean']>,
  aggregation_partner_cities?: Maybe<Array<Maybe<Scalars['String']>>>,
  aggregations?: Maybe<Array<Maybe<ArtworkAggregation>>>,
  artist_id?: Maybe<Scalars['String']>,
  artist_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  at_auction?: Maybe<Scalars['Boolean']>,
  attribution_class?: Maybe<Array<Maybe<Scalars['String']>>>,
  color?: Maybe<Scalars['String']>,
  dimension_range?: Maybe<Scalars['String']>,
  extra_aggregation_gene_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  include_artworks_by_followed_artists?: Maybe<Scalars['Boolean']>,
  include_medium_filter_in_aggregation?: Maybe<Scalars['Boolean']>,
  inquireable_only?: Maybe<Scalars['Boolean']>,
  for_sale?: Maybe<Scalars['Boolean']>,
  gene_id?: Maybe<Scalars['String']>,
  gene_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  height?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['String']>,
  marketable?: Maybe<Scalars['Boolean']>,
  medium?: Maybe<Scalars['String']>,
  period?: Maybe<Scalars['String']>,
  periods?: Maybe<Array<Maybe<Scalars['String']>>>,
  major_periods?: Maybe<Array<Maybe<Scalars['String']>>>,
  partner_id?: Maybe<Scalars['ID']>,
  partner_cities?: Maybe<Array<Maybe<Scalars['String']>>>,
  price_range?: Maybe<Scalars['String']>,
  page?: Maybe<Scalars['Int']>,
  sale_id?: Maybe<Scalars['ID']>,
  size?: Maybe<Scalars['Int']>,
  sort?: Maybe<Scalars['String']>,
  tag_id?: Maybe<Scalars['String']>,
  keyword?: Maybe<Scalars['String']>,
  keyword_match_exact?: Maybe<Scalars['Boolean']>
};


export type HomePageModuleContextGeneSimilarArgs = {
  exclude_gene_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type HomePageModuleContextGeneTrending_ArtistsArgs = {
  sample?: Maybe<Scalars['Int']>
};

export type HomePageModuleContextRelatedArtist = {
  __typename?: 'HomePageModuleContextRelatedArtist',
  artist?: Maybe<Artist>,
  based_on?: Maybe<Artist>,
};

export type HomePageModuleContextSale = Node & {
  __typename?: 'HomePageModuleContextSale',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A slug ID. */
  id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  _id: Scalars['ID'],
  cached?: Maybe<Scalars['Int']>,
  artworks?: Maybe<Array<Maybe<Artwork>>>,
  /** Returns a connection of artworks for a sale. */
  artworksConnection?: Maybe<ArtworkConnection>,
  associated_sale?: Maybe<Sale>,
  auction_state?: Maybe<Scalars['String']>,
  /** A bid increment policy that explains minimum bids in ranges. */
  bid_increments?: Maybe<Array<Maybe<BidIncrement>>>,
  /** Auction's buyer's premium policy. */
  buyers_premium?: Maybe<Array<Maybe<BuyersPremium>>>,
  cover_image?: Maybe<Image>,
  currency?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  display_timely_at?: Maybe<Scalars['String']>,
  eligible_sale_artworks_count?: Maybe<Scalars['Int']>,
  end_at?: Maybe<Scalars['String']>,
  event_start_at?: Maybe<Scalars['String']>,
  event_end_at?: Maybe<Scalars['String']>,
  /** A formatted description of when the auction starts or ends or if it has ended */
  formattedStartDateTime?: Maybe<Scalars['String']>,
  href?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  initials?: Maybe<Scalars['String']>,
  is_auction?: Maybe<Scalars['Boolean']>,
  is_benefit?: Maybe<Scalars['Boolean']>,
  isBenefit?: Maybe<Scalars['Boolean']>,
  isGalleryAuction?: Maybe<Scalars['Boolean']>,
  is_auction_promo?: Maybe<Scalars['Boolean']>,
  is_closed?: Maybe<Scalars['Boolean']>,
  is_open?: Maybe<Scalars['Boolean']>,
  is_live_open?: Maybe<Scalars['Boolean']>,
  is_preview?: Maybe<Scalars['Boolean']>,
  is_registration_closed?: Maybe<Scalars['Boolean']>,
  is_with_buyers_premium?: Maybe<Scalars['Boolean']>,
  live_start_at?: Maybe<Scalars['String']>,
  /** Returns a live auctions url if the sale is open and start time is after now */
  live_url_if_open?: Maybe<Scalars['String']>,
  partner?: Maybe<Partner>,
  profile?: Maybe<Profile>,
  promoted_sale?: Maybe<Sale>,
  registration_ends_at?: Maybe<Scalars['String']>,
  /** A registration for this sale or null */
  registrationStatus?: Maybe<Bidder>,
  require_bidder_approval?: Maybe<Scalars['Boolean']>,
  sale_artworks?: Maybe<Array<Maybe<SaleArtwork>>>,
  sale_artworks_connection?: Maybe<SaleArtworkConnection>,
  sale_type?: Maybe<Scalars['String']>,
  start_at?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  sale_artwork?: Maybe<SaleArtwork>,
  symbol?: Maybe<Scalars['String']>,
};


export type HomePageModuleContextSaleArtworksArgs = {
  page?: Maybe<Scalars['Int']>,
  size?: Maybe<Scalars['Int']>,
  all?: Maybe<Scalars['Boolean']>,
  exclude?: Maybe<Array<Maybe<Scalars['String']>>>
};


export type HomePageModuleContextSaleArtworksConnectionArgs = {
  exclude?: Maybe<Array<Maybe<Scalars['String']>>>,
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type HomePageModuleContextSaleEnd_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type HomePageModuleContextSaleEvent_Start_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type HomePageModuleContextSaleEvent_End_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type HomePageModuleContextSaleInitialsArgs = {
  length?: Maybe<Scalars['Int']>
};


export type HomePageModuleContextSaleLive_Start_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type HomePageModuleContextSaleRegistration_Ends_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type HomePageModuleContextSaleSale_ArtworksArgs = {
  page?: Maybe<Scalars['Int']>,
  size?: Maybe<Scalars['Int']>,
  all?: Maybe<Scalars['Boolean']>
};


export type HomePageModuleContextSaleSale_Artworks_ConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type HomePageModuleContextSaleStart_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type HomePageModuleContextSaleSale_ArtworkArgs = {
  id: Scalars['String']
};

export type HomePageModuleContextTrending = {
  __typename?: 'HomePageModuleContextTrending',
  artists?: Maybe<Array<Maybe<Artist>>>,
};

export type HomePageModulesParams = {
  __typename?: 'HomePageModulesParams',
  /** An optional type-specific ID. */
  id?: Maybe<Scalars['ID']>,
  followed_artist_id?: Maybe<Scalars['ID']>,
  gene_id?: Maybe<Scalars['String']>,
  medium?: Maybe<Scalars['String']>,
  price_range?: Maybe<Scalars['String']>,
  related_artist_id?: Maybe<Scalars['ID']>,
};

export type Image = {
  __typename?: 'Image',
  /** An optional type-specific ID. */
  id?: Maybe<Scalars['ID']>,
  aspect_ratio: Scalars['Float'],
  caption?: Maybe<Scalars['String']>,
  cropped?: Maybe<CroppedImageUrl>,
  deep_zoom?: Maybe<DeepZoom>,
  href?: Maybe<Scalars['String']>,
  height?: Maybe<Scalars['Int']>,
  image_url?: Maybe<Scalars['String']>,
  image_versions?: Maybe<Array<Maybe<Scalars['String']>>>,
  is_default?: Maybe<Scalars['Boolean']>,
  is_zoomable?: Maybe<Scalars['Boolean']>,
  max_tiled_height?: Maybe<Scalars['Int']>,
  max_tiled_width?: Maybe<Scalars['Int']>,
  original_height?: Maybe<Scalars['Int']>,
  original_width?: Maybe<Scalars['Int']>,
  orientation?: Maybe<Scalars['String']>,
  /** Value to use when `padding-bottom` for fluid image placeholders */
  placeholder?: Maybe<Scalars['String']>,
  position?: Maybe<Scalars['Int']>,
  resized?: Maybe<ResizedImageUrl>,
  tile_base_url?: Maybe<Scalars['String']>,
  tile_format?: Maybe<Scalars['String']>,
  tile_size?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['Int']>,
  url?: Maybe<Scalars['String']>,
  versions?: Maybe<Array<Maybe<Scalars['String']>>>,
};


export type ImageCroppedArgs = {
  width: Scalars['Int'],
  height: Scalars['Int'],
  version?: Maybe<Array<Maybe<Scalars['String']>>>
};


export type ImageResizedArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  version?: Maybe<Array<Maybe<Scalars['String']>>>
};


export type ImageUrlArgs = {
  version?: Maybe<Array<Maybe<Scalars['String']>>>
};

export enum Intents {
  BUY_ART_AND_DESIGN = 'BUY_ART_AND_DESIGN',
  SELL_ART_AND_DESIGN = 'SELL_ART_AND_DESIGN',
  RESEARCH_ART_PRICES = 'RESEARCH_ART_PRICES',
  LEARN_ABOUT_ART = 'LEARN_ABOUT_ART',
  FIND_ART_EXHIBITS = 'FIND_ART_EXHIBITS',
  READ_ART_MARKET_NEWS = 'READ_ART_MARKET_NEWS'
}

/** Fields of an invoice (currently from Lewitt) */
export type Invoice = Node & {
  __typename?: 'Invoice',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  id: Scalars['ID'],
  /** Lewitt's invoice id. */
  lewitt_invoice_id: Scalars['String'],
  /** Link to public checkout page. */
  payment_url?: Maybe<Scalars['String']>,
  /** Current state of invoice. */
  state?: Maybe<InvoiceState>,
  /** A formatted price with various currency formatting options. */
  total?: Maybe<Scalars['String']>,
};


/** Fields of an invoice (currently from Lewitt) */
export type InvoiceTotalArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};

export enum InvoiceState {
  UNPAID = 'UNPAID',
  PAID = 'PAID',
  VOID = 'VOID',
  REFUNDED = 'REFUNDED'
}

export type Item = ArtistItem | ArtworkItem | FeaturedLinkItem | GeneItem;


export type LatLng = {
  __typename?: 'LatLng',
  lat?: Maybe<Scalars['Float']>,
  lng?: Maybe<Scalars['Float']>,
};

export type ListPrice = PriceRange | ExactPrice;

export type Location = {
  __typename?: 'Location',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A type-specific ID. */
  id: Scalars['ID'],
  cached?: Maybe<Scalars['Int']>,
  address?: Maybe<Scalars['String']>,
  address_2?: Maybe<Scalars['String']>,
  city?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['String']>,
  coordinates?: Maybe<LatLng>,
  day_schedules?: Maybe<Array<Maybe<DaySchedule>>>,
  /** Alternate Markdown-supporting free text representation of a location's opening hours */
  day_schedule_text?: Maybe<Scalars['String']>,
  displayDaySchedules?: Maybe<Array<Maybe<FormattedDaySchedules>>>,
  /** Union returning opening hours in formatted structure or a string */
  openingHours?: Maybe<OpeningHoursUnion>,
  display?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  postal_code?: Maybe<Scalars['String']>,
  state?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
};

export type LotStanding = {
  __typename?: 'LotStanding',
  /** Your bid if it is currently winning */
  active_bid?: Maybe<BidderPosition>,
  bidder?: Maybe<Bidder>,
  /** You are winning and reserve is met */
  is_highest_bidder?: Maybe<Scalars['Boolean']>,
  /** You are the leading bidder without regard to reserve */
  is_leading_bidder?: Maybe<Scalars['Boolean']>,
  /** Your most recent bid—which is not necessarily winning (may be higher or lower) */
  most_recent_bid?: Maybe<BidderPosition>,
  sale?: Maybe<Sale>,
  sale_artwork?: Maybe<SaleArtwork>,
};

/** Object representing a collection page */
export type MarketingCollection = {
  __typename?: 'MarketingCollection',
  id: Scalars['ID'],
  /** slug version of title, used for pretty URLs (e.g. `kaws-prints` for Kaws Prints */
  slug: Scalars['String'],
  /** Name of the collection */
  title: Scalars['String'],
  /** Description of the collection which can include links to other collections */
  description?: Maybe<Scalars['String']>,
  /** Background image for the header of the collection page */
  headerImage?: Maybe<Scalars['String']>,
  /** URL for Thumbnail image to be used when this collection is displayed. */
  thumbnail?: Maybe<Scalars['String']>,
  /** Set of keywords used for SEO purposes */
  keywords: Scalars['String'],
  /** Image credit for the header image */
  credit?: Maybe<Scalars['String']>,
  /** Category of the collection */
  category: Scalars['String'],
  /** Structured object used to build filtered artworks query */
  query: MarketingCollectionQuery,
  createdAt: Scalars['MarketingDateTime'],
  updatedAt: Scalars['MarketingDateTime'],
  /** Suggested average price for included works */
  price_guidance?: Maybe<Scalars['Float']>,
  /** Collection can be surfaced on editorial pages */
  show_on_editorial: Scalars['Boolean'],
  /** Collection has prioritized connection to artist */
  is_featured_artist_content: Scalars['Boolean'],
  /** CollectionGroups of this collection */
  linkedCollections: Array<MarketingCollectionGroup>,
  relatedCollections: Array<MarketingCollection>,
  artworks?: Maybe<FilterArtworks>,
};


/** Object representing a collection page */
export type MarketingCollectionArtworksArgs = {
  acquireable?: Maybe<Scalars['Boolean']>,
  offerable?: Maybe<Scalars['Boolean']>,
  aggregation_partner_cities?: Maybe<Array<Maybe<Scalars['String']>>>,
  aggregations?: Maybe<Array<Maybe<ArtworkAggregation>>>,
  artist_id?: Maybe<Scalars['String']>,
  artist_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  at_auction?: Maybe<Scalars['Boolean']>,
  attribution_class?: Maybe<Array<Maybe<Scalars['String']>>>,
  color?: Maybe<Scalars['String']>,
  dimension_range?: Maybe<Scalars['String']>,
  extra_aggregation_gene_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  include_artworks_by_followed_artists?: Maybe<Scalars['Boolean']>,
  include_medium_filter_in_aggregation?: Maybe<Scalars['Boolean']>,
  inquireable_only?: Maybe<Scalars['Boolean']>,
  for_sale?: Maybe<Scalars['Boolean']>,
  gene_id?: Maybe<Scalars['String']>,
  gene_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  height?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['String']>,
  medium?: Maybe<Scalars['String']>,
  period?: Maybe<Scalars['String']>,
  periods?: Maybe<Array<Maybe<Scalars['String']>>>,
  major_periods?: Maybe<Array<Maybe<Scalars['String']>>>,
  partner_id?: Maybe<Scalars['ID']>,
  partner_cities?: Maybe<Array<Maybe<Scalars['String']>>>,
  price_range?: Maybe<Scalars['String']>,
  page?: Maybe<Scalars['Int']>,
  sale_id?: Maybe<Scalars['ID']>,
  size?: Maybe<Scalars['Int']>,
  sort?: Maybe<Scalars['String']>,
  tag_id?: Maybe<Scalars['String']>,
  keyword?: Maybe<Scalars['String']>
};

export type MarketingCollectionCategory = {
  __typename?: 'MarketingCollectionCategory',
  name: Scalars['String'],
  collections: Array<MarketingCollection>,
};

export type MarketingCollectionGroup = {
  __typename?: 'MarketingCollectionGroup',
  groupType: MarketingGroupTypes,
  name: Scalars['String'],
  members: Array<MarketingCollection>,
};

export type MarketingCollectionQuery = {
  __typename?: 'MarketingCollectionQuery',
  id?: Maybe<Scalars['ID']>,
  acquireable?: Maybe<Scalars['Boolean']>,
  aggregations?: Maybe<Array<Scalars['String']>>,
  artist_ids?: Maybe<Array<Scalars['String']>>,
  artist_id?: Maybe<Scalars['String']>,
  at_auction?: Maybe<Scalars['Boolean']>,
  color?: Maybe<Scalars['String']>,
  dimension_range?: Maybe<Scalars['String']>,
  extra_aggregation_gene_ids?: Maybe<Array<Scalars['String']>>,
  include_artworks_by_followed_artists?: Maybe<Scalars['Boolean']>,
  include_medium_filter_in_aggregation?: Maybe<Scalars['Boolean']>,
  inquireable_only?: Maybe<Scalars['Boolean']>,
  for_sale?: Maybe<Scalars['Boolean']>,
  gene_id?: Maybe<Scalars['String']>,
  gene_ids?: Maybe<Array<Scalars['String']>>,
  height?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['String']>,
  medium?: Maybe<Scalars['String']>,
  period?: Maybe<Scalars['String']>,
  periods?: Maybe<Array<Scalars['String']>>,
  major_periods?: Maybe<Array<Scalars['String']>>,
  partner_id?: Maybe<Scalars['ID']>,
  partner_cities?: Maybe<Array<Scalars['String']>>,
  price_range?: Maybe<Scalars['String']>,
  page?: Maybe<Scalars['Int']>,
  sale_id?: Maybe<Scalars['ID']>,
  size?: Maybe<Scalars['Int']>,
  sort?: Maybe<Scalars['String']>,
  tag_id?: Maybe<Scalars['String']>,
  keyword?: Maybe<Scalars['String']>,
};


/** Available types of CollectionGroup */
export enum MarketingGroupTypes {
  ArtistSeries = 'ArtistSeries',
  FeaturedCollections = 'FeaturedCollections',
  OtherCollections = 'OtherCollections'
}

export type MarketingImage = {
  __typename?: 'MarketingImage',
  id: Scalars['ID'],
  small: Scalars['String'],
  medium: Scalars['String'],
  large: Scalars['String'],
};

export type Me = Node & {
  __typename?: 'Me',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A type-specific ID. */
  id: Scalars['ID'],
  /** A list of the current user’s consignment submissions */
  consignment_submissions?: Maybe<ConsignmentSubmissionConnection>,
  /** A list of the current user’s inquiry requests */
  artwork_inquiries_connection?: Maybe<ArtworkInquiryConnection>,
  /** A list of the current user’s bidder registrations */
  bidders?: Maybe<Array<Maybe<Bidder>>>,
  /** The current user's status relating to bids on artworks */
  bidder_status?: Maybe<LotStanding>,
  /** A list of the current user's bidder positions */
  bidder_positions?: Maybe<Array<Maybe<BidderPosition>>>,
  /** Returns a single bidder position */
  bidder_position?: Maybe<BidderPositionResult>,
  /** A collector profile. */
  collector_profile?: Maybe<CollectorProfileType>,
  /** A conversation, usually between a user and a partner */
  conversation?: Maybe<Conversation>,
  /** Conversations, usually between a user and partner. */
  conversations?: Maybe<ConversationConnection>,
  created_at?: Maybe<Scalars['String']>,
  /** A list of the current user’s credit cards */
  creditCards?: Maybe<CreditCardConnection>,
  email?: Maybe<Scalars['String']>,
  /** A list of the current user’s artist follows */
  follow_artists?: Maybe<FollowArtists>,
  /** A Connection of followed artists by current user */
  followed_artists_connection?: Maybe<FollowArtistConnection>,
  /** A list of the current user’s inquiry requests */
  followed_genes?: Maybe<FollowGeneConnection>,
  followsAndSaves?: Maybe<FollowsAndSaves>,
  has_credit_cards?: Maybe<Scalars['Boolean']>,
  has_qualified_credit_cards?: Maybe<Scalars['Boolean']>,
  /** An invoice */
  invoice?: Maybe<Invoice>,
  /** The current user's status relating to bids on artworks */
  lot_standing?: Maybe<LotStanding>,
  /** A list of the current user's auction standings for given lots */
  lot_standings?: Maybe<Array<Maybe<LotStanding>>>,
  name?: Maybe<Scalars['String']>,
  initials?: Maybe<Scalars['String']>,
  /** A list of feed items, indicating published artworks (grouped by date and artists). */
  notifications_connection?: Maybe<NotificationsFeedItemConnection>,
  paddle_number?: Maybe<Scalars['String']>,
  recentlyViewedArtworkIds: Array<Maybe<Scalars['String']>>,
  /** A list of the current user’s recently viewed artworks. */
  recentlyViewedArtworks?: Maybe<ArtworkConnection>,
  sale_registrations?: Maybe<Array<Maybe<SaleRegistration>>>,
  saved_artworks?: Maybe<Collection>,
  /** A list of the current user’s suggested artists, based on a single artist */
  suggested_artists?: Maybe<Array<Maybe<Artist>>>,
  type?: Maybe<Scalars['String']>,
};


export type MeConsignment_SubmissionsArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  completed?: Maybe<Scalars['Boolean']>
};


export type MeArtwork_Inquiries_ConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type MeBiddersArgs = {
  sale_id?: Maybe<Scalars['String']>
};


export type MeBidder_StatusArgs = {
  artwork_id: Scalars['String'],
  sale_id: Scalars['String']
};


export type MeBidder_PositionsArgs = {
  artwork_id?: Maybe<Scalars['String']>,
  current?: Maybe<Scalars['Boolean']>,
  sale_id?: Maybe<Scalars['String']>
};


export type MeBidder_PositionArgs = {
  id: Scalars['String']
};


export type MeConversationArgs = {
  id: Scalars['String']
};


export type MeConversationsArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type MeCreated_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type MeCreditCardsArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type MeFollow_ArtistsArgs = {
  page?: Maybe<Scalars['Int']>,
  size?: Maybe<Scalars['Int']>
};


export type MeFollowed_Artists_ConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type MeFollowed_GenesArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type MeInvoiceArgs = {
  conversationId: Scalars['String'],
  invoiceId: Scalars['String']
};


export type MeLot_StandingArgs = {
  artwork_id?: Maybe<Scalars['String']>,
  sale_id?: Maybe<Scalars['String']>,
  sale_artwork_id?: Maybe<Scalars['String']>
};


export type MeLot_StandingsArgs = {
  active_positions?: Maybe<Scalars['Boolean']>,
  artwork_id?: Maybe<Scalars['String']>,
  live?: Maybe<Scalars['Boolean']>,
  sale_id?: Maybe<Scalars['String']>,
  sale_artwork_id?: Maybe<Scalars['String']>
};


export type MeInitialsArgs = {
  length?: Maybe<Scalars['Int']>
};


export type MeNotifications_ConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type MeRecentlyViewedArtworksArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type MeSale_RegistrationsArgs = {
  is_auction?: Maybe<Scalars['Boolean']>,
  ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  live?: Maybe<Scalars['Boolean']>,
  published?: Maybe<Scalars['Boolean']>,
  size?: Maybe<Scalars['Int']>,
  sort?: Maybe<SaleSorts>
};


export type MeSuggested_ArtistsArgs = {
  artist_id?: Maybe<Scalars['String']>,
  exclude_artists_without_forsale_artworks?: Maybe<Scalars['Boolean']>,
  exclude_artists_without_artworks?: Maybe<Scalars['Boolean']>,
  exclude_followed_artists?: Maybe<Scalars['Boolean']>,
  exclude_artist_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  page?: Maybe<Scalars['Int']>,
  size?: Maybe<Scalars['Int']>
};

/** A message in a conversation. */
export type Message = Node & {
  __typename?: 'Message',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  id: Scalars['ID'],
  /** Impulse message id. */
  impulse_id: Scalars['String'],
  /** True if message is from the user to the partner. */
  is_from_user?: Maybe<Scalars['Boolean']>,
  from_email_address?: Maybe<Scalars['String']>,
  from?: Maybe<MessageInitiator>,
  /** Full unsanitized text. */
  raw_text: Scalars['String'],
  /** Unaltered text if possible, otherwise `body`: a parsed/sanitized version from Sendgrid. */
  body?: Maybe<Scalars['String']>,
  deliveries?: Maybe<Array<Maybe<Delivery>>>,
  attachments?: Maybe<Array<Maybe<Attachment>>>,
  invoice?: Maybe<Invoice>,
  /** True if message is an invoice message */
  is_invoice?: Maybe<Scalars['Boolean']>,
  created_at?: Maybe<Scalars['String']>,
};


/** A message in a conversation. */
export type MessageCreated_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};

/** A connection to a list of items. */
export type MessageConnection = {
  __typename?: 'MessageConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<MessageEdge>>>,
};

/** An edge in a connection. */
export type MessageEdge = {
  __typename?: 'MessageEdge',
  /** The item at the end of the edge */
  node?: Maybe<Message>,
  /** A cursor for use in pagination */
  cursor: Scalars['String'],
};

/** The participant who sent the message. */
export type MessageInitiator = {
  __typename?: 'MessageInitiator',
  name?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
};

export type Metaphysics = {
  __typename?: 'Metaphysics',
  queryTracing: Scalars['Boolean'],
  heapDumps: Scalars['Boolean'],
  stitching: Scalars['Boolean'],
  stitchingConvection: Scalars['Boolean'],
  stitchingExchange: Scalars['Boolean'],
  stitchingGravity: Scalars['Boolean'],
  stitchingKaws: Scalars['Boolean'],
  environment: Scalars['String'],
};

export type MoneyInput = {
  /** amount in dollars or major unit */
  amount: Scalars['Float'],
  /** The ISO-4217 alphabetic currency code, as per https://en.wikipedia.org/wiki/ISO_4217 */
  currencyCode: Scalars['String'],
};

export type Mutation = {
  __typename?: 'Mutation',
  /** Create a bidder */
  createBidder?: Maybe<CreateBidderPayload>,
  /** Creates a bidder position */
  createBidderPosition?: Maybe<BidderPositionPayload>,
  /** Create a credit card */
  createCreditCard?: Maybe<CreditCardPayload>,
  /** Remove a credit card */
  deleteCreditCard?: Maybe<DeleteCreditCardPayload>,
  /** Follow (or unfollow) an artist */
  followArtist?: Maybe<FollowArtistPayload>,
  /** Follow (or unfollow) a profile */
  followProfile?: Maybe<FollowProfilePayload>,
  /** Follow (or unfollow) an gene */
  followGene?: Maybe<FollowGenePayload>,
  /** Follow (or unfollow) a show */
  followShow?: Maybe<FollowShowPayload>,
  /** Updating a collector profile (loyalty applicant status). */
  updateCollectorProfile?: Maybe<UpdateCollectorProfilePayload>,
  /** Update the current logged in user. */
  updateMyUserProfile?: Maybe<UpdateMyProfilePayload>,
  /** Update a conversation. */
  updateConversation?: Maybe<UpdateConversationMutationPayload>,
  /** Appending a message to a conversation thread */
  sendConversationMessage?: Maybe<SendConversationMessageMutationPayload>,
  /** Send a feedback message */
  sendFeedback?: Maybe<SendFeedbackMutationPayload>,
  /** Save (or remove) an artwork to (from) a users default collection. */
  saveArtwork?: Maybe<SaveArtworkPayload>,
  /** Mark sale as ended. */
  endSale?: Maybe<EndSalePayload>,
  /** Attach an gemini asset to a consignment submission */
  requestCredentialsForAssetUpload?: Maybe<RequestCredentialsForAssetUploadPayload>,
  /** Attach an gemini asset to a consignment submission */
  createGeminiEntryForAsset?: Maybe<CreateGeminiEntryForAssetPayload>,
  /** Create a new consignment submission using Convection */
  createConsignmentSubmission?: Maybe<CreateSubmissionMutationPayload>,
  /** Update a consignment using Convection */
  updateConsignmentSubmission?: Maybe<UpdateSubmissionMutationPayload>,
  /** Attach an gemini asset to a consignment submission */
  addAssetToConsignmentSubmission?: Maybe<AddAssetToConsignmentSubmissionPayload>,
  /** Creates an order with an artwork */
  ecommerceCreateOrderWithArtwork?: Maybe<CreateOrderWithArtworkPayload>,
  /** Creates an order with an artwork */
  ecommerceCreateOfferOrderWithArtwork?: Maybe<CreateOfferOrderWithArtworkPayload>,
  /** Sets shipping information for an order */
  ecommerceSetOrderShipping?: Maybe<SetOrderShippingPayload>,
  /** Sets payment information on an order */
  ecommerceSetOrderPayment?: Maybe<SetOrderPaymentPayload>,
  /** Approves an order with payment */
  ecommerceApproveOrder?: Maybe<ApproveOrderPayload>,
  /** Buyer accepts a submitted offer from seller */
  ecommerceBuyerAcceptOffer?: Maybe<BuyerAcceptOfferPayload>,
  /** Approves an order with payment */
  ecommerceSellerAcceptOffer?: Maybe<SellerAcceptOfferPayload>,
  /** Buyer counters sellers offer */
  ecommerceBuyerCounterOffer?: Maybe<BuyerCounterOfferPayload>,
  /** Submit pending offer */
  ecommerceSubmitPendingOffer?: Maybe<SubmitPendingOfferPayload>,
  /** Seller counters buyers offer */
  ecommerceSellerCounterOffer?: Maybe<SellerCounterOfferPayload>,
  /** Buyer rejects a submitted offer from seller */
  ecommerceBuyerRejectOffer?: Maybe<BuyerRejectOfferPayload>,
  /** Rejects an offer */
  ecommerceSellerRejectOffer?: Maybe<SellerRejectOfferPayload>,
  /** Confirms pickup for an ecommerce order */
  ecommerceConfirmPickup?: Maybe<ConfirmPickupPayload>,
  /** Fulfills an Order with one fulfillment by setting this fulfillment to all line items of this order */
  ecommerceFulfillOrderAtOnce?: Maybe<FulfillOrderAtOncePayload>,
  /** Rejects an order */
  ecommerceRejectOrder?: Maybe<RejectOrderPayload>,
  /** Submits an order */
  ecommerceSubmitOrder?: Maybe<SubmitOrderPayload>,
  /** Adds an offer to a pending order */
  ecommerceAddInitialOfferToOrder?: Maybe<AddInitialOfferToOrderPayload>,
  /** Submits an order with an offer */
  ecommerceSubmitOrderWithOffer?: Maybe<SubmitOrderWithOfferPayload>,
  /** Fix the failed payment on an offer order */
  ecommerceFixFailedPayment?: Maybe<FixFailedPaymentPayload>,
  /** Creates an order with an artwork */
  createOrderWithArtwork?: Maybe<CreateOrderWithArtworkPayload>,
  /** Sets shipping information for an order */
  setOrderShipping?: Maybe<SetOrderShippingPayload>,
  /** Sets payment information on an order */
  setOrderPayment?: Maybe<SetOrderPaymentPayload>,
  /** Approves an order with payment */
  approveOrder?: Maybe<ApproveOrderPayload>,
  /** Fulfills an Order with one fulfillment by setting this fulfillment to all line items of this order */
  fulfillOrderAtOnce?: Maybe<FulfillOrderAtOncePayload>,
  /** Rejects an order */
  rejectOrder?: Maybe<RejectOrderPayload>,
  /** Submits an order */
  submitOrder?: Maybe<SubmitOrderPayload>,
  recordArtworkView?: Maybe<RecordArtworkViewPayload>,
  commerceAddInitialOfferToOrder?: Maybe<CommerceAddInitialOfferToOrderPayload>,
  commerceApproveOrder?: Maybe<CommerceApproveOrderPayload>,
  commerceBuyerAcceptOffer?: Maybe<CommerceBuyerAcceptOfferPayload>,
  commerceBuyerCounterOffer?: Maybe<CommerceBuyerCounterOfferPayload>,
  commerceBuyerRejectOffer?: Maybe<CommerceBuyerRejectOfferPayload>,
  commerceConfirmFulfillment?: Maybe<CommerceConfirmFulfillmentPayload>,
  commerceConfirmPickup?: Maybe<CommerceConfirmPickupPayload>,
  commerceCreateOfferOrderWithArtwork?: Maybe<CommerceCreateOfferOrderWithArtworkPayload>,
  commerceCreateOrderWithArtwork?: Maybe<CommerceCreateOrderWithArtworkPayload>,
  commerceFixFailedPayment?: Maybe<CommerceFixFailedPaymentPayload>,
  /** Fulfill an order with one Fulfillment, it sets this fulfillment to each line item in order */
  commerceFulfillAtOnce?: Maybe<CommerceFulfillAtOncePayload>,
  commerceRejectOrder?: Maybe<CommerceRejectOrderPayload>,
  commerceSellerAcceptOffer?: Maybe<CommerceSellerAcceptOfferPayload>,
  commerceSellerCounterOffer?: Maybe<CommerceSellerCounterOfferPayload>,
  commerceSellerRejectOffer?: Maybe<CommerceSellerRejectOfferPayload>,
  commerceSetPayment?: Maybe<CommerceSetPaymentPayload>,
  commerceSetShipping?: Maybe<CommerceSetShippingPayload>,
  commerceSubmitOrder?: Maybe<CommerceSubmitOrderPayload>,
  commerceSubmitOrderWithOffer?: Maybe<CommerceSubmitOrderWithOfferPayload>,
  commerceSubmitPendingOffer?: Maybe<CommerceSubmitPendingOfferPayload>,
};


export type MutationCreateBidderArgs = {
  input: CreateBidderInput
};


export type MutationCreateBidderPositionArgs = {
  input: BidderPositionInput
};


export type MutationCreateCreditCardArgs = {
  input: CreditCardInput
};


export type MutationDeleteCreditCardArgs = {
  input: DeleteCreditCardInput
};


export type MutationFollowArtistArgs = {
  input: FollowArtistInput
};


export type MutationFollowProfileArgs = {
  input: FollowProfileInput
};


export type MutationFollowGeneArgs = {
  input: FollowGeneInput
};


export type MutationFollowShowArgs = {
  input: FollowShowInput
};


export type MutationUpdateCollectorProfileArgs = {
  input: UpdateCollectorProfileInput
};


export type MutationUpdateMyUserProfileArgs = {
  input: UpdateMyProfileInput
};


export type MutationUpdateConversationArgs = {
  input: UpdateConversationMutationInput
};


export type MutationSendConversationMessageArgs = {
  input: SendConversationMessageMutationInput
};


export type MutationSendFeedbackArgs = {
  input: SendFeedbackMutationInput
};


export type MutationSaveArtworkArgs = {
  input: SaveArtworkInput
};


export type MutationEndSaleArgs = {
  input: EndSaleInput
};


export type MutationRequestCredentialsForAssetUploadArgs = {
  input: RequestCredentialsForAssetUploadInput
};


export type MutationCreateGeminiEntryForAssetArgs = {
  input: CreateGeminiEntryForAssetInput
};


export type MutationCreateConsignmentSubmissionArgs = {
  input: CreateSubmissionMutationInput
};


export type MutationUpdateConsignmentSubmissionArgs = {
  input: UpdateSubmissionMutationInput
};


export type MutationAddAssetToConsignmentSubmissionArgs = {
  input: AddAssetToConsignmentSubmissionInput
};


export type MutationEcommerceCreateOrderWithArtworkArgs = {
  input: CreateOrderWithArtworkInput
};


export type MutationEcommerceCreateOfferOrderWithArtworkArgs = {
  input: CreateOfferOrderWithArtworkInput
};


export type MutationEcommerceSetOrderShippingArgs = {
  input: SetOrderShippingInput
};


export type MutationEcommerceSetOrderPaymentArgs = {
  input: SetOrderPaymentInput
};


export type MutationEcommerceApproveOrderArgs = {
  input: ApproveOrderInput
};


export type MutationEcommerceBuyerAcceptOfferArgs = {
  input: BuyerAcceptOfferInput
};


export type MutationEcommerceSellerAcceptOfferArgs = {
  input: SellerAcceptOfferInput
};


export type MutationEcommerceBuyerCounterOfferArgs = {
  input: BuyerCounterOfferInput
};


export type MutationEcommerceSubmitPendingOfferArgs = {
  input: SubmitPendingOfferInput
};


export type MutationEcommerceSellerCounterOfferArgs = {
  input: SellerCounterOfferInput
};


export type MutationEcommerceBuyerRejectOfferArgs = {
  input: BuyerRejectOfferInput
};


export type MutationEcommerceSellerRejectOfferArgs = {
  input: SellerRejectOfferInput
};


export type MutationEcommerceConfirmPickupArgs = {
  input: ConfirmPickupInput
};


export type MutationEcommerceFulfillOrderAtOnceArgs = {
  input: FulfillOrderAtOnceInput
};


export type MutationEcommerceRejectOrderArgs = {
  input: RejectOrderInput
};


export type MutationEcommerceSubmitOrderArgs = {
  input: SubmitOrderInput
};


export type MutationEcommerceAddInitialOfferToOrderArgs = {
  input: AddInitialOfferToOrderInput
};


export type MutationEcommerceSubmitOrderWithOfferArgs = {
  input: SubmitOrderWithOfferInput
};


export type MutationEcommerceFixFailedPaymentArgs = {
  input: FixFailedPaymentInput
};


export type MutationCreateOrderWithArtworkArgs = {
  input: CreateOrderWithArtworkInput
};


export type MutationSetOrderShippingArgs = {
  input: SetOrderShippingInput
};


export type MutationSetOrderPaymentArgs = {
  input: SetOrderPaymentInput
};


export type MutationApproveOrderArgs = {
  input: ApproveOrderInput
};


export type MutationFulfillOrderAtOnceArgs = {
  input: FulfillOrderAtOnceInput
};


export type MutationRejectOrderArgs = {
  input: RejectOrderInput
};


export type MutationSubmitOrderArgs = {
  input: SubmitOrderInput
};


export type MutationRecordArtworkViewArgs = {
  input: RecordArtworkViewInput
};


export type MutationCommerceAddInitialOfferToOrderArgs = {
  input: CommerceAddInitialOfferToOrderInput
};


export type MutationCommerceApproveOrderArgs = {
  input: CommerceApproveOrderInput
};


export type MutationCommerceBuyerAcceptOfferArgs = {
  input: CommerceBuyerAcceptOfferInput
};


export type MutationCommerceBuyerCounterOfferArgs = {
  input: CommerceBuyerCounterOfferInput
};


export type MutationCommerceBuyerRejectOfferArgs = {
  input: CommerceBuyerRejectOfferInput
};


export type MutationCommerceConfirmFulfillmentArgs = {
  input: CommerceConfirmFulfillmentInput
};


export type MutationCommerceConfirmPickupArgs = {
  input: CommerceConfirmPickupInput
};


export type MutationCommerceCreateOfferOrderWithArtworkArgs = {
  input: CommerceCreateOfferOrderWithArtworkInput
};


export type MutationCommerceCreateOrderWithArtworkArgs = {
  input: CommerceCreateOrderWithArtworkInput
};


export type MutationCommerceFixFailedPaymentArgs = {
  input: CommerceFixFailedPaymentInput
};


export type MutationCommerceFulfillAtOnceArgs = {
  input: CommerceFulfillAtOnceInput
};


export type MutationCommerceRejectOrderArgs = {
  input: CommerceRejectOrderInput
};


export type MutationCommerceSellerAcceptOfferArgs = {
  input: CommerceSellerAcceptOfferInput
};


export type MutationCommerceSellerCounterOfferArgs = {
  input: CommerceSellerCounterOfferInput
};


export type MutationCommerceSellerRejectOfferArgs = {
  input: CommerceSellerRejectOfferInput
};


export type MutationCommerceSetPaymentArgs = {
  input: CommerceSetPaymentInput
};


export type MutationCommerceSetShippingArgs = {
  input: CommerceSetShippingInput
};


export type MutationCommerceSubmitOrderArgs = {
  input: CommerceSubmitOrderInput
};


export type MutationCommerceSubmitOrderWithOfferArgs = {
  input: CommerceSubmitOrderWithOfferInput
};


export type MutationCommerceSubmitPendingOfferArgs = {
  input: CommerceSubmitPendingOfferInput
};

export type Near = {
  lat: Scalars['Float'],
  lng: Scalars['Float'],
  max_distance?: Maybe<Scalars['Float']>,
};

/** An object with a Globally Unique ID */
export type Node = {
  /** The ID of the object. */
  __id: Scalars['ID'],
};

export type NotificationsFeedItem = Node & {
  __typename?: 'NotificationsFeedItem',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  artists?: Maybe<Scalars['String']>,
  /** List of artworks in this notification bundle */
  artworks?: Maybe<Array<Maybe<Artwork>>>,
  date?: Maybe<Scalars['String']>,
  message?: Maybe<Scalars['String']>,
  status?: Maybe<NotificationsFeedItemStatus>,
  image?: Maybe<Image>,
};


export type NotificationsFeedItemDateArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};

/** A connection to a list of items. */
export type NotificationsFeedItemConnection = {
  __typename?: 'NotificationsFeedItemConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<NotificationsFeedItemEdge>>>,
};

/** An edge in a connection. */
export type NotificationsFeedItemEdge = {
  __typename?: 'NotificationsFeedItemEdge',
  /** The item at the end of the edge */
  node?: Maybe<NotificationsFeedItem>,
  /** A cursor for use in pagination */
  cursor: Scalars['String'],
};

export enum NotificationsFeedItemStatus {
  READ = 'READ',
  UNREAD = 'UNREAD'
}

export type Offer = {
  __typename?: 'Offer',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  id: Scalars['ID'],
  createdAt?: Maybe<Scalars['String']>,
  /** Id of the user who created the order */
  creatorId?: Maybe<Scalars['String']>,
  /** Creator of this order */
  creator?: Maybe<User>,
  /** The type of the party who made the offer */
  from?: Maybe<OrderParty>,
  /** the order participant who created the offer */
  fromParticipant?: Maybe<OrderParticipantEnum>,
  /** Offer amount in cents */
  amountCents?: Maybe<Scalars['Int']>,
  /** A formatted price with various currency formatting options. */
  amount?: Maybe<Scalars['String']>,
  /** Shipping total based on this offer in cents */
  shippingTotalCents?: Maybe<Scalars['Int']>,
  /** A formatted price with various currency formatting options. */
  shippingTotal?: Maybe<Scalars['String']>,
  /** Tax total based on this offer in cents */
  taxTotalCents?: Maybe<Scalars['Int']>,
  /** A formatted price with various currency formatting options. */
  taxTotal?: Maybe<Scalars['String']>,
  /** The order on which the offer was made */
  order?: Maybe<Order>,
  /** Total of amount, shipping and tax in cents */
  buyerTotalCents?: Maybe<Scalars['Int']>,
  /** A formatted price with various currency formatting options. */
  buyerTotal?: Maybe<Scalars['String']>,
  /** The order on which the offer was made */
  respondsTo?: Maybe<Offer>,
  submittedAt?: Maybe<Scalars['String']>,
  /** Offer note */
  note?: Maybe<Scalars['String']>,
  /** Currency code of this order */
  currencyCode?: Maybe<Scalars['String']>,
};


export type OfferCreatedAtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type OfferAmountArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


export type OfferShippingTotalArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


export type OfferTaxTotalArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


export type OfferBuyerTotalArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


export type OfferSubmittedAtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};

/** A connection to a list of items. */
export type OfferConnection = {
  __typename?: 'OfferConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<OfferEdge>>>,
};

/** An edge in a connection. */
export type OfferEdge = {
  __typename?: 'OfferEdge',
  /** The item at the end of the edge */
  node?: Maybe<Offer>,
  /** A cursor for use in pagination */
  cursor: Scalars['String'],
};

export type OfferOrder = Order & {
  __typename?: 'OfferOrder',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  id: Scalars['ID'],
  /** Order Mode */
  mode?: Maybe<OrderModeEnum>,
  /** Currency code of this order */
  currencyCode?: Maybe<Scalars['String']>,
  /** State of the order */
  state?: Maybe<Scalars['String']>,
  /** Reason for current state */
  stateReason?: Maybe<Scalars['String']>,
  /** Uniq user-friendly code of the order */
  code?: Maybe<Scalars['String']>,
  /** Order Requested Fulfillment */
  requestedFulfillment?: Maybe<RequestedFulfillment>,
  /** Item total in cents */
  itemsTotalCents?: Maybe<Scalars['Int']>,
  /** A formatted price with various currency formatting options. */
  itemsTotal?: Maybe<Scalars['String']>,
  /** Total list price in cents */
  totalListPriceCents?: Maybe<Scalars['Int']>,
  /** A formatted price with various currency formatting options. */
  totalListPrice?: Maybe<Scalars['String']>,
  /** Shipping total in cents */
  shippingTotalCents?: Maybe<Scalars['Int']>,
  /** A formatted price with various currency formatting options. */
  shippingTotal?: Maybe<Scalars['String']>,
  /** Tax total in cents */
  taxTotalCents?: Maybe<Scalars['Int']>,
  /** A formatted price with various currency formatting options. */
  taxTotal?: Maybe<Scalars['String']>,
  /** Transaction fee in cents */
  transactionFeeCents?: Maybe<Scalars['Int']>,
  /** A formatted price with various currency formatting options. */
  transactionFee?: Maybe<Scalars['String']>,
  /** Commission fee in cents */
  commissionFeeCents?: Maybe<Scalars['Int']>,
  /** A formatted price with various currency formatting options. */
  commissionFee?: Maybe<Scalars['String']>,
  /** Partner commission rate used to calculate commission fee */
  commissionRate?: Maybe<Scalars['Float']>,
  /** Partner commission rate formatted into percentage */
  displayCommissionRate?: Maybe<Scalars['String']>,
  /** Buyer total in cents */
  buyerTotalCents?: Maybe<Scalars['Int']>,
  /** A formatted price with various currency formatting options. */
  buyerTotal?: Maybe<Scalars['String']>,
  /** Seller total in cents */
  sellerTotalCents?: Maybe<Scalars['Int']>,
  /** A formatted price with various currency formatting options. */
  sellerTotal?: Maybe<Scalars['String']>,
  /** List of order line items */
  lineItems?: Maybe<OrderLineItemConnection>,
  /** Seller of this order */
  seller?: Maybe<OrderParty>,
  /** Buyer of this order */
  buyer?: Maybe<OrderParty>,
  /** Credit card on this order */
  creditCard?: Maybe<CreditCard>,
  /** Whether or not the last attempt to charge the buyer failed */
  lastTransactionFailed?: Maybe<Scalars['Boolean']>,
  lastApprovedAt?: Maybe<Scalars['String']>,
  lastSubmittedAt?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['String']>,
  stateUpdatedAt?: Maybe<Scalars['String']>,
  stateExpiresAt?: Maybe<Scalars['String']>,
  /** Buyer phone number */
  buyerPhoneNumber?: Maybe<Scalars['String']>,
  /** Current User's latest offer */
  myLastOffer?: Maybe<Offer>,
  /** Waiting for one participants response */
  awaitingResponseFrom?: Maybe<OrderParticipantEnum>,
  /** Latest offer */
  lastOffer?: Maybe<Offer>,
  /** List of submitted offers made on this order so far */
  offers?: Maybe<OfferConnection>,
};


export type OfferOrderItemsTotalArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


export type OfferOrderTotalListPriceArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


export type OfferOrderShippingTotalArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


export type OfferOrderTaxTotalArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


export type OfferOrderTransactionFeeArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


export type OfferOrderCommissionFeeArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


export type OfferOrderBuyerTotalArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


export type OfferOrderSellerTotalArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


export type OfferOrderLastApprovedAtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type OfferOrderLastSubmittedAtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type OfferOrderUpdatedAtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type OfferOrderCreatedAtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type OfferOrderStateUpdatedAtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type OfferOrderStateExpiresAtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};

export type OpeningHoursArray = {
  __typename?: 'OpeningHoursArray',
  schedules?: Maybe<Array<Maybe<FormattedDaySchedules>>>,
};

export type OpeningHoursText = {
  __typename?: 'OpeningHoursText',
  text?: Maybe<Scalars['String']>,
};

export type OpeningHoursUnion = OpeningHoursArray | OpeningHoursText;

export type Order = {
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  id: Scalars['ID'],
  /** Order Mode */
  mode?: Maybe<OrderModeEnum>,
  /** Currency code of this order */
  currencyCode?: Maybe<Scalars['String']>,
  /** State of the order */
  state?: Maybe<Scalars['String']>,
  /** Reason for current state */
  stateReason?: Maybe<Scalars['String']>,
  /** Uniq user-friendly code of the order */
  code?: Maybe<Scalars['String']>,
  /** Order Requested Fulfillment */
  requestedFulfillment?: Maybe<RequestedFulfillment>,
  /** Item total in cents */
  itemsTotalCents?: Maybe<Scalars['Int']>,
  /** A formatted price with various currency formatting options. */
  itemsTotal?: Maybe<Scalars['String']>,
  /** Total list price in cents */
  totalListPriceCents?: Maybe<Scalars['Int']>,
  /** A formatted price with various currency formatting options. */
  totalListPrice?: Maybe<Scalars['String']>,
  /** Shipping total in cents */
  shippingTotalCents?: Maybe<Scalars['Int']>,
  /** A formatted price with various currency formatting options. */
  shippingTotal?: Maybe<Scalars['String']>,
  /** Tax total in cents */
  taxTotalCents?: Maybe<Scalars['Int']>,
  /** A formatted price with various currency formatting options. */
  taxTotal?: Maybe<Scalars['String']>,
  /** Transaction fee in cents */
  transactionFeeCents?: Maybe<Scalars['Int']>,
  /** A formatted price with various currency formatting options. */
  transactionFee?: Maybe<Scalars['String']>,
  /** Commission fee in cents */
  commissionFeeCents?: Maybe<Scalars['Int']>,
  /** A formatted price with various currency formatting options. */
  commissionFee?: Maybe<Scalars['String']>,
  /** Partner commission rate used to calculate commission fee */
  commissionRate?: Maybe<Scalars['Float']>,
  /** Partner commission rate formatted into percentage */
  displayCommissionRate?: Maybe<Scalars['String']>,
  /** Buyer total in cents */
  buyerTotalCents?: Maybe<Scalars['Int']>,
  /** A formatted price with various currency formatting options. */
  buyerTotal?: Maybe<Scalars['String']>,
  /** Seller total in cents */
  sellerTotalCents?: Maybe<Scalars['Int']>,
  /** A formatted price with various currency formatting options. */
  sellerTotal?: Maybe<Scalars['String']>,
  /** List of order line items */
  lineItems?: Maybe<OrderLineItemConnection>,
  /** Seller of this order */
  seller?: Maybe<OrderParty>,
  /** Buyer of this order */
  buyer?: Maybe<OrderParty>,
  /** Credit card on this order */
  creditCard?: Maybe<CreditCard>,
  /** Whether or not the last attempt to charge the buyer failed */
  lastTransactionFailed?: Maybe<Scalars['Boolean']>,
  lastApprovedAt?: Maybe<Scalars['String']>,
  lastSubmittedAt?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['String']>,
  stateUpdatedAt?: Maybe<Scalars['String']>,
  stateExpiresAt?: Maybe<Scalars['String']>,
  /** Buyer phone number */
  buyerPhoneNumber?: Maybe<Scalars['String']>,
};


export type OrderItemsTotalArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


export type OrderTotalListPriceArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


export type OrderShippingTotalArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


export type OrderTaxTotalArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


export type OrderTransactionFeeArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


export type OrderCommissionFeeArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


export type OrderBuyerTotalArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


export type OrderSellerTotalArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


export type OrderLastApprovedAtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type OrderLastSubmittedAtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type OrderUpdatedAtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type OrderCreatedAtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type OrderStateUpdatedAtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type OrderStateExpiresAtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};

/** A connection to a list of items. */
export type OrderConnection = {
  __typename?: 'OrderConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<OrderEdge>>>,
  totalCount?: Maybe<Scalars['Int']>,
  totalPages?: Maybe<Scalars['Int']>,
  pageCursors?: Maybe<PageCursors>,
};

/** An edge in a connection. */
export type OrderEdge = {
  __typename?: 'OrderEdge',
  /** The item at the end of the edge */
  node?: Maybe<Order>,
  /** A cursor for use in pagination */
  cursor: Scalars['String'],
};

export type OrderedSet = {
  __typename?: 'OrderedSet',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A type-specific ID. */
  id: Scalars['ID'],
  cached?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  key?: Maybe<Scalars['String']>,
  item_type?: Maybe<Scalars['String']>,
  items?: Maybe<Array<Maybe<Item>>>,
  name?: Maybe<Scalars['String']>,
};

export type OrderFulfillment = {
  __typename?: 'OrderFulfillment',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  id: Scalars['ID'],
  /** Fulfillment Courier */
  courier?: Maybe<Scalars['String']>,
  /** Courier's tracking id */
  trackingId?: Maybe<Scalars['String']>,
  estimatedDelivery?: Maybe<Scalars['String']>,
};


export type OrderFulfillmentEstimatedDeliveryArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};

/** A connection to a list of items. */
export type OrderFulfillmentConnection = {
  __typename?: 'OrderFulfillmentConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<OrderFulfillmentEdge>>>,
};

/** An edge in a connection. */
export type OrderFulfillmentEdge = {
  __typename?: 'OrderFulfillmentEdge',
  /** The item at the end of the edge */
  node?: Maybe<OrderFulfillment>,
  /** A cursor for use in pagination */
  cursor: Scalars['String'],
};

export enum OrderFulfillmentType {
  SHIP = 'SHIP',
  PICKUP = 'PICKUP'
}

export type OrderLineItem = {
  __typename?: 'OrderLineItem',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  id: Scalars['ID'],
  /** Artwork that is being ordered */
  artwork?: Maybe<Artwork>,
  /** Artwork version that is being ordered */
  artworkVersion?: Maybe<ArtworkVersion>,
  /** ID of the selected Edition set from the artwork */
  editionSetId?: Maybe<Scalars['String']>,
  /** Unit price in cents */
  priceCents?: Maybe<Scalars['Int']>,
  /** A formatted price with various currency formatting options. */
  price?: Maybe<Scalars['String']>,
  /** Unit list price in cents */
  listPriceCents?: Maybe<Scalars['Int']>,
  /** A formatted price with various currency formatting options. */
  listPrice?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['String']>,
  /** Quantity of items in this line item */
  quantity?: Maybe<Scalars['Int']>,
  /** List of order line items */
  fulfillments?: Maybe<OrderFulfillmentConnection>,
};


export type OrderLineItemPriceArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


export type OrderLineItemListPriceArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};


export type OrderLineItemUpdatedAtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type OrderLineItemCreatedAtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};

/** A connection to a list of items. */
export type OrderLineItemConnection = {
  __typename?: 'OrderLineItemConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<OrderLineItemEdge>>>,
};

/** An edge in a connection. */
export type OrderLineItemEdge = {
  __typename?: 'OrderLineItemEdge',
  /** The item at the end of the edge */
  node?: Maybe<OrderLineItem>,
  /** A cursor for use in pagination */
  cursor: Scalars['String'],
};

export enum OrderModeEnum {
  /** Order initiated by Buy */
  BUY = 'BUY',
  /** Order initiated by Offer */
  OFFER = 'OFFER'
}

export type OrderOrFailureUnionType = OrderWithMutationSuccess | OrderWithMutationFailure;

export enum OrderParticipantEnum {
  /** Participant on the buyer side */
  BUYER = 'BUYER',
  /** Participant on the seller side */
  SELLER = 'SELLER'
}

export type OrderParty = Partner | User;

export enum OrdersSortMethodType {
  /** Sort by the timestamp the order was last updated in ascending order */
  UPDATED_AT_ASC = 'UPDATED_AT_ASC',
  /** Sort by the timestamp the order was last updated in descending order */
  UPDATED_AT_DESC = 'UPDATED_AT_DESC',
  /** Sort by the timestamp the state of order was last updated in ascending order */
  STATE_UPDATED_AT_ASC = 'STATE_UPDATED_AT_ASC',
  /** Sort by the timestamp the state of order was last updated in descending order */
  STATE_UPDATED_AT_DESC = 'STATE_UPDATED_AT_DESC',
  /** Sort by the timestamp the state of the order expires at in ascending order */
  STATE_EXPIRES_AT_ASC = 'STATE_EXPIRES_AT_ASC',
  /** Sort by the timestamp the state of the order expires at in a descending order */
  STATE_EXPIRES_AT_DESC = 'STATE_EXPIRES_AT_DESC'
}

export type OrderWithMutationFailure = {
  __typename?: 'OrderWithMutationFailure',
  error?: Maybe<EcommerceError>,
};

export type OrderWithMutationSuccess = {
  __typename?: 'OrderWithMutationSuccess',
  order?: Maybe<Order>,
};

export type Organizer = {
  __typename?: 'organizer',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A slug ID. */
  id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  _id: Scalars['ID'],
  profile_id?: Maybe<Scalars['ID']>,
  profile?: Maybe<Profile>,
  website?: Maybe<Scalars['String']>,
};

export type PageCursor = {
  __typename?: 'PageCursor',
  cursor: Scalars['String'],
  page: Scalars['Int'],
  isCurrent: Scalars['Boolean'],
};

export type PageCursors = {
  __typename?: 'PageCursors',
  /** Optional, may be included in `around` (if current page is near the beginning). */
  first?: Maybe<PageCursor>,
  /** Optional, may be included in `around` (if current page is near the end). */
  last?: Maybe<PageCursor>,
  /** Always includes current page */
  around: Array<PageCursor>,
  previous?: Maybe<PageCursor>,
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo',
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>,
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'],
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'],
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>,
};

export type Partner = Node & {
  __typename?: 'Partner',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A slug ID. */
  id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  _id: Scalars['ID'],
  cached?: Maybe<Scalars['Int']>,
  artworks?: Maybe<Array<Maybe<Artwork>>>,
  /** A connection of artworks from a Partner. */
  artworksConnection?: Maybe<ArtworkConnection>,
  categories?: Maybe<Array<Maybe<Category>>>,
  collecting_institution?: Maybe<Scalars['String']>,
  contact_message?: Maybe<Scalars['String']>,
  counts?: Maybe<PartnerCounts>,
  default_profile_id?: Maybe<Scalars['String']>,
  has_fair_partnership?: Maybe<Scalars['Boolean']>,
  href?: Maybe<Scalars['String']>,
  initials?: Maybe<Scalars['String']>,
  is_default_profile_public?: Maybe<Scalars['Boolean']>,
  is_limited_fair_partner?: Maybe<Scalars['Boolean']>,
  is_linkable?: Maybe<Scalars['Boolean']>,
  is_pre_qualify?: Maybe<Scalars['Boolean']>,
  locations?: Maybe<Array<Maybe<Location>>>,
  name?: Maybe<Scalars['String']>,
  profile?: Maybe<Profile>,
  shows?: Maybe<Array<Maybe<PartnerShow>>>,
  type?: Maybe<Scalars['String']>,
  /** The gallery partner's web address */
  website?: Maybe<Scalars['String']>,
  analytics?: Maybe<AnalyticsPartnerStats>,
};


export type PartnerArtworksArgs = {
  for_sale?: Maybe<Scalars['Boolean']>,
  sort?: Maybe<ArtworkSorts>,
  exclude?: Maybe<Array<Maybe<Scalars['String']>>>,
  size?: Maybe<Scalars['Int']>
};


export type PartnerArtworksConnectionArgs = {
  for_sale?: Maybe<Scalars['Boolean']>,
  sort?: Maybe<ArtworkSorts>,
  exclude?: Maybe<Array<Maybe<Scalars['String']>>>,
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type PartnerInitialsArgs = {
  length?: Maybe<Scalars['Int']>
};


export type PartnerLocationsArgs = {
  size?: Maybe<Scalars['Int']>
};


export type PartnerShowsArgs = {
  at_a_fair?: Maybe<Scalars['Boolean']>,
  displayable?: Maybe<Scalars['Boolean']>,
  fair_id?: Maybe<Scalars['String']>,
  featured?: Maybe<Scalars['Boolean']>,
  ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  near?: Maybe<Near>,
  size?: Maybe<Scalars['Int']>,
  sort?: Maybe<PartnerShowSorts>,
  status?: Maybe<EventStatus>
};

export type PartnerArtist = {
  __typename?: 'PartnerArtist',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A type-specific ID. */
  id: Scalars['ID'],
  artist?: Maybe<Artist>,
  biography?: Maybe<Scalars['String']>,
  counts?: Maybe<PartnerArtistCounts>,
  is_display_on_partner_profile?: Maybe<Scalars['Boolean']>,
  is_represented_by?: Maybe<Scalars['Boolean']>,
  is_use_default_biography?: Maybe<Scalars['Boolean']>,
  partner?: Maybe<Partner>,
  sortable_id?: Maybe<Scalars['String']>,
};

/** A connection to a list of items. */
export type PartnerArtistConnection = {
  __typename?: 'PartnerArtistConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PartnerArtistEdge>>>,
};

export type PartnerArtistCounts = {
  __typename?: 'PartnerArtistCounts',
  artworks?: Maybe<Scalars['FormattedNumber']>,
  for_sale_artworks?: Maybe<Scalars['FormattedNumber']>,
};


export type PartnerArtistCountsArtworksArgs = {
  format?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>
};


export type PartnerArtistCountsFor_Sale_ArtworksArgs = {
  format?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>
};

/** An edge in a connection. */
export type PartnerArtistEdge = {
  __typename?: 'PartnerArtistEdge',
  /** The item at the end of the edge */
  node?: Maybe<Partner>,
  /** A cursor for use in pagination */
  cursor: Scalars['String'],
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A type-specific ID. */
  id: Scalars['ID'],
  artist?: Maybe<Artist>,
  biography?: Maybe<Scalars['String']>,
  counts?: Maybe<PartnerArtistCounts>,
  is_display_on_partner_profile?: Maybe<Scalars['Boolean']>,
  is_represented_by?: Maybe<Scalars['Boolean']>,
  is_use_default_biography?: Maybe<Scalars['Boolean']>,
  partner?: Maybe<Partner>,
  sortable_id?: Maybe<Scalars['String']>,
};

export type PartnerArtworkGrid = ArtworkContextGrid & {
  __typename?: 'PartnerArtworkGrid',
  title?: Maybe<Scalars['String']>,
  ctaTitle?: Maybe<Scalars['String']>,
  ctaHref?: Maybe<Scalars['String']>,
  artworks?: Maybe<ArtworkConnection>,
};


export type PartnerArtworkGridArtworksArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};

export type PartnerCategory = {
  __typename?: 'PartnerCategory',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A slug ID. */
  id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  _id: Scalars['ID'],
  cached?: Maybe<Scalars['Int']>,
  category_type?: Maybe<CategoryType>,
  name?: Maybe<Scalars['String']>,
  partners?: Maybe<Array<Maybe<Partner>>>,
};


export type PartnerCategoryPartnersArgs = {
  default_profile_public?: Maybe<Scalars['Boolean']>,
  eligible_for_carousel?: Maybe<Scalars['Boolean']>,
  eligible_for_listing?: Maybe<Scalars['Boolean']>,
  eligible_for_primary_bucket?: Maybe<Scalars['Boolean']>,
  eligible_for_secondary_bucket?: Maybe<Scalars['Boolean']>,
  ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  has_full_profile?: Maybe<Scalars['Boolean']>,
  near?: Maybe<Scalars['String']>,
  page?: Maybe<Scalars['Int']>,
  partner_categories?: Maybe<Array<Maybe<Scalars['String']>>>,
  size?: Maybe<Scalars['Int']>,
  sort?: Maybe<PartnersSortType>,
  term?: Maybe<Scalars['String']>,
  type?: Maybe<Array<Maybe<PartnerClassification>>>
};

export enum PartnerClassification {
  AUCTION = 'AUCTION',
  BRAND = 'BRAND',
  DEMO = 'DEMO',
  GALLERY = 'GALLERY',
  INSTITUTION = 'INSTITUTION',
  INSTITUTIONAL_SELLER = 'INSTITUTIONAL_SELLER',
  PRIVATE_COLLECTOR = 'PRIVATE_COLLECTOR',
  PRIVATE_DEALER = 'PRIVATE_DEALER'
}

export type PartnerCounts = {
  __typename?: 'PartnerCounts',
  artworks?: Maybe<Scalars['FormattedNumber']>,
  artists?: Maybe<Scalars['FormattedNumber']>,
  partner_artists?: Maybe<Scalars['FormattedNumber']>,
  eligible_artworks?: Maybe<Scalars['FormattedNumber']>,
  published_for_sale_artworks?: Maybe<Scalars['FormattedNumber']>,
  published_not_for_sale_artworks?: Maybe<Scalars['FormattedNumber']>,
  shows?: Maybe<Scalars['FormattedNumber']>,
  displayable_shows?: Maybe<Scalars['FormattedNumber']>,
  current_displayable_shows?: Maybe<Scalars['FormattedNumber']>,
  artist_documents?: Maybe<Scalars['FormattedNumber']>,
  partner_show_documents?: Maybe<Scalars['FormattedNumber']>,
};


export type PartnerCountsArtworksArgs = {
  format?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>
};


export type PartnerCountsArtistsArgs = {
  format?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>
};


export type PartnerCountsPartner_ArtistsArgs = {
  format?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>
};


export type PartnerCountsEligible_ArtworksArgs = {
  format?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>
};


export type PartnerCountsPublished_For_Sale_ArtworksArgs = {
  format?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>
};


export type PartnerCountsPublished_Not_For_Sale_ArtworksArgs = {
  format?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>
};


export type PartnerCountsShowsArgs = {
  format?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>
};


export type PartnerCountsDisplayable_ShowsArgs = {
  format?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>
};


export type PartnerCountsCurrent_Displayable_ShowsArgs = {
  format?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>
};


export type PartnerCountsArtist_DocumentsArgs = {
  format?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>
};


export type PartnerCountsPartner_Show_DocumentsArgs = {
  format?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>
};

export enum PartnersAggregation {
  CATEGORY = 'CATEGORY',
  LOCATION = 'LOCATION',
  TOTAL = 'TOTAL'
}

/** The results for one of the requested aggregations */
export type PartnersAggregationResults = {
  __typename?: 'PartnersAggregationResults',
  counts?: Maybe<Array<Maybe<AggregationCount>>>,
  slice?: Maybe<PartnersAggregation>,
};

export type PartnerShow = Node & {
  __typename?: 'PartnerShow',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A slug ID. */
  id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  _id: Scalars['ID'],
  cached?: Maybe<Scalars['Int']>,
  artists?: Maybe<Array<Maybe<Artist>>>,
  /** The artworks featured in the show */
  artworks?: Maybe<Array<Maybe<Artwork>>>,
  /** A connection of artworks featured in the show */
  artworksConnection?: Maybe<ArtworkConnection>,
  counts?: Maybe<PartnerShowCounts>,
  cover_image?: Maybe<Image>,
  created_at?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  displayable?: Maybe<Scalars['Boolean']>,
  end_at?: Maybe<Scalars['String']>,
  events?: Maybe<Array<Maybe<PartnerShowEventType>>>,
  /** A formatted description of the start to end dates */
  exhibition_period?: Maybe<Scalars['String']>,
  fair?: Maybe<Fair>,
  href?: Maybe<Scalars['String']>,
  images?: Maybe<Array<Maybe<Image>>>,
  /** Flag showing if show has any location. */
  has_location?: Maybe<Scalars['Boolean']>,
  /** Gravity doesn’t expose the `active` flag. Temporarily re-state its logic. */
  is_active?: Maybe<Scalars['Boolean']>,
  is_displayable?: Maybe<Scalars['Boolean']>,
  is_fair_booth?: Maybe<Scalars['Boolean']>,
  kind?: Maybe<Scalars['String']>,
  location?: Maybe<Location>,
  meta_image?: Maybe<Image>,
  /** The exhibition title */
  name?: Maybe<Scalars['String']>,
  partner?: Maybe<Partner>,
  press_release?: Maybe<Scalars['String']>,
  start_at?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  /** A formatted update on upcoming status changes */
  status_update?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
};


export type PartnerShowArtworksArgs = {
  exclude?: Maybe<Array<Maybe<Scalars['String']>>>,
  for_sale?: Maybe<Scalars['Boolean']>,
  published?: Maybe<Scalars['Boolean']>,
  all?: Maybe<Scalars['Boolean']>,
  page?: Maybe<Scalars['Int']>,
  size?: Maybe<Scalars['Int']>
};


export type PartnerShowArtworksConnectionArgs = {
  exclude?: Maybe<Array<Maybe<Scalars['String']>>>,
  for_sale?: Maybe<Scalars['Boolean']>,
  published?: Maybe<Scalars['Boolean']>,
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type PartnerShowCreated_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type PartnerShowEnd_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type PartnerShowImagesArgs = {
  size?: Maybe<Scalars['Int']>,
  default?: Maybe<Scalars['Boolean']>,
  page?: Maybe<Scalars['Int']>
};


export type PartnerShowPress_ReleaseArgs = {
  format?: Maybe<Format>
};


export type PartnerShowStart_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type PartnerShowStatus_UpdateArgs = {
  max_days?: Maybe<Scalars['Int']>
};

export type PartnerShowCounts = {
  __typename?: 'PartnerShowCounts',
  artworks?: Maybe<Scalars['Int']>,
  eligible_artworks?: Maybe<Scalars['FormattedNumber']>,
};


export type PartnerShowCountsArtworksArgs = {
  artist_id?: Maybe<Scalars['String']>
};


export type PartnerShowCountsEligible_ArtworksArgs = {
  format?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>
};

export type PartnerShowEventType = {
  __typename?: 'PartnerShowEventType',
  event_type?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  start_at?: Maybe<Scalars['String']>,
  end_at?: Maybe<Scalars['String']>,
  /** A formatted description of the dates with hours */
  dateTimeRange?: Maybe<Scalars['String']>,
  /** A formatted description of the start to end dates */
  exhibitionPeriod?: Maybe<Scalars['String']>,
};


export type PartnerShowEventTypeStart_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type PartnerShowEventTypeEnd_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};

export enum PartnerShowPartnerType {
  GALLERY = 'GALLERY',
  MUSEUM = 'MUSEUM'
}

export enum PartnerShowSorts {
  created_at_asc = 'created_at_asc',
  created_at_desc = 'created_at_desc',
  end_at_asc = 'end_at_asc',
  end_at_desc = 'end_at_desc',
  name_asc = 'name_asc',
  name_desc = 'name_desc',
  publish_at_asc = 'publish_at_asc',
  publish_at_desc = 'publish_at_desc',
  start_at_asc = 'start_at_asc',
  start_at_desc = 'start_at_desc',
  CREATED_AT_ASC = 'CREATED_AT_ASC',
  CREATED_AT_DESC = 'CREATED_AT_DESC',
  END_AT_ASC = 'END_AT_ASC',
  END_AT_DESC = 'END_AT_DESC',
  NAME_ASC = 'NAME_ASC',
  NAME_DESC = 'NAME_DESC',
  PUBLISH_AT_ASC = 'PUBLISH_AT_ASC',
  PUBLISH_AT_DESC = 'PUBLISH_AT_DESC',
  START_AT_ASC = 'START_AT_ASC',
  START_AT_DESC = 'START_AT_DESC',
  PARTNER_ASC = 'PARTNER_ASC'
}

export enum PartnersSortType {
  CREATED_AT_ASC = 'CREATED_AT_ASC',
  CREATED_AT_DESC = 'CREATED_AT_DESC',
  SORTABLE_ID_ASC = 'SORTABLE_ID_ASC',
  SORTABLE_ID_DESC = 'SORTABLE_ID_DESC',
  RELATIVE_SIZE_ASC = 'RELATIVE_SIZE_ASC',
  RELATIVE_SIZE_DESC = 'RELATIVE_SIZE_DESC',
  PUBLISHED_AT_DESC = 'PUBLISHED_AT_DESC',
  RANDOM_SCORE_DESC = 'RANDOM_SCORE_DESC'
}

export type PartnerTypes = Partner | ExternalPartner;

export type Pickup = {
  __typename?: 'Pickup',
  /** It will always be PICKUP */
  fulfillmentType?: Maybe<Scalars['String']>,
};

export type PopularArtists = {
  __typename?: 'PopularArtists',
  artists?: Maybe<Array<Maybe<Artist>>>,
};

export type PriceCents = {
  __typename?: 'PriceCents',
  min?: Maybe<Scalars['Int']>,
  max?: Maybe<Scalars['Int']>,
  exact?: Maybe<Scalars['Boolean']>,
};

export type PriceRange = {
  __typename?: 'PriceRange',
  minPriceCents: Scalars['Int'],
  maxPriceCents: Scalars['Int'],
};

export type Profile = {
  __typename?: 'Profile',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A slug ID. */
  id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  _id: Scalars['ID'],
  cached?: Maybe<Scalars['Int']>,
  bio?: Maybe<Scalars['String']>,
  counts?: Maybe<ProfileCounts>,
  href?: Maybe<Scalars['String']>,
  icon?: Maybe<Image>,
  image?: Maybe<Image>,
  initials?: Maybe<Scalars['String']>,
  is_followed?: Maybe<Scalars['Boolean']>,
  is_published?: Maybe<Scalars['Boolean']>,
  name?: Maybe<Scalars['String']>,
  is_publically_visible?: Maybe<Scalars['Boolean']>,
};


export type ProfileInitialsArgs = {
  length?: Maybe<Scalars['Int']>
};

export type ProfileCounts = {
  __typename?: 'ProfileCounts',
  follows?: Maybe<Scalars['FormattedNumber']>,
};


export type ProfileCountsFollowsArgs = {
  format?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>
};

export type Query = {
  __typename?: 'Query',
  /** List of all artwork attribution classes */
  artworkAttributionClasses?: Maybe<Array<Maybe<AttributionClass>>>,
  /** An Article */
  article?: Maybe<Article>,
  /** A list of Articles */
  articles?: Maybe<Array<Maybe<Article>>>,
  /** An Artwork */
  artwork?: Maybe<Artwork>,
  /** A subset of the metadata for an artwork at a specific time */
  artworkVersion?: Maybe<ArtworkVersion>,
  /** A list of Artworks */
  artworks?: Maybe<Array<Maybe<Artwork>>>,
  /** An Artist */
  artist?: Maybe<Artist>,
  /** A list of Artists */
  artists?: Maybe<Array<Maybe<Artist>>>,
  /** Creates, and authorizes, a JWT custom for Causality */
  causality_jwt?: Maybe<Scalars['String']>,
  /** A city-based entry point for local discovery */
  city?: Maybe<City>,
  collection?: Maybe<Collection>,
  /** A user's credit card */
  credit_card?: Maybe<CreditCard>,
  /** An External Partner not on the platform */
  external_partner?: Maybe<ExternalPartner>,
  /** A Fair */
  fair?: Maybe<Fair>,
  /** A list of Fairs */
  fairs?: Maybe<Array<Maybe<Fair>>>,
  /** Partners Elastic Search results */
  filter_partners?: Maybe<FilterPartners>,
  /** Artworks Elastic Search results */
  filter_artworks?: Maybe<FilterArtworks>,
  /** Sale Artworks Elastic Search results */
  filter_sale_artworks?: Maybe<FilterSaleArtworks>,
  gene?: Maybe<Gene>,
  /** A list of Genes */
  genes?: Maybe<Array<Maybe<Gene>>>,
  /** List of curated genes with custom images */
  suggested_genes?: Maybe<Array<Maybe<Gene>>>,
  /** A list of Gene Families */
  gene_families?: Maybe<GeneFamilyConnection>,
  gene_family?: Maybe<GeneFamily>,
  /** Home screen content */
  home_page?: Maybe<HomePage>,
  /** A Search for Artists */
  match_artist?: Maybe<Array<Maybe<Artist>>>,
  /** A Search for Genes */
  match_gene?: Maybe<Array<Maybe<Gene>>>,
  me?: Maybe<Me>,
  /** Fetches an object given its Globally Unique ID */
  node?: Maybe<Node>,
  /** An OrderedSet */
  ordered_set?: Maybe<OrderedSet>,
  /** A collection of OrderedSets */
  ordered_sets?: Maybe<Array<Maybe<OrderedSet>>>,
  /** A Partner */
  partner?: Maybe<Partner>,
  /** A list of PartnerCategories */
  partner_categories?: Maybe<Array<Maybe<PartnerCategory>>>,
  /** A PartnerCategory */
  partner_category?: Maybe<PartnerCategory>,
  /** A Partner Show */
  partner_show?: Maybe<PartnerShow>,
  /** A list of PartnerShows */
  partner_shows?: Maybe<Array<Maybe<PartnerShow>>>,
  /** A list of Partners */
  partners?: Maybe<Array<Maybe<Partner>>>,
  /** A Profile */
  profile?: Maybe<Profile>,
  /** A Sale */
  sale?: Maybe<Sale>,
  /** A Sale Artwork */
  sale_artwork?: Maybe<SaleArtwork>,
  /** Sale Artworks search results */
  sale_artworks?: Maybe<SaleArtworksConnection>,
  /** A list of Sales */
  sales?: Maybe<Array<Maybe<Sale>>>,
  /** Global search */
  search?: Maybe<SearchableConnection>,
  /** The schema for difference micro-service settings */
  services?: Maybe<Services>,
  /** A Show */
  show?: Maybe<Show>,
  status?: Maybe<Status>,
  /** Fields related to internal systems. */
  system?: Maybe<System>,
  tag?: Maybe<Tag>,
  /** Trending artists */
  trending_artists?: Maybe<TrendingArtists>,
  user?: Maybe<User>,
  /** A list of Users */
  users?: Maybe<Array<Maybe<User>>>,
  /** Popular artists */
  popular_artists?: Maybe<PopularArtists>,
  /** Returns a single Order */
  ecommerceOrder?: Maybe<Order>,
  /** Returns list of orders */
  ecommerceOrders?: Maybe<OrderConnection>,
  /** Returns a single Order */
  order?: Maybe<Order>,
  /** Returns list of orders */
  orders?: Maybe<OrderConnection>,
  /** A wildcard used to support complex root queries in Relay */
  viewer?: Maybe<Viewer>,
  /** Autocomplete resolvers. */
  _unused_gravity_matchPartners?: Maybe<Array<DoNotUseThisPartner>>,
  /** Autocomplete resolvers. */
  _unused_gravity_match_partners?: Maybe<Array<DoNotUseThisPartner>>,
  /** Find partners by IDs */
  _unused_gravity_partners?: Maybe<Array<DoNotUseThisPartner>>,
  /** Find list of competing orders */
  commerceCompetingOrders?: Maybe<CommerceOrderConnectionWithTotalCount>,
  commerceLineItems?: Maybe<CommerceLineItemConnection>,
  /** Find an order by ID */
  commerceOrder?: Maybe<CommerceOrder>,
  /** Find list of orders */
  commerceOrders?: Maybe<CommerceOrderConnectionWithTotalCount>,
  /** Find PartnerStats */
  analyticsPartnerStats?: Maybe<AnalyticsPartnerStats>,
  marketingCollections: Array<MarketingCollection>,
  marketingCategories: Array<MarketingCollectionCategory>,
  marketingCollection?: Maybe<MarketingCollection>,
  marketingHubCollections: Array<MarketingCollection>,
};


export type QueryArticleArgs = {
  id: Scalars['String']
};


export type QueryArticlesArgs = {
  auction_id?: Maybe<Scalars['String']>,
  published?: Maybe<Scalars['Boolean']>,
  show_id?: Maybe<Scalars['String']>,
  sort?: Maybe<ArticleSorts>
};


export type QueryArtworkArgs = {
  id: Scalars['String']
};


export type QueryArtworkVersionArgs = {
  id: Scalars['String']
};


export type QueryArtworksArgs = {
  ids?: Maybe<Array<Maybe<Scalars['String']>>>
};


export type QueryArtistArgs = {
  id: Scalars['String']
};


export type QueryArtistsArgs = {
  ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  slugs?: Maybe<Array<Maybe<Scalars['String']>>>,
  page?: Maybe<Scalars['Int']>,
  size?: Maybe<Scalars['Int']>,
  sort?: Maybe<ArtistSorts>
};


export type QueryCausality_JwtArgs = {
  role?: Maybe<Role>,
  sale_id: Scalars['String']
};


export type QueryCityArgs = {
  slug?: Maybe<Scalars['String']>,
  near?: Maybe<Near>
};


export type QueryCollectionArgs = {
  id: Scalars['String']
};


export type QueryCredit_CardArgs = {
  id: Scalars['String']
};


export type QueryExternal_PartnerArgs = {
  id: Scalars['String']
};


export type QueryFairArgs = {
  id: Scalars['String']
};


export type QueryFairsArgs = {
  fair_organizer_id?: Maybe<Scalars['String']>,
  has_full_feature?: Maybe<Scalars['Boolean']>,
  has_homepage_section?: Maybe<Scalars['Boolean']>,
  has_listing?: Maybe<Scalars['Boolean']>,
  ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  near?: Maybe<Near>,
  page?: Maybe<Scalars['Int']>,
  size?: Maybe<Scalars['Int']>,
  sort?: Maybe<FairSorts>,
  status?: Maybe<EventStatus>
};


export type QueryFilter_PartnersArgs = {
  default_profile_public?: Maybe<Scalars['Boolean']>,
  eligible_for_carousel?: Maybe<Scalars['Boolean']>,
  eligible_for_listing?: Maybe<Scalars['Boolean']>,
  eligible_for_primary_bucket?: Maybe<Scalars['Boolean']>,
  eligible_for_secondary_bucket?: Maybe<Scalars['Boolean']>,
  ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  has_full_profile?: Maybe<Scalars['Boolean']>,
  near?: Maybe<Scalars['String']>,
  page?: Maybe<Scalars['Int']>,
  partner_categories?: Maybe<Array<Maybe<Scalars['String']>>>,
  size?: Maybe<Scalars['Int']>,
  sort?: Maybe<PartnersSortType>,
  term?: Maybe<Scalars['String']>,
  type?: Maybe<Array<Maybe<PartnerClassification>>>,
  aggregations: Array<Maybe<PartnersAggregation>>
};


export type QueryFilter_ArtworksArgs = {
  acquireable?: Maybe<Scalars['Boolean']>,
  offerable?: Maybe<Scalars['Boolean']>,
  aggregation_partner_cities?: Maybe<Array<Maybe<Scalars['String']>>>,
  aggregations?: Maybe<Array<Maybe<ArtworkAggregation>>>,
  artist_id?: Maybe<Scalars['String']>,
  artist_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  at_auction?: Maybe<Scalars['Boolean']>,
  attribution_class?: Maybe<Array<Maybe<Scalars['String']>>>,
  color?: Maybe<Scalars['String']>,
  dimension_range?: Maybe<Scalars['String']>,
  extra_aggregation_gene_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  include_artworks_by_followed_artists?: Maybe<Scalars['Boolean']>,
  include_medium_filter_in_aggregation?: Maybe<Scalars['Boolean']>,
  inquireable_only?: Maybe<Scalars['Boolean']>,
  for_sale?: Maybe<Scalars['Boolean']>,
  gene_id?: Maybe<Scalars['String']>,
  gene_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  height?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['String']>,
  marketable?: Maybe<Scalars['Boolean']>,
  medium?: Maybe<Scalars['String']>,
  period?: Maybe<Scalars['String']>,
  periods?: Maybe<Array<Maybe<Scalars['String']>>>,
  major_periods?: Maybe<Array<Maybe<Scalars['String']>>>,
  partner_id?: Maybe<Scalars['ID']>,
  partner_cities?: Maybe<Array<Maybe<Scalars['String']>>>,
  price_range?: Maybe<Scalars['String']>,
  page?: Maybe<Scalars['Int']>,
  sale_id?: Maybe<Scalars['ID']>,
  size?: Maybe<Scalars['Int']>,
  sort?: Maybe<Scalars['String']>,
  tag_id?: Maybe<Scalars['String']>,
  keyword?: Maybe<Scalars['String']>,
  keyword_match_exact?: Maybe<Scalars['Boolean']>
};


export type QueryFilter_Sale_ArtworksArgs = {
  aggregations?: Maybe<Array<Maybe<SaleArtworkAggregation>>>,
  artist_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  include_artworks_by_followed_artists?: Maybe<Scalars['Boolean']>,
  live_sale?: Maybe<Scalars['Boolean']>,
  is_auction?: Maybe<Scalars['Boolean']>,
  gene_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  estimate_range?: Maybe<Scalars['String']>,
  page?: Maybe<Scalars['Int']>,
  sale_id?: Maybe<Scalars['ID']>,
  size?: Maybe<Scalars['Int']>,
  sort?: Maybe<Scalars['String']>
};


export type QueryGeneArgs = {
  id: Scalars['String']
};


export type QueryGenesArgs = {
  size?: Maybe<Scalars['Int']>,
  slugs?: Maybe<Array<Maybe<Scalars['String']>>>
};


export type QueryGene_FamiliesArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryMatch_ArtistArgs = {
  term: Scalars['String'],
  size?: Maybe<Scalars['Int']>,
  page?: Maybe<Scalars['Int']>,
  exclude_ids?: Maybe<Array<Maybe<Scalars['String']>>>
};


export type QueryMatch_GeneArgs = {
  term: Scalars['String'],
  size?: Maybe<Scalars['Int']>,
  page?: Maybe<Scalars['Int']>,
  exclude_ids?: Maybe<Array<Maybe<Scalars['String']>>>
};


export type QueryNodeArgs = {
  __id: Scalars['ID']
};


export type QueryOrdered_SetArgs = {
  id: Scalars['String']
};


export type QueryOrdered_SetsArgs = {
  key: Scalars['String'],
  public?: Maybe<Scalars['Boolean']>,
  page?: Maybe<Scalars['Int']>,
  size?: Maybe<Scalars['Int']>
};


export type QueryPartnerArgs = {
  id: Scalars['String']
};


export type QueryPartner_CategoriesArgs = {
  category_type?: Maybe<CategoryType>,
  internal?: Maybe<Scalars['Boolean']>,
  size?: Maybe<Scalars['Int']>
};


export type QueryPartner_CategoryArgs = {
  id: Scalars['String']
};


export type QueryPartner_ShowArgs = {
  id: Scalars['String']
};


export type QueryPartner_ShowsArgs = {
  at_a_fair?: Maybe<Scalars['Boolean']>,
  displayable?: Maybe<Scalars['Boolean']>,
  fair_id?: Maybe<Scalars['String']>,
  featured?: Maybe<Scalars['Boolean']>,
  ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  near?: Maybe<Near>,
  partner_id?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['Int']>,
  sort?: Maybe<PartnerShowSorts>,
  status?: Maybe<EventStatus>
};


export type QueryPartnersArgs = {
  default_profile_public?: Maybe<Scalars['Boolean']>,
  eligible_for_carousel?: Maybe<Scalars['Boolean']>,
  eligible_for_listing?: Maybe<Scalars['Boolean']>,
  eligible_for_primary_bucket?: Maybe<Scalars['Boolean']>,
  eligible_for_secondary_bucket?: Maybe<Scalars['Boolean']>,
  ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  has_full_profile?: Maybe<Scalars['Boolean']>,
  near?: Maybe<Scalars['String']>,
  page?: Maybe<Scalars['Int']>,
  partner_categories?: Maybe<Array<Maybe<Scalars['String']>>>,
  size?: Maybe<Scalars['Int']>,
  sort?: Maybe<PartnersSortType>,
  term?: Maybe<Scalars['String']>,
  type?: Maybe<Array<Maybe<PartnerClassification>>>
};


export type QueryProfileArgs = {
  id: Scalars['String']
};


export type QuerySaleArgs = {
  id: Scalars['String']
};


export type QuerySale_ArtworkArgs = {
  id: Scalars['String']
};


export type QuerySale_ArtworksArgs = {
  aggregations?: Maybe<Array<Maybe<SaleArtworkAggregation>>>,
  artist_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  include_artworks_by_followed_artists?: Maybe<Scalars['Boolean']>,
  live_sale?: Maybe<Scalars['Boolean']>,
  is_auction?: Maybe<Scalars['Boolean']>,
  gene_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  estimate_range?: Maybe<Scalars['String']>,
  page?: Maybe<Scalars['Int']>,
  sale_id?: Maybe<Scalars['ID']>,
  size?: Maybe<Scalars['Int']>,
  sort?: Maybe<Scalars['String']>,
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type QuerySalesArgs = {
  is_auction?: Maybe<Scalars['Boolean']>,
  ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  live?: Maybe<Scalars['Boolean']>,
  published?: Maybe<Scalars['Boolean']>,
  size?: Maybe<Scalars['Int']>,
  sort?: Maybe<SaleSorts>
};


export type QuerySearchArgs = {
  query: Scalars['String'],
  entities?: Maybe<Array<Maybe<SearchEntity>>>,
  mode?: Maybe<SearchMode>,
  aggregations?: Maybe<Array<Maybe<SearchAggregation>>>,
  page?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryShowArgs = {
  id: Scalars['String']
};


export type QueryTagArgs = {
  id: Scalars['String']
};


export type QueryTrending_ArtistsArgs = {
  double_time_period?: Maybe<Scalars['Boolean']>,
  method?: Maybe<Scalars['String']>,
  name: TrendingMetrics,
  size?: Maybe<Scalars['Int']>
};


export type QueryUserArgs = {
  email?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>
};


export type QueryUsersArgs = {
  ids?: Maybe<Array<Maybe<Scalars['String']>>>
};


export type QueryPopular_ArtistsArgs = {
  exclude_followed_artists?: Maybe<Scalars['Boolean']>,
  exclude_artist_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  size?: Maybe<Scalars['Int']>
};


export type QueryEcommerceOrderArgs = {
  id: Scalars['String']
};


export type QueryEcommerceOrdersArgs = {
  buyerId?: Maybe<Scalars['String']>,
  buyerType?: Maybe<Scalars['String']>,
  sellerId?: Maybe<Scalars['String']>,
  sellerType?: Maybe<Scalars['String']>,
  mode?: Maybe<OrderModeEnum>,
  state?: Maybe<Scalars['String']>,
  sort?: Maybe<OrdersSortMethodType>,
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryOrderArgs = {
  id: Scalars['String']
};


export type QueryOrdersArgs = {
  buyerId?: Maybe<Scalars['String']>,
  buyerType?: Maybe<Scalars['String']>,
  sellerId?: Maybe<Scalars['String']>,
  sellerType?: Maybe<Scalars['String']>,
  mode?: Maybe<OrderModeEnum>,
  state?: Maybe<Scalars['String']>,
  sort?: Maybe<OrdersSortMethodType>,
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type Query_Unused_Gravity_MatchPartnersArgs = {
  matchType?: Maybe<Scalars['String']>,
  page?: Maybe<Scalars['Int']>,
  size?: Maybe<Scalars['Int']>,
  term: Scalars['String']
};


export type Query_Unused_Gravity_Match_PartnersArgs = {
  match_type?: Maybe<Scalars['String']>,
  page?: Maybe<Scalars['Int']>,
  size?: Maybe<Scalars['Int']>,
  term: Scalars['String']
};


export type Query_Unused_Gravity_PartnersArgs = {
  ids: Array<Scalars['ID']>
};


export type QueryCommerceCompetingOrdersArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderId: Scalars['ID']
};


export type QueryCommerceLineItemsArgs = {
  after?: Maybe<Scalars['String']>,
  artworkId?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  editionSetId?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  orderStates?: Maybe<Array<CommerceOrderStateEnum>>
};


export type QueryCommerceOrderArgs = {
  code?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>
};


export type QueryCommerceOrdersArgs = {
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  buyerId?: Maybe<Scalars['String']>,
  buyerType?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  mode?: Maybe<CommerceOrderModeEnum>,
  sellerId?: Maybe<Scalars['String']>,
  sellerType?: Maybe<Scalars['String']>,
  sort?: Maybe<CommerceOrderConnectionSortEnum>,
  state?: Maybe<CommerceOrderStateEnum>
};


export type QueryAnalyticsPartnerStatsArgs = {
  partnerId: Scalars['String']
};


export type QueryMarketingCollectionsArgs = {
  category?: Maybe<Scalars['String']>,
  randomizationSeed?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['Int']>,
  isFeaturedArtistContent?: Maybe<Scalars['Boolean']>,
  showOnEditorial?: Maybe<Scalars['Boolean']>,
  artistID?: Maybe<Scalars['String']>
};


export type QueryMarketingCollectionArgs = {
  slug: Scalars['String']
};

/** Autogenerated input type of RecordArtworkView */
export type RecordArtworkViewInput = {
  artwork_id: Scalars['String'],
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>,
};

/** Autogenerated return type of RecordArtworkView */
export type RecordArtworkViewPayload = {
  __typename?: 'RecordArtworkViewPayload',
  /** Id of viewed artwork */
  artworkId: Scalars['String'],
  /** Id of viewed artwork */
  artwork_id: Scalars['String'],
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>,
};

export type RejectOrderInput = {
  /** Order ID */
  orderId: Scalars['String'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type RejectOrderPayload = {
  __typename?: 'RejectOrderPayload',
  orderOrError?: Maybe<OrderOrFailureUnionType>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export enum RelatedArtistsKind {
  MAIN = 'MAIN',
  CONTEMPORARY = 'CONTEMPORARY'
}

export type RelatedArtworkGrid = ArtworkContextGrid & {
  __typename?: 'RelatedArtworkGrid',
  title?: Maybe<Scalars['String']>,
  ctaTitle?: Maybe<Scalars['String']>,
  ctaHref?: Maybe<Scalars['String']>,
  artworks?: Maybe<ArtworkConnection>,
};


export type RelatedArtworkGridArtworksArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};

export type RequestCredentialsForAssetUploadInput = {
  /** The gemini template you want to request */
  name: Scalars['String'],
  /** The desired access control */
  acl: Scalars['String'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type RequestCredentialsForAssetUploadPayload = {
  __typename?: 'RequestCredentialsForAssetUploadPayload',
  asset?: Maybe<Credentials>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type RequestedFulfillment = Ship | Pickup;

export type ResizedImageUrl = {
  __typename?: 'ResizedImageUrl',
  factor?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  url?: Maybe<Scalars['String']>,
};

export enum Role {
  PARTICIPANT = 'PARTICIPANT',
  OPERATOR = 'OPERATOR'
}

/** The conditions for uploading assets to media.artsy.net */
export type S3PolicyConditionsType = {
  __typename?: 'S3PolicyConditionsType',
  /** The bucket to upload to. */
  bucket: Scalars['String'],
  /** The assigned access control */
  acl: Scalars['String'],
  /** A key which is prefixed on your file */
  gemini_key: Scalars['String'],
  /** The returned status code, currently always 201 */
  success_action_status: Scalars['String'],
};

/** An policy for uploading assets to media.artsy.net */
export type S3PolicyDocumentType = {
  __typename?: 'S3PolicyDocumentType',
  /** An expiration date string. */
  expiration: Scalars['String'],
  /** The details for the upload */
  conditions: S3PolicyConditionsType,
};

export type Sale = Node & {
  __typename?: 'Sale',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A slug ID. */
  id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  _id: Scalars['ID'],
  cached?: Maybe<Scalars['Int']>,
  artworks?: Maybe<Array<Maybe<Artwork>>>,
  /** Returns a connection of artworks for a sale. */
  artworksConnection?: Maybe<ArtworkConnection>,
  associated_sale?: Maybe<Sale>,
  auction_state?: Maybe<Scalars['String']>,
  /** A bid increment policy that explains minimum bids in ranges. */
  bid_increments?: Maybe<Array<Maybe<BidIncrement>>>,
  /** Auction's buyer's premium policy. */
  buyers_premium?: Maybe<Array<Maybe<BuyersPremium>>>,
  cover_image?: Maybe<Image>,
  currency?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  display_timely_at?: Maybe<Scalars['String']>,
  eligible_sale_artworks_count?: Maybe<Scalars['Int']>,
  end_at?: Maybe<Scalars['String']>,
  event_start_at?: Maybe<Scalars['String']>,
  event_end_at?: Maybe<Scalars['String']>,
  /** A formatted description of when the auction starts or ends or if it has ended */
  formattedStartDateTime?: Maybe<Scalars['String']>,
  href?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  initials?: Maybe<Scalars['String']>,
  is_auction?: Maybe<Scalars['Boolean']>,
  is_benefit?: Maybe<Scalars['Boolean']>,
  isBenefit?: Maybe<Scalars['Boolean']>,
  isGalleryAuction?: Maybe<Scalars['Boolean']>,
  is_auction_promo?: Maybe<Scalars['Boolean']>,
  is_closed?: Maybe<Scalars['Boolean']>,
  is_open?: Maybe<Scalars['Boolean']>,
  is_live_open?: Maybe<Scalars['Boolean']>,
  is_preview?: Maybe<Scalars['Boolean']>,
  is_registration_closed?: Maybe<Scalars['Boolean']>,
  is_with_buyers_premium?: Maybe<Scalars['Boolean']>,
  live_start_at?: Maybe<Scalars['String']>,
  /** Returns a live auctions url if the sale is open and start time is after now */
  live_url_if_open?: Maybe<Scalars['String']>,
  partner?: Maybe<Partner>,
  profile?: Maybe<Profile>,
  promoted_sale?: Maybe<Sale>,
  registration_ends_at?: Maybe<Scalars['String']>,
  /** A registration for this sale or null */
  registrationStatus?: Maybe<Bidder>,
  require_bidder_approval?: Maybe<Scalars['Boolean']>,
  sale_artworks?: Maybe<Array<Maybe<SaleArtwork>>>,
  sale_artworks_connection?: Maybe<SaleArtworkConnection>,
  sale_type?: Maybe<Scalars['String']>,
  start_at?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  sale_artwork?: Maybe<SaleArtwork>,
  symbol?: Maybe<Scalars['String']>,
};


export type SaleArtworksArgs = {
  page?: Maybe<Scalars['Int']>,
  size?: Maybe<Scalars['Int']>,
  all?: Maybe<Scalars['Boolean']>,
  exclude?: Maybe<Array<Maybe<Scalars['String']>>>
};


export type SaleArtworksConnectionArgs = {
  exclude?: Maybe<Array<Maybe<Scalars['String']>>>,
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type SaleEnd_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type SaleEvent_Start_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type SaleEvent_End_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type SaleInitialsArgs = {
  length?: Maybe<Scalars['Int']>
};


export type SaleLive_Start_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type SaleRegistration_Ends_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type SaleSale_ArtworksArgs = {
  page?: Maybe<Scalars['Int']>,
  size?: Maybe<Scalars['Int']>,
  all?: Maybe<Scalars['Boolean']>
};


export type SaleSale_Artworks_ConnectionArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type SaleStart_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type SaleSale_ArtworkArgs = {
  id: Scalars['String']
};

export type SaleArtwork = {
  __typename?: 'SaleArtwork',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A slug ID. */
  id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  _id: Scalars['ID'],
  cached?: Maybe<Scalars['Int']>,
  artwork?: Maybe<Artwork>,
  bidder_positions_count?: Maybe<Scalars['Int']>,
  bid_increments?: Maybe<Array<Maybe<Scalars['Float']>>>,
  counts?: Maybe<SaleArtworkCounts>,
  /** Currency abbreviation (e.g. "USD") */
  currency?: Maybe<Scalars['String']>,
  current_bid?: Maybe<SaleArtworkCurrentBid>,
  estimate?: Maybe<Scalars['String']>,
  /** Singular estimate field, if specified */
  estimate_cents?: Maybe<Scalars['Int']>,
  high_estimate?: Maybe<SaleArtworkHighEstimate>,
  high_estimate_cents?: Maybe<Scalars['Float']>,
  highest_bid?: Maybe<SaleArtworkHighestBid>,
  increments?: Maybe<Array<Maybe<BidIncrementsFormatted>>>,
  is_bid_on?: Maybe<Scalars['Boolean']>,
  /** Can bids be placed on the artwork? */
  is_biddable?: Maybe<Scalars['Boolean']>,
  is_with_reserve?: Maybe<Scalars['Boolean']>,
  lot_label?: Maybe<Scalars['String']>,
  lot_number?: Maybe<Scalars['String']>,
  low_estimate?: Maybe<SaleArtworkLowEstimate>,
  low_estimate_cents?: Maybe<Scalars['Float']>,
  minimum_next_bid?: Maybe<SaleArtworkMinimumNextBid>,
  minimum_next_bid_cents?: Maybe<Scalars['Float']>,
  opening_bid?: Maybe<SaleArtworkOpeningBid>,
  opening_bid_cents?: Maybe<Scalars['Float']>,
  position?: Maybe<Scalars['Float']>,
  reserve?: Maybe<SaleArtworkReserve>,
  reserve_message?: Maybe<Scalars['String']>,
  reserve_status?: Maybe<Scalars['String']>,
  sale_id?: Maybe<Scalars['String']>,
  sale?: Maybe<Sale>,
  /** Currency symbol (e.g. "$") */
  symbol?: Maybe<Scalars['String']>,
};


export type SaleArtworkIncrementsArgs = {
  useMyMaxBid?: Maybe<Scalars['Boolean']>
};

export enum SaleArtworkAggregation {
  ARTIST = 'ARTIST',
  FOLLOWED_ARTISTS = 'FOLLOWED_ARTISTS',
  MEDIUM = 'MEDIUM',
  TOTAL = 'TOTAL'
}

/** A connection to a list of items. */
export type SaleArtworkConnection = {
  __typename?: 'SaleArtworkConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SaleArtworkEdge>>>,
};

export type SaleArtworkCounts = {
  __typename?: 'SaleArtworkCounts',
  bidder_positions?: Maybe<Scalars['FormattedNumber']>,
};


export type SaleArtworkCountsBidder_PositionsArgs = {
  format?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>
};

export type SaleArtworkCurrentBid = {
  __typename?: 'SaleArtworkCurrentBid',
  /** A formatted price with various currency formatting options. */
  amount?: Maybe<Scalars['String']>,
  /** An amount of money expressed in cents. */
  cents?: Maybe<Scalars['Float']>,
  /** A pre-formatted price. */
  display?: Maybe<Scalars['String']>,
};


export type SaleArtworkCurrentBidAmountArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};

/** An edge in a connection. */
export type SaleArtworkEdge = {
  __typename?: 'SaleArtworkEdge',
  /** The item at the end of the edge */
  node?: Maybe<SaleArtwork>,
  /** A cursor for use in pagination */
  cursor: Scalars['String'],
};

export type SaleArtworkHighestBid = {
  __typename?: 'SaleArtworkHighestBid',
  /** An optional type-specific ID. */
  id?: Maybe<Scalars['ID']>,
  created_at?: Maybe<Scalars['String']>,
  is_cancelled?: Maybe<Scalars['Boolean']>,
  /** A formatted price with various currency formatting options. */
  amount?: Maybe<Scalars['String']>,
  cents?: Maybe<Scalars['Int']>,
  display?: Maybe<Scalars['String']>,
  amount_cents?: Maybe<Scalars['Float']>,
};


export type SaleArtworkHighestBidCreated_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type SaleArtworkHighestBidAmountArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};

export type SaleArtworkHighEstimate = {
  __typename?: 'SaleArtworkHighEstimate',
  /** A formatted price with various currency formatting options. */
  amount?: Maybe<Scalars['String']>,
  /** An amount of money expressed in cents. */
  cents?: Maybe<Scalars['Float']>,
  /** A pre-formatted price. */
  display?: Maybe<Scalars['String']>,
};


export type SaleArtworkHighEstimateAmountArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};

export type SaleArtworkLowEstimate = {
  __typename?: 'SaleArtworkLowEstimate',
  /** A formatted price with various currency formatting options. */
  amount?: Maybe<Scalars['String']>,
  /** An amount of money expressed in cents. */
  cents?: Maybe<Scalars['Float']>,
  /** A pre-formatted price. */
  display?: Maybe<Scalars['String']>,
};


export type SaleArtworkLowEstimateAmountArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};

export type SaleArtworkMinimumNextBid = {
  __typename?: 'SaleArtworkMinimumNextBid',
  /** A formatted price with various currency formatting options. */
  amount?: Maybe<Scalars['String']>,
  /** An amount of money expressed in cents. */
  cents?: Maybe<Scalars['Float']>,
  /** A pre-formatted price. */
  display?: Maybe<Scalars['String']>,
};


export type SaleArtworkMinimumNextBidAmountArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};

export type SaleArtworkOpeningBid = {
  __typename?: 'SaleArtworkOpeningBid',
  /** A formatted price with various currency formatting options. */
  amount?: Maybe<Scalars['String']>,
  /** An amount of money expressed in cents. */
  cents?: Maybe<Scalars['Float']>,
  /** A pre-formatted price. */
  display?: Maybe<Scalars['String']>,
};


export type SaleArtworkOpeningBidAmountArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};

export type SaleArtworkReserve = {
  __typename?: 'SaleArtworkReserve',
  /** A formatted price with various currency formatting options. */
  amount?: Maybe<Scalars['String']>,
  /** An amount of money expressed in cents. */
  cents?: Maybe<Scalars['Float']>,
  /** A pre-formatted price. */
  display?: Maybe<Scalars['String']>,
};


export type SaleArtworkReserveAmountArgs = {
  decimal?: Maybe<Scalars['String']>,
  format?: Maybe<Scalars['String']>,
  precision?: Maybe<Scalars['Int']>,
  symbol?: Maybe<Scalars['String']>,
  thousand?: Maybe<Scalars['String']>
};

/** The results for one of the requested aggregations */
export type SaleArtworksAggregationResults = {
  __typename?: 'SaleArtworksAggregationResults',
  counts?: Maybe<Array<Maybe<AggregationCount>>>,
  slice?: Maybe<SaleArtworkAggregation>,
};

/** A connection to a list of items. */
export type SaleArtworksConnection = {
  __typename?: 'SaleArtworksConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SaleArtworksEdge>>>,
  /** Returns aggregation counts for the given filter query. */
  aggregations?: Maybe<Array<Maybe<SaleArtworksAggregationResults>>>,
  counts?: Maybe<FilterSaleArtworksCounts>,
};

/** An edge in a connection. */
export type SaleArtworksEdge = {
  __typename?: 'SaleArtworksEdge',
  /** The item at the end of the edge */
  node?: Maybe<SaleArtwork>,
  /** A cursor for use in pagination */
  cursor: Scalars['String'],
};

export type SaleRegistration = {
  __typename?: 'SaleRegistration',
  bidder?: Maybe<Bidder>,
  is_registered?: Maybe<Scalars['Boolean']>,
  sale?: Maybe<Sale>,
};

export enum SaleSorts {
  _ID_ASC = '_ID_ASC',
  _ID_DESC = '_ID_DESC',
  CREATED_AT_ASC = 'CREATED_AT_ASC',
  CREATED_AT_DESC = 'CREATED_AT_DESC',
  ELIGIBLE_SALE_ARTWORKS_COUNT_ASC = 'ELIGIBLE_SALE_ARTWORKS_COUNT_ASC',
  ELIGIBLE_SALE_ARTWORKS_COUNT_DESC = 'ELIGIBLE_SALE_ARTWORKS_COUNT_DESC',
  END_AT_ASC = 'END_AT_ASC',
  END_AT_DESC = 'END_AT_DESC',
  NAME_ASC = 'NAME_ASC',
  NAME_DESC = 'NAME_DESC',
  START_AT_ASC = 'START_AT_ASC',
  START_AT_DESC = 'START_AT_DESC',
  TIMELY_AT_NAME_ASC = 'TIMELY_AT_NAME_ASC',
  TIMELY_AT_NAME_DESC = 'TIMELY_AT_NAME_DESC'
}

export type SaveArtworkInput = {
  artwork_id?: Maybe<Scalars['String']>,
  remove?: Maybe<Scalars['Boolean']>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type SaveArtworkPayload = {
  __typename?: 'SaveArtworkPayload',
  artwork?: Maybe<Artwork>,
  clientMutationId?: Maybe<Scalars['String']>,
};

/** An object that may be searched for */
export type Searchable = {
  displayLabel?: Maybe<Scalars['String']>,
  imageUrl?: Maybe<Scalars['String']>,
  href?: Maybe<Scalars['String']>,
};

/** A connection to a list of items. */
export type SearchableConnection = {
  __typename?: 'SearchableConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SearchableEdge>>>,
  pageCursors?: Maybe<PageCursors>,
  totalCount?: Maybe<Scalars['Int']>,
  /** Returns aggregation counts for the given filter query. */
  aggregations?: Maybe<Array<Maybe<SearchAggregationResults>>>,
};

/** An edge in a connection. */
export type SearchableEdge = {
  __typename?: 'SearchableEdge',
  /** The item at the end of the edge */
  node?: Maybe<Searchable>,
  /** A cursor for use in pagination */
  cursor: Scalars['String'],
};

export type SearchableItem = Node & Searchable & {
  __typename?: 'SearchableItem',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A slug ID. */
  id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  _id: Scalars['ID'],
  description?: Maybe<Scalars['String']>,
  displayLabel?: Maybe<Scalars['String']>,
  imageUrl?: Maybe<Scalars['String']>,
  href?: Maybe<Scalars['String']>,
  searchableType?: Maybe<Scalars['String']>,
  displayType?: Maybe<Scalars['String']>,
};

export enum SearchAggregation {
  TYPE = 'TYPE'
}

/** The results for a requested aggregations */
export type SearchAggregationResults = {
  __typename?: 'SearchAggregationResults',
  counts?: Maybe<Array<Maybe<AggregationCount>>>,
  slice?: Maybe<SearchAggregation>,
};

export enum SearchEntity {
  ARTIST = 'ARTIST',
  ARTWORK = 'ARTWORK',
  ARTICLE = 'ARTICLE',
  CITY = 'CITY',
  COLLECTION = 'COLLECTION',
  FAIR = 'FAIR',
  FEATURE = 'FEATURE',
  GALLERY = 'GALLERY',
  GENE = 'GENE',
  INSTITUTION = 'INSTITUTION',
  PROFILE = 'PROFILE',
  SALE = 'SALE',
  SHOW = 'SHOW',
  TAG = 'TAG'
}

export enum SearchMode {
  AUTOSUGGEST = 'AUTOSUGGEST',
  SITE = 'SITE'
}

/** A piece that can be sold */
export type Sellable = {
  dimensions?: Maybe<Dimensions>,
  edition_of?: Maybe<Scalars['String']>,
  /** Whether a piece can be purchased through e-commerce */
  is_acquireable?: Maybe<Scalars['Boolean']>,
  /** Whether a user can make an offer on the work */
  is_offerable?: Maybe<Scalars['Boolean']>,
  is_for_sale?: Maybe<Scalars['Boolean']>,
  is_sold?: Maybe<Scalars['Boolean']>,
  price?: Maybe<Scalars['String']>,
  sale_message?: Maybe<Scalars['String']>,
};

export type SellerAcceptOfferInput = {
  /** Offer ID */
  offerId: Scalars['String'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type SellerAcceptOfferPayload = {
  __typename?: 'sellerAcceptOfferPayload',
  orderOrError?: Maybe<OrderOrFailureUnionType>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type SellerCounterOfferInput = {
  /** The ID of the offer to counter */
  offerId: Scalars['String'],
  /** Offer price */
  offerPrice?: Maybe<MoneyInput>,
  /** Offer note */
  note?: Maybe<Scalars['String']>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type SellerCounterOfferPayload = {
  __typename?: 'sellerCounterOfferPayload',
  orderOrError?: Maybe<OrderOrFailureUnionType>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type SellerRejectOfferInput = {
  /** Offer ID */
  offerId: Scalars['String'],
  /** Reason for rejecting offer */
  rejectReason?: Maybe<CancelReasonType>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type SellerRejectOfferPayload = {
  __typename?: 'sellerRejectOfferPayload',
  orderOrError?: Maybe<OrderOrFailureUnionType>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type SendConversationMessageMutationInput = {
  /** The id of the conversation to be updated */
  id: Scalars['String'],
  /** The email address of the message sender */
  from: Scalars['String'],
  body_text: Scalars['String'],
  /** The message being replied to */
  reply_to_message_id: Scalars['String'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type SendConversationMessageMutationPayload = {
  __typename?: 'SendConversationMessageMutationPayload',
  conversation?: Maybe<Conversation>,
  messageEdge?: Maybe<MessageEdge>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type SendFeedbackMutationFailure = {
  __typename?: 'SendFeedbackMutationFailure',
  mutationError?: Maybe<GravityMutationError>,
};

export type SendFeedbackMutationInput = {
  /** Message to be sent. */
  message: Scalars['String'],
  /** Email to associate with message (only used if logged out). */
  email?: Maybe<Scalars['String']>,
  /** Name to associate with message (only used if logged out). */
  name?: Maybe<Scalars['String']>,
  /** URL of page where feedback originated. */
  url?: Maybe<Scalars['String']>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type SendFeedbackMutationPayload = {
  __typename?: 'SendFeedbackMutationPayload',
  feedbackOrError?: Maybe<SendFeedbackMutationType>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type SendFeedbackMutationSuccess = {
  __typename?: 'SendFeedbackMutationSuccess',
  feedback?: Maybe<Feedback>,
};

export type SendFeedbackMutationType = SendFeedbackMutationSuccess | SendFeedbackMutationFailure;

export type Services = {
  __typename?: 'Services',
  convection: Convection,
  metaphysics: Metaphysics,
};

export type SetOrderPaymentInput = {
  /** Order ID */
  orderId: Scalars['String'],
  /** Gravity Credit Card Id */
  creditCardId: Scalars['String'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type SetOrderPaymentPayload = {
  __typename?: 'SetOrderPaymentPayload',
  orderOrError?: Maybe<OrderOrFailureUnionType>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type SetOrderShippingInput = {
  /** Id of the Order */
  orderId?: Maybe<Scalars['ID']>,
  /** Fulfillment Type of this Order */
  fulfillmentType?: Maybe<OrderFulfillmentType>,
  /** Shipping information */
  shipping?: Maybe<ShippingInputField>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type SetOrderShippingPayload = {
  __typename?: 'SetOrderShippingPayload',
  orderOrError?: Maybe<OrderOrFailureUnionType>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type Ship = {
  __typename?: 'Ship',
  /** Name for the shipping information */
  name?: Maybe<Scalars['String']>,
  /** Shipping address line 1 */
  addressLine1?: Maybe<Scalars['String']>,
  /** Shipping address line 2 */
  addressLine2?: Maybe<Scalars['String']>,
  /** Shipping city */
  city?: Maybe<Scalars['String']>,
  /** Shipping region */
  region?: Maybe<Scalars['String']>,
  /** Shipping country */
  country: Scalars['String'],
  /** Shipping postal code */
  postalCode?: Maybe<Scalars['String']>,
  /** Shipping phone number */
  phoneNumber?: Maybe<Scalars['String']>,
};

export type ShippingInputField = {
  /** Name for the shipping information */
  name?: Maybe<Scalars['String']>,
  /** Shipping address line 1 */
  addressLine1?: Maybe<Scalars['String']>,
  /** Shipping address line 2 */
  addressLine2?: Maybe<Scalars['String']>,
  /** Shipping city */
  city?: Maybe<Scalars['String']>,
  /** Shipping region */
  region?: Maybe<Scalars['String']>,
  /** Shipping country */
  country?: Maybe<Scalars['String']>,
  /** Shipping postal code */
  postalCode?: Maybe<Scalars['String']>,
  /** Shipping phone number */
  phoneNumber?: Maybe<Scalars['String']>,
};

export type Show = Node & {
  __typename?: 'Show',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A slug ID. */
  id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  _id: Scalars['ID'],
  cached?: Maybe<Scalars['Int']>,
  /** The Artists presenting in this show */
  artists?: Maybe<Array<Maybe<Artist>>>,
  /** The artworks featured in this show */
  artworks?: Maybe<Array<Maybe<Artwork>>>,
  /** The artworks featured in the show */
  artworks_connection?: Maybe<ArtworkConnection>,
  /** Artists inside the show who do not have artworks present */
  artists_without_artworks?: Maybe<Array<Maybe<Artist>>>,
  /** Artists in the show grouped by last name */
  artists_grouped_by_name?: Maybe<Array<Maybe<ArtistGroup>>>,
  /** The general city, derived from a fair location, a show location or a potential city */
  city?: Maybe<Scalars['String']>,
  /** The image you should use to represent this show */
  cover_image?: Maybe<Image>,
  /** An object that represents some of the numbers you might want to highlight */
  counts?: Maybe<ShowCounts>,
  /** A description of the show */
  description?: Maybe<Scalars['String']>,
  displayable?: Maybe<Scalars['Boolean']>,
  end_at?: Maybe<Scalars['String']>,
  /** Events from the partner that runs this show */
  events?: Maybe<Array<Maybe<PartnerShowEventType>>>,
  /** A formatted description of the start to end dates */
  exhibition_period?: Maybe<Scalars['String']>,
  /** If the show is in a Fair, then that fair */
  fair?: Maybe<Fair>,
  /** Artworks Elastic Search results */
  filteredArtworks?: Maybe<FilterArtworks>,
  /** A path to the show on Artsy */
  href?: Maybe<Scalars['String']>,
  /** Images that represent the show, you may be interested in meta_image or cover_image for a definitive thumbnail */
  images?: Maybe<Array<Maybe<Image>>>,
  /** Flag showing if show has any location. */
  has_location?: Maybe<Scalars['Boolean']>,
  /** Gravity doesn’t expose the `active` flag. Temporarily re-state its logic. */
  is_active?: Maybe<Scalars['Boolean']>,
  /** Is this something we can display to the front-end? */
  is_displayable?: Maybe<Scalars['Boolean']>,
  /** Does the show exist as a fair booth? */
  is_fair_booth?: Maybe<Scalars['Boolean']>,
  /** Is it a show provided for historical reference? */
  is_reference?: Maybe<Scalars['Boolean']>,
  is_local_discovery?: Maybe<Scalars['Boolean']>,
  /** Is it an outsourced local discovery stub show? */
  isStubShow?: Maybe<Scalars['Boolean']>,
  /** Whether the show is in a fair, group or solo */
  kind?: Maybe<Scalars['String']>,
  /** Where the show is located (Could also be a fair location) */
  location?: Maybe<Location>,
  /** An image representing the show, or a sharable image from an artwork in the show */
  meta_image?: Maybe<Image>,
  /** Is the user following this show */
  is_followed?: Maybe<Scalars['Boolean']>,
  /** The exhibition title */
  name?: Maybe<Scalars['String']>,
  /** Shows that are near (~75km) from this show */
  nearbyShows?: Maybe<ShowConnection>,
  /** Alternate Markdown-supporting free text representation of the opening reception event’s date/time */
  openingReceptionText?: Maybe<Scalars['String']>,
  /** The partner that represents this show, could be a non-Artsy partner */
  partner?: Maybe<PartnerTypes>,
  /** The press release for this show */
  press_release?: Maybe<Scalars['String']>,
  /** Link to the press release for this show */
  pressReleaseUrl?: Maybe<Scalars['String']>,
  /** When this show starts */
  start_at?: Maybe<Scalars['String']>,
  /** Is this show running, upcoming or closed? */
  status?: Maybe<Scalars['String']>,
  /** A formatted update on upcoming status changes */
  status_update?: Maybe<Scalars['String']>,
  /** Is it a fair booth or a show? */
  type?: Maybe<Scalars['String']>,
  /** A Connection of followed artists by current user for this show */
  followedArtists?: Maybe<ShowFollowArtistConnection>,
};


export type ShowArtworksArgs = {
  exclude?: Maybe<Array<Maybe<Scalars['String']>>>,
  for_sale?: Maybe<Scalars['Boolean']>,
  published?: Maybe<Scalars['Boolean']>,
  all?: Maybe<Scalars['Boolean']>,
  page?: Maybe<Scalars['Int']>,
  size?: Maybe<Scalars['Int']>
};


export type ShowArtworks_ConnectionArgs = {
  exclude?: Maybe<Array<Maybe<Scalars['String']>>>,
  for_sale?: Maybe<Scalars['Boolean']>,
  published?: Maybe<Scalars['Boolean']>,
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type ShowEnd_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type ShowFilteredArtworksArgs = {
  acquireable?: Maybe<Scalars['Boolean']>,
  offerable?: Maybe<Scalars['Boolean']>,
  aggregation_partner_cities?: Maybe<Array<Maybe<Scalars['String']>>>,
  aggregations?: Maybe<Array<Maybe<ArtworkAggregation>>>,
  artist_id?: Maybe<Scalars['String']>,
  artist_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  at_auction?: Maybe<Scalars['Boolean']>,
  attribution_class?: Maybe<Array<Maybe<Scalars['String']>>>,
  color?: Maybe<Scalars['String']>,
  dimension_range?: Maybe<Scalars['String']>,
  extra_aggregation_gene_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  include_artworks_by_followed_artists?: Maybe<Scalars['Boolean']>,
  include_medium_filter_in_aggregation?: Maybe<Scalars['Boolean']>,
  inquireable_only?: Maybe<Scalars['Boolean']>,
  for_sale?: Maybe<Scalars['Boolean']>,
  gene_id?: Maybe<Scalars['String']>,
  gene_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  height?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['String']>,
  marketable?: Maybe<Scalars['Boolean']>,
  medium?: Maybe<Scalars['String']>,
  period?: Maybe<Scalars['String']>,
  periods?: Maybe<Array<Maybe<Scalars['String']>>>,
  major_periods?: Maybe<Array<Maybe<Scalars['String']>>>,
  partner_id?: Maybe<Scalars['ID']>,
  partner_cities?: Maybe<Array<Maybe<Scalars['String']>>>,
  price_range?: Maybe<Scalars['String']>,
  page?: Maybe<Scalars['Int']>,
  sale_id?: Maybe<Scalars['ID']>,
  size?: Maybe<Scalars['Int']>,
  sort?: Maybe<Scalars['String']>,
  tag_id?: Maybe<Scalars['String']>,
  keyword?: Maybe<Scalars['String']>,
  keyword_match_exact?: Maybe<Scalars['Boolean']>
};


export type ShowImagesArgs = {
  size?: Maybe<Scalars['Int']>,
  default?: Maybe<Scalars['Boolean']>,
  page?: Maybe<Scalars['Int']>
};


export type ShowNearbyShowsArgs = {
  sort?: Maybe<PartnerShowSorts>,
  status?: Maybe<EventStatus>,
  discoverable?: Maybe<Scalars['Boolean']>,
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


export type ShowPress_ReleaseArgs = {
  format?: Maybe<Format>
};


export type ShowStart_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type ShowStatus_UpdateArgs = {
  max_days?: Maybe<Scalars['Int']>
};


export type ShowFollowedArtistsArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};

export type ShowArtworkGrid = ArtworkContextGrid & {
  __typename?: 'ShowArtworkGrid',
  title?: Maybe<Scalars['String']>,
  ctaTitle?: Maybe<Scalars['String']>,
  ctaHref?: Maybe<Scalars['String']>,
  artworks?: Maybe<ArtworkConnection>,
};


export type ShowArtworkGridArtworksArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};

/** A connection to a list of items. */
export type ShowConnection = {
  __typename?: 'ShowConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ShowEdge>>>,
  pageCursors?: Maybe<PageCursors>,
  totalCount?: Maybe<Scalars['Int']>,
};

export type ShowCounts = {
  __typename?: 'ShowCounts',
  artworks?: Maybe<Scalars['Int']>,
  eligible_artworks?: Maybe<Scalars['FormattedNumber']>,
  artists?: Maybe<Scalars['Int']>,
};


export type ShowCountsArtworksArgs = {
  artist_id?: Maybe<Scalars['String']>
};


export type ShowCountsEligible_ArtworksArgs = {
  format?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>
};

/** An edge in a connection. */
export type ShowEdge = {
  __typename?: 'ShowEdge',
  /** The item at the end of the edge */
  node?: Maybe<Show>,
  /** A cursor for use in pagination */
  cursor: Scalars['String'],
};

export type ShowFollowArtist = {
  __typename?: 'ShowFollowArtist',
  artist?: Maybe<Artist>,
};

/** A connection to a list of items. */
export type ShowFollowArtistConnection = {
  __typename?: 'ShowFollowArtistConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ShowFollowArtistEdge>>>,
};

/** An edge in a connection. */
export type ShowFollowArtistEdge = {
  __typename?: 'ShowFollowArtistEdge',
  /** The item at the end of the edge */
  node?: Maybe<ShowFollowArtist>,
  /** A cursor for use in pagination */
  cursor: Scalars['String'],
};

export enum ShowSort {
  START_AT_ASC = 'START_AT_ASC',
  START_AT_DESC = 'START_AT_DESC',
  END_AT_ASC = 'END_AT_ASC',
  END_AT_DESC = 'END_AT_DESC',
  UPDATED_AT_ASC = 'UPDATED_AT_ASC',
  UPDATED_AT_DESC = 'UPDATED_AT_DESC',
  NAME_ASC = 'NAME_ASC',
  NAME_DESC = 'NAME_DESC',
  FEATURED_ASC = 'FEATURED_ASC',
  FEATURED_DESC = 'FEATURED_DESC',
  SORTABLE_NAME_ASC = 'SORTABLE_NAME_ASC',
  SORTABLE_NAME_DESC = 'SORTABLE_NAME_DESC'
}

export enum Sort {
  DESC = 'DESC',
  ASC = 'ASC'
}

export type Status = {
  __typename?: 'Status',
  gravity?: Maybe<StatusGravity>,
  /** Metaphysics ping */
  ping?: Maybe<Scalars['Boolean']>,
};

/** Gravity ping */
export type StatusGravity = {
  __typename?: 'StatusGravity',
  ping?: Maybe<Scalars['Boolean']>,
};

export enum SubmissionCategoryAggregation {
  PAINTING = 'PAINTING',
  SCULPTURE = 'SCULPTURE',
  PHOTOGRAPHY = 'PHOTOGRAPHY',
  PRINT = 'PRINT',
  DRAWING_COLLAGE_OR_OTHER_WORK_ON_PAPER = 'DRAWING_COLLAGE_OR_OTHER_WORK_ON_PAPER',
  MIXED_MEDIA = 'MIXED_MEDIA',
  PERFORMANCE_ART = 'PERFORMANCE_ART',
  INSTALLATION = 'INSTALLATION',
  VIDEO_FILM_ANIMATION = 'VIDEO_FILM_ANIMATION',
  ARCHITECTURE = 'ARCHITECTURE',
  FASHION_DESIGN_AND_WEARABLE_ART = 'FASHION_DESIGN_AND_WEARABLE_ART',
  JEWELRY = 'JEWELRY',
  DESIGN_DECORATIVE_ART = 'DESIGN_DECORATIVE_ART',
  TEXTILE_ARTS = 'TEXTILE_ARTS',
  OTHER = 'OTHER'
}

export enum SubmissionDimensionAggregation {
  CM = 'CM',
  IN = 'IN'
}

export enum SubmissionStateAggregation {
  DRAFT = 'DRAFT',
  SUBMITTED = 'SUBMITTED',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED'
}

export type SubmitOrderInput = {
  /** Order ID */
  orderId: Scalars['String'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type SubmitOrderPayload = {
  __typename?: 'SubmitOrderPayload',
  orderOrError?: Maybe<OrderOrFailureUnionType>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type SubmitOrderWithOfferInput = {
  /** Offer ID */
  offerId: Scalars['String'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type SubmitOrderWithOfferPayload = {
  __typename?: 'SubmitOrderWithOfferPayload',
  orderOrError?: Maybe<OrderOrFailureUnionType>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type SubmitPendingOfferInput = {
  /** The ID of the pending offer you want to submit */
  offerId: Scalars['String'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type SubmitPendingOfferPayload = {
  __typename?: 'submitPendingOfferPayload',
  orderOrError?: Maybe<OrderOrFailureUnionType>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type System = {
  __typename?: 'System',
  /** Gravity system time, necessary for synchronizing device clocks. */
  time?: Maybe<SystemTime>,
};

export type SystemTime = {
  __typename?: 'SystemTime',
  day?: Maybe<Scalars['Int']>,
  wday?: Maybe<Scalars['Int']>,
  month?: Maybe<Scalars['Int']>,
  year?: Maybe<Scalars['Int']>,
  hour?: Maybe<Scalars['Int']>,
  min?: Maybe<Scalars['Int']>,
  sec?: Maybe<Scalars['Int']>,
  dst?: Maybe<Scalars['Boolean']>,
  unix?: Maybe<Scalars['Int']>,
  utc_offset?: Maybe<Scalars['Int']>,
  zone?: Maybe<Scalars['String']>,
  iso8601?: Maybe<Scalars['String']>,
};

export type Tag = Node & {
  __typename?: 'Tag',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A slug ID. */
  id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  _id: Scalars['ID'],
  cached?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  href?: Maybe<Scalars['String']>,
  image?: Maybe<Image>,
  count?: Maybe<Scalars['Int']>,
  /** Artworks Elastic Search results */
  filtered_artworks?: Maybe<FilterArtworks>,
};


export type TagFiltered_ArtworksArgs = {
  acquireable?: Maybe<Scalars['Boolean']>,
  offerable?: Maybe<Scalars['Boolean']>,
  aggregation_partner_cities?: Maybe<Array<Maybe<Scalars['String']>>>,
  aggregations?: Maybe<Array<Maybe<ArtworkAggregation>>>,
  artist_id?: Maybe<Scalars['String']>,
  artist_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  at_auction?: Maybe<Scalars['Boolean']>,
  attribution_class?: Maybe<Array<Maybe<Scalars['String']>>>,
  color?: Maybe<Scalars['String']>,
  dimension_range?: Maybe<Scalars['String']>,
  extra_aggregation_gene_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  include_artworks_by_followed_artists?: Maybe<Scalars['Boolean']>,
  include_medium_filter_in_aggregation?: Maybe<Scalars['Boolean']>,
  inquireable_only?: Maybe<Scalars['Boolean']>,
  for_sale?: Maybe<Scalars['Boolean']>,
  gene_id?: Maybe<Scalars['String']>,
  gene_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  height?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['String']>,
  marketable?: Maybe<Scalars['Boolean']>,
  medium?: Maybe<Scalars['String']>,
  period?: Maybe<Scalars['String']>,
  periods?: Maybe<Array<Maybe<Scalars['String']>>>,
  major_periods?: Maybe<Array<Maybe<Scalars['String']>>>,
  partner_id?: Maybe<Scalars['ID']>,
  partner_cities?: Maybe<Array<Maybe<Scalars['String']>>>,
  price_range?: Maybe<Scalars['String']>,
  page?: Maybe<Scalars['Int']>,
  sale_id?: Maybe<Scalars['ID']>,
  size?: Maybe<Scalars['Int']>,
  sort?: Maybe<Scalars['String']>,
  tag_id?: Maybe<Scalars['String']>,
  keyword?: Maybe<Scalars['String']>,
  keyword_match_exact?: Maybe<Scalars['Boolean']>
};

export type TrendingArtists = {
  __typename?: 'TrendingArtists',
  artists?: Maybe<Array<Maybe<Artist>>>,
};

export enum TrendingMetrics {
  /** Cumulative price achieved at auction. Base time period: 12 weeks */
  ARTIST_AUCTION_LOT = 'ARTIST_AUCTION_LOT',
  /** Number of artworks in fairs. Base time period: 12 weeks. */
  ARTIST_FAIR = 'ARTIST_FAIR',
  /** Base time period: 2 weeks */
  ARTIST_FOLLOW = 'ARTIST_FOLLOW',
  /** Base time period: 1 month */
  ARTIST_INQUIRY = 'ARTIST_INQUIRY',
  /** Base time period: 1 month */
  ARTIST_SAVE = 'ARTIST_SAVE',
  /** Base time period: 2 weeks */
  ARTIST_SEARCH = 'ARTIST_SEARCH'
}

export type UnderlyingCurrentEvent = Show | Sale;

export type UpdateCollectorProfileInput = {
  loyalty_applicant?: Maybe<Scalars['Boolean']>,
  professional_buyer?: Maybe<Scalars['Boolean']>,
  self_reported_purchases?: Maybe<Scalars['String']>,
  intents?: Maybe<Array<Maybe<Intents>>>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type UpdateCollectorProfilePayload = {
  __typename?: 'UpdateCollectorProfilePayload',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  id: Scalars['ID'],
  email?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  confirmed_buyer_at?: Maybe<Scalars['String']>,
  collector_level?: Maybe<Scalars['Int']>,
  self_reported_purchases?: Maybe<Scalars['String']>,
  loyalty_applicant_at?: Maybe<Scalars['String']>,
  professional_buyer_at?: Maybe<Scalars['String']>,
  professional_buyer_applied_at?: Maybe<Scalars['String']>,
  intents?: Maybe<Array<Maybe<Scalars['String']>>>,
  clientMutationId?: Maybe<Scalars['String']>,
};


export type UpdateCollectorProfilePayloadConfirmed_Buyer_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type UpdateCollectorProfilePayloadLoyalty_Applicant_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type UpdateCollectorProfilePayloadProfessional_Buyer_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};


export type UpdateCollectorProfilePayloadProfessional_Buyer_Applied_AtArgs = {
  convert_to_utc?: Maybe<Scalars['Boolean']>,
  format?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>
};

export type UpdateConversationMutationInput = {
  /** The id of the conversation to be updated. */
  conversationId: Scalars['String'],
  /** The message id to mark as read. */
  fromLastViewedMessageId: Scalars['String'],
  clientMutationId?: Maybe<Scalars['String']>,
};

export type UpdateConversationMutationPayload = {
  __typename?: 'UpdateConversationMutationPayload',
  conversation?: Maybe<Conversation>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type UpdateMyProfileInput = {
  /** The given name of the user. */
  name?: Maybe<Scalars['String']>,
  /** The given email of the user. */
  email?: Maybe<Scalars['String']>,
  /** The given phone number of the user. */
  phone?: Maybe<Scalars['String']>,
  /** The given location of the user as structured data */
  location?: Maybe<EditableLocation>,
  /** The collector level for the user */
  collector_level?: Maybe<Scalars['Int']>,
  /** The minimum price collector has selected */
  price_range_min?: Maybe<Scalars['Int']>,
  /** The maximum price collector has selected */
  price_range_max?: Maybe<Scalars['Float']>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type UpdateMyProfilePayload = {
  __typename?: 'UpdateMyProfilePayload',
  user?: Maybe<User>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type UpdateSubmissionMutationInput = {
  /** The GUID for the submission */
  id: Scalars['String'],
  /** The gravity ID for an Artist */
  artist_id: Scalars['String'],
  /** Does the artwork come with an certificate of authenticity? */
  authenticity_certificate?: Maybe<Scalars['Boolean']>,
  /** The set in which to put the work */
  category?: Maybe<SubmissionCategoryAggregation>,
  /** The depth of the work */
  depth?: Maybe<Scalars['String']>,
  /** A string, either CM or IN */
  dimensions_metric?: Maybe<SubmissionDimensionAggregation>,
  /** Is the work a part of an edition */
  edition?: Maybe<Scalars['Boolean']>,
  /** The number of the individual work if in a set */
  edition_number?: Maybe<Scalars['String']>,
  /** The whole size of the set of works */
  edition_size?: Maybe<Scalars['Int']>,
  /** The height of the work */
  height?: Maybe<Scalars['String']>,
  /** The city where the work currently resides */
  location_city?: Maybe<Scalars['String']>,
  /** The country where the work currently resides */
  location_country?: Maybe<Scalars['String']>,
  /** The state where the work currently resides */
  location_state?: Maybe<Scalars['String']>,
  /** The materials in which the work is created */
  medium?: Maybe<Scalars['String']>,
  /** The history of an work */
  provenance?: Maybe<Scalars['String']>,
  /** Is this work signed? */
  signature?: Maybe<Scalars['Boolean']>,
  /** The name of the work */
  title?: Maybe<Scalars['String']>,
  /** The internal state of the work, e.g. draft/submitted */
  state?: Maybe<SubmissionStateAggregation>,
  /** The width of the work */
  width?: Maybe<Scalars['String']>,
  /** The year the work was created */
  year?: Maybe<Scalars['String']>,
  /** The user who submitted the work */
  user_id?: Maybe<Scalars['ID']>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type UpdateSubmissionMutationPayload = {
  __typename?: 'UpdateSubmissionMutationPayload',
  consignment_submission?: Maybe<ConsignmentSubmission>,
  clientMutationId?: Maybe<Scalars['String']>,
};

export type User = {
  __typename?: 'User',
  /** A globally unique ID. */
  __id: Scalars['ID'],
  /** A type-specific ID likely used as a database ID. */
  id: Scalars['ID'],
  cached?: Maybe<Scalars['Int']>,
  /** The given name of the user. */
  name: Scalars['String'],
  /** The given email of the user. */
  email: Scalars['String'],
  /** The given phone number of the user. */
  phone?: Maybe<Scalars['String']>,
  /** The given location of the user as structured data */
  location?: Maybe<Location>,
  /** The price range the collector has selected */
  price_range?: Maybe<Scalars['String']>,
  /** Check whether a user exists by email address before creating an account. */
  userAlreadyExists?: Maybe<Scalars['Boolean']>,
};

/** A wildcard used to support complex root queries in Relay */
export type Viewer = {
  __typename?: 'Viewer',
  /** List of all artwork attribution classes */
  artworkAttributionClasses?: Maybe<Array<Maybe<AttributionClass>>>,
  /** An Article */
  article?: Maybe<Article>,
  /** A list of Articles */
  articles?: Maybe<Array<Maybe<Article>>>,
  /** An Artwork */
  artwork?: Maybe<Artwork>,
  /** A subset of the metadata for an artwork at a specific time */
  artworkVersion?: Maybe<ArtworkVersion>,
  /** A list of Artworks */
  artworks?: Maybe<Array<Maybe<Artwork>>>,
  /** An Artist */
  artist?: Maybe<Artist>,
  /** A list of Artists */
  artists?: Maybe<Array<Maybe<Artist>>>,
  /** Creates, and authorizes, a JWT custom for Causality */
  causality_jwt?: Maybe<Scalars['String']>,
  /** A city-based entry point for local discovery */
  city?: Maybe<City>,
  collection?: Maybe<Collection>,
  /** A user's credit card */
  credit_card?: Maybe<CreditCard>,
  /** An External Partner not on the platform */
  external_partner?: Maybe<ExternalPartner>,
  /** A Fair */
  fair?: Maybe<Fair>,
  /** A list of Fairs */
  fairs?: Maybe<Array<Maybe<Fair>>>,
  /** Partners Elastic Search results */
  filter_partners?: Maybe<FilterPartners>,
  /** Artworks Elastic Search results */
  filter_artworks?: Maybe<FilterArtworks>,
  /** Sale Artworks Elastic Search results */
  filter_sale_artworks?: Maybe<FilterSaleArtworks>,
  gene?: Maybe<Gene>,
  /** A list of Genes */
  genes?: Maybe<Array<Maybe<Gene>>>,
  /** List of curated genes with custom images */
  suggested_genes?: Maybe<Array<Maybe<Gene>>>,
  /** A list of Gene Families */
  gene_families?: Maybe<GeneFamilyConnection>,
  gene_family?: Maybe<GeneFamily>,
  /** Home screen content */
  home_page?: Maybe<HomePage>,
  /** A Search for Artists */
  match_artist?: Maybe<Array<Maybe<Artist>>>,
  /** A Search for Genes */
  match_gene?: Maybe<Array<Maybe<Gene>>>,
  me?: Maybe<Me>,
  /** Fetches an object given its Globally Unique ID */
  node?: Maybe<Node>,
  /** An OrderedSet */
  ordered_set?: Maybe<OrderedSet>,
  /** A collection of OrderedSets */
  ordered_sets?: Maybe<Array<Maybe<OrderedSet>>>,
  /** A Partner */
  partner?: Maybe<Partner>,
  /** A list of PartnerCategories */
  partner_categories?: Maybe<Array<Maybe<PartnerCategory>>>,
  /** A PartnerCategory */
  partner_category?: Maybe<PartnerCategory>,
  /** A Partner Show */
  partner_show?: Maybe<PartnerShow>,
  /** A list of PartnerShows */
  partner_shows?: Maybe<Array<Maybe<PartnerShow>>>,
  /** A list of Partners */
  partners?: Maybe<Array<Maybe<Partner>>>,
  /** A Profile */
  profile?: Maybe<Profile>,
  /** A Sale */
  sale?: Maybe<Sale>,
  /** A Sale Artwork */
  sale_artwork?: Maybe<SaleArtwork>,
  /** Sale Artworks search results */
  sale_artworks?: Maybe<SaleArtworksConnection>,
  /** A list of Sales */
  sales?: Maybe<Array<Maybe<Sale>>>,
  /** Global search */
  search?: Maybe<SearchableConnection>,
  /** The schema for difference micro-service settings */
  services?: Maybe<Services>,
  /** A Show */
  show?: Maybe<Show>,
  status?: Maybe<Status>,
  /** Fields related to internal systems. */
  system?: Maybe<System>,
  tag?: Maybe<Tag>,
  /** Trending artists */
  trending_artists?: Maybe<TrendingArtists>,
  user?: Maybe<User>,
  /** A list of Users */
  users?: Maybe<Array<Maybe<User>>>,
  /** Popular artists */
  popular_artists?: Maybe<PopularArtists>,
};


/** A wildcard used to support complex root queries in Relay */
export type ViewerArticleArgs = {
  id: Scalars['String']
};


/** A wildcard used to support complex root queries in Relay */
export type ViewerArticlesArgs = {
  auction_id?: Maybe<Scalars['String']>,
  published?: Maybe<Scalars['Boolean']>,
  show_id?: Maybe<Scalars['String']>,
  sort?: Maybe<ArticleSorts>
};


/** A wildcard used to support complex root queries in Relay */
export type ViewerArtworkArgs = {
  id: Scalars['String']
};


/** A wildcard used to support complex root queries in Relay */
export type ViewerArtworkVersionArgs = {
  id: Scalars['String']
};


/** A wildcard used to support complex root queries in Relay */
export type ViewerArtworksArgs = {
  ids?: Maybe<Array<Maybe<Scalars['String']>>>
};


/** A wildcard used to support complex root queries in Relay */
export type ViewerArtistArgs = {
  id: Scalars['String']
};


/** A wildcard used to support complex root queries in Relay */
export type ViewerArtistsArgs = {
  ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  slugs?: Maybe<Array<Maybe<Scalars['String']>>>,
  page?: Maybe<Scalars['Int']>,
  size?: Maybe<Scalars['Int']>,
  sort?: Maybe<ArtistSorts>
};


/** A wildcard used to support complex root queries in Relay */
export type ViewerCausality_JwtArgs = {
  role?: Maybe<Role>,
  sale_id: Scalars['String']
};


/** A wildcard used to support complex root queries in Relay */
export type ViewerCityArgs = {
  slug?: Maybe<Scalars['String']>,
  near?: Maybe<Near>
};


/** A wildcard used to support complex root queries in Relay */
export type ViewerCollectionArgs = {
  id: Scalars['String']
};


/** A wildcard used to support complex root queries in Relay */
export type ViewerCredit_CardArgs = {
  id: Scalars['String']
};


/** A wildcard used to support complex root queries in Relay */
export type ViewerExternal_PartnerArgs = {
  id: Scalars['String']
};


/** A wildcard used to support complex root queries in Relay */
export type ViewerFairArgs = {
  id: Scalars['String']
};


/** A wildcard used to support complex root queries in Relay */
export type ViewerFairsArgs = {
  fair_organizer_id?: Maybe<Scalars['String']>,
  has_full_feature?: Maybe<Scalars['Boolean']>,
  has_homepage_section?: Maybe<Scalars['Boolean']>,
  has_listing?: Maybe<Scalars['Boolean']>,
  ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  near?: Maybe<Near>,
  page?: Maybe<Scalars['Int']>,
  size?: Maybe<Scalars['Int']>,
  sort?: Maybe<FairSorts>,
  status?: Maybe<EventStatus>
};


/** A wildcard used to support complex root queries in Relay */
export type ViewerFilter_PartnersArgs = {
  default_profile_public?: Maybe<Scalars['Boolean']>,
  eligible_for_carousel?: Maybe<Scalars['Boolean']>,
  eligible_for_listing?: Maybe<Scalars['Boolean']>,
  eligible_for_primary_bucket?: Maybe<Scalars['Boolean']>,
  eligible_for_secondary_bucket?: Maybe<Scalars['Boolean']>,
  ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  has_full_profile?: Maybe<Scalars['Boolean']>,
  near?: Maybe<Scalars['String']>,
  page?: Maybe<Scalars['Int']>,
  partner_categories?: Maybe<Array<Maybe<Scalars['String']>>>,
  size?: Maybe<Scalars['Int']>,
  sort?: Maybe<PartnersSortType>,
  term?: Maybe<Scalars['String']>,
  type?: Maybe<Array<Maybe<PartnerClassification>>>,
  aggregations: Array<Maybe<PartnersAggregation>>
};


/** A wildcard used to support complex root queries in Relay */
export type ViewerFilter_ArtworksArgs = {
  acquireable?: Maybe<Scalars['Boolean']>,
  offerable?: Maybe<Scalars['Boolean']>,
  aggregation_partner_cities?: Maybe<Array<Maybe<Scalars['String']>>>,
  aggregations?: Maybe<Array<Maybe<ArtworkAggregation>>>,
  artist_id?: Maybe<Scalars['String']>,
  artist_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  at_auction?: Maybe<Scalars['Boolean']>,
  attribution_class?: Maybe<Array<Maybe<Scalars['String']>>>,
  color?: Maybe<Scalars['String']>,
  dimension_range?: Maybe<Scalars['String']>,
  extra_aggregation_gene_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  include_artworks_by_followed_artists?: Maybe<Scalars['Boolean']>,
  include_medium_filter_in_aggregation?: Maybe<Scalars['Boolean']>,
  inquireable_only?: Maybe<Scalars['Boolean']>,
  for_sale?: Maybe<Scalars['Boolean']>,
  gene_id?: Maybe<Scalars['String']>,
  gene_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  height?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['String']>,
  marketable?: Maybe<Scalars['Boolean']>,
  medium?: Maybe<Scalars['String']>,
  period?: Maybe<Scalars['String']>,
  periods?: Maybe<Array<Maybe<Scalars['String']>>>,
  major_periods?: Maybe<Array<Maybe<Scalars['String']>>>,
  partner_id?: Maybe<Scalars['ID']>,
  partner_cities?: Maybe<Array<Maybe<Scalars['String']>>>,
  price_range?: Maybe<Scalars['String']>,
  page?: Maybe<Scalars['Int']>,
  sale_id?: Maybe<Scalars['ID']>,
  size?: Maybe<Scalars['Int']>,
  sort?: Maybe<Scalars['String']>,
  tag_id?: Maybe<Scalars['String']>,
  keyword?: Maybe<Scalars['String']>,
  keyword_match_exact?: Maybe<Scalars['Boolean']>
};


/** A wildcard used to support complex root queries in Relay */
export type ViewerFilter_Sale_ArtworksArgs = {
  aggregations?: Maybe<Array<Maybe<SaleArtworkAggregation>>>,
  artist_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  include_artworks_by_followed_artists?: Maybe<Scalars['Boolean']>,
  live_sale?: Maybe<Scalars['Boolean']>,
  is_auction?: Maybe<Scalars['Boolean']>,
  gene_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  estimate_range?: Maybe<Scalars['String']>,
  page?: Maybe<Scalars['Int']>,
  sale_id?: Maybe<Scalars['ID']>,
  size?: Maybe<Scalars['Int']>,
  sort?: Maybe<Scalars['String']>
};


/** A wildcard used to support complex root queries in Relay */
export type ViewerGeneArgs = {
  id: Scalars['String']
};


/** A wildcard used to support complex root queries in Relay */
export type ViewerGenesArgs = {
  size?: Maybe<Scalars['Int']>,
  slugs?: Maybe<Array<Maybe<Scalars['String']>>>
};


/** A wildcard used to support complex root queries in Relay */
export type ViewerGene_FamiliesArgs = {
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


/** A wildcard used to support complex root queries in Relay */
export type ViewerMatch_ArtistArgs = {
  term: Scalars['String'],
  size?: Maybe<Scalars['Int']>,
  page?: Maybe<Scalars['Int']>,
  exclude_ids?: Maybe<Array<Maybe<Scalars['String']>>>
};


/** A wildcard used to support complex root queries in Relay */
export type ViewerMatch_GeneArgs = {
  term: Scalars['String'],
  size?: Maybe<Scalars['Int']>,
  page?: Maybe<Scalars['Int']>,
  exclude_ids?: Maybe<Array<Maybe<Scalars['String']>>>
};


/** A wildcard used to support complex root queries in Relay */
export type ViewerNodeArgs = {
  __id: Scalars['ID']
};


/** A wildcard used to support complex root queries in Relay */
export type ViewerOrdered_SetArgs = {
  id: Scalars['String']
};


/** A wildcard used to support complex root queries in Relay */
export type ViewerOrdered_SetsArgs = {
  key: Scalars['String'],
  public?: Maybe<Scalars['Boolean']>,
  page?: Maybe<Scalars['Int']>,
  size?: Maybe<Scalars['Int']>
};


/** A wildcard used to support complex root queries in Relay */
export type ViewerPartnerArgs = {
  id: Scalars['String']
};


/** A wildcard used to support complex root queries in Relay */
export type ViewerPartner_CategoriesArgs = {
  category_type?: Maybe<CategoryType>,
  internal?: Maybe<Scalars['Boolean']>,
  size?: Maybe<Scalars['Int']>
};


/** A wildcard used to support complex root queries in Relay */
export type ViewerPartner_CategoryArgs = {
  id: Scalars['String']
};


/** A wildcard used to support complex root queries in Relay */
export type ViewerPartner_ShowArgs = {
  id: Scalars['String']
};


/** A wildcard used to support complex root queries in Relay */
export type ViewerPartner_ShowsArgs = {
  at_a_fair?: Maybe<Scalars['Boolean']>,
  displayable?: Maybe<Scalars['Boolean']>,
  fair_id?: Maybe<Scalars['String']>,
  featured?: Maybe<Scalars['Boolean']>,
  ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  near?: Maybe<Near>,
  partner_id?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['Int']>,
  sort?: Maybe<PartnerShowSorts>,
  status?: Maybe<EventStatus>
};


/** A wildcard used to support complex root queries in Relay */
export type ViewerPartnersArgs = {
  default_profile_public?: Maybe<Scalars['Boolean']>,
  eligible_for_carousel?: Maybe<Scalars['Boolean']>,
  eligible_for_listing?: Maybe<Scalars['Boolean']>,
  eligible_for_primary_bucket?: Maybe<Scalars['Boolean']>,
  eligible_for_secondary_bucket?: Maybe<Scalars['Boolean']>,
  ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  has_full_profile?: Maybe<Scalars['Boolean']>,
  near?: Maybe<Scalars['String']>,
  page?: Maybe<Scalars['Int']>,
  partner_categories?: Maybe<Array<Maybe<Scalars['String']>>>,
  size?: Maybe<Scalars['Int']>,
  sort?: Maybe<PartnersSortType>,
  term?: Maybe<Scalars['String']>,
  type?: Maybe<Array<Maybe<PartnerClassification>>>
};


/** A wildcard used to support complex root queries in Relay */
export type ViewerProfileArgs = {
  id: Scalars['String']
};


/** A wildcard used to support complex root queries in Relay */
export type ViewerSaleArgs = {
  id: Scalars['String']
};


/** A wildcard used to support complex root queries in Relay */
export type ViewerSale_ArtworkArgs = {
  id: Scalars['String']
};


/** A wildcard used to support complex root queries in Relay */
export type ViewerSale_ArtworksArgs = {
  aggregations?: Maybe<Array<Maybe<SaleArtworkAggregation>>>,
  artist_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  include_artworks_by_followed_artists?: Maybe<Scalars['Boolean']>,
  live_sale?: Maybe<Scalars['Boolean']>,
  is_auction?: Maybe<Scalars['Boolean']>,
  gene_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  estimate_range?: Maybe<Scalars['String']>,
  page?: Maybe<Scalars['Int']>,
  sale_id?: Maybe<Scalars['ID']>,
  size?: Maybe<Scalars['Int']>,
  sort?: Maybe<Scalars['String']>,
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


/** A wildcard used to support complex root queries in Relay */
export type ViewerSalesArgs = {
  is_auction?: Maybe<Scalars['Boolean']>,
  ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  live?: Maybe<Scalars['Boolean']>,
  published?: Maybe<Scalars['Boolean']>,
  size?: Maybe<Scalars['Int']>,
  sort?: Maybe<SaleSorts>
};


/** A wildcard used to support complex root queries in Relay */
export type ViewerSearchArgs = {
  query: Scalars['String'],
  entities?: Maybe<Array<Maybe<SearchEntity>>>,
  mode?: Maybe<SearchMode>,
  aggregations?: Maybe<Array<Maybe<SearchAggregation>>>,
  page?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>
};


/** A wildcard used to support complex root queries in Relay */
export type ViewerShowArgs = {
  id: Scalars['String']
};


/** A wildcard used to support complex root queries in Relay */
export type ViewerTagArgs = {
  id: Scalars['String']
};


/** A wildcard used to support complex root queries in Relay */
export type ViewerTrending_ArtistsArgs = {
  double_time_period?: Maybe<Scalars['Boolean']>,
  method?: Maybe<Scalars['String']>,
  name: TrendingMetrics,
  size?: Maybe<Scalars['Int']>
};


/** A wildcard used to support complex root queries in Relay */
export type ViewerUserArgs = {
  email?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>
};


/** A wildcard used to support complex root queries in Relay */
export type ViewerUsersArgs = {
  ids?: Maybe<Array<Maybe<Scalars['String']>>>
};


/** A wildcard used to support complex root queries in Relay */
export type ViewerPopular_ArtistsArgs = {
  exclude_followed_artists?: Maybe<Scalars['Boolean']>,
  exclude_artist_ids?: Maybe<Array<Maybe<Scalars['String']>>>,
  size?: Maybe<Scalars['Int']>
};
