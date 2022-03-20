
let id = 0;

Vue.createApp({
    data() {
      return {
        boxes: [
            {id: id++, type: 'marketplace', link:'#'}
        ] 
      }
    },

    methods: {
        addBox() {
            let boxToAdd = {
                id: id++,
            }
            let type = boxToAdd.id % 2 === 0 ? 'marketplace' : 'crowdfunding';
            let link = boxToAdd.type === 'marketplace' ? '#' : '##';
            boxToAdd = {...boxToAdd, type, link};
            this.boxes.push(boxToAdd);
        },
    }
  }).mount('#app')