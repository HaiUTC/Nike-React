import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Address = {
  __typename?: 'Address';
  commune: Scalars['String'];
  createdAt: Scalars['DateTime'];
  detail: Scalars['String'];
  distric: Scalars['String'];
  id: Scalars['ID'];
  phoneNumber?: Maybe<Scalars['String']>;
  province: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Float'];
};

export type AddressMutationResponse = IMutationResponse & {
  __typename?: 'AddressMutationResponse';
  address?: Maybe<Address>;
  allAddress?: Maybe<Array<Address>>;
  code: Scalars['Float'];
  errors?: Maybe<Array<FieldError>>;
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type Cart = {
  __typename?: 'Cart';
  cartItems?: Maybe<Array<CartItem>>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  quantity?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
  updatedAt: Scalars['DateTime'];
  userId: Scalars['Float'];
};

export type CartInput = {
  color: Scalars['String'];
  discount?: Maybe<Scalars['Float']>;
  productId: Scalars['String'];
  size: Scalars['Float'];
};

export type CartItem = {
  __typename?: 'CartItem';
  cart: Cart;
  cartId: Scalars['String'];
  color: Scalars['String'];
  createdAt: Scalars['DateTime'];
  discount: Scalars['Float'];
  id: Scalars['ID'];
  monney: Scalars['Float'];
  product?: Maybe<Product>;
  productId: Scalars['String'];
  quantity: Scalars['Float'];
  size: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
};

export type CartMutationResponse = IMutationResponse & {
  __typename?: 'CartMutationResponse';
  allCart?: Maybe<Array<Cart>>;
  cart?: Maybe<Cart>;
  code: Scalars['Float'];
  errors?: Maybe<Array<FieldError>>;
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type Category = {
  __typename?: 'Category';
  collectionId: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  updatedBy: Scalars['Float'];
};

export type CategoryMutationResponse = IMutationResponse & {
  __typename?: 'CategoryMutationResponse';
  Category?: Maybe<Category>;
  allCategory?: Maybe<Array<Category>>;
  code: Scalars['Float'];
  errors?: Maybe<Array<FieldError>>;
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type ChangePasswordInput = {
  newPassword: Scalars['String'];
};

export type Collection = {
  __typename?: 'Collection';
  category: Category;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  updatedBy: Scalars['Float'];
};

export type CollectionMutationResponse = IMutationResponse & {
  __typename?: 'CollectionMutationResponse';
  Collection?: Maybe<Collection>;
  allCollection?: Maybe<Array<Collection>>;
  code: Scalars['Float'];
  errors?: Maybe<Array<FieldError>>;
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type Comment = {
  __typename?: 'Comment';
  avatar: Scalars['String'];
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  dislike: Scalars['Float'];
  editComment?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  like: Scalars['Float'];
  name: Scalars['String'];
  productId: Scalars['String'];
  replys: Array<ReplyComment>;
  star: Scalars['Float'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Float'];
};

export type CreateAddressInput = {
  commune: Scalars['String'];
  detail: Scalars['String'];
  distric: Scalars['String'];
  phoneNumber: Scalars['String'];
  province: Scalars['String'];
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type ForgotPasswordInput = {
  email: Scalars['String'];
};

export type IMutationResponse = {
  code: Scalars['Float'];
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type ItemPicture = {
  __typename?: 'ItemPicture';
  color: Scalars['String'];
  url: Scalars['String'];
};

export type ItemPictureInput = {
  color: Scalars['String'];
  url: Scalars['String'];
};

export type ItemPictureUpdateInput = {
  color: Scalars['String'];
  url: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  ActiveUser?: Maybe<UserMutationResponse>;
  AddCategory: CategoryMutationResponse;
  AddCollection: CollectionMutationResponse;
  AddProductToCart: CartMutationResponse;
  ChangeAvatar: UserMutationResponse;
  ChangePassword: UserMutationResponse;
  ChangeQuantityProductInCart: CartMutationResponse;
  ChangeSizeProductInCart: CartMutationResponse;
  CreateAddress: AddressMutationResponse;
  CreateProduct?: Maybe<ProductMutationResponse>;
  DeleteAddress?: Maybe<AddressMutationResponse>;
  DeleteCategory?: Maybe<CategoryMutationResponse>;
  DeleteCollection?: Maybe<CollectionMutationResponse>;
  DeleteProduct: ProductMutationResponse;
  DeleteProductInCart: CartMutationResponse;
  ForgotPassword: Scalars['Boolean'];
  Login: UserMutationResponse;
  Logout: Scalars['Boolean'];
  Register?: Maybe<UserMutationResponse>;
  UpdateAddress?: Maybe<AddressMutationResponse>;
  UpdateCategory: CategoryMutationResponse;
  UpdateCollection: CollectionMutationResponse;
  UpdateProduct?: Maybe<ProductMutationResponse>;
};


export type MutationActiveUserArgs = {
  id: Scalars['String'];
};


export type MutationAddCategoryArgs = {
  collectionId: Scalars['Float'];
  name: Scalars['String'];
};


export type MutationAddCollectionArgs = {
  name: Scalars['String'];
};


export type MutationAddProductToCartArgs = {
  cartInput: CartInput;
};


export type MutationChangeAvatarArgs = {
  avatar: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  changePasswordInput: ChangePasswordInput;
  token: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationChangeQuantityProductInCartArgs = {
  id: Scalars['ID'];
  quantity: Scalars['Float'];
};


export type MutationChangeSizeProductInCartArgs = {
  id: Scalars['ID'];
  size: Scalars['Float'];
};


export type MutationCreateAddressArgs = {
  createAddressInput: CreateAddressInput;
};


export type MutationCreateProductArgs = {
  productInput: ProductInput;
};


export type MutationDeleteAddressArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCollectionArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteProductInCartArgs = {
  id: Scalars['ID'];
};


export type MutationForgotPasswordArgs = {
  forgotPasswordInput: ForgotPasswordInput;
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationRegisterArgs = {
  registerInput: RegisterInput;
};


export type MutationUpdateAddressArgs = {
  updateAddressInput: UpdateAddressInput;
};


export type MutationUpdateCategoryArgs = {
  name: Scalars['String'];
};


export type MutationUpdateCollectionArgs = {
  name: Scalars['String'];
};


export type MutationUpdateProductArgs = {
  productInput: ProductUpdateInput;
};

export type PaginatedCommentResponse = {
  __typename?: 'PaginatedCommentResponse';
  cursor: Scalars['DateTime'];
  hasMore: Scalars['Boolean'];
  paginatedComments: Array<Comment>;
  reviewRating: Scalars['Float'];
  totalCount: Scalars['Float'];
};

export type PaginatedProductResponse = {
  __typename?: 'PaginatedProductResponse';
  cursor: Scalars['DateTime'];
  hasMore: Scalars['Boolean'];
  paginatedProducts: Array<Product>;
  totalCount: Scalars['Float'];
};

export type Picture = {
  __typename?: 'Picture';
  color?: Maybe<Scalars['String']>;
  url: Array<Scalars['String']>;
};

export type PictureInput = {
  color: Scalars['String'];
  url: Array<Scalars['String']>;
};

export type PictureUpdateInput = {
  color: Scalars['String'];
  url: Array<Scalars['String']>;
};

export type Product = {
  __typename?: 'Product';
  cartItem: CartItem;
  category: Category;
  categoryId: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  labelSpecial?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  numberColor: Scalars['Float'];
  numberReview: Scalars['Float'];
  percentSale?: Maybe<Scalars['Float']>;
  picture: ItemPicture;
  poster: Array<Picture>;
  price: Scalars['Float'];
  rating: Scalars['Float'];
  size?: Maybe<Array<Scalars['Float']>>;
  sizeClothing?: Maybe<Array<Scalars['String']>>;
  timerSale?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ProductInput = {
  categoryId: Scalars['Float'];
  description: Scalars['String'];
  labelSpecial?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  numberColor: Scalars['Float'];
  percentSale?: Maybe<Scalars['Float']>;
  picture: ItemPictureInput;
  poster: Array<PictureInput>;
  price: Scalars['Float'];
  size?: Maybe<Array<Scalars['Float']>>;
  sizeClothing?: Maybe<Array<Scalars['String']>>;
  timerSale?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type ProductMutationResponse = IMutationResponse & {
  __typename?: 'ProductMutationResponse';
  code: Scalars['Float'];
  errors?: Maybe<Array<FieldError>>;
  message?: Maybe<Scalars['String']>;
  product?: Maybe<Product>;
  products?: Maybe<Array<Product>>;
  success: Scalars['Boolean'];
};

export type ProductUpdateInput = {
  categoryId?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  labelSpecial?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  numberColor?: Maybe<Scalars['Float']>;
  percentSale?: Maybe<Scalars['Float']>;
  picture?: Maybe<ItemPictureUpdateInput>;
  poster?: Maybe<Array<PictureUpdateInput>>;
  price?: Maybe<Scalars['Float']>;
  size?: Maybe<Array<Scalars['Float']>>;
  timerSale?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  GetAddressId?: Maybe<Address>;
  GetAllAddress?: Maybe<AddressMutationResponse>;
  GetAllCollection?: Maybe<CollectionMutationResponse>;
  GetAllProducts?: Maybe<PaginatedProductResponse>;
  GetAllcategory?: Maybe<CategoryMutationResponse>;
  GetCartOfUser: Cart;
  GetCategoryId?: Maybe<Category>;
  GetCollectionId?: Maybe<Collection>;
  GetComment?: Maybe<PaginatedCommentResponse>;
  GetProductByCategoryAndCollection?: Maybe<PaginatedProductResponse>;
  GetProductId?: Maybe<Product>;
  MyProfile?: Maybe<User>;
  SearchResult: PaginatedProductResponse;
};


export type QueryGetAddressIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetAllProductsArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
};


export type QueryGetCategoryIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetCollectionIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetCommentArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  productId: Scalars['ID'];
};


export type QueryGetProductByCategoryAndCollectionArgs = {
  categoryId: Scalars['ID'];
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  sort?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};


export type QueryGetProductIdArgs = {
  id: Scalars['ID'];
};


export type QuerySearchResultArgs = {
  cursor?: Maybe<Scalars['String']>;
  keyword: Scalars['String'];
  limit?: Maybe<Scalars['Int']>;
};

export type RegisterInput = {
  confirmPassword: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  gender: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
};

export type ReplyComment = {
  __typename?: 'ReplyComment';
  avatar: Scalars['String'];
  comment: Comment;
  commentId: Scalars['String'];
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  dislike: Scalars['Float'];
  editComment?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  like: Scalars['Float'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Float'];
};

export type UpdateAddressInput = {
  commune?: Maybe<Scalars['String']>;
  detail?: Maybe<Scalars['String']>;
  distric?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  phoneNumber?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  avatar: Scalars['String'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  gender: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  role: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type UserMutationResponse = IMutationResponse & {
  __typename?: 'UserMutationResponse';
  code: Scalars['Float'];
  errors?: Maybe<Array<FieldError>>;
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
  user?: Maybe<User>;
};

export type CartMutationResponseFragment = { __typename?: 'CartMutationResponse', code: number, success: boolean, message?: string | null | undefined, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined, cart?: { __typename?: 'Cart', total?: number | null | undefined, quantity?: number | null | undefined, cartItems?: Array<{ __typename?: 'CartItem', size: number, quantity: number, color: string, discount: number, monney: number, product?: { __typename?: 'Product', id: string, name: string, title: string, size?: Array<number> | null | undefined, picture: { __typename?: 'ItemPicture', url: string } } | null | undefined }> | null | undefined } | null | undefined };

export type ProductIdsInfoFragment = { __typename?: 'Product', id: string, name: string, title: string, labelSpecial?: string | null | undefined, price: number, size?: Array<number> | null | undefined, numberColor: number, description: string, percentSale?: number | null | undefined, timerSale?: any | null | undefined, numberReview: number, rating: number, picture: { __typename?: 'ItemPicture', url: string }, poster: Array<{ __typename?: 'Picture', url: Array<string>, color?: string | null | undefined }> };

export type UserMutationResponseFragment = { __typename?: 'UserMutationResponse', code: number, success: boolean, message?: string | null | undefined, user?: { __typename?: 'User', id: string, name: string, email: string, gender: string, avatar: string } | null | undefined, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined };

export type CartInfoFragment = { __typename?: 'Cart', total?: number | null | undefined, quantity?: number | null | undefined, cartItems?: Array<{ __typename?: 'CartItem', size: number, quantity: number, color: string, discount: number, monney: number, product?: { __typename?: 'Product', id: string, name: string, title: string, size?: Array<number> | null | undefined, picture: { __typename?: 'ItemPicture', url: string } } | null | undefined }> | null | undefined };

export type CartItemInfoFragment = { __typename?: 'CartItem', size: number, quantity: number, color: string, discount: number, monney: number, product?: { __typename?: 'Product', id: string, name: string, title: string, size?: Array<number> | null | undefined, picture: { __typename?: 'ItemPicture', url: string } } | null | undefined };

export type ErrorsInfoFragment = { __typename?: 'FieldError', field: string, message: string };

export type MutationStatusFragment = { __typename?: 'UserMutationResponse', code: number, success: boolean, message?: string | null | undefined };

export type ProductInCartFragment = { __typename?: 'Product', id: string, name: string, title: string, size?: Array<number> | null | undefined, picture: { __typename?: 'ItemPicture', url: string } };

export type ProductResponseFragment = { __typename?: 'PaginatedProductResponse', totalCount: number, cursor: any, hasMore: boolean, paginatedProducts: Array<{ __typename?: 'Product', id: string, categoryId: number, name: string, title: string, numberColor: number, price: number, labelSpecial?: string | null | undefined, picture: { __typename?: 'ItemPicture', url: string } }> };

export type UserInfoFragment = { __typename?: 'User', id: string, name: string, email: string, gender: string, avatar: string };

export type AddProductToCartMutationVariables = Exact<{
  cartInput: CartInput;
}>;


export type AddProductToCartMutation = { __typename?: 'Mutation', AddProductToCart: { __typename?: 'CartMutationResponse', code: number, success: boolean, message?: string | null | undefined, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined, cart?: { __typename?: 'Cart', total?: number | null | undefined, quantity?: number | null | undefined, cartItems?: Array<{ __typename?: 'CartItem', size: number, quantity: number, color: string, discount: number, monney: number, product?: { __typename?: 'Product', id: string, name: string, title: string, size?: Array<number> | null | undefined, picture: { __typename?: 'ItemPicture', url: string } } | null | undefined }> | null | undefined } | null | undefined } };

export type ForgotPasswordMutationVariables = Exact<{
  forgotPasswordInput: ForgotPasswordInput;
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', ForgotPassword: boolean };

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', Login: { __typename?: 'UserMutationResponse', code: number, success: boolean, message?: string | null | undefined, user?: { __typename?: 'User', id: string, name: string, email: string, gender: string, avatar: string } | null | undefined, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', Logout: boolean };

export type RegisterMutationVariables = Exact<{
  registerInput: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', Register?: { __typename?: 'UserMutationResponse', code: number, success: boolean, message?: string | null | undefined, user?: { __typename?: 'User', id: string, name: string, email: string, gender: string, avatar: string } | null | undefined, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined } | null | undefined };

export type DeleteProductInCartMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteProductInCartMutation = { __typename?: 'Mutation', DeleteProductInCart: { __typename?: 'CartMutationResponse', code: number, success: boolean, message?: string | null | undefined, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined, cart?: { __typename?: 'Cart', total?: number | null | undefined, quantity?: number | null | undefined, cartItems?: Array<{ __typename?: 'CartItem', size: number, quantity: number, color: string, discount: number, monney: number, product?: { __typename?: 'Product', id: string, name: string, title: string, size?: Array<number> | null | undefined, picture: { __typename?: 'ItemPicture', url: string } } | null | undefined }> | null | undefined } | null | undefined } };

export type AllProductIdsQueryVariables = Exact<{
  limit: Scalars['Int'];
  cursor?: Maybe<Scalars['String']>;
}>;


export type AllProductIdsQuery = { __typename?: 'Query', GetAllProducts?: { __typename?: 'PaginatedProductResponse', paginatedProducts: Array<{ __typename?: 'Product', id: string }> } | null | undefined };

export type GetAllProductsQueryVariables = Exact<{
  limit: Scalars['Int'];
  cursor?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
}>;


export type GetAllProductsQuery = { __typename?: 'Query', GetAllProducts?: { __typename?: 'PaginatedProductResponse', totalCount: number, cursor: any, hasMore: boolean, paginatedProducts: Array<{ __typename?: 'Product', id: string, categoryId: number, name: string, title: string, numberColor: number, price: number, labelSpecial?: string | null | undefined, picture: { __typename?: 'ItemPicture', url: string } }> } | null | undefined };

export type GetCartOfUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCartOfUserQuery = { __typename?: 'Query', GetCartOfUser: { __typename?: 'Cart', userId: number, total?: number | null | undefined, quantity?: number | null | undefined, cartItems?: Array<{ __typename?: 'CartItem', size: number, quantity: number, color: string, discount: number, monney: number, product?: { __typename?: 'Product', id: string, name: string, title: string, size?: Array<number> | null | undefined, picture: { __typename?: 'ItemPicture', url: string } } | null | undefined }> | null | undefined } };

export type GetCommentQueryVariables = Exact<{
  limit: Scalars['Int'];
  productId: Scalars['ID'];
  cursor?: Maybe<Scalars['String']>;
}>;


export type GetCommentQuery = { __typename?: 'Query', GetComment?: { __typename?: 'PaginatedCommentResponse', totalCount: number, reviewRating: number, cursor: any, hasMore: boolean, paginatedComments: Array<{ __typename?: 'Comment', id: string, title: string, content: string, star: number, createdAt: any, like: number, dislike: number, userId: number, name: string, avatar: string, replys: Array<{ __typename?: 'ReplyComment', id: string, userId: number, name: string, avatar: string, content: string, like: number, dislike: number, createdAt: any }> }> } | null | undefined };

export type MyProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type MyProfileQuery = { __typename?: 'Query', MyProfile?: { __typename?: 'User', id: string, name: string, email: string, gender: string, avatar: string } | null | undefined };

export type GetProductIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetProductIdQuery = { __typename?: 'Query', GetProductId?: { __typename?: 'Product', id: string, name: string, title: string, labelSpecial?: string | null | undefined, price: number, size?: Array<number> | null | undefined, numberColor: number, description: string, percentSale?: number | null | undefined, timerSale?: any | null | undefined, numberReview: number, rating: number, picture: { __typename?: 'ItemPicture', url: string }, poster: Array<{ __typename?: 'Picture', url: Array<string>, color?: string | null | undefined }> } | null | undefined };

export type GetProductByCategoryAndCollectionQueryVariables = Exact<{
  limit: Scalars['Int'];
  categoryId: Scalars['ID'];
  cursor?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
}>;


export type GetProductByCategoryAndCollectionQuery = { __typename?: 'Query', GetProductByCategoryAndCollection?: { __typename?: 'PaginatedProductResponse', totalCount: number, cursor: any, hasMore: boolean, paginatedProducts: Array<{ __typename?: 'Product', id: string, categoryId: number, name: string, title: string, numberColor: number, price: number, labelSpecial?: string | null | undefined, picture: { __typename?: 'ItemPicture', url: string } }> } | null | undefined };

export type SearchQueryQueryVariables = Exact<{
  keyword: Scalars['String'];
  limit: Scalars['Int'];
  cursor?: Maybe<Scalars['String']>;
}>;


export type SearchQueryQuery = { __typename?: 'Query', SearchResult: { __typename?: 'PaginatedProductResponse', totalCount: number, cursor: any, hasMore: boolean, paginatedProducts: Array<{ __typename?: 'Product', id: string, categoryId: number, name: string, title: string, numberColor: number, price: number, labelSpecial?: string | null | undefined, picture: { __typename?: 'ItemPicture', url: string } }> } };

export const ErrorsInfoFragmentDoc = gql`
    fragment errorsInfo on FieldError {
  field
  message
}
    `;
export const ProductInCartFragmentDoc = gql`
    fragment productInCart on Product {
  id
  name
  title
  size
  picture {
    url
  }
}
    `;
export const CartItemInfoFragmentDoc = gql`
    fragment cartItemInfo on CartItem {
  size
  quantity
  color
  discount
  monney
  product {
    ...productInCart
  }
}
    ${ProductInCartFragmentDoc}`;
export const CartInfoFragmentDoc = gql`
    fragment cartInfo on Cart {
  total
  quantity
  cartItems {
    ...cartItemInfo
  }
}
    ${CartItemInfoFragmentDoc}`;
export const CartMutationResponseFragmentDoc = gql`
    fragment cartMutationResponse on CartMutationResponse {
  code
  success
  message
  errors {
    ...errorsInfo
  }
  cart {
    ...cartInfo
  }
}
    ${ErrorsInfoFragmentDoc}
${CartInfoFragmentDoc}`;
export const ProductIdsInfoFragmentDoc = gql`
    fragment ProductIdsInfo on Product {
  id
  name
  title
  labelSpecial
  price
  size
  numberColor
  description
  picture {
    url
  }
  poster {
    url
    color
  }
  percentSale
  timerSale
  numberReview
  rating
}
    `;
export const MutationStatusFragmentDoc = gql`
    fragment mutationStatus on UserMutationResponse {
  code
  success
  message
}
    `;
export const UserInfoFragmentDoc = gql`
    fragment userInfo on User {
  id
  name
  email
  gender
  avatar
}
    `;
export const UserMutationResponseFragmentDoc = gql`
    fragment userMutationResponse on UserMutationResponse {
  ...mutationStatus
  user {
    ...userInfo
  }
  errors {
    ...errorsInfo
  }
}
    ${MutationStatusFragmentDoc}
${UserInfoFragmentDoc}
${ErrorsInfoFragmentDoc}`;
export const ProductResponseFragmentDoc = gql`
    fragment productResponse on PaginatedProductResponse {
  totalCount
  cursor
  hasMore
  paginatedProducts {
    id
    categoryId
    name
    title
    numberColor
    price
    labelSpecial
    picture {
      url
    }
  }
}
    `;
export const AddProductToCartDocument = gql`
    mutation AddProductToCart($cartInput: CartInput!) {
  AddProductToCart(cartInput: $cartInput) {
    ...cartMutationResponse
  }
}
    ${CartMutationResponseFragmentDoc}`;
export type AddProductToCartMutationFn = Apollo.MutationFunction<AddProductToCartMutation, AddProductToCartMutationVariables>;

/**
 * __useAddProductToCartMutation__
 *
 * To run a mutation, you first call `useAddProductToCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddProductToCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addProductToCartMutation, { data, loading, error }] = useAddProductToCartMutation({
 *   variables: {
 *      cartInput: // value for 'cartInput'
 *   },
 * });
 */
export function useAddProductToCartMutation(baseOptions?: Apollo.MutationHookOptions<AddProductToCartMutation, AddProductToCartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddProductToCartMutation, AddProductToCartMutationVariables>(AddProductToCartDocument, options);
      }
export type AddProductToCartMutationHookResult = ReturnType<typeof useAddProductToCartMutation>;
export type AddProductToCartMutationResult = Apollo.MutationResult<AddProductToCartMutation>;
export type AddProductToCartMutationOptions = Apollo.BaseMutationOptions<AddProductToCartMutation, AddProductToCartMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($forgotPasswordInput: ForgotPasswordInput!) {
  ForgotPassword(forgotPasswordInput: $forgotPasswordInput)
}
    `;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      forgotPasswordInput: // value for 'forgotPasswordInput'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, options);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const LoginDocument = gql`
    mutation Login($loginInput: LoginInput!) {
  Login(loginInput: $loginInput) {
    ...userMutationResponse
  }
}
    ${UserMutationResponseFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      loginInput: // value for 'loginInput'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  Logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($registerInput: RegisterInput!) {
  Register(registerInput: $registerInput) {
    ...userMutationResponse
  }
}
    ${UserMutationResponseFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      registerInput: // value for 'registerInput'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const DeleteProductInCartDocument = gql`
    mutation DeleteProductInCart($id: ID!) {
  DeleteProductInCart(id: $id) {
    ...cartMutationResponse
  }
}
    ${CartMutationResponseFragmentDoc}`;
export type DeleteProductInCartMutationFn = Apollo.MutationFunction<DeleteProductInCartMutation, DeleteProductInCartMutationVariables>;

/**
 * __useDeleteProductInCartMutation__
 *
 * To run a mutation, you first call `useDeleteProductInCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductInCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductInCartMutation, { data, loading, error }] = useDeleteProductInCartMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteProductInCartMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProductInCartMutation, DeleteProductInCartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProductInCartMutation, DeleteProductInCartMutationVariables>(DeleteProductInCartDocument, options);
      }
export type DeleteProductInCartMutationHookResult = ReturnType<typeof useDeleteProductInCartMutation>;
export type DeleteProductInCartMutationResult = Apollo.MutationResult<DeleteProductInCartMutation>;
export type DeleteProductInCartMutationOptions = Apollo.BaseMutationOptions<DeleteProductInCartMutation, DeleteProductInCartMutationVariables>;
export const AllProductIdsDocument = gql`
    query AllProductIds($limit: Int!, $cursor: String) {
  GetAllProducts(limit: $limit, cursor: $cursor) {
    paginatedProducts {
      id
    }
  }
}
    `;

/**
 * __useAllProductIdsQuery__
 *
 * To run a query within a React component, call `useAllProductIdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllProductIdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllProductIdsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useAllProductIdsQuery(baseOptions: Apollo.QueryHookOptions<AllProductIdsQuery, AllProductIdsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllProductIdsQuery, AllProductIdsQueryVariables>(AllProductIdsDocument, options);
      }
export function useAllProductIdsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllProductIdsQuery, AllProductIdsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllProductIdsQuery, AllProductIdsQueryVariables>(AllProductIdsDocument, options);
        }
export type AllProductIdsQueryHookResult = ReturnType<typeof useAllProductIdsQuery>;
export type AllProductIdsLazyQueryHookResult = ReturnType<typeof useAllProductIdsLazyQuery>;
export type AllProductIdsQueryResult = Apollo.QueryResult<AllProductIdsQuery, AllProductIdsQueryVariables>;
export const GetAllProductsDocument = gql`
    query GetAllProducts($limit: Int!, $cursor: String, $sort: String) {
  GetAllProducts(limit: $limit, cursor: $cursor, sort: $sort) {
    ...productResponse
  }
}
    ${ProductResponseFragmentDoc}`;

/**
 * __useGetAllProductsQuery__
 *
 * To run a query within a React component, call `useGetAllProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllProductsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetAllProductsQuery(baseOptions: Apollo.QueryHookOptions<GetAllProductsQuery, GetAllProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllProductsQuery, GetAllProductsQueryVariables>(GetAllProductsDocument, options);
      }
export function useGetAllProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllProductsQuery, GetAllProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllProductsQuery, GetAllProductsQueryVariables>(GetAllProductsDocument, options);
        }
export type GetAllProductsQueryHookResult = ReturnType<typeof useGetAllProductsQuery>;
export type GetAllProductsLazyQueryHookResult = ReturnType<typeof useGetAllProductsLazyQuery>;
export type GetAllProductsQueryResult = Apollo.QueryResult<GetAllProductsQuery, GetAllProductsQueryVariables>;
export const GetCartOfUserDocument = gql`
    query getCartOfUser {
  GetCartOfUser {
    userId
    total
    quantity
    cartItems {
      product {
        id
        name
        title
        size
        picture {
          url
        }
      }
      size
      quantity
      color
      discount
      monney
    }
  }
}
    `;

/**
 * __useGetCartOfUserQuery__
 *
 * To run a query within a React component, call `useGetCartOfUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCartOfUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCartOfUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCartOfUserQuery(baseOptions?: Apollo.QueryHookOptions<GetCartOfUserQuery, GetCartOfUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCartOfUserQuery, GetCartOfUserQueryVariables>(GetCartOfUserDocument, options);
      }
export function useGetCartOfUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCartOfUserQuery, GetCartOfUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCartOfUserQuery, GetCartOfUserQueryVariables>(GetCartOfUserDocument, options);
        }
export type GetCartOfUserQueryHookResult = ReturnType<typeof useGetCartOfUserQuery>;
export type GetCartOfUserLazyQueryHookResult = ReturnType<typeof useGetCartOfUserLazyQuery>;
export type GetCartOfUserQueryResult = Apollo.QueryResult<GetCartOfUserQuery, GetCartOfUserQueryVariables>;
export const GetCommentDocument = gql`
    query GetComment($limit: Int!, $productId: ID!, $cursor: String) {
  GetComment(productId: $productId, limit: $limit, cursor: $cursor) {
    totalCount
    reviewRating
    cursor
    hasMore
    paginatedComments {
      id
      title
      content
      star
      createdAt
      like
      dislike
      userId
      name
      avatar
      replys {
        id
        userId
        name
        avatar
        content
        like
        dislike
        createdAt
      }
    }
  }
}
    `;

/**
 * __useGetCommentQuery__
 *
 * To run a query within a React component, call `useGetCommentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommentQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      productId: // value for 'productId'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useGetCommentQuery(baseOptions: Apollo.QueryHookOptions<GetCommentQuery, GetCommentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCommentQuery, GetCommentQueryVariables>(GetCommentDocument, options);
      }
export function useGetCommentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCommentQuery, GetCommentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCommentQuery, GetCommentQueryVariables>(GetCommentDocument, options);
        }
export type GetCommentQueryHookResult = ReturnType<typeof useGetCommentQuery>;
export type GetCommentLazyQueryHookResult = ReturnType<typeof useGetCommentLazyQuery>;
export type GetCommentQueryResult = Apollo.QueryResult<GetCommentQuery, GetCommentQueryVariables>;
export const MyProfileDocument = gql`
    query MyProfile {
  MyProfile {
    ...userInfo
  }
}
    ${UserInfoFragmentDoc}`;

/**
 * __useMyProfileQuery__
 *
 * To run a query within a React component, call `useMyProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyProfileQuery(baseOptions?: Apollo.QueryHookOptions<MyProfileQuery, MyProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyProfileQuery, MyProfileQueryVariables>(MyProfileDocument, options);
      }
export function useMyProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyProfileQuery, MyProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyProfileQuery, MyProfileQueryVariables>(MyProfileDocument, options);
        }
export type MyProfileQueryHookResult = ReturnType<typeof useMyProfileQuery>;
export type MyProfileLazyQueryHookResult = ReturnType<typeof useMyProfileLazyQuery>;
export type MyProfileQueryResult = Apollo.QueryResult<MyProfileQuery, MyProfileQueryVariables>;
export const GetProductIdDocument = gql`
    query GetProductId($id: ID!) {
  GetProductId(id: $id) {
    ...ProductIdsInfo
  }
}
    ${ProductIdsInfoFragmentDoc}`;

/**
 * __useGetProductIdQuery__
 *
 * To run a query within a React component, call `useGetProductIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProductIdQuery(baseOptions: Apollo.QueryHookOptions<GetProductIdQuery, GetProductIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductIdQuery, GetProductIdQueryVariables>(GetProductIdDocument, options);
      }
export function useGetProductIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductIdQuery, GetProductIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductIdQuery, GetProductIdQueryVariables>(GetProductIdDocument, options);
        }
export type GetProductIdQueryHookResult = ReturnType<typeof useGetProductIdQuery>;
export type GetProductIdLazyQueryHookResult = ReturnType<typeof useGetProductIdLazyQuery>;
export type GetProductIdQueryResult = Apollo.QueryResult<GetProductIdQuery, GetProductIdQueryVariables>;
export const GetProductByCategoryAndCollectionDocument = gql`
    query GetProductByCategoryAndCollection($limit: Int!, $categoryId: ID!, $cursor: String, $sort: String) {
  GetProductByCategoryAndCollection(
    categoryId: $categoryId
    limit: $limit
    cursor: $cursor
    sort: $sort
  ) {
    totalCount
    cursor
    hasMore
    paginatedProducts {
      id
      categoryId
      name
      title
      numberColor
      price
      labelSpecial
      picture {
        url
      }
    }
  }
}
    `;

/**
 * __useGetProductByCategoryAndCollectionQuery__
 *
 * To run a query within a React component, call `useGetProductByCategoryAndCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductByCategoryAndCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductByCategoryAndCollectionQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      categoryId: // value for 'categoryId'
 *      cursor: // value for 'cursor'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetProductByCategoryAndCollectionQuery(baseOptions: Apollo.QueryHookOptions<GetProductByCategoryAndCollectionQuery, GetProductByCategoryAndCollectionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductByCategoryAndCollectionQuery, GetProductByCategoryAndCollectionQueryVariables>(GetProductByCategoryAndCollectionDocument, options);
      }
export function useGetProductByCategoryAndCollectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductByCategoryAndCollectionQuery, GetProductByCategoryAndCollectionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductByCategoryAndCollectionQuery, GetProductByCategoryAndCollectionQueryVariables>(GetProductByCategoryAndCollectionDocument, options);
        }
export type GetProductByCategoryAndCollectionQueryHookResult = ReturnType<typeof useGetProductByCategoryAndCollectionQuery>;
export type GetProductByCategoryAndCollectionLazyQueryHookResult = ReturnType<typeof useGetProductByCategoryAndCollectionLazyQuery>;
export type GetProductByCategoryAndCollectionQueryResult = Apollo.QueryResult<GetProductByCategoryAndCollectionQuery, GetProductByCategoryAndCollectionQueryVariables>;
export const SearchQueryDocument = gql`
    query SearchQuery($keyword: String!, $limit: Int!, $cursor: String) {
  SearchResult(keyword: $keyword, limit: $limit, cursor: $cursor) {
    ...productResponse
  }
}
    ${ProductResponseFragmentDoc}`;

/**
 * __useSearchQueryQuery__
 *
 * To run a query within a React component, call `useSearchQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchQueryQuery({
 *   variables: {
 *      keyword: // value for 'keyword'
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useSearchQueryQuery(baseOptions: Apollo.QueryHookOptions<SearchQueryQuery, SearchQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchQueryQuery, SearchQueryQueryVariables>(SearchQueryDocument, options);
      }
export function useSearchQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchQueryQuery, SearchQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchQueryQuery, SearchQueryQueryVariables>(SearchQueryDocument, options);
        }
export type SearchQueryQueryHookResult = ReturnType<typeof useSearchQueryQuery>;
export type SearchQueryLazyQueryHookResult = ReturnType<typeof useSearchQueryLazyQuery>;
export type SearchQueryQueryResult = Apollo.QueryResult<SearchQueryQuery, SearchQueryQueryVariables>;