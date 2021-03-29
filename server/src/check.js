import { connection } from "./models/database.js";

function DBchecher(){
    connection.connect(function(err) {
        if (err) {
          console.error('error: '+ err.message);
          return 0;
        }
      
        console.log('Connected to the MySQL server.');
        return 1;
      });
}
export default DBchecher;