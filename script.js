/* const p = (name) =>
	new Promise((resolve, reject) => {
		// Délai de réponse entre 500 et 2000 ms
		const delai = 500 + Math.round(Math.random() * 1500);
		// Returns a random number:
		let x = Math.random();
		setTimeout(() => {
			if (x <= 0.8) {
				resolve(`success ! ${name}`);
			}
			reject(`failed ! ${name}`);
		}, delai);
	});

// Ex-1
p("Test 1")
	.then((res) => console.log(res))
	.catch((error) => console.warn(error));

// Exercice 2 - Exécuter la promesse à 3 reprises simultanément.
Promise.all([p("Test 2 - A"), p("Test 2 - B"), p("Test 2 - C")])
	.then((res) => console.log(res))
	.catch((erreur) => console.warn(erreur));

// Exercice 3 - Exécuter la promesse à 3 reprises l'une après l'autre.
p("Test 3 - A")
	.then((res1) => {
		console.log(res1);
		return p("Test 3 - B");
	})
	.then((res2) => {
		console.log(res2);
		return p("Test 3 - C");
	})
	.then((res3) => {
		console.log(res3);
	})
	.catch((erreur) => console.warn(erreur));
 */



// Exercice 4 - Delete li from a ul at random time
function deleteLastChild() {
	let list = document.querySelector("ul#list");
	lastItem = list.querySelector("li:last-child");

	if (lastItem != null) {
		let value = lastItem.innerHTML;
		list.removeChild(lastItem);
		return value;
	}

	return "";
}

function deleteLastChildRandomlyInTime(){
    let p = new Promise((resolve, reject) => {
        // Délai de réponse entre 500 et 2000 ms
        const delai = 500 + Math.round(Math.random() * 1500);
        // Returns a random number:
        let x = Math.random();
        if (x < 0.8) {
            setTimeout(() => {
                let y = deleteLastChild();
                resolve(`Success ! ${y}`);
            }, delai);
        } else {
            reject(new Error(`Failed !`));
        }
    });
    return p;
}


deleteLastChildRandomlyInTime()
    .then(r => {
        console.log(r); 
        return deleteLastChildRandomlyInTime();
    }
    )    
    .then(r => {
        console.log(r); 
        return deleteLastChildRandomlyInTime();
    })
    .then(r => {
        console.log(r); 
        return deleteLastChildRandomlyInTime();
    })
    .catch((error) => console.log(error));
