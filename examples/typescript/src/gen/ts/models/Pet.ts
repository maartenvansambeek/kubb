/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type { Cat } from './Cat.ts'
import type { Dog } from './Dog.ts'
import type { Tag } from './Tag.ts'

export const statusEnum = {
  available: 'available',
  pending: 'pending',
  sold: 'sold',
} as const

export type StatusEnum = (typeof statusEnum)[keyof typeof statusEnum]

export type Pet =
  | (Dog & {
      /**
       * @type integer | undefined, int64
       */
      id?: number
      /**
       * @type string
       */
      readonly type: 'dog'
      /**
       * @type string
       */
      name: string
      category?: string
      /**
       * @type array
       */
      photoUrls: string[]
      /**
       * @type array | undefined
       */
      readonly tags?: Tag[]
      /**
       * @description pet status in the store
       * @type string | undefined
       */
      status?: StatusEnum
    })
  | (Cat & {
      /**
       * @type integer | undefined, int64
       */
      id?: number
      /**
       * @type string
       */
      readonly type: 'cat'
      /**
       * @type string
       */
      name: string
      category?: string
      /**
       * @type array
       */
      photoUrls: string[]
      /**
       * @type array | undefined
       */
      readonly tags?: Tag[]
      /**
       * @description pet status in the store
       * @type string | undefined
       */
      status?: StatusEnum
    })
