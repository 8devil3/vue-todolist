const app = new Vue({
    el: '#root',
    data: {
        newItem: '',
        isEmpty: null,
        arrTodo: [
            {
                title: 'Fare la spesa',
                done: false,
            },
            {
                title: 'Fare i compiti',
                done: false,
            },
            {
                title: 'Boolean',
                done: false,
            },
            {
                title: 'Allenamento',
                done: false,
            },
            {
                title: 'Visita medica',
                done: false,
            },
        ],
    },
    methods: {
        setDone(index) { //imposto l'elemento su "done"
            this.arrTodo[index].done = !this.arrTodo[index].done
            console.table(this.arrTodo);
        },
        setDelete(index) { //elimino l'elemento
            this.arrTodo.splice(index ,1);
            console.table(this.arrTodo);
        },
        addNew(newTd) { //aggiungo l'elemento, controllando che l'input non sia vuoto, controllando anche gli spazi vuoti
            if (newTd != '') {
                this.arrTodo.unshift({title: newTd, done: false}); // aggiungo l'elemento all'inizio della lista (con "unshift()")
                this.newItem = '';
                this.isEmpty = false;
                console.table(this.arrTodo);
            } else {
                this.isEmpty = true;
                console.table(this.arrTodo);
            }
        }
    }
});
