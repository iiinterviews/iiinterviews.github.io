var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyO8POK9awZZYi4a'}).base('app23xBjML52o0x8D');
var today = new Date();
var datt = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

function createEntry(){
    console.log("!!!! createee");

    base('name_of_table').create([
      {
        "fields": {
          "Name": "Vinit",
          "date": datt
        }
      },
     
    ], function(err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function (record) {
        console.log(record.getId());
      });
    });

}
function createEntry_C(){
  console.log("!!!! createee");

  base('name_of_table').create([
    {
      "fields": {
        "Name": "Charmie",
        "date": datt
      }
    },
   
  ], function(err, records) {
    if (err) {
      console.error(err);
      return;
    }
    records.forEach(function (record) {
      console.log(record.getId());
    });
  });

}