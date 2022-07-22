//Function for calling the next line of the plot
function nextLine(trigger, name, ID, time, title, text, characterVisible, characterHidden, characterID, extraTrigger, bonusTrigger, fileName, contextBackground) {
    var restriction = "#" + ID;
    var titleFull = "#" + title;
    $('#transparentBackground').on('click', function () {
        if (timeManage == trigger) {
            $(restriction).fadeOut(time);
            setTimeout(function () {
                $(restriction).replaceWith('<text id=' + ID + '>' + text + '</text>');
                $(restriction).fadeIn(time);
                timeManage = timeManage + 1;
                console.log('Required ' + timeManage + ' for next line');
                if (characterName == characterVisible) {
                    $(titleFull).fadeIn(time);
                    characterName = characterName + 1;
                    console.log('Required ' + characterName + ' for showing name');
                } else if (characterName != 0 && characterVisible) {
                    $(titleFull).replaceWith('<text id="' + title + '">' + name + '</text>')
                    $(titleFull).fadeIn(time);
                    characterName = characterName + 2;
                    console.log('Required ' + characterName + ' or ' + title + ' for showing name!!!');
                };
                if (characterDisappear == characterHidden) {
                    $(titleFull).fadeOut(time / 10);
                    characterDisappear = characterDisappear + 1;
                    console.log('Required ' + characterDisappear + ' for hiding name');
                };
                if (extraTrigger == 0) {
                    var character = '#' + characterID;
                    $(character).fadeIn(time * 2);
                };
                if (bonusTrigger == trigger) {
                    var audioFile = new Audio("Sounds/" + fileName + ".mp3");
                    $(audioFile).animate({ volume: 0 });
                    setTimeout(function () {
                        audioFile.play();
                        $(audioFile).animate({ volume: 0.55 })
                        console.log('File was played...')
                    }, time / 5);
                }else if (trigger == 1) {
                    deleteElements(undefined, undefined, undefined, undefined, "backgroundInformation", "textBox");
                    $('#transparentBackground').fadeOut(0);
                }
                else if (trigger == 3) {
                    $('#characterE').css({ 'z-index': '120', left: '55px' })
                    $('#characterI').fadeOut(2400);
                    $('#characterE').fadeIn(3000);
                    $('#firstChoice').fadeIn(3600);
                    $('#secondChoice').fadeIn(3600);
                };
            });
        };
        if (contextBackground == 1) {
            $('#textBox').fadeIn(time);
        } else if (contextBackground == 2) {
            setTimeout(function () {
                $('#textBox').fadeIn(3000);
            });
        }
    });
};

function deleteElements(v, w, x, y, z, i) {
    var firstElement = "#" + v;
    var secondElement = "#" + w;
    var thirdElement = "#" + x;
    var fourthElement = "#" + y;
    var fifthElement = "#" + z;
    var sixthElement = "#" + i;
    $(firstElement).remove();
    $(secondElement).remove();
    $(thirdElement).remove();
    $(fourthElement).remove();
    $(fifthElement).fadeOut(800);
    $(sixthElement).fadeOut(800);
};

//Function for automatically continuing to the next line after a section stopped...
function hover(zero, one, two, three, four, time, text, text1) {
    var threeID = '#' + three;
    var fourID = '#' + four;
    $('#textBox').fadeIn(800);
    $(zero).fadeIn(time);
    $(one).fadeIn(time);
    $(two).fadeIn(time);
    $(threeID).replaceWith('<text id=' + three + '>' + text + '</text>')
    $(threeID).fadeIn(time);
    $(fourID).replaceWith('<text id=' + four + '>' + text1 + '</text>')
    $(fourID).fadeIn(time);
};

//Database
var displayID = '';
var apikey = '61a3fa9234abfc7f972efc07';
var url = 'https://mmou1226-b813.restdb.io/rest/ancientchina';
/* --- Functions --- */
function getCharacter(url, apikey, value) {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": url,
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "x-apikey": apikey,
            "cache-control": "no-cache"
        }
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
        for (var i = 0; i < response.length; i++) {

            console.log(response[i].Value, value);
            if (value == response[i].Value) {
                // Character item
                //  var characterItem = '<img id="character' + response[i].Letter + '" src="' + response[i].ImageReference + '" width="' + response[i].OriginalWidth + '" style="z-index: 80; width:' + response[i].Width + '%; left:' + response[i].Left + 'px; top:' + response[i].Top + 'px; display: none">';
                //  console.log(characterItem);
                //  $(".female").append(characterItem);

                // Character cropped
                var characterCropped = '<img id="character' + response[i].Selection + '" class="hover-opacity" src="Images/Character' + response[i].Selection + '.png" style="z-index: 80; height: 650px; display: none; border: 1px solid #ffffff; top: 80px; left: ' + response[i].Interval + 'px">';
                console.log(characterCropped);
                $(".female").append(characterCropped);
            };
        }
    });
}
function addCharacter(item, url, apikey) {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": url,
        "method": "POST",
        "headers": {
            "content-type": "application/json",
            "x-apikey": apikey,
            "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(item)
    }

    $.ajax(settings).done(function (response) {
        console.log('Item successfully added');
        console.log(response);
    });

}
function getCharacters(itemID, url, apikey) {
    var serviceURL = url + itemID;
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": serviceURL,
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "x-apikey": apikey,
            "cache-control": "no-cache"
        }
    }

    $.ajax(settings).done(function (response) {
        console.log('Item successfully retrieved');
        console.log(response);
        /*var female1 = new Female(value, 18, 0, 0, 58, 'female', this.value);
        female1.create('Girl');*/
    });
};

//OOP classes
class Character {
    constructor(name, age, top, left) {
        this.name = name;
        this.age = age;
        this.top = top;
        this.left = left;
    };
    create() {
        //inside class character is method
        // var className = '#' + this.name
        // $(className).animate({
        //     top: this.top,
        //     left: this.left
        // }, 1000, function () {
        //     // Animation complete.
        // });
    }
    getName() {
        //console.log(this.name);
        return 'The name of the character is ' + this.name;
    }
    setName() {
        if (this.name == 'Name') {
            console.log('?')
        } else {
            this.name = getName();
            console.log(this.name);
        }
    }
    displayCharacter() {
        displayID = '#' + this.name;
        $(displayID).fadeIn(5000);
    }
};

class Female extends Character {
    //Inheritance: Female inherits Character
    //Female is subclass of Character
    constructor(name, age, top, left, gender, imageNumber, originalWidth) {
        super(name, age, top, left);
        //constructor of the super class
        this.gender = gender;
        this.image = imageNumber;

        var HTML1 = '<img id="character' + imageNumber + '" class="female" src="Images/Character' + this.image + '.png" width="' + originalWidth + '" style="height: -webkit-fill-available; left:' + this.left + 'px; top:' + this.top + 'px; object-fit: cover; object-position: top; z-index: 75; display: none">';
        $('.characters').append(HTML1);
        console.log(HTML1);

        //superclass Character, subclass Female
    }//Two methods
    pullInformation() {
        var displayInfo = '#character' + this.image + 'Identity';
        console.log(displayInfo);
        $(displayInfo).fadeIn(5000);
        $('#characterIdentity').fadeIn(5000);
        console.log("Loading the character's background information and details...");
    }
    chooseAnother() {
        console.log('Wanting to choose another character...');
    }
    confirmButton() {
        $('#confirmSelection').fadeIn(5000);
        console.log('Faded in button for confirmation');
    }
    fadeCharacter() {
        // $("#characterEE").fadeOut(5000);
        // $("#characterFF").fadeOut(5000);
        // $("#characterGG").fadeOut(5000);
        // $("#characterJJ").fadeOut(5000);
        $(".hover-opacity").fadeOut(5000);
        setTimeout(function () {
            $('.hover-opacity').remove();
        }, 5000);
        console.log('success????');
    }
};

//Prologue ending
$('#context').on('click', function () {
    deleteElements('characterB', 'characterC', 'redJadeite', 'studyFourth', 'context', 'prologue');
    $('#selection').fadeIn(3000);
    $('#selection').on('mouseover', function () {
        $("#characterEE").fadeIn(5000);
        $("#characterFF").fadeIn(5000);
        $("#characterGG").fadeIn(5000);
        $("#characterJJ").fadeIn(5000);
        $('#characterEE').on('click', function () {
            console.log('Character information...');
            var female1 = new Female('characterE', 18, 0, -150, 'female', 'E', 1195);
            //female1.create();
            female1.fadeCharacter();
            setTimeout(function () {
                female1.displayCharacter();
                female1.pullInformation();
                female1.confirmButton();
            }, 5000);
            console.log('...')
        });
    });
});

//calling the database
getCharacter(url, apikey, 2);
getCharacter(url, apikey, 3);
getCharacter(url, apikey, 4);
getCharacter(url, apikey, 5);
var destinationWent = 0;
var firstTime = 0;
var timeManage = 1;

$('#transparentBackground').fadeOut();
//$('#confirmSelection').fadeIn();
//Confirming character selection
//$("#confirmSelection").click(function () {
    $("#mapE").fadeIn(3000);
    //$(audioThird).animate({ volume: 0 }, 5000);
    setTimeout(function () { $('#characterE').fadeOut() }, 5000);
    $("#streetDestination").fadeIn(3000);
    $("#templeDestination").fadeIn(3000);
    $("#streetDestination").click(function () {
        //destinationWent = 1;
        $("#streetE").fadeIn(3000);
        //$(audioThird).remove();
        var audioFourth = new Audio("Sounds/Zhaoge.mp3");
        $(audioFourth).animate({ volume: 0 });
        audioFourth.play();
        $(audioFourth).animate({ volume: 0.35 }, 2000);
        deleteElements(undefined, undefined, undefined, undefined, 'streetDestination', 'templeDestination');
        $("#teaHouseDestination").fadeIn(3000);
        if (firstTime == 0) {
            $('#transparentBackground').fadeIn(0);
            firstTime = 1;
            setTimeout(function () {
                hover(undefined, undefined, undefined, 'backgroundInformation', undefined, 800, '1600 BC - 1046 BC<br>Shang Dynasty, Zhaoge');
                //nextLine(22, '', 'backgroundInformation', 800, 'characterTitle', '1600 BC - 1046 BC<br>Shang Dynasty, Zhaoge', 9, undefined, undefined, undefined, undefined, undefined, 1);
                nextLine(1, '', 'backgroundInformation', 800, 'characterTitle', 'Ancient historical records noted for the prosperity of the last capital of the Shang Dynasty. Bearing a long history of over three thousand years...<br>Zhaoge flourished the most under the reign of Di Xin, the King Zhou of Shang.');
                nextLine(2, '', 'backgroundInformation', 800, undefined, '', 11, undefined, undefined, undefined, undefined, undefined, 0);
            }, 5000);
        };
        $("#teaHouseDestination").click(function () {
            ;
            $("#teaHouseDestination").fadeOut(800);
            $("#storeE").fadeIn(3000);
            setTimeout(function () {
                $('#transparentBackground').fadeIn(0);
                hover('#characterI', undefined, undefined, 'backgroundInformation', 'characterTitle', 800, 'Miss, please wait for a moment, the private room is already prepared for you upstairs, I will go order some cuisines for you.', 'Maid');
                //nextLine(23, 'Maid', 'backgroundInformation', 800, 'characterTitle', 'Miss, please wait for a moment, the private room is already prepared for you upstairs, I will go order some cuisines for you.', 13, 1, 'characterI', 0, undefined, undefined, 2);
                nextLine(3, '', 'backgroundInformation', 800, 'characterTitle', 'After the maid left, you slightly stood at the end of the staircase for a little moment and looked around. You noticed two unordinary tables of<br>guests situated just underneath your normal private room.', undefined, 2, 'characterE', undefined, 23, 'Sand');
                $("#firstChoice").click(function () {
                    updateArray(1);
                    console.log("a.	(undesirable choice) You wanted to but your moral conscience tells you it is inappropriate to overhear other people’s conversations…after a short debate in your conscious mind managed to stay but not move.");
                    $('transparentBackground').on('mouseover', function () { });
                });
                $("#secondChoice").click(function () {
                    console.log("b. (desirable choice) You followed social expectations...plot progresses");
                });
            }, 3000);
        });
    });
    //Trying to code if the user could return to the big map and choose the second choice
    $("#templeDestination").click(function () {
        var audioFifth = new Audio("Sounds/Temple.mp3");
        $(audioFifth).animate({ volume: 0 });
        audioFifth.play();
        $(audioFifth).animate({ volume: 0.6 }, 2000);
        deleteElements(undefined, undefined, undefined, undefined, 'streetDestination', 'templeDestination');
        if (destinationWent == 0) {
            $("#templeDayE").fadeIn(3000);
            destination = 1;
        } else if (destination == 1) {
            $("#templeSunsetE").fadeIn(3000);
        };
    });
//});

arrWrong = [];

arrDescription = [
    { question: "Listen or not", description: "Ladies within this period of time were strictly educated to behave according to a set of social expectations, including not overhearing the business of others." },
    { question: "second question", description: "I don't know what to say next..." },
    { question: "third question", description: "Maybe anything will do..." },
    { question: "fourth question", description: "Actually one more..." },
]

var indexNumber = 0;

function updateArray(numberWrong) {

    let wrong = {
        question: arrDescription[numberWrong - 1].question,
        questionNumber: numberWrong,
        description: arrDescription[numberWrong - 1].description,
    };

    arrWrong.push(wrong);
};

$('#menuButton').click(function () {
    $('#recallBackground').fadeIn(100);
    $('#backButton').fadeIn(100);
    //updateArray(4);
    $.each(arrWrong, function (index, value) {
        $(".arrays").append(value.question + " (" + value.questionNumber + "): " + value.description + '<br>');
    });
});

$('#backButton').click(function () {
    $('#recallBackground').fadeOut(100);
    $('#backButton').fadeOut(100);
    $('.arrays').empty();
});