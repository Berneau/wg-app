import { environment } from '../../environments/environment';

export const apiUrl = environment.production ? 'https://frozen-ravine-62358.herokuapp.com/api' : 'http://localhost:3000/api';
