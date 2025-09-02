import http from "../http-common";

class OperationDataService {

  create(data) {
    return http.post("/operations", data);
  }

}

export default new OperationDataService();