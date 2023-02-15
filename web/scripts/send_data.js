function sending() {
  login = document.querySelector('#login').value;
  password = document.querySelector('#password').value;

  data = {
    login: login,
    password: password
  }

  eel.send_data_to_json(data);
}