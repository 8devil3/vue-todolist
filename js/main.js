const app = new Vue({
    el: '#root',
    data: {
        newItem: null,
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
            if (!this.arrTodo[index].done) {
                this.arrTodo[index].done = true;
                console.table(this.arrTodo);
            } else {
                this.arrTodo[index].done = false;
                console.table(this.arrTodo);
            }
        },
        setDelete(index) { //elimino l'elemento
            this.arrTodo.splice(index ,1);
            console.table(this.arrTodo);
        },
        addNew(newTd) { //aggiungo l'elemento, controllando che l'input non sia vuoto, controllando anche gli spazi vuoti
            if (newTd.trim() != '') {
                this.arrTodo.unshift({title: newTd.trim(), done: false}); // aggiungo l'elemento all'inizio della lista (con "unshift()")
                this.newItem = null;
                this.isEmpty = false;
                console.table(this.arrTodo);
            } else {
                this.isEmpty = true;
                console.table(this.arrTodo);
            }
        }
    }
});
