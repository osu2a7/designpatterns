var prevCode = [];	//previous code goes in this array.

var main = function() {
	lecture(); //Code for the lectures related to observer
 	textTab();	//Tab can be used in code boxes
	stepOne();	//sets up the first step of the lesson
}//end of main

var lessonStep = 0; //keeps track of what step the user is on.

//Contains everything needed for the first stage of the lesson. The user creates the Observer interface.
var stepOne = function(){

	var oIntSkele = "public interface Observer{\n\n}"; //Code initially presented to the user.

	$("#codeBox").val(oIntSkele);	//selects the code box and sets its value.
	
	addAch(1);	//adds 1 achievemnt to the right sided box. 
	
	var blueText = "The first task is to finish the Observer Interface. Add the update method to the interface and give it a String parameter called 'message'."; 

	blueTopInfo(blueText); //adds information to the top box.

	var notUnlocked = true;
	
	//selects the code box and attaches an event listener. It listens for input, this is called everytime a user inputs code into the code box.
	$("#codeBox").on("input", function(){
	
		var input = $(this).val(); //gets the text that is in the code box.

		//removes empty space in the input. 
		input = input.replace(/ /g,'');	
 		input = input.replace(/\n/g,'');
 		input = input.replace(/\s/g, "");
		
		//checks if code is a code is entered correctly
		if(updateCheck(input) && notUnlocked){
			
			notUnlocked = false; //prevents the if statement from being called again.

			$(".locked#q1").remove();	//removes the locked achievement text
			
			$("#append").append("<div class='aText'><span class='star'>&#10004;</span> Well done task complete</div>");	//adds text to the achievement box
			
			taskComplete();	//Calls the function that deals with a completed step.	
			
		}


	});


}

//checks the user has inputed the correct code. 
var updateCheck = function(input){

	var regTest = new RegExp("{publicvoidupdate\\(Stringmessage\\);}", "i"); //RegEx to check the user's code.

	return regTest.test(input);  //returns true if the user's input matches the RegEx otherwise false. 
}


var stepTwo = function(){

	addSmallBoxes();	//adds small boxes that surrong the bigger boxes containing previous code.

	//adds instructions to the bottom of the page
	$(".moreHelp").append(" There are 3 methods you need to implement.<li>The attach method</li><li>The detach method</li><li>The notify method</li>Use the names listed here otherwise you will not be able to progress. Parameters should be named 'o'.");


	$("#codeBox").val("public interface Subject {\n\n}"); //prentered code in the code box

	var info = "The next task is to complete the subject interface. See below for further instructions."; //information for the blue box
	
	blueTopInfo(info);	//add information to the top blue box

	addAch(4);	//adds four achievements to the achievement box

	//stops achievements from being called multiple times
	var notUnlocked = true;	
 	var notUnlocked2 = true;	
 	var notUnlocked3 = true;
 	var notUnlocked4 = true;

 	var oneCall = true;	//makes sure the continue button is only presented once

 	//listens for input in the code box
 	$("#codeBox").on("input",function(){

 		var input = $("#codeBox").val(); //empties the code box

 		//checks the user's attach method
 		if(attachCheck(input) && notUnlocked){
  			
  			$(".locked#q1").remove();

 			$("#append").append("<div class='aText'><span class='star'>&#9733;</span> You've got the attach method</div>");

 			notUnlocked = false;		
 		} 

 		//checks the user's detach method
 		if(detachCheck(input) && notUnlocked2){

 			$(".locked#q2").remove();
 			
 			$("#append").append("<div class='aText'><span class='star'>&#9733;</span> You've got the detach method</div>");

 			notUnlocked2 = false;

 		}

 		//checks the user's notif method
 		if(notifyCheck(input) && notUnlocked3){

 			$(".locked#q3").remove();

 			$("#append").append("<div class='aText'><span class='star'>&#9733;</span> You've got the notify method</div>")

 			notUnlocked3 = false;
 		}

 		//Deals with the completion of the step
 		if(!notUnlocked && !notUnlocked2 && !notUnlocked3 && oneCall){

 			$(".locked#q4").remove();

 			$("#append").append("<div class='aText'><span class='star'>&#10004;</span> Well done the task is complete!</div>")

 			setTimeout(taskComplete, 2000);	//Remove the timer, it's a trial.

 			oneCall = false;
 		}
 	

 	});


}

//RegEx test for the attach method
var attachCheck = function(input){

	var regEx = new RegExp("public void attach\\(Observer o\\);", "i");

	return regEx.test(input);

}

//RegEx test for the detach method
var detachCheck = function(input){

	var regEx = new RegExp("public void detach\\(Observer o\\);", "i");

	return regEx.test(input);
}

//RegEx test for the notify method. 
var notifyCheck = function(input){

	var regEx = new RegExp("public void notify\\(\\);", "i");

	return regEx.test(input);
}



//Deals with a step being completed.It presents a continue button. When pressed it takes users to the next step.

var stepThree = function(){
	
	addSmallBoxes(); //adds the previous code boxes
	
	 var info= "Now we have our two key interfaces, we can design a simple system to test it. For this task we will emulate twitter.The twitter feed will be the subject and the observers will be the twitter followers. See below for further instructions";


	blueTopInfo(info)	//adds information to the top of the page
		
	addAch(5);	//adds achievements

	//stops achievements being called more than once
	var notUnlocked = true;
	var notUnlocked2 = true;
	var notUnlocked3 = true;
	var notUnlocked4 = true;
	var notUnlocked5 = true;
	var callOnce = true;

	//html for the information
	var create = "<li>To start create a class for the twitter followers, call it 'Follower' and make sure it implements the correct interface.</li>";
	var once = "<li>Once you've created the class declare a linked list to store all the tweets, call it tweets. Make sure it can only hold strings.</li>";
	var con = "<li>Create a constructor and instantiate tweets.</li>";
	var fin = "<li>Finish the update method so the class can update its tweet list. Use the 'addLast' method to do this.</li>";
	var fina = "<li>Finally create a method called 'getTweets' this will simply return the list of tweets.</li>";

	$(".moreHelp").empty();

	$(".moreHelp").append(create + once + con + fin + fina);	//adds information to the bottom

	//listens for input and unlocks achievments accordingly
	$("#codeBox").on("input",function(){

 		var input = $("#codeBox").val();

 		var reg1 = new RegExp("publicclassFollowerimplementsObserver{}", "i");
 		var reg2 = new RegExp("privateLinkedList<String>tweets","i");
 		var reg3 = new RegExp("publicFollower\\(\\){tweets=newLinkedList\\<String\\>\\(\\);}", "i");
 		var reg4 = new RegExp("publicvoidupdate\\(Stringmessage\\){tweets.addLast\\(message\\);}","i");
 		var reg5 = new RegExp("publicLinkedList<String>getTweets\\(\\){returntweets;}","i")

 		var test = input.replace(/ /g,'');
 		test = test.replace(/\n/g,''); //makes sure string has no new lines or spaces
 		test = test.replace(/\s/g, "") 	

 		//RegEx tests
 		if(reg1.test(test) && notUnlocked){
 			$(".locked#q1").remove();

 			$("#append").append("<div class='aText'><span class='star'>&#9733;</span> The class has been created successfully</div>");

 			$("#codeBox").val("public class Follower implements Observer{\n\n\t@Override\n\tpublic void update(String message){}\n}");

 			notUnlocked = false;		

 		} 
 			

 		if(reg2.test(test) && notUnlocked2){


			$(".locked#q2").remove();

 			$("#append").append("<div class='aText'><span class='star'>&#9733;</span> The LinkedList has been declared successfully</div>");

 			notUnlocked2 = false;

 		}

 		if(reg3.test(test) && notUnlocked3){

 			$(".locked#q3").remove();

 			$("#append").append("<div class='aText'><span class='star'>&#9733;</span> The constructor is correct</div>");

 			notUnlocked3 = false;

 		}

 		if(reg4.test(test) && notUnlocked4){	

 			$(".locked#q4").remove();

 			$("#append").append("<div class='aText'><span class='star'>&#9733;</span> The update method is complete</div>");

 			notUnlocked4 = false;

 		}

 		if(reg5.test(test) && notUnlocked5){

 			$(".locked#q5").remove();

 			$("#append").append("<div class='aText'><span class='star'>&#9733;</span> getTweets has been implemented correctly</div>");

 			notUnlocked5 = false;

 		}

 		//if all achievements are unlocked, task is complete.
 		if(!notUnlocked && !notUnlocked2 && !notUnlocked3 && !notUnlocked4 && !notUnlocked5 && callOnce){

 			$("#append").append("<div class='aText'><span class='star'>&#10004;</span> Well done the task is complete!</div>")
 			taskComplete();
 			callOnce = false;


 		}
 	});

} 


var stepFour = function(){
	addSmallBoxes();	

	var info = "Now we have our two key interfaces, we can design a simple system to test it. For this task we will emulate twitter.The twitter feed will be the subject and the observers will be the twitter followers. See below for further instructions";

	blueTopInfo(info);
	addAch(8);

	var createAClass = "<li id='one'>Create a class for our observers to observe and call it 'TwitterUser', make sure you implement the correct interface.</li>"
	var onceYou = "<li id='two'>Once you've created the class we need to add something to store the followers of the Twitter Feed. Declare an ArrayList named 'followers' to store our followers. Make sure only observers are able to be stored. Also create an empty String to store a tweet and call it 'tweet'.</li>"
	var constructor = "<li id='three'>Create a constructor for the class and instantiate any variables that should be.</li>";
	var nowWeneed = "<li id='four'>Now we need to fill our interface methods. Attach needs to add a follower to followers. Detach needs to remove a specific follower, do this by finding its index then removing it from the list. Call the index 'oIndex'. Notify needs to notify the followers of a change, create a for each loop to iterate through the array and use the follower's update method to give the followers the tweet. Call the loop element 'observer'.</li>"
	var finallyWe = "<li id='five'>Finally we need to add a method which allows the twitter user to send a tweet. Name the method 'sendTweet' and give it a string parameter called 'tweet'. In the method set tweet to the tweet global variable using the 'this' keyword and call notify().</li>"
	var callO = true;
	

	$(".moreHelp").append(createAClass + onceYou + constructor + nowWeneed + finallyWe);

		var notUnlocked  = true;
 		var notUnlocked2 = true;
 		var notUnlocked3 = true;
 		var notUnlocked4 = true;
 		var notUnlocked5 = true;
 		var notUnlocked6 = true;
 		var notUnlocked7 = true;
 		var notUnlocked8 = true;

	$("#codeBox").on("input",function(){

 		var input = $("#codeBox").val();

 		var reg1 = new RegExp("publicclassTwitterUserimplementsSubject{}", "i");
 		var reg2 = new RegExp("private ArrayList<Observer> followers;","i");
 		var reg3 = new RegExp("publicTwitterUser\\(\\){followers=newArrayList\\<Observer\\>\\(\\);}", "i");
 		var reg4 = new RegExp("private String tweet = \"\";","i");
 		var reg5 = new RegExp("publicvoidattach\\(Observero\\){followers.add\\(o\\);}","i")
 		var reg6 = new RegExp("publicvoiddetach\\(Observero\\){intoIndex=followers.indexOf\\(o\\);followers.remove\\(oIndex\\);}","i");
 		var reg7 = new RegExp("publicvoidnotify\\(\\){for\\(Observerobserver:followers\\){observer.update\\(tweet\\);}}","i");
 		var reg8 = new RegExp("publicvoidsendTweet\\(Stringtweet\\){this.tweet=tweet;notify\\(\\);}","i");

 		var attach = "\n\n\t@Override\n\tpublic void attach(Observer o){\n\t}";
 		var detach = "\n\n\t@Override\n\tpublic void detach(Observer o){\n\t}";
 		var notify = "\n\n\t@Override\n\tpublic void notify(){\n\t}";

 		var test = input.replace(/ /g,'');
 		test = test.replace(/\n/g,'');
 		test = test.replace(/\s/g, "") 

 

 		if(reg1.test(test)){

 			$(".locked#q1").remove();

 			$("#append").append("<div class='aText'><span class='star'>&#9733;</span> The class has been created successfully</div>");

 			$("#codeBox").val("public class TwitterUser implements Subject{"+attach+detach+notify+"\n}");

 			notUnlocked = false;

 			checkUnlocks(notUnlocked, notUnlocked2, notUnlocked3, notUnlocked4, notUnlocked5, notUnlocked6, notUnlocked7, notUnlocked8);		

 		} 
 			

 		if(reg2.test(input) && notUnlocked2){

			$(".locked#q2").remove();

 			$("#append").append("<div class='aText'><span class='star'>&#9733;</span> The ArrayList has been declared successfully</div>");

 			notUnlocked2 = false;

 			checkUnlocks(notUnlocked, notUnlocked2, notUnlocked3, notUnlocked4, notUnlocked5, notUnlocked6, notUnlocked7, notUnlocked8);

 		}

 		if(reg3.test(test) && notUnlocked3){

 			$(".locked#q3").remove();

 			$("#append").append("<div class='aText'><span class='star'>&#9733;</span> The constructor is correct</div>");

 			notUnlocked3 = false;

 			checkUnlocks(notUnlocked, notUnlocked2, notUnlocked3, notUnlocked4, notUnlocked5, notUnlocked6, notUnlocked7, notUnlocked8);

 		}

 		if(reg4.test(input) && notUnlocked4){	

 			$(".locked#q4").remove();

 			$("#append").append("<div class='aText'><span class='star'>&#9733;</span> You've created a place to store the tweet</div>");

 			notUnlocked4 = false;

 			checkUnlocks(notUnlocked, notUnlocked2, notUnlocked3, notUnlocked4, notUnlocked5, notUnlocked6, notUnlocked7, notUnlocked8);

 		}

 		if(reg5.test(test) && notUnlocked5){

 			$(".locked#q5").remove();

 			$("#append").append("<div class='aText'><span class='star'>&#9733;</span> The attach method is complete</div>");

 			notUnlocked5 = false;

 			checkUnlocks(notUnlocked, notUnlocked2, notUnlocked3, notUnlocked4, notUnlocked5, notUnlocked6, notUnlocked7, notUnlocked8);

 		}

 		if(reg6.test(test) && notUnlocked6){

 			$(".locked#q6").remove();

 			$("#append").append("<div class='aText'><span class='star'>&#9733;</span> The detach method is complete</div>");

 			notUnlocked6 = false;

 			checkUnlocks(notUnlocked, notUnlocked2, notUnlocked3, notUnlocked4, notUnlocked5, notUnlocked6, notUnlocked7, notUnlocked8);

 		}

 		if(reg7.test(test) && notUnlocked7){

 			$(".locked#q7").remove();

 			$("#append").append("<div class='aText'><span class='star'>&#9733;</span> The notify method is complete</div>");

 			notUnlocked7 = false;

 			checkUnlocks(notUnlocked, notUnlocked2, notUnlocked3, notUnlocked4, notUnlocked5, notUnlocked6, notUnlocked7, notUnlocked8);

 		}

 		if(reg8.test(test) && notUnlocked8){

 			$(".locked#q8").remove();

 			$("#append").append("<div class='aText'><span class='star'>&#9733;</span> The sendTweet method is complete</div>");

 			notUnlocked8 = false;

 			checkUnlocks(notUnlocked, notUnlocked2, notUnlocked3, notUnlocked4, notUnlocked5, notUnlocked6, notUnlocked7, notUnlocked8);
 		}

 		//checks if all the tasks have been completed

 		if(!notUnlocked && !notUnlocked2 && !notUnlocked3 && !notUnlocked4 && !notUnlocked5 && !notUnlocked6 && !notUnlocked7 && !notUnlocked8 && callO){
 			$("#append").append("<div class='aText'><span class='star'>&#10004;</span> Well done the task is complete!</div>")
 			taskComplete();
 			callO = false;
 		}

	}
)};


var checkUnlocks = function(notUnlocked, notUnlocked2, notUnlocked3, notUnlocked4, notUnlocked5, notUnlocked6, notUnlocked7, notUnlocked8){

	if(!notUnlocked){

 			$(".moreHelp li#one").addClass("done");

 		}

 		if(!notUnlocked2 && !notUnlocked4){

 			$(".moreHelp li#two").addClass("done");

 		}

 		if(!notUnlocked3){

 			$(".moreHelp li#three").addClass("done");

 		}

 		if(!notUnlocked5 && !notUnlocked6 && !notUnlocked7){

 			$(".moreHelp li#four").addClass("done");

 		}

 		if(!notUnlocked8){

 			$(".moreHelp li#five").addClass("done");

 		}
}


//Provides a demonstration of the student's code.
var stepFive = function(){
 	addSmallBoxes();
 	
 	$(".codeBoxHolder").append("<button id='run'>Run</button");
 	var lineOne = "TwitterUser twitterUser = new TwitterUser();\n\n";
 	var lineTwo = "Follower follower1 = new Follower();\n";
 	var lineThree = "Follower follower2 = new Follower();\n";
 	var lineFour = "Follower follower3 = new Follower();\n\n";
 	var lineFive = "TwitterUser.attach(follower1);\n";
 	var lineSix = "TwitterUser.attach(follower2);\n";
 	var lineSeven = "TwitterUser.attach(follower3);\n\n";
 	var lineEight = "TwitterUser.sendTweet(\"A very boring tweet.\");\n";
 	var lineNine = 	"TwitterUser.sendTweet(\"I had a fun time at the zoo\");\n\n";
 	var lineTen = "LinkedList tweets = follower1.getTweets();\n";
 	var line11 = "\nfor(String tweet : tweets)\n\t{\n\tSystem.out.println(tweet);\n\t}";
 	var line12 = "\n\nTwitterUser.detach(follower2);\n";
 	var line13 = "\nTwitterUser.sendTweet(\"This design patterns trainer is the best thing ever!\");";
 	var line14 = "\n\ntweets = follower1.getTweets();\n";
 	var line15 = "\nfor(String tweet : tweets)\n\t{\n\tSystem.out.println(tweet);\n\t}";
 	var line16 = "\n\ntweets = follower1.getTweets();\n";
 	var line17 = "\nfor(String tweet : tweets)\n\t{\n\tSystem.out.println(tweet);\n\t}";
 	var line16 = "\n\ntweets = follower2.getTweets();\n";
 	var line17 = "\nfor(String tweet : tweets)\n\t{\n\tSystem.out.println(tweet);\n\t}";
 	
 	var info = "We have finished designing our representation of Observer. Trial it!"

 	blueTopInfo(info);

 	var $code = $("#codeBox"); 
 	$code.prop("readonly", true);

 	$code.val("public class ObserverTester {\n\npublic static void main(String[] args) {\n\n"+lineOne + lineTwo + lineThree + lineFour + lineFive + lineSix + lineSeven + lineEight + lineNine + lineTen + line11+line12+line13+line14+line15+line16+line17+"\n}\n}");

 	$("#achText").addClass("console");
 	$('#achText').append("Console</br>*******");

 	$('#run').on("click", function(){
 		$("#achText").empty();
 		$("#achText").addClass("console");
 		$('#achText').append("Console</br>*******");
 		$("#achText").append("</br>A very boring tweet.");
 		$("#achText").append("</br>I had a fun time at the zoo");
 		$("#achText").append("</br>A very boring tweet.");
 		$("#achText").append("</br>I had a fun time at the zoo");
 		$("#achText").append("</br>This design patterns trainer is the best thing ever!");
 		$("#achText").append("</br>A very boring tweet.");
 		$("#achText").append("</br>I had a fun time at the zoo");

 	});
 }

//adds text to the blue box at the top of the page.
var blueTopInfo = function(text){

		$('#info-text').empty(); //clear what was in the blue box

 		$("#info-text").append("<div id='typing'>" + text + "</div>");	//add text

}

//adds achievements to the right sided box. Each achievement has its own ID.
var addAch = function(numberOfAchs){

	$("#achText").append("<div id='append'></div>"); //selects the parent element for the achivements.

	//for the number of achievements add an achievement to the right box.
	for(var i = 1; numberOfAchs >= i; i++){

		$("#achText").append("<div class='locked' id='q" + i + "'>This achievement is locked</div>"); //adds a locked achievement to the right box
	}
}

var taskComplete = function(){

	
	$("#achText").append("<div class ='aText'><button class='cont'>Continue</button></div>"); //adds a continue button to the achievement screen
	

	var text = $("#codeBox").val();	//gets the text inside the code box when the task is complete
	
	prevCode.push(text);	//puts the text into the array so it can be used for the smaller code boxes.

	//adds an on click event listener to the continue button
	$(".cont").on("click", function(e){

		$(".moreHelp").empty();  //empties the text below the 2 big boxes
		$("#achText").empty();	//empties the achievement box	
		$("#codeBox").val("");	//empties the code box
		$("#info-text").empty();	//empties the blue box at the top of the page	

		lessonStep++;
		//Calls the next step. Every time this method is called lessonStep is incremented. 
		switch(lessonStep){

			case 1:
			stepTwo();
			break;

			case 2:
			stepThree();
			break;

			case 3:
			stepFour();
			break;

			case 4:
			stepFive();
			break;
		}

	});
}

//adds small boxes filled with previous code
var addSmallBoxes = function(){

	$("#leftBoxes").empty();	
	$("#rightBoxes").empty();

	var count = 0;

	//for how many small boxes there are, add them. 
	for(var i = 0; i < prevCode.length; i ++){
		count++;
		
		//boxes are put on the left and right hand side alternatively
		if(count%2 === 1){
			$("#leftBoxes").append("<textarea class=\"smalltextbox\" id='smalltextbox"+i+"' readonly></textarea>");

			$("#smalltextbox"+i).val(prevCode[i]);	//fills with right information

			//attaches a listener so when the box is clicked it appears in the middle of the screen
			$("#smalltextbox"+i).on("click", function(){

						$(".code-here").val($(this).val());
						$(".popText").css("display", "initial");
						$(".content").css("opacity", "0.2");
							$(".x").on("click", function(){

								$(".popText").css("display", "none");
								$(".content").css("opacity", "initial");

							});

					});
		}

		else{
			$("#rightBoxes").append("<textarea class=\"smalltextbox\" id='smalltextbox"+i+"' readonly></textarea>");

			$("#smalltextbox"+i).val(prevCode[i]);

			$("#smalltextbox"+i).on("click", function(){

						$(".code-here").val($(this).val());
						$(".popText").css("display", "initial");
						$(".content").css("opacity", "0.2");
							$(".x").on("click", function(){

								$(".popText").css("display", "none");
								$(".content").css("opacity", "initial");

							});

					});
		}

	}

} 

//allows tabbing in text boxes. However you can't use tab to navigate the site.
var textTab = function(){

	 	var textareas = document.getElementsByTagName('textarea');
		var count = textareas.length;
		for(var i=0;i<count;i++){
	    	textareas[i].onkeydown = function(e){
	        	if(e.keyCode==9 || e.which==9){
	            e.preventDefault();
	            var s = this.selectionStart;
	            this.value = this.value.substring(0,this.selectionStart) + "\t" + this.value.substring(this.selectionEnd);
	            this.selectionEnd = s+1; 
	        }
	    }
	}
}


var slideCount = 1;	//count for the slides

//contains the logic for the lectures
var lecture = function(){

	slideOne();

	//listens for clicks on next so it can direct users to the next lecture slide
	$(".next").on("click", function(e){

		slideCount++;

		//which slide the user should be viewing
		switch(slideCount){

		case 1:
			slideOne();
		break;

		case 2:
			slideTwo();
		break;

		case 3:
			slideThree();
		break;

		case 4:
			slideFour();
		break;

		case 5: 
			slideFive();
		break;

		case 6: 
			slideSix();
		break;	
	}	
	});


	//listens for clicks on previous so it can direct users to the next lecture slide
	$(".previous").on("click", function(e){

		slideCount--;

		switch(slideCount){

		case 1:
			slideOne();
		break;

		case 2:
			slideTwo();
		break;

		case 3:
			slideThree();
		break;

		case 4:
			slideFour();
		break;

		case 5: 
			slideFive();
		break;

		case 6:
			slideSix();
		break;
		}
	});	

}

//contains the html for slide one
var slideOne = function(){

	$(".previous").prop("disabled", true);
	$(".next").prop("disabled", false);

	$(".lectureContent").empty();

	var head = "<h1>Observer</h1>";
	var line1 = "<h3 id = 'why'>Observer is one of the behavioural Design Patterns</h3>";
	var line2 = "<h2 >Why is Observer needed?</h2>";
	var line3 = "<li class = 'slideOne'>When classes cooperate there becomes a need to maintain consistancy between them</li>";
	var line4 = "<li class = 'slideOne'>You can do this by making classes tightly coupled, however, this reduces their re-usability and flexibility</li>";
	var line5 = "<li class = 'slideOne final'>Observer solves this problem by decoupling related objects</li>";

	$(".lectureContent").append(head + line1 + line2 + line3 + line4 + line5);

}

//contains the html for slide2
var slideTwo = function(){
	
	$(".previous").prop("disabled", false);
	$(".next").prop("disabled", false);
	
	$(".lectureContent").empty();

	var head = "<h1>Observer</h1>";
	var line1 = "<h2>The Structure of Observer</h2>";
	var line2 = "<img src='img/observer.png' alt='Observer UML'/>";

	$(".lectureContent").append(head + line1 + line2);


}

//contains the html for slide3
var slideThree = function(){

	$(".previous").prop("disabled", false);
	$(".next").prop("disabled", false);
	
	$(".lectureContent").empty();

	var head = "<h1>Observer</h1>";
	var line1 = "<h2>The Structure of Observer - Key Points</h2>";
	var line2 = "<li class='slideThree'>There are two key objects: Observer and Subject</li>";
	var line3 = "<li class='slideThree'>The Observers observe a Subject</li>";
	var line4 = "<li class='slideThree'>When the Subject's state changes, the Observers are notified</li>";
	var line5 = "<li class='slideThree'>The Observer chooses what to do with the Subject's change of state</li>";
	var line6 = "<li class='slideThree'>Subject's and Observers know nothing about each other, only that they are subscribed</li>";

	$(".lectureContent").append(head + line1 + line2 + line3 + line4 + line5 + line6);

}

//contains the html for slide4
var slideFour = function(){

	$(".previous").prop("disabled", false);
	$(".next").prop("disabled", false);
	
	$(".lectureContent").empty();

	var head = "<h1>Observer</h1>";
	var line1 = "<h2>Participants of the Observer Pattern<h2/>";
	var line2 = "<h3>Subject</h3>";
	var line3 = "<li>Knows its numerous Observers</li>";
	var line4 = "<li>Provides an interface for atatching and detaching Observer objects</li>";
	var line5 = "<li>Sends a notification to its Observers when its state changes</li>";
	var line6 = "<h3>Observer</h3>";
	var line7 = "<li>Defines an updating interface for concrete Observers</li>";
	var line8 = "<h3>Concrete Subject</h3>"
	var line9 = "<li>Stores state of interest to Concrete Observers</li>";
	var line10 = "<h3>ConcreteObserver</h3>"
	var line11 = "<li>Maintains a reference to a concrete subject object</li>";
	var line12 = "<li>Stores state that should stay consistent with the Subject's</li>";
	var line13 = "<li>Implements the updating interface</li>";

	$(".lectureContent").append(head + line1 + line2 + line3 + line4 + line5 + line6 +line7 + line8 + line9 + line10 + line11 + line12 +line13);
}

//contains the html for slide5
var slideFive = function(){

	$(".previous").prop("disabled", false);
	$(".next").prop("disabled", false);
	$(".lectureContent").empty();

	var head = "<h1>Observer</h1>";
	var line1 = "<h2>Example of the Observer Design Pattern</h2>";
	var line2 = "<img src='img/observerExample.png' alt='Example of the Observer Design Pattern'/>";
	var line3 = "<li>The three Observers observer the information displayed, but do three different things with it.</li>"
	
	$(".lectureContent").append(head + line1 + line2 + line3);
}

//contains the html for slide6
var slideSix = function(){

	$(".previous").prop("disabled", false);
	$(".next").prop("disabled", true);
	$(".lectureContent").empty();

	var head = "<h1>Observer</h1>";
	var line1 = "<h2>When to use the Observer Design Pattern</h2>";
	var line2 = "<li class='slideSix'>When a change to one object requires changes to others, <br/>but you do not need to know which one those are</li>";
	var line3 = " <a href='olecture.html'><div class='stepBox'>Observer</div></a>";
    var line4 =  "<a href='blecture.html'><div class='stepBox'>Builder</div></a>";
	$(".lectureContent").append(head + line1 + line2 + line3 + line4);

}
//waits for the document to load before executing any javascript
$(document).ready(main);