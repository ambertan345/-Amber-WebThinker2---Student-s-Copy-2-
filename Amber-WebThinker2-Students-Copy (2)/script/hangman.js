let words = ['BRAZIL', 'PIZZA', 'SOCCER', 'EIFFEL TOWER', 'PIKACHU', 'DHOBY GHAUT', 'CARPE DIEM', 'CANADA', 'BAGUETTE', 'BASEBALL', 'PYRAMIDS', 'CHARIZARD', 'BISHAN', 'LIVE AND LEARN', 'CHINA', 'LASAGNA', 'BASKETBALL', 'STONEHENGE', 'BULBASAUR', 'PASIR RIS', 'LESS IS MORE', 'DENMARK', 'SUSHI', 'VOLLEYBALL', 'TAJ MAHAL', 'JIGGLYPUFF', 'JURONG EAST', 'LIFE GOES ON', 'EGYPT', 'BURRITO', 'BADMINTON', 'COLOSSEUM', 'MEOWTH', 'RAFFLES PLACE', 'BELIEVE IN YOU', 'FRANCE', 'RISOTTO', 'CRICKET', 'MACHU PICCHU', 'PSYDUCK', 'OUTRAM PARK', 'DARE TO DREAM', 'GERMANY', 'PANCAKE', 'RUGBY', 'GREAT WALL', 'ONIX', 'YISHUN', 'TIME FLIES FAST', 'HUNGARY', 'OMELETTE', 'GOLF', 'PETRA', 'SQUIRTLE', 'SEMBAWANG', 'TO THINE OWN SELF BE TRUE', 'ICELAND', 'FALAFEL', 'TENNNIS', 'ACROPOLIS', 'VAPOREON', 'TAMPINES', 'LOVE CONQUERS ALL', 'JAPAN', 'GOULASH', 'HOCKEY', 'ANGKOR WAT', 'SNORLAX', 'SERANGOON', 'KNOWLEDGE IS POWER', 'KENYA', 'KIMCHI', 'ARCHERY', 'CHRIST THE REDEEMER', 'MEWTWO', 'WOODLANDS', 'PATIENCE IS KEY', 'LAOS', 'TEMPURA', 'JUDO', 'SYDNEY OPERA HOUSE', 'TOGEPI', 'CLEMENTI', 'LAUGHTER IS MEDICINE', 'MEXICO', 'QUINOA', 'FENCING', 'MOUNT RUSHMORE', 'CYNDAQUIL', 'CHINATOWN', 'JOY IN THE JOURNEY', 'NAMIBIA', 'GUACAMOLE', 'KARATE', 'LOUVRE MUSEUM', 'LUGIA', 'BUGIS', 'CHANGE IS CONSTANT', 'OMAN', 'CHURROS', 'SAILING', 'BUCKINGHAM PALACE', 'MUDKIP', 'LAVENDER', 'PEACE BEGINS WITHIN', 'PERU', 'TOFU', 'WRESTLING', 'NOTRE-DAME', 'RAYQUAZA', 'BUKIT BATOK', 'ART IS FREEDOM', 'QATAR', 'WAFFLE', 'LACROSSE', 'SISTINE CHAPEL', 'LUCARIO', 'PUNGGOL', 'DREAM BIG FEAR LITTLE', 'RUSSIA', 'PAELLA', 'POLO', 'GOLDEN GATE BRIDGE', 'CHIMCHAR', 'HARBOURFRONT', 'STRENGTH IN UNITY', 'SPAIN', 'CEVICHE', 'BOXING', 'NIAGARA FALLS', 'GIRATINA', 'CITY HALL', 'EVERY END IS A NEW BEGINNING', 'TURKEY', 'BAKLAVA', 'ROWING', 'TOWER OF PISA', 'OSHAWOTT', 'KRANJI', 'HOPE ANCHORS THE SOUL', 'UGANDA', 'COUSCOUS', 'SURFING', 'CHICHEN ITZA', 'ZEKROM', 'ORCHARD', 'VIETNAM', 'TORTILLA', 'SKATEBOARDING', 'HAGIA SOPHIA', 'FROAKIE', 'EUNOS', 'YEMEN', 'BIRYANI', 'TAEKWONDO', 'PARTHENON', 'GOOMY', 'NOVENA', 'ZIMBABWE', 'RATATOUILLE', 'GYMNASTICS', 'BRANDENBURG GATE', 'ROWLET', 'SENGKANG', 'IRELAND', 'BRUSCHETTA', 'BOBSLEIGH', 'TABLE MOUNTAIN', 'MIMIKYU', 'PAYA LEBAR', 'GREECE', 'POUTINE', 'TRIATHLON', 'EDINBURGH CASTLE', 'TOXTRICITY', 'EXPO', 'BHUTAN', 'HUMMUS', 'HANDBALL', 'GRAND CANYON', 'WOOLOO', 'KENT RIDGE', 'BOLIVIA', 'TABOULEH', 'SQUASH', 'MOUNT FUJI', 'DRACOVISH', 'BOTANIC GARDENS', 'FIJI', 'CANNOLI', 'TABLE TENNIS', 'NGORONGORO CRATER', 'RILLABOOM', 'KHATIB', 'NEPAL', 'MUFFIN', 'CURLING', 'SAGRADA FAMILIA', 'CUFANT', 'BUANGKOK']
const word = words[Math.floor(Math.random()*words.length)];

for(let i = 0; i < word.length; i++) {
    if(word[1] === " ") {
        $('#hint').append('<div class = "card"> </div>');
    }else{
        $('#hint').append('<div class = "card">_</div>');
    }
}

let guess = [];
let life = 7;

const keyPress = (key) =>
{
    if(guess.indexOf(key) == -1){
        //add the letter to guess list
        guess.push(key);
        if(word.indexOf(key) != -1){
            $('#hint').html('');
            let found = true;
            // update the hint
            for(let i = 0;i<word.length;i++){
                if(word[i] == " "){
                    $('#hint').append('<div>' + space + '</div>');
                }else if (guess.indexOf(word[i])!=-1)
                {
                    $('#hint').append('<div>' + word[i] + '</div>');
                }else{
                    $('#hint').append('<div>' + _ + '</div>');
                    found = false;
                }
            }f
                if(found){
                console.log('player has won');
                }
            
        }
        else{
            life-=1;
            $('#life').attr("src",'img/hangman-${life}'+life+'.svg')
            if(life == 0){
                console.log('player has lost');
            }
        }
    }
}


const SubmitGuess = () =>
{
    let guess = $('guessInput').val().toUpperCase();
    if(guess.length === 1 && /^[A-Z]$/.test(guess)){
        keyPress(guess);
        //clear the field
        $('#guesssInput').val('');
    }
    else{
        alert('please enter a valid letter');
    }

}


const newGame = () => {
    word = words[Math.floor(Math.random() * words.length)];
    guess = [];
    life = 7;

    $('#hint').empty();
    $('#incorrectGuesses').empty();
    $('#life').attr("src", 'img/hangman-7.svg');

    for (let i = 0; i < word.length; i++) {
        if (word[i] === " ") {
            $('#hint').append('<div> </div>'); // Append a space
        } else {
            $('#hint').append('<div>_</div>'); // Append an underscore
        }
    }
};
}

$(document).ready(newGame);