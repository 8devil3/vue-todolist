const app = new Vue({
    el: '#root',
    data: {
        newItem: '',
        isEmpty: false,
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
            this.arrTodo[index].done = true;
            console.table(this.arrTodo);
        },
        setDelete(index) { //eleimino l'elemento
            this.arrTodo.splice(index ,1);
            console.table(this.arrTodo);
        },
        addNew(newTd) { //aggiungo l'elemento, controllando che l'input non sia vuoto, controllando anche gli spazi vuoti
            if (newTd.trim() != '') {
                this.arrTodo.unshift({title: newTd.trim(), done: false}); // aggiungo l'elemento all'inizio della lista (con "unshift()")
                this.newItem = '';
                console.table(this.arrTodo);
            } else {
                console.table(this.arrTodo);
                this.isEmpty = true;
            }
        }
    }
});
































const gatti = [
        {
            sex: 'm',
            age: 8,
        },
        {
            sex: 'm',
            age: 2,
        },
        {
            sex: 'f',
            age: 5,
        },
        {
            sex: 'm',
            age: 4,
        },
        {
            sex: 'f',
            age: 10,
        },
        {
            sex: 'f',
            age: 6,
        },
        {
            sex: 'f',
            age: 7,
        },
        {
            sex: 'm',
            age: 3,
        },
        {
            sex: 'f',
            age: 9,
        },
        {
            sex: 'm',
            age: 4,
        },
        
    ];


const divRoot = document.querySelector('#root2');
const mArr = [];
const fArr = [];

gatti.forEach(cat => {
    const catDiv = document.createElement('div');
    catDiv.classList.add('cat');
    catDiv.innerText = cat.age;

    if (cat.sex == 'm') {
        catDiv.classList.add('cat-m');
        mArr.push(cat);
    } else {
        catDiv.classList.add('cat-f');
        fArr.push(cat);
    };

    mArr.sort();
    fArr.sort();
    divRoot.appendChild(catDiv);
    
});