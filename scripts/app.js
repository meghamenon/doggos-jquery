console.log("Hi");

$(document).ready(function() {
    var allTheDoggos = [
        {
            name: 'Petunia', 
            age: 1,
            photo: 'https://fortunedotcom.files.wordpress.com/2017/08/512536165-e1510081190643.jpg',
            city: 'SF',
            state: 'CA'
        },
        {
            name: 'Boris', 
            age: 2,
            photo: 'https://www.stayathomemum.com.au/cache/860x380-0/wp-content/uploads/2015/10/Teacup-Pomeranian-White-e1446515202248.jpg',
            city: 'SF',
            state: 'CA'
        },
        {
            name: 'Millie', 
            age: 1,
            photo: 'https://www.babble.com/wp-content/uploads/2013/09/puppy5-624x398.jpg',
            city: 'LA',
            state: 'CA'
        },
        {
            name: 'Panda', 
            age: 3,
            photo: 'https://tailandfur.com/wp-content/uploads/2016/11/40-Fluffy-Pictures-of-Puppies-that-Looks-like-Pandas-3.jpg',
            city: 'SD',
            state: 'CA'
        },
        {
            name: 'Phoebe', 
            age: 4,
            photo: 'http://www.astro.cornell.edu/~derg/style/3864733873_57e2aae81c_o.jpg',
            city: 'SF',
            state: 'CA'
        },
        {
            name: 'Ian', 
            age: 8,
            photo: 'https://static1.squarespace.com/static/53a096cce4b00d7644776a0b/544d5f5ce4b0b7c1dfbfb70e/544d5fb8e4b048f0ef614dae/1414356922235/Shake+Puppies-1_Mixbreed.jpg',
            city: 'SF',
            state: 'CA'
        }
    ];

    var californiaDoggos = [];

    californiaDoggos = allTheDoggos.filter(function(dogs){

        if (dogs.state == 'CA'){

            return true;
        }

     })

    californiaDoggos.forEach(function(puppies){
        var imageURL = puppies.photo;

        var puppyName = puppies.name;

        var image = `<img src = "${imageURL}" />`

        $('#ca').append(image, puppyName);
    })


     var seniorDoggos = [];

     seniorDoggos = allTheDoggos.filter(function(dogs){

        if (dogs.age > 7){

            return true;
        }

     })

     seniorDoggos.forEach(function(puppies){

        var imageURL = puppies.photo;

        var puppyName = `<h1> ${puppies.name}</h1> `

        var image = `<img src = "${imageURL}" />`

        $('#senior').append(puppyName);
        $('#senior').append(image);

     })



    var doggosInSf = []; 

    doggosInSf = allTheDoggos.filter(function(dogs){
        if(dogs.city == 'SF'){
            return true;
        }
    })


    doggosInSf.forEach(function(puppies){

        var imageURL = puppies.photo;

        var puppyName = `<h1> ${puppies.name}</h1> `

        var image = `<img src = "${imageURL}" />`

        $('#sf').append(image);
        $('#sf').append(puppyName);

    })

    var allPuppies = [];

    allPuppies = allTheDoggos.filter(function(dogs){
        if(dogs.age < 2){
            return true;
        }
    })

    allPuppies.forEach(function(puppies){

        var imageURL = puppies.photo;

        var puppyName = `<h1> ${puppies.name}</h1> `

        var image = `<img src = "${imageURL}" />`

        $('#puppies').append(image)
         $('#puppies').append(puppyName)
    })

    var doggosWithPNames = []; 

    doggosWithPNames = allTheDoggos.filter(function(puppies){

        if(puppies.name[0] == 'P'){
            return true;
        }

    })

    doggosWithPNames.forEach(function(puppies){

        var imageURL = puppies.photo;

        var puppyName = puppies.name;

        var image = `<img src = "${imageURL}" />`

        $('#p-name').append(image, puppyName);


    })

 // etc   // 1. Figure out where each array of doggos should be displayed in the index.html
    // 2. Iterate through each array and append the doggo's name and photo to the HTML
    // 3. Use Bootstrap to style these dogs (Check out Bootstrap cards: https://getbootstrap.com/docs/4.0/components/card/)
});