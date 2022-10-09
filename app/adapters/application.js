import JSONAPIAdapter from '@ember-data/adapter/json-api';

import { BUSINESS_API_ROUTE } from '../constants/BUSINESS_API_ROUTES';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = BUSINESS_API_ROUTE;
}
