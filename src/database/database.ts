// import mongoose from "mongoose";

// export async function mongooseStart() {
//   try {
//     await mongoose.connect('mongodb://admin:admin@localhost:27017/');
//     const db = mongoose.connection;
//     db.on('error', console.error.bind(console, 'connection error:'));
//     db.once('open', function() {
//       console.log('Conexão com o banco de dados estabelecida com sucesso!');
//     });
//   } catch (error) {
//     console.log(error);
// }
// }