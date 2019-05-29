import { environment } from '../../environments/environment';

export const apiUrl = environment.production ? 'Prod-URL' : 'Dev-URL';
