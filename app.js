// Domain Generator => command(node app.js)

let pronoun = ['the','our', 'my', 'your'];
let adj = ['great', 'big', 'last', 'ultimate'];
let noun = ['jogger','racoon', 'sponge', 'star'];
let extensions = ['.com', '.net', '.us', '.io'] 
// '.net', '.us', '.io'


let domainGenerator = () =>  {
    for (let i=0; i<pronoun.length; i++) {
        for (let j=0; j<adj.length; j++) {
            for (let l=0; l<noun.length; l++) {
                for (let m=0; m<extensions.length; m++) {
                    let result = pronoun[i] + adj[j] + noun[l] + extensions[m]
                    console.log(result);
                }
            }
        }
    }
};
domainGenerator()

