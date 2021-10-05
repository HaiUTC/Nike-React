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
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  total: Scalars['Float'];
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
  product: Product;
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
  labelSpecial: Scalars['String'];
  name: Scalars['String'];
  numberColor: Scalars['Float'];
  numberReview: Scalars['Float'];
  percentSale?: Maybe<Scalars['Float']>;
  picture: ItemPicture;
  poster: Array<Picture>;
  price: Scalars['Float'];
  rating: Scalars['Float'];
  size: Array<Scalars['Float']>;
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
  size: Array<Scalars['Float']>;
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
  GetAllcategory?: Maybe<CategoryMutationResponse>;
  GetCartOfUser?: Maybe<Array<CartItem>>;
  GetCategoryId?: Maybe<Category>;
  GetCollectionId?: Maybe<Collection>;
  GetProductByCategoryAndCollection?: Maybe<PaginatedProductResponse>;
  GetProductId?: Maybe<Product>;
  MyProfile?: Maybe<User>;
};


export type QueryGetAddressIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetCategoryIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetCollectionIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetProductByCategoryAndCollectionArgs = {
  categoryId: Scalars['ID'];
  cursor?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};


export type QueryGetProductIdArgs = {
  id: Scalars['String'];
};

export type RegisterInput = {
  dob: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  gender: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
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

export type UserMutationResponseFragment = { __typename?: 'UserMutationResponse', code: number, success: boolean, message?: string | null | undefined, user?: { __typename?: 'User', id: string, name: string, email: string, gender: string, avatar: string } | null | undefined, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined };

export type ErrorsInfoFragment = { __typename?: 'FieldError', field: string, message: string };

export type MutationStatusFragment = { __typename?: 'UserMutationResponse', code: number, success: boolean, message?: string | null | undefined };

export type UserInfoFragment = { __typename?: 'User', id: string, name: string, email: string, gender: string, avatar: string };

export type RegisterMutationVariables = Exact<{
  registerInput: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', Register?: { __typename?: 'UserMutationResponse', code: number, success: boolean, message?: string | null | undefined, user?: { __typename?: 'User', id: string, name: string, email: string, gender: string, avatar: string } | null | undefined, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined } | null | undefined };

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
export const ErrorsInfoFragmentDoc = gql`
    fragment errorsInfo on FieldError {
  field
  message
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