//Variables
var alreadyPlayed = 0;
var audioFirst = new Audio("Sounds/Melancholy.mp3");
$(audioFirst).animate({ volume: 0 });

//First time when user clicks on webpage
$('body').on('click', function () {
    if (alreadyPlayed == 0) {
        audioFirst.play();
        $(audioFirst).animate({ volume: 0.6 }, 2000);
        console.log('Successfully played');
        alreadyPlayed = 1;
        console.log(alreadyPlayed);
    };
});

//Variables
var alreadyExist = 0;
var timeControl = 0;
var timeManage = 0;
var characterName = 1;
var characterDisappear = 1;
var nextSceneControl = 1;
var count = 0;
var audioSecond = '';
var audioThird = '';
var timeCount = 0;
var numberCount = 1;
var numberCount2 = 0;
var inspection = 0;
var changeScreen = 0;
var bodyAlreadyUsed = 0;
var hoverOver = 0;
var animationControl = 0;
var chosenStory = 0;

//Arrays
arrCover = [
    { name: 'firstImage', img: 'Images/First.jpg' },
    { name: 'secondImage', img: 'Images/Second.jpg' },
    { name: 'thirdImage', img: 'Images/Third.jpg' },
    { name: 'fourthImage', img: 'Images/Fourth.jpg' },
    { name: 'fifthImage', img: 'Images/Fifth.jpg' },
];

arrTransition = [
    { name: 'Image0', img: 'Transition/Sand/0.png', id: '#Image0', id2: '' },
    { name: 'Image1', img: 'Transition/Sand/1.png', id: '#Image1', id2: '#Image0' },
    { name: 'Image2', img: 'Transition/Sand/2.png', id: '#Image2', id2: '#Image1' },
    { name: 'Image3', img: 'Transition/Sand/3.png', id: '#Image3', id2: '#Image2' },
    { name: 'Image4', img: 'Transition/Sand/4.png', id: '#Image4', id2: '#Image3' },
    { name: 'Image5', img: 'Transition/Sand/5.png', id: '#Image5', id2: '#Image4' },
    { name: 'Image6', img: 'Transition/Sand/6.png', id: '#Image6', id2: '#Image5' },
    { name: 'Image7', img: 'Transition/Sand/7.png', id: '#Image7', id2: '#Image6' },
    { name: 'Image8', img: 'Transition/Sand/8.png', id: '#Image8', id2: '#Image7' },
    { name: 'Image9', img: 'Transition/Sand/9.png', id: '#Image9', id2: '#Image8' },
    { name: 'Image10', img: 'Transition/Sand/10.png', id: '#Image10', id2: '#Image9' },
    { name: 'Image11', img: 'Transition/Sand/11.png', id: '#Image11', id2: '#Image10' },
    { name: 'Image12', img: 'Transition/Sand/12.png', id: '#Image12', id2: '#Image11' },
    { name: 'Image13', img: 'Transition/Sand/13.png', id: '#Image13', id2: '#Image12' },
    { name: 'Image14', img: 'Transition/Sand/14.png', id: '#Image14', id2: '#Image13' },
    { name: 'Image15', img: 'Transition/Sand/15.png', id: '#Image15', id2: '#Image14' },
    { name: 'Image16', img: 'Transition/Sand/16.png', id: '#Image16', id2: '#Image15' },
    { name: 'Image17', img: 'Transition/Sand/17.png', id: '#Image17', id2: '#Image16' },
    { name: 'Image18', img: 'Transition/Sand/18.png', id: '#Image18', id2: '#Image17' },
    { name: 'Image19', img: 'Transition/Sand/19.png', id: '#Image19', id2: '#Image18' },
    { name: 'Image20', img: 'Transition/Sand/20.png', id: '#Image20', id2: '#Image19' },
    { name: 'Image21', img: 'Transition/Sand/21.png', id: '#Image21', id2: '#Image20' },
    { name: 'Image22', img: 'Transition/Sand/22.png', id: '#Image22', id2: '#Image21' },
    { name: 'Image23', img: 'Transition/Sand/23.png', id: '#Image23', id2: '#Image22' },
    { name: 'Image24', img: 'Transition/Sand/24.png', id: '#Image24', id2: '#Image23' },
    { name: 'Image25', img: 'Transition/Sand/25.png', id: '#Image25', id2: '#Image24' },
    { name: 'Image26', img: 'Transition/Sand/26.png', id: '#Image26', id2: '#Image25' },
    { name: 'Image27', img: 'Transition/Sand/27.png', id: '#Image27', id2: '#Image26' },
    { name: 'Image28', img: 'Transition/Sand/28.png', id: '#Image28', id2: '#Image27' },
    { name: 'Image29', img: 'Transition/Sand/29.png', id: '#Image29', id2: '#Image28' },
    { name: 'Image30', img: 'Transition/Sand/30.png', id: '#Image30', id2: '#Image29' },
    { name: 'Image31', img: 'Transition/Sand/31.png', id: '#Image31', id2: '#Image30' },
    { name: 'Image32', img: 'Transition/Sand/32.png', id: '#Image32', id2: '#Image31' }
];

//For loop for creating the cover background
for (var i = 0; i < arrCover.length; i++) {
    var createHTML = "<img id='" + arrCover[i].name + "' img src='" + arrCover[i].img + "' style='display: none; position: absolute; width: 100%; height: 100%; top: 0px; left: 0px'></div>"
    console.log(createHTML);
    $('.coverBackground').append(createHTML);
};

//Function for transitioning between images
function callCover(wordID, secondNumberID) {
    var coverID = "#" + wordID;
    var secondID = "#" + secondNumberID;
    //console.log(coverID, secondID);
    if (alreadyExist == 1) {
        //console.log('already exist');
        $(secondID).fadeIn(6000);
    } else {
        $(coverID).fadeIn(500);
        //$(coverID).animate()
        alreadyExist = 1;
        //console.log(alreadyExist);
    };
};

//Function for calling the next line of the plot
function nextLine(trigger, name, ID, time, title, text, characterVisible, characterHidden, characterID, extraTrigger, bonusTrigger, fileName, contextBackground, hideCharacter, hide) {
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
                };
                if (hideCharacter == extraTrigger) {
                    var hideWhat = '#' + hide;
                    $(hideWhat).fadeOut(time);
                };
                //From below - specific code only triggered when the trigger is correct
                if (trigger == 9) {
                    console.log('DELETTTEEEEE!!!!');
                    console.log('The next scene is scene: ' + nextSceneControl);
                    //$('#nextScene').fadeIn(3500);
                    $('#transparentBackground').on('click', function () {
                        if (nextSceneControl == 2) {
                            setTimeout(function () {
                                secondScene(33)
                                bodyAlreadyUsed = 1;
                                console.log(bodyAlreadyUsed);
                            }, 200);
                            $('#transparentBackground').fadeOut(0);
                        };
                    });
                    nextSceneControl = nextSceneControl + 1;
                } else if (trigger == 12) {
                    if (inspection == 0) {
                        $('#desk').fadeIn(1600);
                        $('#inspecting').fadeIn(1600);
                        $('#redJadeite').fadeIn(1600);
                        console.log('The time count is: ' + time);
                        inspection = 1;
                        console.log(inspection);
                    };
                } else if (trigger == 13) {
                    $('#transparentBackground').fadeOut(0);
                    $('#inspecting').animate({ left: '250px', bottom: '80px' }, 1600);
                    console.log('Successful animation');
                    setTimeout(function () {
                        $('#transparentBackground').fadeIn(0);
                    }, 1600);
                    console.log("1: Haven't finished animation yet");
                } else if (trigger == 14) {
                    $('#transparentBackground').fadeOut(0);
                    $('#inspecting').animate({ width: '75%', bottom: '20px', left: '237px' }, 2000);
                    $('#redJadeite').animate({ width: '20%' }, 2000);
                    setTimeout(function () {
                        $('#transparentBackground').fadeIn(0);
                    }, 2000);
                    console.log("2: Haven't finished animation yet");
                } else if (trigger == 15) {
                    $('#desk').fadeOut(800);
                    $('#inspecting').fadeOut(800);
                    $('#redJadeite').fadeOut(800);
                    setTimeout(function () { deleteElements('desk'); }, 800);
                    console.log("3: Haven't finished animation yet");
                } else if (trigger == 18) {
                    $('#characterC').fadeOut(2400);
                    inspection = 1;
                } else if (trigger == 19) {
                    hoverOver = 2;
                    $('#backUp').fadeIn(0);
                    if (inspection == 1) {
                        $('#characterA').fadeOut(800);
                        $('#characterName').fadeOut(800);
                        $('#textBox').fadeOut(800);
                        $('#backgroundContext').fadeOut(800);
                        inspection = 2;
                        console.log(inspection);
                        if (inspection == 2) {
                            $(audioSecond).animate({ volume: 0 }, 5000);
                            for (var i = 0; i < arrStudy.length; i++) {
                                var insertHTML = "<img id='" + arrStudy[i].name + "' img src='" + arrStudy[i].img + "' style='display: none; position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; z-index: 50'></div>"
                                console.log(insertHTML);
                                $('.time').append(insertHTML);
                            };
                            setTimeout(function () { callCover('study', 'studySecond') }, 1000);
                            setTimeout(function () {
                                callCover('studySecond', 'studyThird')
                                $(audioSecond).remove();
                                audioThird = new Audio("Sounds/Contemplating.mp3");
                                $(audioThird).animate({ volume: 0 });
                                audioThird.play();
                                $(audioThird).animate({ volume: 0.55 }, 2000)
                            }, 6500);
                            setTimeout(function () {
                                inspection = 3;
                                callCover('studyThird', 'studyFourth')
                                setTimeout(function () {
                                    hover('#inspecting', '#redJadeite', '#characterA', 'backgroundContext', 'characterName', 1600, 'A red jadeite...', 'You');
                                    setTimeout(function () { $('#backUp').fadeOut(0) }, 1600);
                                }, 5000);
                            }, 12000);
                            $('#inspecting').css({ bottom: '90px' });
                            $('#redJadeite').css({ top: '180px', width: '18%' });
                        };
                    };
                } else if (trigger == 20) {
                    hoverOver = 5;
                    setTimeout(function () {
                        deleteElements(undefined, undefined, undefined, undefined, "characterA", "textBox")
                        deleteElements('study', 'studySecond', 'studyThird', 'archeology', "inspecting", "redJadeite");
                    }, 200);
                    setTimeout(function () {
                        $('#context').fadeIn(2000);
                        $('#prologue').fadeIn(2000);
                        $('#transparentBackground').fadeOut(2000);
                    }, 1200);
                } else if (trigger == 22) {
                    if (chosenStory == 1) {
                        deleteElements(undefined, undefined, undefined, undefined, "backgroundInformation", "textBox");
                        $('#transparentBackground').fadeOut(0);
                        setTimeout(function () {
                            $('#teaHouseDestination').fadeIn(time * 2);
                        }, 1000);
                    };
                }
                else if (trigger == 23) {
                    if (chosenStory == 1) {
                        $('#characterE').css({ 'z-index': '120', left: '55px' })
                        $('#characterI').fadeOut(2400);
                        $('#characterE').fadeIn(3000);
                        $('#firstChoice').fadeIn(3600);
                        $('#secondChoice').fadeIn(3600);
                        $('#transparentBackground').fadeOut(0);
                        $(audioFourth).animate({ volume: 0 }, 12500);
                    } else if (chosenStory == 2) {
                        $('#transparentBackground').fadeOut(0);
                        $('#textBox').fadeOut(time);
                        setTimeout(function () {
                            $('#enterHall').fadeIn(time * 2);
                        }, 1000);
                    } else if (chosenStory == 3) {
                        $('#transparentBackground').fadeOut(0);
                        $('#textBox').fadeOut(time);
                        setTimeout(function () {
                            $('#enterRestaurant').fadeIn(time * 2);
                        }, 1000);
                    };
                } else if (trigger == 24) {
                    if (chosenStory == 1) {
                        if (numberChoices == 0) {
                            $('#characterE').fadeOut(1600);
                            $('#textBox').fadeOut(1600);
                            setTimeout(function () {
                                $(audioFile).animate({ volume: 0 });
                                console.log('Minimised volume');
                            }, 6000);
                        }
                    } else if (chosenStory == 3) {
                        $('#textBox').fadeOut(1200);
                        setTimeout(function () {
                            $('#doorG').fadeIn(3000);
                            $('#transparentBackground').fadeOut(0);
                            setTimeout(function () {
                                hover('#characterQ', '#textBox', undefined, 'backgroundInformation', 'characterTitle', 1200, '(Escapes from the grasp of the maid) Why is it when male guests enter a tavern, it was accepted and when a female does the same, they are considered amoral?', 'Noble Lady');
                                setTimeout(function () { $('#transparentBackground').fadeIn(0) }, 1200);
                            }, 3000);
                        }, 1300);
                    };
                } else if (trigger == 25) {
                    if (chosenStory == 1) {
                        if (numberChoices == 0) {
                            setTimeout(function () { $(audioFile).animate({ volume: 0 }) }, 800);
                        };
                    } else if (chosenStory == 3) {
                        //audioGlobal('audioTwelveth', 'Sounds/Comparison.mp3', 0.55);
                        audioTwelveth = new Audio('Sounds/Comparison.mp3');
                        $(audioTwelveth).animate({ volume: 0 }, 0);
                        audioTwelveth.play();
                        $(audioTwelveth).animate({ volume: 0.55 }, 3000);
                    };
                } else if (trigger == 26) {
                    if (chosenStory == 1) {
                        if (numberChoices == 0) {
                            $('#textBox').fadeOut(time);
                            $('#transparentBackground').fadeOut(0);
                            guestConversation(27)
                        };
                    };
                } else if (trigger == 28) {
                    if (chosenStory == 1) {
                        if (numberChoices == 0) {
                            $('#transparentBackground').fadeOut(0);
                            $('#textBox').fadeOut(time);
                            $('#secondFloorEE').on('mouseover', function () {
                                setTimeout(function () {
                                    $('#privateRoom').fadeIn(3000);
                                    setTimeout(function () {
                                        hover(undefined, '#characterI', '#textBox', 'backgroundInformation', 'characterTitle', 3000, '(Puts the tea aside) Miss, you sounded worrying...are you upset by the comments of the guests downstairs?', 'Maid');
                                        setTimeout(function () { $('#transparentBackground').fadeIn(0) }, 3000);
                                    }, 3000);
                                }, 1600);
                            });
                        };
                    } else if (chosenStory == 2) {
                        $('#transparentBackground').fadeOut(0);
                        $('#textBox').fadeOut(time);
                        setTimeout(function () {
                            $('#confirmNext').fadeIn(time * 2);
                        }, 1000);
                    };
                } else if (trigger == 30) {
                    if (chosenStory == 2) {
                        //audioGlobal('audioEighth', 'Sounds/Food.mp3', 0.35);
                        $(audioEighth).animate({ volume: 0 }, 0);
                        audioEighth.play();
                        $(audioEighth).animate({ volume: 0.35 }, 3000);
                    };
                } else if (trigger == 31) {
                    if (chosenStory == 3) {
                        $('#transparentBackground').fadeOut(0);
                        $('#textBox').fadeOut(time);
                        $('#doorG').fadeOut(4000);
                        setTimeout(function () {
                            hover('#characterG', '#textBox', undefined, 'backgroundInformation', undefined, 1200, "You didn't keep on listening, turned and went back into the room.");
                            setTimeout(function () { $('#transparentBackground').fadeIn(0) }, 1200);
                        }, 5000);
                    };
                } else if (trigger == 32) {
                    if (chosenStory == 2) {
                        $('#transparentBackground').fadeOut(0);
                        $('#thirdChoice').fadeIn(800);
                        $('#fourthChoice').fadeIn(800);
                    } else if (chosenStory == 3) {
                        $('#transparentBackground').fadeOut(0);
                        $('#textBox').fadeOut(time);
                        $('#windowG').fadeOut(3000);
                        setTimeout(function () {
                            hover('#characterR', '#textBox', undefined, 'backgroundInformation', 'characterTitle', 1200, "(Looks at you) It seems that something interesting is happening down there, isn't it?", 'Male Guest One');
                            setTimeout(function () { $('#transparentBackground').fadeIn(0) }, 1200);
                        }, 4000);
                    };
                } else if (trigger == 34) {
                    if (chosenStory == 1) {
                        if (numberChoices == 1) {
                            $('#textBox').fadeOut(time);
                            $('#roomE').fadeOut(time);
                            $('#transparentBackground').fadeOut(0);
                        };
                    } else if (chosenStory == 2) {
                        setTimeout(function () {
                            $(audioFile).animate({ volume: 0 });
                            console.log('Minimised volume');
                        }, 6000);
                        $('#transparentBackground').fadeOut(0);
                        $('#textBox').fadeOut(time);
                        $('#confirmNext').fadeIn(time * 2);
                    };
                } else if (trigger == 36) {
                    if (chosenStory == 1 && numberChoices == 0) {
                        $('#textBox').fadeOut(time);
                        $(audioSixth).animate({ volume: 0 }, 3500);
                        setTimeout(function () { conclusion() }, (time + 200));
                    } else if (chosenStory == 2) {
                        $('#confirmNext').css({ top: '520px', right: '80px' }, 0);
                        $('#transparentBackground').fadeOut(0);
                        $('#textBox').fadeOut(time);
                        $('#confirmNext').fadeIn(time * 2);
                        $(audioEighth).animate({ volume: 0 }, (7000));
                    };
                } else if (trigger == 38) {
                    if (chosenStory == 1 && numberChoices == 1) {
                        $('#textBox').fadeOut(time);
                        $(audioSixth).animate({ volume: 0 }, 3500);
                        setTimeout(function () { conclusion() }, (time + 200));
                    };
                } else if (trigger == 39) {
                    if (chosenStory == 3) {
                        $('#transparentBackground').fadeOut(0);
                        $('#fifthChoice').fadeIn(800);
                        $('#sixthChoice').fadeIn(800);
                    };
                } else if (trigger == 42) {
                    if (chosenStory == 2) {
                        $('#confirmLast').css({ top: '490px', right: '1310px' }, 0);
                        $('#transparentBackground').fadeOut(0);
                        $('#textBox').fadeOut(time);
                        $('#confirmLast').fadeIn(time * 2);
                    } else if (chosenStory == 3) {
                        $('#textBox').fadeOut(time);
                        $(audioTwelveth).animate({ volume: 0 }, 3500);
                        setTimeout(function () { conclusion() }, (time + 200));
                    };
                } else if (trigger == 51) {
                    if (chosenStory == 2) {
                        $('#textBox').fadeOut(time);
                        $(audioNineth).animate({ volume: 0 }, 3500);
                        setTimeout(function () { conclusion() }, (time + 200));
                    };
                };
            });
        };
        //For the text box element to appear according to instructions - though not used often because most of the time, hover function works better
        if (contextBackground == 1) {
            $('#textBox').fadeIn(time);
        } else if (contextBackground == 2) {
            setTimeout(function () {
                $('#textBox').fadeIn(3000);
            });
        }
    });
};

//Transition to the next scene - functions are interlinked
function secondScene(initiateNumber) {
    $('#characterA').fadeOut();
    $('#textBox').fadeOut();
    $('#characterB').fadeOut();
    $('#archeology').fadeOut();
    $('#backgroundContext').fadeOut();
    $('#characterName').fadeOut();
    for (var i = 0; i < arrTransition.length; i++) {
        var createHTML = "<img id='" + arrTransition[i].name + "' img src='" + arrTransition[i].img + "' style='display: none; position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; z-index: 20'></div>"
        console.log(createHTML);
        $('.transitions').append(createHTML);
        count = count + 1;
        console.log(count);
    };
    if (count == initiateNumber) {
        //timeSwitch(70, 70)
        transitionSand1(70);
    };
};

//Does not function as expected...
function timeSwitch(time, timePlus) {
    var HTML = "<img id='study' img src='Images/Study.jpg' style='position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; z-index: 15'></div>"
    //Remember to append the html to the transition class - have not added yet
    console.log(HTML);
    console.log(arrTransition[1].id, arrTransition[1].id2);
    for (var i = 0; i < arrTransition.length; i++) {
        if (i == 0) {
            setTimeout(function () {
                $(arrTransition[0].id).show();
            }, time);
        } else if (i > 0) {
            setTimeout(function () {
                $(arrTransition[numberCount].id).show();
                numberCount = numberCount + 1;
                $(arrTransition[numberCount2].id2).hide();
                numberCount2 = numberCount2 + 1;
                timeCount = time
                time = time + timePlus
                console.log(numberCount, numberCount2);
                console.log('time for next setTimeout: ' + time);
            }, timeCount);
        };
    };
};

//Below functions with the name "transitionSand" + a number are hard coded code that are split it functions so not everything is compacted together
function transitionSand1(time) {
    setTimeout(function () {
        $('#Image0').show();
        var HTML = "<img id='study' img src='Images/Study.jpg' style='position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; z-index: 15'></div>"
        console.log(HTML);
        setTimeout(function () {
            $('#Image1').show();
            $('#Image0').hide();
            $('.normalBackground').append(HTML);
            setTimeout(function () {
                $('#Image2').show();
                $('#Image1').hide();
                setTimeout(function () {
                    $('#Image3').show();
                    $('#Image2').hide();
                    setTimeout(function () {
                        $('#Image4').show();
                        $('#Image3').hide();
                        transitionSand2(70);
                    }, time);
                }, time);
            }, time);
        }, time);
    }, 200);
};

function transitionSand2(time) {
    setTimeout(function () {
        $('#Image5').show();
        $('#Image4').hide();
        setTimeout(function () {
            $('#Image6').show();
            $('#Image5').hide();
            setTimeout(function () {
                $('#Image7').show();
                $('#Image6').hide();
                setTimeout(function () {
                    $('#Image8').show();
                    $('#Image7').hide();
                    setTimeout(function () {
                        $('#Image9').show();
                        $('#Image8').hide();
                        transitionSand3(70);
                    }, time);
                }, time);
            }, time);
        }, time);
    }, time);
};

function transitionSand3(time) {
    setTimeout(function () {
        $('#Image10').show();
        $('#Image9').hide();
        setTimeout(function () {
            $('#Image11').show();
            $('#Image10').hide();
            setTimeout(function () {
                $('#Image12').show();
                $('#Image11').hide();
                setTimeout(function () {
                    $('#Image13').show();
                    $('#Image12').hide();
                    setTimeout(function () {
                        $('#Image14').show();
                        $('#Image13').hide();
                        transitionSand4(70);
                    }, time);
                }, time);
            }, time);
        }, time);
    }, time);
};

function transitionSand4(time) {
    setTimeout(function () {
        $('#Image15').show();
        $('#Image14').hide();
        setTimeout(function () {
            $('#Image16').show();
            $('#Image15').hide();
            setTimeout(function () {
                $('#Image17').show();
                $('#Image16').hide();
                setTimeout(function () {
                    $('#Image18').show();
                    $('#Image17').hide();
                    setTimeout(function () {
                        $('#Image19').show();
                        $('#Image18').hide();
                        transitionSand5(70);
                    }, time);
                }, time);
            }, time);
        }, time);
    }, time);
};

function transitionSand5(time) {
    setTimeout(function () {
        $('#Image20').show();
        $('#Image19').hide();
        setTimeout(function () {
            $('#Image21').show();
            $('#Image20').hide();
            setTimeout(function () {
                $('#Image22').show();
                $('#Image21').hide();
                setTimeout(function () {
                    $('#Image23').show();
                    $('#Image22').hide();
                    setTimeout(function () {
                        $('#Image24').show();
                        $('#Image23').hide();
                        transitionSand6(70);
                    }, time);
                }, time);
            }, time);
        }, time);
    }, time);
};

function transitionSand6(time) {
    setTimeout(function () {
        $('#Image25').show();
        $('#Image24').hide();
        setTimeout(function () {
            $('#Image26').show();
            $('#Image25').hide();
            setTimeout(function () {
                $('#Image27').show();
                $('#Image26').hide();
                setTimeout(function () {
                    $('#Image28').show();
                    $('#Image27').hide();
                    setTimeout(function () {
                        $('#Image29').show();
                        $('#Image28').hide();
                        setTimeout(function () {
                            $('#Image30').show();
                            $('#Image29').hide();
                            setTimeout(function () {
                                $('#Image31').show();
                                $('#Image30').hide();
                                setTimeout(function () {
                                    $('#Image32').show();
                                    $('#Image31').hide();
                                    for (var i = 0; i < arrTransition.length; i++) {
                                        $(arrTransition[i].id).remove();
                                        if (i >= 32) {
                                            nextSceneControl = 3;
                                            $('.transitions').remove();
                                        };
                                    };
                                }, time);
                            }, time);
                        }, time);
                    }, time);
                }, time);
            }, time);
        }, time);
    }, time);
};

//Deleting elements
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

//alert('To progress onwards, click on the area around the text.');
//Calling for transitions
callCover('firstImage');
(callCover('firstImage', 'secondImage'));
setTimeout(function () { callCover('secondImage', 'thirdImage') }, 5500);
setTimeout(function () { callCover('thirdImage', 'fourthImage') }, 11000);
setTimeout(function () {
    callCover('fourthImage', 'fifthImage');
    bodyAlreadyUsed = 1;
}, 16500);
setTimeout(function () { callCover(0, 'bambooSlip') }, 1500);
setTimeout(function () { callCover(0, 'introduction') }, 3000);
if (changeScreen == 0) {
    $('#transparentBackground').on("click", function () {
        setTimeout(function () {
            if (alreadyPlayed == 1) {
                console.log("Waiting to change");
                if (timeControl == 0) {
                    $('#introduction').fadeOut(800);
                    setTimeout(function () {
                        $('#introduction').replaceWith('<text id="introduction">...and with a great interest, I seeked<br>for the answer...</text>');
                        $('#introduction').fadeIn(2000);
                    }, 800);
                    timeControl = 1;
                } else if (timeControl == 1) {
                    $('#introduction').fadeOut(800);
                    setTimeout(function () {
                        $('#introduction').replaceWith('<text id="introduction">...it began back in the spring of 1974<br>...a spring when I just became<br>an archaeologist...</text>');
                        $('#introduction').fadeIn(2000);
                        $('#transparentBackground').fadeOut(2000);
                    }, 800);
                    $('#fifthImage').on("click", function () {
                        if (bodyAlreadyUsed == 1) {
                            deleteElements('firstImage', 'secondImage', 'thirdImage', 'fourthImage', 'introduction', 'bambooSlip');
                            $("#startGame").fadeIn(7000);
                            $(audioFirst).animate({ volume: 0 }, 8000);
                            alreadyPlayed = 1;
                        } else {
                            console.log('Wait for animation to complete');
                        }
                    });
                    timeControl = 2;
                } else {
                    console.log('Already changed');
                };
            };
        }, 2000);
    });
};

//Starting the game - plot line follows
$('#startGame').click(function () {
    //Add audio here
    $(audioFirst).animate({ volume: 0 }, 400);
    setTimeout(function () { $(audioFirst).remove() }, 500);
    audioSecond = new Audio("Sounds/Discovery.mp3");
    audioSecond.play();
    $(audioSecond).animate({ volume: 0.2 }, 1000);
    deleteElements('fifthImage', 'startGame', 'bambooSlip', 'introduction');
    $('#transparentBackground').fadeIn(0);
    $('#archeology').fadeIn(1400);
    setTimeout(function () { $('#textBox').fadeIn(2000) }, 1800);
    setTimeout(function () {
        $('#characterA').fadeIn(1400);
        $('#backgroundContext').fadeIn(2000);
        timeManage = 1;
    }, 2000);
    nextLine(1, 0, 'backgroundContext', 800, 'characterName', 'Within a short period of time, the authorities were notified and soon came the government order of dispatching<br>official archaeologists to the site.', 0);
    nextLine(2, 'You', 'backgroundContext', 800, 'characterName', 'I came from an archaeological family that traces its ancestry back to the Song dynasty. Hundreds of years allowed<br>our skills to mature further...so even if I just recently graduated, I was still notified as a member of this event.', 1);
    nextLine(3, 'You', 'backgroundContext', 800, 'characterName', 'Across the centuries, occasional reports from this region have mentioned pieces of terracotta figures and fragments<br> of Qin necropolis...many were prompted to investigate this place...', 2);
    nextLine(4, 'You', 'backgroundContext', 800, 'characterName', 'It was not along ago, perhaps late-April, when archaeologist Zhao Kang-Min first recognised the significance of<br>the shattered pieces and successfully reconstructed the soldiers.', 3);
    nextLine(5, '', 'backgroundContext', 800, 'characterName', 'Many things happened during this period, of which the Cultural Revolution was one of the most renowned. Zhao feared the<br>reportage of his discovery would lead to the destruction of the warriors and he rejected for publicisation.', 2, 1);
    nextLine(6, 0, 'backgroundContext', 800, 'characterName', 'The news eventually reached the top of the Chinese leadership but instead of destruction, a formal excavation<br>was organised.', 0, 1);
    nextLine(7, 'You', 'backgroundContext', 800, 'characterName', 'Between the time of our arrival to the excavation site, small and scattered discoveries of warriors were continuously<br>unearthed...we are certain that behind these findings, something extremely important would be uncovered.', 4);
    nextLine(8, 'You', 'backgroundContext', 800, 'characterName', 'It might be about the past dynasties or even Emperor Qin himself...and it will be a significant milestone within our<br>history...', 5);
    setTimeout(function () { nextLine(9, 'Assistant', 'backgroundContext', 800, 'characterName', 'Lady...the governor is seeking for you.', 6, 3, 'characterB', 0, 9, 'Sand'), 2400 });
});

//Function for automatic animation of the storyline - simplifies difficulties in user accessiblity
function hover(zero, one, two, three, four, time, text, text1) {
    var threeID = '#' + three;
    var fourID = '#' + four;
    $('#textBox').fadeIn(time);
    $(zero).fadeIn(time);
    $(one).fadeIn(time);
    $(two).fadeIn(time);
    $(threeID).replaceWith('<text id=' + three + '>' + text + '</text>')
    $(threeID).fadeIn(time);
    $(fourID).replaceWith('<text id=' + four + '>' + text1 + '</text>')
    $(fourID).fadeIn(time);
};

//Must click to initiate
//Separating code into two sections - study scene with governor here
$('.normalBackground').on('mouseover', function () {
    //if(changeScreen == 0){
    console.log('Clicked on study');
    $('#transparentBackground').fadeIn(0);
    if (hoverOver == 0) {
        hoverOver = 1;
        hover('#characterA', '#characterC', undefined, 'backgroundContext', 'characterName', 800, '...latest reports mentioned the appearance of a red jadeite lying absurdly at a corner of the temporary excavation site.<br>The discoverer was an experienced antique appraiser who asserts for the jadeite not belonging to any current dynasties', 'Governor');
        nextLine(10, 'Governor', 'backgroundContext', 800, 'characterName', 'yet he affirms for its invaluableness.', 6);
        nextLine(11, 'Governor', 'backgroundContext', 800, 'characterName', 'You belong to a family of one of the oldest lines for archaeology. What is your speak on this matter.', 7, 0, '', 11);
        //add transition to desk
        nextLine(12, 'You', 'backgroundContext', 800, 'characterName', 'In ancient times, the burial possessions of nobles consists of more or less, at least one jadeite.', 5, 5);
        nextLine(13, 'You', 'backgroundContext', 800, 'characterName', 'Most were emerald and some were yellow but red...only those of extreme high status would have the opportunity to acquire.', 5);
        nextLine(14, 'You', 'backgroundContext', 800, 'characterName', "And this...not only differs to the defective jadeites within the markets but also renders itself distinctive<br>from the high-quality ones excavated before.", 5);
        nextLine(15, 'You', 'backgroundContext', 800, 'characterName', '...please guarantee me the permission of observing it at anytime.', 5);
        nextLine(16, 'Governor', 'backgroundContext', 800, 'characterName', 'Lady, I trust you merely because you are an expert dispatched by the government. If anything destructive happens to<br>this jadeite, I hope you understand the consequences.', 7);
        nextLine(17, 'You', 'backgroundContext', 800, 'characterName', 'Yes, Governor.', 9);
        nextLine(18, 'Governor', 'backgroundContext', 800, 'characterName', 'You will have the ability to observe it anytime you want to, but only in this room.', 9, 4, '', 1, 18, 'Sand');
        nextLine(19);
        //$('#backUp').hover(function () {
        nextLine(20, '', 'backgroundContext', 800, 'characterName', '', 1);
        //});
    };
});

//Array
var arrStudy = [
    { name: 'studySecond', img: 'Images/Study-Second.jpg' },
    { name: 'studyThird', img: 'Images/Study-Third.jpg' },
    { name: 'studyFourth', img: 'Images/Study-Fourth.jpg' },
];

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
                //Could be used for creating the character without using the images cropped - though OOP is the first preference for sophistication and variation of code

                //  var characterItem = '<img id="character' + response[i].Letter + '" src="' + response[i].ImageReference + '" width="' + response[i].OriginalWidth + '" style="z-index: 80; width:' + response[i].Width + '%; left:' + response[i].Left + 'px; top:' + response[i].Top + 'px; display: none">';
                //  console.log(characterItem);
                //  $(".female").append(characterItem);

                // Character cropped
                var characterCropped = '<img id="character' + response[i].Selection + '" class="hover-opacity" src="Images/Character' + response[i].Selection + '.png" style="z-index: 80; height: 650px; display: none; border: 1px solid #ffffff; top: 80px; left: ' + response[i].Interval + 'px">';
                console.log(characterCropped);
                $(".female").append(characterCropped);
            };
        };
    });
};

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
};

// function getCharacters(itemID, url, apikey) {
//     var serviceURL = url + itemID;
//     var settings = {
//         "async": true,
//         "crossDomain": true,
//         "url": serviceURL,
//         "method": "GET",
//         "headers": {
//             "content-type": "application/json",
//             "x-apikey": apikey,
//             "cache-control": "no-cache"
//         }
//     };

//     $.ajax(settings).done(function (response) {
//         console.log('Item successfully retrieved');
//         console.log(response);
//     });
// };

var displayID1 = '';
var url1 = 'https://mmou1226-b813.restdb.io/rest/userunderstanding';
/* --- Functions --- */
function addUnderstanding(item, url, apikey) {
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
    }//Four methods
    pullInformation() {
        var displayInfo = '#character' + this.image + 'Identity';
        var displayInfo1 = '#characterIdentity' + this.image;
        console.log(displayInfo);
        $(displayInfo).fadeIn(5000);
        $(displayInfo1).fadeIn(5000);
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
            console.log('Character information: E');
            var female1 = new Female('characterE', 15, 0, -150, 'female', 'E', 1195);
            creatingCharacter(female1);
            chosenStory = 1;
            console.log('Chosen story: ' + chosenStory);
        });
        $('#characterFF').on('click', function () {
            console.log('Character information: F');
            var female2 = new Female('characterF', 17, 0, 650, 'female', 'F', 700);
            creatingCharacter(female2);
            console.log(creatingCharacter(female2));
            chosenStory = 2;
            console.log('Chosen story: ' + chosenStory);
            $('#confirmSelection').css({ right: '730px' });
        });
        $('#characterGG').on('click', function () {
            console.log('Character information: G');
            var female3 = new Female('characterG', 16, 0, 33, 'female', 'G', 800);
            creatingCharacter(female3);
            chosenStory = 3;
            console.log('Chosen story: ' + chosenStory);
        });
        $('#characterJJ').on('click', function () {
            console.log('Character information: J');
            var female4 = new Female('characterJ', 18, 0, 713, 'female', 'J', 650);
            creatingCharacter(female4);
            chosenStory = 4;
            console.log('Chosen story: ' + chosenStory);
            $('#confirmSelection').css({ right: '730px' });
        });
    });
});

//Creating character - selection page
function creatingCharacter(female) {
    female.fadeCharacter();
    setTimeout(function () {
        female.displayCharacter();
        female.pullInformation();
        female.confirmButton();
    }, 5000);
    console.log('... ' + female + ' ...');
};

//Calling the database
getCharacter(url, apikey, 2);
getCharacter(url, apikey, 3);
getCharacter(url, apikey, 4);
getCharacter(url, apikey, 5);
var destinationWent = 0;
var firstTime = 0;
var yChoice = '';
var audioFourth = new Audio("Sounds/Zhaoge.mp3");
var audioSixth = '';
var audioSeventh = new Audio("Sounds/Exploring.mp3");
var audioEighth = new Audio("Sounds/Food.mp3");
var audioNineth = '';
var audioTenth = new Audio("Sounds/Changan.mp3");
var audioEleventh = '';
var audioTwelveth = '';
var sameButton = 0;

//Creating audio files that does not need to be in a global domain
function audioGlobal(ID, file, control) {
    ID = new Audio(file);
    $(ID).animate({ volume: 0 }, 0);
    ID.play();
    $(ID).animate({ volume: control }, 3000);
};

//Confirming character selection
$("#confirmSelection").click(function () {
    //First character
    if (chosenStory == 1) {
        $("#mapE").fadeIn(3000);
        $(audioThird).animate({ volume: 0 }, 5000);
        setTimeout(function () { $('#characterE').fadeOut() }, 5000);
        $("#streetDestination").fadeIn(3000);
        //Excess storyline - come back if there is time
        //$("#templeDestination").fadeIn(3000);
        $("#streetDestination").click(function () {
            destinationWent = 1;
            $("#streetE").fadeIn(3000);
            $(audioThird).remove();
            $(audioFourth).animate({ volume: 0 });
            audioFourth.play();
            $(audioFourth).animate({ volume: 0.35 }, 2000);
            deleteElements(undefined, undefined, undefined, undefined, 'streetDestination', 'templeDestination');
            if (firstTime == 0) {
                $('#transparentBackground').fadeIn(0);
                firstTime = 1;
                setTimeout(function () {
                    hover(undefined, undefined, undefined, 'backgroundInformation', undefined, 800, '1600 BCE - 1046 BCE<br>Shang Dynasty, Zhaoge');
                    nextLine(21, '', 'backgroundInformation', 800, 'characterTitle', 'Ancient historical records noted for the prosperity of the last capital of the Shang Dynasty. Bearing a long history of over three thousand years...<br>Zhaoge flourished the most under the reign of Di Xin, the King Zhou of Shang.');
                    nextLine(22, '', 'backgroundInformation', 800, undefined, '', 11, undefined, undefined, undefined, undefined, undefined, 0);
                }, 5000);
            };
            $("#teaHouseDestination").click(function () {
                $("#teaHouseDestination").fadeOut(800);
                $("#storeEE").fadeIn(3000);
                setTimeout(function () {
                    $('#transparentBackground').fadeIn(0);
                    hover('#characterI', undefined, undefined, 'backgroundInformation', 'characterTitle', 800, 'Miss, please wait for a moment. The private room upstairs is ready for use at any time. I will just tell the manager of any dietetic restraints.', 'Maid');
                    nextLine(23, '', 'backgroundInformation', 800, 'characterTitle', 'After the maid left, you stood quietly at the foot of the stairs and paused. Looking around, you noticed that there were two different tables<br>of guests located just under your private room.', undefined, 2, 'characterE', undefined, 23, 'Sand');
                    $("#firstChoice").click(function () {
                        numberChoices = 1;
                        $('#transparentBackground').fadeIn(0);
                        updateArray(1);
                        if (hoverOver == 5) {
                            hoverOver = 6;
                            deleteElements(undefined, undefined, undefined, undefined, 'firstChoice', 'secondChoice');
                            hover(undefined, undefined, undefined, 'backgroundInformation', undefined, 800, "You wanted to stay there, but your conscience tells you that a lady from an eminent family shouldn’t eavesdrop on others' conversations...after<br>a short debate within your mind, you stood still.");
                            setTimeout(function () { yChoice = 0 }, 800);
                            if (yChoice == 0) {
                                $('#transparentBackground').on('click', function () {
                                    if (yChoice == 0) {
                                        setTimeout(function () {
                                            //audioGlobal('audioSixth', 'Sounds/Listening.mp3', 0.35);
                                            audioSixth = new Audio('Sounds/Listening.mp3');
                                            $(audioSixth).animate({ volume: 0 }, 0);
                                            audioSixth.play();
                                            $(audioSixth).animate({ volume: 0.35 }, 3000);
                                        }, 400);
                                        yChoice = 1;
                                        guestConversation(24);
                                    };
                                });
                            };
                        };
                    });
                    $("#secondChoice").click(function () {
                        setTimeout(function () {
                            //audioGlobal('audioSixth', 'Sounds/Listening.mp3', 0.35);
                            audioSixth = new Audio('Sounds/Listening.mp3');
                            $(audioSixth).animate({ volume: 0 }, 0);
                            audioSixth.play();
                            $(audioSixth).animate({ volume: 0.35 }, 3000);
                        }, 3000);
                        $('#transparentBackground').fadeIn(0);
                        yChoice = 2;
                        if (hoverOver == 5) {
                            deleteElements(undefined, undefined, undefined, undefined, 'firstChoice', 'secondChoice');
                            hover(undefined, undefined, undefined, 'backgroundInformation', undefined, 800, "You gently lowered your eyes and walked up the stairs towards the second floor.");
                            console.log('Activated bgm');
                            nextLine(24, '', 'backgroundInformation', 1600, undefined, '', undefined, 2, undefined, undefined, 24, 'Walking');
                            nextLine(25, '', 'backgroundInformation', 1600, 'characterTitle', "When you passed by, you seemed to hear them talking about you. But the next moment, it seemed as if they didn't. Though it doesn't really matter anymore.<br>You continued walking up without any pause.", undefined, undefined, undefined, undefined, undefined, undefined, 1);
                            nextLine(26, '', 'backgroundInformation', 800, 'characterTitle', '');
                            hoverOver = 6;
                        };
                    });
                }, 3000);
            });
        });
        //Trying to code if the user could return to the big map and choose the second choice - not finished
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
            $('#enterTemple').fadeIn(3000);
            $('#enterTemple').click(function () {
            });
        });
        //Second character
    } else if (chosenStory == 2) {
        $("#mapF").fadeIn(3000);
        $(audioThird).animate({ volume: 0 }, 5000);
        setTimeout(function () { $('#characterF').fadeOut() }, 5000);
        $("#entranceDestination").fadeIn(3000);
        $("#entranceDestination").click(function () {
            $('#gateF').fadeIn(3000);
            $('#entranceDestination').fadeOut(800);
            setTimeout(function () {
                $(audioSeventh).animate({ volume: 0 }, 0);
                audioSeventh.play();
                $(audioSeventh).animate({ volume: 0.4 }, 3000);
            }, 200);
            setTimeout(function () {
                $('#transparentBackground').fadeIn(0);
                hover(undefined, undefined, undefined, 'backgroundInformation', undefined, 800, '618 CE - 907 CE<br>Tang Dynasty, Luoyang');
                nextLine(21, '', 'backgroundInformation', 800, 'characterTitle', 'Following the establishment of Tang Dynasty, as one of the two imperial capitals, Luoyang entered the peak period in the history of capital development.', 1);
                nextLine(22, '', 'backgroundInformation', 800, 'characterTitle', "Under the reign of Wu Zetian - China's only empress - Luoyang was named as the 'Capital of Gods'. And the flourshinment allowed Luoyang to become<br>the centre of the Oriental world.", 1);
                nextLine(23, '', 'backgroundInformation', 800, 'characterTitle', '', 1);
            }, 3000);
            $('#enterHall').click(function () {
                $('#meetingRoomF').fadeIn(3000);
                $('#enterHall').fadeOut(800);
                $('#characterF').css({ 'z-index': '120', left: '300px' });
                //Appears too early, code to appear after background appears completely
                setTimeout(function () {
                    hover(undefined, '#textBox', undefined, 'backgroundInformation', undefined, 3000, 'A row of young girls stood in line near the walls, waiting to welcome the guests for this annual forum.');
                    setTimeout(function () { $('#transparentBackground').fadeIn(0) }, 800);
                    nextLine(24, 'Young Girl', 'backgroundInformation', 800, 'characterTitle', '(Puts on a smile after she sees you approaching) First time seeing you here, you are Miss...', 1, undefined, 'characterN', 0);
                    nextLine(25, 'You', 'backgroundInformation', 800, 'characterTitle', 'Miss Gu is fine.', 1, undefined, 'characterF', 0, undefined, undefined, undefined, 0, 'characterN');
                    nextLine(26, 'Young Girl', 'backgroundInformation', 800, 'characterTitle', "(Nod) I'll just guide you around this place. Hopefully you will become familiar soon.", 1, undefined, 'characterN', 0, undefined, undefined, undefined, 0, 'characterF');
                    nextLine(27, undefined, 'backgroundInformation', 1000, undefined, 'Here is obviously the meeting room, for the next two weeks, any discussions would be held in here.');
                    nextLine(28, '', 'backgroundInformation', 800, 'characterTitle', '', 1, undefined, undefined, 0, undefined, undefined, undefined, 0, 'characterN');
                    $('#confirmNext').click(function () {
                        $('#transparentBackground').fadeOut(0);
                        $('#confirmNext').fadeOut(800);
                        $(audioSeventh).animate({ volume: 0 }, (11500));
                        $('#gardenF').fadeIn(3000);
                        setTimeout(function () {
                            hover('#characterN', '#textBox', undefined, 'backgroundInformation', 'characterTitle', 1200, 'This is the garden, or you could call it pond if you like. Our master preferred water elements.', 'Young Girl');
                            setTimeout(function () { $('#transparentBackground').fadeIn(0) }, 1000);
                            nextLine(29, undefined, 'backgroundInformation', 800, 'characterTitle', "Following this path down all the way to the end, you'll see the kitchen on the right. If you have any eating habits, inform them there.");
                            nextLine(30, '', 'backgroundInformation', 800, 'characterTitle', 'Your eyes lit up, if the kitchen is there...does that mean you could go at anytime to seek for food?', 1, undefined, 'characterF', 0, undefined, undefined, undefined, 0, 'characterN');
                            nextLine(31, undefined, 'backgroundInformation', 800, undefined, 'But you are not sure if they only provided proper meals...and...you looked at the young girl in front of you in a hidden manner. Something tells you that you<br>better not ask directly.');
                            nextLine(32, undefined, 'backgroundInformation', 800, undefined, 'Do you want to sneak in at night and have a look?');
                            $('#thirdChoice').click(function () {
                                console.log('selected first choice');
                                $('#transparentBackground').fadeIn(0);
                                updateArray(2);
                                deleteElements(undefined, undefined, undefined, undefined, 'thirdChoice', 'fourthChoice');
                                //setTimeout(function () { $('#transparentBackground').fadeIn(0) }, 800);
                                hover(undefined, undefined, undefined, 'backgroundInformation', undefined, 800, "Making your decision, you cheerfully followed the young girl.");
                                nextLine(33, undefined, 'backgroundInformation', 800, undefined, "She seems a little unattentive...gazing across as if seeking for a way to escape...shaking your head, you tried to disregard this thought.Why did I think<br>of this?");
                                secondCharacter();
                            });
                            $('#fourthChoice').click(function () {
                                $('#transparentBackground').fadeIn(0);
                                deleteElements(undefined, undefined, undefined, undefined, 'thirdChoice', 'fourthChoice');
                                //setTimeout(function () { $('#transparentBackground').fadeIn(0) }, 800);
                                hover(undefined, undefined, undefined, 'backgroundInformation', undefined, 800, "Even though you know that a proper lady should do this but...do you really care?");
                                nextLine(33, undefined, 'backgroundInformation', 800, undefined, 'Following the young girl, you wondered. She seems a little unattentive...gazing across as if seeking for a way to escape...shaking your head, you tried<br>to disregard this thought. Why did I think of this?');
                                secondCharacter();
                            });
                        }, 4000);
                    });
                }, 3000);
            });
        });
        //Third character
    } else if (chosenStory == 3) {
        $("#mapG").fadeIn(3000);
        $(audioThird).animate({ volume: 0 }, 5000);
        setTimeout(function () { $('#characterG').fadeOut() }, 5000);
        $('#marketDestination').fadeIn(3000);
        $('#marketDestination').click(function () {
            $('#streetG').fadeIn(3000);
            $('#marketDestination').fadeOut(800);
            setTimeout(function () {
                $(audioTenth).animate({ volume: 0 }, 0);
                audioTenth.play();
                $(audioTenth).animate({ volume: 0.4 }, 3000);
            }, 200);
            setTimeout(function () {
                $('#transparentBackground').fadeIn(0);
                hover(undefined, undefined, undefined, 'backgroundInformation', undefined, 800, '618 CE - 907 CE<br>Tang Dynasty, Changan');
                nextLine(21, '', 'backgroundInformation', 800, 'characterTitle', 'Being the ancient capital of thirteen dynasties, Changan has long been the imperial capital of China.', 1);
                nextLine(22, undefined, 'backgroundInformation', 800, undefined, 'And as the starting point of the Silk Road, Changan signified the prosperity of ancient China.');
                nextLine(23, '', 'backgroundInformation', 800, 'characterTitle', '', 1);
            }, 3000);
            $('#enterRestaurant').click(function () {
                $('#doorG').fadeIn(3000);
                $('#enterRestaurant').fadeOut(800);
                setTimeout(function () {
                    $('#enterRoom').fadeIn(800 * 2);
                    $('#enterRoom').click(function () {
                        $('#roomG').fadeIn(3000);
                        $('#enterRoom').fadeOut(800);
                        setTimeout(function () {
                            $('#windowSide').fadeIn(800 * 2);
                            $('#windowSide').click(function () {
                                $('#characterG').css({ 'z-index': '120', left: '330px' });
                                $(audioTenth).animate({ volume: 0 }, 11500);
                                $('#windowG').fadeIn(3000);
                                $('#windowSide').fadeOut(800);
                                setTimeout(function () {
                                    $('#doorG').css({ 'z-index': 105, display: 'none' }, 0);
                                    hover('#characterG', '#textBox', undefined, 'backgroundInformation', undefined, 1200, 'Tapping on the wooden balcony fencing, you looked down towards the entrance. There seems to be a sort of quarrel going down there...');
                                    setTimeout(function () { $('#transparentBackground').fadeIn(0) }, 1200);
                                    nextLine(24, '', 'backgroundInformation', 800, 'characterTitle', '', 1, undefined, undefined, 0, undefined, undefined, undefined, 0, 'characterG');
                                    nextLine(25, 'Maid', 'backgroundInformation', 800, 'characterTitle', '(Looking around in a panic) Nonsense...Miss others will hear this...your reputation...', 1, undefined, 'characterP', 0, undefined, undefined, undefined, 0, 'characterQ');
                                    nextLine(26, 'Noble Lady', 'backgroundInformation', 800, 'characterTitle', "Since I dare to come here, why would you think I'm afraid of letting others know? Let go of me.", 1, undefined, 'characterQ', 0, undefined, undefined, undefined, 0, 'characterP');
                                    nextLine(27, 'Maid', 'backgroundInformation', 800, 'characterTitle', "Don't be silly miss, following the upholding of the annual discussion forum, many strangers entered the surrounding cities, if your father knows of your<br>actions, he's going to be extremely mad!", 1, undefined, 'characterP', 0, undefined, undefined, undefined, 0, 'characterQ');
                                    nextLine(28, 'Noble Lady', 'backgroundInformation', 800, 'characterTitle', '(Frown) Not along ago the host for the forum sent out a message announcing for the separation of female guests for the sake of their reputation.<br>Disguising their intentions under a mask of politeness...', 1, undefined, 'characterQ', 0, 28, 'Irritated', undefined, 0, 'characterP');
                                    nextLine(29, undefined, 'backgroundInformation', 800, undefined, 'Have you ever seen, even heard of male guests been arranged to share rooms? They only do this to female guests.');
                                    nextLine(30, 'Maid', 'backgroundInformation', 800, 'characterTitle', '(Hesitating) Miss...this is just how the world works, our period has already seen rises to the treatment of women...', 1, undefined, 'characterP', 0, undefined, undefined, undefined, 0, 'characterQ');
                                    nextLine(31, '', 'backgroundInformation', 800, 'characterTitle', '', 1, undefined, undefined, 0, undefined, undefined, undefined, 0, 'characterP');
                                    nextLine(32, '', 'backgroundInformation', 800, 'characterTitle', '', 1, undefined, undefined, 0, undefined, undefined, undefined, 0, 'characterG');
                                    nextLine(33, 'You', 'backgroundInformation', 800, 'characterTitle', "(Politely smiling) Indeed, an interesting play is happening downstairs.", 1, undefined, 'characterG', 0, undefined, undefined, undefined, 0, 'characterR');
                                    nextLine(34, 'Male Guest Two', 'backgroundInformation', 800, 'characterTitle', 'Are you willing to tell us then?', 1, undefined, 'characterS', 0, undefined, undefined, undefined, 0, 'characterG');
                                    nextLine(35, 'You', 'backgroundInformation', 800, 'characterTitle', '(Thinking) ...putting it in brief terms, it was just a lady trying to prove that a women could enter taverns freely, but was stopped by her maid.', 1, undefined, 'characterG', 0, undefined, undefined, undefined, 0, 'characterS');
                                    nextLine(36, 'Male Guest Three', 'backgroundInformation', 800, 'characterTitle', 'That was...', 1, undefined, 'characterT', 0, undefined, undefined, undefined, 0, 'characterG');
                                    nextLine(37, 'Male Guest Two', 'backgroundInformation', 800, 'characterTitle', '(Hint of disgust) Then I guess the lady left the maid in a very poor position.', 1, undefined, 'characterS', 0, undefined, undefined, undefined, 0, 'characterT');
                                    nextLine(38, 'Male Guest One', 'backgroundInformation', 800, 'characterTitle', '(Nod) Not only does she make it hard for her maid. But if others hear of this...which man would take her as a future partner?', 1, undefined, 'characterR', 0, undefined, undefined, undefined, 0, 'characterS');
                                    nextLine(39, '', 'backgroundInformation', 800, 'characterTitle', 'Hearing this, you...', 1, undefined, undefined, 0, undefined, undefined, undefined, 0, 'characterR');
                                    $('#fifthChoice').click(function () {
                                        $('#transparentBackground').fadeIn(0);
                                        deleteElements(undefined, undefined, undefined, undefined, 'fifthChoice', 'sixthChoice');
                                        hover('#characterG', undefined, undefined, 'backgroundInformation', 'characterTitle', 800, "I do believe so too, there are many ways in which she could have taken rather than choosing the worst one.", 'You');
                                        nextLine(40, 'Male Guest Three', 'backgroundInformation', 800, 'characterTitle', '(A little disappointed) Ladies were not born to find husbands, they have their own pursuances.', 1, undefined, 'characterT', 0, undefined, undefined, undefined, 0, 'characterG');
                                        nextLine(41, 'You', 'backgroundInformation', 1000, 'characterTitle', "(Glances at him) ...Let's not argue for a trifle, today was meant to be a day purely for reunions.", 1, undefined, 'characterG', 0, undefined, undefined, undefined, 0, 'characterT');
                                        nextLine(42, '', 'backgroundInformation', 1200, 'characterTitle', '', 1, undefined, undefined, 0, undefined, undefined, undefined, 0, 'characterG');
                                    });
                                    $('#sixthChoice').click(function () {
                                        updateArray(3);
                                        $('#transparentBackground').fadeIn(0);
                                        deleteElements(undefined, undefined, undefined, undefined, 'fifthChoice', 'sixthChoice');
                                        hover('#characterG', undefined, undefined, 'backgroundInformation', 'characterTitle', 800, "(Slightly annoyed but managed to hide it) I think ladies were not born to find good husbands in the first place...she probably was just too irritated by the<br>judgements of others.", 'You');
                                        nextLine(40, 'Male Guest Three', 'backgroundInformation', 800, 'characterTitle', "(Seems to be quite satisfied) I agree, there weren't any rules that restricts women from entering these taverns.", 1, undefined, 'characterT', 0, undefined, undefined, undefined, 0, 'characterG');
                                        nextLine(41, undefined, 'backgroundInformation', 1000, undefined, "(Gesturing towards the wine and dishes) But we were here for catch ups aren't we? Let's not get too involved with a trifle matter.");
                                        nextLine(42, '', 'backgroundInformation', 1200, 'characterTitle', '', 1, undefined, undefined, 0, undefined, undefined, undefined, 0, 'characterT');
                                    });
                                }, 3000);
                            });
                        }, 3000);
                    });
                }, 3000);
            });
        });
    } else if (chosenStory == 4) {
        alert('To be continued');
    };
});

function guestConversation(beginningLine) {
    //Function created to minimise the compilation of code
    if (hoverOver == 6) {
        hoverOver = 7;
        if (yChoice == 1) {
            $('#characterE').fadeOut(2400);
            $("#roomE").fadeIn(3000);
            hover('#characterM', undefined, undefined, 'backgroundInformation', 'characterTitle', 3000, "(Looked in your direction) Isn't that Miss Xiao? She generally doesn’t accept any invitations to social events and there is no easy way to see her. I guess we<br>were quite fortunate today.", 'Male Guest One');
            nextLine(beginningLine, 'Male Guest Two', 'backgroundInformation', 800, 'characterTitle', 'It is said that she had just been ranked as the most talented lady of Zhaoge recently. Her number of votes is far beyond other ladies.', 1, undefined, 'characterK', 0, undefined, undefined, undefined, 0, 'characterM');
            nextLine((beginningLine + 1), 'Male Guest One', 'backgroundInformation', 800, 'characterTitle', 'Flowers and applause should match a beauty, let alone such a beauty? What a pity... A few days ago, news came that those people above liked her.<br>Otherwise, no doubt every young man would want to compete for her favour.', 1, undefined, 'characterM', 0, undefined, undefined, undefined, 0, 'characterK');
            nextLine((beginningLine + 2), 'Male Guest Two', 'backgroundInformation', 800, 'characterTitle', 'Including you?', 1, undefined, 'characterK', 0, undefined, undefined, undefined, 0, 'characterM');
            nextLine((beginningLine + 3), 'Male Guest One', 'backgroundInformation', 800, 'characterTitle', 'Including me.', 1, undefined, 'characterM', 0, undefined, undefined, undefined, 0, 'characterK');
            nextLine((beginningLine + 4), '', 'backgroundInformation', 1600, 'characterTitle', 'At the same time...on the other table...', 1, undefined, undefined, 0, undefined, undefined, undefined, 0, 'characterM');
            nextLine((beginningLine + 5), 'Female Guest One', 'backgroundInformation', 1600, 'characterTitle', "(Sipping the teacup gently) Isn't that Miss Xiao? Finally free today after all her messes?", 1, undefined, 'characterH', 0, (beginningLine + 5), 'Surprised');
            nextLine((beginningLine + 6), 'Female Guest Two', 'backgroundInformation', 800, 'characterTitle', "That being said, she doesn't go to any public events. Interpreting it nicely than she’s just unapproachable, but interpreting straightforwardly...<br>than she’s just ungrateful.", 1, undefined, 'characterL', 0, undefined, undefined, undefined, 0, 'characterH');
            nextLine((beginningLine + 7), 'Female Guest One', 'backgroundInformation', 800, 'characterTitle', "Don’t say it like this, if someone who cares listened, you’d be attacked by her crazy admirers.", 1, undefined, 'characterH', 0, undefined, undefined, undefined, 0, 'characterL');
            nextLine((beginningLine + 8), 'Female Guest Two', 'backgroundInformation', 800, 'characterTitle', "(Continuing on her embroidery) So the truth can’t even be told? I wonder why those young talents fancied her, even the ones above.", 1, undefined, 'characterL', 0, (beginningLine + 8), 'Irritated', undefined, 0, 'characterH');
            nextLine((beginningLine + 9), 'Female Guest One', 'backgroundInformation', 800, 'characterTitle', '(Pursing her lips and smiled) Who knows.', 1, undefined, 'characterH', 0, undefined, undefined, undefined, 0, 'characterL');
            nextLine((beginningLine + 10), '', 'backgroundInformation', 1600, 'characterTitle', '', 1, undefined, undefined, 0, undefined, undefined, undefined, 0, 'characterH');
            $('#storeEE').on('mouseover', function () {
                hover('#characterE', undefined, undefined, 'backgroundInformation', 'characterTitle', 3000, 'Your breath paused for a moment...', '');
                console.log('You should appear...');
                $('#transparentBackground').fadeIn(0);
            });
            nextLine((beginningLine + 11), 'Maid', 'backgroundInformation', 800, 'characterTitle', 'Miss...is there anything wrong? Why are you...still standing here?', 1, undefined, 'characterI', 0, (beginningLine + 11), 'Sand', undefined, 0, 'characterE');
            nextLine((beginningLine + 12), 'You', 'backgroundInformation', 800, 'characterTitle', "(Perfunctorily) Nothing, just thinking about something.", 1, undefined, 'characterE', 0, undefined, undefined, undefined, 0, 'characterI');
            nextLine((beginningLine + 13), '', 'backgroundInformation', 800, 'characterTitle', "You hid your thoughts and started walking up the staircase. You've already spent enough time listening and you cannot waste more.", 1, undefined, 'characterE', 0, undefined, undefined, undefined);
            nextLine((beginningLine + 14), '', 'backgroundInformation', 1200, 'characterTitle', '', 1, undefined, undefined, 0, undefined, undefined, undefined, 0, 'characterE');
        } else if (yChoice == 2) {
            $('#secondFloorEE').fadeIn(3000);
            setTimeout(function () {
                hover('#textBox', '#characterI', undefined, 'backgroundInformation', 'characterTitle', 3000, "(Knocked on the door) Miss? Can I come in? Tea is ready.", 'Maid');
                setTimeout(function () { $('#transparentBackground').fadeIn(0) }, 3000);
            }, 3500);
            nextLine(beginningLine, 'You', 'backgroundInformation', 1000, 'characterTitle', "Come in.", 1, undefined, undefined, 0, undefined, undefined, undefined, 0, 'characterI');
            nextLine((beginningLine + 1), '', 'backgroundInformation', 1000, 'characterTitle', '', 1);
            nextLine((beginningLine + 2), 'You', 'backgroundInformation', 800, 'characterTitle', '(Shaking head slightly) Why would you say this?', 1, undefined, 'characterE', 0, undefined, undefined, undefined, 0, 'characterI');
            nextLine((beginningLine + 3), 'Maid', 'backgroundInformation', 800, 'characterTitle', "I just thought that most of the noble ladies in Zhaoge disliked you out of jealousy, but most of the young talents praised you. And then Miss were often<br>distanced out from them, I'm scared you will take it too seriously.", 1, undefined, 'characterI', 0, undefined, undefined, undefined, 0, 'characterE');
            nextLine((beginningLine + 4), 'You', 'backgroundInformation', 800, 'characterTitle', "I'm used to it, don't worry. It's only a few words.", 1, undefined, 'characterE', 0, (beginningLine + 4), 'Sighing', undefined, 0, 'characterI');
            nextLine((beginningLine + 5), undefined, 'backgroundInformation', 800, undefined, 'By the way, did father accept the invitations?');
            nextLine((beginningLine + 6), 'Maid', 'backgroundInformation', 800, 'characterTitle', "(Anxious)...He accepted the invitations from the ones above...it's two days later.", 1, undefined, 'characterI', 0, undefined, undefined, undefined, 0, 'characterE');
            nextLine((beginningLine + 7), 'You', 'backgroundInformation', 800, 'characterTitle', '(Looking away) Hope that after father receives the recognition he wants this time, I could have some days off.', 1, undefined, 'characterE', 0, undefined, undefined, undefined, 0, 'characterI');
            nextLine((beginningLine + 8), '', 'backgroundInformation', 800, 'characterTitle', 'Looking deeply in her direction, the maid silenced. She knows Miss has been used as a tool to maintain political power...but she sincerely hopes that one day<br>this would change...', 1, undefined, 'characterI', 0, undefined, undefined, undefined, 0, 'characterE');
            nextLine((beginningLine + 9), '', 'backgroundInformation', 1200, 'characterTitle', '', 1, undefined, undefined, 0, undefined, undefined, undefined, 0, 'characterI');
            //Should end all short sections with a conclusion - if there is time to code a function to do this
        };
    };
};

function secondCharacter() {
    //Function created for second character (if chosen) to also minimise excess code compiled together
    $('#confirmNext').css({ top: '202px', right: '130px', 'z-index': '125' }, 0);
    nextLine(34, '', 'backgroundInformation', 800, 'characterTitle', '', 1, undefined, undefined, 0, 34, 'Walking', undefined, 0, 'characterF');
    $('#confirmNext').click(function () {
        $('#confirmNext').fadeOut(800);
        $('#martialF').fadeIn(3000);
        setTimeout(function () {
            hover('#characterN', '#textBox', undefined, 'backgroundInformation', 'characterTitle', 1200, 'This is the training area designed for martial arts.', 'Young Girl');
            setTimeout(function () { $('#transparentBackground').fadeIn(0) }, 1200);
            nextLine(35, undefined, 'backgroundInformation', 800, undefined, '(Scanning you from head to toe) I heard that you enjoyed practicing, I suppose this will be your usual place to go to.');
            nextLine(36, '', 'backgroundInformation', 800, 'characterTitle', '', 1, undefined, undefined, 0, undefined, undefined, undefined, 0, 'characterN');
            $('#confirmNext').click(function () {
                $('#confirmNext').fadeOut(800);
                $('#courtyardF').fadeIn(3000);
                setTimeout(function () {
                    setTimeout(function () {
                        //audioGlobal('audioNineth', 'Sounds/Confronting.mp3', 0.4);
                        audioNineth = new Audio('Sounds/Confronting.mp3');
                        $(audioNineth).animate({ volume: 0 }, 0);
                        audioNineth.play();
                        $(audioNineth).animate({ volume: 0.4 }, 3000);
                    }, 200);
                    hover('#characterN', '#textBox', undefined, 'backgroundInformation', 'characterTitle', 1200, 'This is where you will be staying for the two weeks.', 'Young Girl');
                    setTimeout(function () { $('#transparentBackground').fadeIn(0) }, 1200);
                    nextLine(37, undefined, 'backgroundInformation', 800, undefined, "Quite quiet right? This place is specifically isolated out for female guests. We do believe that it's better to keep clear of male guests. Just so rumours<br>that further hurts your reputation would't spread.");
                    nextLine(38, 'You', 'backgroundInformation', 800, 'characterTitle', 'Further hurt...my reputation?', 1, undefined, 'characterF', 0, undefined, undefined, undefined, 0, 'characterN');
                    nextLine(39, 'Young Girl', 'backgroundInformation', 800, 'characterTitle', "Miss, don't tell me you don't know how the outer world talks of you.", 1, undefined, 'characterN', 0, 39, 'Smiling', undefined, 0, 'characterF');
                    nextLine(40, undefined, 'backgroundInformation', 1000, undefined, "(Looking at the sky) Unfortunately, I need to go welcome other guests, so I'll just leave you here.");
                    nextLine(41, undefined, 'backgroundInformation', 1200, undefined, '(Leaving) By the way, because there is only you and another, so I guess you will have a new roommate.', undefined, undefined, undefined, 0, 41, 'Sand', undefined, 0, 'characterN');
                    nextLine(42, '', 'backgroundInformation', 800, 'characterTitle', '', 1);
                    $('#confirmLast').click(function () {
                        $('#confirmLast').fadeOut(800);
                        $('#roomF').fadeIn(3000);
                        setTimeout(function () {
                            hover('#characterO', '#textBox', undefined, 'backgroundInformation', 'characterTitle', 1400, 'Is it Miss Gu?', 'Roommate');
                            setTimeout(function () { $('#transparentBackground').fadeIn(0) }, 1400);
                            nextLine(43, 'You', 'backgroundInformation', 800, 'characterTitle', 'Yes, you are?', 1, undefined, 'characterF', 0, undefined, undefined, undefined, 0, 'characterO');
                            nextLine(44, 'Roommate', 'backgroundInformation', 800, 'characterTitle', '(Smiling) Liu（柳）, I guess we are going to be roommates for the next two weeks.', 1, undefined, 'characterO', 0, undefined, undefined, undefined, 0, 'characterF');
                            nextLine(45, 'You', 'backgroundInformation', 800, 'characterTitle', "(Curiously) No offence at all, but I was just wondering because I heard that it's supposed to be one guest one courtyard?", 1, undefined, 'characterF', 0, undefined, undefined, undefined, 0, 'characterO');
                            nextLine(46, 'Miss Liu', 'backgroundInformation', 800, 'characterTitle', 'No offence taken, yes it was supposed to so but as there were more guests than expected. The master here was afraid that the male guests would feel disrespcted.<br>Comparitively, perhaps female guests would feel more used to it.', 1, undefined, 'characterO', 0, 46, 'Sighing', undefined, 0, 'characterF');
                            nextLine(47, 'You', 'backgroundInformation', 800, 'characterTitle', "...Are you comfortable with this?", 1, undefined, 'characterF', 0, undefined, undefined, undefined, 0, 'characterO');
                            nextLine(48, 'Miss Liu', 'backgroundInformation', 800, 'characterTitle', "(Shaking her head) I'm used to it...and it's only two sharing one courtyard. Don't worry.", 1, undefined, 'characterO', 0, undefined, undefined, undefined, 0, 'characterF');
                            nextLine(49, undefined, 'backgroundInformation', 800, undefined, "Come in, I'll help you tidy up.");
                            nextLine(50, '', 'backgroundInformation', 800, 'characterTitle', 'You nodded and followed her in, but something kept on ringing in the back of your mind...Did you forget something?', 1);
                            nextLine(51, '', 'backgroundInformation', 1200, 'characterTitle', '', 1, undefined, undefined, 0, undefined, undefined, undefined, 0, 'characterO');
                        }, 5000);
                    });
                }, 4000);
            });
        }, 4000);

    });
};

function conclusion() {
    setTimeout(function () {
        audioGlobal('eleventh', 'Sounds/Information.mp3', 0.45);
        $('#informationBackground').fadeIn(3000);
        $('#description').fadeIn(3000);
        $('#instruction').fadeIn(3000);
        $('#submit').fadeIn(3000);
        $('#submit').click(function () {
            console.log('submitted');
            var understanding = { Learned: $('#description').val() };
            addUnderstanding(understanding, url1, apikey);
        });
    }, 4500);
};

//Section of code for the updating of menu if user chooses the wrong choice
//Empty array waiting to be updated if triggered
arrWrong = [];

arrDescription = [
    { question: "Listen or not", description: "All ladies from noble families had extremely strict standards of behaviour,<br>which also includes not to listen on others' conversations without invitation." },
    { question: "Yes or no", description: "Even though Tang Dynasty is one of the least restrictive time periods in Ancient <br>China, but such actions are still considered inappropriate. Particularly for women." },
    { question: "Agree or disagree", description: "Though there are individuals who acknowledges the slightly rising social <br>status of women during the Tang Dynasty, many still neglects such ideas and still regards them as<br>inferior to men." },
    { question: "fourth question", description: "Actually one more..." },
]

var indexNumber = 0;
var numberChoices = 0;

function updateArray(numberWrong) {
    console.log('Array wrong length: ' + arrWrong.length, numberWrong);

    //This section of code commented out is an alternate wat to update the function - though it does not work as expected but parts of it is still useful to look at
    //numberWrong is the number of wrong choices and index number is the number of indexes supposedly to be updated
    //numberWrong should be able to indicate how many rows in arrWrong needs to be updated
    //code something to detect how many objects are in the array
    // let counter = arrWrong.length;

    // for (var i = 0; i < counter; i++) {
    //     var addObject = '';
    //     arrWrong.push(addObject);
    //     console.log(arrWrong);
    // };

    // objIndex = arrWrong.findIndex((obj => obj[indexNumber]));
    // //Log object to Console.
    // console.log("Before update: ", arrWrong[indexNumber], arrWrong);
    // //Update object's name property.
    // arrWrong[indexNumber] = arrDescription[numberWrong - 1];
    // //Log object to console again.
    // console.log("After update: ", arrWrong[indexNumber], arrWrong);
    // indexNumber = indexNumber + 1;
    // console.log(indexNumber);

    let wrong = {
        question: arrDescription[numberWrong - 1].question,
        questionNumber: numberWrong,
        description: arrDescription[numberWrong - 1].description,
    };
    //Updating the array - animation is also coded just so user knows that the menu has being updated
    arrWrong.push(wrong);
    $('#menuButton').animate({ 'background-color': 'rgb(245, 240, 213)', color: 'rgb(95, 81, 43)', 'border-color': 'rgb(95, 81, 43);' }, 800);
};

//Following event handlers are just the basic intructions for the menu button
$('#menuButton').click(function () {
    $('#menuButton').animate({ 'background-color': 'rgb(95, 81, 43);', color: 'white', 'border-color': 'rgb(245, 240, 213);' }, 100);
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