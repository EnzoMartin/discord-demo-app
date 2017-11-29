import uuid from 'uuid';


class Modal {
  constructor(data){
    this.id = uuid.v4();
    this.content = data.content || '';
  }
}

export default {
  Modal
};
