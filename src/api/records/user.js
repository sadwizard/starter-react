import { Record, List } from 'immutable';

const User = new Record({
  slug: null,
  avatar: null,
  name: '',
  email: '',
  description: '',
  settings: null,
  following: null,
});

export default User;