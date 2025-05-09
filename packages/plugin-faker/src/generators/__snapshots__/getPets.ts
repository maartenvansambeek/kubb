/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */
import { faker } from '@faker-js/faker'

export function listPetsQueryParams(data?: Partial<ListPetsQueryParams>): ListPetsQueryParams {
  return {
    ...{ limit: faker.string.alpha() },
    ...(data || {}),
  }
}

/**
 * @description A paged array of pets
 */
export function listPets200() {
  return pets()
}

/**
 * @description unexpected error
 */
export function listPetsError() {
  return error()
}

export function listPetsQueryResponse(data?: Partial<ListPetsQueryResponse>): ListPetsQueryResponse {
  return data || faker.helpers.arrayElement<any>([listPets200()])
}
