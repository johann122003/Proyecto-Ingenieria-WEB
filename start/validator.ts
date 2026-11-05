/*
|--------------------------------------------------------------------------
| Validator file
|--------------------------------------------------------------------------
|
| The validator file is used for configuring global transforms for VineJS.
| The transform below converts all VineJS date outputs from JavaScript
| Date objects to Luxon DateTime instances, so that validated dates are
| ready to use with Lucid models and other parts of the app that expect
| Luxon DateTime.
|
*/

import { DateTime } from 'luxon'
import vine, { VineDate, SimpleMessagesProvider } from '@vinejs/vine'

declare module '@vinejs/vine/types' {
  interface VineGlobalTransforms {
    date: DateTime
  }
}

VineDate.transform((value) => DateTime.fromJSDate(value))

vine.messagesProvider = new SimpleMessagesProvider({
  'required': 'El campo {{ field }} es obligatorio.',
  'string': 'El campo {{ field }} debe ser texto.',
  'number': 'El campo {{ field }} debe ser un valor numérico.',
  'positive': 'El campo {{ field }} debe ser mayor a 0.',
  'email': 'El campo {{ field }} debe ser un correo electrónico válido.',
  'database.unique': 'El valor ingresado en {{ field }} ya existe en el sistema.',
  'database.exists': 'El elemento seleccionado en {{ field }} no es válido o no existe.',
  'min': 'El campo {{ field }} debe ser al menos {{ min }}.',
  'max': 'El campo {{ field }} no debe exceder {{ max }}.',
  'date': 'El campo {{ field }} debe ser una fecha válida.',
  'array': 'El campo {{ field }} debe ser un conjunto de elementos.',
  'withoutDecimals': 'El campo {{ field }} debe ser un número entero sin decimales.',
})
