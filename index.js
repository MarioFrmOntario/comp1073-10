/* STEP 2: Bind the HEADER and the SECTION elements above to variables */
var header = document.querySelector('header');
var section = document.querySelector('section');

    /* STEP 3: Store the URL of a JSON file in a variable */
    let requestURL = 'https://raw.githubusercontent.com/MarioFrmOntario/comp1073-10/main/js/i-scream.json'

    /* STEP 4: Create a new XHR object */
    let request = new XMLHttpRequest();

    /* STEP 5: Open a new request using the request() method */
    request.open('GET', requestURL);

    /* STEP 6: Set JavaScript to accept JSON from the server */
    request.responseType = 'json';

    /* STEP 7: Send the request with the send() method */
    request.send();

    /* STEP 8: Add an event handler that listens for the onload event of the JSON file/object */
    request.onload = function(){
        var iScreamInc = request.response;
        console.log(iScreamInc);
        populateHeader(iScreamInc);
        topFlavors(iScreamInc);
    }

    /* STEP 9: Build out the populateHeader() function */
    function populateHeader(jsonObj){
        let headerH1 = document.createElement('h1');
        headerH1.textContent = jsonObj.companyName;
        header.appendChild(headerH1);

        //Grab the company location and established date
        let headerPara = document.createElement('p');
        headerPara.textContent = 'Head Office: ' + jsonObj.headOffice + ', Established: ' + jsonObj.established;
        header.appendChild(headerPara);
    }

    /* STEP 10a: Assemble the showTopFlavors() function */
    function topFlavors(jsonObj){

        // STEP 10b: Bind the JSON topFlavors object to a var
        let topFlavors = jsonObj.topFlavors;

        for(var i = 0; i < topFlavors.length; i++){
        // STEP 10c: Loop through the topFlavors object

            // STEP 10d: build HTML elements for the content
            let article = document.createElement('article');
            let h2 = document.createElement('h2');
            let img = document.createElement('img');
            let p1 = document.createElement('P');
            let p2 = document.createElement('p');
            let list = document.createElement('ul');

            // STEP 10e: Set the textContent property for each of the above elements (except the UL), based on the JSON content
            img.setAttribute('src', 'https://github.com/MarioFrmOntario/comp1073-10/tree/main/images' + topFlavors[i].image);

            img.setAttribute('alt', topFlavors[i].name);

            h2.textContent = topFlavors[i].name;

            p1.textContent = 'Calories: ' + topFlavors[i].calories;

            p2.textContent = 'Type: ' + topFlavors[i].type;


            // STEP 10f: Build a loop for the ingredients array in the JSON

            let ingredients = topFlavors[i].ingredients;

            for (let j = 0; j < ingredients.length; j++){
                let listItem = document.createElement('li');
                //Set text for each list item
                listItem.textContent = ingredients[j];
                list.appendChild(listItem);
            }

            article.appendChild(img);
            article.appendChild(h2);
            article.appendChild(p1);
            article.appendChild(p2);
            article.appendChild(list);
            section.appendChild(article);
        }
    }

    // This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

    // A special thanks to https://openclipart.org/detail/285225/ice-cream-cones for the awesome ice cream cone illustrations