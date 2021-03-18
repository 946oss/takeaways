export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars["Boolean"]>;
  ne?: Maybe<Scalars["Boolean"]>;
  in?: Maybe<Array<Maybe<Scalars["Boolean"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["Boolean"]>>>;
};

export type ContentfulAsset = Node & {
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  contentful_id?: Maybe<Scalars["String"]>;
  spaceId?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["Date"]>;
  updatedAt?: Maybe<Scalars["Date"]>;
  file?: Maybe<ContentfulAssetFile>;
  title?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  node_locale?: Maybe<Scalars["String"]>;
  sys?: Maybe<ContentfulAssetSys>;
  fixed?: Maybe<ContentfulFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ContentfulResolutions>;
  fluid?: Maybe<ContentfulFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ContentfulSizes>;
  resize?: Maybe<ContentfulResize>;
};

export type ContentfulAssetCreatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type ContentfulAssetUpdatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type ContentfulAssetFixedArgs = {
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  quality?: Maybe<Scalars["Int"]>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars["String"]>;
};

export type ContentfulAssetResolutionsArgs = {
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  quality?: Maybe<Scalars["Int"]>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars["String"]>;
};

export type ContentfulAssetFluidArgs = {
  maxWidth?: Maybe<Scalars["Int"]>;
  maxHeight?: Maybe<Scalars["Int"]>;
  quality?: Maybe<Scalars["Int"]>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars["String"]>;
  sizes?: Maybe<Scalars["String"]>;
};

export type ContentfulAssetSizesArgs = {
  maxWidth?: Maybe<Scalars["Int"]>;
  maxHeight?: Maybe<Scalars["Int"]>;
  quality?: Maybe<Scalars["Int"]>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars["String"]>;
  sizes?: Maybe<Scalars["String"]>;
};

export type ContentfulAssetResizeArgs = {
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  quality?: Maybe<Scalars["Int"]>;
  jpegProgressive?: Maybe<Scalars["Boolean"]>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  toFormat?: Maybe<ContentfulImageFormat>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars["String"]>;
};

export type ContentfulAssetConnection = {
  totalCount: Scalars["Int"];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<ContentfulAssetGroupConnection>;
};

export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetEdge = {
  next?: Maybe<ContentfulAsset>;
  node: ContentfulAsset;
  previous?: Maybe<ContentfulAsset>;
};

export type ContentfulAssetFieldsEnum =
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"
  | "contentful_id"
  | "spaceId"
  | "createdAt"
  | "updatedAt"
  | "file___url"
  | "file___details___size"
  | "file___details___image___width"
  | "file___details___image___height"
  | "file___fileName"
  | "file___contentType"
  | "title"
  | "description"
  | "node_locale"
  | "sys___revision"
  | "fixed___base64"
  | "fixed___tracedSVG"
  | "fixed___aspectRatio"
  | "fixed___width"
  | "fixed___height"
  | "fixed___src"
  | "fixed___srcSet"
  | "fixed___srcWebp"
  | "fixed___srcSetWebp"
  | "resolutions___base64"
  | "resolutions___tracedSVG"
  | "resolutions___aspectRatio"
  | "resolutions___width"
  | "resolutions___height"
  | "resolutions___src"
  | "resolutions___srcSet"
  | "resolutions___srcWebp"
  | "resolutions___srcSetWebp"
  | "fluid___base64"
  | "fluid___tracedSVG"
  | "fluid___aspectRatio"
  | "fluid___src"
  | "fluid___srcSet"
  | "fluid___srcWebp"
  | "fluid___srcSetWebp"
  | "fluid___sizes"
  | "sizes___base64"
  | "sizes___tracedSVG"
  | "sizes___aspectRatio"
  | "sizes___src"
  | "sizes___srcSet"
  | "sizes___srcWebp"
  | "sizes___srcSetWebp"
  | "sizes___sizes"
  | "resize___base64"
  | "resize___tracedSVG"
  | "resize___src"
  | "resize___width"
  | "resize___height"
  | "resize___aspectRatio";

export type ContentfulAssetFile = {
  url?: Maybe<Scalars["String"]>;
  details?: Maybe<ContentfulAssetFileDetails>;
  fileName?: Maybe<Scalars["String"]>;
  contentType?: Maybe<Scalars["String"]>;
};

export type ContentfulAssetFileDetails = {
  size?: Maybe<Scalars["Int"]>;
  image?: Maybe<ContentfulAssetFileDetailsImage>;
};

export type ContentfulAssetFileDetailsFilterInput = {
  size?: Maybe<IntQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFileDetailsImageFilterInput>;
};

export type ContentfulAssetFileDetailsImage = {
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
};

export type ContentfulAssetFileDetailsImageFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulAssetFileFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  details?: Maybe<ContentfulAssetFileDetailsFilterInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  contentType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAssetFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulAssetSysFilterInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  resolutions?: Maybe<ContentfulResolutionsFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  sizes?: Maybe<ContentfulSizesFilterInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
};

export type ContentfulAssetFilterListInput = {
  elemMatch?: Maybe<ContentfulAssetFilterInput>;
};

export type ContentfulAssetGroupConnection = {
  totalCount: Scalars["Int"];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type ContentfulAssetSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAssetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulAssetSys = {
  revision?: Maybe<Scalars["Int"]>;
};

export type ContentfulAssetSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulContentType = Node & {
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars["String"]>;
  displayField?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
};

export type ContentfulContentTypeConnection = {
  totalCount: Scalars["Int"];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<ContentfulContentTypeGroupConnection>;
};

export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeEdge = {
  next?: Maybe<ContentfulContentType>;
  node: ContentfulContentType;
  previous?: Maybe<ContentfulContentType>;
};

export type ContentfulContentTypeFieldsEnum =
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"
  | "name"
  | "displayField"
  | "description";

export type ContentfulContentTypeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulContentTypeGroupConnection = {
  totalCount: Scalars["Int"];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type ContentfulContentTypeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulContentTypeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulFixed = {
  base64?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
  aspectRatio?: Maybe<Scalars["Float"]>;
  width: Scalars["Float"];
  height: Scalars["Float"];
  src: Scalars["String"];
  srcSet: Scalars["String"];
  srcWebp?: Maybe<Scalars["String"]>;
  srcSetWebp?: Maybe<Scalars["String"]>;
};

export type ContentfulFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulFluid = {
  base64?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
  aspectRatio: Scalars["Float"];
  src: Scalars["String"];
  srcSet: Scalars["String"];
  srcWebp?: Maybe<Scalars["String"]>;
  srcSetWebp?: Maybe<Scalars["String"]>;
  sizes: Scalars["String"];
};

export type ContentfulFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulImageCropFocus =
  | "TOP"
  | "TOP_LEFT"
  | "TOP_RIGHT"
  | "BOTTOM"
  | "BOTTOM_RIGHT"
  | "BOTTOM_LEFT"
  | "RIGHT"
  | "LEFT"
  | "FACE"
  | "FACES"
  | "CENTER";

export type ContentfulImageFormat = "NO_CHANGE" | "JPG" | "PNG" | "WEBP";

export type ContentfulPlace = Node & {
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars["String"]>;
  official?: Maybe<Scalars["Boolean"]>;
  location?: Maybe<ContentfulPlaceLocation>;
  address?: Maybe<Scalars["String"]>;
  tel?: Maybe<Array<Maybe<Scalars["String"]>>>;
  closed_on?: Maybe<Array<Maybe<Scalars["String"]>>>;
  business_hours?: Maybe<Scalars["String"]>;
  website?: Maybe<Scalars["String"]>;
  twitter?: Maybe<Scalars["String"]>;
  facebook?: Maybe<Scalars["String"]>;
  pictures?: Maybe<Array<Maybe<ContentfulAsset>>>;
  menu?: Maybe<Array<Maybe<ContentfulAsset>>>;
  tags?: Maybe<Array<Maybe<ContentfulPlaceTag>>>;
  description?: Maybe<ContentfulPlaceDescriptionTextNode>;
  message?: Maybe<ContentfulPlaceMessageRichTextNode>;
  spaceId?: Maybe<Scalars["String"]>;
  contentful_id?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["Date"]>;
  updatedAt?: Maybe<Scalars["Date"]>;
  sys?: Maybe<ContentfulPlaceSys>;
  node_locale?: Maybe<Scalars["String"]>;
  childContentfulPlaceDescriptionTextNode?: Maybe<
    ContentfulPlaceDescriptionTextNode
  >;
  childContentfulPlaceMessageRichTextNode?: Maybe<
    ContentfulPlaceMessageRichTextNode
  >;
};

export type ContentfulPlaceCreatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type ContentfulPlaceUpdatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type ContentfulPlaceConnection = {
  totalCount: Scalars["Int"];
  edges: Array<ContentfulPlaceEdge>;
  nodes: Array<ContentfulPlace>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<ContentfulPlaceGroupConnection>;
};

export type ContentfulPlaceConnectionDistinctArgs = {
  field: ContentfulPlaceFieldsEnum;
};

export type ContentfulPlaceConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: ContentfulPlaceFieldsEnum;
};

export type ContentfulPlaceDescriptionTextNode = Node & {
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  description?: Maybe<Scalars["String"]>;
};

export type ContentfulPlaceDescriptionTextNodeConnection = {
  totalCount: Scalars["Int"];
  edges: Array<ContentfulPlaceDescriptionTextNodeEdge>;
  nodes: Array<ContentfulPlaceDescriptionTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<ContentfulPlaceDescriptionTextNodeGroupConnection>;
};

export type ContentfulPlaceDescriptionTextNodeConnectionDistinctArgs = {
  field: ContentfulPlaceDescriptionTextNodeFieldsEnum;
};

export type ContentfulPlaceDescriptionTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: ContentfulPlaceDescriptionTextNodeFieldsEnum;
};

export type ContentfulPlaceDescriptionTextNodeEdge = {
  next?: Maybe<ContentfulPlaceDescriptionTextNode>;
  node: ContentfulPlaceDescriptionTextNode;
  previous?: Maybe<ContentfulPlaceDescriptionTextNode>;
};

export type ContentfulPlaceDescriptionTextNodeFieldsEnum =
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"
  | "description";

export type ContentfulPlaceDescriptionTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulPlaceDescriptionTextNodeGroupConnection = {
  totalCount: Scalars["Int"];
  edges: Array<ContentfulPlaceDescriptionTextNodeEdge>;
  nodes: Array<ContentfulPlaceDescriptionTextNode>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type ContentfulPlaceDescriptionTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPlaceDescriptionTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulPlaceEdge = {
  next?: Maybe<ContentfulPlace>;
  node: ContentfulPlace;
  previous?: Maybe<ContentfulPlace>;
};

export type ContentfulPlaceFieldsEnum =
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"
  | "name"
  | "official"
  | "location___lon"
  | "location___lat"
  | "address"
  | "tel"
  | "closed_on"
  | "business_hours"
  | "website"
  | "twitter"
  | "facebook"
  | "pictures"
  | "pictures___id"
  | "pictures___parent___id"
  | "pictures___parent___parent___id"
  | "pictures___parent___parent___children"
  | "pictures___parent___children"
  | "pictures___parent___children___id"
  | "pictures___parent___children___children"
  | "pictures___parent___internal___content"
  | "pictures___parent___internal___contentDigest"
  | "pictures___parent___internal___description"
  | "pictures___parent___internal___fieldOwners"
  | "pictures___parent___internal___ignoreType"
  | "pictures___parent___internal___mediaType"
  | "pictures___parent___internal___owner"
  | "pictures___parent___internal___type"
  | "pictures___children"
  | "pictures___children___id"
  | "pictures___children___parent___id"
  | "pictures___children___parent___children"
  | "pictures___children___children"
  | "pictures___children___children___id"
  | "pictures___children___children___children"
  | "pictures___children___internal___content"
  | "pictures___children___internal___contentDigest"
  | "pictures___children___internal___description"
  | "pictures___children___internal___fieldOwners"
  | "pictures___children___internal___ignoreType"
  | "pictures___children___internal___mediaType"
  | "pictures___children___internal___owner"
  | "pictures___children___internal___type"
  | "pictures___internal___content"
  | "pictures___internal___contentDigest"
  | "pictures___internal___description"
  | "pictures___internal___fieldOwners"
  | "pictures___internal___ignoreType"
  | "pictures___internal___mediaType"
  | "pictures___internal___owner"
  | "pictures___internal___type"
  | "pictures___contentful_id"
  | "pictures___spaceId"
  | "pictures___createdAt"
  | "pictures___updatedAt"
  | "pictures___file___url"
  | "pictures___file___details___size"
  | "pictures___file___fileName"
  | "pictures___file___contentType"
  | "pictures___title"
  | "pictures___description"
  | "pictures___node_locale"
  | "pictures___sys___revision"
  | "pictures___fixed___base64"
  | "pictures___fixed___tracedSVG"
  | "pictures___fixed___aspectRatio"
  | "pictures___fixed___width"
  | "pictures___fixed___height"
  | "pictures___fixed___src"
  | "pictures___fixed___srcSet"
  | "pictures___fixed___srcWebp"
  | "pictures___fixed___srcSetWebp"
  | "pictures___resolutions___base64"
  | "pictures___resolutions___tracedSVG"
  | "pictures___resolutions___aspectRatio"
  | "pictures___resolutions___width"
  | "pictures___resolutions___height"
  | "pictures___resolutions___src"
  | "pictures___resolutions___srcSet"
  | "pictures___resolutions___srcWebp"
  | "pictures___resolutions___srcSetWebp"
  | "pictures___fluid___base64"
  | "pictures___fluid___tracedSVG"
  | "pictures___fluid___aspectRatio"
  | "pictures___fluid___src"
  | "pictures___fluid___srcSet"
  | "pictures___fluid___srcWebp"
  | "pictures___fluid___srcSetWebp"
  | "pictures___fluid___sizes"
  | "pictures___sizes___base64"
  | "pictures___sizes___tracedSVG"
  | "pictures___sizes___aspectRatio"
  | "pictures___sizes___src"
  | "pictures___sizes___srcSet"
  | "pictures___sizes___srcWebp"
  | "pictures___sizes___srcSetWebp"
  | "pictures___sizes___sizes"
  | "pictures___resize___base64"
  | "pictures___resize___tracedSVG"
  | "pictures___resize___src"
  | "pictures___resize___width"
  | "pictures___resize___height"
  | "pictures___resize___aspectRatio"
  | "menu"
  | "menu___id"
  | "menu___parent___id"
  | "menu___parent___parent___id"
  | "menu___parent___parent___children"
  | "menu___parent___children"
  | "menu___parent___children___id"
  | "menu___parent___children___children"
  | "menu___parent___internal___content"
  | "menu___parent___internal___contentDigest"
  | "menu___parent___internal___description"
  | "menu___parent___internal___fieldOwners"
  | "menu___parent___internal___ignoreType"
  | "menu___parent___internal___mediaType"
  | "menu___parent___internal___owner"
  | "menu___parent___internal___type"
  | "menu___children"
  | "menu___children___id"
  | "menu___children___parent___id"
  | "menu___children___parent___children"
  | "menu___children___children"
  | "menu___children___children___id"
  | "menu___children___children___children"
  | "menu___children___internal___content"
  | "menu___children___internal___contentDigest"
  | "menu___children___internal___description"
  | "menu___children___internal___fieldOwners"
  | "menu___children___internal___ignoreType"
  | "menu___children___internal___mediaType"
  | "menu___children___internal___owner"
  | "menu___children___internal___type"
  | "menu___internal___content"
  | "menu___internal___contentDigest"
  | "menu___internal___description"
  | "menu___internal___fieldOwners"
  | "menu___internal___ignoreType"
  | "menu___internal___mediaType"
  | "menu___internal___owner"
  | "menu___internal___type"
  | "menu___contentful_id"
  | "menu___spaceId"
  | "menu___createdAt"
  | "menu___updatedAt"
  | "menu___file___url"
  | "menu___file___details___size"
  | "menu___file___fileName"
  | "menu___file___contentType"
  | "menu___title"
  | "menu___description"
  | "menu___node_locale"
  | "menu___sys___revision"
  | "menu___fixed___base64"
  | "menu___fixed___tracedSVG"
  | "menu___fixed___aspectRatio"
  | "menu___fixed___width"
  | "menu___fixed___height"
  | "menu___fixed___src"
  | "menu___fixed___srcSet"
  | "menu___fixed___srcWebp"
  | "menu___fixed___srcSetWebp"
  | "menu___resolutions___base64"
  | "menu___resolutions___tracedSVG"
  | "menu___resolutions___aspectRatio"
  | "menu___resolutions___width"
  | "menu___resolutions___height"
  | "menu___resolutions___src"
  | "menu___resolutions___srcSet"
  | "menu___resolutions___srcWebp"
  | "menu___resolutions___srcSetWebp"
  | "menu___fluid___base64"
  | "menu___fluid___tracedSVG"
  | "menu___fluid___aspectRatio"
  | "menu___fluid___src"
  | "menu___fluid___srcSet"
  | "menu___fluid___srcWebp"
  | "menu___fluid___srcSetWebp"
  | "menu___fluid___sizes"
  | "menu___sizes___base64"
  | "menu___sizes___tracedSVG"
  | "menu___sizes___aspectRatio"
  | "menu___sizes___src"
  | "menu___sizes___srcSet"
  | "menu___sizes___srcWebp"
  | "menu___sizes___srcSetWebp"
  | "menu___sizes___sizes"
  | "menu___resize___base64"
  | "menu___resize___tracedSVG"
  | "menu___resize___src"
  | "menu___resize___width"
  | "menu___resize___height"
  | "menu___resize___aspectRatio"
  | "tags"
  | "tags___id"
  | "tags___parent___id"
  | "tags___parent___parent___id"
  | "tags___parent___parent___children"
  | "tags___parent___children"
  | "tags___parent___children___id"
  | "tags___parent___children___children"
  | "tags___parent___internal___content"
  | "tags___parent___internal___contentDigest"
  | "tags___parent___internal___description"
  | "tags___parent___internal___fieldOwners"
  | "tags___parent___internal___ignoreType"
  | "tags___parent___internal___mediaType"
  | "tags___parent___internal___owner"
  | "tags___parent___internal___type"
  | "tags___children"
  | "tags___children___id"
  | "tags___children___parent___id"
  | "tags___children___parent___children"
  | "tags___children___children"
  | "tags___children___children___id"
  | "tags___children___children___children"
  | "tags___children___internal___content"
  | "tags___children___internal___contentDigest"
  | "tags___children___internal___description"
  | "tags___children___internal___fieldOwners"
  | "tags___children___internal___ignoreType"
  | "tags___children___internal___mediaType"
  | "tags___children___internal___owner"
  | "tags___children___internal___type"
  | "tags___internal___content"
  | "tags___internal___contentDigest"
  | "tags___internal___description"
  | "tags___internal___fieldOwners"
  | "tags___internal___ignoreType"
  | "tags___internal___mediaType"
  | "tags___internal___owner"
  | "tags___internal___type"
  | "tags___name"
  | "tags___slug"
  | "tags___place"
  | "tags___place___id"
  | "tags___place___parent___id"
  | "tags___place___parent___children"
  | "tags___place___children"
  | "tags___place___children___id"
  | "tags___place___children___children"
  | "tags___place___internal___content"
  | "tags___place___internal___contentDigest"
  | "tags___place___internal___description"
  | "tags___place___internal___fieldOwners"
  | "tags___place___internal___ignoreType"
  | "tags___place___internal___mediaType"
  | "tags___place___internal___owner"
  | "tags___place___internal___type"
  | "tags___place___name"
  | "tags___place___official"
  | "tags___place___location___lon"
  | "tags___place___location___lat"
  | "tags___place___address"
  | "tags___place___tel"
  | "tags___place___closed_on"
  | "tags___place___business_hours"
  | "tags___place___website"
  | "tags___place___twitter"
  | "tags___place___facebook"
  | "tags___place___pictures"
  | "tags___place___pictures___id"
  | "tags___place___pictures___children"
  | "tags___place___pictures___contentful_id"
  | "tags___place___pictures___spaceId"
  | "tags___place___pictures___createdAt"
  | "tags___place___pictures___updatedAt"
  | "tags___place___pictures___title"
  | "tags___place___pictures___description"
  | "tags___place___pictures___node_locale"
  | "tags___place___menu"
  | "tags___place___menu___id"
  | "tags___place___menu___children"
  | "tags___place___menu___contentful_id"
  | "tags___place___menu___spaceId"
  | "tags___place___menu___createdAt"
  | "tags___place___menu___updatedAt"
  | "tags___place___menu___title"
  | "tags___place___menu___description"
  | "tags___place___menu___node_locale"
  | "tags___place___tags"
  | "tags___place___tags___id"
  | "tags___place___tags___children"
  | "tags___place___tags___name"
  | "tags___place___tags___slug"
  | "tags___place___tags___place"
  | "tags___place___tags___spaceId"
  | "tags___place___tags___contentful_id"
  | "tags___place___tags___createdAt"
  | "tags___place___tags___updatedAt"
  | "tags___place___tags___node_locale"
  | "tags___place___description___id"
  | "tags___place___description___children"
  | "tags___place___description___description"
  | "tags___place___message___id"
  | "tags___place___message___children"
  | "tags___place___message___content"
  | "tags___place___message___nodeType"
  | "tags___place___message___message"
  | "tags___place___message___json"
  | "tags___place___spaceId"
  | "tags___place___contentful_id"
  | "tags___place___createdAt"
  | "tags___place___updatedAt"
  | "tags___place___sys___revision"
  | "tags___place___node_locale"
  | "tags___place___childContentfulPlaceDescriptionTextNode___id"
  | "tags___place___childContentfulPlaceDescriptionTextNode___children"
  | "tags___place___childContentfulPlaceDescriptionTextNode___description"
  | "tags___place___childContentfulPlaceMessageRichTextNode___id"
  | "tags___place___childContentfulPlaceMessageRichTextNode___children"
  | "tags___place___childContentfulPlaceMessageRichTextNode___content"
  | "tags___place___childContentfulPlaceMessageRichTextNode___nodeType"
  | "tags___place___childContentfulPlaceMessageRichTextNode___message"
  | "tags___place___childContentfulPlaceMessageRichTextNode___json"
  | "tags___spaceId"
  | "tags___contentful_id"
  | "tags___createdAt"
  | "tags___updatedAt"
  | "tags___sys___revision"
  | "tags___node_locale"
  | "description___id"
  | "description___parent___id"
  | "description___parent___parent___id"
  | "description___parent___parent___children"
  | "description___parent___children"
  | "description___parent___children___id"
  | "description___parent___children___children"
  | "description___parent___internal___content"
  | "description___parent___internal___contentDigest"
  | "description___parent___internal___description"
  | "description___parent___internal___fieldOwners"
  | "description___parent___internal___ignoreType"
  | "description___parent___internal___mediaType"
  | "description___parent___internal___owner"
  | "description___parent___internal___type"
  | "description___children"
  | "description___children___id"
  | "description___children___parent___id"
  | "description___children___parent___children"
  | "description___children___children"
  | "description___children___children___id"
  | "description___children___children___children"
  | "description___children___internal___content"
  | "description___children___internal___contentDigest"
  | "description___children___internal___description"
  | "description___children___internal___fieldOwners"
  | "description___children___internal___ignoreType"
  | "description___children___internal___mediaType"
  | "description___children___internal___owner"
  | "description___children___internal___type"
  | "description___internal___content"
  | "description___internal___contentDigest"
  | "description___internal___description"
  | "description___internal___fieldOwners"
  | "description___internal___ignoreType"
  | "description___internal___mediaType"
  | "description___internal___owner"
  | "description___internal___type"
  | "description___description"
  | "message___id"
  | "message___parent___id"
  | "message___parent___parent___id"
  | "message___parent___parent___children"
  | "message___parent___children"
  | "message___parent___children___id"
  | "message___parent___children___children"
  | "message___parent___internal___content"
  | "message___parent___internal___contentDigest"
  | "message___parent___internal___description"
  | "message___parent___internal___fieldOwners"
  | "message___parent___internal___ignoreType"
  | "message___parent___internal___mediaType"
  | "message___parent___internal___owner"
  | "message___parent___internal___type"
  | "message___children"
  | "message___children___id"
  | "message___children___parent___id"
  | "message___children___parent___children"
  | "message___children___children"
  | "message___children___children___id"
  | "message___children___children___children"
  | "message___children___internal___content"
  | "message___children___internal___contentDigest"
  | "message___children___internal___description"
  | "message___children___internal___fieldOwners"
  | "message___children___internal___ignoreType"
  | "message___children___internal___mediaType"
  | "message___children___internal___owner"
  | "message___children___internal___type"
  | "message___internal___content"
  | "message___internal___contentDigest"
  | "message___internal___description"
  | "message___internal___fieldOwners"
  | "message___internal___ignoreType"
  | "message___internal___mediaType"
  | "message___internal___owner"
  | "message___internal___type"
  | "message___content"
  | "message___content___content"
  | "message___content___content___value"
  | "message___content___content___nodeType"
  | "message___content___content___content"
  | "message___content___nodeType"
  | "message___nodeType"
  | "message___message"
  | "message___json"
  | "spaceId"
  | "contentful_id"
  | "createdAt"
  | "updatedAt"
  | "sys___revision"
  | "sys___contentType___sys___type"
  | "sys___contentType___sys___linkType"
  | "sys___contentType___sys___id"
  | "sys___contentType___sys___contentful_id"
  | "node_locale"
  | "childContentfulPlaceDescriptionTextNode___id"
  | "childContentfulPlaceDescriptionTextNode___parent___id"
  | "childContentfulPlaceDescriptionTextNode___parent___parent___id"
  | "childContentfulPlaceDescriptionTextNode___parent___parent___children"
  | "childContentfulPlaceDescriptionTextNode___parent___children"
  | "childContentfulPlaceDescriptionTextNode___parent___children___id"
  | "childContentfulPlaceDescriptionTextNode___parent___children___children"
  | "childContentfulPlaceDescriptionTextNode___parent___internal___content"
  | "childContentfulPlaceDescriptionTextNode___parent___internal___contentDigest"
  | "childContentfulPlaceDescriptionTextNode___parent___internal___description"
  | "childContentfulPlaceDescriptionTextNode___parent___internal___fieldOwners"
  | "childContentfulPlaceDescriptionTextNode___parent___internal___ignoreType"
  | "childContentfulPlaceDescriptionTextNode___parent___internal___mediaType"
  | "childContentfulPlaceDescriptionTextNode___parent___internal___owner"
  | "childContentfulPlaceDescriptionTextNode___parent___internal___type"
  | "childContentfulPlaceDescriptionTextNode___children"
  | "childContentfulPlaceDescriptionTextNode___children___id"
  | "childContentfulPlaceDescriptionTextNode___children___parent___id"
  | "childContentfulPlaceDescriptionTextNode___children___parent___children"
  | "childContentfulPlaceDescriptionTextNode___children___children"
  | "childContentfulPlaceDescriptionTextNode___children___children___id"
  | "childContentfulPlaceDescriptionTextNode___children___children___children"
  | "childContentfulPlaceDescriptionTextNode___children___internal___content"
  | "childContentfulPlaceDescriptionTextNode___children___internal___contentDigest"
  | "childContentfulPlaceDescriptionTextNode___children___internal___description"
  | "childContentfulPlaceDescriptionTextNode___children___internal___fieldOwners"
  | "childContentfulPlaceDescriptionTextNode___children___internal___ignoreType"
  | "childContentfulPlaceDescriptionTextNode___children___internal___mediaType"
  | "childContentfulPlaceDescriptionTextNode___children___internal___owner"
  | "childContentfulPlaceDescriptionTextNode___children___internal___type"
  | "childContentfulPlaceDescriptionTextNode___internal___content"
  | "childContentfulPlaceDescriptionTextNode___internal___contentDigest"
  | "childContentfulPlaceDescriptionTextNode___internal___description"
  | "childContentfulPlaceDescriptionTextNode___internal___fieldOwners"
  | "childContentfulPlaceDescriptionTextNode___internal___ignoreType"
  | "childContentfulPlaceDescriptionTextNode___internal___mediaType"
  | "childContentfulPlaceDescriptionTextNode___internal___owner"
  | "childContentfulPlaceDescriptionTextNode___internal___type"
  | "childContentfulPlaceDescriptionTextNode___description"
  | "childContentfulPlaceMessageRichTextNode___id"
  | "childContentfulPlaceMessageRichTextNode___parent___id"
  | "childContentfulPlaceMessageRichTextNode___parent___parent___id"
  | "childContentfulPlaceMessageRichTextNode___parent___parent___children"
  | "childContentfulPlaceMessageRichTextNode___parent___children"
  | "childContentfulPlaceMessageRichTextNode___parent___children___id"
  | "childContentfulPlaceMessageRichTextNode___parent___children___children"
  | "childContentfulPlaceMessageRichTextNode___parent___internal___content"
  | "childContentfulPlaceMessageRichTextNode___parent___internal___contentDigest"
  | "childContentfulPlaceMessageRichTextNode___parent___internal___description"
  | "childContentfulPlaceMessageRichTextNode___parent___internal___fieldOwners"
  | "childContentfulPlaceMessageRichTextNode___parent___internal___ignoreType"
  | "childContentfulPlaceMessageRichTextNode___parent___internal___mediaType"
  | "childContentfulPlaceMessageRichTextNode___parent___internal___owner"
  | "childContentfulPlaceMessageRichTextNode___parent___internal___type"
  | "childContentfulPlaceMessageRichTextNode___children"
  | "childContentfulPlaceMessageRichTextNode___children___id"
  | "childContentfulPlaceMessageRichTextNode___children___parent___id"
  | "childContentfulPlaceMessageRichTextNode___children___parent___children"
  | "childContentfulPlaceMessageRichTextNode___children___children"
  | "childContentfulPlaceMessageRichTextNode___children___children___id"
  | "childContentfulPlaceMessageRichTextNode___children___children___children"
  | "childContentfulPlaceMessageRichTextNode___children___internal___content"
  | "childContentfulPlaceMessageRichTextNode___children___internal___contentDigest"
  | "childContentfulPlaceMessageRichTextNode___children___internal___description"
  | "childContentfulPlaceMessageRichTextNode___children___internal___fieldOwners"
  | "childContentfulPlaceMessageRichTextNode___children___internal___ignoreType"
  | "childContentfulPlaceMessageRichTextNode___children___internal___mediaType"
  | "childContentfulPlaceMessageRichTextNode___children___internal___owner"
  | "childContentfulPlaceMessageRichTextNode___children___internal___type"
  | "childContentfulPlaceMessageRichTextNode___internal___content"
  | "childContentfulPlaceMessageRichTextNode___internal___contentDigest"
  | "childContentfulPlaceMessageRichTextNode___internal___description"
  | "childContentfulPlaceMessageRichTextNode___internal___fieldOwners"
  | "childContentfulPlaceMessageRichTextNode___internal___ignoreType"
  | "childContentfulPlaceMessageRichTextNode___internal___mediaType"
  | "childContentfulPlaceMessageRichTextNode___internal___owner"
  | "childContentfulPlaceMessageRichTextNode___internal___type"
  | "childContentfulPlaceMessageRichTextNode___content"
  | "childContentfulPlaceMessageRichTextNode___content___content"
  | "childContentfulPlaceMessageRichTextNode___content___content___value"
  | "childContentfulPlaceMessageRichTextNode___content___content___nodeType"
  | "childContentfulPlaceMessageRichTextNode___content___content___content"
  | "childContentfulPlaceMessageRichTextNode___content___nodeType"
  | "childContentfulPlaceMessageRichTextNode___nodeType"
  | "childContentfulPlaceMessageRichTextNode___message"
  | "childContentfulPlaceMessageRichTextNode___json";

export type ContentfulPlaceFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  official?: Maybe<BooleanQueryOperatorInput>;
  location?: Maybe<ContentfulPlaceLocationFilterInput>;
  address?: Maybe<StringQueryOperatorInput>;
  tel?: Maybe<StringQueryOperatorInput>;
  closed_on?: Maybe<StringQueryOperatorInput>;
  business_hours?: Maybe<StringQueryOperatorInput>;
  website?: Maybe<StringQueryOperatorInput>;
  twitter?: Maybe<StringQueryOperatorInput>;
  facebook?: Maybe<StringQueryOperatorInput>;
  pictures?: Maybe<ContentfulAssetFilterListInput>;
  menu?: Maybe<ContentfulAssetFilterListInput>;
  tags?: Maybe<ContentfulPlaceTagFilterListInput>;
  description?: Maybe<ContentfulPlaceDescriptionTextNodeFilterInput>;
  message?: Maybe<ContentfulPlaceMessageRichTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPlaceSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulPlaceDescriptionTextNode?: Maybe<
    ContentfulPlaceDescriptionTextNodeFilterInput
  >;
  childContentfulPlaceMessageRichTextNode?: Maybe<
    ContentfulPlaceMessageRichTextNodeFilterInput
  >;
};

export type ContentfulPlaceFilterListInput = {
  elemMatch?: Maybe<ContentfulPlaceFilterInput>;
};

export type ContentfulPlaceGroupConnection = {
  totalCount: Scalars["Int"];
  edges: Array<ContentfulPlaceEdge>;
  nodes: Array<ContentfulPlace>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type ContentfulPlaceLocation = {
  lon?: Maybe<Scalars["Float"]>;
  lat?: Maybe<Scalars["Float"]>;
};

export type ContentfulPlaceLocationFilterInput = {
  lon?: Maybe<FloatQueryOperatorInput>;
  lat?: Maybe<FloatQueryOperatorInput>;
};

export type ContentfulPlaceMessageRichTextNode = Node & {
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  content?: Maybe<Array<Maybe<ContentfulPlaceMessageRichTextNodeContent>>>;
  /** @deprecated This field is deprecated, please use 'json' instead. */
  nodeType?: Maybe<Scalars["String"]>;
  message?: Maybe<Scalars["String"]>;
  json?: Maybe<Scalars["JSON"]>;
};

export type ContentfulPlaceMessageRichTextNodeConnection = {
  totalCount: Scalars["Int"];
  edges: Array<ContentfulPlaceMessageRichTextNodeEdge>;
  nodes: Array<ContentfulPlaceMessageRichTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<ContentfulPlaceMessageRichTextNodeGroupConnection>;
};

export type ContentfulPlaceMessageRichTextNodeConnectionDistinctArgs = {
  field: ContentfulPlaceMessageRichTextNodeFieldsEnum;
};

export type ContentfulPlaceMessageRichTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: ContentfulPlaceMessageRichTextNodeFieldsEnum;
};

export type ContentfulPlaceMessageRichTextNodeContent = {
  content?: Maybe<
    Array<Maybe<ContentfulPlaceMessageRichTextNodeContentContent>>
  >;
  nodeType?: Maybe<Scalars["String"]>;
};

export type ContentfulPlaceMessageRichTextNodeContentContent = {
  data?: Maybe<ContentfulPlaceMessageRichTextNodeContentContentData>;
  value?: Maybe<Scalars["String"]>;
  nodeType?: Maybe<Scalars["String"]>;
  content?: Maybe<
    Array<Maybe<ContentfulPlaceMessageRichTextNodeContentContentContent>>
  >;
};

export type ContentfulPlaceMessageRichTextNodeContentContentContent = {
  nodeType?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["String"]>;
};

export type ContentfulPlaceMessageRichTextNodeContentContentContentFilterInput = {
  nodeType?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulPlaceMessageRichTextNodeContentContentContentFilterListInput = {
  elemMatch?: Maybe<
    ContentfulPlaceMessageRichTextNodeContentContentContentFilterInput
  >;
};

export type ContentfulPlaceMessageRichTextNodeContentContentData = {
  uri?: Maybe<Scalars["String"]>;
};

export type ContentfulPlaceMessageRichTextNodeContentContentDataFilterInput = {
  uri?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulPlaceMessageRichTextNodeContentContentFilterInput = {
  data?: Maybe<ContentfulPlaceMessageRichTextNodeContentContentDataFilterInput>;
  value?: Maybe<StringQueryOperatorInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<
    ContentfulPlaceMessageRichTextNodeContentContentContentFilterListInput
  >;
};

export type ContentfulPlaceMessageRichTextNodeContentContentFilterListInput = {
  elemMatch?: Maybe<
    ContentfulPlaceMessageRichTextNodeContentContentFilterInput
  >;
};

export type ContentfulPlaceMessageRichTextNodeContentFilterInput = {
  content?: Maybe<
    ContentfulPlaceMessageRichTextNodeContentContentFilterListInput
  >;
  nodeType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulPlaceMessageRichTextNodeContentFilterListInput = {
  elemMatch?: Maybe<ContentfulPlaceMessageRichTextNodeContentFilterInput>;
};

export type ContentfulPlaceMessageRichTextNodeEdge = {
  next?: Maybe<ContentfulPlaceMessageRichTextNode>;
  node: ContentfulPlaceMessageRichTextNode;
  previous?: Maybe<ContentfulPlaceMessageRichTextNode>;
};

export type ContentfulPlaceMessageRichTextNodeFieldsEnum =
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"
  | "content"
  | "content___content"
  | "content___content___data___uri"
  | "content___content___value"
  | "content___content___nodeType"
  | "content___content___content"
  | "content___content___content___nodeType"
  | "content___content___content___value"
  | "content___nodeType"
  | "nodeType"
  | "message"
  | "json";

export type ContentfulPlaceMessageRichTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  content?: Maybe<ContentfulPlaceMessageRichTextNodeContentFilterListInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  message?: Maybe<StringQueryOperatorInput>;
  json?: Maybe<JsonQueryOperatorInput>;
};

export type ContentfulPlaceMessageRichTextNodeGroupConnection = {
  totalCount: Scalars["Int"];
  edges: Array<ContentfulPlaceMessageRichTextNodeEdge>;
  nodes: Array<ContentfulPlaceMessageRichTextNode>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type ContentfulPlaceMessageRichTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPlaceMessageRichTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulPlaceSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPlaceFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulPlaceSys = {
  revision?: Maybe<Scalars["Int"]>;
  contentType?: Maybe<ContentfulPlaceSysContentType>;
};

export type ContentfulPlaceSysContentType = {
  sys?: Maybe<ContentfulPlaceSysContentTypeSys>;
};

export type ContentfulPlaceSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulPlaceSysContentTypeSysFilterInput>;
};

export type ContentfulPlaceSysContentTypeSys = {
  type?: Maybe<Scalars["String"]>;
  linkType?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  contentful_id?: Maybe<Scalars["String"]>;
};

export type ContentfulPlaceSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulPlaceSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulPlaceSysContentTypeFilterInput>;
};

export type ContentfulPlaceTag = Node & {
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  place?: Maybe<Array<Maybe<ContentfulPlace>>>;
  spaceId?: Maybe<Scalars["String"]>;
  contentful_id?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["Date"]>;
  updatedAt?: Maybe<Scalars["Date"]>;
  sys?: Maybe<ContentfulPlaceTagSys>;
  node_locale?: Maybe<Scalars["String"]>;
};

export type ContentfulPlaceTagCreatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type ContentfulPlaceTagUpdatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type ContentfulPlaceTagConnection = {
  totalCount: Scalars["Int"];
  edges: Array<ContentfulPlaceTagEdge>;
  nodes: Array<ContentfulPlaceTag>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<ContentfulPlaceTagGroupConnection>;
};

export type ContentfulPlaceTagConnectionDistinctArgs = {
  field: ContentfulPlaceTagFieldsEnum;
};

export type ContentfulPlaceTagConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: ContentfulPlaceTagFieldsEnum;
};

export type ContentfulPlaceTagEdge = {
  next?: Maybe<ContentfulPlaceTag>;
  node: ContentfulPlaceTag;
  previous?: Maybe<ContentfulPlaceTag>;
};

export type ContentfulPlaceTagFieldsEnum =
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"
  | "name"
  | "slug"
  | "place"
  | "place___id"
  | "place___parent___id"
  | "place___parent___parent___id"
  | "place___parent___parent___children"
  | "place___parent___children"
  | "place___parent___children___id"
  | "place___parent___children___children"
  | "place___parent___internal___content"
  | "place___parent___internal___contentDigest"
  | "place___parent___internal___description"
  | "place___parent___internal___fieldOwners"
  | "place___parent___internal___ignoreType"
  | "place___parent___internal___mediaType"
  | "place___parent___internal___owner"
  | "place___parent___internal___type"
  | "place___children"
  | "place___children___id"
  | "place___children___parent___id"
  | "place___children___parent___children"
  | "place___children___children"
  | "place___children___children___id"
  | "place___children___children___children"
  | "place___children___internal___content"
  | "place___children___internal___contentDigest"
  | "place___children___internal___description"
  | "place___children___internal___fieldOwners"
  | "place___children___internal___ignoreType"
  | "place___children___internal___mediaType"
  | "place___children___internal___owner"
  | "place___children___internal___type"
  | "place___internal___content"
  | "place___internal___contentDigest"
  | "place___internal___description"
  | "place___internal___fieldOwners"
  | "place___internal___ignoreType"
  | "place___internal___mediaType"
  | "place___internal___owner"
  | "place___internal___type"
  | "place___name"
  | "place___official"
  | "place___location___lon"
  | "place___location___lat"
  | "place___address"
  | "place___tel"
  | "place___closed_on"
  | "place___business_hours"
  | "place___website"
  | "place___twitter"
  | "place___facebook"
  | "place___pictures"
  | "place___pictures___id"
  | "place___pictures___parent___id"
  | "place___pictures___parent___children"
  | "place___pictures___children"
  | "place___pictures___children___id"
  | "place___pictures___children___children"
  | "place___pictures___internal___content"
  | "place___pictures___internal___contentDigest"
  | "place___pictures___internal___description"
  | "place___pictures___internal___fieldOwners"
  | "place___pictures___internal___ignoreType"
  | "place___pictures___internal___mediaType"
  | "place___pictures___internal___owner"
  | "place___pictures___internal___type"
  | "place___pictures___contentful_id"
  | "place___pictures___spaceId"
  | "place___pictures___createdAt"
  | "place___pictures___updatedAt"
  | "place___pictures___file___url"
  | "place___pictures___file___fileName"
  | "place___pictures___file___contentType"
  | "place___pictures___title"
  | "place___pictures___description"
  | "place___pictures___node_locale"
  | "place___pictures___sys___revision"
  | "place___pictures___fixed___base64"
  | "place___pictures___fixed___tracedSVG"
  | "place___pictures___fixed___aspectRatio"
  | "place___pictures___fixed___width"
  | "place___pictures___fixed___height"
  | "place___pictures___fixed___src"
  | "place___pictures___fixed___srcSet"
  | "place___pictures___fixed___srcWebp"
  | "place___pictures___fixed___srcSetWebp"
  | "place___pictures___resolutions___base64"
  | "place___pictures___resolutions___tracedSVG"
  | "place___pictures___resolutions___aspectRatio"
  | "place___pictures___resolutions___width"
  | "place___pictures___resolutions___height"
  | "place___pictures___resolutions___src"
  | "place___pictures___resolutions___srcSet"
  | "place___pictures___resolutions___srcWebp"
  | "place___pictures___resolutions___srcSetWebp"
  | "place___pictures___fluid___base64"
  | "place___pictures___fluid___tracedSVG"
  | "place___pictures___fluid___aspectRatio"
  | "place___pictures___fluid___src"
  | "place___pictures___fluid___srcSet"
  | "place___pictures___fluid___srcWebp"
  | "place___pictures___fluid___srcSetWebp"
  | "place___pictures___fluid___sizes"
  | "place___pictures___sizes___base64"
  | "place___pictures___sizes___tracedSVG"
  | "place___pictures___sizes___aspectRatio"
  | "place___pictures___sizes___src"
  | "place___pictures___sizes___srcSet"
  | "place___pictures___sizes___srcWebp"
  | "place___pictures___sizes___srcSetWebp"
  | "place___pictures___sizes___sizes"
  | "place___pictures___resize___base64"
  | "place___pictures___resize___tracedSVG"
  | "place___pictures___resize___src"
  | "place___pictures___resize___width"
  | "place___pictures___resize___height"
  | "place___pictures___resize___aspectRatio"
  | "place___menu"
  | "place___menu___id"
  | "place___menu___parent___id"
  | "place___menu___parent___children"
  | "place___menu___children"
  | "place___menu___children___id"
  | "place___menu___children___children"
  | "place___menu___internal___content"
  | "place___menu___internal___contentDigest"
  | "place___menu___internal___description"
  | "place___menu___internal___fieldOwners"
  | "place___menu___internal___ignoreType"
  | "place___menu___internal___mediaType"
  | "place___menu___internal___owner"
  | "place___menu___internal___type"
  | "place___menu___contentful_id"
  | "place___menu___spaceId"
  | "place___menu___createdAt"
  | "place___menu___updatedAt"
  | "place___menu___file___url"
  | "place___menu___file___fileName"
  | "place___menu___file___contentType"
  | "place___menu___title"
  | "place___menu___description"
  | "place___menu___node_locale"
  | "place___menu___sys___revision"
  | "place___menu___fixed___base64"
  | "place___menu___fixed___tracedSVG"
  | "place___menu___fixed___aspectRatio"
  | "place___menu___fixed___width"
  | "place___menu___fixed___height"
  | "place___menu___fixed___src"
  | "place___menu___fixed___srcSet"
  | "place___menu___fixed___srcWebp"
  | "place___menu___fixed___srcSetWebp"
  | "place___menu___resolutions___base64"
  | "place___menu___resolutions___tracedSVG"
  | "place___menu___resolutions___aspectRatio"
  | "place___menu___resolutions___width"
  | "place___menu___resolutions___height"
  | "place___menu___resolutions___src"
  | "place___menu___resolutions___srcSet"
  | "place___menu___resolutions___srcWebp"
  | "place___menu___resolutions___srcSetWebp"
  | "place___menu___fluid___base64"
  | "place___menu___fluid___tracedSVG"
  | "place___menu___fluid___aspectRatio"
  | "place___menu___fluid___src"
  | "place___menu___fluid___srcSet"
  | "place___menu___fluid___srcWebp"
  | "place___menu___fluid___srcSetWebp"
  | "place___menu___fluid___sizes"
  | "place___menu___sizes___base64"
  | "place___menu___sizes___tracedSVG"
  | "place___menu___sizes___aspectRatio"
  | "place___menu___sizes___src"
  | "place___menu___sizes___srcSet"
  | "place___menu___sizes___srcWebp"
  | "place___menu___sizes___srcSetWebp"
  | "place___menu___sizes___sizes"
  | "place___menu___resize___base64"
  | "place___menu___resize___tracedSVG"
  | "place___menu___resize___src"
  | "place___menu___resize___width"
  | "place___menu___resize___height"
  | "place___menu___resize___aspectRatio"
  | "place___tags"
  | "place___tags___id"
  | "place___tags___parent___id"
  | "place___tags___parent___children"
  | "place___tags___children"
  | "place___tags___children___id"
  | "place___tags___children___children"
  | "place___tags___internal___content"
  | "place___tags___internal___contentDigest"
  | "place___tags___internal___description"
  | "place___tags___internal___fieldOwners"
  | "place___tags___internal___ignoreType"
  | "place___tags___internal___mediaType"
  | "place___tags___internal___owner"
  | "place___tags___internal___type"
  | "place___tags___name"
  | "place___tags___slug"
  | "place___tags___place"
  | "place___tags___place___id"
  | "place___tags___place___children"
  | "place___tags___place___name"
  | "place___tags___place___official"
  | "place___tags___place___address"
  | "place___tags___place___tel"
  | "place___tags___place___closed_on"
  | "place___tags___place___business_hours"
  | "place___tags___place___website"
  | "place___tags___place___twitter"
  | "place___tags___place___facebook"
  | "place___tags___place___pictures"
  | "place___tags___place___menu"
  | "place___tags___place___tags"
  | "place___tags___place___spaceId"
  | "place___tags___place___contentful_id"
  | "place___tags___place___createdAt"
  | "place___tags___place___updatedAt"
  | "place___tags___place___node_locale"
  | "place___tags___spaceId"
  | "place___tags___contentful_id"
  | "place___tags___createdAt"
  | "place___tags___updatedAt"
  | "place___tags___sys___revision"
  | "place___tags___node_locale"
  | "place___description___id"
  | "place___description___parent___id"
  | "place___description___parent___children"
  | "place___description___children"
  | "place___description___children___id"
  | "place___description___children___children"
  | "place___description___internal___content"
  | "place___description___internal___contentDigest"
  | "place___description___internal___description"
  | "place___description___internal___fieldOwners"
  | "place___description___internal___ignoreType"
  | "place___description___internal___mediaType"
  | "place___description___internal___owner"
  | "place___description___internal___type"
  | "place___description___description"
  | "place___message___id"
  | "place___message___parent___id"
  | "place___message___parent___children"
  | "place___message___children"
  | "place___message___children___id"
  | "place___message___children___children"
  | "place___message___internal___content"
  | "place___message___internal___contentDigest"
  | "place___message___internal___description"
  | "place___message___internal___fieldOwners"
  | "place___message___internal___ignoreType"
  | "place___message___internal___mediaType"
  | "place___message___internal___owner"
  | "place___message___internal___type"
  | "place___message___content"
  | "place___message___content___content"
  | "place___message___content___nodeType"
  | "place___message___nodeType"
  | "place___message___message"
  | "place___message___json"
  | "place___spaceId"
  | "place___contentful_id"
  | "place___createdAt"
  | "place___updatedAt"
  | "place___sys___revision"
  | "place___node_locale"
  | "place___childContentfulPlaceDescriptionTextNode___id"
  | "place___childContentfulPlaceDescriptionTextNode___parent___id"
  | "place___childContentfulPlaceDescriptionTextNode___parent___children"
  | "place___childContentfulPlaceDescriptionTextNode___children"
  | "place___childContentfulPlaceDescriptionTextNode___children___id"
  | "place___childContentfulPlaceDescriptionTextNode___children___children"
  | "place___childContentfulPlaceDescriptionTextNode___internal___content"
  | "place___childContentfulPlaceDescriptionTextNode___internal___contentDigest"
  | "place___childContentfulPlaceDescriptionTextNode___internal___description"
  | "place___childContentfulPlaceDescriptionTextNode___internal___fieldOwners"
  | "place___childContentfulPlaceDescriptionTextNode___internal___ignoreType"
  | "place___childContentfulPlaceDescriptionTextNode___internal___mediaType"
  | "place___childContentfulPlaceDescriptionTextNode___internal___owner"
  | "place___childContentfulPlaceDescriptionTextNode___internal___type"
  | "place___childContentfulPlaceDescriptionTextNode___description"
  | "place___childContentfulPlaceMessageRichTextNode___id"
  | "place___childContentfulPlaceMessageRichTextNode___parent___id"
  | "place___childContentfulPlaceMessageRichTextNode___parent___children"
  | "place___childContentfulPlaceMessageRichTextNode___children"
  | "place___childContentfulPlaceMessageRichTextNode___children___id"
  | "place___childContentfulPlaceMessageRichTextNode___children___children"
  | "place___childContentfulPlaceMessageRichTextNode___internal___content"
  | "place___childContentfulPlaceMessageRichTextNode___internal___contentDigest"
  | "place___childContentfulPlaceMessageRichTextNode___internal___description"
  | "place___childContentfulPlaceMessageRichTextNode___internal___fieldOwners"
  | "place___childContentfulPlaceMessageRichTextNode___internal___ignoreType"
  | "place___childContentfulPlaceMessageRichTextNode___internal___mediaType"
  | "place___childContentfulPlaceMessageRichTextNode___internal___owner"
  | "place___childContentfulPlaceMessageRichTextNode___internal___type"
  | "place___childContentfulPlaceMessageRichTextNode___content"
  | "place___childContentfulPlaceMessageRichTextNode___content___content"
  | "place___childContentfulPlaceMessageRichTextNode___content___nodeType"
  | "place___childContentfulPlaceMessageRichTextNode___nodeType"
  | "place___childContentfulPlaceMessageRichTextNode___message"
  | "place___childContentfulPlaceMessageRichTextNode___json"
  | "spaceId"
  | "contentful_id"
  | "createdAt"
  | "updatedAt"
  | "sys___revision"
  | "sys___contentType___sys___type"
  | "sys___contentType___sys___linkType"
  | "sys___contentType___sys___id"
  | "sys___contentType___sys___contentful_id"
  | "node_locale";

export type ContentfulPlaceTagFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  place?: Maybe<ContentfulPlaceFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPlaceTagSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulPlaceTagFilterListInput = {
  elemMatch?: Maybe<ContentfulPlaceTagFilterInput>;
};

export type ContentfulPlaceTagGroupConnection = {
  totalCount: Scalars["Int"];
  edges: Array<ContentfulPlaceTagEdge>;
  nodes: Array<ContentfulPlaceTag>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type ContentfulPlaceTagSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPlaceTagFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulPlaceTagSys = {
  revision?: Maybe<Scalars["Int"]>;
  contentType?: Maybe<ContentfulPlaceTagSysContentType>;
};

export type ContentfulPlaceTagSysContentType = {
  sys?: Maybe<ContentfulPlaceTagSysContentTypeSys>;
};

export type ContentfulPlaceTagSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulPlaceTagSysContentTypeSysFilterInput>;
};

export type ContentfulPlaceTagSysContentTypeSys = {
  type?: Maybe<Scalars["String"]>;
  linkType?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  contentful_id?: Maybe<Scalars["String"]>;
};

export type ContentfulPlaceTagSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulPlaceTagSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulPlaceTagSysContentTypeFilterInput>;
};

export type ContentfulResize = {
  base64?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
  src?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  aspectRatio?: Maybe<Scalars["Float"]>;
};

export type ContentfulResizeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
};

export type ContentfulResolutions = {
  base64?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
  aspectRatio?: Maybe<Scalars["Float"]>;
  width: Scalars["Float"];
  height: Scalars["Float"];
  src: Scalars["String"];
  srcSet: Scalars["String"];
  srcWebp?: Maybe<Scalars["String"]>;
  srcSetWebp?: Maybe<Scalars["String"]>;
};

export type ContentfulResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSizes = {
  base64?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
  aspectRatio: Scalars["Float"];
  src: Scalars["String"];
  srcSet: Scalars["String"];
  srcWebp?: Maybe<Scalars["String"]>;
  srcSetWebp?: Maybe<Scalars["String"]>;
  sizes: Scalars["String"];
};

export type ContentfulSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars["Date"]>;
  ne?: Maybe<Scalars["Date"]>;
  gt?: Maybe<Scalars["Date"]>;
  gte?: Maybe<Scalars["Date"]>;
  lt?: Maybe<Scalars["Date"]>;
  lte?: Maybe<Scalars["Date"]>;
  in?: Maybe<Array<Maybe<Scalars["Date"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["Date"]>>>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars["String"];
  absolutePath: Scalars["String"];
  relativePath: Scalars["String"];
  extension: Scalars["String"];
  size: Scalars["Int"];
  prettySize: Scalars["String"];
  modifiedTime: Scalars["Date"];
  accessTime: Scalars["Date"];
  changeTime: Scalars["Date"];
  birthTime: Scalars["Date"];
  root: Scalars["String"];
  dir: Scalars["String"];
  base: Scalars["String"];
  ext: Scalars["String"];
  name: Scalars["String"];
  relativeDirectory: Scalars["String"];
  dev: Scalars["Int"];
  mode: Scalars["Int"];
  nlink: Scalars["Int"];
  uid: Scalars["Int"];
  gid: Scalars["Int"];
  rdev: Scalars["Int"];
  ino: Scalars["Float"];
  atimeMs: Scalars["Float"];
  mtimeMs: Scalars["Float"];
  ctimeMs: Scalars["Float"];
  atime: Scalars["Date"];
  mtime: Scalars["Date"];
  ctime: Scalars["Date"];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars["Date"]>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars["Float"]>;
  blksize?: Maybe<Scalars["Int"]>;
  blocks?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectoryConnection = {
  totalCount: Scalars["Int"];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<DirectoryGroupConnection>;
};

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum =
  | "sourceInstanceName"
  | "absolutePath"
  | "relativePath"
  | "extension"
  | "size"
  | "prettySize"
  | "modifiedTime"
  | "accessTime"
  | "changeTime"
  | "birthTime"
  | "root"
  | "dir"
  | "base"
  | "ext"
  | "name"
  | "relativeDirectory"
  | "dev"
  | "mode"
  | "nlink"
  | "uid"
  | "gid"
  | "rdev"
  | "ino"
  | "atimeMs"
  | "mtimeMs"
  | "ctimeMs"
  | "atime"
  | "mtime"
  | "ctime"
  | "birthtime"
  | "birthtimeMs"
  | "blksize"
  | "blocks"
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type";

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars["Int"];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars["String"];
  shadow: Scalars["String"];
  opacity?: Maybe<Scalars["Int"]>;
};

export type File = Node & {
  sourceInstanceName: Scalars["String"];
  absolutePath: Scalars["String"];
  relativePath: Scalars["String"];
  extension: Scalars["String"];
  size: Scalars["Int"];
  prettySize: Scalars["String"];
  modifiedTime: Scalars["Date"];
  accessTime: Scalars["Date"];
  changeTime: Scalars["Date"];
  birthTime: Scalars["Date"];
  root: Scalars["String"];
  dir: Scalars["String"];
  base: Scalars["String"];
  ext: Scalars["String"];
  name: Scalars["String"];
  relativeDirectory: Scalars["String"];
  dev: Scalars["Int"];
  mode: Scalars["Int"];
  nlink: Scalars["Int"];
  uid: Scalars["Int"];
  gid: Scalars["Int"];
  rdev: Scalars["Int"];
  ino: Scalars["Float"];
  atimeMs: Scalars["Float"];
  mtimeMs: Scalars["Float"];
  ctimeMs: Scalars["Float"];
  atime: Scalars["Date"];
  mtime: Scalars["Date"];
  ctime: Scalars["Date"];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars["Date"]>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars["Float"]>;
  blksize?: Maybe<Scalars["Int"]>;
  blocks?: Maybe<Scalars["Int"]>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars["String"]>;
  /** Copy file to static directory and return public url to it */
  localURL?: Maybe<Scalars["String"]>;
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FileAtimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FileMtimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FileCtimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FileConnection = {
  totalCount: Scalars["Int"];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<FileGroupConnection>;
};

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type FileFieldsEnum =
  | "sourceInstanceName"
  | "absolutePath"
  | "relativePath"
  | "extension"
  | "size"
  | "prettySize"
  | "modifiedTime"
  | "accessTime"
  | "changeTime"
  | "birthTime"
  | "root"
  | "dir"
  | "base"
  | "ext"
  | "name"
  | "relativeDirectory"
  | "dev"
  | "mode"
  | "nlink"
  | "uid"
  | "gid"
  | "rdev"
  | "ino"
  | "atimeMs"
  | "mtimeMs"
  | "ctimeMs"
  | "atime"
  | "mtime"
  | "ctime"
  | "birthtime"
  | "birthtimeMs"
  | "blksize"
  | "blocks"
  | "publicURL"
  | "localURL"
  | "childImageSharp___fixed___base64"
  | "childImageSharp___fixed___tracedSVG"
  | "childImageSharp___fixed___aspectRatio"
  | "childImageSharp___fixed___width"
  | "childImageSharp___fixed___height"
  | "childImageSharp___fixed___src"
  | "childImageSharp___fixed___srcSet"
  | "childImageSharp___fixed___srcWebp"
  | "childImageSharp___fixed___srcSetWebp"
  | "childImageSharp___fixed___originalName"
  | "childImageSharp___resolutions___base64"
  | "childImageSharp___resolutions___tracedSVG"
  | "childImageSharp___resolutions___aspectRatio"
  | "childImageSharp___resolutions___width"
  | "childImageSharp___resolutions___height"
  | "childImageSharp___resolutions___src"
  | "childImageSharp___resolutions___srcSet"
  | "childImageSharp___resolutions___srcWebp"
  | "childImageSharp___resolutions___srcSetWebp"
  | "childImageSharp___resolutions___originalName"
  | "childImageSharp___fluid___base64"
  | "childImageSharp___fluid___tracedSVG"
  | "childImageSharp___fluid___aspectRatio"
  | "childImageSharp___fluid___src"
  | "childImageSharp___fluid___srcSet"
  | "childImageSharp___fluid___srcWebp"
  | "childImageSharp___fluid___srcSetWebp"
  | "childImageSharp___fluid___sizes"
  | "childImageSharp___fluid___originalImg"
  | "childImageSharp___fluid___originalName"
  | "childImageSharp___fluid___presentationWidth"
  | "childImageSharp___fluid___presentationHeight"
  | "childImageSharp___sizes___base64"
  | "childImageSharp___sizes___tracedSVG"
  | "childImageSharp___sizes___aspectRatio"
  | "childImageSharp___sizes___src"
  | "childImageSharp___sizes___srcSet"
  | "childImageSharp___sizes___srcWebp"
  | "childImageSharp___sizes___srcSetWebp"
  | "childImageSharp___sizes___sizes"
  | "childImageSharp___sizes___originalImg"
  | "childImageSharp___sizes___originalName"
  | "childImageSharp___sizes___presentationWidth"
  | "childImageSharp___sizes___presentationHeight"
  | "childImageSharp___original___width"
  | "childImageSharp___original___height"
  | "childImageSharp___original___src"
  | "childImageSharp___resize___src"
  | "childImageSharp___resize___tracedSVG"
  | "childImageSharp___resize___width"
  | "childImageSharp___resize___height"
  | "childImageSharp___resize___aspectRatio"
  | "childImageSharp___resize___originalName"
  | "childImageSharp___id"
  | "childImageSharp___parent___id"
  | "childImageSharp___parent___parent___id"
  | "childImageSharp___parent___parent___children"
  | "childImageSharp___parent___children"
  | "childImageSharp___parent___children___id"
  | "childImageSharp___parent___children___children"
  | "childImageSharp___parent___internal___content"
  | "childImageSharp___parent___internal___contentDigest"
  | "childImageSharp___parent___internal___description"
  | "childImageSharp___parent___internal___fieldOwners"
  | "childImageSharp___parent___internal___ignoreType"
  | "childImageSharp___parent___internal___mediaType"
  | "childImageSharp___parent___internal___owner"
  | "childImageSharp___parent___internal___type"
  | "childImageSharp___children"
  | "childImageSharp___children___id"
  | "childImageSharp___children___parent___id"
  | "childImageSharp___children___parent___children"
  | "childImageSharp___children___children"
  | "childImageSharp___children___children___id"
  | "childImageSharp___children___children___children"
  | "childImageSharp___children___internal___content"
  | "childImageSharp___children___internal___contentDigest"
  | "childImageSharp___children___internal___description"
  | "childImageSharp___children___internal___fieldOwners"
  | "childImageSharp___children___internal___ignoreType"
  | "childImageSharp___children___internal___mediaType"
  | "childImageSharp___children___internal___owner"
  | "childImageSharp___children___internal___type"
  | "childImageSharp___internal___content"
  | "childImageSharp___internal___contentDigest"
  | "childImageSharp___internal___description"
  | "childImageSharp___internal___fieldOwners"
  | "childImageSharp___internal___ignoreType"
  | "childImageSharp___internal___mediaType"
  | "childImageSharp___internal___owner"
  | "childImageSharp___internal___type"
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type";

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  localURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  totalCount: Scalars["Int"];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars["Float"]>;
  ne?: Maybe<Scalars["Float"]>;
  gt?: Maybe<Scalars["Float"]>;
  gte?: Maybe<Scalars["Float"]>;
  lt?: Maybe<Scalars["Float"]>;
  lte?: Maybe<Scalars["Float"]>;
  in?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["Float"]>>>;
};

export type ImageCropFocus =
  | "CENTER"
  | "NORTH"
  | "NORTHEAST"
  | "EAST"
  | "SOUTHEAST"
  | "SOUTH"
  | "SOUTHWEST"
  | "WEST"
  | "NORTHWEST"
  | "ENTROPY"
  | "ATTENTION";

export type ImageFit = "COVER" | "CONTAIN" | "FILL" | "INSIDE" | "OUTSIDE";

export type ImageFormat = "NO_CHANGE" | "JPG" | "PNG" | "WEBP";

export type ImageResizingBehavior =
  | "NO_CHANGE"
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  | "PAD"
  /** Crop a part of the original image to match the specified size. */
  | "CROP"
  /**
   * Crop the image to the specified dimensions, if the original image is smaller
   * than these dimensions, then the image will be upscaled.
   */
  | "FILL"
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  | "THUMB"
  /** Scale the image regardless of the original aspect ratio. */
  | "SCALE";

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ImageSharpSizes>;
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  base64Width?: Maybe<Scalars["Int"]>;
  jpegProgressive?: Maybe<Scalars["Boolean"]>;
  pngCompressionSpeed?: Maybe<Scalars["Int"]>;
  grayscale?: Maybe<Scalars["Boolean"]>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars["Int"]>;
  jpegQuality?: Maybe<Scalars["Int"]>;
  pngQuality?: Maybe<Scalars["Int"]>;
  webpQuality?: Maybe<Scalars["Int"]>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars["String"]>;
  rotate?: Maybe<Scalars["Int"]>;
  trim?: Maybe<Scalars["Float"]>;
};

export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  base64Width?: Maybe<Scalars["Int"]>;
  jpegProgressive?: Maybe<Scalars["Boolean"]>;
  pngCompressionSpeed?: Maybe<Scalars["Int"]>;
  grayscale?: Maybe<Scalars["Boolean"]>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars["Int"]>;
  jpegQuality?: Maybe<Scalars["Int"]>;
  pngQuality?: Maybe<Scalars["Int"]>;
  webpQuality?: Maybe<Scalars["Int"]>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars["String"]>;
  rotate?: Maybe<Scalars["Int"]>;
  trim?: Maybe<Scalars["Float"]>;
};

export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars["Int"]>;
  maxHeight?: Maybe<Scalars["Int"]>;
  base64Width?: Maybe<Scalars["Int"]>;
  grayscale?: Maybe<Scalars["Boolean"]>;
  jpegProgressive?: Maybe<Scalars["Boolean"]>;
  pngCompressionSpeed?: Maybe<Scalars["Int"]>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars["Int"]>;
  jpegQuality?: Maybe<Scalars["Int"]>;
  pngQuality?: Maybe<Scalars["Int"]>;
  webpQuality?: Maybe<Scalars["Int"]>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars["String"]>;
  rotate?: Maybe<Scalars["Int"]>;
  trim?: Maybe<Scalars["Float"]>;
  sizes?: Maybe<Scalars["String"]>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>;
};

export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars["Int"]>;
  maxHeight?: Maybe<Scalars["Int"]>;
  base64Width?: Maybe<Scalars["Int"]>;
  grayscale?: Maybe<Scalars["Boolean"]>;
  jpegProgressive?: Maybe<Scalars["Boolean"]>;
  pngCompressionSpeed?: Maybe<Scalars["Int"]>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars["Int"]>;
  jpegQuality?: Maybe<Scalars["Int"]>;
  pngQuality?: Maybe<Scalars["Int"]>;
  webpQuality?: Maybe<Scalars["Int"]>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars["String"]>;
  rotate?: Maybe<Scalars["Int"]>;
  trim?: Maybe<Scalars["Float"]>;
  sizes?: Maybe<Scalars["String"]>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>;
};

export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  quality?: Maybe<Scalars["Int"]>;
  jpegQuality?: Maybe<Scalars["Int"]>;
  pngQuality?: Maybe<Scalars["Int"]>;
  webpQuality?: Maybe<Scalars["Int"]>;
  jpegProgressive?: Maybe<Scalars["Boolean"]>;
  pngCompressionLevel?: Maybe<Scalars["Int"]>;
  pngCompressionSpeed?: Maybe<Scalars["Int"]>;
  grayscale?: Maybe<Scalars["Boolean"]>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars["Boolean"]>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars["String"]>;
  rotate?: Maybe<Scalars["Int"]>;
  trim?: Maybe<Scalars["Float"]>;
};

export type ImageSharpConnection = {
  totalCount: Scalars["Int"];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<ImageSharpGroupConnection>;
};

export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum =
  | "fixed___base64"
  | "fixed___tracedSVG"
  | "fixed___aspectRatio"
  | "fixed___width"
  | "fixed___height"
  | "fixed___src"
  | "fixed___srcSet"
  | "fixed___srcWebp"
  | "fixed___srcSetWebp"
  | "fixed___originalName"
  | "resolutions___base64"
  | "resolutions___tracedSVG"
  | "resolutions___aspectRatio"
  | "resolutions___width"
  | "resolutions___height"
  | "resolutions___src"
  | "resolutions___srcSet"
  | "resolutions___srcWebp"
  | "resolutions___srcSetWebp"
  | "resolutions___originalName"
  | "fluid___base64"
  | "fluid___tracedSVG"
  | "fluid___aspectRatio"
  | "fluid___src"
  | "fluid___srcSet"
  | "fluid___srcWebp"
  | "fluid___srcSetWebp"
  | "fluid___sizes"
  | "fluid___originalImg"
  | "fluid___originalName"
  | "fluid___presentationWidth"
  | "fluid___presentationHeight"
  | "sizes___base64"
  | "sizes___tracedSVG"
  | "sizes___aspectRatio"
  | "sizes___src"
  | "sizes___srcSet"
  | "sizes___srcWebp"
  | "sizes___srcSetWebp"
  | "sizes___sizes"
  | "sizes___originalImg"
  | "sizes___originalName"
  | "sizes___presentationWidth"
  | "sizes___presentationHeight"
  | "original___width"
  | "original___height"
  | "original___src"
  | "resize___src"
  | "resize___tracedSVG"
  | "resize___width"
  | "resize___height"
  | "resize___aspectRatio"
  | "resize___originalName"
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type";

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
  aspectRatio?: Maybe<Scalars["Float"]>;
  width: Scalars["Float"];
  height: Scalars["Float"];
  src: Scalars["String"];
  srcSet: Scalars["String"];
  srcWebp?: Maybe<Scalars["String"]>;
  srcSetWebp?: Maybe<Scalars["String"]>;
  originalName?: Maybe<Scalars["String"]>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
  aspectRatio: Scalars["Float"];
  src: Scalars["String"];
  srcSet: Scalars["String"];
  srcWebp?: Maybe<Scalars["String"]>;
  srcSetWebp?: Maybe<Scalars["String"]>;
  sizes: Scalars["String"];
  originalImg?: Maybe<Scalars["String"]>;
  originalName?: Maybe<Scalars["String"]>;
  presentationWidth: Scalars["Int"];
  presentationHeight: Scalars["Int"];
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  totalCount: Scalars["Int"];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars["Float"]>;
  height?: Maybe<Scalars["Float"]>;
  src?: Maybe<Scalars["String"]>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  aspectRatio?: Maybe<Scalars["Float"]>;
  originalName?: Maybe<Scalars["String"]>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  base64?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
  aspectRatio?: Maybe<Scalars["Float"]>;
  width: Scalars["Float"];
  height: Scalars["Float"];
  src: Scalars["String"];
  srcSet: Scalars["String"];
  srcWebp?: Maybe<Scalars["String"]>;
  srcSetWebp?: Maybe<Scalars["String"]>;
  originalName?: Maybe<Scalars["String"]>;
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  base64?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
  aspectRatio: Scalars["Float"];
  src: Scalars["String"];
  srcSet: Scalars["String"];
  srcWebp?: Maybe<Scalars["String"]>;
  srcSetWebp?: Maybe<Scalars["String"]>;
  sizes: Scalars["String"];
  originalImg?: Maybe<Scalars["String"]>;
  originalName?: Maybe<Scalars["String"]>;
  presentationWidth: Scalars["Int"];
  presentationHeight: Scalars["Int"];
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
  content?: Maybe<Scalars["String"]>;
  contentDigest: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  fieldOwners?: Maybe<Array<Maybe<Scalars["String"]>>>;
  ignoreType?: Maybe<Scalars["Boolean"]>;
  mediaType?: Maybe<Scalars["String"]>;
  owner: Scalars["String"];
  type: Scalars["String"];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars["Int"]>;
  ne?: Maybe<Scalars["Int"]>;
  gt?: Maybe<Scalars["Int"]>;
  gte?: Maybe<Scalars["Int"]>;
  lt?: Maybe<Scalars["Int"]>;
  lte?: Maybe<Scalars["Int"]>;
  in?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["Int"]>>>;
};

export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars["JSON"]>;
  ne?: Maybe<Scalars["JSON"]>;
  in?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  regex?: Maybe<Scalars["JSON"]>;
  glob?: Maybe<Scalars["JSON"]>;
};

/** Node Interface */
export type Node = {
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  currentPage: Scalars["Int"];
  hasPreviousPage: Scalars["Boolean"];
  hasNextPage: Scalars["Boolean"];
  itemCount: Scalars["Int"];
  pageCount: Scalars["Int"];
  perPage?: Maybe<Scalars["Int"]>;
  totalCount: Scalars["Int"];
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars["Float"]>;
  alphaMax?: Maybe<Scalars["Float"]>;
  optCurve?: Maybe<Scalars["Boolean"]>;
  optTolerance?: Maybe<Scalars["Float"]>;
  threshold?: Maybe<Scalars["Int"]>;
  blackOnWhite?: Maybe<Scalars["Boolean"]>;
  color?: Maybe<Scalars["String"]>;
  background?: Maybe<Scalars["String"]>;
};

export type PotraceTurnPolicy =
  | "TURNPOLICY_BLACK"
  | "TURNPOLICY_WHITE"
  | "TURNPOLICY_LEFT"
  | "TURNPOLICY_RIGHT"
  | "TURNPOLICY_MINORITY"
  | "TURNPOLICY_MAJORITY";

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  contentfulAsset?: Maybe<ContentfulAsset>;
  allContentfulAsset: ContentfulAssetConnection;
  contentfulPlaceTag?: Maybe<ContentfulPlaceTag>;
  allContentfulPlaceTag: ContentfulPlaceTagConnection;
  contentfulPlaceMessageRichTextNode?: Maybe<
    ContentfulPlaceMessageRichTextNode
  >;
  allContentfulPlaceMessageRichTextNode: ContentfulPlaceMessageRichTextNodeConnection;
  contentfulPlaceDescriptionTextNode?: Maybe<
    ContentfulPlaceDescriptionTextNode
  >;
  allContentfulPlaceDescriptionTextNode: ContentfulPlaceDescriptionTextNodeConnection;
  contentfulPlace?: Maybe<ContentfulPlace>;
  allContentfulPlace: ContentfulPlaceConnection;
  contentfulContentType?: Maybe<ContentfulContentType>;
  allContentfulContentType: ContentfulContentTypeConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};

export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  localURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QueryContentfulAssetArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulAssetSysFilterInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  resolutions?: Maybe<ContentfulResolutionsFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  sizes?: Maybe<ContentfulSizesFilterInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
};

export type QueryAllContentfulAssetArgs = {
  filter?: Maybe<ContentfulAssetFilterInput>;
  sort?: Maybe<ContentfulAssetSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QueryContentfulPlaceTagArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  place?: Maybe<ContentfulPlaceFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPlaceTagSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllContentfulPlaceTagArgs = {
  filter?: Maybe<ContentfulPlaceTagFilterInput>;
  sort?: Maybe<ContentfulPlaceTagSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QueryContentfulPlaceMessageRichTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  content?: Maybe<ContentfulPlaceMessageRichTextNodeContentFilterListInput>;
  nodeType?: Maybe<StringQueryOperatorInput>;
  message?: Maybe<StringQueryOperatorInput>;
  json?: Maybe<JsonQueryOperatorInput>;
};

export type QueryAllContentfulPlaceMessageRichTextNodeArgs = {
  filter?: Maybe<ContentfulPlaceMessageRichTextNodeFilterInput>;
  sort?: Maybe<ContentfulPlaceMessageRichTextNodeSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QueryContentfulPlaceDescriptionTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllContentfulPlaceDescriptionTextNodeArgs = {
  filter?: Maybe<ContentfulPlaceDescriptionTextNodeFilterInput>;
  sort?: Maybe<ContentfulPlaceDescriptionTextNodeSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QueryContentfulPlaceArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  official?: Maybe<BooleanQueryOperatorInput>;
  location?: Maybe<ContentfulPlaceLocationFilterInput>;
  address?: Maybe<StringQueryOperatorInput>;
  tel?: Maybe<StringQueryOperatorInput>;
  closed_on?: Maybe<StringQueryOperatorInput>;
  business_hours?: Maybe<StringQueryOperatorInput>;
  website?: Maybe<StringQueryOperatorInput>;
  twitter?: Maybe<StringQueryOperatorInput>;
  facebook?: Maybe<StringQueryOperatorInput>;
  pictures?: Maybe<ContentfulAssetFilterListInput>;
  menu?: Maybe<ContentfulAssetFilterListInput>;
  tags?: Maybe<ContentfulPlaceTagFilterListInput>;
  description?: Maybe<ContentfulPlaceDescriptionTextNodeFilterInput>;
  message?: Maybe<ContentfulPlaceMessageRichTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPlaceSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulPlaceDescriptionTextNode?: Maybe<
    ContentfulPlaceDescriptionTextNodeFilterInput
  >;
  childContentfulPlaceMessageRichTextNode?: Maybe<
    ContentfulPlaceMessageRichTextNodeFilterInput
  >;
};

export type QueryAllContentfulPlaceArgs = {
  filter?: Maybe<ContentfulPlaceFilterInput>;
  sort?: Maybe<ContentfulPlaceSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QueryContentfulContentTypeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllContentfulContentTypeArgs = {
  filter?: Maybe<ContentfulContentTypeFilterInput>;
  sort?: Maybe<ContentfulContentTypeSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars["Date"]>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars["Int"]>;
  host?: Maybe<Scalars["String"]>;
  polyfill?: Maybe<Scalars["Boolean"]>;
  pathPrefix?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars["Date"]>;
};

export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars["Int"];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<SiteBuildMetadataGroupConnection>;
};

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum =
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"
  | "buildTime";

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars["Int"];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  totalCount: Scalars["Int"];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<SiteGroupConnection>;
};

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum =
  | "buildTime"
  | "siteMetadata___name"
  | "siteMetadata___siteUrl"
  | "siteMetadata___title"
  | "siteMetadata___description"
  | "siteMetadata___keywords"
  | "siteMetadata___mapBoxAccessToken"
  | "siteMetadata___defaultMapLocation___latitude"
  | "siteMetadata___defaultMapLocation___longitude"
  | "siteMetadata___defaultMapLocation___zoom"
  | "siteMetadata___coopOrgs"
  | "siteMetadata___coopOrgs___name"
  | "siteMetadata___coopOrgs___website"
  | "siteMetadata___coopOrgs___email"
  | "siteMetadata___coopOrgs___tel"
  | "siteMetadata___copyright"
  | "siteMetadata___pickUpTags"
  | "port"
  | "host"
  | "polyfill"
  | "pathPrefix"
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type";

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  totalCount: Scalars["Int"];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type SitePage = Node & {
  path: Scalars["String"];
  component: Scalars["String"];
  internalComponentName: Scalars["String"];
  componentChunkName: Scalars["String"];
  matchPath?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars["Boolean"]>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars["String"]>;
  componentPath?: Maybe<Scalars["String"]>;
};

export type SitePageConnection = {
  totalCount: Scalars["Int"];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<SitePageGroupConnection>;
};

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  pageNumber?: Maybe<Scalars["Int"]>;
  humanPageNumber?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  numberOfPages?: Maybe<Scalars["Int"]>;
  previousPagePath?: Maybe<Scalars["String"]>;
  nextPagePath?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
};

export type SitePageContextFilterInput = {
  pageNumber?: Maybe<IntQueryOperatorInput>;
  humanPageNumber?: Maybe<IntQueryOperatorInput>;
  skip?: Maybe<IntQueryOperatorInput>;
  limit?: Maybe<IntQueryOperatorInput>;
  numberOfPages?: Maybe<IntQueryOperatorInput>;
  previousPagePath?: Maybe<StringQueryOperatorInput>;
  nextPagePath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum =
  | "path"
  | "component"
  | "internalComponentName"
  | "componentChunkName"
  | "matchPath"
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"
  | "isCreatedByStatefulCreatePages"
  | "context___pageNumber"
  | "context___humanPageNumber"
  | "context___skip"
  | "context___limit"
  | "context___numberOfPages"
  | "context___previousPagePath"
  | "context___nextPagePath"
  | "context___id"
  | "context___slug"
  | "pluginCreator___id"
  | "pluginCreator___parent___id"
  | "pluginCreator___parent___parent___id"
  | "pluginCreator___parent___parent___children"
  | "pluginCreator___parent___children"
  | "pluginCreator___parent___children___id"
  | "pluginCreator___parent___children___children"
  | "pluginCreator___parent___internal___content"
  | "pluginCreator___parent___internal___contentDigest"
  | "pluginCreator___parent___internal___description"
  | "pluginCreator___parent___internal___fieldOwners"
  | "pluginCreator___parent___internal___ignoreType"
  | "pluginCreator___parent___internal___mediaType"
  | "pluginCreator___parent___internal___owner"
  | "pluginCreator___parent___internal___type"
  | "pluginCreator___children"
  | "pluginCreator___children___id"
  | "pluginCreator___children___parent___id"
  | "pluginCreator___children___parent___children"
  | "pluginCreator___children___children"
  | "pluginCreator___children___children___id"
  | "pluginCreator___children___children___children"
  | "pluginCreator___children___internal___content"
  | "pluginCreator___children___internal___contentDigest"
  | "pluginCreator___children___internal___description"
  | "pluginCreator___children___internal___fieldOwners"
  | "pluginCreator___children___internal___ignoreType"
  | "pluginCreator___children___internal___mediaType"
  | "pluginCreator___children___internal___owner"
  | "pluginCreator___children___internal___type"
  | "pluginCreator___internal___content"
  | "pluginCreator___internal___contentDigest"
  | "pluginCreator___internal___description"
  | "pluginCreator___internal___fieldOwners"
  | "pluginCreator___internal___ignoreType"
  | "pluginCreator___internal___mediaType"
  | "pluginCreator___internal___owner"
  | "pluginCreator___internal___type"
  | "pluginCreator___resolve"
  | "pluginCreator___name"
  | "pluginCreator___version"
  | "pluginCreator___pluginOptions___name"
  | "pluginCreator___pluginOptions___path"
  | "pluginCreator___pluginOptions___siteUrl"
  | "pluginCreator___pluginOptions___fileName"
  | "pluginCreator___pluginOptions___documentPaths"
  | "pluginCreator___pluginOptions___spaceId"
  | "pluginCreator___pluginOptions___accessToken"
  | "pluginCreator___pluginOptions___short_name"
  | "pluginCreator___pluginOptions___lang"
  | "pluginCreator___pluginOptions___start_url"
  | "pluginCreator___pluginOptions___background_color"
  | "pluginCreator___pluginOptions___theme_color"
  | "pluginCreator___pluginOptions___display"
  | "pluginCreator___pluginOptions___icon"
  | "pluginCreator___pluginOptions___cache_busting_mode"
  | "pluginCreator___pluginOptions___include_favicon"
  | "pluginCreator___pluginOptions___legacy"
  | "pluginCreator___pluginOptions___theme_color_in_head"
  | "pluginCreator___pluginOptions___cacheDigest"
  | "pluginCreator___pluginOptions___pathCheck"
  | "pluginCreator___nodeAPIs"
  | "pluginCreator___browserAPIs"
  | "pluginCreator___ssrAPIs"
  | "pluginCreator___pluginFilepath"
  | "pluginCreator___packageJson___name"
  | "pluginCreator___packageJson___description"
  | "pluginCreator___packageJson___version"
  | "pluginCreator___packageJson___main"
  | "pluginCreator___packageJson___author"
  | "pluginCreator___packageJson___license"
  | "pluginCreator___packageJson___dependencies"
  | "pluginCreator___packageJson___dependencies___name"
  | "pluginCreator___packageJson___dependencies___version"
  | "pluginCreator___packageJson___devDependencies"
  | "pluginCreator___packageJson___devDependencies___name"
  | "pluginCreator___packageJson___devDependencies___version"
  | "pluginCreator___packageJson___peerDependencies"
  | "pluginCreator___packageJson___peerDependencies___name"
  | "pluginCreator___packageJson___peerDependencies___version"
  | "pluginCreator___packageJson___keywords"
  | "pluginCreatorId"
  | "componentPath";

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars["Int"];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  pluginFilepath?: Maybe<Scalars["String"]>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  totalCount: Scalars["Int"];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<SitePluginGroupConnection>;
};

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum =
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"
  | "resolve"
  | "name"
  | "version"
  | "pluginOptions___name"
  | "pluginOptions___path"
  | "pluginOptions___siteUrl"
  | "pluginOptions___fileName"
  | "pluginOptions___documentPaths"
  | "pluginOptions___spaceId"
  | "pluginOptions___accessToken"
  | "pluginOptions___short_name"
  | "pluginOptions___lang"
  | "pluginOptions___start_url"
  | "pluginOptions___background_color"
  | "pluginOptions___theme_color"
  | "pluginOptions___display"
  | "pluginOptions___icon"
  | "pluginOptions___cache_busting_mode"
  | "pluginOptions___include_favicon"
  | "pluginOptions___legacy"
  | "pluginOptions___theme_color_in_head"
  | "pluginOptions___cacheDigest"
  | "pluginOptions___pathCheck"
  | "nodeAPIs"
  | "browserAPIs"
  | "ssrAPIs"
  | "pluginFilepath"
  | "packageJson___name"
  | "packageJson___description"
  | "packageJson___version"
  | "packageJson___main"
  | "packageJson___author"
  | "packageJson___license"
  | "packageJson___dependencies"
  | "packageJson___dependencies___name"
  | "packageJson___dependencies___version"
  | "packageJson___devDependencies"
  | "packageJson___devDependencies___name"
  | "packageJson___devDependencies___version"
  | "packageJson___peerDependencies"
  | "packageJson___peerDependencies___name"
  | "packageJson___peerDependencies___version"
  | "packageJson___keywords";

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars["Int"];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
  main?: Maybe<Scalars["String"]>;
  author?: Maybe<Scalars["String"]>;
  license?: Maybe<Scalars["String"]>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<
    SitePluginPackageJsonPeerDependenciesFilterListInput
  >;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  name?: Maybe<Scalars["String"]>;
  path?: Maybe<Scalars["String"]>;
  siteUrl?: Maybe<Scalars["String"]>;
  fileName?: Maybe<Scalars["String"]>;
  documentPaths?: Maybe<Array<Maybe<Scalars["String"]>>>;
  spaceId?: Maybe<Scalars["String"]>;
  accessToken?: Maybe<Scalars["String"]>;
  short_name?: Maybe<Scalars["String"]>;
  lang?: Maybe<Scalars["String"]>;
  start_url?: Maybe<Scalars["String"]>;
  background_color?: Maybe<Scalars["String"]>;
  theme_color?: Maybe<Scalars["String"]>;
  display?: Maybe<Scalars["String"]>;
  icon?: Maybe<Scalars["String"]>;
  cache_busting_mode?: Maybe<Scalars["String"]>;
  include_favicon?: Maybe<Scalars["Boolean"]>;
  legacy?: Maybe<Scalars["Boolean"]>;
  theme_color_in_head?: Maybe<Scalars["Boolean"]>;
  cacheDigest?: Maybe<Scalars["String"]>;
  pathCheck?: Maybe<Scalars["Boolean"]>;
};

export type SitePluginPluginOptionsFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  documentPaths?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  accessToken?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  cacheDigest?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  name?: Maybe<Scalars["String"]>;
  siteUrl?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  keywords?: Maybe<Array<Maybe<Scalars["String"]>>>;
  mapBoxAccessToken?: Maybe<Scalars["String"]>;
  defaultMapLocation?: Maybe<SiteSiteMetadataDefaultMapLocation>;
  coopOrgs?: Maybe<Array<Maybe<SiteSiteMetadataCoopOrgs>>>;
  copyright?: Maybe<Scalars["String"]>;
  pickUpTags?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type SiteSiteMetadataCoopOrgs = {
  name?: Maybe<Scalars["String"]>;
  website?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  tel?: Maybe<Scalars["String"]>;
};

export type SiteSiteMetadataCoopOrgsFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  website?: Maybe<StringQueryOperatorInput>;
  email?: Maybe<StringQueryOperatorInput>;
  tel?: Maybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataCoopOrgsFilterListInput = {
  elemMatch?: Maybe<SiteSiteMetadataCoopOrgsFilterInput>;
};

export type SiteSiteMetadataDefaultMapLocation = {
  latitude?: Maybe<Scalars["Int"]>;
  longitude?: Maybe<Scalars["Float"]>;
  zoom?: Maybe<Scalars["Int"]>;
};

export type SiteSiteMetadataDefaultMapLocationFilterInput = {
  latitude?: Maybe<IntQueryOperatorInput>;
  longitude?: Maybe<FloatQueryOperatorInput>;
  zoom?: Maybe<IntQueryOperatorInput>;
};

export type SiteSiteMetadataFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
  mapBoxAccessToken?: Maybe<StringQueryOperatorInput>;
  defaultMapLocation?: Maybe<SiteSiteMetadataDefaultMapLocationFilterInput>;
  coopOrgs?: Maybe<SiteSiteMetadataCoopOrgsFilterListInput>;
  copyright?: Maybe<StringQueryOperatorInput>;
  pickUpTags?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum = "ASC" | "DESC";

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["String"]>;
  glob?: Maybe<Scalars["String"]>;
};

export type FooterQueryVariables = Exact<{ [key: string]: never }>;

export type FooterQuery = {
  site?: Maybe<{
    siteMetadata?: Maybe<
      Pick<SiteSiteMetadata, "copyright"> & {
        coopOrgs?: Maybe<
          Array<
            Maybe<
              Pick<
                SiteSiteMetadataCoopOrgs,
                "name" | "website" | "email" | "tel"
              >
            >
          >
        >;
      }
    >;
  }>;
};

export type PlaceListQueryVariables = Exact<{ [key: string]: never }>;

export type PlaceListQuery = {
  file?: Maybe<{
    childImageSharp?: Maybe<{
      fixed?: Maybe<GatsbyImageSharpFixed_WithWebp_TracedSvgFragment>;
    }>;
  }>;
};

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never }>;

export type Unnamed_1_Query = {
  site?: Maybe<{
    siteMetadata?: Maybe<
      Pick<
        SiteSiteMetadata,
        "title" | "siteUrl" | "description" | "name" | "keywords"
      >
    >;
  }>;
};

export type AllQueryVariables = Exact<{ [key: string]: never }>;

export type AllQuery = {
  allContentfulPlace: {
    edges: Array<{
      node: Pick<ContentfulPlace, "id" | "address" | "name"> & {
        tags?: Maybe<Array<Maybe<Pick<ContentfulPlaceTag, "slug" | "name">>>>;
      };
    }>;
  };
};

export type MapQueryVariables = Exact<{ [key: string]: never }>;

export type MapQuery = {
  site?: Maybe<{
    siteMetadata?: Maybe<
      Pick<SiteSiteMetadata, "title" | "pickUpTags"> & {
        defaultMapLocation?: Maybe<
          Pick<
            SiteSiteMetadataDefaultMapLocation,
            "latitude" | "longitude" | "zoom"
          >
        >;
      }
    >;
  }>;
  allContentfulPlaceTag: {
    edges: Array<{ node: Pick<ContentfulPlaceTag, "slug" | "name"> }>;
  };
  allContentfulPlace: {
    edges: Array<{
      node: Pick<
        ContentfulPlace,
        "id" | "official" | "business_hours" | "name"
      > & {
        description?: Maybe<
          Pick<ContentfulPlaceDescriptionTextNode, "description">
        >;
        location?: Maybe<Pick<ContentfulPlaceLocation, "lat" | "lon">>;
        tags?: Maybe<Array<Maybe<Pick<ContentfulPlaceTag, "slug">>>>;
      };
    }>;
  };
};

export type IndexQueryVariables = Exact<{
  skip: Scalars["Int"];
  limit: Scalars["Int"];
}>;

export type IndexQuery = {
  site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, "title">> }>;
  allContentfulPlace: Pick<ContentfulPlaceConnection, "totalCount"> & {
    edges: Array<{
      node: Pick<
        ContentfulPlace,
        "id" | "address" | "closed_on" | "business_hours" | "name"
      > & {
        pictures?: Maybe<
          Array<
            Maybe<
              Pick<ContentfulAsset, "id" | "title"> & {
                fixed?: Maybe<GatsbyContentfulFixed_WithWebpFragment>;
              }
            >
          >
        >;
        tags?: Maybe<Array<Maybe<Pick<ContentfulPlaceTag, "slug" | "name">>>>;
      };
    }>;
  };
  allContentfulPlaceTag: {
    edges: Array<{
      node: Pick<ContentfulPlaceTag, "slug" | "name"> & {
        place?: Maybe<Array<Maybe<Pick<ContentfulPlace, "id">>>>;
      };
    }>;
  };
};

export type PlacesQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type PlacesQuery = {
  site?: Maybe<{
    siteMetadata?: Maybe<Pick<SiteSiteMetadata, "title" | "siteUrl">>;
  }>;
  contentfulPlace?: Maybe<
    Pick<
      ContentfulPlace,
      | "id"
      | "official"
      | "address"
      | "closed_on"
      | "business_hours"
      | "facebook"
      | "twitter"
      | "website"
      | "name"
      | "tel"
    > & {
      description?: Maybe<
        Pick<ContentfulPlaceDescriptionTextNode, "description">
      >;
      location?: Maybe<Pick<ContentfulPlaceLocation, "lat" | "lon">>;
      pictures?: Maybe<
        Array<
          Maybe<
            Pick<ContentfulAsset, "id"> & {
              fluid?: Maybe<GatsbyContentfulFluid_WithWebpFragment>;
            }
          >
        >
      >;
      menu?: Maybe<
        Array<
          Maybe<
            Pick<ContentfulAsset, "id" | "title"> & {
              file?: Maybe<Pick<ContentfulAssetFile, "url" | "contentType">>;
              fixed?: Maybe<GatsbyContentfulFixed_WithWebpFragment>;
            }
          >
        >
      >;
      message?: Maybe<Pick<ContentfulPlaceMessageRichTextNode, "json">>;
      tags?: Maybe<Array<Maybe<Pick<ContentfulPlaceTag, "slug" | "name">>>>;
    }
  >;
};

export type TagsQueryVariables = Exact<{
  slug: Scalars["String"];
}>;

export type TagsQuery = {
  site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, "title">> }>;
  contentfulPlaceTag?: Maybe<Pick<ContentfulPlaceTag, "name" | "slug">>;
  allContentfulPlace: Pick<ContentfulPlaceConnection, "totalCount"> & {
    edges: Array<{
      node: Pick<
        ContentfulPlace,
        "id" | "address" | "closed_on" | "business_hours" | "name"
      > & {
        pictures?: Maybe<
          Array<
            Maybe<
              Pick<ContentfulAsset, "id" | "title"> & {
                fixed?: Maybe<GatsbyContentfulFixed_WithWebpFragment>;
              }
            >
          >
        >;
        tags?: Maybe<Array<Maybe<Pick<ContentfulPlaceTag, "slug" | "name">>>>;
      };
    }>;
  };
};

export type GatsbyContentfulFixedFragment = Pick<
  ContentfulFixed,
  "base64" | "width" | "height" | "src" | "srcSet"
>;

export type GatsbyContentfulFixed_TracedSvgFragment = Pick<
  ContentfulFixed,
  "tracedSVG" | "width" | "height" | "src" | "srcSet"
>;

export type GatsbyContentfulFixed_NoBase64Fragment = Pick<
  ContentfulFixed,
  "width" | "height" | "src" | "srcSet"
>;

export type GatsbyContentfulFixed_WithWebpFragment = Pick<
  ContentfulFixed,
  "base64" | "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>;

export type GatsbyContentfulFixed_WithWebp_NoBase64Fragment = Pick<
  ContentfulFixed,
  "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>;

export type GatsbyContentfulFluidFragment = Pick<
  ContentfulFluid,
  "base64" | "aspectRatio" | "src" | "srcSet" | "sizes"
>;

export type GatsbyContentfulFluid_TracedSvgFragment = Pick<
  ContentfulFluid,
  "tracedSVG" | "aspectRatio" | "src" | "srcSet" | "sizes"
>;

export type GatsbyContentfulFluid_NoBase64Fragment = Pick<
  ContentfulFluid,
  "aspectRatio" | "src" | "srcSet" | "sizes"
>;

export type GatsbyContentfulFluid_WithWebpFragment = Pick<
  ContentfulFluid,
  | "base64"
  | "aspectRatio"
  | "src"
  | "srcSet"
  | "srcWebp"
  | "srcSetWebp"
  | "sizes"
>;

export type GatsbyContentfulFluid_WithWebp_NoBase64Fragment = Pick<
  ContentfulFluid,
  "aspectRatio" | "src" | "srcSet" | "srcWebp" | "srcSetWebp" | "sizes"
>;

export type GatsbyContentfulResolutionsFragment = Pick<
  ContentfulResolutions,
  "base64" | "width" | "height" | "src" | "srcSet"
>;

export type GatsbyContentfulResolutions_TracedSvgFragment = Pick<
  ContentfulResolutions,
  "tracedSVG" | "width" | "height" | "src" | "srcSet"
>;

export type GatsbyContentfulResolutions_NoBase64Fragment = Pick<
  ContentfulResolutions,
  "width" | "height" | "src" | "srcSet"
>;

export type GatsbyContentfulResolutions_WithWebpFragment = Pick<
  ContentfulResolutions,
  "base64" | "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>;

export type GatsbyContentfulResolutions_WithWebp_NoBase64Fragment = Pick<
  ContentfulResolutions,
  "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>;

export type GatsbyContentfulSizesFragment = Pick<
  ContentfulSizes,
  "base64" | "aspectRatio" | "src" | "srcSet" | "sizes"
>;

export type GatsbyContentfulSizes_TracedSvgFragment = Pick<
  ContentfulSizes,
  "tracedSVG" | "aspectRatio" | "src" | "srcSet" | "sizes"
>;

export type GatsbyContentfulSizes_NoBase64Fragment = Pick<
  ContentfulSizes,
  "aspectRatio" | "src" | "srcSet" | "sizes"
>;

export type GatsbyContentfulSizes_WithWebpFragment = Pick<
  ContentfulSizes,
  | "base64"
  | "aspectRatio"
  | "src"
  | "srcSet"
  | "srcWebp"
  | "srcSetWebp"
  | "sizes"
>;

export type GatsbyContentfulSizes_WithWebp_NoBase64Fragment = Pick<
  ContentfulSizes,
  "aspectRatio" | "src" | "srcSet" | "srcWebp" | "srcSetWebp" | "sizes"
>;

export type GatsbyImageSharpFixedFragment = Pick<
  ImageSharpFixed,
  "base64" | "width" | "height" | "src" | "srcSet"
>;

export type GatsbyImageSharpFixed_TracedSvgFragment = Pick<
  ImageSharpFixed,
  "tracedSVG" | "width" | "height" | "src" | "srcSet"
>;

export type GatsbyImageSharpFixed_WithWebpFragment = Pick<
  ImageSharpFixed,
  "base64" | "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>;

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = Pick<
  ImageSharpFixed,
  "tracedSVG" | "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>;

export type GatsbyImageSharpFixed_NoBase64Fragment = Pick<
  ImageSharpFixed,
  "width" | "height" | "src" | "srcSet"
>;

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = Pick<
  ImageSharpFixed,
  "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>;

export type GatsbyImageSharpFluidFragment = Pick<
  ImageSharpFluid,
  "base64" | "aspectRatio" | "src" | "srcSet" | "sizes"
>;

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = {
  maxHeight: ImageSharpFluid["presentationHeight"];
  maxWidth: ImageSharpFluid["presentationWidth"];
};

export type GatsbyImageSharpFluid_TracedSvgFragment = Pick<
  ImageSharpFluid,
  "tracedSVG" | "aspectRatio" | "src" | "srcSet" | "sizes"
>;

export type GatsbyImageSharpFluid_WithWebpFragment = Pick<
  ImageSharpFluid,
  | "base64"
  | "aspectRatio"
  | "src"
  | "srcSet"
  | "srcWebp"
  | "srcSetWebp"
  | "sizes"
>;

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = Pick<
  ImageSharpFluid,
  | "tracedSVG"
  | "aspectRatio"
  | "src"
  | "srcSet"
  | "srcWebp"
  | "srcSetWebp"
  | "sizes"
>;

export type GatsbyImageSharpFluid_NoBase64Fragment = Pick<
  ImageSharpFluid,
  "aspectRatio" | "src" | "srcSet" | "sizes"
>;

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = Pick<
  ImageSharpFluid,
  "aspectRatio" | "src" | "srcSet" | "srcWebp" | "srcSetWebp" | "sizes"
>;

export type GatsbyImageSharpResolutionsFragment = Pick<
  ImageSharpResolutions,
  "base64" | "width" | "height" | "src" | "srcSet"
>;

export type GatsbyImageSharpResolutions_TracedSvgFragment = Pick<
  ImageSharpResolutions,
  "tracedSVG" | "width" | "height" | "src" | "srcSet"
>;

export type GatsbyImageSharpResolutions_WithWebpFragment = Pick<
  ImageSharpResolutions,
  "base64" | "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>;

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = Pick<
  ImageSharpResolutions,
  "tracedSVG" | "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>;

export type GatsbyImageSharpResolutions_NoBase64Fragment = Pick<
  ImageSharpResolutions,
  "width" | "height" | "src" | "srcSet"
>;

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = Pick<
  ImageSharpResolutions,
  "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>;

export type GatsbyImageSharpSizesFragment = Pick<
  ImageSharpSizes,
  "base64" | "aspectRatio" | "src" | "srcSet" | "sizes"
>;

export type GatsbyImageSharpSizes_TracedSvgFragment = Pick<
  ImageSharpSizes,
  "tracedSVG" | "aspectRatio" | "src" | "srcSet" | "sizes"
>;

export type GatsbyImageSharpSizes_WithWebpFragment = Pick<
  ImageSharpSizes,
  | "base64"
  | "aspectRatio"
  | "src"
  | "srcSet"
  | "srcWebp"
  | "srcSetWebp"
  | "sizes"
>;

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = Pick<
  ImageSharpSizes,
  | "tracedSVG"
  | "aspectRatio"
  | "src"
  | "srcSet"
  | "srcWebp"
  | "srcSetWebp"
  | "sizes"
>;

export type GatsbyImageSharpSizes_NoBase64Fragment = Pick<
  ImageSharpSizes,
  "aspectRatio" | "src" | "srcSet" | "sizes"
>;

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = Pick<
  ImageSharpSizes,
  "aspectRatio" | "src" | "srcSet" | "srcWebp" | "srcSetWebp" | "sizes"
>;
