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
    else if(session.message.text.toLowerCase().contains('black' || 'nigger')){
      session.send("Cx");
    }
    else if(session.message.text.toLowerCase().contains('aatrox')){
        session.send("Aatrox\n\n1.) Hextech Gunblade\n\n2.) Enchantment: Bloodrazer \n\n3.) Ravenous Hydra \n\n 4.) Blade of the Ruined King \n\n5.) Randuins Omen \n\n6.) Guardian Angel \n\nBoots: Mercury Treads or Ninja Tabi \n\nhttp://champion.gg/champion/Aatrox");
      }
      else if(session.message.text.toLowerCase().contains('ahri')){
        session.send("Ahri\n\n1.) Morellonomicon \n\n2.) Luden's Echo \n\n3.) Void Staff \n\n4.) Hextech Protobelt-01 \n\n5.) Rabadon's Deathcap \n\n6.) Abyssal Scepter \n\nBoots: Sorcerer's Shoes or Ionian Boots of Lucidity\n\nhttp://champion.gg/champion/Ahri");
      }
      else if(session.message.text.toLowerCase().contains('alistar')){
        session.send("Alistar\n\n1.) Redemption \n\n2.) Ruby Sightstone \n\n3.) Locket of the Iron Solari \n\n4.) Eye of the Equinox \n\n5.) Face of the Mountain \n\n6.) Talisman of Ascenison \n Boots: Boots of Mobility or Ionian Boots of Lucidity\n\nhttp://champion.gg/champion/Alistar");
      }
      else if(session.message.text.toLowerCase().contains('amumu')){
        session.send("Amumu\n\n1.)Skirmishers: Cinderhulk \n\n2.) Dead Man's Plate \n\n3.) Rylai's Crystal Scepter \n\n4.) Eye of the Equinox \n\n5.) Face of the Mountain \n\n6.) Frozen Heart \n\nBoots: Sorcerer's Shoes or Boots of Mobility\n\nhttp://champion.gg/champion/Amumu");
      }
      else if(session.message.text.toLowerCase().contains('anivia')){
        session.send("Anivia\n\n1.) Rod of Ages \n\n2.) Seraph's Embrace \n\n3.) Void Staff \n\n4.) Rabadon's Deathcap \n\n5.) Zhonya's Hourglass \n\n6.) Morellonomicon \n\nBoots: Sorcerer's Shoes or Ionian Boots of Lucidity\n\nhttp://champion.gg/champion/Anivia");
      }
      else if(session.message.text.toLowerCase().contains('akali')){
        session.send("Akali\n\n1.) Hextech-Gunblade \n\n2.) Lich Bane \n\n3.) Zhonya's Hourglass \n\n4.) Void Staff \n\n5.) Guardian's Angel \n\n6.) Sorcerer's Boots \n\nhttp://champion.gg/champion/Akali");
      }
      else if(session.message.text.toLowerCase().contains('annie')){
        session.send("Annie\n\n1.)Morellonomicon \n\n2.) Sorcerer's Boots \n\n3.) Luden's Echo \n\n4.) Rabadon's Deathcap \n\n5.) Void Staff \n\n6.) Sorcerer's Shoes\n\nhttp://champion.gg/champion/Annie");
      }
      else if(session.message.text.toLowerCase().contains('ashe')){
        session.send("Ashe\n\n1.)Essence Reaver \n\n2.) Beserkers's Greaves \n\n3.) Runaan's Hurricane \n\n4.) Infinity Edge \n\n5.) Lord Dominik's Regards \n\n6.) Mercurial Scimitar\n\nhttp://champion.gg/champion/Ashe");
      }
      else if(session.message.text.toLowerCase().contains('sol' || 'aurelion')){
        session.send("Aurielon Sol\n\n 1.)Boots of Swiftness \n\n2.) Hextech GLP-800\n\n3.) Rylai's Crystal Scepter \n\n4.) Liandry's Torment \n\n5.) Zhonya's Hourglass \n\n6.) Rabadon's Deathcap\n\nhttp://champion.gg/champion/AurelionSol");
      }
      else if(session.message.text.toLowerCase().contains('azir')){
        session.send("Azir\n\n1.)Nashor's Tooth \n\n2.) Sorcerer's Boots \n\n3.) Rylai's Crystal Scepter \n\n4.) Void Staff \n\n5.) Rabadon's Deathcap \n\n6.) Zhonya'a Hourglass\n\nhttp://champion.gg/champion/Azir");
      }
      else if(session.message.text.toLowerCase().contains('bard')){
        session.send("Bard\n\n1.)Sightstone \n\n2.) Boots of Mobility \n\n3.) Redemption \n\n4.) Locket of the Iron Solari \n\n5.) Frozen Heart \n\n6.) Banshee's Veil\n\nhttp://champion.gg/champion/Bard");
      }
      else if(session.message.text.toLowerCase().contains('blitzcrank')){
        session.send("Blitzcrank\n\n 1.)Sightstone \n\n2.) Boots of Mobility \n\n3.) Face of the Mountain \n\n4.) Locket of the Iron Solari \n\n5.) Redemption \n\n6.) Knight's Vow\n\nhttp://champion.gg/champion/Blitzcrank");
      }
      else if(session.message.text.toLowerCase().contains('brand')){
        session.send("Brand\n\n1.)Sightstone \n\n2.) Sorcerer's Boots \n\n3.) Rylai's Crystal Scepter \n\n4.) Liandry's Torment \n\n5.) Void Staff\n\n6.) Morellonomicon\n\nhttp://champion.gg/champion/Brand");
      }
      else if(session.message.text.toLowerCase().contains('braum')){
        session.send("Braum\n\n 1.)Sightstone \n\n2.) Boots of Mobility \n\n3.) Face of the Mountain \n\n4.) Locket of the Iron Solari \n\n5.) Redemption\n\n6.) Knight's Vow\n\nhttp://champion.gg/champion/Braum");
      }
      else if(session.message.text.toLowerCase().contains('caitlyn')){
        session.send("Caitlyn\n\n 1.)Beserker's Greaves \n\n2.) Runaan's Hurricane\n\n3.) Infinity Edge \n\n4.) Rapid Firecannon \n\n5.) Blood Thirster \n\n6.) Lord Dominik's Regards\n\nhttp://champion.gg/champion/Caitlyn");
      }
      else if(session.message.text.toLowerCase().contains('camille')){
        session.send("Camille\n\n 1.)Trinity Force \n\n2.)Ionian Boots of Lucidity \n\n3.) Ravenous Hydra \n\n4.) Sterak's Gage\n\n5.) Guardian Angel \n\n6.) Mortal Reminder\n\nhttp://champion.gg/champion/Camille");
      }
      else if(session.message.text.toLowerCase().contains('cassiopeia')){
        session.send("Cassiopeia\n\n 1.)Morellonomicon \n\n2.)Rylai's Crystal Scepter \n\n3.) Achangel's Staff \n\n4.) Void Staff\n\n5.) Rabadon's Deathcap \n\n6.) Zhonya's Hourglass\n\nhttp://champion.gg/champion/Cassiopeia");
      }
      else if(session.message.text.toLowerCase().contains('cho')){
        session.send("Cho' Gath\n\n 1.) Rod of Ages \n\n2.) Mercury's Treads \n\n3.) Frozen Heart\n\n4.) Spirit Visage\n\n5.) Dead Man's Plate \n\n6.) Abyssal Scepter\n\nhttp://champion.gg/champion/Chogath");
      }
      else if(session.message.text.toLowerCase().contains('corki')){
        session.send("Corki\n\n1.) Trinity Force \n\n2.) Sorcerer's Boots \n\n3.) Hextech Gunblade \n\n4.) Infinity Edge \n\n5.) Rapid Firecannon \n\n6.) Void Staff\n\nhttp://champion.gg/champion/Corki");
      }
      else if(session.message.text.toLowerCase().contains('darius')){
        session.send("Darius\n\n1.) Black Cleaver \n\n2.) Mercury Treads \n\n3.) Dead Man's Plate \n\n4.) Spirit Visage\n\n5.) Randuin's Omen \n\n6.) Guardian Angel\n\nhttp://champion.gg/champion/Darius");
      }
      else if(session.message.text.toLowerCase().contains('diana')){
        session.send("Diana\n\n1.) Abyssal Scepter \n\n2.) Sorcerer's Boots \n\n3.) Nashor's Tooth \n\n4.) Zhonya's Hourglass\n\n5.) Void Staff \n\n6.) Rabadon's Deathcap\n\nhttp://champion.gg/champion/Diana");
      }
      else if(session.message.text.toLowerCase().contains('mundo')){
        session.send("Mundo\n\n1.) Sunfire Cape \n\n2.) Boots of Swiftness \n\n3.) Spirit Visage \n\n4.) Warmog's Amor \n\n5.) Thornmail \n\n6.) Randuin's Omen\n\nhttp://champion.gg/champion/DrMundo");

      }else if(session.message.text.toLowerCase().contains('draven')){
        session.send("Draven\n\n1.) Beserker's Greaves \n\n2.) Infinity Edge \n\n3.) Phantom Dancer \n\n4.) Blood Thirster \n\n5.) Lord Dominik's Regards \n\n6.) Guardian Angel\n\nhttp://champion.gg/champion/Draven");
      }
      else if(session.message.text.toLowerCase().contains('ekko')){
        session.send("Ekko\n\n1.) Hextech Protobelt-01 \n\n2.) Sorcerer's Boots \n\n3.) Lich Bane \n\n4.) Zhonya's Hourglass \n\n5.) Void Staff \n\n6.) Rabadon's Deathcap\n\nhttp://champion.gg/champion/Ekko");
      }
      else if(session.message.text.toLowerCase().contains('elise')){
        session.send("Elise\n\n1.) Stalker's: Runic Echos \n\n2.) Sorcerer's Boots \n\n3.) Rylai's Crystal Scepter \n\n4.) Liandry's Torment \n\n5.) Hextech Protobelt-01 \n\n6.) Zhonya's Hourglass\n\nhttp://champion.gg/champion/Elise");
      }
      else if(session.message.text.toLowerCase().contains('evelynn')){
        session.send("Evelynn\n\n1.) Enchanment: Runic Echos \n\n2.) Boots of Mobility \n\n3.) Hextech Protobelt-01 \n\n4.) Lich Bane \n\n5.) Rylai's Crystal Scepter \n\n6.) Liandry's Torment\n\nhttp://champion.gg/champion/Evelynn");
      }
      else if(session.message.text.toLowerCase().contains('ezreal')){
        session.send("Ezreal\n\n1.) Manamune \n\n2.) Ionain Boots of Lucidity \n\n3.) Trinity Force \n\n4.) Blad of the Runied King \n\n5.) Lord Dominik's Regards \n\n6.) Mercurial Scimitar\n\nhttp://champion.gg/champion/Ezreal");
      }
      else if(session.message.text.toLowerCase().contains('fiddle')){
        session.send("Fiddle\n\n1.) Enchanment: Runic Echos \n\n2.) Sorcerer's Boots \n\n3.) Zhonya's Hourglass \n\n4.) Abyssal Scepter \n\n5.) Void Staff \n\n6.) Rylai's Crystal Scepter\n\nhttp://champion.gg/champion/Fiddlesticks");
      }
      else if(session.message.text.toLowerCase().contains('fiora')){
        session.send("Fiora\n\n1.) Ravenous Hydra \n\n2.) Mercury Treads \n\n3.) Black Cleaver \n\n4.) Blood Thirster \n\n5.) Guardian's Angel \n\n6.) Spirit Visage\n\nhttp://champion.gg/champion/Fiora");
      }
      else if(session.message.text.toLowerCase().contains('fizz')){
        session.send("Fizz\n\n1.) Lich Bane \n\n2.) Sorcerer's Boots \n\n3.) Zhonya's Hourglass \n\n4.) Rabadon's Deathcap \n\n5.) Void Staff \n\n6.) Guardian's Angel\n\nhttp://champion.gg/champion/Fizz");
      }
      else if(session.message.text.toLowerCase().contains('galio')){
        session.send("Galio\n\n1.) Rod of Ages \n\n2.) Mercury Treads \n\n3.) Abyssal Scepter \n\n4.) Spirit Visage \n\n5.) Zhonya's Hourglass \n\n6.) Void Staff\n\nhttp://champion.gg/champion/Galio");
      }
      else if(session.message.text.toLowerCase().contains('gang')){
        session.send("Gangplank\n\n1.) Trinity Force \n\n2.) Ionain Boots of Lucidity \n\n3.) Infinity Edge \n\n4.) Statikk Shiv \n\n5.) Phantom Dancer \n\n6.) Lord Dominik's Regards\n\nhttp://champion.gg/champion/Gangplank");
      }
      else if(session.message.text.toLowerCase().contains('dankplank')){
        session.send("Gangplank\n\n1.) Trinity Force \n\n2.) Ionain Boots of Lucidity \n\n3.) Infinity Edge \n\n4.) Statikk Shiv \n\n5.) Phantom Dancer \n\n6.) Lord Dominik's Regards\n\nhttp://champion.gg/champion/Gangplank");
      }
      else if(session.message.text.toLowerCase().contains('garen')){
        session.send("Garen\n\n1.) Black Cleaver \n\n2.) Mercury Treads \n\n3.) Sunfire Cape \n\n4.) Spirit Visage \n\n5.) Dead Man's Plate \n\n6.) Warmog's Armor\n\nhttp://champion.gg/champion/Garen");
      }
      else if(session.message.text.toLowerCase().contains('gnar')){
        session.send("Gnar\n\n1.) Black Cleaver \n\n2.) Mercury Treads \n\n3.) Frozen Mallet \n\n4.) Randuin's Omen \n\n5.) Banshee's Veil \n\n6.) Maw of Malmortius\n\nhttp://champion.gg/champion/Gnar");
      }
      else if(session.message.text.toLowerCase().contains('gragas')){
        session.send("Gragas\n\n1.) Enchanment: Runic Echos \n\n2.) Ionian Boots of Lucidity \n\n3.) Iceborn Gauntlet \n\n4.) Spirit Visage \n\n5.) Dead Man's Plate \n\n6.) Locket of the Iron Solari\n\nhttp://champion.gg/champion/Gragas");
      }
      else if(session.message.text.toLowerCase().contains('graves')){
        session.send("Graves\n\n1.) Enchanment: Warrior \n\n2.) Beserker's Greaves \n\n3.) Phantom Dancer \n\n4.) Death's Dance \n\n5.) Maw of Malmortius \n\n6.) Guardian Angel\n\nhttp://champion.gg/champion/Graves");
      }
      else if(session.message.text.toLowerCase().contains('hecarim')){
        session.send("Hecarim\n\n1.) Boots of Swiftness \n\n2.) Trinity Force \n\n3.) Enchanment: Cinderhulk \n\n4.) Dead Man's Plate \n\n5.) Spirit Visage \n\n6.) Guardian Angels\n\nhttp://champion.gg/champion/Hecarim");
      }
      else if(session.message.text.toLowerCase().contains('donger')){
        session.send("Heimdonger\n\n1.) Morellonomicon \n\n2.) Sorcerer's Boots \n\n3.) Zhonya's Hourglass \n\n4.) Rylai's Crystal Scepter \n\n5.) Liandry's Torment \n\n6.) Void Staff\n\nhttp://champion.gg/champion/Heimerdinger");
      }
      else if(session.message.text.toLowerCase().contains('illaoi')){
        session.send("Illaoi\n\n1.) Black Cleaver \n\n2.) Mercury Treads \n\n3.) Sterak's Gage \n\n4.) Spirit Visage \n\n5.) Dead Man's Plate \n\n6.) Death's Dance\n\nhttp://champion.gg/champion/Illaoi");
      }
      else if(session.message.text.toLowerCase().contains('irelia')){
        session.send("Irelia\n\n1.) Trinity Force \n\n2.) Ninja Tabi \n\n3.) Randuin's Omen \n\n4.) Spirit Visage \n\n5.) Blade of the Ruined King \n\n6.) Guardian's Angel\n\nhttp://champion.gg/champion/Irelia");
      }
      else if(session.message.text.toLowerCase().contains('ivern')){
        session.send("Ivern\n\n1.) Ionain Boots of Lucidity \n\n2.) Athene's Unholy Grail \n\n3.) Redemption \n\n4.) Locket of the Iron Solari \n\n5.) Guardian's Angel \n\n6.) Dead Man's Plate\n\nhttp://champion.gg/champion/Ivern");
      }
      else if(session.message.text.toLowerCase().contains('janna')){
        session.send("Janna\n\n1.) Sightstone \n\n2.) Boots of Mobility \n\n3.) Redemption \n\n4.) Locket of the Iron Solari \n\n5.) Ardent Censer \n\n6.) Mikael's Crucible\n\nhttp://champion.gg/champion/Janna");
      }
      else if(session.message.text.toLowerCase().contains('jarven')){
        session.send("Jarven IV\n\n1.) Stalkers: Warrior\n\n2.) Mercury Treads \n\n3.) Black Cleaver \n\n4.) Titanic Hydra \n\n5.) Randuin's Omen \n\n6.) Maw of Malmortius\n\nhttp://champion.gg/champion/JarvanIV");
      }
       else if(session.message.text.toLowerCase().contains('j4')){
        session.send("Jarven IV\n\n1.) Stalkers: Warrior\n\n2.) Mercury Treads \n\n3.) Black Cleaver \n\n4.) Titanic Hydra \n\n5.) Randuin's Omen \n\n6.) Maw of Malmortius\n\nhttp://champion.gg/champion/JarvanIV");
      }
      else if(session.message.text.toLowerCase().contains('jax')){
        session.send("Jax\n\n1.) Trinity Force \n\n2.) Mercury Treads \n\n3.) Hextech Gunblade \n\n4.) Randuin's Omen \n\n5.) Spirit Visage \n\n6.) Guinsoo's Rageblade\n\nhttp://champion.gg/champion/Jax");
      }
      else if(session.message.text.toLowerCase().contains('jayce')){
        session.send("Jayce\n\n1.) Youmuu's Ghostblade \n\n2.) Ionian Boots of Lucidity \n\n3.) Black Cleaver \n\n4.) Blood Thirster \n\n5.) Lord Dominik's Regards \n\n6.) Guardian Angel\n\nhttp://champion.gg/champion/Jayce");
      }
      else if(session.message.text.toLowerCase().contains('jhin')){
        session.send("Jhin\n\n1.) Essence Reaver \n\n2.) Boots of Swiftness \n\n3.) Rapid Firecannon \n\n4.) Infinty Edge \n\n5.) Lord Dominik's Regards \n\n6.) Mercurial Scimitar\n\nhttp://champion.gg/champion/Jhin");
      }
      else if(session.message.text.toLowerCase().contains('jinx')){
        session.send("Jinx\n\n1.) Runaan's Hurricane \n\n2.) Beserker's Greaves \n\n3.) Infinity Edge \n\n4.) Rapid Firecannon \n\n5.) Blood Thirster \n\n6.) Lord Dominik's Regards\n\nhttp://champion.gg/champion/Jinx");
      }
      else if(session.message.text.toLowerCase().contains('kalista')){
        session.send("Kalista\n\n1.) Blade of the Ruined King \n\n2.) Beserker's Greaves \n\n3.) Runaan's Hurricane \n\n4.) Blood Thirster \n\n5.) Lord Domink's Regards \n\n6.) Guardian Angel\n\nhttp://champion.gg/champion/Kalista");
      }
      else if(session.message.text.toLowerCase().contains('karma')){
        session.send("Karma\n\n1.) Sightstone \n\n2.) Ionian Boots of Lucidity \n\n3.) Redemption \n\n4.) Locket of the Iron Solari \n\n5.) Ardent Censer \n\n6.) Mikael's Crucible\n\nhttp://champion.gg/champion/Karma");
      }
      else if(session.message.text.toLowerCase().contains('karthus')){
        session.send("Karthus\n\n1.) Rod of Ages \n\n2.) Sorcerer's Boots \n\n3.) Rylai's Crystal Scepter \n\n4.) Rabadon's Deathcap \n\n5.) Void Staff \n\n6.) Zhonya's Hourglass\n\nhttp://champion.gg/champion/Karthus");
      }
      else if(session.message.text.toLowerCase().contains('kassadin')){
        session.send("Kassadin\n\n1.) Rod of Ages \n\n2.) Ionian Boots of Lucidity \n\n3.) Lich Bane \n\n4.) Zhonya's Hourglass \n\n5.) Void Staff \n\n6.) Rabadon's Deathcap\n\nhttp://champion.gg/champion/Kassadin");
      }
      else if(session.message.text.toLowerCase().contains('katarina')){
        session.send("Katarina\n\n1.) Hexblade Gunblade \n\n2.) Sorcerer's Boots \n\n3.) Zhonya's Hourglass \n\n4.) Void Staff \n\n5.) Rabadon's Deathcap \n\n6.) Rylai Crystal Scepter\n\nhttp://champion.gg/champion/Katarina");
      }
      else if(session.message.text.toLowerCase().contains('kayle')){
        session.send("Kayle\n\n1.) Nashor's Tooth \n\n2.) Beserker's Greaves \n\n3.) Guinsoo's Rageblade \n\n4.) Runaan's Hurricane \n\n5.) Rylai's Crystal Scepter \n\n6.) Guardian Angel\n\nhttp://champion.gg/champion/Kayle");
      }
      else if(session.message.text.toLowerCase().contains('kennen')){
        session.send("Kennen\n\n1.) Hextech Protobelt-01 \n\n2.) Sorcerer's Boots \n\n3.) Zhonya's Hourglass \n\n4.) Rabadon's Deathcap \n\n5.) Void Staff \n\n6.) Rylai's Crystal Scepter\n\nhttp://champion.gg/champion/Kennen");
      }
      else if(session.message.text.toLowerCase().contains('kha')){
        session.send("Kha'zix\n\n1.) Stalkers: Warrior \n\n2.) Ninja Tabi \n\n3.) Black Cleaver \n\n4.) Duskblade of Draktharr \n\n5.) Ravenous Hydra \n\n6.) Lord Dominik's Regards\n\nhttp://champion.gg/champion/Khazix");
      }
      else if(session.message.text.toLowerCase().contains('kindred')){
        session.send("Kindred\n\n1.) Skirmishers: Bloodrazer \n\n2.) Beserker's Greaves \n\n3.) Runaan's Hurricane \n\n4.) Black Cleaver \n\n5.) Frozen Mallet \n\n6.) Guardian Angel\n\nhttp://champion.gg/champion/Kindred");
      }
      else if(session.message.text.toLowerCase().contains('kled')){
        session.send("Kled\n\n1.) Black Cleaver \n\n2.) Mercury Treads \n\n3.) Titanic Hydra \n\n4.) Randuin's Omen \n\n5.) Maw of Malmortius \n\n6.) Guardian Angel\n\nhttp://champion.gg/champion/Kled");
      }
      else if(session.message.text.toLowerCase().contains('kog')){
        session.send("Kog'Maw\n\n1.) Trinity Force \n\n2.) Beserker's Greaves \n\n3.) Blade of the Runied King \n\n4.) Runaan's Hurricane \n\n5.) Infinty Edge \n\n6.) Banshee's Veil\n\nhttp://champion.gg/champion/KogMaw");
      }
      else if(session.message.text.toLowerCase().contains('leblanc')){
        session.send("LeBlanc\n\n1.) Morellonomicon \n\n2.) Sorcerer's Boots \n\n3.) Luden's Echo \n\n4.) Void Staff \n\n5.) Rabadon's Deathcap \n\n6.) Zhonya's Hourglass\n\nhttp://champion.gg/champion/Leblanc");
      }
      else if(session.message.text.toLowerCase().contains('lee')){
        session.send("Lee Sin\n\n1.) Trackers: Warrior \n\n2.) Boots of Mobility \n\n3.) Black Cleaver \n\n4.) Dead Man's Plate \n\n5.) Maw of Malmortius \n\n6.) Guardian Angel\n\nhttp://champion.gg/champion/LeeSin");
      }
      else if(session.message.text.toLowerCase().contains('leona')){
        session.send("Leona\n\n1.) Sightstone \n\n2.) Facce of the Mountain \n\n3.) Boots of Mobility \n\n4.) Locket of the Iron Solari \n\n5.) Redemption \n\n6.) Knight's Vow\n\nhttp://champion.gg/champion/Leona");
      }
      else if(session.message.text.toLowerCase().contains('lissandra')){
        session.send("Lissandra\n\n1.) Rod of Ages \n\n2.) Sorcerer's Boots \n\n3.) Abyssal Scepter \n\n4.) Zhonya's Hourglass \n\n5.) Liandry's Torment \n\n6.) Void Staff\n\nhttp://champion.gg/champion/Lissandra");
      }
      else if(session.message.text.toLowerCase().contains('lucian')){
        session.send("Lucian\n\n1.) Essence Reaver \n\n2.) Beserker's Boots \n\n3.) Rapid Firecannon \n\n4.) Infinity Edge \n\n5.) Blood Thirster \n\n6.) Lord Dominik's Regards\n\nhttp://champion.gg/champion/Lucian");
      }
      else if(session.message.text.toLowerCase().contains('lulu')){
        session.send("Lulu\n\n1.) Sightstone \n\n2.) Boots of Mobility \n\n3.) Redemption \n\n4.) Locket of the Iron Solari \n\n5.) Ardent Censer \n\n6.) Mikael's Crucible\n\nhttp://champion.gg/champion/Lulu");
      }
      else if(session.message.text.toLowerCase().contains('lux')){
        session.send("Lux\n\n1.) Morellonomicon \n\n2.) Sorcerer's Boots \n\n3.) Luden's Echo \n\n4.) Rabadon's Deathcap \n\n5.) Void Staff \n\n6.) Zhonya's Hourglass\n\nhttp://champion.gg/champion/Lux");
      }
      else if(session.message.text.toLowerCase().contains('malphite')){
        session.send("Malphite\n\n1.) Sunfire Cape \n\n2.)Ninja Tabi \n\n3.) Iceborn Gauntlet \n\n4.) Spirit Visage \n\n5.) Randuin's Omen \n\n6.) Guardian Angel\n\nhttp://champion.gg/champion/Malphite");
      }
       else if(session.message.text.toLowerCase().contains('malzahar')){
        session.send("Malzahar\n\n1.) Sightstone \n\n2.) Rylai's Crystal Scepter \n\n3.) Ionian Boots of Lucidity \n\n4.) Liandry's Torment \n\n5.) Void Staff \n\n6.) Morellonomicon\n\nhttp://champion.gg/champion/Malzahar");
      }
      else if(session.message.text.toLowerCase().contains('maoki')){
        session.send("Maoki\n\n1.) Sunfire Cape \n\n2.) Mercury Treads \n\n3.) Spirit Visage \n\n4.) Iceborn Gauntlet \n\n5.) Guardian Angel \n\n6.) Thornmail\n\nhttp://champion.gg/champion/Maoki");
      }
      else if(session.message.text.toLowerCase().contains('fortune')){
        session.send("Miss Fortune\n\n1.) Youmuu's Ghostblade \n\n2.) Beserker's Greaves \n\n3.) Black Cleaver \n\n4.) Edge of Night \n\n5.) Duskblade of Draktharr \n\n6.) Lord Dominik's Regards\n\nhttp://champion.gg/champion/MissFortune");
      }
      else if(session.message.text.toLowerCase().contains('mordekaiser')){
        session.send("Mordekaiser\n\n1.) Hextech Gunblade \n\n2.) Sorcerer's Boots \n\n3.) Rylai's Crystal Scepter \n\n4.) Liandry's Torment \n\n5.) Zhonya's Hourglass \n\n6.) Abyssal Scepter\n\nhttp://champion.gg/champion/Mordekaiser");
      }
      else if(session.message.text.toLowerCase().contains('master')){
        session.send("Master Yi\n\n1.) Skirmishers: Bloodrazer \n\n2.) Beserker's Greaves \n\n3.) Blade of the Ruined King \n\n4.) Youmuu's Ghostblade \n\n5.) Maw of Malmortius \n\n6.) Frozen Mallet\n\nhttp://champion.gg/champion/MasterYi");
      }
      else if(session.message.text.toLowerCase().contains('morgana')){
        session.send("Morgana\n\n1.) Sightstone \n\n2.) Frost Queen's Claim \n\n3.) Boot of Mobility \n\n4.) Redemption \n\n5.) Zhonya's Hourglass \n\n6.) Locket of the Iron Solari\n\nhttp://champion.gg/champion/Morgana");
      }
      else if(session.message.text.toLowerCase().contains('nami')){
        session.send("Nami\n\n1.) Sightstone \n\n2.) Boots of Mobility \n\n3.) Redemption \n\n4.) Locket of the Iron Solari \n\n5.) Mikael's Crucible \n\n6.) Ardent Censer\n\nhttp://champion.gg/champion/Nami");
      }
      else if(session.message.text.toLowerCase().contains('nasus')){
        session.send("Nasus\n\n1.) Frozen Heart \n\n2.) Mercury Treads \n\n3.) Trinity Force \n\n4.) Spirit Visage \n\n5.) Dead Man's Plate \n\n6.) Thornmail\n\nhttp://champion.gg/champion/Nasus");
      }
      else if(session.message.text.toLowerCase().contains('naut')){
        session.send("Nautilus\n\n1.) Sunfire Cape \n\n2.) Mercury Treads \n\n3.) Iceborn Gauntlet \n\n4.) Spirit Visage \n\n5.) Randuin's Omen \n\n6.) Guardian Angel\n\nhttp://champion.gg/champion/Nautilus");
      }
      else if(session.message.text.toLowerCase().contains('nidalee')){
        session.send("Nidalee\n\n1.) Skirmishers: Runic Echos \n\n2.) Ionian Boots of Lucidity \n\n3.) Rod of Ages \n\n4.) Rylai's Crystal Scepter \n\n5.) Void Staff \n\n6.) Mejai's Soulstealer\n\nhttp://champion.gg/champion/Nidalee");
      }
      else if(session.message.text.toLowerCase().contains('nocturne')){
        session.send("Noctourne\n\n1.) Stalkers: Bloodrazer \n\n2.) Mercury Treads \n\n3.) Blade of the Ruined King \n\n4.) Frozen Mallet \n\n5.) Dead Man's Plate \n\n6.) Banshee's Veil\n\nhttp://champion.gg/champion/Nocturne");
      }
      else if(session.message.text.toLowerCase().contains('nunu')){
        session.send("Nunu in 2017, LUL \n\n1.) Trackers: Cinderhulk \n\n2.) Mercury Treads \n\n3.) Locket of the Iron Solari \n\n4.) Redemption \n\n5.) Spirit Visage \n\n6.) Frozen Heart\n\nhttp://champion.gg/champion/Nunu");
      }
    else if(session.message.text.toLowerCase().contains('olaf')){
        session.send("Olaf\n\n1.) Stalkers: Cinderhulk \n\n2.) Ionian Boots of Lucidity \n\n3.) Spirit Visage \n\n4.) Dead Man's Plate \n\n5.) Guardian Angel \n\n6.) Randuin's Omen\n\nhttp://champion.gg/champion/Olaf");
      }
    else if(session.message.text.toLowerCase().contains('orianna')){
        session.send("Orianna\n\n1.) Morellonomicon \n\n2.) Sorcerer's Boots \n\n3.) Luden's Echo \n\n4.) Rabadon's Deathcap \n\n5.) Void Staff \n\n6.) Zhonya's Hourglass\n\nhttp://champion.gg/champion/Orianna");
      }
    else if(session.message.text.toLowerCase().contains('pantheon')){
        session.send("Pantheon\n\n1.) Youmuu's Ghostblade \n\n2.) Mercury Treads \n\n3.) Black Clever \n\n4.) Dead Man's Plate \n\n5.) Maw of Malmortius \n\n6.) Guardian Angel\n\nhttp://champion.gg/champion/Pantheon");
      }
    else if(session.message.text.toLowerCase().contains('poppy')){
        session.send("Poppy\n\n1.) Sunfire Cape \n\n2.) Mercury Treads \n\n3.) Iceborn Gauntlet \n\n4.) Spirit Visage \n\n5.) Guardian Angel \n\n6.) Thornmail\n\nhttp://champion.gg/champion/Poppy");
      }
    else if(session.message.text.toLowerCase().contains('quinn')){
        session.send("Quinn\n\n1.) Youmuu's Ghostblade \n\n2.) Beserker's Greaves \n\n3.) Duskblade of Draktharr \n\n4.) Statikk Shiv \n\n5.) Infinty Edge \n\n6.) Lord Dominik's Regards\n\nhttp://champion.gg/champion/Quinn");
      }
    else if(session.message.text.toLowerCase().contains('rammus')){
        session.send("Rammus\n\n1.) Stalkers: Cinderhulk \n\n2.) Ninja Tabi \n\n3.) Thornmail \n\n4.) Dead Man's Plate \n\n5.) Randuin's Omen \n\n6.) Spirit Visage\n\nhttp://champion.gg/champion/Rammus");
      }
    else if(session.message.text.toLowerCase().contains('rek')){
        session.send("Rek'sai\n\n1.) Stalkers: Cinderhulk \n\n2.) Ninja Tabi \n\n3.) Titanic Hydra \n\n4.) Dead Man's Plate \n\n5.) Spirit Visage \n\n6.) Guardian Angel\n\nhttp://champion.gg/champion/RekSai");
      }
    else if(session.message.text.toLowerCase().contains('renekton')){
        session.send("Renekton\n\n1.) Black Cleaver \n\n2.) Ninja Tabi \n\n3.) Titanic Hydra \n\n4.) Randuin's Omen \n\n5.) Spirit Visage \n\n6.) Guardian Angel\n\nhttp://champion.gg/champion/Renekton");
      }
    else if(session.message.text.toLowerCase().contains('rengar')){
        session.send("Rengar\n\n1.) Skirmishers: Warrior \n\n2.) Ionain Boots of Lucidity \n\n3.) Youmuu's Ghostblade \n\n4.) Infinty Edge \n\n5.) Ravenous Hydra \n\n6.) Duskblade of Draktharr\n\nhttp://champion.gg/champion/Rengar");
      }
    else if(session.message.text.toLowerCase().contains('riven')){
        session.send("Riven\n\n1.) Youmuu's Ghostblade \n\n2.) Ionian Boots of Lucidity \n\n3.) Edge of Night \n\n4.) Duskblade of Draktharr \n\n5.) Ravenous Hydra \n\n6.) Guardian Angel\n\nhttp://champion.gg/champion/Riven");
      }
    else if(session.message.text.toLowerCase().contains('rumble')){
        session.send("Rumble\n\n1.) Liandry's Torment \n\n2.) Sorcerer's Boots \n\n3.) Rylai's Crystal Scepter \n\n4.) Zhonya's Hourglass \n\n5.) Void Staff \n\n6.) Rabadon's Deathcap\n\nhttp://champion.gg/champion/Rumble");
      }
    else if(session.message.text.toLowerCase().contains('ryze')){
        session.send("Ryze\n\n1.) Rod of Ages \n\n2.) Ionian Boots of Lucidity \n\n3.) Morellonomicon \n\n4.) Archangel's Staff \n\n5.) Void Staff \n\n6.) Rabadon's Deathcap\n\nhttp://champion.gg/champion/Ryze");
      }
    else if(session.message.text.toLowerCase().contains('sej')){
        session.send("Sejuani\n\n1.) Stalkers: Cinderhulk \n\n2.) Ninja Tabi \n\n3.) Dead Man's Plate \n\n4.) Banshee's Veil \n\n5.) Warmog's Armor \n\n6.) Guardian Angel\n\nhttp://champion.gg/champion/Sejuani");
      }
    else if(session.message.text.toLowerCase().contains('shaco')){
        session.send("Shaco\n\n1.) Stalkers: Warriors \n\n2.) Boots of Mobility \n\n3.) Duskblade of Draktharr \n\n4.) Infinity Edge \n\n5.) Black Cleaver \n\n6.) Guardian Angel\n\nhttp://champion.gg/champion/Shaco");
      }
    else if(session.message.text.toLowerCase().contains('shen')){
        session.send("Shen\n\n1.) Sunfire Cape \n\n2.) Mercury Treads \n\n3.) Titanic Hydra \n\n4.) Spirit Visage \n\n5.) Randuin's Omen \n\n6.) Guardian Angel\n\nhttp://champion.gg/champion/Shen");
      }
    else if(session.message.text.toLowerCase().contains('shyvana')){
        session.send("Shyvana\n\n1.) Stalkers: Bloodrazer \n\n2.) Mercury Treads \n\n3.) Titanic Hydra \n\n4.) Dead Man's Plate \n\n5.) Spirit Visage \n\n6.) Guardian Angel\n\nhttp://champion.gg/champion/Shyvana");
      }
    else if(session.message.text.toLowerCase().contains('singed')){
        session.send("Singed\n\n1.) Boots of Swiftness \n\n2.) Righteous Glory \n\n3.) ZZ'Rot Portal \n\n4.) Rylai's Crystal Scepter \n\n5.) Liandry's Torment \n\n6.) Dead Man's Plate\n\nhttp://champion.gg/champion/Singed");
      }
    else if(session.message.text.toLowerCase().contains('sion')){
        session.send("Sion\n\n1.) Sunfire Cape \n\n2.) Ninja Tabi \n\n3.) Spirit Visage \n\n4.) ZZ'Rot Portal \n\n5.) Warmog's Armor \n\n6.) Frozen Heart\n\nhttp://champion.gg/champion/Sion");
      }
    else if(session.message.text.toLowerCase().contains('sivir')){
        session.send("Sivir\n\n1.) Essence Reaver \n\n2.) Beserker's Greaves \n\n3.) Phantom Dancer \n\n4.) Infinity Edge \n\n5.) Lord Dominik's Regards \n\n6.) Blood Thirster\n\nhttp://champion.gg/champion/Sivir");
      }
    else if(session.message.text.toLowerCase().contains('skarner')){
        session.send("Skarner\n\n1.) Stalkers: Cinderhulk \n\n2.) Mercury Treads \n\n3.) Trinity Force \n\n4.) Dead Man's Plate \n\n5.) Spirit Visage \n\n6.) Warmog's Armor\n\nhttp://champion.gg/champion/Skarner");
      }
    else if(session.message.text.toLowerCase().contains('sona')){
        session.send("Sona\n\n1.) Sightstone \n\n2.) Sorcerer's Stone \n\n3.) Lich Bane \n\n4.) Redemption \n\n5.) Frost Queen's Claim \n\n6.) Athene's Unholy Grail\n\nhttp://champion.gg/champion/Sona");
      }
    else if(session.message.text.toLowerCase().contains('soraka')){
        session.send("Soraka\n\n1.) Sightstone \n\n2.) Ionian Boots of Lucidity \n\n3.) Redemption \n\n4.) Locket of the Iron Solari \n\n5.) Ardent Censer \n\n6.) Mikael's Crucible\n\nhttp://champion.gg/champion/Soraka");
      }
    else if(session.message.text.toLowerCase().contains('swain')){
        session.send("Swain\n\n1.) Rod of Ages \n\n2.) Sorcerer's Boots \n\n3.) Zhonya's Hourglass \n\n4.) Spirit Visage \n\n5.) Rylai's Crystal Scepter \n\n6.) Void Staff\n\nhttp://champion.gg/champion/Swain");
      }
    else if(session.message.text.toLowerCase().contains('syndra')){
        session.send("Syndra\n\n1.) Morellonomicon \n\n2.) Sorcerer's Boots \n\n3.) Luden's Echo \n\n4.) Rabadon's Deathcap \n\n5.) Void Staff \n\n6.) Zhonya's Hourglass\n\nhttp://champion.gg/champion/Syndra");
      }
    else if(session.message.text.toLowerCase().contains('kench')){
        session.send("Tom Kench\n\n1.) Sightstone \n\n2.) Boots of Swiftness \n\n3.) Face of the Mountain \n\n4.) Locket of the Iron Solari \n\n5.) Dead Man's Plate \n\n6.) Righteous Glory\n\nhttp://champion.gg/champion/TahmKench");
      }
    else if(session.message.text.toLowerCase().contains('taliyah')){
        session.send("Taliyah\n\n1.) Morellonomicon \n\n2.) Sorcerer's Boots \n\n3.) Rylai's Crystal Scepter \n\n4.) Liandry's Torment \n\n5.) Rabadon's Deathcap \n\n6.) Void Staff\n\nhttp://champion.gg/champion/Taliyah");
      }
    else if(session.message.text.toLowerCase().contains('talon')){
        session.send("Talon\n\n1.) Youmuu's Ghostblade \n\n2.) Ionian Boots of Lucidity \n\n3.) Black Cleaver \n\n4.) Duskblade of Draktharr \n\n5.) Edge of Night \n\n6.) Guardian Angel\n\nhttp://champion.gg/champion/Talon");
      }
    else if(session.message.text.toLowerCase().contains('taric')){
        session.send("Taric\n\n1.) Sightstone \n\n2.) Boots of Swiftness \n\n3.) Face of the Mountain \n\n4.) Locket of the Iron Solari \n\n5.) Redemption \n\n6.) Zeke's Harbinger\n\nhttp://champion.gg/champion/Taric");
      }
    else if(session.message.text.toLowerCase().contains('teemo')){
        session.send("Teemo\n\n1.) Liandry's Torment \n\n2.) Sorcerer's Boots \n\n3.) Nashor's Tooth \n\n4.) Rylai's Crystal Scepter \n\n5.) Void Staff \n\n6.) Rabadon's Deathcap\n\nhttp://champion.gg/champion/Teemo");
      }
    else if(session.message.text.toLowerCase().contains('thresh')){
        session.send("Thresh\n\n1.) Sightstone \n\n2.) Boots of Mobility \n\n3.) Face of the Mountain \n\n4.) Locket of the Iron Solari \n\n5.) Redemption \n\n6.) Knight's Vow\n\nhttp://champion.gg/champion/Thresh");
      }
    else if(session.message.text.toLowerCase().contains('tristana')){
        session.send("Tristana\n\n1.) Beserker's Greaves \n\n2.) Runaan's Hurricane \n\n3.) Infinity Edge \n\n4.) Rapid Firecannon \n\n5.) Blood Thirster \n\n6.) Lord Dominik's Regards\n\nhttp://champion.gg/champion/Tristana");
      }
    else if(session.message.text.toLowerCase().contains('trundle')){
        session.send("Trundle\n\n1.) Ninja Tabi \n\n2.) Trinity Force \n\n3.) Dead Man's Plate \n\n4.) Spirit Visage \n\n5.) Death's Dance \n\n6.) Frozen Heart\n\nhttp://champion.gg/champion/Trundle");
      }
    else if(session.message.text.toLowerCase().contains('tryndamere')){
        session.send("Tryndamere\n\n1.) Statikk Shiv \n\n2.) Beserker's Greaves \n\n3.) Infinity Edge \n\n4.) Blade of the Ruined King \n\n5.) Mortal Reminder \n\n6.) Guardian Angel\n\nhttp://champion.gg/champion/Tryndamere");
      }
    else if(session.message.text.toLowerCase().contains('twisted')){
        session.send("Twisted Fate\n\n1.) Lich Bane \n\n2.) Sorcerer's Boots \n\n3.) Luden's Echo \n\n4.) Zhonya's Hourglass \n\n5.) Void Staff \n\n6.) Rabadon's Deathcap\n\nhttp://champion.gg/champion/TwistedFate");
      }
    else if(session.message.text.toLowerCase().contains('twitch')){
        session.send("Twitch\n\n1.) Runaan's Hurricane \n\n2.) Beserker's Greaves \n\n3.) Infintiy Edge \n\n4.) Statikk Shiv \n\n5.) Blood Thirster \n\n6.) Lord Dominik's Regards\n\nhttp://champion.gg/champion/Twitch");
      }
    else if(session.message.text.toLowerCase().contains('udyr')){
        session.send("Udyr\n\n1.) Stalker's: Bloodrazer \n\n2.) Mercury Treads \n\n3.) Trinity Force \n\n4.) Dead Man's Plate \n\n5.) Spirit Visage \n\n6.) Guardian Angel\n\nhttp://champion.gg/champion/Udyr");
      }
    else if(session.message.text.toLowerCase().contains('urgot')){
        session.send("Urgot\n\n1.) Black Cleaver \n\n2.) Manamune \n\n3.) Iceborn Gauntlet \n\n4.) Mercury Treads \n\n5.) Iceborn Gauntlet \n\n6.) Edge of Nightl\n\nhttp://champion.gg/champion/Urgot");
      }
    else if(session.message.text.toLowerCase().contains('varus')){
        session.send("Varus\n\n1.) Essence Reaver \n\n2.) Beserker's Greaves \n\n3.) Runaan's Hurricane \n\n4.) Infinity Edge \n\n5.) Lord Dominik's Regards \n\n6.) Mercurial Scimitarl\n\nhttp://champion.gg/champion/Varus");
      }
    else if(session.message.text.toLowerCase().contains('vayne')){
        session.send("Vayne\n\n1.) Statikk Shiv \n\n2.) Beserker's Greaves \n\n3.) Infinity Edge \n\n4.) Phantom Dancer \n\n5.) Blood Thirster \n\n6.) Lord Dominik's Regardsl\n\nhttp://champion.gg/champion/Vayne");
      }
    else if(session.message.text.toLowerCase().contains('veigar')){
        session.send("Veigar\n\n1.) Morellonomicon \n\n2.) Sorcerer's Boots \n\n3.) Rabadons's Deathcap \n\n4.) Void Staff \n\n5.) Zhonya's Hourglass \n\n6.) Luden's Echol\n\nhttp://champion.gg/champion/Veigar");
      }
    else if(session.message.text.toLowerCase().contains('vel')){
        session.send("Vel'Koz\n\n1.) Morellonomicon \n\n2.) Ionian Boots of Lucidity \n\n3.) Luden's Echo \n\n4.) Rabadons's Deathcap \n\n5.) Rylai's Crystal Scepter  \n\n6.) Zhonya's Hourglassl\n\nhttp://champion.gg/champion/VelKoz");
      }
    else if(session.message.text.toLowerCase().contains('vi')){
        session.send("Vi\n\n1.) Stalker's: Warrior \n\n2.) Ninja Tabi \n\n3.) Trinity Force \n\n4.) Dead Man's Plate \n\n5.) Sterak's Gage \n\n6.) Maw of Malmortiusl\n\nhttp://champion.gg/champion/Vi");
      }
    else if(session.message.text.toLowerCase().contains('viktor')){
        session.send("Viktor\n\n1.) Perfect Hexcore \n\n2.) Sorcerer's Boots \n\n3.) Rylai's Crystal Scepter \n\n4.) Lich Bane \n\n5.) Void Staff \n\n6.) Rabadon's Deathcapl\n\nhttp://champion.gg/champion/Viktor");
      }
    else if(session.message.text.toLowerCase().contains('vlad')){
        session.send("Vladimir\n\n1.) Hextech Protobelt-01 \n\n2.) Ionian Boots of Lucidity \n\n3.) Spirit Visage \n\n4.) Rylai's Crystal Scepter \n\n5.) Zhonya's Hourglass \n\n6.) Liandry's Tormentl\n\nhttp://champion.gg/champion/Vladimir");
      }
    else if(session.message.text.toLowerCase().contains('volibear')){
        session.send("Volibear\n\n1.) Stalker's: Cinderhulk \n\n2.) Mercury Treads \n\n3.) Dead Man's Plate \n\n4.) Spirit Visage \n\n5.) Thornmail \n\n6.) Warmog's Armorl\n\nhttp://champion.gg/champion/Volibear");
      }
    else if(session.message.text.toLowerCase().contains('warwick')){
        session.send("Warwick\n\n1.) Stalker's: Cinderhulk \n\n2.) Titanic Hydra \n\n3.) Mercury Treads \n\n4.) Spirit Visage \n\n5.) Dead Man's Plate \n\n6.) Blade of the Ruined Kingl\n\nhttp://champion.gg/champion/Warwick");
      }
      else if(session.message.text.toLowerCase().contains('weed wick')){
        session.send("Warwick\n\n1.) Stalker's: Cinderhulk \n\n2.) Titanic Hydra \n\n3.) Mercury Treads \n\n4.) Spirit Visage \n\n5.) Dead Man's Plate \n\n6.) Blade of the Ruined Kingl\n\nhttp://champion.gg/champion/Warwick");
      }
      else if(session.message.text.toLowerCase().contains('weedwick')){
        session.send("Warwick\n\n1.) Stalker's: Cinderhulk \n\n2.) Titanic Hydra \n\n3.) Mercury Treads \n\n4.) Spirit Visage \n\n5.) Dead Man's Plate \n\n6.) Blade of the Ruined King\n\nhttp://champion.gg/champion/Warwick");
      }
    else if(session.message.text.toLowerCase().contains('wukong')){
        session.send("Wukong\n\n1.) Stalker's: Warrior \n\n2.) Mercury Treads \n\n3.) Black Cleaver \n\n4.) Dead Man's Plate \n\n5.) Maw of Malmortius \n\n6.) Guardian Angel\n\nhttp://champion.gg/champion/Wukong");
      }
    else if(session.message.text.toLowerCase().contains('xerath')){
        session.send("Xerath\n\n1.) Morellonomicon \n\n2.) Sorcerer's Boots \n\n3.) Luden's Echo \n\n4.) Rabadon's Deathcap \n\n5.) Void Staff \n\n6.) Zhonya's Hourglass\n\nhttp://champion.gg/champion/Xerath");
      }
    else if(session.message.text.toLowerCase().contains('xin')){
        session.send("Xin Zhao\n\n1.) Skirmishers: Bloodrazer \n\n2.) Mercury Treads \n\n3.) Trinity Force \n\n4.) Dead Man's Plate \n\n5.) Spirit Visage \n\n6.) Blade of the Ruined King\n\nhttp://champion.gg/champion/Xin");
      }
    else if(session.message.text.toLowerCase().contains('yasuo')){
        session.send("Yasuo\n\n1.) Phantom Dancer \n\n2.) Beserker's Greaves \n\n3.) Infintiy Edge \n\n4.) Blood Thirster \n\n5.) Frozen Mallet \n\n6.) Guardian Angel\n\nhttp://champion.gg/champion/Yasuo");
      }
    else if(session.message.text.toLowerCase().contains('yorick')){
        session.send("Yorick\n\n1.) Trinity Force \n\n2.) Mercury Treads \n\n3.) ZZ'Rot Portal \n\n4.) Dead Man's Plate \n\n5.) Spirit Visage \n\n6.) Randuin's Omen\n\nhttp://champion.gg/champion/Yorick");
      }
    else if(session.message.text.toLowerCase().contains('zac')){
        session.send("Zac\n\n1.) Stalker's: Cinderhulk \n\n2.) Ionian Boots of Lucidity \n\n3.) Spirit Visage \n\n4.) Randuin's Omen \n\n5.) Guardian Angel \n\n6.) Thornmail\n\nhttp://champion.gg/champion/Zac");
      }
    else if(session.message.text.toLowerCase().contains('zed')){
        session.send("Zed\n\n1.) Youmuu's Ghostblade \n\n2.) Mercury Treads \n\n3.) Duskblade of Draktharr \n\n4.) Black Cleaver \n\n5.) Maw of Malmortius \n\n6.) Blade of the Ruined King\n\nhttp://champion.gg/champion/Zed");
      }
    else if(session.message.text.toLowerCase().contains('ziggs')){
        session.send("Ziggs\n\n1.) Morellonomicon \n\n2.) Sorcerer's Boots \n\n3.) Luden's Echo \n\n4.) Rabadon's Deathcap \n\n5.) Void Staff \n\n6.) Zhonya's Hourglass\n\nhttp://champion.gg/champion/Ziggs");
      }
    else if(session.message.text.toLowerCase().contains('zilean')){
        session.send("Zilean\n\n1.) Sightstone \n\n2.) Ionian Boots of Lucidity \n\n3.) Redemption \n\n4.) Locket of the Iron Solari \n\n5.) Talisman of Ascension \n\n6.) Zeke's Harbinger\n\nhttp://champion.gg/champion/Zilean");
      }
    else if(session.message.text.toLowerCase().contains('zyra')){
        session.send("Zyra\n\n1.) Sightstone \n\n2.) Sorcerer's Boots \n\n3.) Liandry's Torment \n\n4.) Rylai's Crystal Scepter \n\n5.) Void Staff \n\n6.) Zhonya's Hourglass\n\nhttp://champion.gg/champion/Zyra");
      }
    
      else{
        var rando2 = Math.floor((Math.random() * 11));;
        session.send(unk[rando2]);
      }

});
