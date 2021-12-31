import { create as createClient } from 'axios';
import GeneralConstant from '@/constants/general.constants';
export default createClient({
  baseURL: GeneralConstant.BASE_URL,
});
