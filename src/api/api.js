import request from 'superagent';

class Api {

  constructor() {
    this.address = 'http://localhost:3000';
  }

  get(path, cb) {
    request.get(this.address + path)
      .end((err, res) => {

        if (err) {
          return console.error(err);
        }

        if (cb) { cb(res); }
      });
  }

  post(path, data, cb) {
    request.post(this.address + path)
      .send(data)
      .end((err, res) => {
        if (err) {
          return console.error(err);
        }

        if (cb) { cb(res); }
      });
  }

  delete(path, data, cb) {
    request('DELETE', this.address + path)
      .send(data)
      .end((err, res) => {
        if (err) {
          return console.error(err);
        }

        if (cb) { cb(res); }
      });
  }

  checkAuth(token, cb) {
    if (!token) {
      if (cb) { cb(false); }
      return;
    };

     request.post(this.address + '/checkauth')
      .send({ token })
      .end((err, res) => {
        if (err) {
          console.error(err);
          if (cb) { return cb(false); }
        }

        if (cb) { cb(Boolean(res.body.user_exist)); }
      });
  }

  postFileAndFeilds(path, file, data, cb) {
    if (!data.token) {
      if (cb) { cb(false); }
      return;
    };

    const req = request.post(this.address + path);

    if (file) {
      req.attach(file.name, file.source);
    }

    for(var i in data) {
      if (typeof data[i] === 'object') {
        req.field(i , JSON.stringify(data[i]));
      } else {
        req.field(i , data[i]);
      }
    }

    req.end((err, res) => {
      if (err) {
        console.error(err);
        if (cb) { return cb(false); }
      } else {
        cb(res);
      }
    }); 
  }
}

export default new Api;