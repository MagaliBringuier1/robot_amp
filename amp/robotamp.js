define(['pipAPI', 'https://magalibringuier1.github.io/robot_amp/amp/qamp.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	
	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'low human likeness robots',  //Will be used in the user feedback 
				nameForLogging : 'low human likeness robots', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				{image : 'l1.jpg'},
 				{image : 'l2.jpg'},
 				{image : 'l3.jpg'},
 				{image : 'l4.jpg'},
 				{image : 'l5.jpg'},
 				{image : 'l6.jpg'},
 				{image : 'l7.jpg'},
 				{image : 'l8.jpg'},
 				{image : 'l9.jpg'},
 				{image : 'l10.jpg'},
 				{image : 'l11.jpg'},
 				{image : 'l12.jpg'},
 				{image : 'l13.jpg'},
 				{image : 'l14.jpg'},
 				{image : 'l15.jpg'},
 				{image : 'l16.jpg'},
 				{image : 'l17.jpg'},
 				{image : 'l18.jpg'},
 				{image : 'l19.jpg'},
 				{image : 'l20.jpg'},
 				{image : 'l21.jpg'},
 				{image : 'l22.jpg'},
 				{image : 'l23.jpg'},
 				{image : 'l24.jpg'},
 				{image : 'l25.jpg'},
 				{image : 'l26.jpg'},
 				{image : 'l27.jpg'},
 				{image : 'l28.jpg'},
 				{image : 'l29.jpg'},
 				{image : 'l30.jpg'}]

			}, 
			{
				nameForFeedback : 'high human likeness robots',  //Will be used in the user feedback 
				nameForLogging : 'high human likeness robots', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
 				{image : 'h1.jpg'},
 				{image : 'h2.jpg'},
 				{image : 'h3.jpg'},
 				{image : 'h4.jpg'},
 				{image : 'h5.jpg'},
 				{image : 'h6.jpg'},
 				{image : 'h7.jpg'},
 				{image : 'h8.jpg'},
 				{image : 'h9.jpg'},
 				{image : 'h10.jpg'},
 				{image : 'h11.jpg'},
 				{image : 'h12.jpg'},
 				{image : 'h13.jpg'},
 				{image : 'h14.jpg'},
 				{image : 'h15.jpg'},
 				{image : 'h16.jpg'},
 				{image : 'h17.jpg'},
 				{image : 'h18.jpg'},
 				{image : 'h19.jpg'},
 				{image : 'h20.jpg'},
 				{image : 'h21.jpg'},
 				{image : 'h22.jpg'},
 				{image : 'h23.jpg'},
 				{image : 'h24.jpg'},
 				{image : 'h25.jpg'},
 				{image : 'h26.jpg'},
 				{image : 'h27.jpg'},
 				{image : 'h28.jpg'},
 				{image : 'h29.jpg'},
 				{image : 'h30.jpg'}]
			}
		],
		responses : 7, 

		ITI : 750, //Duration between trials.

		examplePrimeStimulus : 
		{
			nameForLogging : 'examplePrime', //Will be used in the logging
			//An array of all media objects for this category.
			mediaArray : [{image : 'tl1.jpg'}, {image : 'tl2.jpg'}, {image : 'th1.jpg'}, {image : 'th2.jpg'}]
		},

		base_url : {//Where are your images at?
			image : 'https://magalibringuier1.github.io/robot_amp/amp/images'
		}
	});
});
