const fs = require('fs');

const data = JSON.parse(fs.readFileSync('./data/viewData.json', 'utf8'));


for (const key in data) {
    if(key==='status'){
        data[key].map(el=>{
            return {
                id: el.id,
                name: el.name                
            }
        })
    }
}