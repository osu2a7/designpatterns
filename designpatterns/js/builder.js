var textContent = [];	//values for small boxes

var main = function() {
	lecture();	//lecture slide codeBox
	textTab();	//allows users to use tab inside the code box	
 	stepOne();	//first step

} //end of main


//users can see their code demonstrated
var stepFive = function(){

	addSmallBoxes();	//adds the code boxes

	addTopText("We've finished designing our representation of Builder. Trial it!");
	$(".codeBoxHolder").append("<button id='run'>Run</button");

	//code for the demonstration
	var lineTwo = "\n\nCarDealer carDealer = new CarDealer(micraBuilder);";
	var lineOne = "NissanMicraBuilder micraBuilder = new NissanMicraBuilder();";
	var lineThree = "\n\ncarDealer.constructCar();";
	var lineFour = "\n\nCar car = micraBuilder.getCar();";
	var lineFive = "\n\nSystem.out.println(car);";


 	var $code = $("#codeBox"); 
 	//stops users from being able to edit the code
 	$code.prop("readonly", true);

 	$code.val("public class CarShopTest {\n\npublic static void main(String[] args) {\n\n"+lineOne + lineTwo + lineThree + lineFour + lineFive + "\n}\n}");

 	$("#achText").addClass("console");
 	$('#achText').append("Console</br>*******");

 	//users can run the code
 	$('#run').on("click", function(){
 		$("#achText").empty();
 		$("#achText").addClass("console");
 		$('#achText').append("Console</br>*******");
 		$("#achText").append("</br>drive:FWD doors:3 make:Nissan model:Micra horsepower:53");
 	});

}

//step four
var stepFour = function(){

	addSmallBoxes();
	addAch(4);

	addTopText("The final task is to build the director part of the builder design pattern. For this exercise it will be the car dealer.");
	addBottom("Create a class and name it \"CarDealer\".");
	addBottom("Next create a reference to a CarBuilder object and call it carBuilder.");
	addBottom("Create a constructor that takes CarBuilder builder as a parameter, call the parameter carBuilder. Then use the parameter to instantiate the class' CarBuilder.");
	addBottom("Finally create a method called \"constructCar\". Then call all of CarBuilder's build methods so the car is constructed.");

	var notUnlocked = true;
	var notUnlocked2 = true;
	var notUnlocked3 = true;
	var notUnlocked4 = true;

	var $cb = $("#codeBox");
	
	$cb.on("input", function(){

		var input = $cb.val();
		input = input.replace(/ /g,'');
 		input = input.replace(/\n/g,'');
 		input = input.replace(/\s/g, "");

 	//checks the ReGex
 	var task1 = checkCarDealClass(input);
 	var task2 = checkCarBuild(input);
 	var task3 = checkConDeal(input);
 	var task4 = checkBuilderMethods(input);	

 	
 	//deals with the achievements
 	if(task1 && notUnlocked){

 		notUnlocked = false;

 		$("#n1").addClass("done");
		$(".locked#q1").remove();
		$("#append").append("<div class='aText'><span class='star'>&#9733;</span> You've created the class!</div>");

 	}

 	if(task2 && notUnlocked2){

 		notUnlocked2 = false;

 		$("#n2").addClass("done");
		$(".locked#q2").remove();
		$("#append").append("<div class='aText'><span class='star'>&#9733;</span> You've created the CarBuilder reference!</div>");

 	}

 	if(task3 && notUnlocked3){

 		notUnlocked3 = false;
 		$("#n3").addClass("done");
		$(".locked#q3").remove();
		$("#append").append("<div class='aText'><span class='star'>&#9733;</span> You've created the constructor!</div>");


 	}

 	if(task4 && notUnlocked4){

 		notUnlocked4 = false;

 		$("#n4").addClass("done");
		$(".locked#q4").remove();
		$("#append").append("<div class='aText'><span class='star'>&#9733;</span> You've created all of the builder methods!</div>");
		taskComplete();
 	}


 	});


}

var notUnlocked13 = true;

//ReGex check for the builder methods
var checkBuilderMethods = function(input){

	reg1 = new RegExp("publicvoidconstructCar\\(\\){","i");
	reg2 = new RegExp("carBuilder.buildDrive\\(\\);", "i");
	reg3 = new RegExp("carBuilder.buildDoors\\(\\);", "i");
	reg4 = new RegExp("carBuilder.buildMake\\(\\);", "i");
	reg5 = new RegExp("carBuilder.buildModel\\(\\);", "i");
	reg6 = new RegExp("carBuilder.buildHorsepower\\(\\);", "i");
	reg7 = new RegExp("}");

	if(notUnlocked13 && reg1.test(input) && reg2.test(input) && reg3.test(input) && reg4.test(input) && reg5.test(input) && reg6.test(input) && reg7.test(input)){
		 return true;
	}





}

//regex check
var checkConDeal = function(input){

	reg1 = new RegExp("publicCarDealer\\(CarBuildercarBuilder\\){this.carBuilder=carBuilder;}","i")

	return reg1.test(input);
 }

//regex check
var checkCarBuild = function(input){

		reg1 = new RegExp("privateCarBuildercarBuilder","i");
		return reg1.test(input);	
}

//regex check
var checkCarDealClass = function(input){

	reg1 = new RegExp("publicclassCarDealer{}","i");

	return reg1.test(input);

}

//regex check
var stepThree = function(){
	addSmallBoxes();
	addAch(5);

	addTopText("Now it's time to create a concrete builder class. See below for further instructions.");
	addBottom("Create a class called NissanMicraBuilder and implement the correct interface.", true);
	addBottom("<span id='car'>Now create a Car object reference and call it \"car\"</span>. <span id='con'> Then create a constructor which instantiates it.</span>");
	addBottom("Next use the the setter methods from car to set the attributes of a Nissan Micra. The attributes are <span id='drive'>FWD (drive) ,</span> <span id='horsepower'>53 (horsepower),</span> <span id='make'>Nissan (make),</span> <span id='model'>Micra (model)</span> <span id='doors'> and 3 (doors).</span> ");
	addBottom("Finally finish the getCar method.");

	var notUnlocked = true;
	var notUnlocked2 = true;
	var notUnlocked3 = true;
	var notUnlocked4 = true;
	var notUnlocked5 = true;
	var notUnlocked6 = true;

	var $cb = $("#codeBox");
	
	$cb.on("input", function(){

		var input = $cb.val();
		input = input.replace(/ /g,'');
 		input = input.replace(/\n/g,'');
 		input = input.replace(/\s/g, "");

 		var task1 = checkConBuild(input);
 		var task2 = checkCarObj(input);
 		var task3 = checkConstructor(input);
 		var task4 = checkSetters(input);
 		var task5 = checkCar(input);

 		var buildDrive = "\n\n\t@Override\n\tpublic void buildDrive(){\n\t}";
 		var buildMake = "\n\n\t@Override\n\tpublic void buildMake(){\n\t}";
 		var buildModel = "\n\n\t@Override\n\tpublic void buildModel(){\n\t}";
 		var buildDoors = "\n\n\t@Override\n\tpublic void buildDoors(){\n\t}";
 		var buildHorsepower = "\n\n\t@Override\n\tpublic void buildHorsepower(){\n\t}";
 		var getCar = "\n\n\t@Override\n\tpublic Car getCar(){\n\t}";

 		if(task1 && notUnlocked){

 			notUnlocked = false;

 			$("#n1").addClass("done");
			$(".locked#q1").remove();
			$("#append").append("<div class='aText'><span class='star'>&#9733;</span> You've created the class!</div>");

 			$cb.val("public class NissanMicraBuilder implements CarBuilder{"+buildDrive+buildHorsepower+buildMake+buildModel+buildDoors+getCar+"\n}");
 		}


 		if(task2 && notUnlocked2){

 			notUnlocked2 = false;

 			$("#car").addClass("done");
			$(".locked#q2").remove();
			$("#append").append("<div class='aText'><span class='star'>&#9733;</span> You've created a Car object reference!</div>");
 		}

 		if(task3 && notUnlocked3){

 			notUnlocked3 = false;

 			$("#con").addClass("done");
			$(".locked#q3").remove();
			$("#append").append("<div class='aText'><span class='star'>&#9733;</span> You've created the constructor!</div>");
 		}

 		if(task4 && notUnlocked4){

 			notUnlocked4 = false;


 			$("#n3").addClass("done");
			$(".locked#q4").remove();
			$("#append").append("<div class='aText'><span class='star'>&#9733;</span> You've finished all of the setter methods!</div>");

 		}

 		if(task5 && notUnlocked5){

 			notUnlocked5 = false;

 			$("#n4").addClass("done");
			$(".locked#q5").remove();
			$("#append").append("<div class='aText'><span class='star'>&#9733;</span> You've finished the getCar method!</div>");

 		}

 		if(notUnlocked6 && task1 && task2 && task3 && task4 && task5){

 			notUnlocked6 = false;

 			taskComplete();
 		}

 	});

}

var notUnlocked7 = true;
var notUnlocked8 = true;
var notUnlocked9 = true;
var notUnlocked10 = true;
var notUnlocked11 = true;

var checkCar = function(input){

	var reg1 = new RegExp("publicCargetCar\\(\\){returncar;}");

	return reg1.test(input);
}

var checkSetters = function(input){

	 var reg1 = new RegExp("publicvoidbuildDrive\\(\\){car.setDrive\\(\"FWD\"\\);}", "i");
	 var reg2 = new RegExp("publicvoidbuildDoors\\(\\){car.setDoors\\(3\\);}", "i");
	 var reg3 = new RegExp("publicvoidbuildMake\\(\\){car.setMake\\(\"Nissan\"\\);}", "i");
	 var reg4 = new RegExp("publicvoidbuildModel\\(\\){car.setModel\\(\"Micra\"\\);}", "i");
	 var reg5 = new RegExp("publicvoidbuildHorsepower\\(\\){car.setHorsepower\\(53\\);}", "i");


	 if(notUnlocked7 && reg1.test(input)){

	 	notUnlocked7 = false;

	 	$("#drive").addClass("done");
	 }

	 if(notUnlocked8 && reg2.test(input)){

	 	notUnlocked8 = false;

	 	$("#doors").addClass("done");
	 }

	  if(notUnlocked9 && reg3.test(input)){

	 	notUnlocked9 = false;

	 	$("#make").addClass("done");
	 }
	 
	  if(notUnlocked10 && reg4.test(input)){

	 	notUnlocked10 = false;

	 	$("#model").addClass("done");
	 }
	 
	  if(notUnlocked11 && reg5.test(input)){

	 	notUnlocked11 = false;

	 	$("#horsepower").addClass("done");
	 }
	 
	 if(reg1.test(input) && reg2.test(input) && reg3.test(input) && reg4.test(input) && reg5.test(input)){

	 	notUnlocked12 = false;

	 	return true;
	 }
	 




}

var checkConstructor = function(input){

	var reg1 = new RegExp("publicNissanMicraBuilder\\(\\){car=newCar\\(\\);}","i");

	return reg1.test(input);


}

var checkCarObj = function(input){

	var reg1 = new RegExp("privateCarcar;");

	return reg1.test(input);

}

var checkConBuild = function(input){

	var reg1 = new RegExp("publicclassNissanMicraBuilderimplementscarBuilder{}", "i");

	return reg1.test(input);
}

var stepTwo = function(){

	addSmallBoxes();
	addAch(4);

	addTopText("In this section we will build the interface for our car builder classes. See below for further instructions");
	addBottom("First create the interface, call it \"CarBuilder\". ", true);
	addBottom("Now we need to create methods that will deal with creating all the car's features that we defined in the last step. Name these \"buildAttributeName.\"");
	addBottom("The final task is to create a getter method that returns a Car object.")

	var notUnlocked = true;
	var notUnlocked2 = true;
	var notUnlocked3 = true;
	var notUnlocked4 = true;

	var $cb = $("#codeBox");
	
	$cb.on("input", function(){

		var input = $cb.val();
		input = input.replace(/ /g,'');
 		input = input.replace(/\n/g,'');
 		input = input.replace(/\s/g, "");

 		var task1 = checkInterface(input);
 		var task2 = checkBuildMethods(input);
 		var task3 = checkGetCar(input);

		
		if(task1 && notUnlocked){

			notUnlocked = false;
				
			$("#n1").addClass("done");
			$(".locked#q1").remove();
			$("#append").append("<div class='aText'><span class='star'>&#9733;</span> You've created the interface!</div>");

		}

		if(task2 && notUnlocked2){

			notUnlocked2 = false;

			$("#n2").addClass("done");
			$(".locked#q3").remove();
			$("#append").append("<div class='aText'><span class='star'>&#9733;</span> You've created all of the build methods!</div>");

		}

		if(task3 && notUnlocked3){

			notUnlocked3 = false;

			$("#n3").addClass("done");
			$(".locked#q4").remove();
			$("#append").append("<div class='aText'><span class='star'>&#9733;</span> You've created the getCar method!</div>");
		}

		if(task1 && task2 && task3 && notUnlocked4){
			notUnlocked4 = false;
			taskComplete();
		}


 	});	


}

var checkGetCar = function(input){

	var reg1 = new RegExp("publicCargetCar\\(\\);", "i");

	return reg1.test(input);

}


var notUnlocked4 = true;
var notUnlocked5 = true;
var notUnlocked6 = true;

var checkBuildMethods = function(input){

	var reg1 = new RegExp("publicvoidbuildDrive\\(\\);", "i");
	var reg2 = new RegExp("publicvoidbuildDoors\\(\\);", "i");
	var reg3 = new RegExp("publicvoidbuildMake\\(\\);", "i");
	var reg4 = new RegExp("publicvoidbuildModel\\(\\);", "i");
	var reg5 = new RegExp("publicvoidbuildHorsepower\\(\\);", "i");

	if(notUnlocked4){
		if(reg1.test(input) || reg2.test(input) ||  reg3.test(input) ||  reg4.test(input) ||  reg5.test(input)){
			
			notUnlocked4 = false;
			
			$(".locked#q2").remove();
			$("#append").append("<div class='aText'><span class='star'>&#9733;</span>You've created one of the methods!</div>");
		}
	} 

	if(notUnlocked5 && reg1.test(input) && reg2.test(input) && reg3.test(input) && reg4.test(input) && reg5.test(input) ){
		
		return true;

	}


}

var checkInterface = function(input){

	var reg1 = new RegExp("publicinterfaceCarBuilder{}", "i");

	return reg1.test(input);
}

var stepOne = function(){

	addSmallBoxes();	

	var notUnlocked = true;
	var notUnlocked2 = true;
	var notUnlocked3 = true;
	var notUnlocked4 = true;

	addAch(6);
	addTopText("In this section we will build a representation of the builder design pattern. We will demonstrate it using a car dealership. See below for further instructions.");
	addBottom("The first task is to create a class that represents a car, call this class Car.");
	addBottom("We now need to give the car attributes, for the sake of simplicity we will give it 5 different attributes. The attributes we will use are <span id='h'>horsepower(int)</span>, <span id='d'>doors(int)</span>, <span id='ma'>make(String)</span>, <span id='mo'>model(String)</span> and <span id='dr'>drive(String)</span>. Create empty strings and integers that equate to -1 to contain these attributes.");
	addBottom("Once the attributes have been created the next task is to create setter methods for each of them e.g. setMake(). Give the parameters the same name as the attribute you're setting.");
	addBottom("The last task is to create a toString method that lists the attributes of the car. It should be in the following format \"attributeName:attribute\".");

	var $cb = $("#codeBox");
	
	$cb.on("input", function(){

		var input = $cb.val();
		input = input.replace(/ /g,'');
 		input = input.replace(/\n/g,'');
 		input = input.replace(/\s/g, "") 
		
		var task1 = checkClass(input);
		var task2 = checkVar(input);
		var task3 = checkSet(input);
		var task4 = checkString(input);


		if(task1 && notUnlocked){
			notUnlocked = false;

			$("#n1").addClass("done");
			$(".locked#q1").remove();
			$("#append").append("<div class='aText'><span class='star'>&#9733;</span> You've created a class!</div>");

		}

		if(task2 && notUnlocked2){

			notUnlocked2 = false;

			$("#n2").addClass("done");
			$(".locked#q2").remove();
			$("#append").append("<div class='aText'><span class='star'>&#9733;</span>You've created all of the attributes!</div>");
		}

		if(task3 && notUnlocked3){

			notUnlocked3 = false;

			$("#n3").addClass("done");
			$(".locked#q3").remove();
			$("#append").append("<div class='aText'><span class='star'>&#9733;</span>You've created all of the setter methods!</div>");
		}

		if(task4 && notUnlocked4){

			notUnlocked4 = false;

			$("#n4").addClass("done");
			$(".locked#q6").remove();
			$("#append").append("<div class='aText'><span class='star'>&#9733;</span>The toString method is complete!</div>");

			taskComplete();

		}


	
		
	});
}

var notUnlocked = true;
var notUnlocked2 = true;
var notUnlocked3 = true;
var notUnlocked4 = true;

var checkString = function(input){

	var reg1 = new RegExp("publicStringtoString\\(\\){}", "i");
	var reg2 = new RegExp("\"horsepower:\"\\+horsepower", "i");
	var reg3 = new RegExp("\"drive:\"\\+drive", "i");
	var reg4 = new RegExp("\"doors:\"\\+doors", "i");
	var reg5 = new RegExp("\"make:\"\\+make", "i");
	var reg6 = new RegExp("\"model:\"\\+model", "i");

	var pluses = input.split("\+").length - 1;

	if(reg1.test(input) && notUnlocked2){

		notUnlocked2 = false;
		$(".locked#q4").remove();
		$("#append").append("<div class='aText'><span class='star'>&#9733;</span>You've created the toString method!</div>");
	}
	if(notUnlocked3){
		if(reg2.test(input) || reg3.test(input) ||  reg4.test(input) ||  reg5.test(input) ||  reg6.test(input)){
			notUnlocked3 = false;
			$(".locked#q5").remove();
			$("#append").append("<div class='aText'><span class='star'>&#9733;</span>You've created one of the toString outputs!</div>");
		}
	} 
	if(reg2.test(input) && reg3.test(input) && reg4.test(input) && reg5.test(input) && reg6.test(input) && pluses === 9){
		return true;
	}		
}

var checkSet = function(input){


	var reg1 = new RegExp("publicvoidsetModel\\(Stringmodel\\){this.model=model;}", "i");
	var reg2 = new RegExp("publicvoidsetMake\\(Stringmake\\){this.make=make;}", "i");
	var reg3 = new RegExp("publicvoidsetDrive\\(Stringdrive\\){this.drive=drive;}", "i");
	var reg4 = new RegExp("publicvoidsetHorsepower\\(inthorsepower\\){this.horsepower=horsepower;}", "i");
	var reg5 = new RegExp("publicvoidsetDoors\\(intdoors\\){this.doors=doors;}", "i");
	
	if(notUnlocked){
		if (reg1.test(input) || reg2.test(input) || reg3.test(input) || reg4.test(input) || reg5.test(input)){

			notUnlocked = false;
			$(".locked#q3").remove();
			$("#append").append("<div class='aText'><span class='star'>&#9733;</span>You've created one of the setters!</div>");
		}
	}

	if (reg1.test(input) && reg2.test(input) && reg3.test(input) && reg4.test(input) && reg5.test(input)){
		return true;
	}

}

var checkVar = function(input){

	var reg1 = new RegExp("privateStringmake=\"\";", "i");
	var reg2 = new RegExp("privateStringmodel=\"\";", "i");
	var reg3 = new RegExp("privateStringdrive=\"\";", "i");
	var reg4 = new RegExp("privateinthorsepower=-1;", "i");
	var reg5 = new RegExp("privateintdoors=-1;", "i");

	if(reg1.test(input)){

		$("#ma").addClass("done");
	}

	if(reg2.test(input)){

		$("#mo").addClass("done");
	}

	if(reg3.test(input)){

		$("#dr").addClass("done");
	}
	
	if(reg4.test(input)){

		$("#h").addClass("done");
	}

	if(reg5.test(input)){

		$("#d").addClass("done");
	}

	if(reg1.test(input) && reg3.test(input) && reg3.test(input) && reg4.test(input) && reg5.test(input)){

		return true;
	}


}

var checkClass = function(input){

	var reg1 = new RegExp("publicclassCar{}", "i");

	return reg1.test(input);

}

var bottomCount = 1;

var addBottom = function(add, resetBottom){

	if(resetBottom){
		bottomCount=1;
	}

	$('.moreHelp').append("<li id=n" + bottomCount + ">" + add + "</li>");

	bottomCount++;

}

var addTopText = function(text){
	$("#info-text").empty();
	$("#info-text").append("<div id='typing'>" + text + "</div>");
}


var textTab = function(){

	 	
	 	//allows tabbing in text boxes. However you can't use tab to navigate the site.
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


var addAch = function(numberOfAchs){

	$("#achText").append("<div id='append'></div>");

	for(var i = 1; numberOfAchs >= i; i++){

		$("#achText").append("<div class='locked' id='q" + i + "'>This achievement is locked</div>");


	}
}

var lessonStep = 0;

var taskComplete = function(){

	$("#achText").append("<div class ='aText'><button class='cont'>Continue</button></div>");
	
	$(".cont").on("click", function(e){

		var text = $("#codeBox").val();
		console.log(text);
	
		$("#achText").empty();
		$("#codeBox").val("");
		$("#info-text").empty();
		$(".moreHelp").empty();


		textContent.push(text);

		lessonStep++;

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

//adds the code boxes
var addSmallBoxes = function(){

	$("#leftBoxes").empty();
	$("#rightBoxes").empty();

	var count = 0;

	for(var i = 0; i < textContent.length; i ++){
		count++;
		

		if(count%2 === 1){
			$("#leftBoxes").append("<textarea class=\"smalltextbox\" id='smalltextbox"+i+"' readonly></textarea>");

			$("#smalltextbox"+i).val(textContent[i]);

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

			$("#smalltextbox"+i).val(textContent[i]);

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

var slideCount = 1;

//deals with presenting the lecture slides
var lecture = function(){

	slideOne();

	$(".next").on("click", function(e){

		slideCount++;

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

var slideOne = function(){

	$(".previous").prop("disabled", true);
	$(".next").prop("disabled", false);

	$(".lectureContent").empty();

	var head = "<h1>Builder</h1>";
	var line1 = "<h3>Builder is one of the creational Design Patterns</h3>";
	var line2 = "<h2>Why is Builder needed?</h2>";
	var line3 = "<li class = 'slideOne'>Creating complex objects that enable polymorphism requires increasing amounts of constructors</li>";
	var line4 = "<li class = 'slideOne'>With increasing representations, the constructor list becomes exponential</li></br>";
	var line5 = "<li class = 'slideOne'>The complex object's creation logic should be encapsulated</li><br/>";
	var line6 = "<li class = 'slideOne'>Often complex object's should only be referenced in their complete state</li>";
	var line7 = "<li class = 'slideOne final'>Builder solves these problems by intialising each parameter step by step <br/> and returning the complex object.</li>";


	$(".lectureContent").append(head + line1 + line2 + line3 + line4+ line5 + line6 + line7);
}

var slideTwo = function(){

	$(".previous").prop("disabled", false);
	$(".next").prop("disabled", false);

	$(".lectureContent").empty();

	var head = "<h1>Builder</h1>";
	var line1 = "<h2>The Structure of Builder</h2>";
	var line2 = "<img class='builderImg'src='img/builder.jpg' alt='Builder UML'/>";

	$(".lectureContent").append(head +line1 + line2);
}


var slideThree = function(){

	$(".previous").prop("disabled", false);
	$(".next").prop("disabled", false);

	$(".lectureContent").empty();

	var head = "<h1>Builder</h1>";
	var line1 = "<h2>The Structure of Builder - Key Points</h2>";
	var line2 = "<li class='slideThree'>There are two key objects: Director and Builder</li>";
	var line3 = "<li class='slideThree'>The director interacts with the builder to guide the creation of a product.</li>";
	var line4 = "<li class='slideThree'>The client creates the Director and a <u>specific builder</u></li>";
	var line5 = "<li class='slideThree'>The client asks the Director to create the product using a specific builder</li>";
	var line6 = "<li class='slideThree'>The client receives the finished complex object from the builder</li>";

	$(".lectureContent").append(head +line1 + line2 + line3 + line4 + line5 +line6);
}

var slideFour = function(){

	$(".previous").prop("disabled", false);
	$(".next").prop("disabled", false);

	$(".lectureContent").empty();

	var head = "<h1>Builder</h1>";
	var line1 = "<h2>Participants of the Builder Pattern<h2/>";
	var line2 = "<h3>Director</h3>";
	var line3 = "<li>Has a reference to a builder</li>";
	var line4 = "<li>Contains the instructions to order a construction of an object</li>";
	var line5 = "<h3>Builder</h3>";
	var line6 = "<li>Defines an interface for creating a representation of a complex object</li>";
	var line7 = "<h3>Concrete Builder</h3>"
	var line8 = "<li>Contains the instructions for building a complex object</li>";
	var line9 = "<li>Returns the complex object</li>";
	var line10 = "<h3>Product</h3>";
	var line11 = "<li>The complete complex object</li>";


	$(".lectureContent").append(head +line1 + line2 + line3 + line4 + line5 +line6 + line7 + line8 + line9 + line10 + line11);
}

var slideFive = function(){

	$(".previous").prop("disabled", false);
	$(".next").prop("disabled", false);

	$(".lectureContent").empty();

	var head = "<h1>Builder</h1>";
	var line1 = "<h2>Example of the Builder Design Pattern</h2>";
	var line2 = "<img src='img/builderExample.png' alt='Example of the Builder Design Pattern'/>";
	var line3 = "<li>The client orders a meal through the director and then the client gets the completed meal.</li>";

	$(".lectureContent").append(head + line1 + line2 + line3);
}

var slideSix = function(){

	$(".previous").prop("disabled", false);
	$(".next").prop("disabled", true);

	$(".lectureContent").empty();

	var head = "<h1>Observer</h1>";
	var line1 = "<h2>When to use the Builder Design Pattern</h2>";
	var line2 = "<li class='slideSix'>When the algorithm for creating a complex object should be independent of theparts that make up the object and how they’re assembled.</li> <li class='slideSix'>The construction process must allow different representations for the object that’s constructed</li>";
	var line3 = " <a href='olecture.html'><div class='stepBox'>Observer</div></a>";
    var line4 =  "<a href='blecture.html'><div class='stepBox'>Builder</div></a>";
	
	$(".lectureContent").append(head + line1 + line2 + line3 + line4);
}
$(document).ready(main);