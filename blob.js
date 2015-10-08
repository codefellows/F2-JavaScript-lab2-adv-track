var dowingtonCitizens = 1000;
var hoursSpentInDowington = 0; // TODO: assign me the value of the
                           // above calculation (how long it took
                           // the blob to eat Dowington)

while (dowingtonCitizens >= 0){
 hoursSpentInDowington++;
 dowingtonCitizens -= hoursSpentInDowington;
 console.log('hours spent ' +  hoursSpentInDowington + ' while eating ' + dowingtonCitizens);
}
