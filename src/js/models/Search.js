import axios from 'axios';

export default class Search{
    constructor(query){
        this.query = query;
    }

    async getResults() {

        const proxy = 'https://cors-anywhere.herokuapp.com/'
        const key = '39b2755a9e6c319f276a2c6eef56a193'
        try {
            const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`)
            this.result = res.data.recipes
           // console.log(this.result)
        } catch (error) {
            alert(error)
        }
    
    }
}

// Key using vitormartinsweb 39b2755a9e6c319f276a2c6eef56a193
// Key using vitufernandes d60c6e9e95384ea083935f44d382d765



