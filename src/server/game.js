const express = require('express')
const router = express.Router();
const ibmdb = require('ibm_db');

router.post('/joinGame', (req, res, next) => {
  // ibmdb.open("DATABASE=BLUDB;HOSTNAME=dashdb-txn-sbox-yp-dal09-03.services.dal.bluemix.net;UID=dgn15697;PWD=0nln8phs+6nln99c;PORT=50000;PROTOCOL=TCPIP", function (err,conn) {
  //           DATABASE=<dbname>;HOSTNAME=<myhost>;UID=db2user;PWD=password;PORT=<dbport>;PROTOCOL=TCPIP"
  //   if (err) return console.log(err);
    
  //   conn.query('select * from DGN15697.POSTAGENS', function (err, data) {
  //     if (err) {
  //       console.log(err);
  //     } 
  //     else {
  //       console.log(data);
  //       res.send(data)
  //     }
   
  //     conn.close(function () {
  //       console.log('done');
  //     });
  //   });
  // });

})