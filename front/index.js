import api from './clientApi';
import model from './model';

api.fetch().then(data => {
  Object.assign(model, data);
  console.log(model);
});
