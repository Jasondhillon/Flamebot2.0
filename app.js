var restify = require("restify");
var builder = require("botbuilder");
//=========================================================
// Bot Setup 
//=========================================================
// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 8080, function () {
   console.log('%s listening to %s', server.name, server.url);
});
// Create chat bot
var connector = new builder.ChatConnector({
    appId: "2c2a7e41-040a-4fcd-b10a-2480ac3c488e",
    appPassword: "apKa4DpwPL7nVdD77nDtazg"
});


var message = '';
function getChampion(url, session){
  message = '';
  var http = require('http');
  http.get(url, function(res){
      var body = '';
      res.on('data', function(chunk){
          body += chunk;
      });

      res.on('end', function(){
          var json =  JSON.parse(body);
          message += '**['+json[0].key+']**  \n';

          for(var j = 0; j<json.length; j++){
            message += json[j].role + '  \n';
            if(j == 1){

            }else{
              message += '\n--------------------------------------------';
            }
            message += '  \n**Most Common Items:**  \n\n'
            for(var i = 0; i<json[j].items.mostGames.items.length; i++){
              message += (json[j].items.mostGames.items[i].name)+'  \n';
            }
            message += '  \n--------------------------------------------';
            message += '  \n**Highest Win Percentage Items:**'
            for(var i = 0; i<json[j].items.highestWinPercent.items.length; i++){
              message += '  \n'+(json[j].items.highestWinPercent.items[i].name) + '\n';
            }
            message += '  \n--------------------------------------------';
            message += '  \n**Skills:**  \n';
            for(var i = 0; i<json[j].skills.mostGames.order.length;i++){
              if(i == json[0].skills.mostGames.order.length-1){
                message += (json[j].skills.mostGames.order[i]);
              }else{
                message += (json[j].skills.mostGames.order[i] + '->');
            }
            
          }
            message += '  \n--------------------------------------------';
            message += '  \n**Runes:**  \n';
            for(var i = 0;i<json[0].runes.mostGames.runes.length; i++){
            message +=  (json[0].runes.mostGames.runes[i].number) + ' ' + (json[0].runes.mostGames.runes[i].name) +'  \n';
          }
            message += '  \n--------------------------------------------';
            message += '  \n**Masteries:**  \n';
            for(var i = 0;i<json[0].masteries.mostGames.masteries.length; i++){
            message += '  \n'+(json[0].masteries.mostGames.masteries[i].tree)+': ' + (json[0].masteries.mostGames.masteries[i].total);
          }
            message += '  \n\n--------------------------------------------\n';
          }
          return message;
      });
  });
}


function getURL(champion){
    return url = 'http://api.champion.gg/champion/'+champion+'?api_key=dd088c0e77c1739a23660410de9edb12';
}

var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());
//Bot on
bot.on('contactRelationUpdate', function (message) {
    if (message.action === 'add') {
        var name = message.user ? message.user.name : null;
        var reply = new builder.Message()
                .address(message.address)
                .text("Hello %s... Thanks for adding me.", name || 'there');
        bot.send(reply);
    } else {
        // delete their data
    }
});
bot.on('typing', function (message) {
  // User is typing
		
});
bot.on('deleteUserData', function (message) {
    // User asked to delete their data
});
//=========================================================
// Bots Dialogs
//=========================================================
String.prototype.contains = function(content){
  return this.indexOf(content) !== -1;
}
var hello;
hello = ["Hey, fuck face", "What do you want, ass fuck", "Fuck off, I'm masterbating", "What's up?", "Whattttttt", "Hi bronzie", "...what.", "New phone, who dis"];
var unk;
unk = ["Someone kick this nipple licker", "ENGLISH MOTHERFUCKER, DO YOU SPEAK IT!", "Kill yourself", "Who are you again?", "You're a failed abortion whose birth certificate is an apology from the condom factory.", "You must have been born on a highway, because that's where most accidents happen.", "You are so ugly that when your mama dropped you off at school she got a fine for littering.", "My team is so bad they can't even win a surrender vote", "not even noah can carry you animals gg", "You are a fucking worthless braindead scumfuck mental bastard pile of trash mental dickface that should be gunned down in the street like the degenerate you are", "Check your spelling, you autistic fuck"];



bot.dialog('/', function (session) {
    if(session.message.text.toLowerCase().contains('hello')){
      var rando = Math.floor((Math.random() * 8 ));
      session.send(hello[rando]);
    }
    else if(session.message.text.toLowerCase().contains('fuck')){
      session.send("No, fuck you, asswipe");
    }
    else if(session.message.text.toLowerCase().contains('suck my dick')){
      session.send("What dick?");
    }
    else if(session.message.text.toLowerCase().contains('black')){
      session.send("Cx");
    }
    else if(session.message.text.toLowerCase().contains('aatrox')){
       getChampion(getURL('aatrox', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Aatrox");}, 350);
       
      }
      else if(session.message.text.toLowerCase().contains('ahri')){
        getChampion(getURL('ahri', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Ahri");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('alistar')){
        getChampion(getURL('alistar', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Alistar");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('amumu')){
        getChampion(getURL('amumu', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Amumu");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('anivia')){
        getChampion(getURL('anivia', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Anivia");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('akali')){
        getChampion(getURL('akali', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Akali");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('annie')){
       getChampion(getURL('annie', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Annie");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('ashe')){
        getChampion(getURL('ashe', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Ashe");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('sol' || 'aurelion')){
        getChampion(getURL('AurelionSol', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/AurelionSol");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('azir')){
        getChampion(getURL('azir', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Azir");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('bard')){
        getChampion(getURL('bard', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/bard");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('blitzcrank')){
        getChampion(getURL('blitzcrank', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Blitzcrank");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('brand')){
        getChampion(getURL('brand', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Brand");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('braum')){
        getChampion(getURL('braum', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Braum");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('caitlyn')){
        getChampion(getURL('caitlyn', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Caitlyn");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('camille')){
        getChampion(getURL('camille', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Camille");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('cassiopeia')){
        getChampion(getURL('cassiopeia', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Cassiopeia");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('cho')){
        getChampion(getURL('chogath', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Chogath");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('corki')){
         getChampion(getURL('corki', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Corki");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('darius')){
         getChampion(getURL('darius', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Darius");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('diana')){
         getChampion(getURL('diana', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Diana");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('mundo')){
         getChampion(getURL('drmundo', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Drmundo");}, 350);

      }else if(session.message.text.toLowerCase().contains('draven')){
         getChampion(getURL('draven', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Draven");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('ekko')){
         getChampion(getURL('ekko', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Ekko");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('elise')){
         getChampion(getURL('elise', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Elise");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('evelynn')){
         getChampion(getURL('evelynn', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Evelynn");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('ezreal')){
         getChampion(getURL('ezreal', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Ezreal");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('fiddle')){
         getChampion(getURL('fiddlesticks', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Fiddlesticks");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('fiora')){
         getChampion(getURL('fiora', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Fiora");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('fizz')){
         getChampion(getURL('fizz', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Fizz");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('galio')){
         getChampion(getURL('galio', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Galio");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('gang')){
         getChampion(getURL('Gangplank', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Gangplank");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('dankplank')){
         getChampion(getURL('Gangplank', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Gangplank");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('garen')){
        getChampion(getURL('Garen', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Garen");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('gnar')){
        getChampion(getURL('Gnar', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Gnar");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('gragas')){
        getChampion(getURL('Gragas', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Gragas");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('graves')){
        getChampion(getURL('Graves', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Graves");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('hecarim')){
        getChampion(getURL('hecarim', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Hecarim");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('donger')){
        getChampion(getURL('Heimerdinger', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Heimerdinger");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('illaoi')){
        getChampion(getURL('Illaoi', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Illaoi");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('irelia')){
        getChampion(getURL('Irelia', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Irelia");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('ivern')){
        getChampion(getURL('Ivern', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Ivern");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('janna')){
        getChampion(getURL('Janna', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Janna");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('jarven')){
        getChampion(getURL('JarvenIV', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/JarvanIV");}, 350);
      }
       else if(session.message.text.toLowerCase().contains('j4')){
        getChampion(getURL('JarvenIV', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/JarvanIV");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('jax')){
        getChampion(getURL('Jax', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Jax");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('jayce')){
        getChampion(getURL('Jayce', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Jayce");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('jhin')){
        getChampion(getURL('Jhin', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Jhin");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('jinx')){
        getChampion(getURL('Jinx', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Jinx");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('kalista')){
        getChampion(getURL('Kalista', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Kalista");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('karma')){
        getChampion(getURL('Karma', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Karma");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('karthus')){
        getChampion(getURL('Karthus', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Karthus");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('kassadin')){
        getChampion(getURL('Kassadin', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Kassidin");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('katarina')){
        getChampion(getURL('Katarina', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Katarina");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('kayle')){
        getChampion(getURL('Kayle', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Kayle");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('kennen')){
        getChampion(getURL('Kennen', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Kennen");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('kha')){
        getChampion(getURL('Khazix', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Khazix");}, 350);;
      }
      else if(session.message.text.toLowerCase().contains('kindred')){
        getChampion(getURL('Kindred', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Kindred");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('kled')){
        getChampion(getURL('Kled', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Kled");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('kog')){
        getChampion(getURL('KogMaw', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/KogMaw");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('leblanc')){
        getChampion(getURL('LeBlanc', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/LeBlanc");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('lee')){
        getChampion(getURL('LeeSin', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/LeeSin");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('leona')){
        getChampion(getURL('Leona', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Leona");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('lissandra')){
        getChampion(getURL('Lissandra', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Lissandra");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('lucian')){
        getChampion(getURL('Lucian', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Lucian");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('lulu')){
        getChampion(getURL('Lulu', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Lulu");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('lux')){
        getChampion(getURL('Luz', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Lux");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('malphite')){
        getChampion(getURL('Malphite', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Malphite");}, 350);
      }
       else if(session.message.text.toLowerCase().contains('malzahar')){
        getChampion(getURL('Malzahar', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Malzahar");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('maoki')){
        getChampion(getURL('Maoki', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Maoki");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('fortune')){
        getChampion(getURL('MissFortune', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/MissFortune");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('mordekaiser')){
        getChampion(getURL('Mordekaiser', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Moerdekaiser");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('master')){
        getChampion(getURL('MasterYi', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/MasterYi");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('morgana')){
        getChampion(getURL('Morgana', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Morgana");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('nami')){
        getChampion(getURL('Nami', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Nami");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('nasus')){
        getChampion(getURL('Nasus', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Nasus");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('naut')){
       getChampion(getURL('Nautilus', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Nautilus");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('nidalee')){
        getChampion(getURL('Nidalee', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Nidalee");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('nocturne')){
        getChampion(getURL('nocturne', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Nocturne");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('nunu')){
        getChampion(getURL('Nunu', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Nunu");}, 350);
      }
    else if(session.message.text.toLowerCase().contains('olaf')){
        getChampion(getURL('Olaf', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Olaf");}, 350);
      }
    else if(session.message.text.toLowerCase().contains('orianna')){
        getChampion(getURL('Orianna', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Orianna");}, 350);
      }
    else if(session.message.text.toLowerCase().contains('pantheon')){
        getChampion(getURL('Pantheon', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Pantheon");}, 350);
      }
    else if(session.message.text.toLowerCase().contains('poppy')){
        getChampion(getURL('Poppy', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Poppy");}, 350);
      }
    else if(session.message.text.toLowerCase().contains('quinn')){
        getChampion(getURL('Quinn', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Quinn");}, 350);
      }
    else if(session.message.text.toLowerCase().contains('rammus')){
        getChampion(getURL('Rammus', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Rammus");}, 350);
      }
    else if(session.message.text.toLowerCase().contains('rek')){
        getChampion(getURL('RekSai', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/RekSai");}, 350);
      }
    else if(session.message.text.toLowerCase().contains('renekton')){
        getChampion(getURL('Renekton', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Renekton");}, 350);
      }
    else if(session.message.text.toLowerCase().contains('rengar')){
        getChampion(getURL('Rengar', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Rengar");}, 350);
      }
    else if(session.message.text.toLowerCase().contains('riven')){
        getChampion(getURL('Riven', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Riven");}, 350);
      }
    else if(session.message.text.toLowerCase().contains('rumble')){
        getChampion(getURL('Rumble', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Rumble");}, 350);;
      }
    else if(session.message.text.toLowerCase().contains('ryze')){
        getChampion(getURL('Ryze', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Ryze");}, 350);
      }
    else if(session.message.text.toLowerCase().contains('sej')){
        getChampion(getURL('Sejuani', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Sejuani");}, 350);
      }
    else if(session.message.text.toLowerCase().contains('shaco')){
        getChampion(getURL('Shaco', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Shaco");}, 350);
      }
    else if(session.message.text.toLowerCase().contains('shen')){
        getChampion(getURL('Shen', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Shen");}, 350);
      }
    else if(session.message.text.toLowerCase().contains('shyvana')){
        getChampion(getURL('Shyvana', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Shyvana");}, 350);;
      }
    else if(session.message.text.toLowerCase().contains('singed')){
        getChampion(getURL('Singed', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Singed");}, 350);
      }
    else if(session.message.text.toLowerCase().contains('sion')){
        getChampion(getURL('Sion', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Sion");}, 350);
      }
    else if(session.message.text.toLowerCase().contains('sivir')){
        getChampion(getURL('Sivir', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Sivir");}, 350);
      }
    else if(session.message.text.toLowerCase().contains('skarner')){
        getChampion(getURL('Skarner', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Skarner");}, 350);
      }
    else if(session.message.text.toLowerCase().contains('sona')){
        getChampion(getURL('Sona', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Sona");}, 350);
      }
    else if(session.message.text.toLowerCase().contains('soraka')){
        getChampion(getURL('Soraka', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Soraka");}, 350);
      }
    else if(session.message.text.toLowerCase().contains('swain')){
        getChampion(getURL('Swain', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Swain");}, 350);
      }
    else if(session.message.text.toLowerCase().contains('syndra')){
        getChampion(getURL('Syndra', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Syndra");}, 350);
      }
    else if(session.message.text.toLowerCase().contains('kench')){
        getChampion(getURL('TahmKench', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/TahmKench");}, 350);
      }
    else if(session.message.text.toLowerCase().contains('taliyah')){
        getChampion(getURL('Taliyah', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Taliyah");}, 350);
      }
    else if(session.message.text.toLowerCase().contains('talon')){
        getChampion(getURL('Talon', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Talon");}, 350);
      }
    else if(session.message.text.toLowerCase().contains('taric')){
        getChampion(getURL('Taric', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Taric");}, 350);
      }
    else if(session.message.text.toLowerCase().contains('teemo')){
        getChampion(getURL('Teemo', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Teemo");}, 350);
      }
    else if(session.message.text.toLowerCase().contains('thresh')){
        getChampion(getURL('Thresh', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Thresh");}, 350);
      }
    else if(session.message.text.toLowerCase().contains('tristana')){
        getChampion(getURL('Tristana', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Tristana");}, 350);
      }
    else if(session.message.text.toLowerCase().contains('trundle')){
        getChampion(getURL('Trundle', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Trundle");}, 350);
      }
    else if(session.message.text.toLowerCase().contains('tryndamere')){
        getChampion(getURL('Tryndamere', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Tryndamere");}, 350);
      }
    else if(session.message.text.toLowerCase().contains('twisted')){
        getChampion(getURL('TwistedFate', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/TwistedFate");}, 350);
      }
    else if(session.message.text.toLowerCase().contains('twitch')){
        getChampion(getURL('Twitch', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Twitch");}, 350);
      }
    else if(session.message.text.toLowerCase().contains('udyr')){
        getChampion(getURL('Udyr', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Udyr");}, 350);
      }
    else if(session.message.text.toLowerCase().contains('urgot')){
        getChampion(getURL('Urgot', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Urgot");}, 350);
      }
    else if(session.message.text.toLowerCase().contains('varus')){
        getChampion(getURL('Varus', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Varus");}, 350);
      }
    else if(session.message.text.toLowerCase().contains('vayne')){
        getChampion(getURL('Vayne', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Vayne");}, 350);
      }
    else if(session.message.text.toLowerCase().contains('veigar')){
        getChampion(getURL('Veigar', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Veigar");}, 350);
      }
    else if(session.message.text.toLowerCase().contains('vel')){
        getChampion(getURL('VelKoz', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/VelKoz");}, 350);
      }
    else if(session.message.text.toLowerCase().contains('vi')){
        getChampion(getURL('Vi', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Vi");}, 350);
      }
    else if(session.message.text.toLowerCase().contains('viktor')){
        getChampion(getURL('Viktor', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Viktor");}, 350);
      }
    else if(session.message.text.toLowerCase().contains('vlad')){
        getChampion(getURL('Vladimir', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Vladimir");}, 350);
      }
    else if(session.message.text.toLowerCase().contains('volibear')){
        getChampion(getURL('Volibear', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Volibear");}, 350);
      }
    else if(session.message.text.toLowerCase().contains('warwick')){
        getChampion(getURL('Warwick', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Warwick");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('weed wick')){
        getChampion(getURL('Warwick', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Warwick");}, 350);
      }
      else if(session.message.text.toLowerCase().contains('weedwick')){
        getChampion(getURL('Warwick', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Warwick");}, 350);
      }
    else if(session.message.text.toLowerCase().contains('wukong')){
        getChampion(getURL('Wukong', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Wukong");}, 350);
      }
    else if(session.message.text.toLowerCase().contains('xerath')){
        getChampion(getURL('Xerath', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Xerath");}, 350);
      }
    else if(session.message.text.toLowerCase().contains('xin')){
        getChampion(getURL('Xin', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Xin");}, 350);
      }
    else if(session.message.text.toLowerCase().contains('yasuo')){
        getChampion(getURL('Yasuo', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Yasuo");}, 350);
      }
    else if(session.message.text.toLowerCase().contains('yorick')){
        getChampion(getURL('Yorick', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Yorick");}, 350);
      }
    else if(session.message.text.toLowerCase().contains('zac')){
        getChampion(getURL('Zac', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Zac");}, 350);
      }
    else if(session.message.text.toLowerCase().contains('zed')){
        getChampion(getURL('Zed', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Zed");}, 350);
      }
    else if(session.message.text.toLowerCase().contains('ziggs')){
        getChampion(getURL('Ziggs', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Ziggs");}, 350);
      }
    else if(session.message.text.toLowerCase().contains('zilean')){
        getChampion(getURL('Zilean', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Zilean");}, 350);
      }
    else if(session.message.text.toLowerCase().contains('zyra')){
        getChampion(getURL('Zyra', session));
       setTimeout(function (){session.send(message + "<br/><br/>http://champion.gg/champion/Zyra");}, 350);
      }
    
      else{
        var rando2 = Math.floor((Math.random() * 11));;
        session.send(unk[rando2]);
      }

});
