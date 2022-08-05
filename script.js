// function getRandomNumber() {
//     return new Promise((resolve, reject) => {
//         console.log('Getting Random Number...');
//         let number = Math.random();
//         setTimeout(() => {
//             if (number) {
//                 resolve(`Ok ${number}`);
//                 console.log('Done!');
//             } else {
//                 reject('ERROR');
//             }
//         }, 500);
//     });

// }

// getRandomNumber().then(result => console.log(result));

// (async () => {
//   const number = await getRandomNumber();
//   console.log(number);
//  })();
 
//Fetch Remote using async/await
const requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  
  const coords = async (city) => {
    await fetch(`https://geocode.xyz/${city}?json=1`, requestOptions)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log(
          `${city} Longitude: ${json.longt}, Latitude: ${json.latt}`
        );
      });
  };
  
  coords("Phoenix");
  coords("Miami");
  coords("Boston");
