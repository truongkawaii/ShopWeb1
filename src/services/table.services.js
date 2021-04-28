import { axiosClient } from './config.services';

class TableService {
  // Jobs
  static listJob(page) {
    // return fetchData(query);

    let url = `/recruitment?page=${page}`;
    return axiosClient.get(url);
  }

  static addJob(obj) {
    const url = '/recruitment';
    return axiosClient.post(url, { ...obj });
  }

  static editJob(obj) {
    const url = `/recruitment/${obj.id}`;
    return axiosClient.put(url, { ...obj });
  }

  static deleteJob(id) {
    const url = `/recruitment/${id}`;
    return axiosClient.delete(url);
  }
  // Candidate

  static listCandidate() {
    const url = '/candidate';
    return axiosClient.get(url);
  }

  static addCandidate(obj) {
    const url = '/candidate';
    return axiosClient.post(url, { ...obj });
  }

  static editCandidate(obj) {
    const url = `/candidate/${obj.id}`;
    return axiosClient.put(url, { ...obj });
  }

  static deleteCandidate(id) {
    const url = `/candidate/${id}`;
    return axiosClient.delete(url);
  }
  // login

  static login(token) {
    const url = `/login`;
    console.log(token, 'token...');
    return axiosClient.post(url, { tokenGG: token });
  }
  // admin

  static listUser() {
    const url = `/user`;
    return axiosClient.get(url);
  }

  static editUser(obj) {
    const url = `/user/${obj.id}`;
    return axiosClient.put(url, { ...obj });
  }

  static addUser(obj) {
    const url = '/user';
    return axiosClient.post(url, { ...obj });
  }
  // positions

  static listPosition() {
    const url = '/position';
    return axiosClient.get(url);
  }
  // skills

  static listSkill() {
    const url = '/skill';
    return axiosClient.get(url);
  }

  // address
  static listAddress() {
    const url = '/address';
    return axiosClient.get(url);
  }
}
export default TableService;
