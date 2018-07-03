$(function(){
  var machineChoiceList = ['Rock' , 'Paper' , 'Cut'];
  var counter = 0;
  var victory = 0;
  var defeat  = 0;
  var equality = 0;
  $('#shifumi').click(function(){
    var machineChoice = Math.floor(Math.random() * 3);
    var userChoice = $('#userChoice').val();
    if (userChoice == 0 && machineChoice == 2) {
      victory++;
        alert ('User a gagné !');
    } else if (machineChoice == 0 && userChoice == 2) {
      defeat++;
        alert('Machine a gagné');
    } else if (userChoice > machineChoice) {
      victory++;
      alert('User a gagné');
    } else if (machineChoice > userChoice){
      defeat++;
      alert('Machine a gagné');
    } else {
      equality++;
      alert('Egalité');
    }
    var calcul = Math.trunc( (victory / counter) * 100);
    alert ('Vous avez gagné ' + calcul +' % des parties ');
  });
});






// var userChoise = prompt('Rock, Paper, Cut ?!');
// var computerChoice = Math.random();
// var compare = function(choice1, choice2){
//   if (choice1===choice2){
//     return 'the result is a tie';
//   }
//   else if (choice1 == 'rock'){
//     if (choice2 == 'cut'){
//       return 'rock wins';
//     }
//     else {
//       return 'paper wins';
//     }
//   }
// }
