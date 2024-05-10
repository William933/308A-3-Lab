// Importing database functions. DO NOT MODIFY THIS LINE.
// function getUserData1(id) {
  // const dbs = {
    // db1: db1,
    // db2: db2,
    // db3: db3,
  // };
  // try{
  // let waiting = await dbs.db1(id);
  // console.log(waiting);
  // }catch{
  // }
  // console.log(dbs.db1(id));
  // Promise.any([dbs.db1(id), dbs.db2(id), dbs.db3(id)])
  //   .then((x) => {
  //     console.log(x);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  Promise.resolve(dbs.db1(id))
    .then((x) => {
      console.log(x);
    })
    .catch((err) => {
      console.log(err);
    });


async function getUserData2(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3,
  };
  Promise.all([vault(id)])
    .then((x) => {
      console.log(x);
    })
    .catch((err) => {
      console.error(err);
    });
}

// async function getUserData3(id) {
//   const dbs = {
//     db1: db1,
//     db2: db2,
//     db3: db3,
//   };
//   let waiting = await central(id);
//   console.log(waiting);
  // Promise.any([central(id)])
  //   .then((x) => {
  //     console.log(x);
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   });
  //   Promise.resolve()
//}