import ForerunnerDB from 'forerunnerdb';

let fdb = new ForerunnerDB();
let db = fdb.db('LocalMoviesDB');
const topFiveMoviesDB = db.collection('topFiveMoviesCollection');
export default topFiveMoviesDB;

