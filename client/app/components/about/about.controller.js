import data from './data';
class AboutController {

  constructor() {
    this.name = 'about';
    this.data = {
      model: null,
      availableOptions: [
        {id: '1', name: 'AAAAAAAA'},
        {id: '2', name: 'AB'},
        {id: '3', name: 'Option C'}
      ]
    };
    this.last = null;
    console.log(data(3))
  }
}

export default AboutController;
