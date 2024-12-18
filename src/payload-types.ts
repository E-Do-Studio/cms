/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations
  }
  collections: {
    users: User
    media: Media
    gallery: Gallery
    categories: Category
    sub_categories: SubCategory
    brands: Brand
    'payload-locked-documents': PayloadLockedDocument
    'payload-preferences': PayloadPreference
    'payload-migrations': PayloadMigration
  }
  collectionsJoins: {}
  collectionsSelect: {
    users: UsersSelect<false> | UsersSelect<true>
    media: MediaSelect<false> | MediaSelect<true>
    gallery: GallerySelect<false> | GallerySelect<true>
    categories: CategoriesSelect<false> | CategoriesSelect<true>
    sub_categories: SubCategoriesSelect<false> | SubCategoriesSelect<true>
    brands: BrandsSelect<false> | BrandsSelect<true>
    'payload-locked-documents':
      | PayloadLockedDocumentsSelect<false>
      | PayloadLockedDocumentsSelect<true>
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>
  }
  db: {
    defaultIDType: string
  }
  globals: {}
  globalsSelect: {}
  locale: null
  user: User & {
    collection: 'users'
  }
  jobs: {
    tasks: unknown
    workflows: unknown
  }
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string
    password: string
  }
  login: {
    email: string
    password: string
  }
  registerFirstUser: {
    email: string
    password: string
  }
  unlock: {
    email: string
    password: string
  }
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string
  updatedAt: string
  createdAt: string
  email: string
  resetPasswordToken?: string | null
  resetPasswordExpiration?: string | null
  salt?: string | null
  hash?: string | null
  loginAttempts?: number | null
  lockUntil?: string | null
  password?: string | null
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string
  alt: string
  isAssigned?: boolean | null
  _key?: string | null
  updatedAt: string
  createdAt: string
  url?: string | null
  thumbnailURL?: string | null
  filename?: string | null
  mimeType?: string | null
  filesize?: number | null
  width?: number | null
  height?: number | null
  focalX?: number | null
  focalY?: number | null
  sizes?: {
    thumbnail?: {
      _key?: string | null
      url?: string | null
      width?: number | null
      height?: number | null
      mimeType?: string | null
      filesize?: number | null
      filename?: string | null
    }
    card?: {
      _key?: string | null
      url?: string | null
      width?: number | null
      height?: number | null
      mimeType?: string | null
      filesize?: number | null
      filename?: string | null
    }
  }
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "gallery".
 */
export interface Gallery {
  id: string
  brand: string | Brand
  image: string | Media
  categories: string | Category
  sub_categories?: (string | null) | SubCategory
  updatedAt: string
  createdAt: string
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "brands".
 */
export interface Brand {
  id: string
  name: string
  updatedAt: string
  createdAt: string
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories".
 */
export interface Category {
  id: string
  name: string
  updatedAt: string
  createdAt: string
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "sub_categories".
 */
export interface SubCategory {
  id: string
  name: string
  updatedAt: string
  createdAt: string
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: string
  document?:
    | ({
        relationTo: 'users'
        value: string | User
      } | null)
    | ({
        relationTo: 'media'
        value: string | Media
      } | null)
    | ({
        relationTo: 'gallery'
        value: string | Gallery
      } | null)
    | ({
        relationTo: 'categories'
        value: string | Category
      } | null)
    | ({
        relationTo: 'sub_categories'
        value: string | SubCategory
      } | null)
    | ({
        relationTo: 'brands'
        value: string | Brand
      } | null)
  globalSlug?: string | null
  user: {
    relationTo: 'users'
    value: string | User
  }
  updatedAt: string
  createdAt: string
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string
  user: {
    relationTo: 'users'
    value: string | User
  }
  key?: string | null
  value?:
    | {
        [k: string]: unknown
      }
    | unknown[]
    | string
    | number
    | boolean
    | null
  updatedAt: string
  createdAt: string
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string
  name?: string | null
  batch?: number | null
  updatedAt: string
  createdAt: string
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  updatedAt?: T
  createdAt?: T
  email?: T
  resetPasswordToken?: T
  resetPasswordExpiration?: T
  salt?: T
  hash?: T
  loginAttempts?: T
  lockUntil?: T
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T
  isAssigned?: T
  _key?: T
  updatedAt?: T
  createdAt?: T
  url?: T
  thumbnailURL?: T
  filename?: T
  mimeType?: T
  filesize?: T
  width?: T
  height?: T
  focalX?: T
  focalY?: T
  sizes?:
    | T
    | {
        thumbnail?:
          | T
          | {
              _key?: T
              url?: T
              width?: T
              height?: T
              mimeType?: T
              filesize?: T
              filename?: T
            }
        card?:
          | T
          | {
              _key?: T
              url?: T
              width?: T
              height?: T
              mimeType?: T
              filesize?: T
              filename?: T
            }
      }
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "gallery_select".
 */
export interface GallerySelect<T extends boolean = true> {
  brand?: T
  image?: T
  categories?: T
  sub_categories?: T
  updatedAt?: T
  createdAt?: T
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories_select".
 */
export interface CategoriesSelect<T extends boolean = true> {
  name?: T
  updatedAt?: T
  createdAt?: T
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "sub_categories_select".
 */
export interface SubCategoriesSelect<T extends boolean = true> {
  name?: T
  updatedAt?: T
  createdAt?: T
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "brands_select".
 */
export interface BrandsSelect<T extends boolean = true> {
  name?: T
  updatedAt?: T
  createdAt?: T
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T
  globalSlug?: T
  user?: T
  updatedAt?: T
  createdAt?: T
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T
  key?: T
  value?: T
  updatedAt?: T
  createdAt?: T
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T
  batch?: T
  updatedAt?: T
  createdAt?: T
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown
}

declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}
