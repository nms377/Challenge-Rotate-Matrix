const Direction = require("./Direction").Direction;

/*  MatrixRotator(matrix)
 *
 *  @param matrix                        a multidimensional array containing the matrix
 *
 *  @public property matrix              the matrix
 *
 *  @public method rotate(direction)     direction is either
 *                                       Direction.CW or Direction.CWW
 *        @returns the rotated matrix
 */
module.exports = class MatrixRotator {
  constructor( matrix ) {
    this.matrix = matrix;
  }

  //      |-- Must be Direction.CW
  //      v        or Direction.CCW
  rotate (direction) {
    // do work here

    // must be a valid Direction, see Direction.js

   //  var arrOne = [];
   //  var arrTwo = [];
   //  var arrThree = [];
   //  var arrFour = [];
   //  var arrFive = [];
   //  var bigArr2 = [];

			// if (direction === Direction.CW){	    
		 //    for (var i = 0; i < this.matrix.length; i++) {
		 //    	for (var f = 0; f < this.matrix[i].length; f++){

		 //    		if(f===0){

		 //    			arrOne.unshift(this.matrix[i][f]);
		 //    		}

		 //    		if(f===1){
		 //    			arrTwo.unshift(this.matrix[i][f]);
		 //    		}

		 //    		if(f===2){
		 //    			arrThree.unshift(this.matrix[i][f]);
		 //    		}
		    		
		 //    		if(f===3){
		 //    			arrFour.unshift(this.matrix[i][f]);
		 //    		}

		 //    		if(f===4){
		 //    			arrFive.unshift(this.matrix[i][f]);
		 //    		}
		 //    	}
		 //    }

		 //    bigArr2.unshift(arrFive);
		 //    bigArr2.unshift(arrFour);
		 //    bigArr2.unshift(arrThree);
		 //    bigArr2.unshift(arrTwo);
		 //    bigArr2.unshift(arrOne);

		 //    this.matrix = bigArr2;
	  //   }

			// if (direction === Direction.CCW){	    
		 //    for (var i = 0; i < this.matrix.length; i++) {
		 //    	for (var f = 0; f < this.matrix[i].length; f++){

		 //    		if(f===0){

		 //    			arrOne.push(this.matrix[i][f]);
		 //    		}

		 //    		if(f===1){
		 //    			arrTwo.push(this.matrix[i][f]);
		 //    		}

		 //    		if(f===2){
		 //    			arrThree.push(this.matrix[i][f]);
		 //    		}
		    		
		 //    		if(f===3){
		 //    			arrFour.push(this.matrix[i][f]);
		 //    		}

		 //    		if(f===4){
		 //    			arrFive.push(this.matrix[i][f]);
		 //    		}
		 //    	}
		 //    }

		 //    bigArr2.push(arrFive);
		 //    bigArr2.push(arrFour);
		 //    bigArr2.push(arrThree);
		 //    bigArr2.push(arrTwo);
		 //    bigArr2.push(arrOne);

		 //    this.matrix = bigArr2;
	  //   }

		  if(direction === Direction.CW){
		  	let newMatrix = [];

		  	for (var i=0; i < this.matrix.length; i++){
		  		let newRow = [];
		  		for (var j=0; j < this.matrix[i].length; j++){
		  			newRow.unshift(this.matrix[j][i]);
		  		}
		  		newMatrix.push(newRow);
		  	}
		  	this.matrix = newMatrix;
		  }

		  if(direction === Direction.CCW){
		  	let newMatrix = [];

		  	for (var i=0; i < this.matrix.length; i++){
		  		let newRow = [];
		  		for(var j=0; j < this.matrix[i].length; j++){
		  			newRow.push(this.matrix[j][i]);
		  		}
		  		newMatrix.unshift(newRow);
		  	}
		  	this.matrix = newMatrix;
		  }

	  }
	 }
